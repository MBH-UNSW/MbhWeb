# Generated React README
This README will guide you through the process of using the generated React SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `JavaScript README`, you can find it at [`dataconnect-generated/README.md`](../README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@dataconnect/generated/react` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#react).

# Table of Contents
- [**Overview**](#generated-react-readme)
- [**TanStack Query Firebase & TanStack React Query**](#tanstack-query-firebase-tanstack-react-query)
  - [*Package Installation*](#installing-tanstack-query-firebase-and-tanstack-react-query-packages)
  - [*Configuring TanStack Query*](#configuring-tanstack-query)
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
  - [*GetMyStaffProfile*](#getmystaffprofile)
  - [*ListStaffPatients*](#liststaffpatients)
  - [*GetStaffPatient*](#getstaffpatient)
- [**Mutations**](#mutations)
  - [*CreateAppointment*](#createappointment)
  - [*EditAppointment*](#editappointment)
  - [*CancelAppointment*](#cancelappointment)
  - [*CreateHeart*](#createheart)
  - [*CreateLogbookEntry*](#createlogbookentry)
  - [*CreateFile*](#createfile)
  - [*AttachFileToLogbookEntry*](#attachfiletologbookentry)
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

# TanStack Query Firebase & TanStack React Query
This SDK provides [React](https://react.dev/) hooks generated specific to your application, for the operations found in the connector `example`. These hooks are generated using [TanStack Query Firebase](https://react-query-firebase.invertase.dev/) by our partners at Invertase, a library built on top of [TanStack React Query v5](https://tanstack.com/query/v5/docs/framework/react/overview).

***You do not need to be familiar with Tanstack Query or Tanstack Query Firebase to use this SDK.*** However, you may find it useful to learn more about them, as they will empower you as a user of this Generated React SDK.

## Installing TanStack Query Firebase and TanStack React Query Packages
In order to use the React generated SDK, you must install the `TanStack React Query` and `TanStack Query Firebase` packages.
```bash
npm i --save @tanstack/react-query @tanstack-query-firebase/react
```
```bash
npm i --save firebase@latest # Note: React has a peer dependency on ^11.3.0
```

You can also follow the installation instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#tanstack-install), or the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react) and [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/installation).

## Configuring TanStack Query
In order to use the React generated SDK in your application, you must wrap your application's component tree in a `QueryClientProvider` component from TanStack React Query. None of your generated React SDK hooks will work without this provider.

```javascript
import { QueryClientProvider } from '@tanstack/react-query';

// Create a TanStack Query client instance
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <MyApplication />
    </QueryClientProvider>
  )
}
```

To learn more about `QueryClientProvider`, see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/quick-start) and the [TanStack Query Firebase documentation](https://invertase.docs.page/tanstack-query-firebase/react#usage).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#emulator-react-angular).

```javascript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) using the hooks provided from your generated React SDK.

# Queries

The React generated SDK provides Query hook functions that call and return [`useDataConnectQuery`](https://react-query-firebase.invertase.dev/react/data-connect/querying) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and the most recent data returned by the Query, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/querying).

TanStack React Query caches the results of your Queries, so using the same Query hook function in multiple places in your application allows the entire application to automatically see updates to that Query's data.

Query hooks execute their Queries automatically when called, and periodically refresh, unless you change the `queryOptions` for the Query. To learn how to stop a Query from automatically executing, including how to make a query "lazy", see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/guides/disabling-queries).

To learn more about TanStack React Query's Queries, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/queries).

## Using Query Hooks
Here's a general overview of how to use the generated Query hooks in your code:

- If the Query has no variables, the Query hook function does not require arguments.
- If the Query has any required variables, the Query hook function will require at least one argument: an object that contains all the required variables for the Query.
- If the Query has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Query's variables are optional, the Query hook function does not require any arguments.
- Query hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Query hooks functions can be called with or without passing in an `options` argument of type `useDataConnectQueryOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/query-options).
  - ***Special case:***  If the Query has all optional variables and you would like to provide an `options` argument to the Query hook function without providing any variables, you must pass `undefined` where you would normally pass the Query's variables, and then may provide the `options` argument.

Below are examples of how to use the `example` connector's generated Query hook functions to execute each Query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## GetActiveAppointmentsByPatient
You can execute the `GetActiveAppointmentsByPatient` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetActiveAppointmentsByPatient(dc: DataConnect, vars: GetActiveAppointmentsByPatientVariables, options?: useDataConnectQueryOptions<GetActiveAppointmentsByPatientData>): UseDataConnectQueryResult<GetActiveAppointmentsByPatientData, GetActiveAppointmentsByPatientVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetActiveAppointmentsByPatient(vars: GetActiveAppointmentsByPatientVariables, options?: useDataConnectQueryOptions<GetActiveAppointmentsByPatientData>): UseDataConnectQueryResult<GetActiveAppointmentsByPatientData, GetActiveAppointmentsByPatientVariables>;
```

### Variables
The `GetActiveAppointmentsByPatient` Query requires an argument of type `GetActiveAppointmentsByPatientVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetActiveAppointmentsByPatientVariables {
  patientPid: UUIDString;
}
```
### Return Type
Recall that calling the `GetActiveAppointmentsByPatient` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetActiveAppointmentsByPatient` Query is of type `GetActiveAppointmentsByPatientData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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
      pid: UUIDString;
      firstName: string;
      lastName: string;
      email: string;
    };
  } & Appointment_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetActiveAppointmentsByPatient`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetActiveAppointmentsByPatientVariables } from '@dataconnect/generated';
import { useGetActiveAppointmentsByPatient } from '@dataconnect/generated/react'

export default function GetActiveAppointmentsByPatientComponent() {
  // The `useGetActiveAppointmentsByPatient` Query hook requires an argument of type `GetActiveAppointmentsByPatientVariables`:
  const getActiveAppointmentsByPatientVars: GetActiveAppointmentsByPatientVariables = {
    patientPid: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetActiveAppointmentsByPatient(getActiveAppointmentsByPatientVars);
  // Variables can be defined inline as well.
  const query = useGetActiveAppointmentsByPatient({ patientPid: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetActiveAppointmentsByPatient(dataConnect, getActiveAppointmentsByPatientVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetActiveAppointmentsByPatient(getActiveAppointmentsByPatientVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetActiveAppointmentsByPatient(dataConnect, getActiveAppointmentsByPatientVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.appointments);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetAllAppointmentsByPatient
You can execute the `GetAllAppointmentsByPatient` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetAllAppointmentsByPatient(dc: DataConnect, vars: GetAllAppointmentsByPatientVariables, options?: useDataConnectQueryOptions<GetAllAppointmentsByPatientData>): UseDataConnectQueryResult<GetAllAppointmentsByPatientData, GetAllAppointmentsByPatientVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetAllAppointmentsByPatient(vars: GetAllAppointmentsByPatientVariables, options?: useDataConnectQueryOptions<GetAllAppointmentsByPatientData>): UseDataConnectQueryResult<GetAllAppointmentsByPatientData, GetAllAppointmentsByPatientVariables>;
```

### Variables
The `GetAllAppointmentsByPatient` Query requires an argument of type `GetAllAppointmentsByPatientVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetAllAppointmentsByPatientVariables {
  patientPid: UUIDString;
}
```
### Return Type
Recall that calling the `GetAllAppointmentsByPatient` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetAllAppointmentsByPatient` Query is of type `GetAllAppointmentsByPatientData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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
      pid: UUIDString;
      firstName: string;
      lastName: string;
      email: string;
    };
  } & Appointment_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetAllAppointmentsByPatient`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetAllAppointmentsByPatientVariables } from '@dataconnect/generated';
import { useGetAllAppointmentsByPatient } from '@dataconnect/generated/react'

export default function GetAllAppointmentsByPatientComponent() {
  // The `useGetAllAppointmentsByPatient` Query hook requires an argument of type `GetAllAppointmentsByPatientVariables`:
  const getAllAppointmentsByPatientVars: GetAllAppointmentsByPatientVariables = {
    patientPid: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetAllAppointmentsByPatient(getAllAppointmentsByPatientVars);
  // Variables can be defined inline as well.
  const query = useGetAllAppointmentsByPatient({ patientPid: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetAllAppointmentsByPatient(dataConnect, getAllAppointmentsByPatientVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetAllAppointmentsByPatient(getAllAppointmentsByPatientVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetAllAppointmentsByPatient(dataConnect, getAllAppointmentsByPatientVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.appointments);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetActiveAppointmentsByClinician
You can execute the `GetActiveAppointmentsByClinician` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetActiveAppointmentsByClinician(dc: DataConnect, vars: GetActiveAppointmentsByClinicianVariables, options?: useDataConnectQueryOptions<GetActiveAppointmentsByClinicianData>): UseDataConnectQueryResult<GetActiveAppointmentsByClinicianData, GetActiveAppointmentsByClinicianVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetActiveAppointmentsByClinician(vars: GetActiveAppointmentsByClinicianVariables, options?: useDataConnectQueryOptions<GetActiveAppointmentsByClinicianData>): UseDataConnectQueryResult<GetActiveAppointmentsByClinicianData, GetActiveAppointmentsByClinicianVariables>;
```

