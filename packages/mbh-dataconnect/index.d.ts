import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export enum AppointmentStatus {
  SCHEDULED = "SCHEDULED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
};

export enum Status {
  STABLE = "STABLE",
  WARNING = "WARNING",
  UNSTABLE = "UNSTABLE",
};



export interface AlertReadings_Key {
  readingId: UUIDString;
  __typename?: 'AlertReadings_Key';
}

export interface Alert_Key {
  alertId: UUIDString;
  __typename?: 'Alert_Key';
}

export interface Appointment_Key {
  id: UUIDString;
  __typename?: 'Appointment_Key';
}

export interface AttachFileToLogbookEntryData {
  logbookEntryFile_insert: LogbookEntryFile_Key;
}

export interface AttachFileToLogbookEntryVariables {
  logbookEntryId: UUIDString;
  fileId: UUIDString;
}

export interface CancelAppointmentData {
  appointment_update?: Appointment_Key | null;
}

export interface CancelAppointmentVariables {
  id: UUIDString;
}

export interface Clinician_Key {
  cid: UUIDString;
  __typename?: 'Clinician_Key';
}

export interface CreateAppointmentData {
  appointment_insert: Appointment_Key;
}

export interface CreateAppointmentVariables {
  patientPid: UUIDString;
  clinicianCid: UUIDString;
  appointmentReason: string;
  scheduledAt: TimestampString;
}

export interface CreateClinicianData {
  clinician_insert: Clinician_Key;
}

export interface CreateClinicianVariables {
  firstName: string;
  lastName: string;
  email: string;
  dob: DateString;
  phone: string;
  aphra: string;
  specialty: string;
}

export interface CreateFileData {
  file_insert: File_Key;
}

export interface CreateFileVariables {
  uploadedByPatientPid: UUIDString;
  fileName: string;
  storagePath: string;
  mimeType: string;
  fileSizeBytes: number;
}

export interface CreateHeartData {
  heart_insert: Heart_Key;
}

export interface CreateHeartVariables {
  patientPid: UUIDString;
}

export interface CreateLogbookEntryData {
  logbookEntry_insert: LogbookEntry_Key;
}

export interface CreateLogbookEntryVariables {
  patientPid: UUIDString;
  inr: number;
  weight: number;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
}

export interface CreateLogbookFileMetadataData {
  file_insert: File_Key;
  logbookEntryFile_insert: LogbookEntryFile_Key;
}

export interface CreateLogbookFileMetadataVariables {
  fileId: UUIDString;
  logbookEntryId: UUIDString;
  fileName: string;
  storagePath: string;
  mimeType: string;
  fileSizeBytes: number;
}

export interface CreatePatientData {
  patient_insert: Patient_Key;
}

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

export interface CreateSensorData {
  sensor_insert: Sensor_Key;
}

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

export interface DeactivateClinicianData {
  clinician_update?: Clinician_Key | null;
}

export interface DeactivateClinicianVariables {
  cid: UUIDString;
}

export interface DeletePatientData {
  patient_delete?: Patient_Key | null;
}

export interface DeletePatientVariables {
  pid: UUIDString;
}

export interface DeleteSensorData {
  sensor_delete?: Sensor_Key | null;
}

export interface DeleteSensorLiveData {
  sensorLive_delete?: SensorLive_Key | null;
}

export interface DeleteSensorLiveVariables {
  sensorId: UUIDString;
}

export interface DeleteSensorVariables {
  sensorId: UUIDString;
}

export interface EditAppointmentData {
  appointment_update?: Appointment_Key | null;
}

export interface EditAppointmentVariables {
  id: UUIDString;
  appointmentReason?: string | null;
  appointmentNotes?: string | null;
  scheduledAt?: TimestampString | null;
  status?: AppointmentStatus | null;
}

export interface File_Key {
  id: UUIDString;
  __typename?: 'File_Key';
}

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

export interface GeneratePatientSummaryReportVariables {
  appointmentId: UUIDString;
  startTime: TimestampString;
  endTime: TimestampString;
}

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

export interface GetActiveAppointmentsByClinicianVariables {
  clinicianCid: UUIDString;
}

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

export interface GetActiveAppointmentsByPatientVariables {
  patientPid: UUIDString;
}

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

export interface GetAllAppointmentsByClinicianVariables {
  clinicianCid: UUIDString;
}

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

export interface GetAllAppointmentsByPatientVariables {
  patientPid: UUIDString;
}

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

export interface GetClinicianVariables {
  cid: UUIDString;
}

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

export interface GetHeartVariables {
  heartId: UUIDString;
}

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

export interface GetLogbookEntryVariables {
  id: UUIDString;
}

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

export interface GetPatientLogbookFileMetadataData {
  file?: {
    id: UUIDString;
    fileName: string;
    storagePath: string;
    mimeType: string;
    fileSizeBytes: number;
  } & File_Key;
}

export interface GetPatientLogbookFileMetadataVariables {
  fileId: UUIDString;
  logbookEntryId: UUIDString;
}

export interface GetPatientVariables {
  pid: UUIDString;
}

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

export interface GetSensorLiveVariables {
  sensorId: UUIDString;
}

export interface GetSensorVariables {
  sensorId: UUIDString;
}

