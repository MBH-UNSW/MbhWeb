import '../Page.css';
import './Appointments.css'
import { Header2, Header5, Header4, Header6  } from '../../components/typography/Header';
import { Body1, Body2 } from '../../components/typography/Body';
import { Button } from '../../components/buttons/Button';
import { IconButton } from '../../components/buttons/IconButton';
import { Calendar } from '../../components/calendar/Calendar';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowLeft, ArrowRight, Info, Pencil, Plus } from 'lucide-react';

import { Modal, Select, TextInput, Textarea } from '@mantine/core';

// just going to mock data with same output type as our database
import { type PatientSummary } from '../../api/patientApi';

// Appointment tab specific interfaces/structs
type AppointmentStatus = 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';

interface Appointment {
  id: number;
  patientName: string;
  patientPid: string | null;
  reason: string;
  date: string;
  time: string;
  notes: string;
  status: AppointmentStatus;
}

const BOOKING_REASON = ['Introductory', 'Monthly Check up', 'Follow Up', 'Emergency', 'Other'];
const BOOKING_STATUS: AppointmentStatus[] = ['Scheduled', 'In Progress', 'Completed', 'Cancelled'];

// Mock Patients. Future ref: remove these and call database functions later.
const MOCK_PATIENTS: PatientSummary[] = [
  { pid: 'M100001', displayId: 'M100001', name: 'John Doe', status: 'Stable' },
  { pid: 'M100002', displayId: 'M100002', name: 'Jane Doe', status: 'Warning' },
  { pid: 'M100003', displayId: 'M100003', name: 'Mac Donald', status: 'Unstable' },
  { pid: 'M100004', displayId: 'M100004', name: 'Tre Top', status: 'Stable' },
  { pid: 'M100005', displayId: 'M100005', name: 'Hungre Jack', status: 'Warning' },
];


// Appointment Page Helpers
function getDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

