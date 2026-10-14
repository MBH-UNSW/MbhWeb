import '../Page.css';
import './PatientDetail.css';
import { Header2, Header3, Header4 } from '../../components/typography/Header';
import { Body1, Body2 } from '../../components/typography/Body';
import { Button } from '../../components/buttons/Button';
import { IconButton } from '../../components/buttons/IconButton';
import { SearchBar } from '../../components/searchBar/SearchBar';

import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ArrowLeft, Info, Maximize2, Filter, Download, ArrowUpDown, FileText } from 'lucide-react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import { Modal, Tooltip } from '@mantine/core';

import { usePatient } from '../../hooks/usePatient';

type DetailTab = 'sensor' | 'logbook' | 'documents' | 'general';
type ButtonVariant = 'default' | 'outlined' | 'text';
type SortColumn = 'date' | 'weight' | 'systolic' | 'diastolic' | 'map' | 'inr';
type SortDirection = 'asc' | 'desc';
type ExpandedChart = 'flow' | 'pressure' | null;
type VitalsFilter = 'all' | 'warning' | 'stable';

interface SensorPlot {
  x: number;
  y: number;
}

interface PressurePlot {
  x: number;
  left: number;
  right: number;
}

interface ChartPlot {
  x: number;
  y?: number;
  left?: number;
  right?: number;
}

interface GeneralInfo {
  name: string;
  patientId: string;
  gender: string;
  age: number;
  dob: string;
}

interface MedicalInfo {
  bloodType: string;
  height: string;
  allergies: string;
}

interface MedicareInfo {
  cardNumber: string;
  irn: string;
  expiryDate: string;
}

interface DocumentEntry {
  id: number;
  name: string;
  size: string;
  dateUploaded: string;
}

interface VitalsEntry {
  id: number;
  date: string;
  weight: number; // kg
  systolic: number; // mmHg
  diastolic: number; // mmHg
  inr: number;
}

interface VitalsFlags {
  map: number;
  weightConcerning: boolean;
  systolicConcerning: boolean;
  diastolicConcerning: boolean;
  mapConcerning: boolean;
  inrConcerning: boolean;
}

const tabs: { value: DetailTab; label: string }[] = [
  { value: 'sensor', label: 'Live Sensor Data' },
  { value: 'logbook', label: 'Logbook Data' },
  { value: 'documents', label: 'Documents' },
  { value: 'general', label: 'General Information' },
];

function getTabVariant(tabValue: DetailTab, activeTab: DetailTab): ButtonVariant {
  if (activeTab === tabValue) {
    return 'default';
  } else {
    return 'outlined';
  }
}

function getMeanArterialPressure(systolic: number, diastolic: number): number {
  // MAP = diastolic + 1/3 * (systolic - diastolic)
  return diastolic + (systolic - diastolic) / 3;
}

function calculateAge(dob: string): number {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age -= 1;
  }

  return age;
}

