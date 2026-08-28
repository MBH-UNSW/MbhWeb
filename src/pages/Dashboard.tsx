// import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { IconHeartExclamation, IconChecks, IconThumbUp } from '@tabler/icons-react';
import { Header3 } from '../components/typography/Header';
import { Button } from '../components/buttons/Button';

// background color: var(--mantine-color-ubhNeutral-2);

export default function DashboardPage() {
  // my vision is that the cards could change colour depending on what the status of each is yk ?
  // will add more. just getting my ass kicked by assessments rn :)
  return (
    <div className='page'>
      <Header3>Good morning, <span style={{ color: 'var(--mantine-color-ubhRed-6)', fontWeight: 'var(--mantine-font-weight-semibold)' }}>User!</span> </Header3>
      <div className='card-container'>
        <div className='card'>
          <div className='card-header'>
            <IconHeartExclamation size={40} stroke={2} />
            <h1>0</h1>
            <h4>
              <span>Require</span>
              <span>Urgent Care</span>
            </h4>
          </div>
          <Button variant="default" size="sm" fullWidth>
            See more!
          </Button>
        </div> 
        <div className='card'>
          <div className='card-header'>
            <IconChecks size={40} stroke={2} />
            <h1>10</h1>
            <h4>
              <span>Completed</span>
              <span>Tasks</span>
            </h4>
          </div>
          <Button variant="default" size="sm" fullWidth>
            See more!
          </Button>
        </div>
        <div className='card'>
          <div className='card-header'>
            <IconThumbUp size={40} stroke={2} />
            <h1>0</h1>
            <h4>
              <span>In Good</span>
              <span>Condition</span>
            </h4>
          </div>
          <Button variant="default" size="sm" fullWidth>
            See more!
          </Button>
        </div>
      </div>
      <div className='card'>
        <h2>Notifications</h2>
        <div style={{ display: 'flex', gap: '7px' }}>
          <Button variant="outlined" size="xs">
            Critical
          </Button>
          <Button variant="outlined" size="xs">
            Check-up
          </Button>
          <Button variant="outlined" size="xs">
            Something else idk
          </Button>
        </div>
      </div>
    </div>
  )
}