### Variables
The `GetActiveAppointmentsByClinician` Query requires an argument of type `GetActiveAppointmentsByClinicianVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetActiveAppointmentsByClinicianVariables {
  clinicianCid: UUIDString;
}
```
### Return Type
Recall that calling the `GetActiveAppointmentsByClinician` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetActiveAppointmentsByClinician` Query is of type `GetActiveAppointmentsByClinicianData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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
      pid: UUIDString;
      firstName: string;
      lastName: string;
      email: string;
    };
  } & Appointment_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetActiveAppointmentsByClinician`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetActiveAppointmentsByClinicianVariables } from '@dataconnect/generated';
import { useGetActiveAppointmentsByClinician } from '@dataconnect/generated/react'

export default function GetActiveAppointmentsByClinicianComponent() {
  // The `useGetActiveAppointmentsByClinician` Query hook requires an argument of type `GetActiveAppointmentsByClinicianVariables`:
  const getActiveAppointmentsByClinicianVars: GetActiveAppointmentsByClinicianVariables = {
    clinicianCid: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetActiveAppointmentsByClinician(getActiveAppointmentsByClinicianVars);
  // Variables can be defined inline as well.
  const query = useGetActiveAppointmentsByClinician({ clinicianCid: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetActiveAppointmentsByClinician(dataConnect, getActiveAppointmentsByClinicianVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetActiveAppointmentsByClinician(getActiveAppointmentsByClinicianVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetActiveAppointmentsByClinician(dataConnect, getActiveAppointmentsByClinicianVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.appointments);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetAllAppointmentsByClinician
You can execute the `GetAllAppointmentsByClinician` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetAllAppointmentsByClinician(dc: DataConnect, vars: GetAllAppointmentsByClinicianVariables, options?: useDataConnectQueryOptions<GetAllAppointmentsByClinicianData>): UseDataConnectQueryResult<GetAllAppointmentsByClinicianData, GetAllAppointmentsByClinicianVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetAllAppointmentsByClinician(vars: GetAllAppointmentsByClinicianVariables, options?: useDataConnectQueryOptions<GetAllAppointmentsByClinicianData>): UseDataConnectQueryResult<GetAllAppointmentsByClinicianData, GetAllAppointmentsByClinicianVariables>;
```

### Variables
The `GetAllAppointmentsByClinician` Query requires an argument of type `GetAllAppointmentsByClinicianVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetAllAppointmentsByClinicianVariables {
  clinicianCid: UUIDString;
}
```
### Return Type
Recall that calling the `GetAllAppointmentsByClinician` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetAllAppointmentsByClinician` Query is of type `GetAllAppointmentsByClinicianData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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
      pid: UUIDString;
      firstName: string;
      lastName: string;
      email: string;
    };
  } & Appointment_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetAllAppointmentsByClinician`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetAllAppointmentsByClinicianVariables } from '@dataconnect/generated';
import { useGetAllAppointmentsByClinician } from '@dataconnect/generated/react'

export default function GetAllAppointmentsByClinicianComponent() {
  // The `useGetAllAppointmentsByClinician` Query hook requires an argument of type `GetAllAppointmentsByClinicianVariables`:
  const getAllAppointmentsByClinicianVars: GetAllAppointmentsByClinicianVariables = {
    clinicianCid: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetAllAppointmentsByClinician(getAllAppointmentsByClinicianVars);
  // Variables can be defined inline as well.
  const query = useGetAllAppointmentsByClinician({ clinicianCid: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetAllAppointmentsByClinician(dataConnect, getAllAppointmentsByClinicianVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetAllAppointmentsByClinician(getAllAppointmentsByClinicianVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetAllAppointmentsByClinician(dataConnect, getAllAppointmentsByClinicianVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.appointments);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetHeart
You can execute the `GetHeart` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetHeart(dc: DataConnect, vars: GetHeartVariables, options?: useDataConnectQueryOptions<GetHeartData>): UseDataConnectQueryResult<GetHeartData, GetHeartVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetHeart(vars: GetHeartVariables, options?: useDataConnectQueryOptions<GetHeartData>): UseDataConnectQueryResult<GetHeartData, GetHeartVariables>;
```

### Variables
The `GetHeart` Query requires an argument of type `GetHeartVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetHeartVariables {
  heartId: UUIDString;
}
```
### Return Type
Recall that calling the `GetHeart` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetHeart` Query is of type `GetHeartData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetHeart`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetHeartVariables } from '@dataconnect/generated';
import { useGetHeart } from '@dataconnect/generated/react'

export default function GetHeartComponent() {
  // The `useGetHeart` Query hook requires an argument of type `GetHeartVariables`:
  const getHeartVars: GetHeartVariables = {
    heartId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetHeart(getHeartVars);
  // Variables can be defined inline as well.
  const query = useGetHeart({ heartId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetHeart(dataConnect, getHeartVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetHeart(getHeartVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetHeart(dataConnect, getHeartVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.heart);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListHeartsByPatient
You can execute the `ListHeartsByPatient` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListHeartsByPatient(dc: DataConnect, vars: ListHeartsByPatientVariables, options?: useDataConnectQueryOptions<ListHeartsByPatientData>): UseDataConnectQueryResult<ListHeartsByPatientData, ListHeartsByPatientVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListHeartsByPatient(vars: ListHeartsByPatientVariables, options?: useDataConnectQueryOptions<ListHeartsByPatientData>): UseDataConnectQueryResult<ListHeartsByPatientData, ListHeartsByPatientVariables>;
```