export interface Heart_Key {
  heartId: UUIDString;
  __typename?: 'Heart_Key';
}

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

export interface ListActiveSensorsVariables {
  status: boolean;
}

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

export interface ListHeartsByPatientData {
  hearts: ({
    heartId: UUIDString;
    createdAt: TimestampString;
  } & Heart_Key)[];
}

export interface ListHeartsByPatientVariables {
  patientPid: UUIDString;
}

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

export interface ListLogBookEntriesByPatientVariables {
  patientId: UUIDString;
}

export interface ListPatientLogbookEntriesData {
  patients: ({
    logbookEntries_on_patient: ({
      id: UUIDString;
      createdAt: TimestampString;
    } & LogbookEntry_Key)[];
  })[];
}

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

export interface ListPatientsByStatusVariables {
  status: Status;
}

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

export interface ListPatientsByStatusesVariables {
  statuses: Status[];
}

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

export interface ListSensorByHeartVariables {
  heartId: UUIDString;
}

export interface ListSensorLiveBySensorIdData {
  sensorLives: ({
    sensorId: UUIDString;
    value: number;
    unit: string;
    recordedAt: TimestampString;
  } & SensorLive_Key)[];
}

export interface ListSensorLiveBySensorIdVariables {
  sensorId: UUIDString;
}

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

export interface ListSensorsByTypeVariables {
  type: string;
}

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

export interface LogbookEntryFile_Key {
  logbookEntryId: UUIDString;
  fileId: UUIDString;
  __typename?: 'LogbookEntryFile_Key';
}

export interface LogbookEntry_Key {
  id: UUIDString;
  __typename?: 'LogbookEntry_Key';
}

export interface PatientCountByStatusData {
  patients: ({
    _count: number;
    status: Status;
  })[];
}

export interface Patient_Key {
  pid: UUIDString;
  __typename?: 'Patient_Key';
}

export interface ReadingHistory_Key {
  historyId: UUIDString;
  __typename?: 'ReadingHistory_Key';
}

export interface SensorLive_Key {
  sensorId: UUIDString;
  __typename?: 'SensorLive_Key';
}

export interface Sensor_Key {
  sensorId: UUIDString;
  __typename?: 'Sensor_Key';
}

export interface UpdateClinicianData {
  clinician_update?: Clinician_Key | null;
}

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

export interface UpdatePatientData {
  patient_update?: Patient_Key | null;
}

export interface UpdatePatientStatusData {
  patient_update?: Patient_Key | null;
}

export interface UpdatePatientStatusVariables {
  pid: UUIDString;
  status: Status;
}

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

export interface UpdateSensorData {
  sensor_update?: Sensor_Key | null;
}

export interface UpdateSensorLiveData {
  sensorLive_update?: SensorLive_Key | null;
}

export interface UpdateSensorLiveVariables {
  sensorId: UUIDString;
  value: number;
  unit: string;
  recordedAt: TimestampString;
}

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

interface CreateAppointmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateAppointmentVariables): MutationRef<CreateAppointmentData, CreateAppointmentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateAppointmentVariables): MutationRef<CreateAppointmentData, CreateAppointmentVariables>;
  operationName: string;
}
export const createAppointmentRef: CreateAppointmentRef;

export function createAppointment(vars: CreateAppointmentVariables): MutationPromise<CreateAppointmentData, CreateAppointmentVariables>;
export function createAppointment(dc: DataConnect, vars: CreateAppointmentVariables): MutationPromise<CreateAppointmentData, CreateAppointmentVariables>;

interface EditAppointmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: EditAppointmentVariables): MutationRef<EditAppointmentData, EditAppointmentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: EditAppointmentVariables): MutationRef<EditAppointmentData, EditAppointmentVariables>;
  operationName: string;
}
export const editAppointmentRef: EditAppointmentRef;

export function editAppointment(vars: EditAppointmentVariables): MutationPromise<EditAppointmentData, EditAppointmentVariables>;
export function editAppointment(dc: DataConnect, vars: EditAppointmentVariables): MutationPromise<EditAppointmentData, EditAppointmentVariables>;

interface CancelAppointmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CancelAppointmentVariables): MutationRef<CancelAppointmentData, CancelAppointmentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CancelAppointmentVariables): MutationRef<CancelAppointmentData, CancelAppointmentVariables>;
  operationName: string;
}
export const cancelAppointmentRef: CancelAppointmentRef;

export function cancelAppointment(vars: CancelAppointmentVariables): MutationPromise<CancelAppointmentData, CancelAppointmentVariables>;
export function cancelAppointment(dc: DataConnect, vars: CancelAppointmentVariables): MutationPromise<CancelAppointmentData, CancelAppointmentVariables>;

interface GetActiveAppointmentsByPatientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetActiveAppointmentsByPatientVariables): QueryRef<GetActiveAppointmentsByPatientData, GetActiveAppointmentsByPatientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetActiveAppointmentsByPatientVariables): QueryRef<GetActiveAppointmentsByPatientData, GetActiveAppointmentsByPatientVariables>;
  operationName: string;
}
export const getActiveAppointmentsByPatientRef: GetActiveAppointmentsByPatientRef;

