/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {setGlobalOptions} from "firebase-functions/v2";
import {onDocumentWritten} from "firebase-functions/v2/firestore";
import {defineSecret, defineString} from "firebase-functions/params";
import * as logger from "firebase-functions/logger";
import {initializeApp} from "firebase-admin/app";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({maxInstances: 10});

initializeApp();

const oneSignalRestApiKey = defineSecret("ONE_SIGNAL_REST_API_KEY");
const oneSignalAppId = defineString("ONE_SIGNAL_APP_ID", {
  default: "2437c465-7188-435b-9672-8261548ba2f0",
});
const appBaseUrl = defineString("APP_BASE_URL", {
  default: "http://localhost:5173",
});

interface LogbookDocument {
  patientId?: string;
  patientName?: string;
  name?: string;
  code?: string;
  updatedBy?: string;
}

function logbookMessage(logbook: LogbookDocument) {
  const item = logbook.name || logbook.code || "A logbook entry";
  if (logbook.updatedBy) {
    return `${item} was updated by ${logbook.updatedBy}.`;
  }
  return `${item} was updated.`;
}

async function sendLogbookUpdateNotification(
  patientId: string,
  logbook: LogbookDocument,
) {
  const payload = {
    app_id: oneSignalAppId.value(),
    filters: [
      {field: "tag", key: "role", relation: "=", value: "clinician"},
      {operator: "AND"},
      {
        field: "tag",
        key: "logbook_updates",
        relation: "=",
        value: "enabled",
      },
    ],
    headings: {en: "Logbook updated"},
    contents: {en: logbookMessage(logbook)},
    url: `${appBaseUrl.value()}/patients/${patientId}`,
    data: {
      type: "logbook_update",
      patientId,
      patientName: logbook.patientName || "Patient",
    },
  };

  const response = await fetch("https://onesignal.com/api/v1/notifications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Basic ${oneSignalRestApiKey.value()}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`OneSignal notification failed: ${errorBody}`);
  }
}

export const notifyCliniciansOnPatientLogbookWrite = onDocumentWritten(
  {
    document: "patients/{patientId}/logbook/{entryId}",
    region: "australia-southeast1",
    secrets: [oneSignalRestApiKey],
  },
  async event => {
    const after = event.data?.after;
    if (!after?.exists) {
      return;
    }

    const logbook = after.data() as LogbookDocument;
    const patientId = event.params.patientId || logbook.patientId;
    if (!patientId) {
      logger.warn("Skipped logbook notification without patient id", {
        entryId: event.params.entryId,
      });
      return;
    }

    await sendLogbookUpdateNotification(patientId, logbook);
  },
);

export const notifyCliniciansOnTopLevelLogbookWrite = onDocumentWritten(
  {
    document: "logbooks/{entryId}",
    region: "australia-southeast1",
    secrets: [oneSignalRestApiKey],
  },
  async event => {
    const after = event.data?.after;
    if (!after?.exists) {
      return;
    }

    const logbook = after.data() as LogbookDocument;
    if (!logbook.patientId) {
      logger.warn("Skipped top-level logbook notification without patient id", {
        entryId: event.params.entryId,
      });
      return;
    }

    await sendLogbookUpdateNotification(logbook.patientId, logbook);
  },
);
