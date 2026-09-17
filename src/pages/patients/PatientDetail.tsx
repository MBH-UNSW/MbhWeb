import '../Page.css';
import './PatientDetail.css';
import { Header2, Header3, Header4, Header5, Header6 } from '../../components/typography/Header';
import { Body1, Body2 } from '../../components/typography/Body';
import { Button } from '../../components/buttons/Button';
import { IconButton } from '../../components/buttons/IconButton';
import { SearchBar } from '../../components/searchBar/SearchBar';

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ArrowLeft, Info, Maximize2, Filter, Download, ArrowUpDown } from 'lucide-react';

import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { Modal } from '@mantine/core';

type DetailTab = 'sensor' | 'logbook' | 'documents' | 'general';
type ButtonVariant = 'default' | 'outlined' | 'text';
type LogbookStatus = 'Available' | 'Out of Stock';
type SortColumn = 'name' | 'price' | 'size' | 'qty' | 'date' | 'status';
type SortDirection = 'asc' | 'desc';
type ExpandedChart = 'flow' | 'pressure' | null;

interface SensorPlot {
	x: number;
	y: number;
}

interface GeneralInfo {
  name: string;
  patientId: string;
  gender: string;
  age: number;
  dob: string;
}

interface LogbookEntry {
	id: number;
	code: string;
	name: string;
	price: number;
	size: number;
	qty: number;
	date: string;
	status: LogbookStatus;
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

function getEntryStatusClass(status: LogbookStatus) {
	if (status === 'Available') {
		return 'good';
	} else {
		return 'critical';
	}
}

function getChartTitle(chart: ExpandedChart): string {
  if (chart === 'pressure') {
    return 'L & R Pressure';
  } else {
    return 'Flow Rate';
  }
}

function getChartData(
  chart: ExpandedChart,
  flowRateData: SensorPlot[],
  lrPressureData: SensorPlot[]
): SensorPlot[] {
  if (chart === 'pressure') {
    return lrPressureData;
  } else {
    return flowRateData;
  }
}

function compareEntries(a: LogbookEntry, b: LogbookEntry, column: SortColumn) {
  if (column === 'name') {
    return a.name.localeCompare(b.name);
  } else if (column === 'price') {
    return a.price - b.price;
  } else if (column === 'size') {
    return a.size - b.size;
  } else if (column === 'qty') {
    return a.qty - b.qty;
  } else if (column === 'date') {
    return a.date.localeCompare(b.date);
  } else {
    return a.status.localeCompare(b.status);
  }
}

export default function PatientDetailPage() {
	const navigate = useNavigate();
	const { patientId } = useParams<{ patientId: string }>();

	const [activeTab, setActiveTab] = useState<DetailTab>('sensor');
  const [expandedChart, setExpandedChart] = useState<ExpandedChart>(null);

	// mock bs data points
	const flowRateData: SensorPlot[] = [
		{ x: 0.5, y: 5 },
		{ x: 1.0, y: 15 },
		{ x: 1.5, y: 40 },
		{ x: 2.0, y: 100 },
		{ x: 2.5, y: 160 },
		{ x: 3.0, y: 215 },
	];

	const lrPressureData: SensorPlot[] = [
		{ x: 0.5, y: 6 },
		{ x: 1.0, y: 18 },
		{ x: 1.5, y: 42 },
		{ x: 2.0, y: 105 },
		{ x: 2.5, y: 165 },
		{ x: 3.0, y: 218 },
	];

	const logbookEntries: LogbookEntry[] = [
		{ id: 1, code: '021231', name: 'Beigi Coffe (Navy)', price: 20, size: 40, qty: 234, date: '04/17/23 at 8:25 PM', status: 'Available' },
		{ id: 2, code: '021232', name: 'Beigi Coffe (Teal)', price: 20, size: 40, qty: 234, date: '04/17/23 at 8:25 PM', status: 'Out of Stock' },
		{ id: 3, code: '021233', name: 'Story Honzo (Cream)', price: 20, size: 40, qty: 234, date: '04/17/23 at 8:25 PM', status: 'Available' },
		{ id: 4, code: '021234', name: 'Kanky Kitadakate (Green)', price: 20, size: 40, qty: 234, date: '04/17/23 at 8:25 PM', status: 'Out of Stock' },
		{ id: 5, code: '021235', name: 'Story Honzo (Black)', price: 20, size: 40, qty: 234, date: '04/17/23 at 8:25 PM', status: 'Available' },
		{ id: 6, code: '021236', name: 'Story Honzo (Cream)', price: 20, size: 40, qty: 234, date: '04/17/23 at 8:25 PM', status: 'Out of Stock' },
		{ id: 7, code: '021237', name: 'Beigi Coffe (Charcoal)', price: 20, size: 40, qty: 234, date: '04/17/23 at 8:25 PM', status: 'Out of Stock' },
	];

	const [logbookSearch, setLogbookSearch] = useState('');
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
 
  const searchedEntries = logbookEntries.filter(entry => {
    const query = logbookSearch.toLowerCase();
    return entry.name.toLowerCase().includes(query) || entry.code.includes(query);
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

  // mock data for general information tab:
  const generalInfo: GeneralInfo = {
    name: 'Janethan Doeighty',
    patientId: patientId || 'N/A',
    gender: 'Female',
    age: 67,
    dob: '16/06/1959',
  };
 
  let tabContent;
 
  if (activeTab === 'sensor') {
    tabContent = (
      <div className='sensor-grid'>
        <div className='card sensor-card'>
          <div className='sensor-card-header'>
            <div className='sensor-card-title'>
              <Header4>Flow Rate</Header4>
              <Info size={16} />
            </div>
            <IconButton
              icon={Maximize2}
              variant='text'
              size='sm'
              onClick={() => setExpandedChart('flow')}
            />
          </div>
 
          <div className='chart-wrapper'>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart
                data={flowRateData}
                margin={{ top: 10, right: 40, left: 0, bottom: 0}}
              >
                <CartesianGrid
                  stroke='var(--mantine-color-ubhNeutral-3)'
                  strokeDasharray='3 3'
                />

                <XAxis
                  dataKey='x'
                  stroke='var(--mantine-color-ubhNeutral-8)'
                  fontSize={12}
                />

                <YAxis
                  stroke='var(--mantine-color-ubhNeutral-8)'
                  fontSize={12}
                />

                <Line
                  type='monotone'
                  dataKey='y'
                  stroke='#3b3fd1'
                  strokeWidth={2}
                  dot={{ r: 5, fill: '#3b3fd1' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
 
        <div className='card sensor-card'>
          <div className='sensor-card-header'>
            <div className='sensor-card-title'>
              <Header4>L &amp; R Pressure</Header4>
              <Info size={16} />
            </div>
            <IconButton
              icon={Maximize2}
              variant='text'
              size='sm'
              onClick={() => setExpandedChart('pressure')}
            />
          </div>
 
          <div className='chart-wrapper'>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart
                data={lrPressureData}
                margin={{ top: 10, right: 40, left: 0, bottom: 0}}
              >
                <CartesianGrid
                  stroke='var(--mantine-color-ubhNeutral-3)'
                  strokeDasharray='3 3'
                />

                <XAxis
                  dataKey='x'
                  stroke='var(--mantine-color-ubhNeutral-8)'
                  fontSize={12}
                />

                <YAxis
                  stroke='var(--mantine-color-ubhNeutral-8)'
                  fontSize={12}
                />

                <Line
                  type='monotone'
                  dataKey='y'
                  stroke='#3b3fd1'
                  strokeWidth={2}
                  dot={{ r: 5, fill: '#3b3fd1' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  } else if (activeTab === 'logbook') {
    tabContent = (
      <div className='card logbook-card'>
        <div className='logbook-controls'>
          <SearchBar
            placeholder='Search'
            value={logbookSearch}
            onChange={e => setLogbookSearch(e.target.value)}
            onClear={() => setLogbookSearch('')}
          />

          {/* buttons onClick not set yet TODO.. */}
          <Button variant='outlined' size='sm' leftIcon={Filter} onClick={() => console.log('open filters')}>
            Filter
          </Button>
 
          <Button variant='outlined' size='sm' leftIcon={Download} onClick={() => console.log('download logbook')}>
            Download
          </Button>
        </div>
 
        <table className='logbook-table'>
          <thead>
            <tr>
              <th>
                <input type='checkbox' checked={allSelected} onChange={toggleSelectAll} />
              </th>
              <th onClick={() => handleSort('name')}>
                Product <ArrowUpDown size={14} />
              </th>
              <th onClick={() => handleSort('price')}>
                Price <ArrowUpDown size={14} />
              </th>
              <th onClick={() => handleSort('size')}>
                Size <ArrowUpDown size={14} />
              </th>
              <th onClick={() => handleSort('qty')}>
                QTY <ArrowUpDown size={14} />
              </th>
              <th onClick={() => handleSort('date')}>
                Date <ArrowUpDown size={14} />
              </th>
              <th onClick={() => handleSort('status')}>
                Status <ArrowUpDown size={14} />
              </th>
            </tr>
          </thead>
 
          <tbody>
            {sortedEntries.map(entry => (
              <tr key={entry.id}>
                <td>
                  <input
                    type='checkbox'
                    checked={selectedIds.includes(entry.id)}
                    onChange={() => toggleRowSelected(entry.id)}
                  />
                </td>
                <td>
                  <a className='product-code' href='#' onClick={e => e.preventDefault()}>
                    {entry.code}
                  </a>
                  <div className='product-name'>{entry.name}</div>
                </td>
                <td>${entry.price.toFixed(2)}</td>
                <td>{entry.size}</td>
                <td>{entry.qty}</td>
                <td>{entry.date}</td>
                <td>
                  <span className={`status-pill ${getEntryStatusClass(entry.status)}`}>{entry.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (activeTab === 'documents') {
    tabContent = (
      <div className='card'>
        <Body1>Documents coming soon.</Body1>
      </div>
    );
  } else {
    tabContent = (
      <div className='card general-info-card'>
        <Header4>Personal Information</Header4>
 
        <div className='general-info-body'>
          <div className='general-info-identity'>
            <div className='general-info-avatar' />
            <div>
              <Header6>{generalInfo.name}</Header6>
              <Body2>Patient ID: {generalInfo.patientId}</Body2>
            </div>
          </div>
 
          <div className='general-info-fields'>
            <Body2>
              <strong>Gender:</strong> {generalInfo.gender}
            </Body2>
            <Body2>
              <strong>Age:</strong> {generalInfo.age}
            </Body2>
            <Body2>
              <strong>DOB:</strong> {generalInfo.dob}
            </Body2>
          </div>
        </div>
      </div>
    );
  }

	return (
		<div className='page'>
			<div className='detail-header'>
				<IconButton
					icon={ArrowLeft}
					variant='text'
					onClick={() => navigate('/patients')}
				/>
				<Header3>
					Patient ID: <span className='patient-id-accent'>{patientId}</span>
				</Header3>
			</div>

			<div className='detail-tabs'>
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
        size='xl'
      >
        <div className='chart-wrapper expanded-chart'>
          <ResponsiveContainer width='100%' height={500}>
            <LineChart
              data={getChartData(expandedChart, flowRateData, lrPressureData)}
              margin={{ top: 10, right: 40, left: 0, bottom: 0 }}
            >
              <CartesianGrid stroke='var(--mantine-color-ubhNeutral-3)' strokeDasharray='3 3' />
              <XAxis dataKey='x' stroke='var(--mantine-color-ubhNeutral-8)' fontSize={12} />
              <YAxis stroke='var(--mantine-color-ubhNeutral-8)' fontSize={12} />
              <Line type='monotone' dataKey='y' stroke='#3b3fd1' strokeWidth={2} dot={{ r: 6, fill: '#3b3fd1' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Modal>
    </div>
	);
}