export function getActiveAppointmentsByPatient(vars: GetActiveAppointmentsByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<GetActiveAppointmentsByPatientData, GetActiveAppointmentsByPatientVariables>;
export function getActiveAppointmentsByPatient(dc: DataConnect, vars: GetActiveAppointmentsByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<GetActiveAppointmentsByPatientData, GetActiveAppointmentsByPatientVariables>;

interface GetAllAppointmentsByPatientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAllAppointmentsByPatientVariables): QueryRef<GetAllAppointmentsByPatientData, GetAllAppointmentsByPatientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAllAppointmentsByPatientVariables): QueryRef<GetAllAppointmentsByPatientData, GetAllAppointmentsByPatientVariables>;
  operationName: string;
}
export const getAllAppointmentsByPatientRef: GetAllAppointmentsByPatientRef;

export function getAllAppointmentsByPatient(vars: GetAllAppointmentsByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllAppointmentsByPatientData, GetAllAppointmentsByPatientVariables>;
export function getAllAppointmentsByPatient(dc: DataConnect, vars: GetAllAppointmentsByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllAppointmentsByPatientData, GetAllAppointmentsByPatientVariables>;

interface GetActiveAppointmentsByClinicianRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetActiveAppointmentsByClinicianVariables): QueryRef<GetActiveAppointmentsByClinicianData, GetActiveAppointmentsByClinicianVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetActiveAppointmentsByClinicianVariables): QueryRef<GetActiveAppointmentsByClinicianData, GetActiveAppointmentsByClinicianVariables>;
  operationName: string;
}
export const getActiveAppointmentsByClinicianRef: GetActiveAppointmentsByClinicianRef;

export function getActiveAppointmentsByClinician(vars: GetActiveAppointmentsByClinicianVariables, options?: ExecuteQueryOptions): QueryPromise<GetActiveAppointmentsByClinicianData, GetActiveAppointmentsByClinicianVariables>;
export function getActiveAppointmentsByClinician(dc: DataConnect, vars: GetActiveAppointmentsByClinicianVariables, options?: ExecuteQueryOptions): QueryPromise<GetActiveAppointmentsByClinicianData, GetActiveAppointmentsByClinicianVariables>;

interface GetAllAppointmentsByClinicianRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAllAppointmentsByClinicianVariables): QueryRef<GetAllAppointmentsByClinicianData, GetAllAppointmentsByClinicianVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAllAppointmentsByClinicianVariables): QueryRef<GetAllAppointmentsByClinicianData, GetAllAppointmentsByClinicianVariables>;
  operationName: string;
}
export const getAllAppointmentsByClinicianRef: GetAllAppointmentsByClinicianRef;

export function getAllAppointmentsByClinician(vars: GetAllAppointmentsByClinicianVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllAppointmentsByClinicianData, GetAllAppointmentsByClinicianVariables>;
export function getAllAppointmentsByClinician(dc: DataConnect, vars: GetAllAppointmentsByClinicianVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllAppointmentsByClinicianData, GetAllAppointmentsByClinicianVariables>;

interface CreateHeartRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateHeartVariables): MutationRef<CreateHeartData, CreateHeartVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateHeartVariables): MutationRef<CreateHeartData, CreateHeartVariables>;
  operationName: string;
}
export const createHeartRef: CreateHeartRef;

export function createHeart(vars: CreateHeartVariables): MutationPromise<CreateHeartData, CreateHeartVariables>;
export function createHeart(dc: DataConnect, vars: CreateHeartVariables): MutationPromise<CreateHeartData, CreateHeartVariables>;

interface GetHeartRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetHeartVariables): QueryRef<GetHeartData, GetHeartVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetHeartVariables): QueryRef<GetHeartData, GetHeartVariables>;
  operationName: string;
}
export const getHeartRef: GetHeartRef;

export function getHeart(vars: GetHeartVariables, options?: ExecuteQueryOptions): QueryPromise<GetHeartData, GetHeartVariables>;
export function getHeart(dc: DataConnect, vars: GetHeartVariables, options?: ExecuteQueryOptions): QueryPromise<GetHeartData, GetHeartVariables>;

interface ListHeartsByPatientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListHeartsByPatientVariables): QueryRef<ListHeartsByPatientData, ListHeartsByPatientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListHeartsByPatientVariables): QueryRef<ListHeartsByPatientData, ListHeartsByPatientVariables>;
  operationName: string;
}
export const listHeartsByPatientRef: ListHeartsByPatientRef;

export function listHeartsByPatient(vars: ListHeartsByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<ListHeartsByPatientData, ListHeartsByPatientVariables>;
export function listHeartsByPatient(dc: DataConnect, vars: ListHeartsByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<ListHeartsByPatientData, ListHeartsByPatientVariables>;

interface CreateLogbookEntryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateLogbookEntryVariables): MutationRef<CreateLogbookEntryData, CreateLogbookEntryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateLogbookEntryVariables): MutationRef<CreateLogbookEntryData, CreateLogbookEntryVariables>;
  operationName: string;
}
export const createLogbookEntryRef: CreateLogbookEntryRef;

export function createLogbookEntry(vars: CreateLogbookEntryVariables): MutationPromise<CreateLogbookEntryData, CreateLogbookEntryVariables>;
export function createLogbookEntry(dc: DataConnect, vars: CreateLogbookEntryVariables): MutationPromise<CreateLogbookEntryData, CreateLogbookEntryVariables>;

