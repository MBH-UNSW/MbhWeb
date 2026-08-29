// import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { IconHeartExclamation, IconChecks, IconThumbUp } from '@tabler/icons-react';
import { Header3 } from '../components/typography/Header';
import { Button } from '../components/buttons/Button';

type Status = 'good' | 'warning' | 'critical';

function getStatus(value: number, total: number, goal: 'low' | 'high'): Status {
  if (total === 0) {
    return 'good';
  }

  const percentage = value / total;
  if (goal === 'low') {
    if (percentage >= 0.75) {
      return 'critical';
    } else if (percentage >= 0.25) {
      return 'warning';
    } else {
      return 'good';
    }
  }

  // if the goal is higher
  if (percentage >= 0.75) {
    return 'good';
  } else if (percentage >= 0.5) {
    return 'warning';
  } else {
    return 'critical';
  }
}

export default function DashboardPage() {
  // filler for backend functions later !!!
  const user = 'Dr. Asna';
  const totalPatients = 25;
  const needUrgentCare = 3;
  const inGoodCondition = 12;
  const numCompletedTasks = 11;
  const totalNumTasks = 20;

  const urgentCareStatus = getStatus(needUrgentCare, totalPatients, 'low');
  const goodConditionStatus = getStatus(inGoodCondition, totalPatients, 'high');
  const completedTasksStatus = getStatus(numCompletedTasks, totalNumTasks, 'high');

  return (
    <div className='page'>
      <Header3>
        Good morning, <span className='greeting'>{user}!</span> 
      </Header3>
      <Header3>Good morning </Header3>
      <div className='card-container'>
        <div className={`card card-${urgentCareStatus}`}>
          <div className='card-header'>
            <IconHeartExclamation className='card-icon' stroke={2} />
            <h1>{needUrgentCare}</h1>
            <h4>
              <span>Require Urgent Care</span>
            </h4>
          </div>
          <Button variant="default" size="sm" fullWidth>
            See more!
          </Button>
        </div> 
        <div className={`card card-${completedTasksStatus}`}>
          <div className='card-header'>
            <IconChecks className='card-icon' stroke={2} />
            <h1>{numCompletedTasks}</h1>
            <h4>
              <span>Completed Tasks</span>
            </h4>
          </div>
          <Button variant="default" size="sm" fullWidth>
            See more!
          </Button>
        </div>
        <div className={`card card-${goodConditionStatus}`}>
          <div className='card-header'>
            <IconThumbUp className='card-icon' stroke={2} />
            <h1>{inGoodCondition}</h1>
            <h4>
              <span>In Good Condition</span>
            </h4>
          </div>
          <Button variant="default" size="sm" fullWidth>
            See more!
          </Button>
        </div>
      </div>
      <div className='card'>
        <h2>Notifications</h2>
        <div className='notification-filters'>
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