### Variables
The `ListHeartsByPatient` Query requires an argument of type `ListHeartsByPatientVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListHeartsByPatientVariables {
  patientPid: UUIDString;
}
```
### Return Type
Recall that calling the `ListHeartsByPatient` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListHeartsByPatient` Query is of type `ListHeartsByPatientData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListHeartsByPatientData {
  hearts: ({
    heartId: UUIDString;
    createdAt: TimestampString;
  } & Heart_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListHeartsByPatient`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListHeartsByPatientVariables } from '@dataconnect/generated';
import { useListHeartsByPatient } from '@dataconnect/generated/react'

export default function ListHeartsByPatientComponent() {
  // The `useListHeartsByPatient` Query hook requires an argument of type `ListHeartsByPatientVariables`:
  const listHeartsByPatientVars: ListHeartsByPatientVariables = {
    patientPid: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListHeartsByPatient(listHeartsByPatientVars);
  // Variables can be defined inline as well.
  const query = useListHeartsByPatient({ patientPid: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListHeartsByPatient(dataConnect, listHeartsByPatientVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListHeartsByPatient(listHeartsByPatientVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListHeartsByPatient(dataConnect, listHeartsByPatientVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.hearts);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetLogbookEntry
You can execute the `GetLogbookEntry` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetLogbookEntry(dc: DataConnect, vars: GetLogbookEntryVariables, options?: useDataConnectQueryOptions<GetLogbookEntryData>): UseDataConnectQueryResult<GetLogbookEntryData, GetLogbookEntryVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetLogbookEntry(vars: GetLogbookEntryVariables, options?: useDataConnectQueryOptions<GetLogbookEntryData>): UseDataConnectQueryResult<GetLogbookEntryData, GetLogbookEntryVariables>;
```

### Variables
The `GetLogbookEntry` Query requires an argument of type `GetLogbookEntryVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetLogbookEntryVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `GetLogbookEntry` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetLogbookEntry` Query is of type `GetLogbookEntryData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetLogbookEntry`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetLogbookEntryVariables } from '@dataconnect/generated';
import { useGetLogbookEntry } from '@dataconnect/generated/react'

export default function GetLogbookEntryComponent() {
  // The `useGetLogbookEntry` Query hook requires an argument of type `GetLogbookEntryVariables`:
  const getLogbookEntryVars: GetLogbookEntryVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetLogbookEntry(getLogbookEntryVars);
  // Variables can be defined inline as well.
  const query = useGetLogbookEntry({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetLogbookEntry(dataConnect, getLogbookEntryVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetLogbookEntry(getLogbookEntryVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetLogbookEntry(dataConnect, getLogbookEntryVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.logbookEntry);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListLogBookEntriesByPatient
You can execute the `ListLogBookEntriesByPatient` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListLogBookEntriesByPatient(dc: DataConnect, vars: ListLogBookEntriesByPatientVariables, options?: useDataConnectQueryOptions<ListLogBookEntriesByPatientData>): UseDataConnectQueryResult<ListLogBookEntriesByPatientData, ListLogBookEntriesByPatientVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListLogBookEntriesByPatient(vars: ListLogBookEntriesByPatientVariables, options?: useDataConnectQueryOptions<ListLogBookEntriesByPatientData>): UseDataConnectQueryResult<ListLogBookEntriesByPatientData, ListLogBookEntriesByPatientVariables>;
```

### Variables
The `ListLogBookEntriesByPatient` Query requires an argument of type `ListLogBookEntriesByPatientVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListLogBookEntriesByPatientVariables {
  patientId: UUIDString;
}
```
### Return Type
Recall that calling the `ListLogBookEntriesByPatient` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListLogBookEntriesByPatient` Query is of type `ListLogBookEntriesByPatientData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListLogBookEntriesByPatient`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListLogBookEntriesByPatientVariables } from '@dataconnect/generated';
import { useListLogBookEntriesByPatient } from '@dataconnect/generated/react'

export default function ListLogBookEntriesByPatientComponent() {
  // The `useListLogBookEntriesByPatient` Query hook requires an argument of type `ListLogBookEntriesByPatientVariables`:
  const listLogBookEntriesByPatientVars: ListLogBookEntriesByPatientVariables = {
    patientId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListLogBookEntriesByPatient(listLogBookEntriesByPatientVars);
  // Variables can be defined inline as well.
  const query = useListLogBookEntriesByPatient({ patientId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListLogBookEntriesByPatient(dataConnect, listLogBookEntriesByPatientVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListLogBookEntriesByPatient(listLogBookEntriesByPatientVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListLogBookEntriesByPatient(dataConnect, listLogBookEntriesByPatientVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.patient);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListAlerts
You can execute the `ListAlerts` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListAlerts(dc: DataConnect, options?: useDataConnectQueryOptions<ListAlertsData>): UseDataConnectQueryResult<ListAlertsData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListAlerts(options?: useDataConnectQueryOptions<ListAlertsData>): UseDataConnectQueryResult<ListAlertsData, undefined>;
```

### Variables
The `ListAlerts` Query has no variables.
### Return Type
Recall that calling the `ListAlerts` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListAlerts` Query is of type `ListAlertsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListAlerts`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListAlerts } from '@dataconnect/generated/react'

export default function ListAlertsComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListAlerts();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListAlerts(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListAlerts(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListAlerts(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.alerts);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListUnresolvedAlerts
You can execute the `ListUnresolvedAlerts` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListUnresolvedAlerts(dc: DataConnect, options?: useDataConnectQueryOptions<ListUnresolvedAlertsData>): UseDataConnectQueryResult<ListUnresolvedAlertsData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListUnresolvedAlerts(options?: useDataConnectQueryOptions<ListUnresolvedAlertsData>): UseDataConnectQueryResult<ListUnresolvedAlertsData, undefined>;
```

### Variables
The `ListUnresolvedAlerts` Query has no variables.
### Return Type
Recall that calling the `ListUnresolvedAlerts` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListUnresolvedAlerts` Query is of type `ListUnresolvedAlertsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListUnresolvedAlerts`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListUnresolvedAlerts } from '@dataconnect/generated/react'

export default function ListUnresolvedAlertsComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListUnresolvedAlerts();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListUnresolvedAlerts(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListUnresolvedAlerts(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListUnresolvedAlerts(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.alerts);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListHighSeverityAlerts
You can execute the `ListHighSeverityAlerts` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListHighSeverityAlerts(dc: DataConnect, options?: useDataConnectQueryOptions<ListHighSeverityAlertsData>): UseDataConnectQueryResult<ListHighSeverityAlertsData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListHighSeverityAlerts(options?: useDataConnectQueryOptions<ListHighSeverityAlertsData>): UseDataConnectQueryResult<ListHighSeverityAlertsData, undefined>;
```

### Variables
The `ListHighSeverityAlerts` Query has no variables.
### Return Type
Recall that calling the `ListHighSeverityAlerts` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListHighSeverityAlerts` Query is of type `ListHighSeverityAlertsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListHighSeverityAlerts`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListHighSeverityAlerts } from '@dataconnect/generated/react'

export default function ListHighSeverityAlertsComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListHighSeverityAlerts();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListHighSeverityAlerts(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListHighSeverityAlerts(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListHighSeverityAlerts(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.alerts);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListAlertsBySensorId
You can execute the `ListAlertsBySensorId` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListAlertsBySensorId(dc: DataConnect, options?: useDataConnectQueryOptions<ListAlertsBySensorIdData>): UseDataConnectQueryResult<ListAlertsBySensorIdData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListAlertsBySensorId(options?: useDataConnectQueryOptions<ListAlertsBySensorIdData>): UseDataConnectQueryResult<ListAlertsBySensorIdData, undefined>;
```

### Variables
The `ListAlertsBySensorId` Query has no variables.
### Return Type
Recall that calling the `ListAlertsBySensorId` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListAlertsBySensorId` Query is of type `ListAlertsBySensorIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListAlertsBySensorId`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListAlertsBySensorId } from '@dataconnect/generated/react'

export default function ListAlertsBySensorIdComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListAlertsBySensorId();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListAlertsBySensorId(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListAlertsBySensorId(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListAlertsBySensorId(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.alerts);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListAlertReadings
You can execute the `ListAlertReadings` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListAlertReadings(dc: DataConnect, options?: useDataConnectQueryOptions<ListAlertReadingsData>): UseDataConnectQueryResult<ListAlertReadingsData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListAlertReadings(options?: useDataConnectQueryOptions<ListAlertReadingsData>): UseDataConnectQueryResult<ListAlertReadingsData, undefined>;
```

### Variables
The `ListAlertReadings` Query has no variables.
### Return Type
Recall that calling the `ListAlertReadings` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListAlertReadings` Query is of type `ListAlertReadingsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListAlertReadings`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListAlertReadings } from '@dataconnect/generated/react'

export default function ListAlertReadingsComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListAlertReadings();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListAlertReadings(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListAlertReadings(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListAlertReadings(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.alertReadingss);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListAlertReadingsByAlertId
You can execute the `ListAlertReadingsByAlertId` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListAlertReadingsByAlertId(dc: DataConnect, options?: useDataConnectQueryOptions<ListAlertReadingsByAlertIdData>): UseDataConnectQueryResult<ListAlertReadingsByAlertIdData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListAlertReadingsByAlertId(options?: useDataConnectQueryOptions<ListAlertReadingsByAlertIdData>): UseDataConnectQueryResult<ListAlertReadingsByAlertIdData, undefined>;
```

### Variables
The `ListAlertReadingsByAlertId` Query has no variables.
### Return Type
Recall that calling the `ListAlertReadingsByAlertId` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListAlertReadingsByAlertId` Query is of type `ListAlertReadingsByAlertIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListAlertReadingsByAlertId`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListAlertReadingsByAlertId } from '@dataconnect/generated/react'

export default function ListAlertReadingsByAlertIdComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListAlertReadingsByAlertId();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListAlertReadingsByAlertId(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListAlertReadingsByAlertId(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListAlertReadingsByAlertId(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.alertReadingss);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListAlertReadingsBySensorId
You can execute the `ListAlertReadingsBySensorId` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListAlertReadingsBySensorId(dc: DataConnect, options?: useDataConnectQueryOptions<ListAlertReadingsBySensorIdData>): UseDataConnectQueryResult<ListAlertReadingsBySensorIdData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListAlertReadingsBySensorId(options?: useDataConnectQueryOptions<ListAlertReadingsBySensorIdData>): UseDataConnectQueryResult<ListAlertReadingsBySensorIdData, undefined>;
```

### Variables
The `ListAlertReadingsBySensorId` Query has no variables.
### Return Type
Recall that calling the `ListAlertReadingsBySensorId` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListAlertReadingsBySensorId` Query is of type `ListAlertReadingsBySensorIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListAlertReadingsBySensorId`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListAlertReadingsBySensorId } from '@dataconnect/generated/react'

export default function ListAlertReadingsBySensorIdComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListAlertReadingsBySensorId();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListAlertReadingsBySensorId(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListAlertReadingsBySensorId(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListAlertReadingsBySensorId(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.alertReadingss);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListReadingHistory
You can execute the `ListReadingHistory` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListReadingHistory(dc: DataConnect, options?: useDataConnectQueryOptions<ListReadingHistoryData>): UseDataConnectQueryResult<ListReadingHistoryData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListReadingHistory(options?: useDataConnectQueryOptions<ListReadingHistoryData>): UseDataConnectQueryResult<ListReadingHistoryData, undefined>;
```

### Variables
The `ListReadingHistory` Query has no variables.
### Return Type
Recall that calling the `ListReadingHistory` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListReadingHistory` Query is of type `ListReadingHistoryData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListReadingHistory`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListReadingHistory } from '@dataconnect/generated/react'

export default function ListReadingHistoryComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListReadingHistory();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListReadingHistory(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListReadingHistory(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListReadingHistory(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.readingHistories);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListReadingHistoryBySensorId
You can execute the `ListReadingHistoryBySensorId` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListReadingHistoryBySensorId(dc: DataConnect, options?: useDataConnectQueryOptions<ListReadingHistoryBySensorIdData>): UseDataConnectQueryResult<ListReadingHistoryBySensorIdData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListReadingHistoryBySensorId(options?: useDataConnectQueryOptions<ListReadingHistoryBySensorIdData>): UseDataConnectQueryResult<ListReadingHistoryBySensorIdData, undefined>;
```

### Variables
The `ListReadingHistoryBySensorId` Query has no variables.
### Return Type
Recall that calling the `ListReadingHistoryBySensorId` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListReadingHistoryBySensorId` Query is of type `ListReadingHistoryBySensorIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListReadingHistoryBySensorId`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListReadingHistoryBySensorId } from '@dataconnect/generated/react'

export default function ListReadingHistoryBySensorIdComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListReadingHistoryBySensorId();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListReadingHistoryBySensorId(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListReadingHistoryBySensorId(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListReadingHistoryBySensorId(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.readingHistories);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListReadingHistoryForWindow
You can execute the `ListReadingHistoryForWindow` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListReadingHistoryForWindow(dc: DataConnect, options?: useDataConnectQueryOptions<ListReadingHistoryForWindowData>): UseDataConnectQueryResult<ListReadingHistoryForWindowData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListReadingHistoryForWindow(options?: useDataConnectQueryOptions<ListReadingHistoryForWindowData>): UseDataConnectQueryResult<ListReadingHistoryForWindowData, undefined>;
```

### Variables
The `ListReadingHistoryForWindow` Query has no variables.
### Return Type
Recall that calling the `ListReadingHistoryForWindow` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListReadingHistoryForWindow` Query is of type `ListReadingHistoryForWindowData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListReadingHistoryForWindow`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListReadingHistoryForWindow } from '@dataconnect/generated/react'

export default function ListReadingHistoryForWindowComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListReadingHistoryForWindow();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListReadingHistoryForWindow(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListReadingHistoryForWindow(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListReadingHistoryForWindow(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.readingHistories);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetSensor
You can execute the `GetSensor` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetSensor(dc: DataConnect, vars: GetSensorVariables, options?: useDataConnectQueryOptions<GetSensorData>): UseDataConnectQueryResult<GetSensorData, GetSensorVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetSensor(vars: GetSensorVariables, options?: useDataConnectQueryOptions<GetSensorData>): UseDataConnectQueryResult<GetSensorData, GetSensorVariables>;
```

### Variables
The `GetSensor` Query requires an argument of type `GetSensorVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetSensorVariables {
  sensorId: UUIDString;
}
```
### Return Type
Recall that calling the `GetSensor` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetSensor` Query is of type `GetSensorData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetSensor`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetSensorVariables } from '@dataconnect/generated';
import { useGetSensor } from '@dataconnect/generated/react'

export default function GetSensorComponent() {
  // The `useGetSensor` Query hook requires an argument of type `GetSensorVariables`:
  const getSensorVars: GetSensorVariables = {
    sensorId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetSensor(getSensorVars);
  // Variables can be defined inline as well.
  const query = useGetSensor({ sensorId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetSensor(dataConnect, getSensorVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetSensor(getSensorVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetSensor(dataConnect, getSensorVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.sensor);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListSensors
You can execute the `ListSensors` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListSensors(dc: DataConnect, options?: useDataConnectQueryOptions<ListSensorsData>): UseDataConnectQueryResult<ListSensorsData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListSensors(options?: useDataConnectQueryOptions<ListSensorsData>): UseDataConnectQueryResult<ListSensorsData, undefined>;
```

### Variables
The `ListSensors` Query has no variables.
### Return Type
Recall that calling the `ListSensors` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListSensors` Query is of type `ListSensorsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListSensors`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListSensors } from '@dataconnect/generated/react'

export default function ListSensorsComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListSensors();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListSensors(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListSensors(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListSensors(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.sensors);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListActiveSensors
You can execute the `ListActiveSensors` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListActiveSensors(dc: DataConnect, vars: ListActiveSensorsVariables, options?: useDataConnectQueryOptions<ListActiveSensorsData>): UseDataConnectQueryResult<ListActiveSensorsData, ListActiveSensorsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListActiveSensors(vars: ListActiveSensorsVariables, options?: useDataConnectQueryOptions<ListActiveSensorsData>): UseDataConnectQueryResult<ListActiveSensorsData, ListActiveSensorsVariables>;
```

### Variables
The `ListActiveSensors` Query requires an argument of type `ListActiveSensorsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListActiveSensorsVariables {
  status: boolean;
}
```
### Return Type
Recall that calling the `ListActiveSensors` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListActiveSensors` Query is of type `ListActiveSensorsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListActiveSensors`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListActiveSensorsVariables } from '@dataconnect/generated';
import { useListActiveSensors } from '@dataconnect/generated/react'

export default function ListActiveSensorsComponent() {
  // The `useListActiveSensors` Query hook requires an argument of type `ListActiveSensorsVariables`:
  const listActiveSensorsVars: ListActiveSensorsVariables = {
    status: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListActiveSensors(listActiveSensorsVars);
  // Variables can be defined inline as well.
  const query = useListActiveSensors({ status: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListActiveSensors(dataConnect, listActiveSensorsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListActiveSensors(listActiveSensorsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListActiveSensors(dataConnect, listActiveSensorsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.sensors);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListSensorsByType
You can execute the `ListSensorsByType` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListSensorsByType(dc: DataConnect, vars: ListSensorsByTypeVariables, options?: useDataConnectQueryOptions<ListSensorsByTypeData>): UseDataConnectQueryResult<ListSensorsByTypeData, ListSensorsByTypeVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListSensorsByType(vars: ListSensorsByTypeVariables, options?: useDataConnectQueryOptions<ListSensorsByTypeData>): UseDataConnectQueryResult<ListSensorsByTypeData, ListSensorsByTypeVariables>;
```

### Variables
The `ListSensorsByType` Query requires an argument of type `ListSensorsByTypeVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListSensorsByTypeVariables {
  type: string;
}
```
### Return Type
Recall that calling the `ListSensorsByType` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListSensorsByType` Query is of type `ListSensorsByTypeData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListSensorsByType`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListSensorsByTypeVariables } from '@dataconnect/generated';
import { useListSensorsByType } from '@dataconnect/generated/react'

export default function ListSensorsByTypeComponent() {
  // The `useListSensorsByType` Query hook requires an argument of type `ListSensorsByTypeVariables`:
  const listSensorsByTypeVars: ListSensorsByTypeVariables = {
    type: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListSensorsByType(listSensorsByTypeVars);
  // Variables can be defined inline as well.
  const query = useListSensorsByType({ type: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListSensorsByType(dataConnect, listSensorsByTypeVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListSensorsByType(listSensorsByTypeVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListSensorsByType(dataConnect, listSensorsByTypeVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.sensors);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListSensorByHeart
You can execute the `ListSensorByHeart` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListSensorByHeart(dc: DataConnect, vars: ListSensorByHeartVariables, options?: useDataConnectQueryOptions<ListSensorByHeartData>): UseDataConnectQueryResult<ListSensorByHeartData, ListSensorByHeartVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListSensorByHeart(vars: ListSensorByHeartVariables, options?: useDataConnectQueryOptions<ListSensorByHeartData>): UseDataConnectQueryResult<ListSensorByHeartData, ListSensorByHeartVariables>;
```

### Variables
The `ListSensorByHeart` Query requires an argument of type `ListSensorByHeartVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListSensorByHeartVariables {
  heartId: UUIDString;
}
```
### Return Type
Recall that calling the `ListSensorByHeart` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListSensorByHeart` Query is of type `ListSensorByHeartData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListSensorByHeart`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListSensorByHeartVariables } from '@dataconnect/generated';
import { useListSensorByHeart } from '@dataconnect/generated/react'

export default function ListSensorByHeartComponent() {
  // The `useListSensorByHeart` Query hook requires an argument of type `ListSensorByHeartVariables`:
  const listSensorByHeartVars: ListSensorByHeartVariables = {
    heartId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListSensorByHeart(listSensorByHeartVars);
  // Variables can be defined inline as well.
  const query = useListSensorByHeart({ heartId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListSensorByHeart(dataConnect, listSensorByHeartVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListSensorByHeart(listSensorByHeartVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListSensorByHeart(dataConnect, listSensorByHeartVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.sensors);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetSensorLive
You can execute the `GetSensorLive` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetSensorLive(dc: DataConnect, vars: GetSensorLiveVariables, options?: useDataConnectQueryOptions<GetSensorLiveData>): UseDataConnectQueryResult<GetSensorLiveData, GetSensorLiveVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetSensorLive(vars: GetSensorLiveVariables, options?: useDataConnectQueryOptions<GetSensorLiveData>): UseDataConnectQueryResult<GetSensorLiveData, GetSensorLiveVariables>;
```

### Variables
The `GetSensorLive` Query requires an argument of type `GetSensorLiveVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetSensorLiveVariables {
  sensorId: UUIDString;
}
```
### Return Type
Recall that calling the `GetSensorLive` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetSensorLive` Query is of type `GetSensorLiveData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetSensorLive`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetSensorLiveVariables } from '@dataconnect/generated';
import { useGetSensorLive } from '@dataconnect/generated/react'

export default function GetSensorLiveComponent() {
  // The `useGetSensorLive` Query hook requires an argument of type `GetSensorLiveVariables`:
  const getSensorLiveVars: GetSensorLiveVariables = {
    sensorId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetSensorLive(getSensorLiveVars);
  // Variables can be defined inline as well.
  const query = useGetSensorLive({ sensorId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetSensorLive(dataConnect, getSensorLiveVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetSensorLive(getSensorLiveVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetSensorLive(dataConnect, getSensorLiveVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.sensorLive);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListSensorLive
You can execute the `ListSensorLive` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListSensorLive(dc: DataConnect, options?: useDataConnectQueryOptions<ListSensorLiveData>): UseDataConnectQueryResult<ListSensorLiveData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListSensorLive(options?: useDataConnectQueryOptions<ListSensorLiveData>): UseDataConnectQueryResult<ListSensorLiveData, undefined>;
```

### Variables
The `ListSensorLive` Query has no variables.
### Return Type
Recall that calling the `ListSensorLive` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListSensorLive` Query is of type `ListSensorLiveData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListSensorLive`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListSensorLive } from '@dataconnect/generated/react'

export default function ListSensorLiveComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListSensorLive();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListSensorLive(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListSensorLive(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListSensorLive(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.sensorLives);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListSensorLiveBySensorId
You can execute the `ListSensorLiveBySensorId` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListSensorLiveBySensorId(dc: DataConnect, vars: ListSensorLiveBySensorIdVariables, options?: useDataConnectQueryOptions<ListSensorLiveBySensorIdData>): UseDataConnectQueryResult<ListSensorLiveBySensorIdData, ListSensorLiveBySensorIdVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListSensorLiveBySensorId(vars: ListSensorLiveBySensorIdVariables, options?: useDataConnectQueryOptions<ListSensorLiveBySensorIdData>): UseDataConnectQueryResult<ListSensorLiveBySensorIdData, ListSensorLiveBySensorIdVariables>;
```

### Variables
The `ListSensorLiveBySensorId` Query requires an argument of type `ListSensorLiveBySensorIdVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListSensorLiveBySensorIdVariables {
  sensorId: UUIDString;
}
```
### Return Type
Recall that calling the `ListSensorLiveBySensorId` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListSensorLiveBySensorId` Query is of type `ListSensorLiveBySensorIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListSensorLiveBySensorIdData {
  sensorLives: ({
    sensorId: UUIDString;
    value: number;
    unit: string;
    recordedAt: TimestampString;
  } & SensorLive_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListSensorLiveBySensorId`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListSensorLiveBySensorIdVariables } from '@dataconnect/generated';
import { useListSensorLiveBySensorId } from '@dataconnect/generated/react'

export default function ListSensorLiveBySensorIdComponent() {
  // The `useListSensorLiveBySensorId` Query hook requires an argument of type `ListSensorLiveBySensorIdVariables`:
  const listSensorLiveBySensorIdVars: ListSensorLiveBySensorIdVariables = {
    sensorId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListSensorLiveBySensorId(listSensorLiveBySensorIdVars);
  // Variables can be defined inline as well.
  const query = useListSensorLiveBySensorId({ sensorId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListSensorLiveBySensorId(dataConnect, listSensorLiveBySensorIdVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListSensorLiveBySensorId(listSensorLiveBySensorIdVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListSensorLiveBySensorId(dataConnect, listSensorLiveBySensorIdVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.sensorLives);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetClinician
You can execute the `GetClinician` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetClinician(dc: DataConnect, vars: GetClinicianVariables, options?: useDataConnectQueryOptions<GetClinicianData>): UseDataConnectQueryResult<GetClinicianData, GetClinicianVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetClinician(vars: GetClinicianVariables, options?: useDataConnectQueryOptions<GetClinicianData>): UseDataConnectQueryResult<GetClinicianData, GetClinicianVariables>;
```

### Variables
The `GetClinician` Query requires an argument of type `GetClinicianVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetClinicianVariables {
  cid: UUIDString;
}
```
### Return Type
Recall that calling the `GetClinician` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetClinician` Query is of type `GetClinicianData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetClinicianData {
  clinician?: {
    pid: UUIDString;
    firebaseAuthUid?: string | null;
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
  };
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetClinician`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetClinicianVariables } from '@dataconnect/generated';
import { useGetClinician } from '@dataconnect/generated/react'

export default function GetClinicianComponent() {
  // The `useGetClinician` Query hook requires an argument of type `GetClinicianVariables`:
  const getClinicianVars: GetClinicianVariables = {
    cid: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetClinician(getClinicianVars);
  // Variables can be defined inline as well.
  const query = useGetClinician({ cid: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetClinician(dataConnect, getClinicianVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetClinician(getClinicianVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetClinician(dataConnect, getClinicianVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.clinician);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListClinicians
You can execute the `ListClinicians` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListClinicians(dc: DataConnect, options?: useDataConnectQueryOptions<ListCliniciansData>): UseDataConnectQueryResult<ListCliniciansData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListClinicians(options?: useDataConnectQueryOptions<ListCliniciansData>): UseDataConnectQueryResult<ListCliniciansData, undefined>;
```

### Variables
The `ListClinicians` Query has no variables.
### Return Type
Recall that calling the `ListClinicians` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListClinicians` Query is of type `ListCliniciansData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListCliniciansData {
  clinicians: ({
    pid: UUIDString;
    firebaseAuthUid?: string | null;
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
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListClinicians`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListClinicians } from '@dataconnect/generated/react'

export default function ListCliniciansComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListClinicians();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListClinicians(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListClinicians(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListClinicians(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.clinicians);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetPatient
You can execute the `GetPatient` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetPatient(dc: DataConnect, vars: GetPatientVariables, options?: useDataConnectQueryOptions<GetPatientData>): UseDataConnectQueryResult<GetPatientData, GetPatientVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetPatient(vars: GetPatientVariables, options?: useDataConnectQueryOptions<GetPatientData>): UseDataConnectQueryResult<GetPatientData, GetPatientVariables>;
```

### Variables
The `GetPatient` Query requires an argument of type `GetPatientVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetPatientVariables {
  pid: UUIDString;
}
```
### Return Type
Recall that calling the `GetPatient` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetPatient` Query is of type `GetPatientData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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
    status: string;
    address: string;
    createdAt: TimestampString;
    updatedAt?: TimestampString | null;
  } & Patient_Key;
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetPatient`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetPatientVariables } from '@dataconnect/generated';
import { useGetPatient } from '@dataconnect/generated/react'

export default function GetPatientComponent() {
  // The `useGetPatient` Query hook requires an argument of type `GetPatientVariables`:
  const getPatientVars: GetPatientVariables = {
    pid: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetPatient(getPatientVars);
  // Variables can be defined inline as well.
  const query = useGetPatient({ pid: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetPatient(dataConnect, getPatientVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetPatient(getPatientVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetPatient(dataConnect, getPatientVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.patient);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListPatients
You can execute the `ListPatients` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListPatients(dc: DataConnect, options?: useDataConnectQueryOptions<ListPatientsData>): UseDataConnectQueryResult<ListPatientsData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListPatients(options?: useDataConnectQueryOptions<ListPatientsData>): UseDataConnectQueryResult<ListPatientsData, undefined>;
```

### Variables
The `ListPatients` Query has no variables.
### Return Type
Recall that calling the `ListPatients` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListPatients` Query is of type `ListPatientsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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
    status: string;
    address: string;
    createdAt: TimestampString;
    updatedAt?: TimestampString | null;
  } & Patient_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListPatients`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListPatients } from '@dataconnect/generated/react'

export default function ListPatientsComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListPatients();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListPatients(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListPatients(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListPatients(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.patients);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetMyStaffProfile
You can execute the `GetMyStaffProfile` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetMyStaffProfile(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyStaffProfileData>): UseDataConnectQueryResult<GetMyStaffProfileData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetMyStaffProfile(options?: useDataConnectQueryOptions<GetMyStaffProfileData>): UseDataConnectQueryResult<GetMyStaffProfileData, undefined>;
```

### Variables
The `GetMyStaffProfile` Query has no variables.
### Return Type
Recall that calling the `GetMyStaffProfile` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetMyStaffProfile` Query is of type `GetMyStaffProfileData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetMyStaffProfileData {
  clinicians: ({
    pid: UUIDString;
    firebaseAuthUid?: string | null;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    specialty: string;
    isDeactivated: boolean;
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetMyStaffProfile`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useGetMyStaffProfile } from '@dataconnect/generated/react'

export default function GetMyStaffProfileComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetMyStaffProfile();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetMyStaffProfile(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetMyStaffProfile(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetMyStaffProfile(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.clinicians);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListStaffPatients
You can execute the `ListStaffPatients` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListStaffPatients(dc: DataConnect, options?: useDataConnectQueryOptions<ListStaffPatientsData>): UseDataConnectQueryResult<ListStaffPatientsData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListStaffPatients(options?: useDataConnectQueryOptions<ListStaffPatientsData>): UseDataConnectQueryResult<ListStaffPatientsData, undefined>;
```

### Variables
The `ListStaffPatients` Query has no variables.
### Return Type
Recall that calling the `ListStaffPatients` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListStaffPatients` Query is of type `ListStaffPatientsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListStaffPatientsData {
  staffPatients: ({
    appointments_on_clinician: ({
      patient: {
        pid: UUIDString;
        firstName: string;
        lastName: string;
        status: string;
      } & Patient_Key;
    })[];
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListStaffPatients`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListStaffPatients } from '@dataconnect/generated/react'

export default function ListStaffPatientsComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListStaffPatients();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListStaffPatients(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListStaffPatients(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListStaffPatients(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.staffPatients);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetStaffPatient
You can execute the `GetStaffPatient` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetStaffPatient(dc: DataConnect, vars: GetStaffPatientVariables, options?: useDataConnectQueryOptions<GetStaffPatientData>): UseDataConnectQueryResult<GetStaffPatientData, GetStaffPatientVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetStaffPatient(vars: GetStaffPatientVariables, options?: useDataConnectQueryOptions<GetStaffPatientData>): UseDataConnectQueryResult<GetStaffPatientData, GetStaffPatientVariables>;
```

### Variables
The `GetStaffPatient` Query requires an argument of type `GetStaffPatientVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetStaffPatientVariables {
  pid: UUIDString;
}
```
### Return Type
Recall that calling the `GetStaffPatient` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetStaffPatient` Query is of type `GetStaffPatientData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetStaffPatientData {
  patient?: {
    pid: UUIDString;
    firstName: string;
    lastName: string;
    email: string;
    dob: DateString;
    phone: string;
    bloodType: string;
    diagnosis: string;
    status: string;
    address: string;
    logbookEntries: ({
      id: UUIDString;
      inr: number;
      weight: number;
      bloodPressureSystolic: number;
      bloodPressureDiastolic: number;
      createdAt: TimestampString;
      logbookEntryFiles_on_logbookEntry: ({
        file: {
          id: UUIDString;
          fileName: string;
          storagePath: string;
        } & File_Key;
      })[];
    } & LogbookEntry_Key)[];
    hearts_on_patient: ({
      sensors_on_heart: ({
        sensorId: UUIDString;
        type: string;
        location: string;
        unit: string;
        sensorLive_on_sensor?: {
          value: number;
          recordedAt: TimestampString;
        };
      } & Sensor_Key)[];
    })[];
  } & Patient_Key;
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetStaffPatient`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetStaffPatientVariables } from '@dataconnect/generated';
import { useGetStaffPatient } from '@dataconnect/generated/react'

export default function GetStaffPatientComponent() {
  // The `useGetStaffPatient` Query hook requires an argument of type `GetStaffPatientVariables`:
  const getStaffPatientVars: GetStaffPatientVariables = {
    pid: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetStaffPatient(getStaffPatientVars);
  // Variables can be defined inline as well.
  const query = useGetStaffPatient({ pid: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetStaffPatient(dataConnect, getStaffPatientVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetStaffPatient(getStaffPatientVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetStaffPatient(dataConnect, getStaffPatientVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.patient);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

# Mutations

The React generated SDK provides Mutations hook functions that call and return [`useDataConnectMutation`](https://react-query-firebase.invertase.dev/react/data-connect/mutations) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, and the most recent data returned by the Mutation, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/mutations).

Mutation hooks do not execute their Mutations automatically when called. Rather, after calling the Mutation hook function and getting a `UseMutationResult` object, you must call the `UseMutationResult.mutate()` function to execute the Mutation.

To learn more about TanStack React Query's Mutations, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations).

## Using Mutation Hooks
Here's a general overview of how to use the generated Mutation hooks in your code:

- Mutation hook functions are not called with the arguments to the Mutation. Instead, arguments are passed to `UseMutationResult.mutate()`.
- If the Mutation has no variables, the `mutate()` function does not require arguments.
- If the Mutation has any required variables, the `mutate()` function will require at least one argument: an object that contains all the required variables for the Mutation.
- If the Mutation has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Mutation's variables are optional, the Mutation hook function does not require any arguments.
- Mutation hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Mutation hooks also accept an `options` argument of type `useDataConnectMutationOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations#mutation-side-effects).
  - `UseMutationResult.mutate()` also accepts an `options` argument of type `useDataConnectMutationOptions`.
  - ***Special case:*** If the Mutation has no arguments (or all optional arguments and you wish to provide none), and you want to pass `options` to `UseMutationResult.mutate()`, you must pass `undefined` where you would normally pass the Mutation's arguments, and then may provide the options argument.

Below are examples of how to use the `example` connector's generated Mutation hook functions to execute each Mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## CreateAppointment
You can execute the `CreateAppointment` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateAppointment(options?: useDataConnectMutationOptions<CreateAppointmentData, FirebaseError, CreateAppointmentVariables>): UseDataConnectMutationResult<CreateAppointmentData, CreateAppointmentVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateAppointment(dc: DataConnect, options?: useDataConnectMutationOptions<CreateAppointmentData, FirebaseError, CreateAppointmentVariables>): UseDataConnectMutationResult<CreateAppointmentData, CreateAppointmentVariables>;
```

### Variables
The `CreateAppointment` Mutation requires an argument of type `CreateAppointmentVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateAppointmentVariables {
  patientPid: UUIDString;
  clinicianCid: UUIDString;
  appointmentReason: string;
  scheduledAt: TimestampString;
}
```
### Return Type
Recall that calling the `CreateAppointment` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateAppointment` Mutation is of type `CreateAppointmentData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateAppointmentData {
  appointment_insert: Appointment_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateAppointment`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateAppointmentVariables } from '@dataconnect/generated';
import { useCreateAppointment } from '@dataconnect/generated/react'

export default function CreateAppointmentComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateAppointment();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateAppointment(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateAppointment(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateAppointment(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateAppointment` Mutation requires an argument of type `CreateAppointmentVariables`:
  const createAppointmentVars: CreateAppointmentVariables = {
    patientPid: ..., 
    clinicianCid: ..., 
    appointmentReason: ..., 
    scheduledAt: ..., 
  };
  mutation.mutate(createAppointmentVars);
  // Variables can be defined inline as well.
  mutation.mutate({ patientPid: ..., clinicianCid: ..., appointmentReason: ..., scheduledAt: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createAppointmentVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.appointment_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## EditAppointment
You can execute the `EditAppointment` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useEditAppointment(options?: useDataConnectMutationOptions<EditAppointmentData, FirebaseError, EditAppointmentVariables>): UseDataConnectMutationResult<EditAppointmentData, EditAppointmentVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useEditAppointment(dc: DataConnect, options?: useDataConnectMutationOptions<EditAppointmentData, FirebaseError, EditAppointmentVariables>): UseDataConnectMutationResult<EditAppointmentData, EditAppointmentVariables>;
```

### Variables
The `EditAppointment` Mutation requires an argument of type `EditAppointmentVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface EditAppointmentVariables {
  id: UUIDString;
  appointmentReason?: string | null;
  appointmentNotes?: string | null;
  scheduledAt?: TimestampString | null;
  status?: AppointmentStatus | null;
}
```
### Return Type
Recall that calling the `EditAppointment` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `EditAppointment` Mutation is of type `EditAppointmentData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface EditAppointmentData {
  appointment_update?: Appointment_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `EditAppointment`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, EditAppointmentVariables } from '@dataconnect/generated';
import { useEditAppointment } from '@dataconnect/generated/react'

export default function EditAppointmentComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useEditAppointment();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useEditAppointment(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useEditAppointment(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useEditAppointment(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useEditAppointment` Mutation requires an argument of type `EditAppointmentVariables`:
  const editAppointmentVars: EditAppointmentVariables = {
    id: ..., 
    appointmentReason: ..., // optional
    appointmentNotes: ..., // optional
    scheduledAt: ..., // optional
    status: ..., // optional
  };
  mutation.mutate(editAppointmentVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., appointmentReason: ..., appointmentNotes: ..., scheduledAt: ..., status: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(editAppointmentVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.appointment_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CancelAppointment
You can execute the `CancelAppointment` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCancelAppointment(options?: useDataConnectMutationOptions<CancelAppointmentData, FirebaseError, CancelAppointmentVariables>): UseDataConnectMutationResult<CancelAppointmentData, CancelAppointmentVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCancelAppointment(dc: DataConnect, options?: useDataConnectMutationOptions<CancelAppointmentData, FirebaseError, CancelAppointmentVariables>): UseDataConnectMutationResult<CancelAppointmentData, CancelAppointmentVariables>;
```

### Variables
The `CancelAppointment` Mutation requires an argument of type `CancelAppointmentVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CancelAppointmentVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `CancelAppointment` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CancelAppointment` Mutation is of type `CancelAppointmentData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CancelAppointmentData {
  appointment_update?: Appointment_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CancelAppointment`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CancelAppointmentVariables } from '@dataconnect/generated';
import { useCancelAppointment } from '@dataconnect/generated/react'

export default function CancelAppointmentComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCancelAppointment();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCancelAppointment(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCancelAppointment(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCancelAppointment(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCancelAppointment` Mutation requires an argument of type `CancelAppointmentVariables`:
  const cancelAppointmentVars: CancelAppointmentVariables = {
    id: ..., 
  };
  mutation.mutate(cancelAppointmentVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(cancelAppointmentVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.appointment_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateHeart
You can execute the `CreateHeart` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateHeart(options?: useDataConnectMutationOptions<CreateHeartData, FirebaseError, CreateHeartVariables>): UseDataConnectMutationResult<CreateHeartData, CreateHeartVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateHeart(dc: DataConnect, options?: useDataConnectMutationOptions<CreateHeartData, FirebaseError, CreateHeartVariables>): UseDataConnectMutationResult<CreateHeartData, CreateHeartVariables>;
```

### Variables
The `CreateHeart` Mutation requires an argument of type `CreateHeartVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateHeartVariables {
  patientPid: UUIDString;
}
```
### Return Type
Recall that calling the `CreateHeart` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateHeart` Mutation is of type `CreateHeartData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateHeartData {
  heart_insert: Heart_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateHeart`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateHeartVariables } from '@dataconnect/generated';
import { useCreateHeart } from '@dataconnect/generated/react'

export default function CreateHeartComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateHeart();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateHeart(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateHeart(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateHeart(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateHeart` Mutation requires an argument of type `CreateHeartVariables`:
  const createHeartVars: CreateHeartVariables = {
    patientPid: ..., 
  };
  mutation.mutate(createHeartVars);
  // Variables can be defined inline as well.
  mutation.mutate({ patientPid: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createHeartVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.heart_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateLogbookEntry
You can execute the `CreateLogbookEntry` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateLogbookEntry(options?: useDataConnectMutationOptions<CreateLogbookEntryData, FirebaseError, CreateLogbookEntryVariables>): UseDataConnectMutationResult<CreateLogbookEntryData, CreateLogbookEntryVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateLogbookEntry(dc: DataConnect, options?: useDataConnectMutationOptions<CreateLogbookEntryData, FirebaseError, CreateLogbookEntryVariables>): UseDataConnectMutationResult<CreateLogbookEntryData, CreateLogbookEntryVariables>;
```

### Variables
The `CreateLogbookEntry` Mutation requires an argument of type `CreateLogbookEntryVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateLogbookEntryVariables {
  patientPid: UUIDString;
  inr: number;
  weight: number;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
}
```
### Return Type
Recall that calling the `CreateLogbookEntry` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateLogbookEntry` Mutation is of type `CreateLogbookEntryData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateLogbookEntryData {
  logbookEntry_insert: LogbookEntry_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateLogbookEntry`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateLogbookEntryVariables } from '@dataconnect/generated';
import { useCreateLogbookEntry } from '@dataconnect/generated/react'

export default function CreateLogbookEntryComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateLogbookEntry();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateLogbookEntry(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateLogbookEntry(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateLogbookEntry(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateLogbookEntry` Mutation requires an argument of type `CreateLogbookEntryVariables`:
  const createLogbookEntryVars: CreateLogbookEntryVariables = {
    patientPid: ..., 
    inr: ..., 
    weight: ..., 
    bloodPressureSystolic: ..., 
    bloodPressureDiastolic: ..., 
  };
  mutation.mutate(createLogbookEntryVars);
  // Variables can be defined inline as well.
  mutation.mutate({ patientPid: ..., inr: ..., weight: ..., bloodPressureSystolic: ..., bloodPressureDiastolic: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createLogbookEntryVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.logbookEntry_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateFile
You can execute the `CreateFile` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateFile(options?: useDataConnectMutationOptions<CreateFileData, FirebaseError, CreateFileVariables>): UseDataConnectMutationResult<CreateFileData, CreateFileVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateFile(dc: DataConnect, options?: useDataConnectMutationOptions<CreateFileData, FirebaseError, CreateFileVariables>): UseDataConnectMutationResult<CreateFileData, CreateFileVariables>;
```

### Variables
The `CreateFile` Mutation requires an argument of type `CreateFileVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateFileVariables {
  uploadedByPatientPid: UUIDString;
  fileName: string;
  storagePath: string;
  mimeType: string;
  fileSizeBytes: number;
}
```
### Return Type
Recall that calling the `CreateFile` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateFile` Mutation is of type `CreateFileData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateFileData {
  file_insert: File_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateFile`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateFileVariables } from '@dataconnect/generated';
import { useCreateFile } from '@dataconnect/generated/react'

export default function CreateFileComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateFile();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateFile(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateFile(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateFile(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateFile` Mutation requires an argument of type `CreateFileVariables`:
  const createFileVars: CreateFileVariables = {
    uploadedByPatientPid: ..., 
    fileName: ..., 
    storagePath: ..., 
    mimeType: ..., 
    fileSizeBytes: ..., 
  };
  mutation.mutate(createFileVars);
  // Variables can be defined inline as well.
  mutation.mutate({ uploadedByPatientPid: ..., fileName: ..., storagePath: ..., mimeType: ..., fileSizeBytes: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createFileVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.file_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## AttachFileToLogbookEntry
You can execute the `AttachFileToLogbookEntry` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useAttachFileToLogbookEntry(options?: useDataConnectMutationOptions<AttachFileToLogbookEntryData, FirebaseError, AttachFileToLogbookEntryVariables>): UseDataConnectMutationResult<AttachFileToLogbookEntryData, AttachFileToLogbookEntryVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useAttachFileToLogbookEntry(dc: DataConnect, options?: useDataConnectMutationOptions<AttachFileToLogbookEntryData, FirebaseError, AttachFileToLogbookEntryVariables>): UseDataConnectMutationResult<AttachFileToLogbookEntryData, AttachFileToLogbookEntryVariables>;
```

### Variables
The `AttachFileToLogbookEntry` Mutation requires an argument of type `AttachFileToLogbookEntryVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface AttachFileToLogbookEntryVariables {
  logbookEntryId: UUIDString;
  fileId: UUIDString;
}
```
### Return Type
Recall that calling the `AttachFileToLogbookEntry` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `AttachFileToLogbookEntry` Mutation is of type `AttachFileToLogbookEntryData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface AttachFileToLogbookEntryData {
  logbookEntryFile_insert: LogbookEntryFile_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `AttachFileToLogbookEntry`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, AttachFileToLogbookEntryVariables } from '@dataconnect/generated';
import { useAttachFileToLogbookEntry } from '@dataconnect/generated/react'

export default function AttachFileToLogbookEntryComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useAttachFileToLogbookEntry();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useAttachFileToLogbookEntry(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useAttachFileToLogbookEntry(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useAttachFileToLogbookEntry(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useAttachFileToLogbookEntry` Mutation requires an argument of type `AttachFileToLogbookEntryVariables`:
  const attachFileToLogbookEntryVars: AttachFileToLogbookEntryVariables = {
    logbookEntryId: ..., 
    fileId: ..., 
  };
  mutation.mutate(attachFileToLogbookEntryVars);
  // Variables can be defined inline as well.
  mutation.mutate({ logbookEntryId: ..., fileId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(attachFileToLogbookEntryVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.logbookEntryFile_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateSensor
You can execute the `CreateSensor` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateSensor(options?: useDataConnectMutationOptions<CreateSensorData, FirebaseError, CreateSensorVariables>): UseDataConnectMutationResult<CreateSensorData, CreateSensorVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateSensor(dc: DataConnect, options?: useDataConnectMutationOptions<CreateSensorData, FirebaseError, CreateSensorVariables>): UseDataConnectMutationResult<CreateSensorData, CreateSensorVariables>;
```

### Variables
The `CreateSensor` Mutation requires an argument of type `CreateSensorVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateSensor` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateSensor` Mutation is of type `CreateSensorData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateSensorData {
  sensor_insert: Sensor_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateSensor`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateSensorVariables } from '@dataconnect/generated';
import { useCreateSensor } from '@dataconnect/generated/react'

export default function CreateSensorComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateSensor();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateSensor(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateSensor(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateSensor(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateSensor` Mutation requires an argument of type `CreateSensorVariables`:
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
  mutation.mutate(createSensorVars);
  // Variables can be defined inline as well.
  mutation.mutate({ sensorId: ..., heartId: ..., type: ..., location: ..., unit: ..., minThreshold: ..., maxThreshold: ..., status: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createSensorVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.sensor_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateSensor
You can execute the `UpdateSensor` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateSensor(options?: useDataConnectMutationOptions<UpdateSensorData, FirebaseError, UpdateSensorVariables>): UseDataConnectMutationResult<UpdateSensorData, UpdateSensorVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateSensor(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateSensorData, FirebaseError, UpdateSensorVariables>): UseDataConnectMutationResult<UpdateSensorData, UpdateSensorVariables>;
```

### Variables
The `UpdateSensor` Mutation requires an argument of type `UpdateSensorVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `UpdateSensor` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateSensor` Mutation is of type `UpdateSensorData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateSensorData {
  sensor_update?: Sensor_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateSensor`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateSensorVariables } from '@dataconnect/generated';
import { useUpdateSensor } from '@dataconnect/generated/react'

export default function UpdateSensorComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateSensor();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateSensor(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateSensor(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateSensor(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateSensor` Mutation requires an argument of type `UpdateSensorVariables`:
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
  mutation.mutate(updateSensorVars);
  // Variables can be defined inline as well.
  mutation.mutate({ sensorId: ..., heartId: ..., type: ..., location: ..., unit: ..., minThreshold: ..., maxThreshold: ..., status: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateSensorVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.sensor_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteSensor
You can execute the `DeleteSensor` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteSensor(options?: useDataConnectMutationOptions<DeleteSensorData, FirebaseError, DeleteSensorVariables>): UseDataConnectMutationResult<DeleteSensorData, DeleteSensorVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteSensor(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteSensorData, FirebaseError, DeleteSensorVariables>): UseDataConnectMutationResult<DeleteSensorData, DeleteSensorVariables>;
```

### Variables
The `DeleteSensor` Mutation requires an argument of type `DeleteSensorVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteSensorVariables {
  sensorId: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteSensor` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteSensor` Mutation is of type `DeleteSensorData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteSensorData {
  sensor_delete?: Sensor_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteSensor`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteSensorVariables } from '@dataconnect/generated';
import { useDeleteSensor } from '@dataconnect/generated/react'

export default function DeleteSensorComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteSensor();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteSensor(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteSensor(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteSensor(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteSensor` Mutation requires an argument of type `DeleteSensorVariables`:
  const deleteSensorVars: DeleteSensorVariables = {
    sensorId: ..., 
  };
  mutation.mutate(deleteSensorVars);
  // Variables can be defined inline as well.
  mutation.mutate({ sensorId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deleteSensorVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.sensor_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateSensorLive
You can execute the `UpdateSensorLive` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateSensorLive(options?: useDataConnectMutationOptions<UpdateSensorLiveData, FirebaseError, UpdateSensorLiveVariables>): UseDataConnectMutationResult<UpdateSensorLiveData, UpdateSensorLiveVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateSensorLive(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateSensorLiveData, FirebaseError, UpdateSensorLiveVariables>): UseDataConnectMutationResult<UpdateSensorLiveData, UpdateSensorLiveVariables>;
```

### Variables
The `UpdateSensorLive` Mutation requires an argument of type `UpdateSensorLiveVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateSensorLiveVariables {
  sensorId: UUIDString;
  value: number;
  unit: string;
  recordedAt: TimestampString;
}
```
### Return Type
Recall that calling the `UpdateSensorLive` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateSensorLive` Mutation is of type `UpdateSensorLiveData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateSensorLiveData {
  sensorLive_update?: SensorLive_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateSensorLive`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateSensorLiveVariables } from '@dataconnect/generated';
import { useUpdateSensorLive } from '@dataconnect/generated/react'

export default function UpdateSensorLiveComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateSensorLive();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateSensorLive(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateSensorLive(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateSensorLive(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateSensorLive` Mutation requires an argument of type `UpdateSensorLiveVariables`:
  const updateSensorLiveVars: UpdateSensorLiveVariables = {
    sensorId: ..., 
    value: ..., 
    unit: ..., 
    recordedAt: ..., 
  };
  mutation.mutate(updateSensorLiveVars);
  // Variables can be defined inline as well.
  mutation.mutate({ sensorId: ..., value: ..., unit: ..., recordedAt: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateSensorLiveVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.sensorLive_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteSensorLive
You can execute the `DeleteSensorLive` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteSensorLive(options?: useDataConnectMutationOptions<DeleteSensorLiveData, FirebaseError, DeleteSensorLiveVariables>): UseDataConnectMutationResult<DeleteSensorLiveData, DeleteSensorLiveVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteSensorLive(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteSensorLiveData, FirebaseError, DeleteSensorLiveVariables>): UseDataConnectMutationResult<DeleteSensorLiveData, DeleteSensorLiveVariables>;
```

### Variables
The `DeleteSensorLive` Mutation requires an argument of type `DeleteSensorLiveVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteSensorLiveVariables {
  sensorId: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteSensorLive` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteSensorLive` Mutation is of type `DeleteSensorLiveData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteSensorLiveData {
  sensorLive_delete?: SensorLive_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteSensorLive`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteSensorLiveVariables } from '@dataconnect/generated';
import { useDeleteSensorLive } from '@dataconnect/generated/react'

export default function DeleteSensorLiveComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteSensorLive();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteSensorLive(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteSensorLive(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteSensorLive(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteSensorLive` Mutation requires an argument of type `DeleteSensorLiveVariables`:
  const deleteSensorLiveVars: DeleteSensorLiveVariables = {
    sensorId: ..., 
  };
  mutation.mutate(deleteSensorLiveVars);
  // Variables can be defined inline as well.
  mutation.mutate({ sensorId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deleteSensorLiveVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.sensorLive_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateClinician
You can execute the `CreateClinician` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateClinician(options?: useDataConnectMutationOptions<CreateClinicianData, FirebaseError, CreateClinicianVariables>): UseDataConnectMutationResult<CreateClinicianData, CreateClinicianVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateClinician(dc: DataConnect, options?: useDataConnectMutationOptions<CreateClinicianData, FirebaseError, CreateClinicianVariables>): UseDataConnectMutationResult<CreateClinicianData, CreateClinicianVariables>;
```

### Variables
The `CreateClinician` Mutation requires an argument of type `CreateClinicianVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateClinicianVariables {
  firstName: string;
  lastName: string;
  email: string;
  firebaseAuthUid?: string | null;
  dob: DateString;
  phone: string;
  aphra: string;
  specialty: string;
}
```
### Return Type
Recall that calling the `CreateClinician` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateClinician` Mutation is of type `CreateClinicianData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateClinicianData {
  clinician_insert: Clinician_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateClinician`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateClinicianVariables } from '@dataconnect/generated';
import { useCreateClinician } from '@dataconnect/generated/react'

export default function CreateClinicianComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateClinician();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateClinician(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClinician(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClinician(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateClinician` Mutation requires an argument of type `CreateClinicianVariables`:
  const createClinicianVars: CreateClinicianVariables = {
    firstName: ..., 
    lastName: ..., 
    email: ..., 
    firebaseAuthUid: ..., // optional
    dob: ..., 
    phone: ..., 
    aphra: ..., 
    specialty: ..., 
  };
  mutation.mutate(createClinicianVars);
  // Variables can be defined inline as well.
  mutation.mutate({ firstName: ..., lastName: ..., email: ..., firebaseAuthUid: ..., dob: ..., phone: ..., aphra: ..., specialty: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createClinicianVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.clinician_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateClinician
You can execute the `UpdateClinician` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateClinician(options?: useDataConnectMutationOptions<UpdateClinicianData, FirebaseError, UpdateClinicianVariables>): UseDataConnectMutationResult<UpdateClinicianData, UpdateClinicianVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateClinician(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateClinicianData, FirebaseError, UpdateClinicianVariables>): UseDataConnectMutationResult<UpdateClinicianData, UpdateClinicianVariables>;
```

### Variables
The `UpdateClinician` Mutation requires an argument of type `UpdateClinicianVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `UpdateClinician` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateClinician` Mutation is of type `UpdateClinicianData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateClinicianData {
  clinician_update?: Clinician_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateClinician`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateClinicianVariables } from '@dataconnect/generated';
import { useUpdateClinician } from '@dataconnect/generated/react'

export default function UpdateClinicianComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateClinician();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateClinician(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateClinician(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateClinician(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateClinician` Mutation requires an argument of type `UpdateClinicianVariables`:
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
  mutation.mutate(updateClinicianVars);
  // Variables can be defined inline as well.
  mutation.mutate({ cid: ..., firstName: ..., lastName: ..., email: ..., dob: ..., phone: ..., aphra: ..., specialty: ..., isDeactivated: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateClinicianVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.clinician_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeactivateClinician
You can execute the `DeactivateClinician` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeactivateClinician(options?: useDataConnectMutationOptions<DeactivateClinicianData, FirebaseError, DeactivateClinicianVariables>): UseDataConnectMutationResult<DeactivateClinicianData, DeactivateClinicianVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeactivateClinician(dc: DataConnect, options?: useDataConnectMutationOptions<DeactivateClinicianData, FirebaseError, DeactivateClinicianVariables>): UseDataConnectMutationResult<DeactivateClinicianData, DeactivateClinicianVariables>;
```

### Variables
The `DeactivateClinician` Mutation requires an argument of type `DeactivateClinicianVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeactivateClinicianVariables {
  cid: UUIDString;
}
```
### Return Type
Recall that calling the `DeactivateClinician` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeactivateClinician` Mutation is of type `DeactivateClinicianData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeactivateClinicianData {
  clinician_update?: Clinician_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeactivateClinician`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeactivateClinicianVariables } from '@dataconnect/generated';
import { useDeactivateClinician } from '@dataconnect/generated/react'

export default function DeactivateClinicianComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeactivateClinician();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeactivateClinician(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeactivateClinician(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeactivateClinician(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeactivateClinician` Mutation requires an argument of type `DeactivateClinicianVariables`:
  const deactivateClinicianVars: DeactivateClinicianVariables = {
    cid: ..., 
  };
  mutation.mutate(deactivateClinicianVars);
  // Variables can be defined inline as well.
  mutation.mutate({ cid: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deactivateClinicianVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.clinician_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreatePatient
You can execute the `CreatePatient` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreatePatient(options?: useDataConnectMutationOptions<CreatePatientData, FirebaseError, CreatePatientVariables>): UseDataConnectMutationResult<CreatePatientData, CreatePatientVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreatePatient(dc: DataConnect, options?: useDataConnectMutationOptions<CreatePatientData, FirebaseError, CreatePatientVariables>): UseDataConnectMutationResult<CreatePatientData, CreatePatientVariables>;
```

### Variables
The `CreatePatient` Mutation requires an argument of type `CreatePatientVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreatePatientVariables {
  email: string;
  firstName: string;
  lastName: string;
  dob: DateString;
  phone: string;
  bloodType: string;
  diagnosis: string;
  status: string;
  address: string;
}
```
### Return Type
Recall that calling the `CreatePatient` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreatePatient` Mutation is of type `CreatePatientData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreatePatientData {
  patient_insert: Patient_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreatePatient`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreatePatientVariables } from '@dataconnect/generated';
import { useCreatePatient } from '@dataconnect/generated/react'

export default function CreatePatientComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreatePatient();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreatePatient(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreatePatient(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreatePatient(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreatePatient` Mutation requires an argument of type `CreatePatientVariables`:
  const createPatientVars: CreatePatientVariables = {
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
  mutation.mutate(createPatientVars);
  // Variables can be defined inline as well.
  mutation.mutate({ email: ..., firstName: ..., lastName: ..., dob: ..., phone: ..., bloodType: ..., diagnosis: ..., status: ..., address: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createPatientVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.patient_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdatePatient
You can execute the `UpdatePatient` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdatePatient(options?: useDataConnectMutationOptions<UpdatePatientData, FirebaseError, UpdatePatientVariables>): UseDataConnectMutationResult<UpdatePatientData, UpdatePatientVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdatePatient(dc: DataConnect, options?: useDataConnectMutationOptions<UpdatePatientData, FirebaseError, UpdatePatientVariables>): UseDataConnectMutationResult<UpdatePatientData, UpdatePatientVariables>;
```

### Variables
The `UpdatePatient` Mutation requires an argument of type `UpdatePatientVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdatePatientVariables {
  pid: UUIDString;
  email: string;
  firstName: string;
  lastName: string;
  dob: DateString;
  phone: string;
  bloodType: string;
  diagnosis: string;
  status: string;
  address: string;
}
```
### Return Type
Recall that calling the `UpdatePatient` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdatePatient` Mutation is of type `UpdatePatientData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdatePatientData {
  patient_update?: Patient_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdatePatient`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdatePatientVariables } from '@dataconnect/generated';
import { useUpdatePatient } from '@dataconnect/generated/react'

export default function UpdatePatientComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdatePatient();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdatePatient(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdatePatient(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdatePatient(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdatePatient` Mutation requires an argument of type `UpdatePatientVariables`:
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
  mutation.mutate(updatePatientVars);
  // Variables can be defined inline as well.
  mutation.mutate({ pid: ..., email: ..., firstName: ..., lastName: ..., dob: ..., phone: ..., bloodType: ..., diagnosis: ..., status: ..., address: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updatePatientVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.patient_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdatePatientStatus
You can execute the `UpdatePatientStatus` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdatePatientStatus(options?: useDataConnectMutationOptions<UpdatePatientStatusData, FirebaseError, UpdatePatientStatusVariables>): UseDataConnectMutationResult<UpdatePatientStatusData, UpdatePatientStatusVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdatePatientStatus(dc: DataConnect, options?: useDataConnectMutationOptions<UpdatePatientStatusData, FirebaseError, UpdatePatientStatusVariables>): UseDataConnectMutationResult<UpdatePatientStatusData, UpdatePatientStatusVariables>;
```

### Variables
The `UpdatePatientStatus` Mutation requires an argument of type `UpdatePatientStatusVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdatePatientStatusVariables {
  pid: UUIDString;
  status: string;
}
```
### Return Type
Recall that calling the `UpdatePatientStatus` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdatePatientStatus` Mutation is of type `UpdatePatientStatusData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdatePatientStatusData {
  patient_update?: Patient_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdatePatientStatus`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdatePatientStatusVariables } from '@dataconnect/generated';
import { useUpdatePatientStatus } from '@dataconnect/generated/react'

export default function UpdatePatientStatusComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdatePatientStatus();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdatePatientStatus(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdatePatientStatus(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdatePatientStatus(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdatePatientStatus` Mutation requires an argument of type `UpdatePatientStatusVariables`:
  const updatePatientStatusVars: UpdatePatientStatusVariables = {
    pid: ..., 
    status: ..., 
  };
  mutation.mutate(updatePatientStatusVars);
  // Variables can be defined inline as well.
  mutation.mutate({ pid: ..., status: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updatePatientStatusVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.patient_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeletePatient
You can execute the `DeletePatient` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeletePatient(options?: useDataConnectMutationOptions<DeletePatientData, FirebaseError, DeletePatientVariables>): UseDataConnectMutationResult<DeletePatientData, DeletePatientVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeletePatient(dc: DataConnect, options?: useDataConnectMutationOptions<DeletePatientData, FirebaseError, DeletePatientVariables>): UseDataConnectMutationResult<DeletePatientData, DeletePatientVariables>;
```

### Variables
The `DeletePatient` Mutation requires an argument of type `DeletePatientVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeletePatientVariables {
  pid: UUIDString;
}
```
### Return Type
Recall that calling the `DeletePatient` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeletePatient` Mutation is of type `DeletePatientData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeletePatientData {
  patient_delete?: Patient_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeletePatient`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeletePatientVariables } from '@dataconnect/generated';
import { useDeletePatient } from '@dataconnect/generated/react'

export default function DeletePatientComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeletePatient();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeletePatient(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeletePatient(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeletePatient(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeletePatient` Mutation requires an argument of type `DeletePatientVariables`:
  const deletePatientVars: DeletePatientVariables = {
    pid: ..., 
  };
  mutation.mutate(deletePatientVars);
  // Variables can be defined inline as well.
  mutation.mutate({ pid: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deletePatientVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.patient_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