function formatFullDate(dateKey: string): string {
  const date = new Date(`${dateKey}T00:00:00`);

  return date.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

function formatWeekdayShort(dateKey: string): string {
  const date = new Date(`${dateKey}T00:00:00`);

  return date.toLocaleDateString('en-AU', { weekday: 'short' });
}

function formatDayNumber(dateKey: string): number {
  return Number(dateKey.slice(8, 10));
}

function addDays(dateKey: string, amount: number): string {
  const date = new Date(`${dateKey}T00:00:00`);
  date.setDate(date.getDate() + amount);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');

  return `${y}-${m}-${d}`;
}

function buildWeekStrip(anchorDateKey: string): string[] {
  const days: string[] = [];
  for (let i = 0; i < 7; i++) {
    days.push(addDays(anchorDateKey, i));
  }
  return days;
}

function hasAppointmentsOnDate(appointments: Appointment[], dateKey: string): boolean {
  return appointments.some(appointment => appointment.date === dateKey);
}

function getDayChipClass(dateKey: string, selectedDate: string): string {
  if (dateKey === selectedDate) {
    return 'day-chip selected';
  } else {
    return 'day-chip';
  }
}

function getTimelineCardClass(appointment: Appointment): string {
  if (appointment.patientPid) {
    return 'timeline-card patient';
  } else {
    return 'timeline-card event';
  }
}

function getStatusPillClass(status: AppointmentStatus): string {
  if (status === 'Completed') {
    return 'status-pill good';
  } else if (status === 'In Progress') {
    return 'status-pill warning';
  } else if (status === 'Cancelled') {
    return 'status-pill critical';
  } else {
    return 'status-pill neutral';
  }
}

function parseTimeToMinutes(time: string): number {
  const match = time.match(/^(\d{1,2}):(\d{2})\s*(am|pm)$/i);
  if (!match) {
    return 0;
  }

  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const period = match[3].toLowerCase();

  if (period === 'pm' && hours !== 12) {
    hours += 12;
  } else if (period === 'am' && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
}

function getSortKey(appointment: Appointment): string {
  const minutes = parseTimeToMinutes(appointment.time);

  return `${appointment.date}-${String(minutes).padStart(4, '0')}`;
}

function sortAppointments(appointments: Appointment[]): Appointment[] {
  return [...appointments].sort((a, b) => getSortKey(a).localeCompare(getSortKey(b)));
}

function findNextAppointment(appointments: Appointment[], fromDateKey: string): Appointment | null {
  const sorted = sortAppointments(appointments);
  const todayKey = `${fromDateKey}-0000`;
  const upcoming = sorted.find(appointment => getSortKey(appointment) >= todayKey);

  if (upcoming) {
    return upcoming;
  } else if (sorted.length > 0) {
    return sorted[0];
  } else {
    return null;
  }
}

function buildMockAppointments(patients: PatientSummary[]): Appointment[] {
  const getPid = (index: number): string | null => patients[index]?.pid ?? null;
  const getName = (index: number): string => patients[index]?.name ?? 'Demo Patient';

  const today = getDate();

  return [
    { id: 1, patientName: getName(0), patientPid: getPid(0), reason: 'Introductory', date: today, time: '08:00 am', notes: '', status: 'Scheduled' },
    { id: 2, patientName: getName(1), patientPid: getPid(1), reason: 'Monthly Check Up', date: today, time: '09:45 am', notes: '', status: 'Scheduled' },
    { id: 3, patientName: 'Online Board Meeting', patientPid: null, reason: 'Internal', date: today, time: '10:50 am', notes: '', status: 'Scheduled' },
    { id: 4, patientName: getName(2), patientPid: getPid(2), reason: 'Monthly Check Up', date: today, time: '02:40 pm', notes: '', status: 'Scheduled' },
    { id: 5, patientName: getName(3), patientPid: getPid(3), reason: 'Introductory', date: today, time: '04:00 pm', notes: 'OMG new tah needed', status: 'In Progress' },
    { id: 6, patientName: getName(0), patientPid: getPid(0), reason: 'Introductory', date: addDays(today, 35), time: '09:00 am', notes: 'OMG NEW TAH NEEDED', status: 'In Progress' },
    { id: 7, patientName: getName(4), patientPid: getPid(4), reason: 'Follow Up', date: addDays(today, 1), time: '11:00 am', notes: '', status: 'Scheduled' },
    { id: 8, patientName: getName(1), patientPid: getPid(1), reason: 'Monthly Check Up', date: addDays(today, 2), time: '01:30 pm', notes: '', status: 'Scheduled' },
  ];
}

export default function AppointmentsPage() {
  const navigate = useNavigate();
  const patients = MOCK_PATIENTS;
 
  const [appointments, setAppointments] = useState<Appointment[]>([]);
 
  useEffect(() => {
    if (patients.length > 0 && appointments.length === 0) {
      setAppointments(buildMockAppointments(patients));
    }
  }, [patients, appointments.length]);
 
  const [selectedDate, setSelectedDate] = useState(getDate());
 
  const weekStrip = buildWeekStrip(getDate());
  const scheduleForSelectedDate = sortAppointments(
    appointments.filter(appointment => appointment.date === selectedDate),
  );
 
  const [detailsAppointmentId, setDetailsAppointmentId] = useState<number | null>(null);
  const sortedAppointments = sortAppointments(appointments);
  const currentDetailsAppointment = sortedAppointments.find(
    appointment => appointment.id === detailsAppointmentId,
  );
 
  const updateAppointment = (id: number, changes: Partial<Appointment>) => {
    setAppointments(appointments.map(appointment => {
      if (appointment.id === id) {
        return { ...appointment, ...changes };
      } else {
        return appointment;
      }
    }));
  };
 
  const showAdjacentAppointment = (direction: 1 | -1) => {
    if (!currentDetailsAppointment) {
      return;
    }
 
    const currentIndex = sortedAppointments.findIndex(
      appointment => appointment.id === currentDetailsAppointment.id,
    );
    const nextIndex = (currentIndex + direction + sortedAppointments.length) % sortedAppointments.length;
    setDetailsAppointmentId(sortedAppointments[nextIndex].id);
  };
 
  // PLACEHOLDER UNTIL THERE'S A REAL REPORTING BACKEND.
  const generateSummaryReport = (appointment: Appointment) => {
    console.log('generate summary report', appointment.patientName, appointment.id);
  };
 
  const [isNewAppointmentOpen, setIsNewAppointmentOpen] = useState(false);
  const [newDate, setNewDate] = useState('');
  const [newReason, setNewReason] = useState<string | null>('Introductory');
  const [newPatientPid, setNewPatientPid] = useState<string | null>(null);
 
  const patientOptions = patients.map(patient => ({ value: patient.pid, label: patient.name }));
 
  const closeNewAppointmentModal = () => {
    setIsNewAppointmentOpen(false);
    setNewDate('');
    setNewReason('Introductory');
    setNewPatientPid(null);
  };
 
  const createAppointment = () => {
    if (!newDate || !newReason || !newPatientPid) {
      return;
    }
 
    const patient = patients.find(p => p.pid === newPatientPid);
    if (!patient) {
      return;
    }
 
    const nextId = appointments.length > 0 ? Math.max(...appointments.map(a => a.id)) + 1 : 1;
 
    setAppointments([
      ...appointments,
      {
        id: nextId,
        patientName: patient.name,
        patientPid: patient.pid,
        reason: newReason,
        date: newDate,
        time: '09:00 am',
        notes: '',
        status: 'Scheduled',
      },
    ]);
 
    closeNewAppointmentModal();
  };
 
  return (
    <div className="page appointments-page">
      <div className="appointments-header">
        <Header2>Appointments</Header2>
      </div>
 
      <div className="appointments-layout">
        <div className="appointments-main">
          <div className="card today-summary-card">
            <Header5>Today&apos;s Appointments</Header5>
            <div className="today-summary-actions">
              <Button
                variant="outlined"
                size="sm"
                onClick={() => {
                  const next = findNextAppointment(appointments, getDate());
                  if (next) {
                    setDetailsAppointmentId(next.id);
                  }
                }}
              >
                View Next Appointment Details
              </Button>
              <Button
                variant="default"
                size="sm"
                leftIcon={Plus}
                onClick={() => setIsNewAppointmentOpen(true)}
              >
                New Appointment
              </Button>
            </div>
          </div>
 
          <div className="card calendar-card">
            <Calendar value={selectedDate} onChange={setSelectedDate} size="lg" />
          </div>
        </div>
 
        <div className="card schedule-panel">
          <Body2>Today&apos;s Schedule</Body2>
          <Header4>{formatFullDate(selectedDate)}</Header4>
 
          <div className="day-picker">
            {weekStrip.map(dateKey => (
              <button
                key={dateKey}
                type="button"
                className={getDayChipClass(dateKey, selectedDate)}
                onClick={() => setSelectedDate(dateKey)}
              >
                <Body2 bold>{formatWeekdayShort(dateKey)}</Body2>
                <Body1 bold>{formatDayNumber(dateKey)}</Body1>
                {hasAppointmentsOnDate(appointments, dateKey) && <span className="day-chip-dot" />}
              </button>
            ))}
          </div>
 
          <div className="timeline">
            {scheduleForSelectedDate.length === 0 && (
              <Body2>No appointments scheduled for this day.</Body2>
            )}
 
            {scheduleForSelectedDate.map(appointment => (
              <div className="timeline-row" key={appointment.id}>
                <div className="timeline-time">
                  <Body2>{appointment.time}</Body2>
                </div>
 
                <div className={getTimelineCardClass(appointment)}>
                  <div className="timeline-card-info">
                    <Body1 bold>
                      {appointment.patientName}
                      {appointment.patientPid && ` | Appointment`}
                    </Body1>
                    {appointment.patientPid && <Body2>{appointment.reason}</Body2>}
                  </div>
 
                  <div className="timeline-actions">
                    {appointment.patientPid && (
                      <IconButton
                        icon={Info}
                        variant="text"
                        size="sm"
                        onClick={() => setDetailsAppointmentId(appointment.id)}
                      />
                    )}
                    <IconButton
                      icon={Pencil}
                      variant="text"
                      size="sm"
                      onClick={() => setDetailsAppointmentId(appointment.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      <Modal
        opened={currentDetailsAppointment !== undefined}
        onClose={() => setDetailsAppointmentId(null)}
        size="lg"
        padding="xl"
        title={<Header4 bold>Appointment Details</Header4>}
      >
        {currentDetailsAppointment && (
          <div className="details-modal-body">
            <div className="details-modal-row">
              <Body1>
                <strong>Patient:</strong> {currentDetailsAppointment.patientName}
              </Body1>
              {currentDetailsAppointment.patientPid && (
                <Button
                  variant="outlined"
                  size="sm"
                  onClick={() => navigate(`/patients/${currentDetailsAppointment.patientPid}`)}
                >
                  View Vitals
                </Button>
              )}
            </div>
 
            <Body1>
              <strong>Reason:</strong> {currentDetailsAppointment.reason}
            </Body1>
 
            <div className="details-modal-row">
              <Body1>
                <strong>Time:</strong> {currentDetailsAppointment.time}
              </Body1>
              <Body1>
                <strong>Date:</strong> {formatFullDate(currentDetailsAppointment.date)}
              </Body1>
            </div>
 
            <div className="info-divider" />
 
            <Header6>Appointment Notes</Header6>
            <Textarea
              value={currentDetailsAppointment.notes}
              onChange={e => updateAppointment(currentDetailsAppointment.id, { notes: e.target.value })}
              minRows={3}
            />
 
            <Button variant="default" onClick={() => generateSummaryReport(currentDetailsAppointment)}>
              Generate Summary Report
            </Button>
 
            <Header6>Appointment Status</Header6>
            <Select
              data={BOOKING_STATUS}
              value={currentDetailsAppointment.status}
              onChange={value => {
                if (value) {
                  updateAppointment(currentDetailsAppointment.id, { status: value as AppointmentStatus });
                }
              }}
            />
 
            <div className="info-divider" />
            <span className={getStatusPillClass(currentDetailsAppointment.status)}>
              {currentDetailsAppointment.status}
            </span>
 
            <div className="details-modal-nav">
              <IconButton
                icon={ArrowLeft}
                variant="text"
                size="lg"
                onClick={() => showAdjacentAppointment(-1)}
              />
              <IconButton
                icon={ArrowRight}
                variant="text"
                size="lg"
                onClick={() => showAdjacentAppointment(1)}
              />
            </div>
          </div>
        )}
      </Modal>
 
      <Modal
        opened={isNewAppointmentOpen}
        onClose={closeNewAppointmentModal}
        size="md"
        padding="xl"
        title={<Header4 bold>Make New Appointment</Header4>}
      >
        <div className="new-appointment-form">
          <TextInput
            label="Date"
            type="date"
            value={newDate}
            onChange={e => setNewDate(e.target.value)}
          />
 
          <Select
            label="Appointment Reason"
            data={BOOKING_REASON}
            value={newReason}
            onChange={setNewReason}
          />
 
          <Select
            label="Patient"
            data={patientOptions}
            value={newPatientPid}
            onChange={setNewPatientPid}
            searchable
          />
 
          <Button variant="default" onClick={createAppointment}>
            Create Appointment
          </Button>
        </div>
      </Modal>
    </div>
  );
}