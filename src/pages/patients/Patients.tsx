import '../Page.css';
import './Patients.css';
import { Header2, Header3, Header4, Header5, Header6 } from '../../components/typography/Header';
import { Body1, Body2 } from '../../components/typography/Body';
import { Button } from '../../components/buttons/Button';
import { IconButton } from '../../components/buttons/IconButton';
import { SearchBar } from '../../components/searchBar/SearchBar';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LayoutGrid, List as ListIcon, Plus, ChevronRight } from 'lucide-react';

// TODO: make a proper component class for cards.
// import { PatientCard } from '../components/patientCard/PatientCard';


type PatientStatus = 'Stable' | 'Warning' | 'Unstable';
type StatusFilter = 'all' | PatientStatus;
type ViewMode = 'grid' | 'list';
type ButtonVariant = 'default' | 'outlined' | 'text';

interface Patient {
  id: number;
  name: string;
  patientId: string;
  status: PatientStatus;
}

const statusFilters: { value: PatientStatus; label: string }[] = [
  { value: 'Unstable', label: 'Unstable' },
  { value: 'Warning', label: 'Warning' },
  { value: 'Stable', label: 'Stable' },
];

//  change function name to getStatus
function getStatusClass(status: PatientStatus) {
  if (status === 'Unstable') {
    return 'critical';
  } else if (status === 'Warning') {
    return 'warning';
  } else {
    return 'good';
  }
}

export default function PatientsPage() {
  const navigate = useNavigate();

  // some mock bs.. (backend tba)
  const patients: Patient[] = [
    { id: 1, name: 'Emaan Khurram', patientId: 'M104933', status: 'Unstable' },
    { id: 2, name: 'Hana Trinh', patientId: 'M937927', status: 'Unstable' },
    { id: 3, name: 'Raisa Zafar Khan', patientId: 'M104223', status: 'Stable' },
    { id: 4, name: 'Dev Kanchhal', patientId: 'M104000', status: 'Warning' },
    { id: 5, name: 'Oliver Xu', patientId: 'M504948', status: 'Stable' },
    { id: 6, name: 'Sasha Solichin', patientId: 'M402933', status: 'Stable' },
    { id: 7, name: 'Agnes Tjokrosetio', patientId: 'M1149571', status: 'Unstable' },
    { id: 8, name: 'Lipda Chantayasakorn', patientId: 'M926484', status: 'Warning' },
    { id: 9, name: 'Hannah Choi', patientId: 'M353213', status: 'Stable' },
  ];

  const [view, setView] = useState<ViewMode>('grid');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === 'all' || patient.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const patientCardOnClick = (patient: Patient) => {
    navigate(`/patients/${patient.patientId}`);
  };

  const toggleStatusFilter = (value: PatientStatus) => {
    if (statusFilter === value) {
      setStatusFilter('all');
    } else {
      setStatusFilter(value);
    }
  };

  let patientDisplay;

  if (view === 'grid') {
    patientDisplay = (
      <div className='patient-grid'>
        {filteredPatients.map(patient => (
          <div
            className={`card patient-tile ${getStatusClass(patient.status)}`}
            key={patient.id}
            onClick={() => patientCardOnClick(patient)}
          >
            <div>
              <Header6>{patient.name}</Header6>
              <Body2>{patient.patientId}</Body2>
            </div>

            <div className='patient-tile-footer'>
              <Body2 bold>{patient.status}</Body2>
              <ChevronRight size={18} strokeWidth={2.5} />
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    patientDisplay = (
      <div className='scroll-container'>
        {filteredPatients.map(patient => (
          <div
            className={`patient-card ${getStatusClass(patient.status)}`}
            key={patient.id}
            onClick={() => patientCardOnClick(patient)}
          >
            <div className='patient-card-info'>
              <Header6>
                {patient.name} | ID: {patient.patientId}
              </Header6>

              <div className='patient-card-status'>
                <Body2 bold>{patient.status}</Body2>
                <ChevronRight size={18} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='page'>
      <div className='patients-header'>
        <div className='overview-greeting'>
          <Header2>Patients Overview</Header2>

        </div>

        <div className='view-toggle'>
          <IconButton 
            icon={LayoutGrid}
            variant={view === 'grid' ? 'default' : 'text'}
            onClick={() => setView('grid')}
          />
          <IconButton 
            icon={ListIcon}
            variant={view === 'list' ? 'default' : 'text'}
            onClick={() => setView('list')}
          />
        </div>
      </div>

      <div className='patients-controls'>
        <SearchBar
          placeholder='Search Patients'
          value={search}
          onChange={e => setSearch(e.target.value)}
          onClear={() => setSearch('')}
        />

        <div className='notification-filters'>
          {statusFilters.map(({ value, label }) => (
            <Button
              key={value}
              variant={statusFilter === value ? 'default' : 'outlined'}
              size='xs'
              onClick={() => setStatusFilter(statusFilter === value ? 'all' : value)}
            >
              {label}
            </Button>
          ))}
        </div>

        <Button 
          variant='default'
          size='sm'
          leftIcon={Plus}
        >
          New Patient
        </Button>
      </div>

      {patientDisplay}
    </div>
  );
}