import { CreateAppointmentData, CreateAppointmentVariables, EditAppointmentData, EditAppointmentVariables, CancelAppointmentData, CancelAppointmentVariables, GetActiveAppointmentsByPatientData, GetActiveAppointmentsByPatientVariables, GetAllAppointmentsByPatientData, GetAllAppointmentsByPatientVariables, GetActiveAppointmentsByClinicianData, GetActiveAppointmentsByClinicianVariables, GetAllAppointmentsByClinicianData, GetAllAppointmentsByClinicianVariables, CreateHeartData, CreateHeartVariables, GetHeartData, GetHeartVariables, ListHeartsByPatientData, ListHeartsByPatientVariables, CreateLogbookEntryData, CreateLogbookEntryVariables, CreateFileData, CreateFileVariables, AttachFileToLogbookEntryData, AttachFileToLogbookEntryVariables, GetLogbookEntryData, GetLogbookEntryVariables, ListLogBookEntriesByPatientData, ListLogBookEntriesByPatientVariables, ListAlertsData, ListUnresolvedAlertsData, ListHighSeverityAlertsData, ListAlertsBySensorIdData, ListAlertReadingsData, ListAlertReadingsByAlertIdData, ListAlertReadingsBySensorIdData, ListReadingHistoryData, ListReadingHistoryBySensorIdData, ListReadingHistoryForWindowData, CreateSensorData, CreateSensorVariables, GetSensorData, GetSensorVariables, ListSensorsData, ListActiveSensorsData, ListActiveSensorsVariables, ListSensorsByTypeData, ListSensorsByTypeVariables, UpdateSensorData, UpdateSensorVariables, DeleteSensorData, DeleteSensorVariables, ListSensorByHeartData, ListSensorByHeartVariables, GetSensorLiveData, GetSensorLiveVariables, ListSensorLiveData, ListSensorLiveBySensorIdData, ListSensorLiveBySensorIdVariables, UpdateSensorLiveData, UpdateSensorLiveVariables, DeleteSensorLiveData, DeleteSensorLiveVariables, CreateClinicianData, CreateClinicianVariables, GetClinicianData, GetClinicianVariables, ListCliniciansData, UpdateClinicianData, UpdateClinicianVariables, DeactivateClinicianData, DeactivateClinicianVariables, CreatePatientData, CreatePatientVariables, GetPatientData, GetPatientVariables, ListPatientsData, UpdatePatientData, UpdatePatientVariables, UpdatePatientStatusData, UpdatePatientStatusVariables, DeletePatientData, DeletePatientVariables, GetMyStaffProfileData, ListStaffPatientsData, GetStaffPatientData, GetStaffPatientVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateAppointment(options?: useDataConnectMutationOptions<CreateAppointmentData, FirebaseError, CreateAppointmentVariables>): UseDataConnectMutationResult<CreateAppointmentData, CreateAppointmentVariables>;
export function useCreateAppointment(dc: DataConnect, options?: useDataConnectMutationOptions<CreateAppointmentData, FirebaseError, CreateAppointmentVariables>): UseDataConnectMutationResult<CreateAppointmentData, CreateAppointmentVariables>;

export function useEditAppointment(options?: useDataConnectMutationOptions<EditAppointmentData, FirebaseError, EditAppointmentVariables>): UseDataConnectMutationResult<EditAppointmentData, EditAppointmentVariables>;
export function useEditAppointment(dc: DataConnect, options?: useDataConnectMutationOptions<EditAppointmentData, FirebaseError, EditAppointmentVariables>): UseDataConnectMutationResult<EditAppointmentData, EditAppointmentVariables>;

export function useCancelAppointment(options?: useDataConnectMutationOptions<CancelAppointmentData, FirebaseError, CancelAppointmentVariables>): UseDataConnectMutationResult<CancelAppointmentData, CancelAppointmentVariables>;
export function useCancelAppointment(dc: DataConnect, options?: useDataConnectMutationOptions<CancelAppointmentData, FirebaseError, CancelAppointmentVariables>): UseDataConnectMutationResult<CancelAppointmentData, CancelAppointmentVariables>;

export function useGetActiveAppointmentsByPatient(vars: GetActiveAppointmentsByPatientVariables, options?: useDataConnectQueryOptions<GetActiveAppointmentsByPatientData>): UseDataConnectQueryResult<GetActiveAppointmentsByPatientData, GetActiveAppointmentsByPatientVariables>;
export function useGetActiveAppointmentsByPatient(dc: DataConnect, vars: GetActiveAppointmentsByPatientVariables, options?: useDataConnectQueryOptions<GetActiveAppointmentsByPatientData>): UseDataConnectQueryResult<GetActiveAppointmentsByPatientData, GetActiveAppointmentsByPatientVariables>;

export function useGetAllAppointmentsByPatient(vars: GetAllAppointmentsByPatientVariables, options?: useDataConnectQueryOptions<GetAllAppointmentsByPatientData>): UseDataConnectQueryResult<GetAllAppointmentsByPatientData, GetAllAppointmentsByPatientVariables>;
export function useGetAllAppointmentsByPatient(dc: DataConnect, vars: GetAllAppointmentsByPatientVariables, options?: useDataConnectQueryOptions<GetAllAppointmentsByPatientData>): UseDataConnectQueryResult<GetAllAppointmentsByPatientData, GetAllAppointmentsByPatientVariables>;

export function useGetActiveAppointmentsByClinician(vars: GetActiveAppointmentsByClinicianVariables, options?: useDataConnectQueryOptions<GetActiveAppointmentsByClinicianData>): UseDataConnectQueryResult<GetActiveAppointmentsByClinicianData, GetActiveAppointmentsByClinicianVariables>;
export function useGetActiveAppointmentsByClinician(dc: DataConnect, vars: GetActiveAppointmentsByClinicianVariables, options?: useDataConnectQueryOptions<GetActiveAppointmentsByClinicianData>): UseDataConnectQueryResult<GetActiveAppointmentsByClinicianData, GetActiveAppointmentsByClinicianVariables>;

export function useGetAllAppointmentsByClinician(vars: GetAllAppointmentsByClinicianVariables, options?: useDataConnectQueryOptions<GetAllAppointmentsByClinicianData>): UseDataConnectQueryResult<GetAllAppointmentsByClinicianData, GetAllAppointmentsByClinicianVariables>;
export function useGetAllAppointmentsByClinician(dc: DataConnect, vars: GetAllAppointmentsByClinicianVariables, options?: useDataConnectQueryOptions<GetAllAppointmentsByClinicianData>): UseDataConnectQueryResult<GetAllAppointmentsByClinicianData, GetAllAppointmentsByClinicianVariables>;

export function useCreateHeart(options?: useDataConnectMutationOptions<CreateHeartData, FirebaseError, CreateHeartVariables>): UseDataConnectMutationResult<CreateHeartData, CreateHeartVariables>;
export function useCreateHeart(dc: DataConnect, options?: useDataConnectMutationOptions<CreateHeartData, FirebaseError, CreateHeartVariables>): UseDataConnectMutationResult<CreateHeartData, CreateHeartVariables>;

export function useGetHeart(vars: GetHeartVariables, options?: useDataConnectQueryOptions<GetHeartData>): UseDataConnectQueryResult<GetHeartData, GetHeartVariables>;
export function useGetHeart(dc: DataConnect, vars: GetHeartVariables, options?: useDataConnectQueryOptions<GetHeartData>): UseDataConnectQueryResult<GetHeartData, GetHeartVariables>;

export function useListHeartsByPatient(vars: ListHeartsByPatientVariables, options?: useDataConnectQueryOptions<ListHeartsByPatientData>): UseDataConnectQueryResult<ListHeartsByPatientData, ListHeartsByPatientVariables>;
export function useListHeartsByPatient(dc: DataConnect, vars: ListHeartsByPatientVariables, options?: useDataConnectQueryOptions<ListHeartsByPatientData>): UseDataConnectQueryResult<ListHeartsByPatientData, ListHeartsByPatientVariables>;

export function useCreateLogbookEntry(options?: useDataConnectMutationOptions<CreateLogbookEntryData, FirebaseError, CreateLogbookEntryVariables>): UseDataConnectMutationResult<CreateLogbookEntryData, CreateLogbookEntryVariables>;
export function useCreateLogbookEntry(dc: DataConnect, options?: useDataConnectMutationOptions<CreateLogbookEntryData, FirebaseError, CreateLogbookEntryVariables>): UseDataConnectMutationResult<CreateLogbookEntryData, CreateLogbookEntryVariables>;

export function useCreateFile(options?: useDataConnectMutationOptions<CreateFileData, FirebaseError, CreateFileVariables>): UseDataConnectMutationResult<CreateFileData, CreateFileVariables>;
export function useCreateFile(dc: DataConnect, options?: useDataConnectMutationOptions<CreateFileData, FirebaseError, CreateFileVariables>): UseDataConnectMutationResult<CreateFileData, CreateFileVariables>;

export function useAttachFileToLogbookEntry(options?: useDataConnectMutationOptions<AttachFileToLogbookEntryData, FirebaseError, AttachFileToLogbookEntryVariables>): UseDataConnectMutationResult<AttachFileToLogbookEntryData, AttachFileToLogbookEntryVariables>;
export function useAttachFileToLogbookEntry(dc: DataConnect, options?: useDataConnectMutationOptions<AttachFileToLogbookEntryData, FirebaseError, AttachFileToLogbookEntryVariables>): UseDataConnectMutationResult<AttachFileToLogbookEntryData, AttachFileToLogbookEntryVariables>;

export function useGetLogbookEntry(vars: GetLogbookEntryVariables, options?: useDataConnectQueryOptions<GetLogbookEntryData>): UseDataConnectQueryResult<GetLogbookEntryData, GetLogbookEntryVariables>;
export function useGetLogbookEntry(dc: DataConnect, vars: GetLogbookEntryVariables, options?: useDataConnectQueryOptions<GetLogbookEntryData>): UseDataConnectQueryResult<GetLogbookEntryData, GetLogbookEntryVariables>;

export function useListLogBookEntriesByPatient(vars: ListLogBookEntriesByPatientVariables, options?: useDataConnectQueryOptions<ListLogBookEntriesByPatientData>): UseDataConnectQueryResult<ListLogBookEntriesByPatientData, ListLogBookEntriesByPatientVariables>;
export function useListLogBookEntriesByPatient(dc: DataConnect, vars: ListLogBookEntriesByPatientVariables, options?: useDataConnectQueryOptions<ListLogBookEntriesByPatientData>): UseDataConnectQueryResult<ListLogBookEntriesByPatientData, ListLogBookEntriesByPatientVariables>;

export function useListAlerts(options?: useDataConnectQueryOptions<ListAlertsData>): UseDataConnectQueryResult<ListAlertsData, undefined>;
export function useListAlerts(dc: DataConnect, options?: useDataConnectQueryOptions<ListAlertsData>): UseDataConnectQueryResult<ListAlertsData, undefined>;

export function useListUnresolvedAlerts(options?: useDataConnectQueryOptions<ListUnresolvedAlertsData>): UseDataConnectQueryResult<ListUnresolvedAlertsData, undefined>;
export function useListUnresolvedAlerts(dc: DataConnect, options?: useDataConnectQueryOptions<ListUnresolvedAlertsData>): UseDataConnectQueryResult<ListUnresolvedAlertsData, undefined>;

export function useListHighSeverityAlerts(options?: useDataConnectQueryOptions<ListHighSeverityAlertsData>): UseDataConnectQueryResult<ListHighSeverityAlertsData, undefined>;
export function useListHighSeverityAlerts(dc: DataConnect, options?: useDataConnectQueryOptions<ListHighSeverityAlertsData>): UseDataConnectQueryResult<ListHighSeverityAlertsData, undefined>;

export function useListAlertsBySensorId(options?: useDataConnectQueryOptions<ListAlertsBySensorIdData>): UseDataConnectQueryResult<ListAlertsBySensorIdData, undefined>;
export function useListAlertsBySensorId(dc: DataConnect, options?: useDataConnectQueryOptions<ListAlertsBySensorIdData>): UseDataConnectQueryResult<ListAlertsBySensorIdData, undefined>;

export function useListAlertReadings(options?: useDataConnectQueryOptions<ListAlertReadingsData>): UseDataConnectQueryResult<ListAlertReadingsData, undefined>;
export function useListAlertReadings(dc: DataConnect, options?: useDataConnectQueryOptions<ListAlertReadingsData>): UseDataConnectQueryResult<ListAlertReadingsData, undefined>;

export function useListAlertReadingsByAlertId(options?: useDataConnectQueryOptions<ListAlertReadingsByAlertIdData>): UseDataConnectQueryResult<ListAlertReadingsByAlertIdData, undefined>;
export function useListAlertReadingsByAlertId(dc: DataConnect, options?: useDataConnectQueryOptions<ListAlertReadingsByAlertIdData>): UseDataConnectQueryResult<ListAlertReadingsByAlertIdData, undefined>;

export function useListAlertReadingsBySensorId(options?: useDataConnectQueryOptions<ListAlertReadingsBySensorIdData>): UseDataConnectQueryResult<ListAlertReadingsBySensorIdData, undefined>;
export function useListAlertReadingsBySensorId(dc: DataConnect, options?: useDataConnectQueryOptions<ListAlertReadingsBySensorIdData>): UseDataConnectQueryResult<ListAlertReadingsBySensorIdData, undefined>;

export function useListReadingHistory(options?: useDataConnectQueryOptions<ListReadingHistoryData>): UseDataConnectQueryResult<ListReadingHistoryData, undefined>;
export function useListReadingHistory(dc: DataConnect, options?: useDataConnectQueryOptions<ListReadingHistoryData>): UseDataConnectQueryResult<ListReadingHistoryData, undefined>;

export function useListReadingHistoryBySensorId(options?: useDataConnectQueryOptions<ListReadingHistoryBySensorIdData>): UseDataConnectQueryResult<ListReadingHistoryBySensorIdData, undefined>;
export function useListReadingHistoryBySensorId(dc: DataConnect, options?: useDataConnectQueryOptions<ListReadingHistoryBySensorIdData>): UseDataConnectQueryResult<ListReadingHistoryBySensorIdData, undefined>;

export function useListReadingHistoryForWindow(options?: useDataConnectQueryOptions<ListReadingHistoryForWindowData>): UseDataConnectQueryResult<ListReadingHistoryForWindowData, undefined>;
export function useListReadingHistoryForWindow(dc: DataConnect, options?: useDataConnectQueryOptions<ListReadingHistoryForWindowData>): UseDataConnectQueryResult<ListReadingHistoryForWindowData, undefined>;

export function useCreateSensor(options?: useDataConnectMutationOptions<CreateSensorData, FirebaseError, CreateSensorVariables>): UseDataConnectMutationResult<CreateSensorData, CreateSensorVariables>;
export function useCreateSensor(dc: DataConnect, options?: useDataConnectMutationOptions<CreateSensorData, FirebaseError, CreateSensorVariables>): UseDataConnectMutationResult<CreateSensorData, CreateSensorVariables>;

export function useGetSensor(vars: GetSensorVariables, options?: useDataConnectQueryOptions<GetSensorData>): UseDataConnectQueryResult<GetSensorData, GetSensorVariables>;
export function useGetSensor(dc: DataConnect, vars: GetSensorVariables, options?: useDataConnectQueryOptions<GetSensorData>): UseDataConnectQueryResult<GetSensorData, GetSensorVariables>;

export function useListSensors(options?: useDataConnectQueryOptions<ListSensorsData>): UseDataConnectQueryResult<ListSensorsData, undefined>;
export function useListSensors(dc: DataConnect, options?: useDataConnectQueryOptions<ListSensorsData>): UseDataConnectQueryResult<ListSensorsData, undefined>;

export function useListActiveSensors(vars: ListActiveSensorsVariables, options?: useDataConnectQueryOptions<ListActiveSensorsData>): UseDataConnectQueryResult<ListActiveSensorsData, ListActiveSensorsVariables>;
export function useListActiveSensors(dc: DataConnect, vars: ListActiveSensorsVariables, options?: useDataConnectQueryOptions<ListActiveSensorsData>): UseDataConnectQueryResult<ListActiveSensorsData, ListActiveSensorsVariables>;

export function useListSensorsByType(vars: ListSensorsByTypeVariables, options?: useDataConnectQueryOptions<ListSensorsByTypeData>): UseDataConnectQueryResult<ListSensorsByTypeData, ListSensorsByTypeVariables>;
export function useListSensorsByType(dc: DataConnect, vars: ListSensorsByTypeVariables, options?: useDataConnectQueryOptions<ListSensorsByTypeData>): UseDataConnectQueryResult<ListSensorsByTypeData, ListSensorsByTypeVariables>;

export function useUpdateSensor(options?: useDataConnectMutationOptions<UpdateSensorData, FirebaseError, UpdateSensorVariables>): UseDataConnectMutationResult<UpdateSensorData, UpdateSensorVariables>;
export function useUpdateSensor(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateSensorData, FirebaseError, UpdateSensorVariables>): UseDataConnectMutationResult<UpdateSensorData, UpdateSensorVariables>;

export function useDeleteSensor(options?: useDataConnectMutationOptions<DeleteSensorData, FirebaseError, DeleteSensorVariables>): UseDataConnectMutationResult<DeleteSensorData, DeleteSensorVariables>;
export function useDeleteSensor(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteSensorData, FirebaseError, DeleteSensorVariables>): UseDataConnectMutationResult<DeleteSensorData, DeleteSensorVariables>;

export function useListSensorByHeart(vars: ListSensorByHeartVariables, options?: useDataConnectQueryOptions<ListSensorByHeartData>): UseDataConnectQueryResult<ListSensorByHeartData, ListSensorByHeartVariables>;
export function useListSensorByHeart(dc: DataConnect, vars: ListSensorByHeartVariables, options?: useDataConnectQueryOptions<ListSensorByHeartData>): UseDataConnectQueryResult<ListSensorByHeartData, ListSensorByHeartVariables>;

export function useGetSensorLive(vars: GetSensorLiveVariables, options?: useDataConnectQueryOptions<GetSensorLiveData>): UseDataConnectQueryResult<GetSensorLiveData, GetSensorLiveVariables>;
export function useGetSensorLive(dc: DataConnect, vars: GetSensorLiveVariables, options?: useDataConnectQueryOptions<GetSensorLiveData>): UseDataConnectQueryResult<GetSensorLiveData, GetSensorLiveVariables>;

export function useListSensorLive(options?: useDataConnectQueryOptions<ListSensorLiveData>): UseDataConnectQueryResult<ListSensorLiveData, undefined>;
export function useListSensorLive(dc: DataConnect, options?: useDataConnectQueryOptions<ListSensorLiveData>): UseDataConnectQueryResult<ListSensorLiveData, undefined>;

export function useListSensorLiveBySensorId(vars: ListSensorLiveBySensorIdVariables, options?: useDataConnectQueryOptions<ListSensorLiveBySensorIdData>): UseDataConnectQueryResult<ListSensorLiveBySensorIdData, ListSensorLiveBySensorIdVariables>;
export function useListSensorLiveBySensorId(dc: DataConnect, vars: ListSensorLiveBySensorIdVariables, options?: useDataConnectQueryOptions<ListSensorLiveBySensorIdData>): UseDataConnectQueryResult<ListSensorLiveBySensorIdData, ListSensorLiveBySensorIdVariables>;

export function useUpdateSensorLive(options?: useDataConnectMutationOptions<UpdateSensorLiveData, FirebaseError, UpdateSensorLiveVariables>): UseDataConnectMutationResult<UpdateSensorLiveData, UpdateSensorLiveVariables>;
export function useUpdateSensorLive(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateSensorLiveData, FirebaseError, UpdateSensorLiveVariables>): UseDataConnectMutationResult<UpdateSensorLiveData, UpdateSensorLiveVariables>;

export function useDeleteSensorLive(options?: useDataConnectMutationOptions<DeleteSensorLiveData, FirebaseError, DeleteSensorLiveVariables>): UseDataConnectMutationResult<DeleteSensorLiveData, DeleteSensorLiveVariables>;
export function useDeleteSensorLive(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteSensorLiveData, FirebaseError, DeleteSensorLiveVariables>): UseDataConnectMutationResult<DeleteSensorLiveData, DeleteSensorLiveVariables>;

export function useCreateClinician(options?: useDataConnectMutationOptions<CreateClinicianData, FirebaseError, CreateClinicianVariables>): UseDataConnectMutationResult<CreateClinicianData, CreateClinicianVariables>;
export function useCreateClinician(dc: DataConnect, options?: useDataConnectMutationOptions<CreateClinicianData, FirebaseError, CreateClinicianVariables>): UseDataConnectMutationResult<CreateClinicianData, CreateClinicianVariables>;

export function useGetClinician(vars: GetClinicianVariables, options?: useDataConnectQueryOptions<GetClinicianData>): UseDataConnectQueryResult<GetClinicianData, GetClinicianVariables>;
export function useGetClinician(dc: DataConnect, vars: GetClinicianVariables, options?: useDataConnectQueryOptions<GetClinicianData>): UseDataConnectQueryResult<GetClinicianData, GetClinicianVariables>;

export function useListClinicians(options?: useDataConnectQueryOptions<ListCliniciansData>): UseDataConnectQueryResult<ListCliniciansData, undefined>;
export function useListClinicians(dc: DataConnect, options?: useDataConnectQueryOptions<ListCliniciansData>): UseDataConnectQueryResult<ListCliniciansData, undefined>;

export function useUpdateClinician(options?: useDataConnectMutationOptions<UpdateClinicianData, FirebaseError, UpdateClinicianVariables>): UseDataConnectMutationResult<UpdateClinicianData, UpdateClinicianVariables>;
export function useUpdateClinician(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateClinicianData, FirebaseError, UpdateClinicianVariables>): UseDataConnectMutationResult<UpdateClinicianData, UpdateClinicianVariables>;

export function useDeactivateClinician(options?: useDataConnectMutationOptions<DeactivateClinicianData, FirebaseError, DeactivateClinicianVariables>): UseDataConnectMutationResult<DeactivateClinicianData, DeactivateClinicianVariables>;
export function useDeactivateClinician(dc: DataConnect, options?: useDataConnectMutationOptions<DeactivateClinicianData, FirebaseError, DeactivateClinicianVariables>): UseDataConnectMutationResult<DeactivateClinicianData, DeactivateClinicianVariables>;

export function useCreatePatient(options?: useDataConnectMutationOptions<CreatePatientData, FirebaseError, CreatePatientVariables>): UseDataConnectMutationResult<CreatePatientData, CreatePatientVariables>;
export function useCreatePatient(dc: DataConnect, options?: useDataConnectMutationOptions<CreatePatientData, FirebaseError, CreatePatientVariables>): UseDataConnectMutationResult<CreatePatientData, CreatePatientVariables>;

export function useGetPatient(vars: GetPatientVariables, options?: useDataConnectQueryOptions<GetPatientData>): UseDataConnectQueryResult<GetPatientData, GetPatientVariables>;
export function useGetPatient(dc: DataConnect, vars: GetPatientVariables, options?: useDataConnectQueryOptions<GetPatientData>): UseDataConnectQueryResult<GetPatientData, GetPatientVariables>;

export function useListPatients(options?: useDataConnectQueryOptions<ListPatientsData>): UseDataConnectQueryResult<ListPatientsData, undefined>;
export function useListPatients(dc: DataConnect, options?: useDataConnectQueryOptions<ListPatientsData>): UseDataConnectQueryResult<ListPatientsData, undefined>;

export function useUpdatePatient(options?: useDataConnectMutationOptions<UpdatePatientData, FirebaseError, UpdatePatientVariables>): UseDataConnectMutationResult<UpdatePatientData, UpdatePatientVariables>;
export function useUpdatePatient(dc: DataConnect, options?: useDataConnectMutationOptions<UpdatePatientData, FirebaseError, UpdatePatientVariables>): UseDataConnectMutationResult<UpdatePatientData, UpdatePatientVariables>;

export function useUpdatePatientStatus(options?: useDataConnectMutationOptions<UpdatePatientStatusData, FirebaseError, UpdatePatientStatusVariables>): UseDataConnectMutationResult<UpdatePatientStatusData, UpdatePatientStatusVariables>;
export function useUpdatePatientStatus(dc: DataConnect, options?: useDataConnectMutationOptions<UpdatePatientStatusData, FirebaseError, UpdatePatientStatusVariables>): UseDataConnectMutationResult<UpdatePatientStatusData, UpdatePatientStatusVariables>;

export function useDeletePatient(options?: useDataConnectMutationOptions<DeletePatientData, FirebaseError, DeletePatientVariables>): UseDataConnectMutationResult<DeletePatientData, DeletePatientVariables>;
export function useDeletePatient(dc: DataConnect, options?: useDataConnectMutationOptions<DeletePatientData, FirebaseError, DeletePatientVariables>): UseDataConnectMutationResult<DeletePatientData, DeletePatientVariables>;

export function useGetMyStaffProfile(options?: useDataConnectQueryOptions<GetMyStaffProfileData>): UseDataConnectQueryResult<GetMyStaffProfileData, undefined>;
export function useGetMyStaffProfile(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyStaffProfileData>): UseDataConnectQueryResult<GetMyStaffProfileData, undefined>;

export function useListStaffPatients(options?: useDataConnectQueryOptions<ListStaffPatientsData>): UseDataConnectQueryResult<ListStaffPatientsData, undefined>;
export function useListStaffPatients(dc: DataConnect, options?: useDataConnectQueryOptions<ListStaffPatientsData>): UseDataConnectQueryResult<ListStaffPatientsData, undefined>;

export function useGetStaffPatient(vars: GetStaffPatientVariables, options?: useDataConnectQueryOptions<GetStaffPatientData>): UseDataConnectQueryResult<GetStaffPatientData, GetStaffPatientVariables>;
export function useGetStaffPatient(dc: DataConnect, vars: GetStaffPatientVariables, options?: useDataConnectQueryOptions<GetStaffPatientData>): UseDataConnectQueryResult<GetStaffPatientData, GetStaffPatientVariables>;
