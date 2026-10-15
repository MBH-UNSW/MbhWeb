// Response types for the staff portal Data Connect operations.
export type TimestampString = string;

export type UUIDString = string;

export type DateString = string;

export interface File_Key {
  id: UUIDString;
  __typename?: 'File_Key';
}

export interface GetMyStaffProfileData {
  clinicians: {
    pid: UUIDString;
    firebaseAuthUid?: string | null;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    specialty: string;
    isDeactivated: boolean;
  }[];
}

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
      logbookEntryFiles_on_logbookEntry: {
        file: {
          id: UUIDString;
          fileName: string;
          storagePath: string;
        } & File_Key;
      }[];
    } & LogbookEntry_Key)[];
    hearts_on_patient: {
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
    }[];
  } & Patient_Key;
}

export interface ListStaffPatientsData {
  staffPatients: {
    appointments_on_clinician: {
      patient: {
        pid: UUIDString;
        firstName: string;
        lastName: string;
        status: string;
      } & Patient_Key;
    }[];
  }[];
}

export interface LogbookEntry_Key {
  id: UUIDString;
  __typename?: 'LogbookEntry_Key';
}

export interface Patient_Key {
  pid: UUIDString;
  __typename?: 'Patient_Key';
}

export interface Sensor_Key {
  sensorId: UUIDString;
  __typename?: 'Sensor_Key';
}