interface CreateFileRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateFileVariables): MutationRef<CreateFileData, CreateFileVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateFileVariables): MutationRef<CreateFileData, CreateFileVariables>;
  operationName: string;
}
export const createFileRef: CreateFileRef;

export function createFile(vars: CreateFileVariables): MutationPromise<CreateFileData, CreateFileVariables>;
export function createFile(dc: DataConnect, vars: CreateFileVariables): MutationPromise<CreateFileData, CreateFileVariables>;

interface AttachFileToLogbookEntryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AttachFileToLogbookEntryVariables): MutationRef<AttachFileToLogbookEntryData, AttachFileToLogbookEntryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AttachFileToLogbookEntryVariables): MutationRef<AttachFileToLogbookEntryData, AttachFileToLogbookEntryVariables>;
  operationName: string;
}
export const attachFileToLogbookEntryRef: AttachFileToLogbookEntryRef;

export function attachFileToLogbookEntry(vars: AttachFileToLogbookEntryVariables): MutationPromise<AttachFileToLogbookEntryData, AttachFileToLogbookEntryVariables>;
export function attachFileToLogbookEntry(dc: DataConnect, vars: AttachFileToLogbookEntryVariables): MutationPromise<AttachFileToLogbookEntryData, AttachFileToLogbookEntryVariables>;

interface GetLogbookEntryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetLogbookEntryVariables): QueryRef<GetLogbookEntryData, GetLogbookEntryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetLogbookEntryVariables): QueryRef<GetLogbookEntryData, GetLogbookEntryVariables>;
  operationName: string;
}
export const getLogbookEntryRef: GetLogbookEntryRef;

export function getLogbookEntry(vars: GetLogbookEntryVariables, options?: ExecuteQueryOptions): QueryPromise<GetLogbookEntryData, GetLogbookEntryVariables>;
export function getLogbookEntry(dc: DataConnect, vars: GetLogbookEntryVariables, options?: ExecuteQueryOptions): QueryPromise<GetLogbookEntryData, GetLogbookEntryVariables>;

interface ListLogBookEntriesByPatientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListLogBookEntriesByPatientVariables): QueryRef<ListLogBookEntriesByPatientData, ListLogBookEntriesByPatientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListLogBookEntriesByPatientVariables): QueryRef<ListLogBookEntriesByPatientData, ListLogBookEntriesByPatientVariables>;
  operationName: string;
}
export const listLogBookEntriesByPatientRef: ListLogBookEntriesByPatientRef;

export function listLogBookEntriesByPatient(vars: ListLogBookEntriesByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<ListLogBookEntriesByPatientData, ListLogBookEntriesByPatientVariables>;
export function listLogBookEntriesByPatient(dc: DataConnect, vars: ListLogBookEntriesByPatientVariables, options?: ExecuteQueryOptions): QueryPromise<ListLogBookEntriesByPatientData, ListLogBookEntriesByPatientVariables>;

interface CreateLogbookFileMetadataRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateLogbookFileMetadataVariables): MutationRef<CreateLogbookFileMetadataData, CreateLogbookFileMetadataVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateLogbookFileMetadataVariables): MutationRef<CreateLogbookFileMetadataData, CreateLogbookFileMetadataVariables>;
  operationName: string;
}
export const createLogbookFileMetadataRef: CreateLogbookFileMetadataRef;

export function createLogbookFileMetadata(vars: CreateLogbookFileMetadataVariables): MutationPromise<CreateLogbookFileMetadataData, CreateLogbookFileMetadataVariables>;
export function createLogbookFileMetadata(dc: DataConnect, vars: CreateLogbookFileMetadataVariables): MutationPromise<CreateLogbookFileMetadataData, CreateLogbookFileMetadataVariables>;

interface GetPatientLogbookFileMetadataRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPatientLogbookFileMetadataVariables): QueryRef<GetPatientLogbookFileMetadataData, GetPatientLogbookFileMetadataVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetPatientLogbookFileMetadataVariables): QueryRef<GetPatientLogbookFileMetadataData, GetPatientLogbookFileMetadataVariables>;
  operationName: string;
}
export const getPatientLogbookFileMetadataRef: GetPatientLogbookFileMetadataRef;

export function getPatientLogbookFileMetadata(vars: GetPatientLogbookFileMetadataVariables, options?: ExecuteQueryOptions): QueryPromise<GetPatientLogbookFileMetadataData, GetPatientLogbookFileMetadataVariables>;
export function getPatientLogbookFileMetadata(dc: DataConnect, vars: GetPatientLogbookFileMetadataVariables, options?: ExecuteQueryOptions): QueryPromise<GetPatientLogbookFileMetadataData, GetPatientLogbookFileMetadataVariables>;

interface ListPatientLogbookEntriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPatientLogbookEntriesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPatientLogbookEntriesData, undefined>;
  operationName: string;
}
export const listPatientLogbookEntriesRef: ListPatientLogbookEntriesRef;

