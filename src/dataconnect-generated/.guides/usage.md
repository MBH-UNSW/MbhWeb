# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateAppointment, useEditAppointment, useCancelAppointment, useGetActiveAppointmentsByPatient, useGetAllAppointmentsByPatient, useGetActiveAppointmentsByClinician, useGetAllAppointmentsByClinician, useCreateHeart, useGetHeart, useListHeartsByPatient } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateAppointment(createAppointmentVars);

const { data, isPending, isSuccess, isError, error } = useEditAppointment(editAppointmentVars);

const { data, isPending, isSuccess, isError, error } = useCancelAppointment(cancelAppointmentVars);

const { data, isPending, isSuccess, isError, error } = useGetActiveAppointmentsByPatient(getActiveAppointmentsByPatientVars);

const { data, isPending, isSuccess, isError, error } = useGetAllAppointmentsByPatient(getAllAppointmentsByPatientVars);

const { data, isPending, isSuccess, isError, error } = useGetActiveAppointmentsByClinician(getActiveAppointmentsByClinicianVars);

const { data, isPending, isSuccess, isError, error } = useGetAllAppointmentsByClinician(getAllAppointmentsByClinicianVars);

const { data, isPending, isSuccess, isError, error } = useCreateHeart(createHeartVars);

const { data, isPending, isSuccess, isError, error } = useGetHeart(getHeartVars);

const { data, isPending, isSuccess, isError, error } = useListHeartsByPatient(listHeartsByPatientVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createAppointment, editAppointment, cancelAppointment, getActiveAppointmentsByPatient, getAllAppointmentsByPatient, getActiveAppointmentsByClinician, getAllAppointmentsByClinician, createHeart, getHeart, listHeartsByPatient } from '@dataconnect/generated';


// Operation CreateAppointment:  For variables, look at type CreateAppointmentVars in ../index.d.ts
const { data } = await CreateAppointment(dataConnect, createAppointmentVars);

// Operation EditAppointment:  For variables, look at type EditAppointmentVars in ../index.d.ts
const { data } = await EditAppointment(dataConnect, editAppointmentVars);

// Operation CancelAppointment:  For variables, look at type CancelAppointmentVars in ../index.d.ts
const { data } = await CancelAppointment(dataConnect, cancelAppointmentVars);

// Operation GetActiveAppointmentsByPatient:  For variables, look at type GetActiveAppointmentsByPatientVars in ../index.d.ts
const { data } = await GetActiveAppointmentsByPatient(dataConnect, getActiveAppointmentsByPatientVars);

// Operation GetAllAppointmentsByPatient:  For variables, look at type GetAllAppointmentsByPatientVars in ../index.d.ts
const { data } = await GetAllAppointmentsByPatient(dataConnect, getAllAppointmentsByPatientVars);

// Operation GetActiveAppointmentsByClinician:  For variables, look at type GetActiveAppointmentsByClinicianVars in ../index.d.ts
const { data } = await GetActiveAppointmentsByClinician(dataConnect, getActiveAppointmentsByClinicianVars);

// Operation GetAllAppointmentsByClinician:  For variables, look at type GetAllAppointmentsByClinicianVars in ../index.d.ts
const { data } = await GetAllAppointmentsByClinician(dataConnect, getAllAppointmentsByClinicianVars);

// Operation CreateHeart:  For variables, look at type CreateHeartVars in ../index.d.ts
const { data } = await CreateHeart(dataConnect, createHeartVars);

// Operation GetHeart:  For variables, look at type GetHeartVars in ../index.d.ts
const { data } = await GetHeart(dataConnect, getHeartVars);

// Operation ListHeartsByPatient:  For variables, look at type ListHeartsByPatientVars in ../index.d.ts
const { data } = await ListHeartsByPatient(dataConnect, listHeartsByPatientVars);


```