function formatDob(dob: string): string {
  const date = new Date(dob);
  return date.toLocaleDateString('en-AU', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function isWeightConcerning(current: number, previous: number | undefined): boolean {
  if (previous === undefined) {
    return false;
  }
  return Math.abs(current - previous) > 2;
}

function isSystolicConcerning(systolic: number): boolean {
  return systolic >= 180 || systolic < 90;
}

function isDiastolicConcerning(diastolic: number): boolean {
  return diastolic >= 120 || diastolic < 60;
}

function isMapConcerning(map: number): boolean {
  return map < 65 || map > 100;
}

function isInrConcerning(inr: number): boolean {
  return inr < 2.0 || inr > 4.0;
}

function getVitalClass(isConcerning: boolean): string {
  if (isConcerning) {
    return 'critical';
  } else {
    return 'good';
  }
}

// Weight change is judged against chronological order (oldest first), not
// however the table happens to be sorted right now.
function getWeightFlags(entries: VitalsEntry[]): Record<number, boolean> {
  const flags: Record<number, boolean> = {};

  for (let i = 0; i < entries.length; i++) {
    if (i === 0) {
      flags[entries[i].id] = false;
    } else {
      flags[entries[i].id] = isWeightConcerning(entries[i].weight, entries[i - 1].weight);
    }
  }

  return flags;
}

function getVitalsFlags(entry: VitalsEntry, weightFlags: Record<number, boolean>): VitalsFlags {
  const map = getMeanArterialPressure(entry.systolic, entry.diastolic);

  return {
    map,
    weightConcerning: weightFlags[entry.id],
    systolicConcerning: isSystolicConcerning(entry.systolic),
    diastolicConcerning: isDiastolicConcerning(entry.diastolic),
    mapConcerning: isMapConcerning(map),
    inrConcerning: isInrConcerning(entry.inr),
  };
}

// A row counts as a "warning" row if any single vital on it is flagged.
function isEntryConcerning(flags: VitalsFlags): boolean {
  if (
    flags.weightConcerning ||
    flags.systolicConcerning ||
    flags.diastolicConcerning ||
    flags.mapConcerning ||
    flags.inrConcerning
  ) {
    return true;
  } else {
    return false;
  }
}

function matchesVitalsFilter(isConcerning: boolean, filter: VitalsFilter): boolean {
  if (filter === 'warning') {
    return isConcerning;
  } else if (filter === 'stable') {
    return !isConcerning;
  } else {
    return true;
  }
}

function getNextVitalsFilter(current: VitalsFilter): VitalsFilter {
  if (current === 'all') {
    return 'warning';
  } else if (current === 'warning') {
    return 'stable';
  } else {
    return 'all';
  }
}

function getFilterLabel(filter: VitalsFilter): string {
  if (filter === 'warning') {
    return 'Critical';
  } else if (filter === 'stable') {
    return 'Stable';
  } else {
    return 'Filter';
  }
}

function getFilterButtonVariant(filter: VitalsFilter): ButtonVariant {
  if (filter === 'all') {
    return 'outlined';
  } else {
    return 'default';
  }
}

// TODO: Slightly buggy scroll thing for the documents tab. (kinda untested tho)
function getScrollIndicatorClass(canScrollMore: boolean): string {
  if (canScrollMore) {
    return 'scrollable';
  } else {
    return 'scroll-inactive';
  }
}

function getChartTitle(chart: ExpandedChart): string {
  if (chart === 'pressure') {
    return 'L & R Pressure';
  } else {
    return 'Flow Rate';
  }
}

// info icon --> draft idea, just gives nurses/clinicians a brief summary of what to identify at a glace.
function getChartInfo(chart: 'flow' | 'pressure'): string {
  if (chart === 'pressure') {
    return 'L/R pressures should remain in sync. Broading gap in L/R can signify desync or irregular pumping.';
  } else {
    return 'Blood volume moved per minute. Watch for sudden drops or spikes.';
  }
}

function getChartData(
  chart: ExpandedChart,
  flowRateData: SensorPlot[],
  lrPressureData: PressurePlot[],
): ChartPlot[] {
  if (chart === 'pressure') {
    return lrPressureData;
  } else {
    return flowRateData;
  }
}

function getChartLines(chart: ExpandedChart) {
  if (chart === 'pressure') {
    return (
      <>
        <Line
          type="monotone"
          dataKey="left"
          name="Left"
          stroke="var(--mantine-color-ubhBlue-6)"
          strokeWidth={2}
          dot={{ r: 6, fill: 'var(--mantine-color-ubhBlue-6' }}
        />
        <Line
          type="monotone"
          dataKey="right"
          name="Right"
          stroke="var(--mantine-color-ubhRed-6)"
          strokeWidth={2}
          dot={{ r: 6, fill: 'var(--mantine-color-ubhRed-6)' }}
        />
      </>
    );
  } else {
    return (
      <Line
        type="monotone"
        dataKey="y"
        name="Flow Rate"
        stroke="var(--mantine-color-ubhBlue-6)"
        strokeWidth={2}
        dot={{ r: 6, fill: 'var(--mantine-color-ubhBlue-6)' }}
      />
    );
  }
}

function compareEntries(a: VitalsEntry, b: VitalsEntry, column: SortColumn) {
  if (column === 'date') {
    return a.date.localeCompare(b.date);
  } else if (column === 'weight') {
    return a.weight - b.weight;
  } else if (column === 'systolic') {
    return a.systolic - b.systolic;
  } else if (column === 'diastolic') {
    return a.diastolic - b.diastolic;
  } else if (column === 'map') {
    return (
      getMeanArterialPressure(a.systolic, a.diastolic) -
      getMeanArterialPressure(b.systolic, b.diastolic)
    );
  } else {
    return a.inr - b.inr;
  }
}

function buildLogbookCsv(entries: VitalsEntry[]): string {
  const header = 'Date,Weight (kg),Systolic (mmHg),Diastolic (mmHg),MAP (mmHg),INR';

  const rows = entries.map(entry => {
    const map = getMeanArterialPressure(entry.systolic, entry.diastolic);

    return [
      `"${entry.date}"`,
      entry.weight.toFixed(1),
      entry.systolic,
      entry.diastolic,
      map.toFixed(1),
      entry.inr.toFixed(1),
    ].join(',');
  });

  return [header, ...rows].join('\n');
}

function downloadLogbookCsv(entries: VitalsEntry[]) {
  const csv = buildLogbookCsv(entries);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'logbook-data.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

// PLACEHOLDER UNTIL I GET THE BACKEND FIREBASE CONNECTED FOR DOCUMENTS.
function downloadDocument(doc: DocumentEntry) {
  console.log('download document', doc.name);
}

export default function PatientDetailPage() {
  const navigate = useNavigate();
  const { patientId } = useParams<{ patientId: string }>();

  const [activeTab, setActiveTab] = useState<DetailTab>('sensor');
  const [expandedChart, setExpandedChart] = useState<ExpandedChart>(null);

  // mock bs data points
  const flowRateData: SensorPlot[] = [
    { x: 0.5, y: 58 },
    { x: 1.0, y: 142 },
    { x: 1.5, y: 208 },
    { x: 2.0, y: 176 },
    { x: 2.5, y: 96 },
    { x: 3.0, y: 52 },
  ];

  const lrPressureData: PressurePlot[] = [
    { x: 0.5, left: 42, right: 30 },
    { x: 1.0, left: 118, right: 82 },
    { x: 1.5, left: 176, right: 118 },
    { x: 2.0, left: 150, right: 92 },
    { x: 2.5, left: 82, right: 56 },
    { x: 3.0, left: 46, right: 34 },
  ];

  const vitalsLog: VitalsEntry[] = [
    { id: 1, date: '06/03/23 at 8:25 AM', weight: 71.5, systolic: 122, diastolic: 78, inr: 2.6 },
    { id: 2, date: '13/03/23 at 8:10 AM', weight: 71.8, systolic: 118, diastolic: 74, inr: 2.9 },
    { id: 3, date: '20/03/23 at 8:30 AM', weight: 74.4, systolic: 116, diastolic: 76, inr: 2.7 },
    { id: 4, date: '27/03/23 at 8:15 AM', weight: 74.6, systolic: 188, diastolic: 122, inr: 3.1 },
    { id: 5, date: '03/04/23 at 8:20 AM', weight: 73.9, systolic: 108, diastolic: 70, inr: 4.6 },
    { id: 6, date: '10/04/23 at 8:25 AM', weight: 73.2, systolic: 84, diastolic: 54, inr: 1.6 },
    { id: 7, date: '17/04/23 at 8:25 PM', weight: 72.6, systolic: 118, diastolic: 76, inr: 2.8 },
  ];

  const weightFlags = getWeightFlags(vitalsLog);

  // some mock bs.. (backend tba)
  const documents: DocumentEntry[] = [
    { id: 1, name: 'Discharge Summary.pdf', size: '248 KB', dateUploaded: '20/08/26' },
    { id: 2, name: 'Echocardiogram Report.pdf', size: '1.1 MB', dateUploaded: '17/08/26' },
    { id: 3, name: 'Device Implant Consent Form.pdf', size: '86 KB', dateUploaded: '24/07/26' },
    { id: 4, name: 'Medication Chart.pdf', size: '132 KB', dateUploaded: '20/07/26' },
    { id: 5, name: 'Cardiology Referral Letter.pdf', size: '64 KB', dateUploaded: '09/07/26' },
    { id: 6, name: 'Electrocardiogram Report.pdf', size: '64 KB', dateUploaded: '25/06/26' },
  ];

  // Document scrolling (UNTESTED!!)
  const documentsScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollMore, setCanScrollMore] = useState(false);

  const updateScrollState = () => {
    const el = documentsScrollRef.current;
    if (!el) {
      return;
    }
    const hasMoreBelow = el.scrollTop + el.clientHeight < el.scrollHeight - 1;
    setCanScrollMore(hasMoreBelow);
  };

  useEffect(() => {
    updateScrollState();
  }, [documents]);

  // Sort/Filter features.
  const [logbookSearch, setLogbookSearch] = useState('');
  const [vitalsFilter, setVitalsFilter] = useState<VitalsFilter>('all');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [sortColumn, setSortColumn] = useState<SortColumn | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else {
        setSortDirection('asc');
      }
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const searchedEntries = vitalsLog.filter(entry => {
    const query = logbookSearch.toLowerCase();
    const matchesSearch = entry.date.toLowerCase().includes(query);

    const flags = getVitalsFlags(entry, weightFlags);
    const matchesFilter = matchesVitalsFilter(isEntryConcerning(flags), vitalsFilter);

    return matchesSearch && matchesFilter;
  });

  const sortedEntries = [...searchedEntries];
  if (sortColumn) {
    sortedEntries.sort((a, b) => {
      const result = compareEntries(a, b, sortColumn);
      if (sortDirection === 'desc') {
        return -result;
      } else {
        return result;
      }
    });
  }

  const allSelected = selectedIds.length > 0 && selectedIds.length === sortedEntries.length;

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(sortedEntries.map(entry => entry.id));
    }
  };

  const toggleRowSelected = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const { patient, isLoading: infoLoading, error: infoError } = usePatient(patientId);

  let tabContent;

  if (activeTab === 'sensor') {
    tabContent = (
      <div className="sensor-grid">
        <div className="card sensor-card">
          <div className="sensor-card-header">
            <div className="sensor-card-title">
              <Header4>Flow Rate</Header4>
              <Tooltip label={getChartInfo('flow')} multiline w={240} withArrow position="top">
                <Info size={16} className="info-icon" />
              </Tooltip>
            </div>
            <IconButton
              icon={Maximize2}
              variant="text"
              size="md"
              onClick={() => setExpandedChart('flow')}
            />
          </div>

          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={flowRateData} margin={{ top: 10, right: 40, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="var(--mantine-color-ubhNeutral-3)" strokeDasharray="3 3" />

                <XAxis dataKey="x" stroke="var(--mantine-color-ubhNeutral-8)" fontSize={12} />

                <YAxis stroke="var(--mantine-color-ubhNeutral-8)" fontSize={12} />

                <Line
                  type="monotone"
                  dataKey="y"
                  stroke="var(--mantine-color-ubhBlue-6)"
                  strokeWidth={2}
                  dot={{ r: 5, fill: 'var(--mantine-color-ubhBlue-6)' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card sensor-card">
          <div className="sensor-card-header">
            <div className="sensor-card-title">
              <Header4>L &amp; R Pressure</Header4>
              <Tooltip label={getChartInfo('pressure')} multiline w={240} withArrow position="top">
                <Info size={16} className="info-icon" />
              </Tooltip>
            </div>
            <IconButton
              icon={Maximize2}
              variant="text"
              size="md"
              onClick={() => setExpandedChart('pressure')}
            />
          </div>

          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lrPressureData} margin={{ top: 10, right: 40, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="var(--mantine-color-ubhNeutral-3)" strokeDasharray="3 3" />

                <XAxis dataKey="x" stroke="var(--mantine-color-ubhNeutral-8)" fontSize={12} />

                <YAxis stroke="var(--mantine-color-ubhNeutral-8)" fontSize={12} />

                <Legend position="bottom" wrapperStyle={{ paddingTop: 12, paddingLeft: 36 }} />
                <Line
                  type="monotone"
                  dataKey="left"
                  name="Left"
                  stroke="var(--mantine-color-ubhBlue-6)"
                  strokeWidth={2}
                  dot={{ r: 5, fill: 'var(--mantine-color-ubhBlue-6)' }}
                />
                <Line
                  type="monotone"
                  dataKey="right"
                  name="Right"
                  stroke="var(--mantine-color-ubhRed-6)"
                  strokeWidth={2}
                  dot={{ r: 5, fill: 'var(--mantine-color-ubhRed-6)' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  } else if (activeTab === 'logbook') {
    let emptyStateRow = null;
    if (sortedEntries.length === 0) {
      emptyStateRow = (
        <tr>
          <td colSpan={7}>
            <Body1>No entries match this search and filter.</Body1>
          </td>
        </tr>
      );
    }

    tabContent = (
      <div className="card logbook-card">
        <div className="logbook-controls">
          <SearchBar
            placeholder="Search by date"
            value={logbookSearch}
            onChange={e => setLogbookSearch(e.target.value)}
            onClear={() => setLogbookSearch('')}
          />

          <Button
            variant={getFilterButtonVariant(vitalsFilter)}
            size="sm"
            leftIcon={Filter}
            onClick={() => setVitalsFilter(getNextVitalsFilter(vitalsFilter))}
          >
            {getFilterLabel(vitalsFilter)}
          </Button>

          <Button
            variant="outlined"
            size="sm"
            leftIcon={Download}
            onClick={() => downloadLogbookCsv(sortedEntries)}
          >
            Download
          </Button>
        </div>

        <table className="logbook-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" checked={allSelected} onChange={toggleSelectAll} />
              </th>
              <th onClick={() => handleSort('date')}>
                Date <ArrowUpDown size={14} />
              </th>
              <th onClick={() => handleSort('weight')}>
                Weight <ArrowUpDown size={14} />
              </th>
              <th onClick={() => handleSort('systolic')}>
                Systolic <ArrowUpDown size={14} />
              </th>
              <th onClick={() => handleSort('diastolic')}>
                Diastolic <ArrowUpDown size={14} />
              </th>
              <th onClick={() => handleSort('map')}>
                MAP <ArrowUpDown size={14} />
              </th>
              <th onClick={() => handleSort('inr')}>
                INR <ArrowUpDown size={14} />
              </th>
            </tr>
          </thead>

          <tbody>
            {sortedEntries.map(entry => {
              const {
                map,
                weightConcerning,
                systolicConcerning,
                diastolicConcerning,
                mapConcerning,
                inrConcerning,
              } = getVitalsFlags(entry, weightFlags);

              return (
                <tr key={entry.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(entry.id)}
                      onChange={() => toggleRowSelected(entry.id)}
                    />
                  </td>
                  <td>{entry.date}</td>
                  <td>
                    <span className={`status-pill ${getVitalClass(weightConcerning)}`}>
                      {entry.weight.toFixed(1)} kg
                    </span>
                  </td>
                  <td>
                    <span className={`status-pill ${getVitalClass(systolicConcerning)}`}>
                      {entry.systolic} mmHg
                    </span>
                  </td>
                  <td>
                    <span className={`status-pill ${getVitalClass(diastolicConcerning)}`}>
                      {entry.diastolic} mmHg
                    </span>
                  </td>
                  <td>
                    <span className={`status-pill ${getVitalClass(mapConcerning)}`}>
                      {map.toFixed(1)} mmHg
                    </span>
                  </td>
                  <td>
                    <span className={`status-pill ${getVitalClass(inrConcerning)}`}>
                      {entry.inr.toFixed(1)}
                    </span>
                  </td>
                </tr>
              );
            })}

            {emptyStateRow}
          </tbody>
        </table>
      </div>
    );
  } else if (activeTab === 'documents') {
    tabContent = (
      <div className="card documents-card">
        <div
          className={`documents-scroll ${getScrollIndicatorClass(canScrollMore)}`}
          onScroll={updateScrollState}
        >
          <table className="documents-table">
            <thead>
              <tr>
                <th>File Name</th>
                <th>Size</th>
                <th>Date Uploaded</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {documents.map(doc => (
                <tr key={doc.id}>
                  <td>
                    <div className="document-name-cell">
                      <FileText size={16} />
                      {doc.name}
                    </div>
                  </td>
                  <td>{doc.size}</td>
                  <td>{doc.dateUploaded}</td>
                  <td>
                    <IconButton
                      icon={Download}
                      variant="text"
                      size="sm"
                      onClick={() => downloadDocument(doc)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    if (infoLoading) {
      tabContent = (
        <div className="card general-info-card">
          <Body1>Loading patient information...</Body1>
        </div>
      );
    } else if (infoError || !patient) {
      tabContent = (
        <div className="card general-info-card">
          <Body1>{infoError || 'Patient information is unavailable.'}</Body1>
        </div>
      );
    } else {
      tabContent = (
        <div className="card general-info-card">
          <div className="info-section-heading">
            <Header4>Personal Information</Header4>
            <div className="info-divider" />
          </div>
 
          <div className="general-info-body">
            <div className="general-info-identity">
              <div className="general-info-avatar" />
              <div>
                <Header3>
                  {patient.firstName} {patient.lastName}
                </Header3>
                <Body1>
                  <strong>Patient ID:</strong> {patient.pid}
                </Body1>
              </div>
            </div>
 
            <div className="general-info-fields">
              <Body1>
                <strong>DOB:</strong> {formatDob(patient.dob)}
              </Body1>
              <Body1>
                <strong>Age:</strong> {calculateAge(patient.dob)}
              </Body1>
            </div>
          </div>
 
          <div className="general-info-sections">
            <div className="info-section">
              <div className="info-section-heading">
                <Header4>Medical</Header4>
                <div className="info-divider" />
              </div>
 
              <div className="general-info-fields">
                <Body1>
                  <strong>Blood Type:</strong> {patient.bloodType}
                </Body1>
                <Body1>
                  <strong>Diagnosis:</strong> {patient.diagnosis}
                </Body1>
              </div>
            </div>
 
            <div className="info-section">
              <div className="info-section-heading">
                <Header4>Contact</Header4>
                <div className="info-divider" />
              </div>
 
              <div className="general-info-fields">
                <Body1>
                  <strong>Phone:</strong> {patient.phone}
                </Body1>
                <Body1>
                  <strong>Email:</strong> {patient.email}
                </Body1>
                <Body1>
                  <strong>Address:</strong> {patient.address}
                </Body1>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="page">
      <div className="detail-header">
        <IconButton icon={ArrowLeft} variant="text" onClick={() => navigate('/patients')} />
        <Header3>
          Patient ID: <span className="patient-id-accent">{patientId}</span>
        </Header3>
      </div>

      <div className="detail-tabs">
        {tabs.map(tab => (
          <Button
            key={tab.value}
            variant={getTabVariant(tab.value, activeTab)}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {tabContent}

      <Modal
        opened={expandedChart !== null}
        onClose={() => setExpandedChart(null)}
        title={<Header3 bold>{getChartTitle(expandedChart)}</Header3>}
        size="xl"
        padding="xl"
      >
        <div className="chart-wrapper expanded-chart">
          <ResponsiveContainer width="100%" height={500}>
            <LineChart
              data={getChartData(expandedChart, flowRateData, lrPressureData)}
              margin={{ top: 10, right: 40, left: 0, bottom: 0 }}
            >
              <CartesianGrid stroke="var(--mantine-color-ubhNeutral-3)" strokeDasharray="3 3" />
              <XAxis dataKey="x" stroke="var(--mantine-color-ubhNeutral-8)" fontSize={12} />
              <YAxis stroke="var(--mantine-color-ubhNeutral-8)" fontSize={12} />
              <Legend position="bottom" wrapperStyle={{ paddingTop: 16, paddingLeft: 48 }} />
              {getChartLines(expandedChart)}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Modal>
    </div>
  );
}