export function listPatientLogbookEntries(options?: ExecuteQueryOptions): QueryPromise<ListPatientLogbookEntriesData, undefined>;
export function listPatientLogbookEntries(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListPatientLogbookEntriesData, undefined>;

interface GeneratePatientSummaryReportRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GeneratePatientSummaryReportVariables): QueryRef<GeneratePatientSummaryReportData, GeneratePatientSummaryReportVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GeneratePatientSummaryReportVariables): QueryRef<GeneratePatientSummaryReportData, GeneratePatientSummaryReportVariables>;
  operationName: string;
}
export const generatePatientSummaryReportRef: GeneratePatientSummaryReportRef;

export function generatePatientSummaryReport(vars: GeneratePatientSummaryReportVariables, options?: ExecuteQueryOptions): QueryPromise<GeneratePatientSummaryReportData, GeneratePatientSummaryReportVariables>;
export function generatePatientSummaryReport(dc: DataConnect, vars: GeneratePatientSummaryReportVariables, options?: ExecuteQueryOptions): QueryPromise<GeneratePatientSummaryReportData, GeneratePatientSummaryReportVariables>;

interface ListAlertsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAlertsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAlertsData, undefined>;
  operationName: string;
}
export const listAlertsRef: ListAlertsRef;

export function listAlerts(options?: ExecuteQueryOptions): QueryPromise<ListAlertsData, undefined>;
export function listAlerts(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAlertsData, undefined>;

interface ListUnresolvedAlertsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUnresolvedAlertsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUnresolvedAlertsData, undefined>;
  operationName: string;
}
export const listUnresolvedAlertsRef: ListUnresolvedAlertsRef;

export function listUnresolvedAlerts(options?: ExecuteQueryOptions): QueryPromise<ListUnresolvedAlertsData, undefined>;
export function listUnresolvedAlerts(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUnresolvedAlertsData, undefined>;

interface ListHighSeverityAlertsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListHighSeverityAlertsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListHighSeverityAlertsData, undefined>;
  operationName: string;
}
export const listHighSeverityAlertsRef: ListHighSeverityAlertsRef;

export function listHighSeverityAlerts(options?: ExecuteQueryOptions): QueryPromise<ListHighSeverityAlertsData, undefined>;
export function listHighSeverityAlerts(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListHighSeverityAlertsData, undefined>;

interface ListAlertsBySensorIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAlertsBySensorIdData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAlertsBySensorIdData, undefined>;
  operationName: string;
}
export const listAlertsBySensorIdRef: ListAlertsBySensorIdRef;

export function listAlertsBySensorId(options?: ExecuteQueryOptions): QueryPromise<ListAlertsBySensorIdData, undefined>;
export function listAlertsBySensorId(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAlertsBySensorIdData, undefined>;

interface ListAlertReadingsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAlertReadingsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAlertReadingsData, undefined>;
  operationName: string;
}
export const listAlertReadingsRef: ListAlertReadingsRef;

export function listAlertReadings(options?: ExecuteQueryOptions): QueryPromise<ListAlertReadingsData, undefined>;
export function listAlertReadings(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAlertReadingsData, undefined>;

interface ListAlertReadingsByAlertIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAlertReadingsByAlertIdData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAlertReadingsByAlertIdData, undefined>;
  operationName: string;
}
export const listAlertReadingsByAlertIdRef: ListAlertReadingsByAlertIdRef;

export function listAlertReadingsByAlertId(options?: ExecuteQueryOptions): QueryPromise<ListAlertReadingsByAlertIdData, undefined>;
export function listAlertReadingsByAlertId(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAlertReadingsByAlertIdData, undefined>;

interface ListAlertReadingsBySensorIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAlertReadingsBySensorIdData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAlertReadingsBySensorIdData, undefined>;
  operationName: string;
}
export const listAlertReadingsBySensorIdRef: ListAlertReadingsBySensorIdRef;

export function listAlertReadingsBySensorId(options?: ExecuteQueryOptions): QueryPromise<ListAlertReadingsBySensorIdData, undefined>;
export function listAlertReadingsBySensorId(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAlertReadingsBySensorIdData, undefined>;

interface ListReadingHistoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListReadingHistoryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListReadingHistoryData, undefined>;
  operationName: string;
}
export const listReadingHistoryRef: ListReadingHistoryRef;

export function listReadingHistory(options?: ExecuteQueryOptions): QueryPromise<ListReadingHistoryData, undefined>;
export function listReadingHistory(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListReadingHistoryData, undefined>;

interface ListReadingHistoryBySensorIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListReadingHistoryBySensorIdData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListReadingHistoryBySensorIdData, undefined>;
  operationName: string;
}
export const listReadingHistoryBySensorIdRef: ListReadingHistoryBySensorIdRef;

export function listReadingHistoryBySensorId(options?: ExecuteQueryOptions): QueryPromise<ListReadingHistoryBySensorIdData, undefined>;
export function listReadingHistoryBySensorId(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListReadingHistoryBySensorIdData, undefined>;

interface ListReadingHistoryForWindowRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListReadingHistoryForWindowData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListReadingHistoryForWindowData, undefined>;
  operationName: string;
}
export const listReadingHistoryForWindowRef: ListReadingHistoryForWindowRef;

export function listReadingHistoryForWindow(options?: ExecuteQueryOptions): QueryPromise<ListReadingHistoryForWindowData, undefined>;
export function listReadingHistoryForWindow(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListReadingHistoryForWindowData, undefined>;

interface CreateSensorRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSensorVariables): MutationRef<CreateSensorData, CreateSensorVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateSensorVariables): MutationRef<CreateSensorData, CreateSensorVariables>;
  operationName: string;
}
export const createSensorRef: CreateSensorRef;

