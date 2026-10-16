import { listPatientLogbookHistory, type ListPatientLogbookHistoryData } from '@mbh/dataconnect';
import { QueryFetchPolicy } from 'firebase/data-connect';
import { getBlob, ref } from 'firebase/storage';

import { storage } from '../firebase/client';

type Logbook = ListPatientLogbookHistoryData['logbookEntries'][number];
export type PatientDocument = Logbook['logbookEntryFiles_on_logbookEntry'][number]['file'];

const PAGE_SIZE = 30;
const MAX_DOCUMENT_BYTES = 20 * 1024 * 1024;
const DAY_MS = 24 * 60 * 60 * 1000;

export async function fetchPatientDocuments(patientPid: string, signal?: AbortSignal) {
  if (
    !/^(?:[\da-f]{32}|[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12})$/i.test(patientPid)
  ) {
    throw new Error('Invalid patient ID.');
  }

  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const endTime = new Date(today.getTime() + DAY_MS).toISOString();
  const startTime = new Date(today.getTime() - 29 * DAY_MS).toISOString();

  const files = new Map<string, PatientDocument>();

  let offset = 0;
  let count: number;

  do {
    signal?.throwIfAborted();

    const result = await listPatientLogbookHistory(
      { patientPid, startTime, endTime, limit: PAGE_SIZE, offset },
      { fetchPolicy: QueryFetchPolicy.SERVER_ONLY },
    );

    signal?.throwIfAborted();

    const entries = result.data.logbookEntries;

    for (const entry of entries) {
      for (const { file } of entry.logbookEntryFiles_on_logbookEntry) {
        files.set(file.id, file);
      }
    }

    count = entries.length;
    offset += count;
  } while (count === PAGE_SIZE);

  return [...files.values()].sort(
    (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt) || a.id.localeCompare(b.id),
  );
}

export async function fetchDocumentBlob(file: PatientDocument): Promise<Blob> {
  if (
    !/^logbook_uploads\/[^/]+\/[^/]+\/[^/]+$/.test(file.storagePath) ||
    file.storagePath.split('/').some(part => part === '.' || part === '..')
  ) {
    throw new Error('Invalid document storage path.');
  }

  if (file.fileSizeBytes > MAX_DOCUMENT_BYTES) {
    throw new Error('max-download-size exceeded');
  }

  const blob = await getBlob(ref(storage, file.storagePath), MAX_DOCUMENT_BYTES + 1);

  if (blob.size > MAX_DOCUMENT_BYTES) {
    throw new Error('max-download-size exceeded');
  }

  return blob;
}

export function saveDocumentBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download =
    name
      .replace(/[\\/]/g, '_')
      .replace(/\p{Cc}/gu, '_')
      .trim() || 'document';

  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function formatDocumentSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) {
    return 'Unknown';
  }

  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function documentErrorMessage(error: unknown, download = false): string {
  const details =
    error && typeof error === 'object'
      ? `${'code' in error ? error.code : ''} ${'message' in error ? error.message : ''}`
      : '';

  if (/object-not-found/i.test(details)) {
    return 'This file is no longer in Storage.';
  }

  if (/unauthenticated|unauthorized|permission.denied|not.authorized/i.test(details)) {
    return download
      ? 'Download access was denied. Check staff Storage permissions and your sign-in.'
      : 'Documents require a Firebase sign-in with clinician or nurse access.';
  }

  if (/max.download.size/i.test(details)) {
    return 'This file exceeds the 20 MB download limit.';
  }

  if (/invalid.document.storage.path/i.test(details)) {
    return 'This document has an invalid Storage path.';
  }

  if (/invalid.patient.id/i.test(details)) {
    return 'This patient link has an invalid ID.';
  }

  return download
    ? 'Could not download this file. Check Storage access, CORS and your connection.'
    : 'Could not load documents. Check your connection and reload.';
}
