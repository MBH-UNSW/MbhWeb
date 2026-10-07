# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `ubhsdk`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetActiveAppointmentsByPatient*](#getactiveappointmentsbypatient)
  - [*GetAllAppointmentsByPatient*](#getallappointmentsbypatient)
  - [*GetActiveAppointmentsByClinician*](#getactiveappointmentsbyclinician)
  - [*GetAllAppointmentsByClinician*](#getallappointmentsbyclinician)
  - [*GetHeart*](#getheart)
  - [*ListHeartsByPatient*](#listheartsbypatient)
  - [*GetLogbookEntry*](#getlogbookentry)
  - [*ListLogBookEntriesByPatient*](#listlogbookentriesbypatient)
  - [*GetPatientLogbookFileMetadata*](#getpatientlogbookfilemetadata)
  - [*ListPatientLogbookEntries*](#listpatientlogbookentries)
  - [*GeneratePatientSummaryReport*](#generatepatientsummaryreport)
  - [*ListAlerts*](#listalerts)
  - [*ListUnresolvedAlerts*](#listunresolvedalerts)
  - [*ListHighSeverityAlerts*](#listhighseverityalerts)
  - [*ListAlertsBySensorId*](#listalertsbysensorid)
  - [*ListAlertReadings*](#listalertreadings)
  - [*ListAlertReadingsByAlertId*](#listalertreadingsbyalertid)
  - [*ListAlertReadingsBySensorId*](#listalertreadingsbysensorid)
  - [*ListReadingHistory*](#listreadinghistory)
  - [*ListReadingHistoryBySensorId*](#listreadinghistorybysensorid)
  - [*ListReadingHistoryForWindow*](#listreadinghistoryforwindow)
  - [*GetSensor*](#getsensor)
  - [*ListSensors*](#listsensors)
  - [*ListActiveSensors*](#listactivesensors)
  - [*ListSensorsByType*](#listsensorsbytype)
  - [*ListSensorByHeart*](#listsensorbyheart)
  - [*GetSensorLive*](#getsensorlive)
  - [*ListSensorLive*](#listsensorlive)
  - [*ListSensorLiveBySensorId*](#listsensorlivebysensorid)
  - [*GetClinician*](#getclinician)
  - [*ListClinicians*](#listclinicians)
  - [*GetPatient*](#getpatient)
  - [*ListPatients*](#listpatients)
  - [*PatientCountByStatus*](#patientcountbystatus)
  - [*ListPatientsByStatus*](#listpatientsbystatus)
  - [*ListPatientsByStatuses*](#listpatientsbystatuses)
- [**Mutations**](#mutations)
  - [*CreateAppointment*](#createappointment)
  - [*EditAppointment*](#editappointment)
  - [*CancelAppointment*](#cancelappointment)
  - [*CreateHeart*](#createheart)
  - [*CreateLogbookEntry*](#createlogbookentry)
  - [*CreateFile*](#createfile)
  - [*AttachFileToLogbookEntry*](#attachfiletologbookentry)
  - [*CreateLogbookFileMetadata*](#createlogbookfilemetadata)
  - [*CreateSensor*](#createsensor)
  - [*UpdateSensor*](#updatesensor)
  - [*DeleteSensor*](#deletesensor)
  - [*UpdateSensorLive*](#updatesensorlive)
  - [*DeleteSensorLive*](#deletesensorlive)
  - [*CreateClinician*](#createclinician)
  - [*UpdateClinician*](#updateclinician)
  - [*DeactivateClinician*](#deactivateclinician)
  - [*CreatePatient*](#createpatient)
  - [*UpdatePatient*](#updatepatient)
  - [*UpdatePatientStatus*](#updatepatientstatus)
  - [*DeletePatient*](#deletepatient)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `ubhsdk`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@mbh/dataconnect` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@mbh/dataconnect';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@mbh/dataconnect';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `ubhsdk` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetActiveAppointmentsByPatient
You can execute the `GetActiveAppointmentsByPatient` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
getActiveAppointmentsByPatient(vars: GetActiveAppointmentsByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<GetActiveAppointmentsByPatientData, GetActiveAppointmentsByPatientVariables>;

interface GetActiveAppointmentsByPatientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetActiveAppointmentsByPatientVariables): QueryRef<GetActiveAppointmentsByPatientData, GetActiveAppointmentsByPatientVariables>;
}
export const getActiveAppointmentsByPatientRef: GetActiveAppointmentsByPatientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getActiveAppointmentsByPatient(dc: DataConnect, vars: GetActiveAppointmentsByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<GetActiveAppointmentsByPatientData, GetActiveAppointmentsByPatientVariables>;

interface GetActiveAppointmentsByPatientRef {
  ...
  (dc: DataConnect, vars: GetActiveAppointmentsByPatientVariables): QueryRef<GetActiveAppointmentsByPatientData, GetActiveAppointmentsByPatientVariables>;
}
export const getActiveAppointmentsByPatientRef: GetActiveAppointmentsByPatientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getActiveAppointmentsByPatientRef:
```typescript
const name = getActiveAppointmentsByPatientRef.operationName;
console.log(name);
```

### Variables
The `GetActiveAppointmentsByPatient` query requires an argument of type `GetActiveAppointmentsByPatientVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetActiveAppointmentsByPatientVariables {
  patientPid: UUIDString;
}
```
### Return Type
Recall that executing the `GetActiveAppointmentsByPatient` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetActiveAppointmentsByPatientData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetActiveAppointmentsByPatientData {
  appointments: ({
    id: UUIDString;
    scheduledAt: TimestampString;
    appointmentReason: string;
    status: AppointmentStatus;
    createdAt: TimestampString;
    updatedAt?: TimestampString | null;
    patient: {
      pid: UUIDString;
      firstName: string;
      lastName: string;
      email: string;
    } & Patient_Key;
    clinician: {
      cid: UUIDString;
      firstName: string;
      lastName: string;
      email: string;
    } & Clinician_Key;
  } & Appointment_Key)[];
}
```
### Using `GetActiveAppointmentsByPatient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getActiveAppointmentsByPatient, GetActiveAppointmentsByPatientVariables } from '@mbh/dataconnect';

// The `GetActiveAppointmentsByPatient` query requires an argument of type `GetActiveAppointmentsByPatientVariables`:
const getActiveAppointmentsByPatientVars: GetActiveAppointmentsByPatientVariables = {
  patientPid: ..., 
};

// Call the `getActiveAppointmentsByPatient()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getActiveAppointmentsByPatient(getActiveAppointmentsByPatientVars);
// Variables can be defined inline as well.
const { data } = await getActiveAppointmentsByPatient({ patientPid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getActiveAppointmentsByPatient(dataConnect, getActiveAppointmentsByPatientVars);

console.log(data.appointments);

// Or, you can use the `Promise` API.
getActiveAppointmentsByPatient(getActiveAppointmentsByPatientVars).then((response) => {
  const data = response.data;
  console.log(data.appointments);
});
```

### Using `GetActiveAppointmentsByPatient`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getActiveAppointmentsByPatientRef, GetActiveAppointmentsByPatientVariables } from '@mbh/dataconnect';

// The `GetActiveAppointmentsByPatient` query requires an argument of type `GetActiveAppointmentsByPatientVariables`:
const getActiveAppointmentsByPatientVars: GetActiveAppointmentsByPatientVariables = {
  patientPid: ..., 
};

// Call the `getActiveAppointmentsByPatientRef()` function to get a reference to the query.
const ref = getActiveAppointmentsByPatientRef(getActiveAppointmentsByPatientVars);
// Variables can be defined inline as well.
const ref = getActiveAppointmentsByPatientRef({ patientPid: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getActiveAppointmentsByPatientRef(dataConnect, getActiveAppointmentsByPatientVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.appointments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.appointments);
});
```

## GetAllAppointmentsByPatient
You can execute the `GetAllAppointmentsByPatient` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
getAllAppointmentsByPatient(vars: GetAllAppointmentsByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllAppointmentsByPatientData, GetAllAppointmentsByPatientVariables>;

interface GetAllAppointmentsByPatientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAllAppointmentsByPatientVariables): QueryRef<GetAllAppointmentsByPatientData, GetAllAppointmentsByPatientVariables>;
}
export const getAllAppointmentsByPatientRef: GetAllAppointmentsByPatientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllAppointmentsByPatient(dc: DataConnect, vars: GetAllAppointmentsByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllAppointmentsByPatientData, GetAllAppointmentsByPatientVariables>;

interface GetAllAppointmentsByPatientRef {
  ...
  (dc: DataConnect, vars: GetAllAppointmentsByPatientVariables): QueryRef<GetAllAppointmentsByPatientData, GetAllAppointmentsByPatientVariables>;
}
export const getAllAppointmentsByPatientRef: GetAllAppointmentsByPatientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllAppointmentsByPatientRef:
```typescript
const name = getAllAppointmentsByPatientRef.operationName;
console.log(name);
```

### Variables
The `GetAllAppointmentsByPatient` query requires an argument of type `GetAllAppointmentsByPatientVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAllAppointmentsByPatientVariables {
  patientPid: UUIDString;
}
```
### Return Type
Recall that executing the `GetAllAppointmentsByPatient` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllAppointmentsByPatientData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAllAppointmentsByPatientData {
  appointments: ({
    id: UUIDString;
    scheduledAt: TimestampString;
    appointmentReason: string;
    status: AppointmentStatus;
    createdAt: TimestampString;
    updatedAt?: TimestampString | null;
    patient: {
      pid: UUIDString;
      firstName: string;
      lastName: string;
      email: string;
    } & Patient_Key;
    clinician: {
      cid: UUIDString;
      firstName: string;
      lastName: string;
      email: string;
    } & Clinician_Key;
  } & Appointment_Key)[];
}
```
### Using `GetAllAppointmentsByPatient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllAppointmentsByPatient, GetAllAppointmentsByPatientVariables } from '@mbh/dataconnect';

// The `GetAllAppointmentsByPatient` query requires an argument of type `GetAllAppointmentsByPatientVariables`:
const getAllAppointmentsByPatientVars: GetAllAppointmentsByPatientVariables = {
  patientPid: ..., 
};

// Call the `getAllAppointmentsByPatient()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllAppointmentsByPatient(getAllAppointmentsByPatientVars);
// Variables can be defined inline as well.
const { data } = await getAllAppointmentsByPatient({ patientPid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllAppointmentsByPatient(dataConnect, getAllAppointmentsByPatientVars);

console.log(data.appointments);

// Or, you can use the `Promise` API.
getAllAppointmentsByPatient(getAllAppointmentsByPatientVars).then((response) => {
  const data = response.data;
  console.log(data.appointments);
});
```

### Using `GetAllAppointmentsByPatient`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllAppointmentsByPatientRef, GetAllAppointmentsByPatientVariables } from '@mbh/dataconnect';

// The `GetAllAppointmentsByPatient` query requires an argument of type `GetAllAppointmentsByPatientVariables`:
const getAllAppointmentsByPatientVars: GetAllAppointmentsByPatientVariables = {
  patientPid: ..., 
};

// Call the `getAllAppointmentsByPatientRef()` function to get a reference to the query.
const ref = getAllAppointmentsByPatientRef(getAllAppointmentsByPatientVars);
// Variables can be defined inline as well.
const ref = getAllAppointmentsByPatientRef({ patientPid: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllAppointmentsByPatientRef(dataConnect, getAllAppointmentsByPatientVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.appointments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.appointments);
});
```

## GetActiveAppointmentsByClinician
You can execute the `GetActiveAppointmentsByClinician` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
getActiveAppointmentsByClinician(vars: GetActiveAppointmentsByClinicianVariables, options?: ExecuteQueryOptions): QueryPromise<GetActiveAppointmentsByClinicianData, GetActiveAppointmentsByClinicianVariables>;

interface GetActiveAppointmentsByClinicianRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetActiveAppointmentsByClinicianVariables): QueryRef<GetActiveAppointmentsByClinicianData, GetActiveAppointmentsByClinicianVariables>;
}
export const getActiveAppointmentsByClinicianRef: GetActiveAppointmentsByClinicianRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getActiveAppointmentsByClinician(dc: DataConnect, vars: GetActiveAppointmentsByClinicianVariables, options?: ExecuteQueryOptions): QueryPromise<GetActiveAppointmentsByClinicianData, GetActiveAppointmentsByClinicianVariables>;

interface GetActiveAppointmentsByClinicianRef {
  ...
  (dc: DataConnect, vars: GetActiveAppointmentsByClinicianVariables): QueryRef<GetActiveAppointmentsByClinicianData, GetActiveAppointmentsByClinicianVariables>;
}
export const getActiveAppointmentsByClinicianRef: GetActiveAppointmentsByClinicianRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getActiveAppointmentsByClinicianRef:
```typescript
const name = getActiveAppointmentsByClinicianRef.operationName;
console.log(name);
```

### Variables
The `GetActiveAppointmentsByClinician` query requires an argument of type `GetActiveAppointmentsByClinicianVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetActiveAppointmentsByClinicianVariables {
  clinicianCid: UUIDString;
}
```
### Return Type
Recall that executing the `GetActiveAppointmentsByClinician` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetActiveAppointmentsByClinicianData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetActiveAppointmentsByClinicianData {
  appointments: ({
    id: UUIDString;
    scheduledAt: TimestampString;
    appointmentReason: string;
    appointmentNotes?: string | null;
    status: AppointmentStatus;
    createdAt: TimestampString;
    updatedAt?: TimestampString | null;
    patient: {
      pid: UUIDString;
      firstName: string;
      lastName: string;
      email: string;
    } & Patient_Key;
    clinician: {
      cid: UUIDString;
      firstName: string;
      lastName: string;
      email: string;
    } & Clinician_Key;
  } & Appointment_Key)[];
}
```
### Using `GetActiveAppointmentsByClinician`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getActiveAppointmentsByClinician, GetActiveAppointmentsByClinicianVariables } from '@mbh/dataconnect';

// The `GetActiveAppointmentsByClinician` query requires an argument of type `GetActiveAppointmentsByClinicianVariables`:
const getActiveAppointmentsByClinicianVars: GetActiveAppointmentsByClinicianVariables = {
  clinicianCid: ..., 
};

// Call the `getActiveAppointmentsByClinician()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getActiveAppointmentsByClinician(getActiveAppointmentsByClinicianVars);
// Variables can be defined inline as well.
const { data } = await getActiveAppointmentsByClinician({ clinicianCid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getActiveAppointmentsByClinician(dataConnect, getActiveAppointmentsByClinicianVars);

console.log(data.appointments);

// Or, you can use the `Promise` API.
getActiveAppointmentsByClinician(getActiveAppointmentsByClinicianVars).then((response) => {
  const data = response.data;
  console.log(data.appointments);
});
```

### Using `GetActiveAppointmentsByClinician`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getActiveAppointmentsByClinicianRef, GetActiveAppointmentsByClinicianVariables } from '@mbh/dataconnect';

// The `GetActiveAppointmentsByClinician` query requires an argument of type `GetActiveAppointmentsByClinicianVariables`:
const getActiveAppointmentsByClinicianVars: GetActiveAppointmentsByClinicianVariables = {
  clinicianCid: ..., 
};

// Call the `getActiveAppointmentsByClinicianRef()` function to get a reference to the query.
const ref = getActiveAppointmentsByClinicianRef(getActiveAppointmentsByClinicianVars);
// Variables can be defined inline as well.
const ref = getActiveAppointmentsByClinicianRef({ clinicianCid: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getActiveAppointmentsByClinicianRef(dataConnect, getActiveAppointmentsByClinicianVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.appointments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.appointments);
});
```

## GetAllAppointmentsByClinician
You can execute the `GetAllAppointmentsByClinician` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
getAllAppointmentsByClinician(vars: GetAllAppointmentsByClinicianVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllAppointmentsByClinicianData, GetAllAppointmentsByClinicianVariables>;

interface GetAllAppointmentsByClinicianRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAllAppointmentsByClinicianVariables): QueryRef<GetAllAppointmentsByClinicianData, GetAllAppointmentsByClinicianVariables>;
}
export const getAllAppointmentsByClinicianRef: GetAllAppointmentsByClinicianRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllAppointmentsByClinician(dc: DataConnect, vars: GetAllAppointmentsByClinicianVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllAppointmentsByClinicianData, GetAllAppointmentsByClinicianVariables>;

interface GetAllAppointmentsByClinicianRef {
  ...
  (dc: DataConnect, vars: GetAllAppointmentsByClinicianVariables): QueryRef<GetAllAppointmentsByClinicianData, GetAllAppointmentsByClinicianVariables>;
}
export const getAllAppointmentsByClinicianRef: GetAllAppointmentsByClinicianRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllAppointmentsByClinicianRef:
```typescript
const name = getAllAppointmentsByClinicianRef.operationName;
console.log(name);
```

### Variables
The `GetAllAppointmentsByClinician` query requires an argument of type `GetAllAppointmentsByClinicianVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAllAppointmentsByClinicianVariables {
  clinicianCid: UUIDString;
}
```
### Return Type
Recall that executing the `GetAllAppointmentsByClinician` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllAppointmentsByClinicianData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAllAppointmentsByClinicianData {
  appointments: ({
    id: UUIDString;
    scheduledAt: TimestampString;
    appointmentReason: string;
    appointmentNotes?: string | null;
    status: AppointmentStatus;
    createdAt: TimestampString;
    updatedAt?: TimestampString | null;
    patient: {
      pid: UUIDString;
      firstName: string;
      lastName: string;
      email: string;
    } & Patient_Key;
    clinician: {
      cid: UUIDString;
      firstName: string;
      lastName: string;
      email: string;
    } & Clinician_Key;
  } & Appointment_Key)[];
}
```
### Using `GetAllAppointmentsByClinician`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllAppointmentsByClinician, GetAllAppointmentsByClinicianVariables } from '@mbh/dataconnect';

// The `GetAllAppointmentsByClinician` query requires an argument of type `GetAllAppointmentsByClinicianVariables`:
const getAllAppointmentsByClinicianVars: GetAllAppointmentsByClinicianVariables = {
  clinicianCid: ..., 
};

// Call the `getAllAppointmentsByClinician()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllAppointmentsByClinician(getAllAppointmentsByClinicianVars);
// Variables can be defined inline as well.
const { data } = await getAllAppointmentsByClinician({ clinicianCid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllAppointmentsByClinician(dataConnect, getAllAppointmentsByClinicianVars);

console.log(data.appointments);

// Or, you can use the `Promise` API.
getAllAppointmentsByClinician(getAllAppointmentsByClinicianVars).then((response) => {
  const data = response.data;
  console.log(data.appointments);
});
```

### Using `GetAllAppointmentsByClinician`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllAppointmentsByClinicianRef, GetAllAppointmentsByClinicianVariables } from '@mbh/dataconnect';

// The `GetAllAppointmentsByClinician` query requires an argument of type `GetAllAppointmentsByClinicianVariables`:
const getAllAppointmentsByClinicianVars: GetAllAppointmentsByClinicianVariables = {
  clinicianCid: ..., 
};

// Call the `getAllAppointmentsByClinicianRef()` function to get a reference to the query.
const ref = getAllAppointmentsByClinicianRef(getAllAppointmentsByClinicianVars);
// Variables can be defined inline as well.
const ref = getAllAppointmentsByClinicianRef({ clinicianCid: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllAppointmentsByClinicianRef(dataConnect, getAllAppointmentsByClinicianVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.appointments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.appointments);
});
```

## GetHeart
You can execute the `GetHeart` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
getHeart(vars: GetHeartVariables, options?: ExecuteQueryOptions): QueryPromise<GetHeartData, GetHeartVariables>;

interface GetHeartRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetHeartVariables): QueryRef<GetHeartData, GetHeartVariables>;
}
export const getHeartRef: GetHeartRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getHeart(dc: DataConnect, vars: GetHeartVariables, options?: ExecuteQueryOptions): QueryPromise<GetHeartData, GetHeartVariables>;

interface GetHeartRef {
  ...
  (dc: DataConnect, vars: GetHeartVariables): QueryRef<GetHeartData, GetHeartVariables>;
}
export const getHeartRef: GetHeartRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getHeartRef:
```typescript
const name = getHeartRef.operationName;
console.log(name);
```

### Variables
The `GetHeart` query requires an argument of type `GetHeartVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetHeartVariables {
  heartId: UUIDString;
}
```
### Return Type
Recall that executing the `GetHeart` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetHeartData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetHeartData {
  heart?: {
    heartId: UUIDString;
    patientPid: UUIDString;
    createdAt: TimestampString;
    patient: {
      firstName: string;
      lastName: string;
    };
  } & Heart_Key;
}
```
### Using `GetHeart`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getHeart, GetHeartVariables } from '@mbh/dataconnect';

// The `GetHeart` query requires an argument of type `GetHeartVariables`:
const getHeartVars: GetHeartVariables = {
  heartId: ..., 
};

// Call the `getHeart()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getHeart(getHeartVars);
// Variables can be defined inline as well.
const { data } = await getHeart({ heartId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getHeart(dataConnect, getHeartVars);

console.log(data.heart);

// Or, you can use the `Promise` API.
getHeart(getHeartVars).then((response) => {
  const data = response.data;
  console.log(data.heart);
});
```

### Using `GetHeart`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getHeartRef, GetHeartVariables } from '@mbh/dataconnect';

// The `GetHeart` query requires an argument of type `GetHeartVariables`:
const getHeartVars: GetHeartVariables = {
  heartId: ..., 
};

// Call the `getHeartRef()` function to get a reference to the query.
const ref = getHeartRef(getHeartVars);
// Variables can be defined inline as well.
const ref = getHeartRef({ heartId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getHeartRef(dataConnect, getHeartVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.heart);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.heart);
});
```

## ListHeartsByPatient
You can execute the `ListHeartsByPatient` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listHeartsByPatient(vars: ListHeartsByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<ListHeartsByPatientData, ListHeartsByPatientVariables>;

interface ListHeartsByPatientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListHeartsByPatientVariables): QueryRef<ListHeartsByPatientData, ListHeartsByPatientVariables>;
}
export const listHeartsByPatientRef: ListHeartsByPatientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listHeartsByPatient(dc: DataConnect, vars: ListHeartsByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<ListHeartsByPatientData, ListHeartsByPatientVariables>;

interface ListHeartsByPatientRef {
  ...
  (dc: DataConnect, vars: ListHeartsByPatientVariables): QueryRef<ListHeartsByPatientData, ListHeartsByPatientVariables>;
}
export const listHeartsByPatientRef: ListHeartsByPatientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listHeartsByPatientRef:
```typescript
const name = listHeartsByPatientRef.operationName;
console.log(name);
```

### Variables
The `ListHeartsByPatient` query requires an argument of type `ListHeartsByPatientVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListHeartsByPatientVariables {
  patientPid: UUIDString;
}
```
### Return Type
Recall that executing the `ListHeartsByPatient` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListHeartsByPatientData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListHeartsByPatientData {
  hearts: ({
    heartId: UUIDString;
    createdAt: TimestampString;
  } & Heart_Key)[];
}
```
### Using `ListHeartsByPatient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listHeartsByPatient, ListHeartsByPatientVariables } from '@mbh/dataconnect';

// The `ListHeartsByPatient` query requires an argument of type `ListHeartsByPatientVariables`:
const listHeartsByPatientVars: ListHeartsByPatientVariables = {
  patientPid: ..., 
};

// Call the `listHeartsByPatient()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listHeartsByPatient(listHeartsByPatientVars);
// Variables can be defined inline as well.
const { data } = await listHeartsByPatient({ patientPid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listHeartsByPatient(dataConnect, listHeartsByPatientVars);

console.log(data.hearts);

// Or, you can use the `Promise` API.
listHeartsByPatient(listHeartsByPatientVars).then((response) => {
  const data = response.data;
  console.log(data.hearts);
});
```

### Using `ListHeartsByPatient`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listHeartsByPatientRef, ListHeartsByPatientVariables } from '@mbh/dataconnect';

// The `ListHeartsByPatient` query requires an argument of type `ListHeartsByPatientVariables`:
const listHeartsByPatientVars: ListHeartsByPatientVariables = {
  patientPid: ..., 
};

// Call the `listHeartsByPatientRef()` function to get a reference to the query.
const ref = listHeartsByPatientRef(listHeartsByPatientVars);
// Variables can be defined inline as well.
const ref = listHeartsByPatientRef({ patientPid: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listHeartsByPatientRef(dataConnect, listHeartsByPatientVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.hearts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.hearts);
});
```

## GetLogbookEntry
You can execute the `GetLogbookEntry` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
getLogbookEntry(vars: GetLogbookEntryVariables, options?: ExecuteQueryOptions): QueryPromise<GetLogbookEntryData, GetLogbookEntryVariables>;

interface GetLogbookEntryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetLogbookEntryVariables): QueryRef<GetLogbookEntryData, GetLogbookEntryVariables>;
}
export const getLogbookEntryRef: GetLogbookEntryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getLogbookEntry(dc: DataConnect, vars: GetLogbookEntryVariables, options?: ExecuteQueryOptions): QueryPromise<GetLogbookEntryData, GetLogbookEntryVariables>;

interface GetLogbookEntryRef {
  ...
  (dc: DataConnect, vars: GetLogbookEntryVariables): QueryRef<GetLogbookEntryData, GetLogbookEntryVariables>;
}
export const getLogbookEntryRef: GetLogbookEntryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getLogbookEntryRef:
```typescript
const name = getLogbookEntryRef.operationName;
console.log(name);
```

### Variables
The `GetLogbookEntry` query requires an argument of type `GetLogbookEntryVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetLogbookEntryVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetLogbookEntry` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetLogbookEntryData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetLogbookEntryData {
  logbookEntry?: {
    id: UUIDString;
    patientPid: UUIDString;
    inr: number;
    weight: number;
    bloodPressureSystolic: number;
    bloodPressureDiastolic: number;
    isDeactivated: boolean;
    createdAt: TimestampString;
    updatedAt?: TimestampString | null;
    logbookEntryFiles_on_logbookEntry: ({
      file: {
        id: UUIDString;
        fileName: string;
        storagePath: string;
        mimeType: string;
        fileSizeBytes: number;
        createdAt: TimestampString;
      } & File_Key;
    })[];
  } & LogbookEntry_Key;
}
```
### Using `GetLogbookEntry`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getLogbookEntry, GetLogbookEntryVariables } from '@mbh/dataconnect';

// The `GetLogbookEntry` query requires an argument of type `GetLogbookEntryVariables`:
const getLogbookEntryVars: GetLogbookEntryVariables = {
  id: ..., 
};

// Call the `getLogbookEntry()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getLogbookEntry(getLogbookEntryVars);
// Variables can be defined inline as well.
const { data } = await getLogbookEntry({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getLogbookEntry(dataConnect, getLogbookEntryVars);

console.log(data.logbookEntry);

// Or, you can use the `Promise` API.
getLogbookEntry(getLogbookEntryVars).then((response) => {
  const data = response.data;
  console.log(data.logbookEntry);
});
```

### Using `GetLogbookEntry`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getLogbookEntryRef, GetLogbookEntryVariables } from '@mbh/dataconnect';

// The `GetLogbookEntry` query requires an argument of type `GetLogbookEntryVariables`:
const getLogbookEntryVars: GetLogbookEntryVariables = {
  id: ..., 
};

// Call the `getLogbookEntryRef()` function to get a reference to the query.
const ref = getLogbookEntryRef(getLogbookEntryVars);
// Variables can be defined inline as well.
const ref = getLogbookEntryRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getLogbookEntryRef(dataConnect, getLogbookEntryVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.logbookEntry);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.logbookEntry);
});
```

## ListLogBookEntriesByPatient
You can execute the `ListLogBookEntriesByPatient` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listLogBookEntriesByPatient(vars: ListLogBookEntriesByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<ListLogBookEntriesByPatientData, ListLogBookEntriesByPatientVariables>;

interface ListLogBookEntriesByPatientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListLogBookEntriesByPatientVariables): QueryRef<ListLogBookEntriesByPatientData, ListLogBookEntriesByPatientVariables>;
}
export const listLogBookEntriesByPatientRef: ListLogBookEntriesByPatientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listLogBookEntriesByPatient(dc: DataConnect, vars: ListLogBookEntriesByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<ListLogBookEntriesByPatientData, ListLogBookEntriesByPatientVariables>;

interface ListLogBookEntriesByPatientRef {
  ...
  (dc: DataConnect, vars: ListLogBookEntriesByPatientVariables): QueryRef<ListLogBookEntriesByPatientData, ListLogBookEntriesByPatientVariables>;
}
export const listLogBookEntriesByPatientRef: ListLogBookEntriesByPatientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listLogBookEntriesByPatientRef:
```typescript
const name = listLogBookEntriesByPatientRef.operationName;
console.log(name);
```

### Variables
The `ListLogBookEntriesByPatient` query requires an argument of type `ListLogBookEntriesByPatientVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListLogBookEntriesByPatientVariables {
  patientId: UUIDString;
}
```
### Return Type
Recall that executing the `ListLogBookEntriesByPatient` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListLogBookEntriesByPatientData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListLogBookEntriesByPatientData {
  patient?: {
    pid: UUIDString;
    logbookEntries_on_patient: ({
      id: UUIDString;
      patientPid: UUIDString;
      inr: number;
      weight: number;
      bloodPressureSystolic: number;
      bloodPressureDiastolic: number;
      isDeactivated: boolean;
      createdAt: TimestampString;
      updatedAt?: TimestampString | null;
      logbookEntryFiles_on_logbookEntry: ({
        file: {
          id: UUIDString;
          fileName: string;
          storagePath: string;
          mimeType: string;
          fileSizeBytes: number;
          createdAt: TimestampString;
        } & File_Key;
      })[];
    } & LogbookEntry_Key)[];
  } & Patient_Key;
}
```
### Using `ListLogBookEntriesByPatient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listLogBookEntriesByPatient, ListLogBookEntriesByPatientVariables } from '@mbh/dataconnect';

// The `ListLogBookEntriesByPatient` query requires an argument of type `ListLogBookEntriesByPatientVariables`:
const listLogBookEntriesByPatientVars: ListLogBookEntriesByPatientVariables = {
  patientId: ..., 
};

// Call the `listLogBookEntriesByPatient()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listLogBookEntriesByPatient(listLogBookEntriesByPatientVars);
// Variables can be defined inline as well.
const { data } = await listLogBookEntriesByPatient({ patientId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listLogBookEntriesByPatient(dataConnect, listLogBookEntriesByPatientVars);

console.log(data.patient);

// Or, you can use the `Promise` API.
listLogBookEntriesByPatient(listLogBookEntriesByPatientVars).then((response) => {
  const data = response.data;
  console.log(data.patient);
});
```

### Using `ListLogBookEntriesByPatient`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listLogBookEntriesByPatientRef, ListLogBookEntriesByPatientVariables } from '@mbh/dataconnect';

// The `ListLogBookEntriesByPatient` query requires an argument of type `ListLogBookEntriesByPatientVariables`:
const listLogBookEntriesByPatientVars: ListLogBookEntriesByPatientVariables = {
  patientId: ..., 
};

// Call the `listLogBookEntriesByPatientRef()` function to get a reference to the query.
const ref = listLogBookEntriesByPatientRef(listLogBookEntriesByPatientVars);
// Variables can be defined inline as well.
const ref = listLogBookEntriesByPatientRef({ patientId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listLogBookEntriesByPatientRef(dataConnect, listLogBookEntriesByPatientVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.patient);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.patient);
});
```

## GetPatientLogbookFileMetadata
You can execute the `GetPatientLogbookFileMetadata` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
getPatientLogbookFileMetadata(vars: GetPatientLogbookFileMetadataVariables, options?: ExecuteQueryOptions): QueryPromise<GetPatientLogbookFileMetadataData, GetPatientLogbookFileMetadataVariables>;

interface GetPatientLogbookFileMetadataRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPatientLogbookFileMetadataVariables): QueryRef<GetPatientLogbookFileMetadataData, GetPatientLogbookFileMetadataVariables>;
}
export const getPatientLogbookFileMetadataRef: GetPatientLogbookFileMetadataRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPatientLogbookFileMetadata(dc: DataConnect, vars: GetPatientLogbookFileMetadataVariables, options?: ExecuteQueryOptions): QueryPromise<GetPatientLogbookFileMetadataData, GetPatientLogbookFileMetadataVariables>;

interface GetPatientLogbookFileMetadataRef {
  ...
  (dc: DataConnect, vars: GetPatientLogbookFileMetadataVariables): QueryRef<GetPatientLogbookFileMetadataData, GetPatientLogbookFileMetadataVariables>;
}
export const getPatientLogbookFileMetadataRef: GetPatientLogbookFileMetadataRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPatientLogbookFileMetadataRef:
```typescript
const name = getPatientLogbookFileMetadataRef.operationName;
console.log(name);
```

### Variables
The `GetPatientLogbookFileMetadata` query requires an argument of type `GetPatientLogbookFileMetadataVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetPatientLogbookFileMetadataVariables {
  fileId: UUIDString;
  logbookEntryId: UUIDString;
}
```
### Return Type
Recall that executing the `GetPatientLogbookFileMetadata` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPatientLogbookFileMetadataData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPatientLogbookFileMetadataData {
  file?: {
    id: UUIDString;
    fileName: string;
    storagePath: string;
    mimeType: string;
    fileSizeBytes: number;
  } & File_Key;
}
```
### Using `GetPatientLogbookFileMetadata`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPatientLogbookFileMetadata, GetPatientLogbookFileMetadataVariables } from '@mbh/dataconnect';

// The `GetPatientLogbookFileMetadata` query requires an argument of type `GetPatientLogbookFileMetadataVariables`:
const getPatientLogbookFileMetadataVars: GetPatientLogbookFileMetadataVariables = {
  fileId: ..., 
  logbookEntryId: ..., 
};

// Call the `getPatientLogbookFileMetadata()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPatientLogbookFileMetadata(getPatientLogbookFileMetadataVars);
// Variables can be defined inline as well.
const { data } = await getPatientLogbookFileMetadata({ fileId: ..., logbookEntryId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPatientLogbookFileMetadata(dataConnect, getPatientLogbookFileMetadataVars);

console.log(data.file);

// Or, you can use the `Promise` API.
getPatientLogbookFileMetadata(getPatientLogbookFileMetadataVars).then((response) => {
  const data = response.data;
  console.log(data.file);
});
```

### Using `GetPatientLogbookFileMetadata`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPatientLogbookFileMetadataRef, GetPatientLogbookFileMetadataVariables } from '@mbh/dataconnect';

// The `GetPatientLogbookFileMetadata` query requires an argument of type `GetPatientLogbookFileMetadataVariables`:
const getPatientLogbookFileMetadataVars: GetPatientLogbookFileMetadataVariables = {
  fileId: ..., 
  logbookEntryId: ..., 
};

// Call the `getPatientLogbookFileMetadataRef()` function to get a reference to the query.
const ref = getPatientLogbookFileMetadataRef(getPatientLogbookFileMetadataVars);
// Variables can be defined inline as well.
const ref = getPatientLogbookFileMetadataRef({ fileId: ..., logbookEntryId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPatientLogbookFileMetadataRef(dataConnect, getPatientLogbookFileMetadataVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.file);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.file);
});
```

## ListPatientLogbookEntries
You can execute the `ListPatientLogbookEntries` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listPatientLogbookEntries(options?: ExecuteQueryOptions): QueryPromise<ListPatientLogbookEntriesData, undefined>;

interface ListPatientLogbookEntriesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPatientLogbookEntriesData, undefined>;
}
export const listPatientLogbookEntriesRef: ListPatientLogbookEntriesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPatientLogbookEntries(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListPatientLogbookEntriesData, undefined>;

interface ListPatientLogbookEntriesRef {
  ...
  (dc: DataConnect): QueryRef<ListPatientLogbookEntriesData, undefined>;
}
export const listPatientLogbookEntriesRef: ListPatientLogbookEntriesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPatientLogbookEntriesRef:
```typescript
const name = listPatientLogbookEntriesRef.operationName;
console.log(name);
```

### Variables
The `ListPatientLogbookEntries` query has no variables.
### Return Type
Recall that executing the `ListPatientLogbookEntries` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPatientLogbookEntriesData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPatientLogbookEntriesData {
  patients: ({
    logbookEntries_on_patient: ({
      id: UUIDString;
      createdAt: TimestampString;
    } & LogbookEntry_Key)[];
  })[];
}
```
### Using `ListPatientLogbookEntries`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPatientLogbookEntries } from '@mbh/dataconnect';


// Call the `listPatientLogbookEntries()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPatientLogbookEntries();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPatientLogbookEntries(dataConnect);

console.log(data.patients);

// Or, you can use the `Promise` API.
listPatientLogbookEntries().then((response) => {
  const data = response.data;
  console.log(data.patients);
});
```

### Using `ListPatientLogbookEntries`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPatientLogbookEntriesRef } from '@mbh/dataconnect';


// Call the `listPatientLogbookEntriesRef()` function to get a reference to the query.
const ref = listPatientLogbookEntriesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPatientLogbookEntriesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.patients);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.patients);
});
```

## GeneratePatientSummaryReport
You can execute the `GeneratePatientSummaryReport` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
generatePatientSummaryReport(vars: GeneratePatientSummaryReportVariables, options?: ExecuteQueryOptions): QueryPromise<GeneratePatientSummaryReportData, GeneratePatientSummaryReportVariables>;

interface GeneratePatientSummaryReportRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GeneratePatientSummaryReportVariables): QueryRef<GeneratePatientSummaryReportData, GeneratePatientSummaryReportVariables>;
}
export const generatePatientSummaryReportRef: GeneratePatientSummaryReportRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
generatePatientSummaryReport(dc: DataConnect, vars: GeneratePatientSummaryReportVariables, options?: ExecuteQueryOptions): QueryPromise<GeneratePatientSummaryReportData, GeneratePatientSummaryReportVariables>;

interface GeneratePatientSummaryReportRef {
  ...
  (dc: DataConnect, vars: GeneratePatientSummaryReportVariables): QueryRef<GeneratePatientSummaryReportData, GeneratePatientSummaryReportVariables>;
}
export const generatePatientSummaryReportRef: GeneratePatientSummaryReportRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the generatePatientSummaryReportRef:
```typescript
const name = generatePatientSummaryReportRef.operationName;
console.log(name);
```

### Variables
The `GeneratePatientSummaryReport` query requires an argument of type `GeneratePatientSummaryReportVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GeneratePatientSummaryReportVariables {
  appointmentId: UUIDString;
  startTime: TimestampString;
  endTime: TimestampString;
}
```
### Return Type
Recall that executing the `GeneratePatientSummaryReport` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GeneratePatientSummaryReportData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GeneratePatientSummaryReportData {
  appointment?: {
    id: UUIDString;
    appointmentReason: string;
    appointmentNotes?: string | null;
    status: AppointmentStatus;
    scheduledAt: TimestampString;
    clinician: {
      cid: UUIDString;
      email: string;
      firstName: string;
      lastName: string;
      specialty: string;
      aphra: string;
    } & Clinician_Key;
    patient: {
      pid: UUIDString;
      email: string;
      firstName: string;
      lastName: string;
      dob: DateString;
      phone: string;
      bloodType: string;
      diagnosis: string;
      status: Status;
      address: string;
      logbookEntries_on_patient: ({
        id: UUIDString;
        inr: number;
        weight: number;
        bloodPressureSystolic: number;
        bloodPressureDiastolic: number;
        updatedAt?: TimestampString | null;
        createdAt: TimestampString;
        logbookEntryFiles_on_logbookEntry: ({
          file: {
            id: UUIDString;
            fileName: string;
            storagePath: string;
            mimeType: string;
            fileSizeBytes: number;
            createdAt: TimestampString;
          } & File_Key;
        })[];
      } & LogbookEntry_Key)[];
      hearts_on_patient: ({
        heartId: UUIDString;
        createdAt: TimestampString;
        sensors_on_heart: ({
          sensorId: UUIDString;
          type: string;
          location: string;
          unit: string;
          minThreshold: number;
          maxThreshold: number;
          status: boolean;
          sensorLive_on_sensor?: {
            value: number;
            unit: string;
            recordedAt: TimestampString;
          };
          readingHistories_on_sensor: ({
            historyId: UUIDString;
            avgValue: number;
            minValue: number;
            maxValue: number;
            periodStart: TimestampString;
            periodEnd: TimestampString;
          } & ReadingHistory_Key)[];
          alerts_on_sensor: ({
            alertId: UUIDString;
            severity: string;
            triggerValue: number;
            triggeredAt: TimestampString;
            resolvedAt?: TimestampString | null;
            alertReadingss_on_alert: ({
              readingId: UUIDString;
              recordedAt: TimestampString;
              value: number;
              unit: string;
            } & AlertReadings_Key)[];
          } & Alert_Key)[];
        } & Sensor_Key)[];
      } & Heart_Key)[];
    } & Patient_Key;
  } & Appointment_Key;
}
```
### Using `GeneratePatientSummaryReport`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, generatePatientSummaryReport, GeneratePatientSummaryReportVariables } from '@mbh/dataconnect';

// The `GeneratePatientSummaryReport` query requires an argument of type `GeneratePatientSummaryReportVariables`:
const generatePatientSummaryReportVars: GeneratePatientSummaryReportVariables = {
  appointmentId: ..., 
  startTime: ..., 
  endTime: ..., 
};

// Call the `generatePatientSummaryReport()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await generatePatientSummaryReport(generatePatientSummaryReportVars);
// Variables can be defined inline as well.
const { data } = await generatePatientSummaryReport({ appointmentId: ..., startTime: ..., endTime: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await generatePatientSummaryReport(dataConnect, generatePatientSummaryReportVars);

console.log(data.appointment);

// Or, you can use the `Promise` API.
generatePatientSummaryReport(generatePatientSummaryReportVars).then((response) => {
  const data = response.data;
  console.log(data.appointment);
});
```

### Using `GeneratePatientSummaryReport`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, generatePatientSummaryReportRef, GeneratePatientSummaryReportVariables } from '@mbh/dataconnect';

// The `GeneratePatientSummaryReport` query requires an argument of type `GeneratePatientSummaryReportVariables`:
const generatePatientSummaryReportVars: GeneratePatientSummaryReportVariables = {
  appointmentId: ..., 
  startTime: ..., 
  endTime: ..., 
};

// Call the `generatePatientSummaryReportRef()` function to get a reference to the query.
const ref = generatePatientSummaryReportRef(generatePatientSummaryReportVars);
// Variables can be defined inline as well.
const ref = generatePatientSummaryReportRef({ appointmentId: ..., startTime: ..., endTime: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = generatePatientSummaryReportRef(dataConnect, generatePatientSummaryReportVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.appointment);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.appointment);
});
```

## ListAlerts
You can execute the `ListAlerts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listAlerts(options?: ExecuteQueryOptions): QueryPromise<ListAlertsData, undefined>;

interface ListAlertsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAlertsData, undefined>;
}
export const listAlertsRef: ListAlertsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAlerts(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAlertsData, undefined>;

interface ListAlertsRef {
  ...
  (dc: DataConnect): QueryRef<ListAlertsData, undefined>;
}
export const listAlertsRef: ListAlertsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAlertsRef:
```typescript
const name = listAlertsRef.operationName;
console.log(name);
```

### Variables
The `ListAlerts` query has no variables.
### Return Type
Recall that executing the `ListAlerts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAlertsData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAlertsData {
  alerts: ({
    alertId: UUIDString;
    sensorId: UUIDString;
    severity: string;
    triggerValue: number;
    triggeredAt: TimestampString;
    resolvedAt?: TimestampString | null;
    sensor: {
      type: string;
      location: string;
      unit: string;
      minThreshold: number;
      maxThreshold: number;
      status: boolean;
    };
  } & Alert_Key)[];
}
```
### Using `ListAlerts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAlerts } from '@mbh/dataconnect';


// Call the `listAlerts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAlerts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAlerts(dataConnect);

console.log(data.alerts);

// Or, you can use the `Promise` API.
listAlerts().then((response) => {
  const data = response.data;
  console.log(data.alerts);
});
```

### Using `ListAlerts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAlertsRef } from '@mbh/dataconnect';


// Call the `listAlertsRef()` function to get a reference to the query.
const ref = listAlertsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAlertsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.alerts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.alerts);
});
```

## ListUnresolvedAlerts
You can execute the `ListUnresolvedAlerts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listUnresolvedAlerts(options?: ExecuteQueryOptions): QueryPromise<ListUnresolvedAlertsData, undefined>;

interface ListUnresolvedAlertsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUnresolvedAlertsData, undefined>;
}
export const listUnresolvedAlertsRef: ListUnresolvedAlertsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUnresolvedAlerts(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUnresolvedAlertsData, undefined>;

interface ListUnresolvedAlertsRef {
  ...
  (dc: DataConnect): QueryRef<ListUnresolvedAlertsData, undefined>;
}
export const listUnresolvedAlertsRef: ListUnresolvedAlertsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUnresolvedAlertsRef:
```typescript
const name = listUnresolvedAlertsRef.operationName;
console.log(name);
```

### Variables
The `ListUnresolvedAlerts` query has no variables.
### Return Type
Recall that executing the `ListUnresolvedAlerts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUnresolvedAlertsData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListUnresolvedAlertsData {
  alerts: ({
    alertId: UUIDString;
    sensorId: UUIDString;
    severity: string;
    triggerValue: number;
    triggeredAt: TimestampString;
    resolvedAt?: TimestampString | null;
    sensor: {
      type: string;
      location: string;
      unit: string;
      minThreshold: number;
      maxThreshold: number;
      status: boolean;
    };
  } & Alert_Key)[];
}
```
### Using `ListUnresolvedAlerts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUnresolvedAlerts } from '@mbh/dataconnect';


// Call the `listUnresolvedAlerts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUnresolvedAlerts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUnresolvedAlerts(dataConnect);

console.log(data.alerts);

// Or, you can use the `Promise` API.
listUnresolvedAlerts().then((response) => {
  const data = response.data;
  console.log(data.alerts);
});
```

### Using `ListUnresolvedAlerts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUnresolvedAlertsRef } from '@mbh/dataconnect';


// Call the `listUnresolvedAlertsRef()` function to get a reference to the query.
const ref = listUnresolvedAlertsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUnresolvedAlertsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.alerts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.alerts);
});
```

## ListHighSeverityAlerts
You can execute the `ListHighSeverityAlerts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listHighSeverityAlerts(options?: ExecuteQueryOptions): QueryPromise<ListHighSeverityAlertsData, undefined>;

interface ListHighSeverityAlertsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListHighSeverityAlertsData, undefined>;
}
export const listHighSeverityAlertsRef: ListHighSeverityAlertsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listHighSeverityAlerts(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListHighSeverityAlertsData, undefined>;

interface ListHighSeverityAlertsRef {
  ...
  (dc: DataConnect): QueryRef<ListHighSeverityAlertsData, undefined>;
}
export const listHighSeverityAlertsRef: ListHighSeverityAlertsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listHighSeverityAlertsRef:
```typescript
const name = listHighSeverityAlertsRef.operationName;
console.log(name);
```

### Variables
The `ListHighSeverityAlerts` query has no variables.
### Return Type
Recall that executing the `ListHighSeverityAlerts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListHighSeverityAlertsData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListHighSeverityAlertsData {
  alerts: ({
    alertId: UUIDString;
    sensorId: UUIDString;
    severity: string;
    triggerValue: number;
    triggeredAt: TimestampString;
    resolvedAt?: TimestampString | null;
  } & Alert_Key)[];
}
```
### Using `ListHighSeverityAlerts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listHighSeverityAlerts } from '@mbh/dataconnect';


// Call the `listHighSeverityAlerts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listHighSeverityAlerts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listHighSeverityAlerts(dataConnect);

console.log(data.alerts);

// Or, you can use the `Promise` API.
listHighSeverityAlerts().then((response) => {
  const data = response.data;
  console.log(data.alerts);
});
```

### Using `ListHighSeverityAlerts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listHighSeverityAlertsRef } from '@mbh/dataconnect';


// Call the `listHighSeverityAlertsRef()` function to get a reference to the query.
const ref = listHighSeverityAlertsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listHighSeverityAlertsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.alerts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.alerts);
});
```

## ListAlertsBySensorId
You can execute the `ListAlertsBySensorId` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listAlertsBySensorId(options?: ExecuteQueryOptions): QueryPromise<ListAlertsBySensorIdData, undefined>;

interface ListAlertsBySensorIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAlertsBySensorIdData, undefined>;
}
export const listAlertsBySensorIdRef: ListAlertsBySensorIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAlertsBySensorId(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAlertsBySensorIdData, undefined>;

interface ListAlertsBySensorIdRef {
  ...
  (dc: DataConnect): QueryRef<ListAlertsBySensorIdData, undefined>;
}
export const listAlertsBySensorIdRef: ListAlertsBySensorIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAlertsBySensorIdRef:
```typescript
const name = listAlertsBySensorIdRef.operationName;
console.log(name);
```

### Variables
The `ListAlertsBySensorId` query has no variables.
### Return Type
Recall that executing the `ListAlertsBySensorId` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAlertsBySensorIdData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAlertsBySensorIdData {
  alerts: ({
    alertId: UUIDString;
    sensorId: UUIDString;
    severity: string;
    triggerValue: number;
    triggeredAt: TimestampString;
    resolvedAt?: TimestampString | null;
  } & Alert_Key)[];
}
```
### Using `ListAlertsBySensorId`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAlertsBySensorId } from '@mbh/dataconnect';


// Call the `listAlertsBySensorId()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAlertsBySensorId();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAlertsBySensorId(dataConnect);

console.log(data.alerts);

// Or, you can use the `Promise` API.
listAlertsBySensorId().then((response) => {
  const data = response.data;
  console.log(data.alerts);
});
```

### Using `ListAlertsBySensorId`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAlertsBySensorIdRef } from '@mbh/dataconnect';


// Call the `listAlertsBySensorIdRef()` function to get a reference to the query.
const ref = listAlertsBySensorIdRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAlertsBySensorIdRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.alerts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.alerts);
});
```

## ListAlertReadings
You can execute the `ListAlertReadings` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listAlertReadings(options?: ExecuteQueryOptions): QueryPromise<ListAlertReadingsData, undefined>;

interface ListAlertReadingsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAlertReadingsData, undefined>;
}
export const listAlertReadingsRef: ListAlertReadingsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAlertReadings(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAlertReadingsData, undefined>;

interface ListAlertReadingsRef {
  ...
  (dc: DataConnect): QueryRef<ListAlertReadingsData, undefined>;
}
export const listAlertReadingsRef: ListAlertReadingsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAlertReadingsRef:
```typescript
const name = listAlertReadingsRef.operationName;
console.log(name);
```

### Variables
The `ListAlertReadings` query has no variables.
### Return Type
Recall that executing the `ListAlertReadings` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAlertReadingsData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAlertReadingsData {
  alertReadingss: ({
    readingId: UUIDString;
    alertId: UUIDString;
    sensorId: UUIDString;
    recordedAt: TimestampString;
    value: number;
    unit: string;
    alert: {
      severity: string;
      triggerValue: number;
      triggeredAt: TimestampString;
      resolvedAt?: TimestampString | null;
    };
    sensor: {
      type: string;
      location: string;
      unit: string;
      minThreshold: number;
      maxThreshold: number;
    };
  } & AlertReadings_Key)[];
}
```
### Using `ListAlertReadings`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAlertReadings } from '@mbh/dataconnect';


// Call the `listAlertReadings()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAlertReadings();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAlertReadings(dataConnect);

console.log(data.alertReadingss);

// Or, you can use the `Promise` API.
listAlertReadings().then((response) => {
  const data = response.data;
  console.log(data.alertReadingss);
});
```

### Using `ListAlertReadings`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAlertReadingsRef } from '@mbh/dataconnect';


// Call the `listAlertReadingsRef()` function to get a reference to the query.
const ref = listAlertReadingsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAlertReadingsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.alertReadingss);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.alertReadingss);
});
```

## ListAlertReadingsByAlertId
You can execute the `ListAlertReadingsByAlertId` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listAlertReadingsByAlertId(options?: ExecuteQueryOptions): QueryPromise<ListAlertReadingsByAlertIdData, undefined>;

interface ListAlertReadingsByAlertIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAlertReadingsByAlertIdData, undefined>;
}
export const listAlertReadingsByAlertIdRef: ListAlertReadingsByAlertIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAlertReadingsByAlertId(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAlertReadingsByAlertIdData, undefined>;

interface ListAlertReadingsByAlertIdRef {
  ...
  (dc: DataConnect): QueryRef<ListAlertReadingsByAlertIdData, undefined>;
}
export const listAlertReadingsByAlertIdRef: ListAlertReadingsByAlertIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAlertReadingsByAlertIdRef:
```typescript
const name = listAlertReadingsByAlertIdRef.operationName;
console.log(name);
```

### Variables
The `ListAlertReadingsByAlertId` query has no variables.
### Return Type
Recall that executing the `ListAlertReadingsByAlertId` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAlertReadingsByAlertIdData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAlertReadingsByAlertIdData {
  alertReadingss: ({
    readingId: UUIDString;
    alertId: UUIDString;
    sensorId: UUIDString;
    recordedAt: TimestampString;
    value: number;
    unit: string;
  } & AlertReadings_Key)[];
}
```
### Using `ListAlertReadingsByAlertId`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAlertReadingsByAlertId } from '@mbh/dataconnect';


// Call the `listAlertReadingsByAlertId()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAlertReadingsByAlertId();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAlertReadingsByAlertId(dataConnect);

console.log(data.alertReadingss);

// Or, you can use the `Promise` API.
listAlertReadingsByAlertId().then((response) => {
  const data = response.data;
  console.log(data.alertReadingss);
});
```

### Using `ListAlertReadingsByAlertId`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAlertReadingsByAlertIdRef } from '@mbh/dataconnect';


// Call the `listAlertReadingsByAlertIdRef()` function to get a reference to the query.
const ref = listAlertReadingsByAlertIdRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAlertReadingsByAlertIdRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.alertReadingss);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.alertReadingss);
});
```

## ListAlertReadingsBySensorId
You can execute the `ListAlertReadingsBySensorId` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listAlertReadingsBySensorId(options?: ExecuteQueryOptions): QueryPromise<ListAlertReadingsBySensorIdData, undefined>;

interface ListAlertReadingsBySensorIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAlertReadingsBySensorIdData, undefined>;
}
export const listAlertReadingsBySensorIdRef: ListAlertReadingsBySensorIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAlertReadingsBySensorId(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAlertReadingsBySensorIdData, undefined>;

interface ListAlertReadingsBySensorIdRef {
  ...
  (dc: DataConnect): QueryRef<ListAlertReadingsBySensorIdData, undefined>;
}
export const listAlertReadingsBySensorIdRef: ListAlertReadingsBySensorIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAlertReadingsBySensorIdRef:
```typescript
const name = listAlertReadingsBySensorIdRef.operationName;
console.log(name);
```

### Variables
The `ListAlertReadingsBySensorId` query has no variables.
### Return Type
Recall that executing the `ListAlertReadingsBySensorId` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAlertReadingsBySensorIdData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAlertReadingsBySensorIdData {
  alertReadingss: ({
    readingId: UUIDString;
    alertId: UUIDString;
    sensorId: UUIDString;
    recordedAt: TimestampString;
    value: number;
    unit: string;
  } & AlertReadings_Key)[];
}
```
### Using `ListAlertReadingsBySensorId`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAlertReadingsBySensorId } from '@mbh/dataconnect';


// Call the `listAlertReadingsBySensorId()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAlertReadingsBySensorId();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAlertReadingsBySensorId(dataConnect);

console.log(data.alertReadingss);

// Or, you can use the `Promise` API.
listAlertReadingsBySensorId().then((response) => {
  const data = response.data;
  console.log(data.alertReadingss);
});
```

### Using `ListAlertReadingsBySensorId`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAlertReadingsBySensorIdRef } from '@mbh/dataconnect';


// Call the `listAlertReadingsBySensorIdRef()` function to get a reference to the query.
const ref = listAlertReadingsBySensorIdRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAlertReadingsBySensorIdRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.alertReadingss);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.alertReadingss);
});
```

## ListReadingHistory
You can execute the `ListReadingHistory` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listReadingHistory(options?: ExecuteQueryOptions): QueryPromise<ListReadingHistoryData, undefined>;

interface ListReadingHistoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListReadingHistoryData, undefined>;
}
export const listReadingHistoryRef: ListReadingHistoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listReadingHistory(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListReadingHistoryData, undefined>;

interface ListReadingHistoryRef {
  ...
  (dc: DataConnect): QueryRef<ListReadingHistoryData, undefined>;
}
export const listReadingHistoryRef: ListReadingHistoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listReadingHistoryRef:
```typescript
const name = listReadingHistoryRef.operationName;
console.log(name);
```

### Variables
The `ListReadingHistory` query has no variables.
### Return Type
Recall that executing the `ListReadingHistory` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListReadingHistoryData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListReadingHistoryData {
  readingHistories: ({
    historyId: UUIDString;
    sensorId: UUIDString;
    avgValue: number;
    minValue: number;
    maxValue: number;
    periodStart: TimestampString;
    periodEnd: TimestampString;
    sensor: {
      type: string;
      location: string;
      unit: string;
      minThreshold: number;
      maxThreshold: number;
      status: boolean;
    };
  } & ReadingHistory_Key)[];
}
```
### Using `ListReadingHistory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listReadingHistory } from '@mbh/dataconnect';


// Call the `listReadingHistory()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listReadingHistory();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listReadingHistory(dataConnect);

console.log(data.readingHistories);

// Or, you can use the `Promise` API.
listReadingHistory().then((response) => {
  const data = response.data;
  console.log(data.readingHistories);
});
```

### Using `ListReadingHistory`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listReadingHistoryRef } from '@mbh/dataconnect';


// Call the `listReadingHistoryRef()` function to get a reference to the query.
const ref = listReadingHistoryRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listReadingHistoryRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.readingHistories);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.readingHistories);
});
```

## ListReadingHistoryBySensorId
You can execute the `ListReadingHistoryBySensorId` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listReadingHistoryBySensorId(options?: ExecuteQueryOptions): QueryPromise<ListReadingHistoryBySensorIdData, undefined>;

interface ListReadingHistoryBySensorIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListReadingHistoryBySensorIdData, undefined>;
}
export const listReadingHistoryBySensorIdRef: ListReadingHistoryBySensorIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listReadingHistoryBySensorId(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListReadingHistoryBySensorIdData, undefined>;

interface ListReadingHistoryBySensorIdRef {
  ...
  (dc: DataConnect): QueryRef<ListReadingHistoryBySensorIdData, undefined>;
}
export const listReadingHistoryBySensorIdRef: ListReadingHistoryBySensorIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listReadingHistoryBySensorIdRef:
```typescript
const name = listReadingHistoryBySensorIdRef.operationName;
console.log(name);
```

### Variables
The `ListReadingHistoryBySensorId` query has no variables.
### Return Type
Recall that executing the `ListReadingHistoryBySensorId` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListReadingHistoryBySensorIdData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListReadingHistoryBySensorIdData {
  readingHistories: ({
    historyId: UUIDString;
    sensorId: UUIDString;
    avgValue: number;
    minValue: number;
    maxValue: number;
    periodStart: TimestampString;
    periodEnd: TimestampString;
  } & ReadingHistory_Key)[];
}
```
### Using `ListReadingHistoryBySensorId`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listReadingHistoryBySensorId } from '@mbh/dataconnect';


// Call the `listReadingHistoryBySensorId()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listReadingHistoryBySensorId();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listReadingHistoryBySensorId(dataConnect);

console.log(data.readingHistories);

// Or, you can use the `Promise` API.
listReadingHistoryBySensorId().then((response) => {
  const data = response.data;
  console.log(data.readingHistories);
});
```

### Using `ListReadingHistoryBySensorId`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listReadingHistoryBySensorIdRef } from '@mbh/dataconnect';


// Call the `listReadingHistoryBySensorIdRef()` function to get a reference to the query.
const ref = listReadingHistoryBySensorIdRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listReadingHistoryBySensorIdRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.readingHistories);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.readingHistories);
});
```

## ListReadingHistoryForWindow
You can execute the `ListReadingHistoryForWindow` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listReadingHistoryForWindow(options?: ExecuteQueryOptions): QueryPromise<ListReadingHistoryForWindowData, undefined>;

interface ListReadingHistoryForWindowRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListReadingHistoryForWindowData, undefined>;
}
export const listReadingHistoryForWindowRef: ListReadingHistoryForWindowRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listReadingHistoryForWindow(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListReadingHistoryForWindowData, undefined>;

interface ListReadingHistoryForWindowRef {
  ...
  (dc: DataConnect): QueryRef<ListReadingHistoryForWindowData, undefined>;
}
export const listReadingHistoryForWindowRef: ListReadingHistoryForWindowRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listReadingHistoryForWindowRef:
```typescript
const name = listReadingHistoryForWindowRef.operationName;
console.log(name);
```

### Variables
The `ListReadingHistoryForWindow` query has no variables.
### Return Type
Recall that executing the `ListReadingHistoryForWindow` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListReadingHistoryForWindowData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListReadingHistoryForWindowData {
  readingHistories: ({
    historyId: UUIDString;
    sensorId: UUIDString;
    avgValue: number;
    minValue: number;
    maxValue: number;
    periodStart: TimestampString;
    periodEnd: TimestampString;
    sensor: {
      type: string;
      location: string;
      unit: string;
    };
  } & ReadingHistory_Key)[];
}
```
### Using `ListReadingHistoryForWindow`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listReadingHistoryForWindow } from '@mbh/dataconnect';


// Call the `listReadingHistoryForWindow()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listReadingHistoryForWindow();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listReadingHistoryForWindow(dataConnect);

console.log(data.readingHistories);

// Or, you can use the `Promise` API.
listReadingHistoryForWindow().then((response) => {
  const data = response.data;
  console.log(data.readingHistories);
});
```

### Using `ListReadingHistoryForWindow`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listReadingHistoryForWindowRef } from '@mbh/dataconnect';


// Call the `listReadingHistoryForWindowRef()` function to get a reference to the query.
const ref = listReadingHistoryForWindowRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listReadingHistoryForWindowRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.readingHistories);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.readingHistories);
});
```

## GetSensor
You can execute the `GetSensor` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
getSensor(vars: GetSensorVariables, options?: ExecuteQueryOptions): QueryPromise<GetSensorData, GetSensorVariables>;

interface GetSensorRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSensorVariables): QueryRef<GetSensorData, GetSensorVariables>;
}
export const getSensorRef: GetSensorRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getSensor(dc: DataConnect, vars: GetSensorVariables, options?: ExecuteQueryOptions): QueryPromise<GetSensorData, GetSensorVariables>;

interface GetSensorRef {
  ...
  (dc: DataConnect, vars: GetSensorVariables): QueryRef<GetSensorData, GetSensorVariables>;
}
export const getSensorRef: GetSensorRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getSensorRef:
```typescript
const name = getSensorRef.operationName;
console.log(name);
```

### Variables
The `GetSensor` query requires an argument of type `GetSensorVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetSensorVariables {
  sensorId: UUIDString;
}
```
### Return Type
Recall that executing the `GetSensor` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetSensorData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetSensorData {
  sensor?: {
    sensorId: UUIDString;
    heartId: UUIDString;
    type: string;
    location: string;
    unit: string;
    minThreshold: number;
    maxThreshold: number;
    status: boolean;
  } & Sensor_Key;
}
```
### Using `GetSensor`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getSensor, GetSensorVariables } from '@mbh/dataconnect';

// The `GetSensor` query requires an argument of type `GetSensorVariables`:
const getSensorVars: GetSensorVariables = {
  sensorId: ..., 
};

// Call the `getSensor()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getSensor(getSensorVars);
// Variables can be defined inline as well.
const { data } = await getSensor({ sensorId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getSensor(dataConnect, getSensorVars);

console.log(data.sensor);

// Or, you can use the `Promise` API.
getSensor(getSensorVars).then((response) => {
  const data = response.data;
  console.log(data.sensor);
});
```

### Using `GetSensor`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getSensorRef, GetSensorVariables } from '@mbh/dataconnect';

// The `GetSensor` query requires an argument of type `GetSensorVariables`:
const getSensorVars: GetSensorVariables = {
  sensorId: ..., 
};

// Call the `getSensorRef()` function to get a reference to the query.
const ref = getSensorRef(getSensorVars);
// Variables can be defined inline as well.
const ref = getSensorRef({ sensorId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getSensorRef(dataConnect, getSensorVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.sensor);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.sensor);
});
```

## ListSensors
You can execute the `ListSensors` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listSensors(options?: ExecuteQueryOptions): QueryPromise<ListSensorsData, undefined>;

interface ListSensorsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSensorsData, undefined>;
}
export const listSensorsRef: ListSensorsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listSensors(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListSensorsData, undefined>;

interface ListSensorsRef {
  ...
  (dc: DataConnect): QueryRef<ListSensorsData, undefined>;
}
export const listSensorsRef: ListSensorsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listSensorsRef:
```typescript
const name = listSensorsRef.operationName;
console.log(name);
```

### Variables
The `ListSensors` query has no variables.
### Return Type
Recall that executing the `ListSensors` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListSensorsData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListSensorsData {
  sensors: ({
    sensorId: UUIDString;
    heartId: UUIDString;
    type: string;
    location: string;
    unit: string;
    minThreshold: number;
    maxThreshold: number;
    status: boolean;
  } & Sensor_Key)[];
}
```
### Using `ListSensors`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listSensors } from '@mbh/dataconnect';


// Call the `listSensors()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listSensors();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listSensors(dataConnect);

console.log(data.sensors);

// Or, you can use the `Promise` API.
listSensors().then((response) => {
  const data = response.data;
  console.log(data.sensors);
});
```

### Using `ListSensors`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listSensorsRef } from '@mbh/dataconnect';


// Call the `listSensorsRef()` function to get a reference to the query.
const ref = listSensorsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listSensorsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.sensors);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.sensors);
});
```

## ListActiveSensors
You can execute the `ListActiveSensors` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listActiveSensors(vars: ListActiveSensorsVariables, options?: ExecuteQueryOptions): QueryPromise<ListActiveSensorsData, ListActiveSensorsVariables>;

interface ListActiveSensorsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListActiveSensorsVariables): QueryRef<ListActiveSensorsData, ListActiveSensorsVariables>;
}
export const listActiveSensorsRef: ListActiveSensorsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listActiveSensors(dc: DataConnect, vars: ListActiveSensorsVariables, options?: ExecuteQueryOptions): QueryPromise<ListActiveSensorsData, ListActiveSensorsVariables>;

interface ListActiveSensorsRef {
  ...
  (dc: DataConnect, vars: ListActiveSensorsVariables): QueryRef<ListActiveSensorsData, ListActiveSensorsVariables>;
}
export const listActiveSensorsRef: ListActiveSensorsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listActiveSensorsRef:
```typescript
const name = listActiveSensorsRef.operationName;
console.log(name);
```

### Variables
The `ListActiveSensors` query requires an argument of type `ListActiveSensorsVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListActiveSensorsVariables {
  status: boolean;
}
```
### Return Type
Recall that executing the `ListActiveSensors` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListActiveSensorsData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListActiveSensorsData {
  sensors: ({
    sensorId: UUIDString;
    heartId: UUIDString;
    type: string;
    location: string;
    unit: string;
    minThreshold: number;
    maxThreshold: number;
    status: boolean;
  } & Sensor_Key)[];
}
```
### Using `ListActiveSensors`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listActiveSensors, ListActiveSensorsVariables } from '@mbh/dataconnect';

// The `ListActiveSensors` query requires an argument of type `ListActiveSensorsVariables`:
const listActiveSensorsVars: ListActiveSensorsVariables = {
  status: ..., 
};

// Call the `listActiveSensors()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listActiveSensors(listActiveSensorsVars);
// Variables can be defined inline as well.
const { data } = await listActiveSensors({ status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listActiveSensors(dataConnect, listActiveSensorsVars);

console.log(data.sensors);

// Or, you can use the `Promise` API.
listActiveSensors(listActiveSensorsVars).then((response) => {
  const data = response.data;
  console.log(data.sensors);
});
```

### Using `ListActiveSensors`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listActiveSensorsRef, ListActiveSensorsVariables } from '@mbh/dataconnect';

// The `ListActiveSensors` query requires an argument of type `ListActiveSensorsVariables`:
const listActiveSensorsVars: ListActiveSensorsVariables = {
  status: ..., 
};

// Call the `listActiveSensorsRef()` function to get a reference to the query.
const ref = listActiveSensorsRef(listActiveSensorsVars);
// Variables can be defined inline as well.
const ref = listActiveSensorsRef({ status: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listActiveSensorsRef(dataConnect, listActiveSensorsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.sensors);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.sensors);
});
```

## ListSensorsByType
You can execute the `ListSensorsByType` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listSensorsByType(vars: ListSensorsByTypeVariables, options?: ExecuteQueryOptions): QueryPromise<ListSensorsByTypeData, ListSensorsByTypeVariables>;

interface ListSensorsByTypeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListSensorsByTypeVariables): QueryRef<ListSensorsByTypeData, ListSensorsByTypeVariables>;
}
export const listSensorsByTypeRef: ListSensorsByTypeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listSensorsByType(dc: DataConnect, vars: ListSensorsByTypeVariables, options?: ExecuteQueryOptions): QueryPromise<ListSensorsByTypeData, ListSensorsByTypeVariables>;

interface ListSensorsByTypeRef {
  ...
  (dc: DataConnect, vars: ListSensorsByTypeVariables): QueryRef<ListSensorsByTypeData, ListSensorsByTypeVariables>;
}
export const listSensorsByTypeRef: ListSensorsByTypeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listSensorsByTypeRef:
```typescript
const name = listSensorsByTypeRef.operationName;
console.log(name);
```

### Variables
The `ListSensorsByType` query requires an argument of type `ListSensorsByTypeVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListSensorsByTypeVariables {
  type: string;
}
```
### Return Type
Recall that executing the `ListSensorsByType` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListSensorsByTypeData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListSensorsByTypeData {
  sensors: ({
    sensorId: UUIDString;
    heartId: UUIDString;
    type: string;
    location: string;
    unit: string;
    minThreshold: number;
    maxThreshold: number;
    status: boolean;
  } & Sensor_Key)[];
}
```
### Using `ListSensorsByType`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listSensorsByType, ListSensorsByTypeVariables } from '@mbh/dataconnect';

// The `ListSensorsByType` query requires an argument of type `ListSensorsByTypeVariables`:
const listSensorsByTypeVars: ListSensorsByTypeVariables = {
  type: ..., 
};

// Call the `listSensorsByType()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listSensorsByType(listSensorsByTypeVars);
// Variables can be defined inline as well.
const { data } = await listSensorsByType({ type: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listSensorsByType(dataConnect, listSensorsByTypeVars);

console.log(data.sensors);

// Or, you can use the `Promise` API.
listSensorsByType(listSensorsByTypeVars).then((response) => {
  const data = response.data;
  console.log(data.sensors);
});
```

### Using `ListSensorsByType`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listSensorsByTypeRef, ListSensorsByTypeVariables } from '@mbh/dataconnect';

// The `ListSensorsByType` query requires an argument of type `ListSensorsByTypeVariables`:
const listSensorsByTypeVars: ListSensorsByTypeVariables = {
  type: ..., 
};

// Call the `listSensorsByTypeRef()` function to get a reference to the query.
const ref = listSensorsByTypeRef(listSensorsByTypeVars);
// Variables can be defined inline as well.
const ref = listSensorsByTypeRef({ type: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listSensorsByTypeRef(dataConnect, listSensorsByTypeVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.sensors);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.sensors);
});
```

## ListSensorByHeart
You can execute the `ListSensorByHeart` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listSensorByHeart(vars: ListSensorByHeartVariables, options?: ExecuteQueryOptions): QueryPromise<ListSensorByHeartData, ListSensorByHeartVariables>;

interface ListSensorByHeartRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListSensorByHeartVariables): QueryRef<ListSensorByHeartData, ListSensorByHeartVariables>;
}
export const listSensorByHeartRef: ListSensorByHeartRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listSensorByHeart(dc: DataConnect, vars: ListSensorByHeartVariables, options?: ExecuteQueryOptions): QueryPromise<ListSensorByHeartData, ListSensorByHeartVariables>;

interface ListSensorByHeartRef {
  ...
  (dc: DataConnect, vars: ListSensorByHeartVariables): QueryRef<ListSensorByHeartData, ListSensorByHeartVariables>;
}
export const listSensorByHeartRef: ListSensorByHeartRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listSensorByHeartRef:
```typescript
const name = listSensorByHeartRef.operationName;
console.log(name);
```

### Variables
The `ListSensorByHeart` query requires an argument of type `ListSensorByHeartVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListSensorByHeartVariables {
  heartId: UUIDString;
}
```
### Return Type
Recall that executing the `ListSensorByHeart` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListSensorByHeartData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListSensorByHeartData {
  sensors: ({
    sensorId: UUIDString;
    heartId: UUIDString;
    type: string;
    location: string;
    unit: string;
    minThreshold: number;
    maxThreshold: number;
    status: boolean;
  } & Sensor_Key)[];
}
```
### Using `ListSensorByHeart`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listSensorByHeart, ListSensorByHeartVariables } from '@mbh/dataconnect';

// The `ListSensorByHeart` query requires an argument of type `ListSensorByHeartVariables`:
const listSensorByHeartVars: ListSensorByHeartVariables = {
  heartId: ..., 
};

// Call the `listSensorByHeart()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listSensorByHeart(listSensorByHeartVars);
// Variables can be defined inline as well.
const { data } = await listSensorByHeart({ heartId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listSensorByHeart(dataConnect, listSensorByHeartVars);

console.log(data.sensors);

// Or, you can use the `Promise` API.
listSensorByHeart(listSensorByHeartVars).then((response) => {
  const data = response.data;
  console.log(data.sensors);
});
```

### Using `ListSensorByHeart`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listSensorByHeartRef, ListSensorByHeartVariables } from '@mbh/dataconnect';

// The `ListSensorByHeart` query requires an argument of type `ListSensorByHeartVariables`:
const listSensorByHeartVars: ListSensorByHeartVariables = {
  heartId: ..., 
};

// Call the `listSensorByHeartRef()` function to get a reference to the query.
const ref = listSensorByHeartRef(listSensorByHeartVars);
// Variables can be defined inline as well.
const ref = listSensorByHeartRef({ heartId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listSensorByHeartRef(dataConnect, listSensorByHeartVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.sensors);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.sensors);
});
```

## GetSensorLive
You can execute the `GetSensorLive` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
getSensorLive(vars: GetSensorLiveVariables, options?: ExecuteQueryOptions): QueryPromise<GetSensorLiveData, GetSensorLiveVariables>;

interface GetSensorLiveRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSensorLiveVariables): QueryRef<GetSensorLiveData, GetSensorLiveVariables>;
}
export const getSensorLiveRef: GetSensorLiveRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getSensorLive(dc: DataConnect, vars: GetSensorLiveVariables, options?: ExecuteQueryOptions): QueryPromise<GetSensorLiveData, GetSensorLiveVariables>;

interface GetSensorLiveRef {
  ...
  (dc: DataConnect, vars: GetSensorLiveVariables): QueryRef<GetSensorLiveData, GetSensorLiveVariables>;
}
export const getSensorLiveRef: GetSensorLiveRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getSensorLiveRef:
```typescript
const name = getSensorLiveRef.operationName;
console.log(name);
```

### Variables
The `GetSensorLive` query requires an argument of type `GetSensorLiveVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetSensorLiveVariables {
  sensorId: UUIDString;
}
```
### Return Type
Recall that executing the `GetSensorLive` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetSensorLiveData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetSensorLiveData {
  sensorLive?: {
    sensorId: UUIDString;
    value: number;
    unit: string;
    recordedAt: TimestampString;
    sensor: {
      sensorId: UUIDString;
      type: string;
      location: string;
      unit: string;
      minThreshold: number;
      maxThreshold: number;
      status: boolean;
    } & Sensor_Key;
  } & SensorLive_Key;
}
```
### Using `GetSensorLive`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getSensorLive, GetSensorLiveVariables } from '@mbh/dataconnect';

// The `GetSensorLive` query requires an argument of type `GetSensorLiveVariables`:
const getSensorLiveVars: GetSensorLiveVariables = {
  sensorId: ..., 
};

// Call the `getSensorLive()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getSensorLive(getSensorLiveVars);
// Variables can be defined inline as well.
const { data } = await getSensorLive({ sensorId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getSensorLive(dataConnect, getSensorLiveVars);

console.log(data.sensorLive);

// Or, you can use the `Promise` API.
getSensorLive(getSensorLiveVars).then((response) => {
  const data = response.data;
  console.log(data.sensorLive);
});
```

### Using `GetSensorLive`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getSensorLiveRef, GetSensorLiveVariables } from '@mbh/dataconnect';

// The `GetSensorLive` query requires an argument of type `GetSensorLiveVariables`:
const getSensorLiveVars: GetSensorLiveVariables = {
  sensorId: ..., 
};

// Call the `getSensorLiveRef()` function to get a reference to the query.
const ref = getSensorLiveRef(getSensorLiveVars);
// Variables can be defined inline as well.
const ref = getSensorLiveRef({ sensorId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getSensorLiveRef(dataConnect, getSensorLiveVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.sensorLive);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.sensorLive);
});
```

## ListSensorLive
You can execute the `ListSensorLive` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listSensorLive(options?: ExecuteQueryOptions): QueryPromise<ListSensorLiveData, undefined>;

interface ListSensorLiveRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSensorLiveData, undefined>;
}
export const listSensorLiveRef: ListSensorLiveRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listSensorLive(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListSensorLiveData, undefined>;

interface ListSensorLiveRef {
  ...
  (dc: DataConnect): QueryRef<ListSensorLiveData, undefined>;
}
export const listSensorLiveRef: ListSensorLiveRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listSensorLiveRef:
```typescript
const name = listSensorLiveRef.operationName;
console.log(name);
```

### Variables
The `ListSensorLive` query has no variables.
### Return Type
Recall that executing the `ListSensorLive` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListSensorLiveData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListSensorLiveData {
  sensorLives: ({
    sensorId: UUIDString;
    value: number;
    unit: string;
    recordedAt: TimestampString;
    sensor: {
      type: string;
      location: string;
      unit: string;
      minThreshold: number;
      maxThreshold: number;
      status: boolean;
    };
  } & SensorLive_Key)[];
}
```
### Using `ListSensorLive`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listSensorLive } from '@mbh/dataconnect';


// Call the `listSensorLive()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listSensorLive();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listSensorLive(dataConnect);

console.log(data.sensorLives);

// Or, you can use the `Promise` API.
listSensorLive().then((response) => {
  const data = response.data;
  console.log(data.sensorLives);
});
```

### Using `ListSensorLive`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listSensorLiveRef } from '@mbh/dataconnect';


// Call the `listSensorLiveRef()` function to get a reference to the query.
const ref = listSensorLiveRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listSensorLiveRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.sensorLives);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.sensorLives);
});
```

## ListSensorLiveBySensorId
You can execute the `ListSensorLiveBySensorId` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listSensorLiveBySensorId(vars: ListSensorLiveBySensorIdVariables, options?: ExecuteQueryOptions): QueryPromise<ListSensorLiveBySensorIdData, ListSensorLiveBySensorIdVariables>;

interface ListSensorLiveBySensorIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListSensorLiveBySensorIdVariables): QueryRef<ListSensorLiveBySensorIdData, ListSensorLiveBySensorIdVariables>;
}
export const listSensorLiveBySensorIdRef: ListSensorLiveBySensorIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listSensorLiveBySensorId(dc: DataConnect, vars: ListSensorLiveBySensorIdVariables, options?: ExecuteQueryOptions): QueryPromise<ListSensorLiveBySensorIdData, ListSensorLiveBySensorIdVariables>;

interface ListSensorLiveBySensorIdRef {
  ...
  (dc: DataConnect, vars: ListSensorLiveBySensorIdVariables): QueryRef<ListSensorLiveBySensorIdData, ListSensorLiveBySensorIdVariables>;
}
export const listSensorLiveBySensorIdRef: ListSensorLiveBySensorIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listSensorLiveBySensorIdRef:
```typescript
const name = listSensorLiveBySensorIdRef.operationName;
console.log(name);
```

### Variables
The `ListSensorLiveBySensorId` query requires an argument of type `ListSensorLiveBySensorIdVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListSensorLiveBySensorIdVariables {
  sensorId: UUIDString;
}
```
### Return Type
Recall that executing the `ListSensorLiveBySensorId` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListSensorLiveBySensorIdData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListSensorLiveBySensorIdData {
  sensorLives: ({
    sensorId: UUIDString;
    value: number;
    unit: string;
    recordedAt: TimestampString;
  } & SensorLive_Key)[];
}
```
### Using `ListSensorLiveBySensorId`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listSensorLiveBySensorId, ListSensorLiveBySensorIdVariables } from '@mbh/dataconnect';

// The `ListSensorLiveBySensorId` query requires an argument of type `ListSensorLiveBySensorIdVariables`:
const listSensorLiveBySensorIdVars: ListSensorLiveBySensorIdVariables = {
  sensorId: ..., 
};

// Call the `listSensorLiveBySensorId()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listSensorLiveBySensorId(listSensorLiveBySensorIdVars);
// Variables can be defined inline as well.
const { data } = await listSensorLiveBySensorId({ sensorId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listSensorLiveBySensorId(dataConnect, listSensorLiveBySensorIdVars);

console.log(data.sensorLives);

// Or, you can use the `Promise` API.
listSensorLiveBySensorId(listSensorLiveBySensorIdVars).then((response) => {
  const data = response.data;
  console.log(data.sensorLives);
});
```

### Using `ListSensorLiveBySensorId`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listSensorLiveBySensorIdRef, ListSensorLiveBySensorIdVariables } from '@mbh/dataconnect';

// The `ListSensorLiveBySensorId` query requires an argument of type `ListSensorLiveBySensorIdVariables`:
const listSensorLiveBySensorIdVars: ListSensorLiveBySensorIdVariables = {
  sensorId: ..., 
};

// Call the `listSensorLiveBySensorIdRef()` function to get a reference to the query.
const ref = listSensorLiveBySensorIdRef(listSensorLiveBySensorIdVars);
// Variables can be defined inline as well.
const ref = listSensorLiveBySensorIdRef({ sensorId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listSensorLiveBySensorIdRef(dataConnect, listSensorLiveBySensorIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.sensorLives);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.sensorLives);
});
```

## GetClinician
You can execute the `GetClinician` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
getClinician(vars: GetClinicianVariables, options?: ExecuteQueryOptions): QueryPromise<GetClinicianData, GetClinicianVariables>;

interface GetClinicianRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClinicianVariables): QueryRef<GetClinicianData, GetClinicianVariables>;
}
export const getClinicianRef: GetClinicianRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getClinician(dc: DataConnect, vars: GetClinicianVariables, options?: ExecuteQueryOptions): QueryPromise<GetClinicianData, GetClinicianVariables>;

interface GetClinicianRef {
  ...
  (dc: DataConnect, vars: GetClinicianVariables): QueryRef<GetClinicianData, GetClinicianVariables>;
}
export const getClinicianRef: GetClinicianRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getClinicianRef:
```typescript
const name = getClinicianRef.operationName;
console.log(name);
```

### Variables
The `GetClinician` query requires an argument of type `GetClinicianVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetClinicianVariables {
  cid: UUIDString;
}
```
### Return Type
Recall that executing the `GetClinician` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetClinicianData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetClinicianData {
  clinician?: {
    cid: UUIDString;
    firstName: string;
    lastName: string;
    email: string;
    dob: DateString;
    phone: string;
    aphra: string;
    specialty: string;
    isDeactivated: boolean;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & Clinician_Key;
}
```
### Using `GetClinician`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getClinician, GetClinicianVariables } from '@mbh/dataconnect';

// The `GetClinician` query requires an argument of type `GetClinicianVariables`:
const getClinicianVars: GetClinicianVariables = {
  cid: ..., 
};

// Call the `getClinician()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getClinician(getClinicianVars);
// Variables can be defined inline as well.
const { data } = await getClinician({ cid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getClinician(dataConnect, getClinicianVars);

console.log(data.clinician);

// Or, you can use the `Promise` API.
getClinician(getClinicianVars).then((response) => {
  const data = response.data;
  console.log(data.clinician);
});
```

### Using `GetClinician`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getClinicianRef, GetClinicianVariables } from '@mbh/dataconnect';

// The `GetClinician` query requires an argument of type `GetClinicianVariables`:
const getClinicianVars: GetClinicianVariables = {
  cid: ..., 
};

// Call the `getClinicianRef()` function to get a reference to the query.
const ref = getClinicianRef(getClinicianVars);
// Variables can be defined inline as well.
const ref = getClinicianRef({ cid: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getClinicianRef(dataConnect, getClinicianVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.clinician);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.clinician);
});
```

## ListClinicians
You can execute the `ListClinicians` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listClinicians(options?: ExecuteQueryOptions): QueryPromise<ListCliniciansData, undefined>;

interface ListCliniciansRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCliniciansData, undefined>;
}
export const listCliniciansRef: ListCliniciansRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listClinicians(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCliniciansData, undefined>;

interface ListCliniciansRef {
  ...
  (dc: DataConnect): QueryRef<ListCliniciansData, undefined>;
}
export const listCliniciansRef: ListCliniciansRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCliniciansRef:
```typescript
const name = listCliniciansRef.operationName;
console.log(name);
```

### Variables
The `ListClinicians` query has no variables.
### Return Type
Recall that executing the `ListClinicians` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCliniciansData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListCliniciansData {
  clinicians: ({
    cid: UUIDString;
    firstName: string;
    lastName: string;
    email: string;
    dob: DateString;
    phone: string;
    aphra: string;
    specialty: string;
    isDeactivated: boolean;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & Clinician_Key)[];
}
```
### Using `ListClinicians`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listClinicians } from '@mbh/dataconnect';


// Call the `listClinicians()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listClinicians();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listClinicians(dataConnect);

console.log(data.clinicians);

// Or, you can use the `Promise` API.
listClinicians().then((response) => {
  const data = response.data;
  console.log(data.clinicians);
});
```

### Using `ListClinicians`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCliniciansRef } from '@mbh/dataconnect';


// Call the `listCliniciansRef()` function to get a reference to the query.
const ref = listCliniciansRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCliniciansRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.clinicians);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.clinicians);
});
```

## GetPatient
You can execute the `GetPatient` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
getPatient(vars: GetPatientVariables, options?: ExecuteQueryOptions): QueryPromise<GetPatientData, GetPatientVariables>;

interface GetPatientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPatientVariables): QueryRef<GetPatientData, GetPatientVariables>;
}
export const getPatientRef: GetPatientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPatient(dc: DataConnect, vars: GetPatientVariables, options?: ExecuteQueryOptions): QueryPromise<GetPatientData, GetPatientVariables>;

interface GetPatientRef {
  ...
  (dc: DataConnect, vars: GetPatientVariables): QueryRef<GetPatientData, GetPatientVariables>;
}
export const getPatientRef: GetPatientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPatientRef:
```typescript
const name = getPatientRef.operationName;
console.log(name);
```

### Variables
The `GetPatient` query requires an argument of type `GetPatientVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetPatientVariables {
  pid: UUIDString;
}
```
### Return Type
Recall that executing the `GetPatient` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPatientData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPatientData {
  patient?: {
    pid: UUIDString;
    email: string;
    firstName: string;
    lastName: string;
    dob: DateString;
    phone: string;
    bloodType: string;
    diagnosis: string;
    status: Status;
    address: string;
    createdAt: TimestampString;
    updatedAt?: TimestampString | null;
  } & Patient_Key;
}
```
### Using `GetPatient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPatient, GetPatientVariables } from '@mbh/dataconnect';

// The `GetPatient` query requires an argument of type `GetPatientVariables`:
const getPatientVars: GetPatientVariables = {
  pid: ..., 
};

// Call the `getPatient()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPatient(getPatientVars);
// Variables can be defined inline as well.
const { data } = await getPatient({ pid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPatient(dataConnect, getPatientVars);

console.log(data.patient);

// Or, you can use the `Promise` API.
getPatient(getPatientVars).then((response) => {
  const data = response.data;
  console.log(data.patient);
});
```

### Using `GetPatient`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPatientRef, GetPatientVariables } from '@mbh/dataconnect';

// The `GetPatient` query requires an argument of type `GetPatientVariables`:
const getPatientVars: GetPatientVariables = {
  pid: ..., 
};

// Call the `getPatientRef()` function to get a reference to the query.
const ref = getPatientRef(getPatientVars);
// Variables can be defined inline as well.
const ref = getPatientRef({ pid: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPatientRef(dataConnect, getPatientVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.patient);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.patient);
});
```

## ListPatients
You can execute the `ListPatients` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listPatients(options?: ExecuteQueryOptions): QueryPromise<ListPatientsData, undefined>;

interface ListPatientsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPatientsData, undefined>;
}
export const listPatientsRef: ListPatientsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPatients(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListPatientsData, undefined>;

interface ListPatientsRef {
  ...
  (dc: DataConnect): QueryRef<ListPatientsData, undefined>;
}
export const listPatientsRef: ListPatientsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPatientsRef:
```typescript
const name = listPatientsRef.operationName;
console.log(name);
```

### Variables
The `ListPatients` query has no variables.
### Return Type
Recall that executing the `ListPatients` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPatientsData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPatientsData {
  patients: ({
    pid: UUIDString;
    email: string;
    firstName: string;
    lastName: string;
    dob: DateString;
    phone: string;
    bloodType: string;
    diagnosis: string;
    status: Status;
    address: string;
    createdAt: TimestampString;
    updatedAt?: TimestampString | null;
  } & Patient_Key)[];
}
```
### Using `ListPatients`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPatients } from '@mbh/dataconnect';


// Call the `listPatients()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPatients();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPatients(dataConnect);

console.log(data.patients);

// Or, you can use the `Promise` API.
listPatients().then((response) => {
  const data = response.data;
  console.log(data.patients);
});
```

### Using `ListPatients`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPatientsRef } from '@mbh/dataconnect';


// Call the `listPatientsRef()` function to get a reference to the query.
const ref = listPatientsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPatientsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.patients);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.patients);
});
```

## PatientCountByStatus
You can execute the `PatientCountByStatus` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
patientCountByStatus(options?: ExecuteQueryOptions): QueryPromise<PatientCountByStatusData, undefined>;

interface PatientCountByStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<PatientCountByStatusData, undefined>;
}
export const patientCountByStatusRef: PatientCountByStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
patientCountByStatus(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<PatientCountByStatusData, undefined>;

interface PatientCountByStatusRef {
  ...
  (dc: DataConnect): QueryRef<PatientCountByStatusData, undefined>;
}
export const patientCountByStatusRef: PatientCountByStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the patientCountByStatusRef:
```typescript
const name = patientCountByStatusRef.operationName;
console.log(name);
```

### Variables
The `PatientCountByStatus` query has no variables.
### Return Type
Recall that executing the `PatientCountByStatus` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `PatientCountByStatusData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface PatientCountByStatusData {
  patients: ({
    _count: number;
    status: Status;
  })[];
}
```
### Using `PatientCountByStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, patientCountByStatus } from '@mbh/dataconnect';


// Call the `patientCountByStatus()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await patientCountByStatus();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await patientCountByStatus(dataConnect);

console.log(data.patients);

// Or, you can use the `Promise` API.
patientCountByStatus().then((response) => {
  const data = response.data;
  console.log(data.patients);
});
```

### Using `PatientCountByStatus`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, patientCountByStatusRef } from '@mbh/dataconnect';


// Call the `patientCountByStatusRef()` function to get a reference to the query.
const ref = patientCountByStatusRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = patientCountByStatusRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.patients);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.patients);
});
```

## ListPatientsByStatus
You can execute the `ListPatientsByStatus` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listPatientsByStatus(vars: ListPatientsByStatusVariables, options?: ExecuteQueryOptions): QueryPromise<ListPatientsByStatusData, ListPatientsByStatusVariables>;

interface ListPatientsByStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListPatientsByStatusVariables): QueryRef<ListPatientsByStatusData, ListPatientsByStatusVariables>;
}
export const listPatientsByStatusRef: ListPatientsByStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPatientsByStatus(dc: DataConnect, vars: ListPatientsByStatusVariables, options?: ExecuteQueryOptions): QueryPromise<ListPatientsByStatusData, ListPatientsByStatusVariables>;

interface ListPatientsByStatusRef {
  ...
  (dc: DataConnect, vars: ListPatientsByStatusVariables): QueryRef<ListPatientsByStatusData, ListPatientsByStatusVariables>;
}
export const listPatientsByStatusRef: ListPatientsByStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPatientsByStatusRef:
```typescript
const name = listPatientsByStatusRef.operationName;
console.log(name);
```

### Variables
The `ListPatientsByStatus` query requires an argument of type `ListPatientsByStatusVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListPatientsByStatusVariables {
  status: Status;
}
```
### Return Type
Recall that executing the `ListPatientsByStatus` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPatientsByStatusData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPatientsByStatusData {
  patients: ({
    pid: UUIDString;
    email: string;
    firstName: string;
    lastName: string;
    dob: DateString;
    phone: string;
    bloodType: string;
    diagnosis: string;
    status: Status;
    address: string;
    createdAt: TimestampString;
    updatedAt?: TimestampString | null;
  } & Patient_Key)[];
}
```
### Using `ListPatientsByStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPatientsByStatus, ListPatientsByStatusVariables } from '@mbh/dataconnect';

// The `ListPatientsByStatus` query requires an argument of type `ListPatientsByStatusVariables`:
const listPatientsByStatusVars: ListPatientsByStatusVariables = {
  status: ..., 
};

// Call the `listPatientsByStatus()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPatientsByStatus(listPatientsByStatusVars);
// Variables can be defined inline as well.
const { data } = await listPatientsByStatus({ status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPatientsByStatus(dataConnect, listPatientsByStatusVars);

console.log(data.patients);

// Or, you can use the `Promise` API.
listPatientsByStatus(listPatientsByStatusVars).then((response) => {
  const data = response.data;
  console.log(data.patients);
});
```

### Using `ListPatientsByStatus`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPatientsByStatusRef, ListPatientsByStatusVariables } from '@mbh/dataconnect';

// The `ListPatientsByStatus` query requires an argument of type `ListPatientsByStatusVariables`:
const listPatientsByStatusVars: ListPatientsByStatusVariables = {
  status: ..., 
};

// Call the `listPatientsByStatusRef()` function to get a reference to the query.
const ref = listPatientsByStatusRef(listPatientsByStatusVars);
// Variables can be defined inline as well.
const ref = listPatientsByStatusRef({ status: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPatientsByStatusRef(dataConnect, listPatientsByStatusVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.patients);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.patients);
});
```

## ListPatientsByStatuses
You can execute the `ListPatientsByStatuses` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listPatientsByStatuses(vars: ListPatientsByStatusesVariables, options?: ExecuteQueryOptions): QueryPromise<ListPatientsByStatusesData, ListPatientsByStatusesVariables>;

interface ListPatientsByStatusesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListPatientsByStatusesVariables): QueryRef<ListPatientsByStatusesData, ListPatientsByStatusesVariables>;
}
export const listPatientsByStatusesRef: ListPatientsByStatusesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPatientsByStatuses(dc: DataConnect, vars: ListPatientsByStatusesVariables, options?: ExecuteQueryOptions): QueryPromise<ListPatientsByStatusesData, ListPatientsByStatusesVariables>;

interface ListPatientsByStatusesRef {
  ...
  (dc: DataConnect, vars: ListPatientsByStatusesVariables): QueryRef<ListPatientsByStatusesData, ListPatientsByStatusesVariables>;
}
export const listPatientsByStatusesRef: ListPatientsByStatusesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPatientsByStatusesRef:
```typescript
const name = listPatientsByStatusesRef.operationName;
console.log(name);
```

### Variables
The `ListPatientsByStatuses` query requires an argument of type `ListPatientsByStatusesVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListPatientsByStatusesVariables {
  statuses: Status[];
}
```
### Return Type
Recall that executing the `ListPatientsByStatuses` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPatientsByStatusesData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPatientsByStatusesData {
  patients: ({
    pid: UUIDString;
    email: string;
    firstName: string;
    lastName: string;
    dob: DateString;
    phone: string;
    bloodType: string;
    diagnosis: string;
    status: Status;
    address: string;
    createdAt: TimestampString;
    updatedAt?: TimestampString | null;
  } & Patient_Key)[];
}
```
### Using `ListPatientsByStatuses`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPatientsByStatuses, ListPatientsByStatusesVariables } from '@mbh/dataconnect';

// The `ListPatientsByStatuses` query requires an argument of type `ListPatientsByStatusesVariables`:
const listPatientsByStatusesVars: ListPatientsByStatusesVariables = {
  statuses: ..., 
};

// Call the `listPatientsByStatuses()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPatientsByStatuses(listPatientsByStatusesVars);
// Variables can be defined inline as well.
const { data } = await listPatientsByStatuses({ statuses: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPatientsByStatuses(dataConnect, listPatientsByStatusesVars);

console.log(data.patients);

// Or, you can use the `Promise` API.
listPatientsByStatuses(listPatientsByStatusesVars).then((response) => {
  const data = response.data;
  console.log(data.patients);
});
```

### Using `ListPatientsByStatuses`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPatientsByStatusesRef, ListPatientsByStatusesVariables } from '@mbh/dataconnect';

// The `ListPatientsByStatuses` query requires an argument of type `ListPatientsByStatusesVariables`:
const listPatientsByStatusesVars: ListPatientsByStatusesVariables = {
  statuses: ..., 
};

// Call the `listPatientsByStatusesRef()` function to get a reference to the query.
const ref = listPatientsByStatusesRef(listPatientsByStatusesVars);
// Variables can be defined inline as well.
const ref = listPatientsByStatusesRef({ statuses: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPatientsByStatusesRef(dataConnect, listPatientsByStatusesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.patients);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.patients);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `ubhsdk` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateAppointment
You can execute the `CreateAppointment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createAppointment(vars: CreateAppointmentVariables): MutationPromise<CreateAppointmentData, CreateAppointmentVariables>;

interface CreateAppointmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateAppointmentVariables): MutationRef<CreateAppointmentData, CreateAppointmentVariables>;
}
export const createAppointmentRef: CreateAppointmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createAppointment(dc: DataConnect, vars: CreateAppointmentVariables): MutationPromise<CreateAppointmentData, CreateAppointmentVariables>;

interface CreateAppointmentRef {
  ...
  (dc: DataConnect, vars: CreateAppointmentVariables): MutationRef<CreateAppointmentData, CreateAppointmentVariables>;
}
export const createAppointmentRef: CreateAppointmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createAppointmentRef:
```typescript
const name = createAppointmentRef.operationName;
console.log(name);
```

### Variables
The `CreateAppointment` mutation requires an argument of type `CreateAppointmentVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateAppointmentVariables {
  patientPid: UUIDString;
  clinicianCid: UUIDString;
  appointmentReason: string;
  scheduledAt: TimestampString;
}
```
### Return Type
Recall that executing the `CreateAppointment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateAppointmentData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateAppointmentData {
  appointment_insert: Appointment_Key;
}
```
### Using `CreateAppointment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createAppointment, CreateAppointmentVariables } from '@mbh/dataconnect';

// The `CreateAppointment` mutation requires an argument of type `CreateAppointmentVariables`:
const createAppointmentVars: CreateAppointmentVariables = {
  patientPid: ..., 
  clinicianCid: ..., 
  appointmentReason: ..., 
  scheduledAt: ..., 
};

// Call the `createAppointment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createAppointment(createAppointmentVars);
// Variables can be defined inline as well.
const { data } = await createAppointment({ patientPid: ..., clinicianCid: ..., appointmentReason: ..., scheduledAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createAppointment(dataConnect, createAppointmentVars);

console.log(data.appointment_insert);

// Or, you can use the `Promise` API.
createAppointment(createAppointmentVars).then((response) => {
  const data = response.data;
  console.log(data.appointment_insert);
});
```

### Using `CreateAppointment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createAppointmentRef, CreateAppointmentVariables } from '@mbh/dataconnect';

// The `CreateAppointment` mutation requires an argument of type `CreateAppointmentVariables`:
const createAppointmentVars: CreateAppointmentVariables = {
  patientPid: ..., 
  clinicianCid: ..., 
  appointmentReason: ..., 
  scheduledAt: ..., 
};

// Call the `createAppointmentRef()` function to get a reference to the mutation.
const ref = createAppointmentRef(createAppointmentVars);
// Variables can be defined inline as well.
const ref = createAppointmentRef({ patientPid: ..., clinicianCid: ..., appointmentReason: ..., scheduledAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createAppointmentRef(dataConnect, createAppointmentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.appointment_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.appointment_insert);
});
```

## EditAppointment
You can execute the `EditAppointment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
editAppointment(vars: EditAppointmentVariables): MutationPromise<EditAppointmentData, EditAppointmentVariables>;

interface EditAppointmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: EditAppointmentVariables): MutationRef<EditAppointmentData, EditAppointmentVariables>;
}
export const editAppointmentRef: EditAppointmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
editAppointment(dc: DataConnect, vars: EditAppointmentVariables): MutationPromise<EditAppointmentData, EditAppointmentVariables>;

interface EditAppointmentRef {
  ...
  (dc: DataConnect, vars: EditAppointmentVariables): MutationRef<EditAppointmentData, EditAppointmentVariables>;
}
export const editAppointmentRef: EditAppointmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the editAppointmentRef:
```typescript
const name = editAppointmentRef.operationName;
console.log(name);
```

### Variables
The `EditAppointment` mutation requires an argument of type `EditAppointmentVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface EditAppointmentVariables {
  id: UUIDString;
  appointmentReason?: string | null;
  appointmentNotes?: string | null;
  scheduledAt?: TimestampString | null;
  status?: AppointmentStatus | null;
}
```
### Return Type
Recall that executing the `EditAppointment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `EditAppointmentData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface EditAppointmentData {
  appointment_update?: Appointment_Key | null;
}
```
### Using `EditAppointment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, editAppointment, EditAppointmentVariables } from '@mbh/dataconnect';

// The `EditAppointment` mutation requires an argument of type `EditAppointmentVariables`:
const editAppointmentVars: EditAppointmentVariables = {
  id: ..., 
  appointmentReason: ..., // optional
  appointmentNotes: ..., // optional
  scheduledAt: ..., // optional
  status: ..., // optional
};

// Call the `editAppointment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await editAppointment(editAppointmentVars);
// Variables can be defined inline as well.
const { data } = await editAppointment({ id: ..., appointmentReason: ..., appointmentNotes: ..., scheduledAt: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await editAppointment(dataConnect, editAppointmentVars);

console.log(data.appointment_update);

// Or, you can use the `Promise` API.
editAppointment(editAppointmentVars).then((response) => {
  const data = response.data;
  console.log(data.appointment_update);
});
```

### Using `EditAppointment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, editAppointmentRef, EditAppointmentVariables } from '@mbh/dataconnect';

// The `EditAppointment` mutation requires an argument of type `EditAppointmentVariables`:
const editAppointmentVars: EditAppointmentVariables = {
  id: ..., 
  appointmentReason: ..., // optional
  appointmentNotes: ..., // optional
  scheduledAt: ..., // optional
  status: ..., // optional
};

// Call the `editAppointmentRef()` function to get a reference to the mutation.
const ref = editAppointmentRef(editAppointmentVars);
// Variables can be defined inline as well.
const ref = editAppointmentRef({ id: ..., appointmentReason: ..., appointmentNotes: ..., scheduledAt: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = editAppointmentRef(dataConnect, editAppointmentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.appointment_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.appointment_update);
});
```

## CancelAppointment
You can execute the `CancelAppointment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
cancelAppointment(vars: CancelAppointmentVariables): MutationPromise<CancelAppointmentData, CancelAppointmentVariables>;

interface CancelAppointmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CancelAppointmentVariables): MutationRef<CancelAppointmentData, CancelAppointmentVariables>;
}
export const cancelAppointmentRef: CancelAppointmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
cancelAppointment(dc: DataConnect, vars: CancelAppointmentVariables): MutationPromise<CancelAppointmentData, CancelAppointmentVariables>;

interface CancelAppointmentRef {
  ...
  (dc: DataConnect, vars: CancelAppointmentVariables): MutationRef<CancelAppointmentData, CancelAppointmentVariables>;
}
export const cancelAppointmentRef: CancelAppointmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the cancelAppointmentRef:
```typescript
const name = cancelAppointmentRef.operationName;
console.log(name);
```

### Variables
The `CancelAppointment` mutation requires an argument of type `CancelAppointmentVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CancelAppointmentVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `CancelAppointment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CancelAppointmentData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CancelAppointmentData {
  appointment_update?: Appointment_Key | null;
}
```
### Using `CancelAppointment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, cancelAppointment, CancelAppointmentVariables } from '@mbh/dataconnect';

// The `CancelAppointment` mutation requires an argument of type `CancelAppointmentVariables`:
const cancelAppointmentVars: CancelAppointmentVariables = {
  id: ..., 
};

// Call the `cancelAppointment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await cancelAppointment(cancelAppointmentVars);
// Variables can be defined inline as well.
const { data } = await cancelAppointment({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await cancelAppointment(dataConnect, cancelAppointmentVars);

console.log(data.appointment_update);

// Or, you can use the `Promise` API.
cancelAppointment(cancelAppointmentVars).then((response) => {
  const data = response.data;
  console.log(data.appointment_update);
});
```

### Using `CancelAppointment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, cancelAppointmentRef, CancelAppointmentVariables } from '@mbh/dataconnect';

// The `CancelAppointment` mutation requires an argument of type `CancelAppointmentVariables`:
const cancelAppointmentVars: CancelAppointmentVariables = {
  id: ..., 
};

// Call the `cancelAppointmentRef()` function to get a reference to the mutation.
const ref = cancelAppointmentRef(cancelAppointmentVars);
// Variables can be defined inline as well.
const ref = cancelAppointmentRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = cancelAppointmentRef(dataConnect, cancelAppointmentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.appointment_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.appointment_update);
});
```

## CreateHeart
You can execute the `CreateHeart` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createHeart(vars: CreateHeartVariables): MutationPromise<CreateHeartData, CreateHeartVariables>;

interface CreateHeartRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateHeartVariables): MutationRef<CreateHeartData, CreateHeartVariables>;
}
export const createHeartRef: CreateHeartRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createHeart(dc: DataConnect, vars: CreateHeartVariables): MutationPromise<CreateHeartData, CreateHeartVariables>;

interface CreateHeartRef {
  ...
  (dc: DataConnect, vars: CreateHeartVariables): MutationRef<CreateHeartData, CreateHeartVariables>;
}
export const createHeartRef: CreateHeartRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createHeartRef:
```typescript
const name = createHeartRef.operationName;
console.log(name);
```

### Variables
The `CreateHeart` mutation requires an argument of type `CreateHeartVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateHeartVariables {
  patientPid: UUIDString;
}
```
### Return Type
Recall that executing the `CreateHeart` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateHeartData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateHeartData {
  heart_insert: Heart_Key;
}
```
### Using `CreateHeart`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createHeart, CreateHeartVariables } from '@mbh/dataconnect';

// The `CreateHeart` mutation requires an argument of type `CreateHeartVariables`:
const createHeartVars: CreateHeartVariables = {
  patientPid: ..., 
};

// Call the `createHeart()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createHeart(createHeartVars);
// Variables can be defined inline as well.
const { data } = await createHeart({ patientPid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createHeart(dataConnect, createHeartVars);

console.log(data.heart_insert);

// Or, you can use the `Promise` API.
createHeart(createHeartVars).then((response) => {
  const data = response.data;
  console.log(data.heart_insert);
});
```

### Using `CreateHeart`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createHeartRef, CreateHeartVariables } from '@mbh/dataconnect';

// The `CreateHeart` mutation requires an argument of type `CreateHeartVariables`:
const createHeartVars: CreateHeartVariables = {
  patientPid: ..., 
};

// Call the `createHeartRef()` function to get a reference to the mutation.
const ref = createHeartRef(createHeartVars);
// Variables can be defined inline as well.
const ref = createHeartRef({ patientPid: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createHeartRef(dataConnect, createHeartVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.heart_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.heart_insert);
});
```

## CreateLogbookEntry
You can execute the `CreateLogbookEntry` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createLogbookEntry(vars: CreateLogbookEntryVariables): MutationPromise<CreateLogbookEntryData, CreateLogbookEntryVariables>;

interface CreateLogbookEntryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateLogbookEntryVariables): MutationRef<CreateLogbookEntryData, CreateLogbookEntryVariables>;
}
export const createLogbookEntryRef: CreateLogbookEntryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createLogbookEntry(dc: DataConnect, vars: CreateLogbookEntryVariables): MutationPromise<CreateLogbookEntryData, CreateLogbookEntryVariables>;

interface CreateLogbookEntryRef {
  ...
  (dc: DataConnect, vars: CreateLogbookEntryVariables): MutationRef<CreateLogbookEntryData, CreateLogbookEntryVariables>;
}
export const createLogbookEntryRef: CreateLogbookEntryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createLogbookEntryRef:
```typescript
const name = createLogbookEntryRef.operationName;
console.log(name);
```

### Variables
The `CreateLogbookEntry` mutation requires an argument of type `CreateLogbookEntryVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateLogbookEntryVariables {
  patientPid: UUIDString;
  inr: number;
  weight: number;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
}
```
### Return Type
Recall that executing the `CreateLogbookEntry` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateLogbookEntryData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateLogbookEntryData {
  logbookEntry_insert: LogbookEntry_Key;
}
```
### Using `CreateLogbookEntry`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createLogbookEntry, CreateLogbookEntryVariables } from '@mbh/dataconnect';

// The `CreateLogbookEntry` mutation requires an argument of type `CreateLogbookEntryVariables`:
const createLogbookEntryVars: CreateLogbookEntryVariables = {
  patientPid: ..., 
  inr: ..., 
  weight: ..., 
  bloodPressureSystolic: ..., 
  bloodPressureDiastolic: ..., 
};

// Call the `createLogbookEntry()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createLogbookEntry(createLogbookEntryVars);
// Variables can be defined inline as well.
const { data } = await createLogbookEntry({ patientPid: ..., inr: ..., weight: ..., bloodPressureSystolic: ..., bloodPressureDiastolic: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createLogbookEntry(dataConnect, createLogbookEntryVars);

console.log(data.logbookEntry_insert);

// Or, you can use the `Promise` API.
createLogbookEntry(createLogbookEntryVars).then((response) => {
  const data = response.data;
  console.log(data.logbookEntry_insert);
});
```

### Using `CreateLogbookEntry`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createLogbookEntryRef, CreateLogbookEntryVariables } from '@mbh/dataconnect';

// The `CreateLogbookEntry` mutation requires an argument of type `CreateLogbookEntryVariables`:
const createLogbookEntryVars: CreateLogbookEntryVariables = {
  patientPid: ..., 
  inr: ..., 
  weight: ..., 
  bloodPressureSystolic: ..., 
  bloodPressureDiastolic: ..., 
};

// Call the `createLogbookEntryRef()` function to get a reference to the mutation.
const ref = createLogbookEntryRef(createLogbookEntryVars);
// Variables can be defined inline as well.
const ref = createLogbookEntryRef({ patientPid: ..., inr: ..., weight: ..., bloodPressureSystolic: ..., bloodPressureDiastolic: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createLogbookEntryRef(dataConnect, createLogbookEntryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.logbookEntry_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.logbookEntry_insert);
});
```

## CreateFile
You can execute the `CreateFile` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createFile(vars: CreateFileVariables): MutationPromise<CreateFileData, CreateFileVariables>;

interface CreateFileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateFileVariables): MutationRef<CreateFileData, CreateFileVariables>;
}
export const createFileRef: CreateFileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createFile(dc: DataConnect, vars: CreateFileVariables): MutationPromise<CreateFileData, CreateFileVariables>;

interface CreateFileRef {
  ...
  (dc: DataConnect, vars: CreateFileVariables): MutationRef<CreateFileData, CreateFileVariables>;
}
export const createFileRef: CreateFileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createFileRef:
```typescript
const name = createFileRef.operationName;
console.log(name);
```

### Variables
The `CreateFile` mutation requires an argument of type `CreateFileVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateFileVariables {
  uploadedByPatientPid: UUIDString;
  fileName: string;
  storagePath: string;
  mimeType: string;
  fileSizeBytes: number;
}
```
### Return Type
Recall that executing the `CreateFile` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateFileData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateFileData {
  file_insert: File_Key;
}
```
### Using `CreateFile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createFile, CreateFileVariables } from '@mbh/dataconnect';

// The `CreateFile` mutation requires an argument of type `CreateFileVariables`:
const createFileVars: CreateFileVariables = {
  uploadedByPatientPid: ..., 
  fileName: ..., 
  storagePath: ..., 
  mimeType: ..., 
  fileSizeBytes: ..., 
};

// Call the `createFile()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createFile(createFileVars);
// Variables can be defined inline as well.
const { data } = await createFile({ uploadedByPatientPid: ..., fileName: ..., storagePath: ..., mimeType: ..., fileSizeBytes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createFile(dataConnect, createFileVars);

console.log(data.file_insert);

// Or, you can use the `Promise` API.
createFile(createFileVars).then((response) => {
  const data = response.data;
  console.log(data.file_insert);
});
```

### Using `CreateFile`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createFileRef, CreateFileVariables } from '@mbh/dataconnect';

// The `CreateFile` mutation requires an argument of type `CreateFileVariables`:
const createFileVars: CreateFileVariables = {
  uploadedByPatientPid: ..., 
  fileName: ..., 
  storagePath: ..., 
  mimeType: ..., 
  fileSizeBytes: ..., 
};

// Call the `createFileRef()` function to get a reference to the mutation.
const ref = createFileRef(createFileVars);
// Variables can be defined inline as well.
const ref = createFileRef({ uploadedByPatientPid: ..., fileName: ..., storagePath: ..., mimeType: ..., fileSizeBytes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createFileRef(dataConnect, createFileVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.file_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.file_insert);
});
```

## AttachFileToLogbookEntry
You can execute the `AttachFileToLogbookEntry` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
attachFileToLogbookEntry(vars: AttachFileToLogbookEntryVariables): MutationPromise<AttachFileToLogbookEntryData, AttachFileToLogbookEntryVariables>;

interface AttachFileToLogbookEntryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AttachFileToLogbookEntryVariables): MutationRef<AttachFileToLogbookEntryData, AttachFileToLogbookEntryVariables>;
}
export const attachFileToLogbookEntryRef: AttachFileToLogbookEntryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
attachFileToLogbookEntry(dc: DataConnect, vars: AttachFileToLogbookEntryVariables): MutationPromise<AttachFileToLogbookEntryData, AttachFileToLogbookEntryVariables>;

interface AttachFileToLogbookEntryRef {
  ...
  (dc: DataConnect, vars: AttachFileToLogbookEntryVariables): MutationRef<AttachFileToLogbookEntryData, AttachFileToLogbookEntryVariables>;
}
export const attachFileToLogbookEntryRef: AttachFileToLogbookEntryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the attachFileToLogbookEntryRef:
```typescript
const name = attachFileToLogbookEntryRef.operationName;
console.log(name);
```

### Variables
The `AttachFileToLogbookEntry` mutation requires an argument of type `AttachFileToLogbookEntryVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AttachFileToLogbookEntryVariables {
  logbookEntryId: UUIDString;
  fileId: UUIDString;
}
```
### Return Type
Recall that executing the `AttachFileToLogbookEntry` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AttachFileToLogbookEntryData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AttachFileToLogbookEntryData {
  logbookEntryFile_insert: LogbookEntryFile_Key;
}
```
### Using `AttachFileToLogbookEntry`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, attachFileToLogbookEntry, AttachFileToLogbookEntryVariables } from '@mbh/dataconnect';

// The `AttachFileToLogbookEntry` mutation requires an argument of type `AttachFileToLogbookEntryVariables`:
const attachFileToLogbookEntryVars: AttachFileToLogbookEntryVariables = {
  logbookEntryId: ..., 
  fileId: ..., 
};

// Call the `attachFileToLogbookEntry()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await attachFileToLogbookEntry(attachFileToLogbookEntryVars);
// Variables can be defined inline as well.
const { data } = await attachFileToLogbookEntry({ logbookEntryId: ..., fileId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await attachFileToLogbookEntry(dataConnect, attachFileToLogbookEntryVars);

console.log(data.logbookEntryFile_insert);

// Or, you can use the `Promise` API.
attachFileToLogbookEntry(attachFileToLogbookEntryVars).then((response) => {
  const data = response.data;
  console.log(data.logbookEntryFile_insert);
});
```

### Using `AttachFileToLogbookEntry`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, attachFileToLogbookEntryRef, AttachFileToLogbookEntryVariables } from '@mbh/dataconnect';

// The `AttachFileToLogbookEntry` mutation requires an argument of type `AttachFileToLogbookEntryVariables`:
const attachFileToLogbookEntryVars: AttachFileToLogbookEntryVariables = {
  logbookEntryId: ..., 
  fileId: ..., 
};

// Call the `attachFileToLogbookEntryRef()` function to get a reference to the mutation.
const ref = attachFileToLogbookEntryRef(attachFileToLogbookEntryVars);
// Variables can be defined inline as well.
const ref = attachFileToLogbookEntryRef({ logbookEntryId: ..., fileId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = attachFileToLogbookEntryRef(dataConnect, attachFileToLogbookEntryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.logbookEntryFile_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.logbookEntryFile_insert);
});
```

## CreateLogbookFileMetadata
You can execute the `CreateLogbookFileMetadata` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createLogbookFileMetadata(vars: CreateLogbookFileMetadataVariables): MutationPromise<CreateLogbookFileMetadataData, CreateLogbookFileMetadataVariables>;

interface CreateLogbookFileMetadataRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateLogbookFileMetadataVariables): MutationRef<CreateLogbookFileMetadataData, CreateLogbookFileMetadataVariables>;
}
export const createLogbookFileMetadataRef: CreateLogbookFileMetadataRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createLogbookFileMetadata(dc: DataConnect, vars: CreateLogbookFileMetadataVariables): MutationPromise<CreateLogbookFileMetadataData, CreateLogbookFileMetadataVariables>;

interface CreateLogbookFileMetadataRef {
  ...
  (dc: DataConnect, vars: CreateLogbookFileMetadataVariables): MutationRef<CreateLogbookFileMetadataData, CreateLogbookFileMetadataVariables>;
}
export const createLogbookFileMetadataRef: CreateLogbookFileMetadataRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createLogbookFileMetadataRef:
```typescript
const name = createLogbookFileMetadataRef.operationName;
console.log(name);
```

### Variables
The `CreateLogbookFileMetadata` mutation requires an argument of type `CreateLogbookFileMetadataVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateLogbookFileMetadataVariables {
  fileId: UUIDString;
  logbookEntryId: UUIDString;
  fileName: string;
  storagePath: string;
  mimeType: string;
  fileSizeBytes: number;
}
```
### Return Type
Recall that executing the `CreateLogbookFileMetadata` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateLogbookFileMetadataData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateLogbookFileMetadataData {
  file_insert: File_Key;
  logbookEntryFile_insert: LogbookEntryFile_Key;
}
```
### Using `CreateLogbookFileMetadata`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createLogbookFileMetadata, CreateLogbookFileMetadataVariables } from '@mbh/dataconnect';

// The `CreateLogbookFileMetadata` mutation requires an argument of type `CreateLogbookFileMetadataVariables`:
const createLogbookFileMetadataVars: CreateLogbookFileMetadataVariables = {
  fileId: ..., 
  logbookEntryId: ..., 
  fileName: ..., 
  storagePath: ..., 
  mimeType: ..., 
  fileSizeBytes: ..., 
};

// Call the `createLogbookFileMetadata()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createLogbookFileMetadata(createLogbookFileMetadataVars);
// Variables can be defined inline as well.
const { data } = await createLogbookFileMetadata({ fileId: ..., logbookEntryId: ..., fileName: ..., storagePath: ..., mimeType: ..., fileSizeBytes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createLogbookFileMetadata(dataConnect, createLogbookFileMetadataVars);

console.log(data.file_insert);
console.log(data.logbookEntryFile_insert);

// Or, you can use the `Promise` API.
createLogbookFileMetadata(createLogbookFileMetadataVars).then((response) => {
  const data = response.data;
  console.log(data.file_insert);
  console.log(data.logbookEntryFile_insert);
});
```

### Using `CreateLogbookFileMetadata`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createLogbookFileMetadataRef, CreateLogbookFileMetadataVariables } from '@mbh/dataconnect';

// The `CreateLogbookFileMetadata` mutation requires an argument of type `CreateLogbookFileMetadataVariables`:
const createLogbookFileMetadataVars: CreateLogbookFileMetadataVariables = {
  fileId: ..., 
  logbookEntryId: ..., 
  fileName: ..., 
  storagePath: ..., 
  mimeType: ..., 
  fileSizeBytes: ..., 
};

// Call the `createLogbookFileMetadataRef()` function to get a reference to the mutation.
const ref = createLogbookFileMetadataRef(createLogbookFileMetadataVars);
// Variables can be defined inline as well.
const ref = createLogbookFileMetadataRef({ fileId: ..., logbookEntryId: ..., fileName: ..., storagePath: ..., mimeType: ..., fileSizeBytes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createLogbookFileMetadataRef(dataConnect, createLogbookFileMetadataVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.file_insert);
console.log(data.logbookEntryFile_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.file_insert);
  console.log(data.logbookEntryFile_insert);
});
```

## CreateSensor
You can execute the `CreateSensor` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createSensor(vars: CreateSensorVariables): MutationPromise<CreateSensorData, CreateSensorVariables>;

interface CreateSensorRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSensorVariables): MutationRef<CreateSensorData, CreateSensorVariables>;
}
export const createSensorRef: CreateSensorRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createSensor(dc: DataConnect, vars: CreateSensorVariables): MutationPromise<CreateSensorData, CreateSensorVariables>;

interface CreateSensorRef {
  ...
  (dc: DataConnect, vars: CreateSensorVariables): MutationRef<CreateSensorData, CreateSensorVariables>;
}
export const createSensorRef: CreateSensorRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createSensorRef:
```typescript
const name = createSensorRef.operationName;
console.log(name);
```

### Variables
The `CreateSensor` mutation requires an argument of type `CreateSensorVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateSensorVariables {
  sensorId?: UUIDString | null;
  heartId: UUIDString;
  type: string;
  location: string;
  unit: string;
  minThreshold: number;
  maxThreshold: number;
  status: boolean;
}
```
### Return Type
Recall that executing the `CreateSensor` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateSensorData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateSensorData {
  sensor_insert: Sensor_Key;
}
```
### Using `CreateSensor`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createSensor, CreateSensorVariables } from '@mbh/dataconnect';

// The `CreateSensor` mutation requires an argument of type `CreateSensorVariables`:
const createSensorVars: CreateSensorVariables = {
  sensorId: ..., // optional
  heartId: ..., 
  type: ..., 
  location: ..., 
  unit: ..., 
  minThreshold: ..., 
  maxThreshold: ..., 
  status: ..., 
};

// Call the `createSensor()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createSensor(createSensorVars);
// Variables can be defined inline as well.
const { data } = await createSensor({ sensorId: ..., heartId: ..., type: ..., location: ..., unit: ..., minThreshold: ..., maxThreshold: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createSensor(dataConnect, createSensorVars);

console.log(data.sensor_insert);

// Or, you can use the `Promise` API.
createSensor(createSensorVars).then((response) => {
  const data = response.data;
  console.log(data.sensor_insert);
});
```

### Using `CreateSensor`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createSensorRef, CreateSensorVariables } from '@mbh/dataconnect';

// The `CreateSensor` mutation requires an argument of type `CreateSensorVariables`:
const createSensorVars: CreateSensorVariables = {
  sensorId: ..., // optional
  heartId: ..., 
  type: ..., 
  location: ..., 
  unit: ..., 
  minThreshold: ..., 
  maxThreshold: ..., 
  status: ..., 
};

// Call the `createSensorRef()` function to get a reference to the mutation.
const ref = createSensorRef(createSensorVars);
// Variables can be defined inline as well.
const ref = createSensorRef({ sensorId: ..., heartId: ..., type: ..., location: ..., unit: ..., minThreshold: ..., maxThreshold: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createSensorRef(dataConnect, createSensorVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.sensor_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.sensor_insert);
});
```

## UpdateSensor
You can execute the `UpdateSensor` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
updateSensor(vars: UpdateSensorVariables): MutationPromise<UpdateSensorData, UpdateSensorVariables>;

interface UpdateSensorRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSensorVariables): MutationRef<UpdateSensorData, UpdateSensorVariables>;
}
export const updateSensorRef: UpdateSensorRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateSensor(dc: DataConnect, vars: UpdateSensorVariables): MutationPromise<UpdateSensorData, UpdateSensorVariables>;

interface UpdateSensorRef {
  ...
  (dc: DataConnect, vars: UpdateSensorVariables): MutationRef<UpdateSensorData, UpdateSensorVariables>;
}
export const updateSensorRef: UpdateSensorRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateSensorRef:
```typescript
const name = updateSensorRef.operationName;
console.log(name);
```

### Variables
The `UpdateSensor` mutation requires an argument of type `UpdateSensorVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateSensorVariables {
  sensorId: UUIDString;
  heartId: UUIDString;
  type: string;
  location: string;
  unit: string;
  minThreshold: number;
  maxThreshold: number;
  status: boolean;
}
```
### Return Type
Recall that executing the `UpdateSensor` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateSensorData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateSensorData {
  sensor_update?: Sensor_Key | null;
}
```
### Using `UpdateSensor`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateSensor, UpdateSensorVariables } from '@mbh/dataconnect';

// The `UpdateSensor` mutation requires an argument of type `UpdateSensorVariables`:
const updateSensorVars: UpdateSensorVariables = {
  sensorId: ..., 
  heartId: ..., 
  type: ..., 
  location: ..., 
  unit: ..., 
  minThreshold: ..., 
  maxThreshold: ..., 
  status: ..., 
};

// Call the `updateSensor()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateSensor(updateSensorVars);
// Variables can be defined inline as well.
const { data } = await updateSensor({ sensorId: ..., heartId: ..., type: ..., location: ..., unit: ..., minThreshold: ..., maxThreshold: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateSensor(dataConnect, updateSensorVars);

console.log(data.sensor_update);

// Or, you can use the `Promise` API.
updateSensor(updateSensorVars).then((response) => {
  const data = response.data;
  console.log(data.sensor_update);
});
```

### Using `UpdateSensor`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateSensorRef, UpdateSensorVariables } from '@mbh/dataconnect';

// The `UpdateSensor` mutation requires an argument of type `UpdateSensorVariables`:
const updateSensorVars: UpdateSensorVariables = {
  sensorId: ..., 
  heartId: ..., 
  type: ..., 
  location: ..., 
  unit: ..., 
  minThreshold: ..., 
  maxThreshold: ..., 
  status: ..., 
};

// Call the `updateSensorRef()` function to get a reference to the mutation.
const ref = updateSensorRef(updateSensorVars);
// Variables can be defined inline as well.
const ref = updateSensorRef({ sensorId: ..., heartId: ..., type: ..., location: ..., unit: ..., minThreshold: ..., maxThreshold: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateSensorRef(dataConnect, updateSensorVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.sensor_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.sensor_update);
});
```

## DeleteSensor
You can execute the `DeleteSensor` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
deleteSensor(vars: DeleteSensorVariables): MutationPromise<DeleteSensorData, DeleteSensorVariables>;

interface DeleteSensorRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSensorVariables): MutationRef<DeleteSensorData, DeleteSensorVariables>;
}
export const deleteSensorRef: DeleteSensorRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteSensor(dc: DataConnect, vars: DeleteSensorVariables): MutationPromise<DeleteSensorData, DeleteSensorVariables>;

interface DeleteSensorRef {
  ...
  (dc: DataConnect, vars: DeleteSensorVariables): MutationRef<DeleteSensorData, DeleteSensorVariables>;
}
export const deleteSensorRef: DeleteSensorRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteSensorRef:
```typescript
const name = deleteSensorRef.operationName;
console.log(name);
```

### Variables
The `DeleteSensor` mutation requires an argument of type `DeleteSensorVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteSensorVariables {
  sensorId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteSensor` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteSensorData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteSensorData {
  sensor_delete?: Sensor_Key | null;
}
```
### Using `DeleteSensor`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteSensor, DeleteSensorVariables } from '@mbh/dataconnect';

// The `DeleteSensor` mutation requires an argument of type `DeleteSensorVariables`:
const deleteSensorVars: DeleteSensorVariables = {
  sensorId: ..., 
};

// Call the `deleteSensor()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteSensor(deleteSensorVars);
// Variables can be defined inline as well.
const { data } = await deleteSensor({ sensorId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteSensor(dataConnect, deleteSensorVars);

console.log(data.sensor_delete);

// Or, you can use the `Promise` API.
deleteSensor(deleteSensorVars).then((response) => {
  const data = response.data;
  console.log(data.sensor_delete);
});
```

### Using `DeleteSensor`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteSensorRef, DeleteSensorVariables } from '@mbh/dataconnect';

// The `DeleteSensor` mutation requires an argument of type `DeleteSensorVariables`:
const deleteSensorVars: DeleteSensorVariables = {
  sensorId: ..., 
};

// Call the `deleteSensorRef()` function to get a reference to the mutation.
const ref = deleteSensorRef(deleteSensorVars);
// Variables can be defined inline as well.
const ref = deleteSensorRef({ sensorId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteSensorRef(dataConnect, deleteSensorVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.sensor_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.sensor_delete);
});
```

## UpdateSensorLive
You can execute the `UpdateSensorLive` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
updateSensorLive(vars: UpdateSensorLiveVariables): MutationPromise<UpdateSensorLiveData, UpdateSensorLiveVariables>;

interface UpdateSensorLiveRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSensorLiveVariables): MutationRef<UpdateSensorLiveData, UpdateSensorLiveVariables>;
}
export const updateSensorLiveRef: UpdateSensorLiveRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateSensorLive(dc: DataConnect, vars: UpdateSensorLiveVariables): MutationPromise<UpdateSensorLiveData, UpdateSensorLiveVariables>;

interface UpdateSensorLiveRef {
  ...
  (dc: DataConnect, vars: UpdateSensorLiveVariables): MutationRef<UpdateSensorLiveData, UpdateSensorLiveVariables>;
}
export const updateSensorLiveRef: UpdateSensorLiveRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateSensorLiveRef:
```typescript
const name = updateSensorLiveRef.operationName;
console.log(name);
```

### Variables
The `UpdateSensorLive` mutation requires an argument of type `UpdateSensorLiveVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateSensorLiveVariables {
  sensorId: UUIDString;
  value: number;
  unit: string;
  recordedAt: TimestampString;
}
```
### Return Type
Recall that executing the `UpdateSensorLive` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateSensorLiveData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateSensorLiveData {
  sensorLive_update?: SensorLive_Key | null;
}
```
### Using `UpdateSensorLive`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateSensorLive, UpdateSensorLiveVariables } from '@mbh/dataconnect';

// The `UpdateSensorLive` mutation requires an argument of type `UpdateSensorLiveVariables`:
const updateSensorLiveVars: UpdateSensorLiveVariables = {
  sensorId: ..., 
  value: ..., 
  unit: ..., 
  recordedAt: ..., 
};

// Call the `updateSensorLive()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateSensorLive(updateSensorLiveVars);
// Variables can be defined inline as well.
const { data } = await updateSensorLive({ sensorId: ..., value: ..., unit: ..., recordedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateSensorLive(dataConnect, updateSensorLiveVars);

console.log(data.sensorLive_update);

// Or, you can use the `Promise` API.
updateSensorLive(updateSensorLiveVars).then((response) => {
  const data = response.data;
  console.log(data.sensorLive_update);
});
```

### Using `UpdateSensorLive`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateSensorLiveRef, UpdateSensorLiveVariables } from '@mbh/dataconnect';

// The `UpdateSensorLive` mutation requires an argument of type `UpdateSensorLiveVariables`:
const updateSensorLiveVars: UpdateSensorLiveVariables = {
  sensorId: ..., 
  value: ..., 
  unit: ..., 
  recordedAt: ..., 
};

// Call the `updateSensorLiveRef()` function to get a reference to the mutation.
const ref = updateSensorLiveRef(updateSensorLiveVars);
// Variables can be defined inline as well.
const ref = updateSensorLiveRef({ sensorId: ..., value: ..., unit: ..., recordedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateSensorLiveRef(dataConnect, updateSensorLiveVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.sensorLive_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.sensorLive_update);
});
```

## DeleteSensorLive
You can execute the `DeleteSensorLive` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
deleteSensorLive(vars: DeleteSensorLiveVariables): MutationPromise<DeleteSensorLiveData, DeleteSensorLiveVariables>;

interface DeleteSensorLiveRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSensorLiveVariables): MutationRef<DeleteSensorLiveData, DeleteSensorLiveVariables>;
}
export const deleteSensorLiveRef: DeleteSensorLiveRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteSensorLive(dc: DataConnect, vars: DeleteSensorLiveVariables): MutationPromise<DeleteSensorLiveData, DeleteSensorLiveVariables>;

interface DeleteSensorLiveRef {
  ...
  (dc: DataConnect, vars: DeleteSensorLiveVariables): MutationRef<DeleteSensorLiveData, DeleteSensorLiveVariables>;
}
export const deleteSensorLiveRef: DeleteSensorLiveRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteSensorLiveRef:
```typescript
const name = deleteSensorLiveRef.operationName;
console.log(name);
```

### Variables
The `DeleteSensorLive` mutation requires an argument of type `DeleteSensorLiveVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteSensorLiveVariables {
  sensorId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteSensorLive` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteSensorLiveData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteSensorLiveData {
  sensorLive_delete?: SensorLive_Key | null;
}
```
### Using `DeleteSensorLive`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteSensorLive, DeleteSensorLiveVariables } from '@mbh/dataconnect';

// The `DeleteSensorLive` mutation requires an argument of type `DeleteSensorLiveVariables`:
const deleteSensorLiveVars: DeleteSensorLiveVariables = {
  sensorId: ..., 
};

// Call the `deleteSensorLive()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteSensorLive(deleteSensorLiveVars);
// Variables can be defined inline as well.
const { data } = await deleteSensorLive({ sensorId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteSensorLive(dataConnect, deleteSensorLiveVars);

console.log(data.sensorLive_delete);

// Or, you can use the `Promise` API.
deleteSensorLive(deleteSensorLiveVars).then((response) => {
  const data = response.data;
  console.log(data.sensorLive_delete);
});
```

### Using `DeleteSensorLive`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteSensorLiveRef, DeleteSensorLiveVariables } from '@mbh/dataconnect';

// The `DeleteSensorLive` mutation requires an argument of type `DeleteSensorLiveVariables`:
const deleteSensorLiveVars: DeleteSensorLiveVariables = {
  sensorId: ..., 
};

// Call the `deleteSensorLiveRef()` function to get a reference to the mutation.
const ref = deleteSensorLiveRef(deleteSensorLiveVars);
// Variables can be defined inline as well.
const ref = deleteSensorLiveRef({ sensorId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteSensorLiveRef(dataConnect, deleteSensorLiveVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.sensorLive_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.sensorLive_delete);
});
```

## CreateClinician
You can execute the `CreateClinician` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createClinician(vars: CreateClinicianVariables): MutationPromise<CreateClinicianData, CreateClinicianVariables>;

interface CreateClinicianRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClinicianVariables): MutationRef<CreateClinicianData, CreateClinicianVariables>;
}
export const createClinicianRef: CreateClinicianRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createClinician(dc: DataConnect, vars: CreateClinicianVariables): MutationPromise<CreateClinicianData, CreateClinicianVariables>;

interface CreateClinicianRef {
  ...
  (dc: DataConnect, vars: CreateClinicianVariables): MutationRef<CreateClinicianData, CreateClinicianVariables>;
}
export const createClinicianRef: CreateClinicianRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createClinicianRef:
```typescript
const name = createClinicianRef.operationName;
console.log(name);
```

### Variables
The `CreateClinician` mutation requires an argument of type `CreateClinicianVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateClinicianVariables {
  firstName: string;
  lastName: string;
  email: string;
  dob: DateString;
  phone: string;
  aphra: string;
  specialty: string;
}
```
### Return Type
Recall that executing the `CreateClinician` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateClinicianData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateClinicianData {
  clinician_insert: Clinician_Key;
}
```
### Using `CreateClinician`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createClinician, CreateClinicianVariables } from '@mbh/dataconnect';

// The `CreateClinician` mutation requires an argument of type `CreateClinicianVariables`:
const createClinicianVars: CreateClinicianVariables = {
  firstName: ..., 
  lastName: ..., 
  email: ..., 
  dob: ..., 
  phone: ..., 
  aphra: ..., 
  specialty: ..., 
};

// Call the `createClinician()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createClinician(createClinicianVars);
// Variables can be defined inline as well.
const { data } = await createClinician({ firstName: ..., lastName: ..., email: ..., dob: ..., phone: ..., aphra: ..., specialty: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createClinician(dataConnect, createClinicianVars);

console.log(data.clinician_insert);

// Or, you can use the `Promise` API.
createClinician(createClinicianVars).then((response) => {
  const data = response.data;
  console.log(data.clinician_insert);
});
```

### Using `CreateClinician`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createClinicianRef, CreateClinicianVariables } from '@mbh/dataconnect';

// The `CreateClinician` mutation requires an argument of type `CreateClinicianVariables`:
const createClinicianVars: CreateClinicianVariables = {
  firstName: ..., 
  lastName: ..., 
  email: ..., 
  dob: ..., 
  phone: ..., 
  aphra: ..., 
  specialty: ..., 
};

// Call the `createClinicianRef()` function to get a reference to the mutation.
const ref = createClinicianRef(createClinicianVars);
// Variables can be defined inline as well.
const ref = createClinicianRef({ firstName: ..., lastName: ..., email: ..., dob: ..., phone: ..., aphra: ..., specialty: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createClinicianRef(dataConnect, createClinicianVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clinician_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clinician_insert);
});
```

## UpdateClinician
You can execute the `UpdateClinician` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
updateClinician(vars: UpdateClinicianVariables): MutationPromise<UpdateClinicianData, UpdateClinicianVariables>;

interface UpdateClinicianRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateClinicianVariables): MutationRef<UpdateClinicianData, UpdateClinicianVariables>;
}
export const updateClinicianRef: UpdateClinicianRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateClinician(dc: DataConnect, vars: UpdateClinicianVariables): MutationPromise<UpdateClinicianData, UpdateClinicianVariables>;

interface UpdateClinicianRef {
  ...
  (dc: DataConnect, vars: UpdateClinicianVariables): MutationRef<UpdateClinicianData, UpdateClinicianVariables>;
}
export const updateClinicianRef: UpdateClinicianRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateClinicianRef:
```typescript
const name = updateClinicianRef.operationName;
console.log(name);
```

### Variables
The `UpdateClinician` mutation requires an argument of type `UpdateClinicianVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateClinicianVariables {
  cid: UUIDString;
  firstName: string;
  lastName: string;
  email: string;
  dob: DateString;
  phone: string;
  aphra: string;
  specialty: string;
  isDeactivated: boolean;
}
```
### Return Type
Recall that executing the `UpdateClinician` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateClinicianData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateClinicianData {
  clinician_update?: Clinician_Key | null;
}
```
### Using `UpdateClinician`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateClinician, UpdateClinicianVariables } from '@mbh/dataconnect';

// The `UpdateClinician` mutation requires an argument of type `UpdateClinicianVariables`:
const updateClinicianVars: UpdateClinicianVariables = {
  cid: ..., 
  firstName: ..., 
  lastName: ..., 
  email: ..., 
  dob: ..., 
  phone: ..., 
  aphra: ..., 
  specialty: ..., 
  isDeactivated: ..., 
};

// Call the `updateClinician()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateClinician(updateClinicianVars);
// Variables can be defined inline as well.
const { data } = await updateClinician({ cid: ..., firstName: ..., lastName: ..., email: ..., dob: ..., phone: ..., aphra: ..., specialty: ..., isDeactivated: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateClinician(dataConnect, updateClinicianVars);

console.log(data.clinician_update);

// Or, you can use the `Promise` API.
updateClinician(updateClinicianVars).then((response) => {
  const data = response.data;
  console.log(data.clinician_update);
});
```

### Using `UpdateClinician`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateClinicianRef, UpdateClinicianVariables } from '@mbh/dataconnect';

// The `UpdateClinician` mutation requires an argument of type `UpdateClinicianVariables`:
const updateClinicianVars: UpdateClinicianVariables = {
  cid: ..., 
  firstName: ..., 
  lastName: ..., 
  email: ..., 
  dob: ..., 
  phone: ..., 
  aphra: ..., 
  specialty: ..., 
  isDeactivated: ..., 
};

// Call the `updateClinicianRef()` function to get a reference to the mutation.
const ref = updateClinicianRef(updateClinicianVars);
// Variables can be defined inline as well.
const ref = updateClinicianRef({ cid: ..., firstName: ..., lastName: ..., email: ..., dob: ..., phone: ..., aphra: ..., specialty: ..., isDeactivated: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateClinicianRef(dataConnect, updateClinicianVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clinician_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clinician_update);
});
```

## DeactivateClinician
You can execute the `DeactivateClinician` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
deactivateClinician(vars: DeactivateClinicianVariables): MutationPromise<DeactivateClinicianData, DeactivateClinicianVariables>;

interface DeactivateClinicianRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeactivateClinicianVariables): MutationRef<DeactivateClinicianData, DeactivateClinicianVariables>;
}
export const deactivateClinicianRef: DeactivateClinicianRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deactivateClinician(dc: DataConnect, vars: DeactivateClinicianVariables): MutationPromise<DeactivateClinicianData, DeactivateClinicianVariables>;

interface DeactivateClinicianRef {
  ...
  (dc: DataConnect, vars: DeactivateClinicianVariables): MutationRef<DeactivateClinicianData, DeactivateClinicianVariables>;
}
export const deactivateClinicianRef: DeactivateClinicianRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deactivateClinicianRef:
```typescript
const name = deactivateClinicianRef.operationName;
console.log(name);
```

### Variables
The `DeactivateClinician` mutation requires an argument of type `DeactivateClinicianVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeactivateClinicianVariables {
  cid: UUIDString;
}
```
### Return Type
Recall that executing the `DeactivateClinician` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeactivateClinicianData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeactivateClinicianData {
  clinician_update?: Clinician_Key | null;
}
```
### Using `DeactivateClinician`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deactivateClinician, DeactivateClinicianVariables } from '@mbh/dataconnect';

// The `DeactivateClinician` mutation requires an argument of type `DeactivateClinicianVariables`:
const deactivateClinicianVars: DeactivateClinicianVariables = {
  cid: ..., 
};

// Call the `deactivateClinician()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deactivateClinician(deactivateClinicianVars);
// Variables can be defined inline as well.
const { data } = await deactivateClinician({ cid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deactivateClinician(dataConnect, deactivateClinicianVars);

console.log(data.clinician_update);

// Or, you can use the `Promise` API.
deactivateClinician(deactivateClinicianVars).then((response) => {
  const data = response.data;
  console.log(data.clinician_update);
});
```

### Using `DeactivateClinician`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deactivateClinicianRef, DeactivateClinicianVariables } from '@mbh/dataconnect';

// The `DeactivateClinician` mutation requires an argument of type `DeactivateClinicianVariables`:
const deactivateClinicianVars: DeactivateClinicianVariables = {
  cid: ..., 
};

// Call the `deactivateClinicianRef()` function to get a reference to the mutation.
const ref = deactivateClinicianRef(deactivateClinicianVars);
// Variables can be defined inline as well.
const ref = deactivateClinicianRef({ cid: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deactivateClinicianRef(dataConnect, deactivateClinicianVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clinician_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clinician_update);
});
```

## CreatePatient
You can execute the `CreatePatient` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createPatient(vars: CreatePatientVariables): MutationPromise<CreatePatientData, CreatePatientVariables>;

interface CreatePatientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePatientVariables): MutationRef<CreatePatientData, CreatePatientVariables>;
}
export const createPatientRef: CreatePatientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createPatient(dc: DataConnect, vars: CreatePatientVariables): MutationPromise<CreatePatientData, CreatePatientVariables>;

interface CreatePatientRef {
  ...
  (dc: DataConnect, vars: CreatePatientVariables): MutationRef<CreatePatientData, CreatePatientVariables>;
}
export const createPatientRef: CreatePatientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createPatientRef:
```typescript
const name = createPatientRef.operationName;
console.log(name);
```

### Variables
The `CreatePatient` mutation requires an argument of type `CreatePatientVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreatePatientVariables {
  email: string;
  firstName: string;
  lastName: string;
  dob: DateString;
  phone: string;
  bloodType: string;
  diagnosis: string;
  address: string;
}
```
### Return Type
Recall that executing the `CreatePatient` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreatePatientData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreatePatientData {
  patient_insert: Patient_Key;
}
```
### Using `CreatePatient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createPatient, CreatePatientVariables } from '@mbh/dataconnect';

// The `CreatePatient` mutation requires an argument of type `CreatePatientVariables`:
const createPatientVars: CreatePatientVariables = {
  email: ..., 
  firstName: ..., 
  lastName: ..., 
  dob: ..., 
  phone: ..., 
  bloodType: ..., 
  diagnosis: ..., 
  address: ..., 
};

// Call the `createPatient()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createPatient(createPatientVars);
// Variables can be defined inline as well.
const { data } = await createPatient({ email: ..., firstName: ..., lastName: ..., dob: ..., phone: ..., bloodType: ..., diagnosis: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createPatient(dataConnect, createPatientVars);

console.log(data.patient_insert);

// Or, you can use the `Promise` API.
createPatient(createPatientVars).then((response) => {
  const data = response.data;
  console.log(data.patient_insert);
});
```

### Using `CreatePatient`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createPatientRef, CreatePatientVariables } from '@mbh/dataconnect';

// The `CreatePatient` mutation requires an argument of type `CreatePatientVariables`:
const createPatientVars: CreatePatientVariables = {
  email: ..., 
  firstName: ..., 
  lastName: ..., 
  dob: ..., 
  phone: ..., 
  bloodType: ..., 
  diagnosis: ..., 
  address: ..., 
};

// Call the `createPatientRef()` function to get a reference to the mutation.
const ref = createPatientRef(createPatientVars);
// Variables can be defined inline as well.
const ref = createPatientRef({ email: ..., firstName: ..., lastName: ..., dob: ..., phone: ..., bloodType: ..., diagnosis: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createPatientRef(dataConnect, createPatientVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.patient_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.patient_insert);
});
```

## UpdatePatient
You can execute the `UpdatePatient` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
updatePatient(vars: UpdatePatientVariables): MutationPromise<UpdatePatientData, UpdatePatientVariables>;

interface UpdatePatientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePatientVariables): MutationRef<UpdatePatientData, UpdatePatientVariables>;
}
export const updatePatientRef: UpdatePatientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updatePatient(dc: DataConnect, vars: UpdatePatientVariables): MutationPromise<UpdatePatientData, UpdatePatientVariables>;

interface UpdatePatientRef {
  ...
  (dc: DataConnect, vars: UpdatePatientVariables): MutationRef<UpdatePatientData, UpdatePatientVariables>;
}
export const updatePatientRef: UpdatePatientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updatePatientRef:
```typescript
const name = updatePatientRef.operationName;
console.log(name);
```

### Variables
The `UpdatePatient` mutation requires an argument of type `UpdatePatientVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdatePatientVariables {
  pid: UUIDString;
  email: string;
  firstName: string;
  lastName: string;
  dob: DateString;
  phone: string;
  bloodType: string;
  diagnosis: string;
  status: Status;
  address: string;
}
```
### Return Type
Recall that executing the `UpdatePatient` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdatePatientData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdatePatientData {
  patient_update?: Patient_Key | null;
}
```
### Using `UpdatePatient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updatePatient, UpdatePatientVariables } from '@mbh/dataconnect';

// The `UpdatePatient` mutation requires an argument of type `UpdatePatientVariables`:
const updatePatientVars: UpdatePatientVariables = {
  pid: ..., 
  email: ..., 
  firstName: ..., 
  lastName: ..., 
  dob: ..., 
  phone: ..., 
  bloodType: ..., 
  diagnosis: ..., 
  status: ..., 
  address: ..., 
};

// Call the `updatePatient()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updatePatient(updatePatientVars);
// Variables can be defined inline as well.
const { data } = await updatePatient({ pid: ..., email: ..., firstName: ..., lastName: ..., dob: ..., phone: ..., bloodType: ..., diagnosis: ..., status: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updatePatient(dataConnect, updatePatientVars);

console.log(data.patient_update);

// Or, you can use the `Promise` API.
updatePatient(updatePatientVars).then((response) => {
  const data = response.data;
  console.log(data.patient_update);
});
```

### Using `UpdatePatient`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updatePatientRef, UpdatePatientVariables } from '@mbh/dataconnect';

// The `UpdatePatient` mutation requires an argument of type `UpdatePatientVariables`:
const updatePatientVars: UpdatePatientVariables = {
  pid: ..., 
  email: ..., 
  firstName: ..., 
  lastName: ..., 
  dob: ..., 
  phone: ..., 
  bloodType: ..., 
  diagnosis: ..., 
  status: ..., 
  address: ..., 
};

// Call the `updatePatientRef()` function to get a reference to the mutation.
const ref = updatePatientRef(updatePatientVars);
// Variables can be defined inline as well.
const ref = updatePatientRef({ pid: ..., email: ..., firstName: ..., lastName: ..., dob: ..., phone: ..., bloodType: ..., diagnosis: ..., status: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updatePatientRef(dataConnect, updatePatientVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.patient_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.patient_update);
});
```

## UpdatePatientStatus
You can execute the `UpdatePatientStatus` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
updatePatientStatus(vars: UpdatePatientStatusVariables): MutationPromise<UpdatePatientStatusData, UpdatePatientStatusVariables>;

interface UpdatePatientStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePatientStatusVariables): MutationRef<UpdatePatientStatusData, UpdatePatientStatusVariables>;
}
export const updatePatientStatusRef: UpdatePatientStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updatePatientStatus(dc: DataConnect, vars: UpdatePatientStatusVariables): MutationPromise<UpdatePatientStatusData, UpdatePatientStatusVariables>;

interface UpdatePatientStatusRef {
  ...
  (dc: DataConnect, vars: UpdatePatientStatusVariables): MutationRef<UpdatePatientStatusData, UpdatePatientStatusVariables>;
}
export const updatePatientStatusRef: UpdatePatientStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updatePatientStatusRef:
```typescript
const name = updatePatientStatusRef.operationName;
console.log(name);
```

### Variables
The `UpdatePatientStatus` mutation requires an argument of type `UpdatePatientStatusVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdatePatientStatusVariables {
  pid: UUIDString;
  status: Status;
}
```
### Return Type
Recall that executing the `UpdatePatientStatus` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdatePatientStatusData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdatePatientStatusData {
  patient_update?: Patient_Key | null;
}
```
### Using `UpdatePatientStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updatePatientStatus, UpdatePatientStatusVariables } from '@mbh/dataconnect';

// The `UpdatePatientStatus` mutation requires an argument of type `UpdatePatientStatusVariables`:
const updatePatientStatusVars: UpdatePatientStatusVariables = {
  pid: ..., 
  status: ..., 
};

// Call the `updatePatientStatus()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updatePatientStatus(updatePatientStatusVars);
// Variables can be defined inline as well.
const { data } = await updatePatientStatus({ pid: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updatePatientStatus(dataConnect, updatePatientStatusVars);

console.log(data.patient_update);

// Or, you can use the `Promise` API.
updatePatientStatus(updatePatientStatusVars).then((response) => {
  const data = response.data;
  console.log(data.patient_update);
});
```

### Using `UpdatePatientStatus`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updatePatientStatusRef, UpdatePatientStatusVariables } from '@mbh/dataconnect';

// The `UpdatePatientStatus` mutation requires an argument of type `UpdatePatientStatusVariables`:
const updatePatientStatusVars: UpdatePatientStatusVariables = {
  pid: ..., 
  status: ..., 
};

// Call the `updatePatientStatusRef()` function to get a reference to the mutation.
const ref = updatePatientStatusRef(updatePatientStatusVars);
// Variables can be defined inline as well.
const ref = updatePatientStatusRef({ pid: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updatePatientStatusRef(dataConnect, updatePatientStatusVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.patient_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.patient_update);
});
```

## DeletePatient
You can execute the `DeletePatient` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
deletePatient(vars: DeletePatientVariables): MutationPromise<DeletePatientData, DeletePatientVariables>;

interface DeletePatientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePatientVariables): MutationRef<DeletePatientData, DeletePatientVariables>;
}
export const deletePatientRef: DeletePatientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deletePatient(dc: DataConnect, vars: DeletePatientVariables): MutationPromise<DeletePatientData, DeletePatientVariables>;

interface DeletePatientRef {
  ...
  (dc: DataConnect, vars: DeletePatientVariables): MutationRef<DeletePatientData, DeletePatientVariables>;
}
export const deletePatientRef: DeletePatientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deletePatientRef:
```typescript
const name = deletePatientRef.operationName;
console.log(name);
```

### Variables
The `DeletePatient` mutation requires an argument of type `DeletePatientVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeletePatientVariables {
  pid: UUIDString;
}
```
### Return Type
Recall that executing the `DeletePatient` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeletePatientData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeletePatientData {
  patient_delete?: Patient_Key | null;
}
```
### Using `DeletePatient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deletePatient, DeletePatientVariables } from '@mbh/dataconnect';

// The `DeletePatient` mutation requires an argument of type `DeletePatientVariables`:
const deletePatientVars: DeletePatientVariables = {
  pid: ..., 
};

// Call the `deletePatient()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deletePatient(deletePatientVars);
// Variables can be defined inline as well.
const { data } = await deletePatient({ pid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deletePatient(dataConnect, deletePatientVars);

console.log(data.patient_delete);

// Or, you can use the `Promise` API.
deletePatient(deletePatientVars).then((response) => {
  const data = response.data;
  console.log(data.patient_delete);
});
```

### Using `DeletePatient`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deletePatientRef, DeletePatientVariables } from '@mbh/dataconnect';

// The `DeletePatient` mutation requires an argument of type `DeletePatientVariables`:
const deletePatientVars: DeletePatientVariables = {
  pid: ..., 
};

// Call the `deletePatientRef()` function to get a reference to the mutation.
const ref = deletePatientRef(deletePatientVars);
// Variables can be defined inline as well.
const ref = deletePatientRef({ pid: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deletePatientRef(dataConnect, deletePatientVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.patient_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.patient_delete);
});
```