export function createSensor(vars: CreateSensorVariables): MutationPromise<CreateSensorData, CreateSensorVariables>;
export function createSensor(dc: DataConnect, vars: CreateSensorVariables): MutationPromise<CreateSensorData, CreateSensorVariables>;

interface GetSensorRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSensorVariables): QueryRef<GetSensorData, GetSensorVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetSensorVariables): QueryRef<GetSensorData, GetSensorVariables>;
  operationName: string;
}
export const getSensorRef: GetSensorRef;

export function getSensor(vars: GetSensorVariables, options?: ExecuteQueryOptions): QueryPromise<GetSensorData, GetSensorVariables>;
export function getSensor(dc: DataConnect, vars: GetSensorVariables, options?: ExecuteQueryOptions): QueryPromise<GetSensorData, GetSensorVariables>;

interface ListSensorsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSensorsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListSensorsData, undefined>;
  operationName: string;
}
export const listSensorsRef: ListSensorsRef;

export function listSensors(options?: ExecuteQueryOptions): QueryPromise<ListSensorsData, undefined>;
export function listSensors(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListSensorsData, undefined>;

interface ListActiveSensorsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListActiveSensorsVariables): QueryRef<ListActiveSensorsData, ListActiveSensorsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListActiveSensorsVariables): QueryRef<ListActiveSensorsData, ListActiveSensorsVariables>;
  operationName: string;
}
export const listActiveSensorsRef: ListActiveSensorsRef;

export function listActiveSensors(vars: ListActiveSensorsVariables, options?: ExecuteQueryOptions): QueryPromise<ListActiveSensorsData, ListActiveSensorsVariables>;
export function listActiveSensors(dc: DataConnect, vars: ListActiveSensorsVariables, options?: ExecuteQueryOptions): QueryPromise<ListActiveSensorsData, ListActiveSensorsVariables>;

interface ListSensorsByTypeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListSensorsByTypeVariables): QueryRef<ListSensorsByTypeData, ListSensorsByTypeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListSensorsByTypeVariables): QueryRef<ListSensorsByTypeData, ListSensorsByTypeVariables>;
  operationName: string;
}
export const listSensorsByTypeRef: ListSensorsByTypeRef;

export function listSensorsByType(vars: ListSensorsByTypeVariables, options?: ExecuteQueryOptions): QueryPromise<ListSensorsByTypeData, ListSensorsByTypeVariables>;
export function listSensorsByType(dc: DataConnect, vars: ListSensorsByTypeVariables, options?: ExecuteQueryOptions): QueryPromise<ListSensorsByTypeData, ListSensorsByTypeVariables>;

interface UpdateSensorRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSensorVariables): MutationRef<UpdateSensorData, UpdateSensorVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateSensorVariables): MutationRef<UpdateSensorData, UpdateSensorVariables>;
  operationName: string;
}
export const updateSensorRef: UpdateSensorRef;

export function updateSensor(vars: UpdateSensorVariables): MutationPromise<UpdateSensorData, UpdateSensorVariables>;
export function updateSensor(dc: DataConnect, vars: UpdateSensorVariables): MutationPromise<UpdateSensorData, UpdateSensorVariables>;

interface DeleteSensorRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSensorVariables): MutationRef<DeleteSensorData, DeleteSensorVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteSensorVariables): MutationRef<DeleteSensorData, DeleteSensorVariables>;
  operationName: string;
}
export const deleteSensorRef: DeleteSensorRef;

export function deleteSensor(vars: DeleteSensorVariables): MutationPromise<DeleteSensorData, DeleteSensorVariables>;
export function deleteSensor(dc: DataConnect, vars: DeleteSensorVariables): MutationPromise<DeleteSensorData, DeleteSensorVariables>;

interface ListSensorByHeartRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListSensorByHeartVariables): QueryRef<ListSensorByHeartData, ListSensorByHeartVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListSensorByHeartVariables): QueryRef<ListSensorByHeartData, ListSensorByHeartVariables>;
  operationName: string;
}
export const listSensorByHeartRef: ListSensorByHeartRef;

export function listSensorByHeart(vars: ListSensorByHeartVariables, options?: ExecuteQueryOptions): QueryPromise<ListSensorByHeartData, ListSensorByHeartVariables>;
export function listSensorByHeart(dc: DataConnect, vars: ListSensorByHeartVariables, options?: ExecuteQueryOptions): QueryPromise<ListSensorByHeartData, ListSensorByHeartVariables>;

interface GetSensorLiveRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSensorLiveVariables): QueryRef<GetSensorLiveData, GetSensorLiveVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetSensorLiveVariables): QueryRef<GetSensorLiveData, GetSensorLiveVariables>;
  operationName: string;
}
export const getSensorLiveRef: GetSensorLiveRef;

export function getSensorLive(vars: GetSensorLiveVariables, options?: ExecuteQueryOptions): QueryPromise<GetSensorLiveData, GetSensorLiveVariables>;
export function getSensorLive(dc: DataConnect, vars: GetSensorLiveVariables, options?: ExecuteQueryOptions): QueryPromise<GetSensorLiveData, GetSensorLiveVariables>;

interface ListSensorLiveRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSensorLiveData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListSensorLiveData, undefined>;
  operationName: string;
}
export const listSensorLiveRef: ListSensorLiveRef;

export function listSensorLive(options?: ExecuteQueryOptions): QueryPromise<ListSensorLiveData, undefined>;
export function listSensorLive(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListSensorLiveData, undefined>;

interface ListSensorLiveBySensorIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListSensorLiveBySensorIdVariables): QueryRef<ListSensorLiveBySensorIdData, ListSensorLiveBySensorIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListSensorLiveBySensorIdVariables): QueryRef<ListSensorLiveBySensorIdData, ListSensorLiveBySensorIdVariables>;
  operationName: string;
}
export const listSensorLiveBySensorIdRef: ListSensorLiveBySensorIdRef;

export function listSensorLiveBySensorId(vars: ListSensorLiveBySensorIdVariables, options?: ExecuteQueryOptions): QueryPromise<ListSensorLiveBySensorIdData, ListSensorLiveBySensorIdVariables>;
export function listSensorLiveBySensorId(dc: DataConnect, vars: ListSensorLiveBySensorIdVariables, options?: ExecuteQueryOptions): QueryPromise<ListSensorLiveBySensorIdData, ListSensorLiveBySensorIdVariables>;

interface UpdateSensorLiveRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSensorLiveVariables): MutationRef<UpdateSensorLiveData, UpdateSensorLiveVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateSensorLiveVariables): MutationRef<UpdateSensorLiveData, UpdateSensorLiveVariables>;
  operationName: string;
}
export const updateSensorLiveRef: UpdateSensorLiveRef;

export function updateSensorLive(vars: UpdateSensorLiveVariables): MutationPromise<UpdateSensorLiveData, UpdateSensorLiveVariables>;
export function updateSensorLive(dc: DataConnect, vars: UpdateSensorLiveVariables): MutationPromise<UpdateSensorLiveData, UpdateSensorLiveVariables>;

interface DeleteSensorLiveRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSensorLiveVariables): MutationRef<DeleteSensorLiveData, DeleteSensorLiveVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteSensorLiveVariables): MutationRef<DeleteSensorLiveData, DeleteSensorLiveVariables>;
  operationName: string;
}
export const deleteSensorLiveRef: DeleteSensorLiveRef;

export function deleteSensorLive(vars: DeleteSensorLiveVariables): MutationPromise<DeleteSensorLiveData, DeleteSensorLiveVariables>;
export function deleteSensorLive(dc: DataConnect, vars: DeleteSensorLiveVariables): MutationPromise<DeleteSensorLiveData, DeleteSensorLiveVariables>;

interface CreateClinicianRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClinicianVariables): MutationRef<CreateClinicianData, CreateClinicianVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateClinicianVariables): MutationRef<CreateClinicianData, CreateClinicianVariables>;
  operationName: string;
}
export const createClinicianRef: CreateClinicianRef;

export function createClinician(vars: CreateClinicianVariables): MutationPromise<CreateClinicianData, CreateClinicianVariables>;
export function createClinician(dc: DataConnect, vars: CreateClinicianVariables): MutationPromise<CreateClinicianData, CreateClinicianVariables>;

interface GetClinicianRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClinicianVariables): QueryRef<GetClinicianData, GetClinicianVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetClinicianVariables): QueryRef<GetClinicianData, GetClinicianVariables>;
  operationName: string;
}
export const getClinicianRef: GetClinicianRef;

export function getClinician(vars: GetClinicianVariables, options?: ExecuteQueryOptions): QueryPromise<GetClinicianData, GetClinicianVariables>;
export function getClinician(dc: DataConnect, vars: GetClinicianVariables, options?: ExecuteQueryOptions): QueryPromise<GetClinicianData, GetClinicianVariables>;

interface ListCliniciansRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCliniciansData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCliniciansData, undefined>;
  operationName: string;
}
export const listCliniciansRef: ListCliniciansRef;

export function listClinicians(options?: ExecuteQueryOptions): QueryPromise<ListCliniciansData, undefined>;
export function listClinicians(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCliniciansData, undefined>;

interface UpdateClinicianRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateClinicianVariables): MutationRef<UpdateClinicianData, UpdateClinicianVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateClinicianVariables): MutationRef<UpdateClinicianData, UpdateClinicianVariables>;
  operationName: string;
}
export const updateClinicianRef: UpdateClinicianRef;

export function updateClinician(vars: UpdateClinicianVariables): MutationPromise<UpdateClinicianData, UpdateClinicianVariables>;
export function updateClinician(dc: DataConnect, vars: UpdateClinicianVariables): MutationPromise<UpdateClinicianData, UpdateClinicianVariables>;

interface DeactivateClinicianRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeactivateClinicianVariables): MutationRef<DeactivateClinicianData, DeactivateClinicianVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeactivateClinicianVariables): MutationRef<DeactivateClinicianData, DeactivateClinicianVariables>;
  operationName: string;
}
export const deactivateClinicianRef: DeactivateClinicianRef;

export function deactivateClinician(vars: DeactivateClinicianVariables): MutationPromise<DeactivateClinicianData, DeactivateClinicianVariables>;
export function deactivateClinician(dc: DataConnect, vars: DeactivateClinicianVariables): MutationPromise<DeactivateClinicianData, DeactivateClinicianVariables>;

interface CreatePatientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePatientVariables): MutationRef<CreatePatientData, CreatePatientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreatePatientVariables): MutationRef<CreatePatientData, CreatePatientVariables>;
  operationName: string;
}
export const createPatientRef: CreatePatientRef;

export function createPatient(vars: CreatePatientVariables): MutationPromise<CreatePatientData, CreatePatientVariables>;
export function createPatient(dc: DataConnect, vars: CreatePatientVariables): MutationPromise<CreatePatientData, CreatePatientVariables>;

interface GetPatientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPatientVariables): QueryRef<GetPatientData, GetPatientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetPatientVariables): QueryRef<GetPatientData, GetPatientVariables>;
  operationName: string;
}
export const getPatientRef: GetPatientRef;

export function getPatient(vars: GetPatientVariables, options?: ExecuteQueryOptions): QueryPromise<GetPatientData, GetPatientVariables>;
export function getPatient(dc: DataConnect, vars: GetPatientVariables, options?: ExecuteQueryOptions): QueryPromise<GetPatientData, GetPatientVariables>;

interface ListPatientsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPatientsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPatientsData, undefined>;
  operationName: string;
}
export const listPatientsRef: ListPatientsRef;

export function listPatients(options?: ExecuteQueryOptions): QueryPromise<ListPatientsData, undefined>;
export function listPatients(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListPatientsData, undefined>;

interface UpdatePatientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePatientVariables): MutationRef<UpdatePatientData, UpdatePatientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdatePatientVariables): MutationRef<UpdatePatientData, UpdatePatientVariables>;
  operationName: string;
}
export const updatePatientRef: UpdatePatientRef;

export function updatePatient(vars: UpdatePatientVariables): MutationPromise<UpdatePatientData, UpdatePatientVariables>;
export function updatePatient(dc: DataConnect, vars: UpdatePatientVariables): MutationPromise<UpdatePatientData, UpdatePatientVariables>;

interface UpdatePatientStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePatientStatusVariables): MutationRef<UpdatePatientStatusData, UpdatePatientStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdatePatientStatusVariables): MutationRef<UpdatePatientStatusData, UpdatePatientStatusVariables>;
  operationName: string;
}
export const updatePatientStatusRef: UpdatePatientStatusRef;

export function updatePatientStatus(vars: UpdatePatientStatusVariables): MutationPromise<UpdatePatientStatusData, UpdatePatientStatusVariables>;
export function updatePatientStatus(dc: DataConnect, vars: UpdatePatientStatusVariables): MutationPromise<UpdatePatientStatusData, UpdatePatientStatusVariables>;

interface DeletePatientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePatientVariables): MutationRef<DeletePatientData, DeletePatientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeletePatientVariables): MutationRef<DeletePatientData, DeletePatientVariables>;
  operationName: string;
}
export const deletePatientRef: DeletePatientRef;

export function deletePatient(vars: DeletePatientVariables): MutationPromise<DeletePatientData, DeletePatientVariables>;
export function deletePatient(dc: DataConnect, vars: DeletePatientVariables): MutationPromise<DeletePatientData, DeletePatientVariables>;

interface PatientCountByStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<PatientCountByStatusData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<PatientCountByStatusData, undefined>;
  operationName: string;
}
export const patientCountByStatusRef: PatientCountByStatusRef;

export function patientCountByStatus(options?: ExecuteQueryOptions): QueryPromise<PatientCountByStatusData, undefined>;
export function patientCountByStatus(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<PatientCountByStatusData, undefined>;

interface ListPatientsByStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListPatientsByStatusVariables): QueryRef<ListPatientsByStatusData, ListPatientsByStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListPatientsByStatusVariables): QueryRef<ListPatientsByStatusData, ListPatientsByStatusVariables>;
  operationName: string;
}
export const listPatientsByStatusRef: ListPatientsByStatusRef;

export function listPatientsByStatus(vars: ListPatientsByStatusVariables, options?: ExecuteQueryOptions): QueryPromise<ListPatientsByStatusData, ListPatientsByStatusVariables>;
export function listPatientsByStatus(dc: DataConnect, vars: ListPatientsByStatusVariables, options?: ExecuteQueryOptions): QueryPromise<ListPatientsByStatusData, ListPatientsByStatusVariables>;

interface ListPatientsByStatusesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListPatientsByStatusesVariables): QueryRef<ListPatientsByStatusesData, ListPatientsByStatusesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListPatientsByStatusesVariables): QueryRef<ListPatientsByStatusesData, ListPatientsByStatusesVariables>;
  operationName: string;
}
export const listPatientsByStatusesRef: ListPatientsByStatusesRef;

export function listPatientsByStatuses(vars: ListPatientsByStatusesVariables, options?: ExecuteQueryOptions): QueryPromise<ListPatientsByStatusesData, ListPatientsByStatusesVariables>;
export function listPatientsByStatuses(dc: DataConnect, vars: ListPatientsByStatusesVariables, options?: ExecuteQueryOptions): QueryPromise<ListPatientsByStatusesData, ListPatientsByStatusesVariables>;

