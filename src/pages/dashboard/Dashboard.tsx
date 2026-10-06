// import { useNavigate } from 'react-router-dom';
import '../Page.css';
import './Dashboard.css';
import { HeartPulse, ListChecks, HeartHandshake } from 'lucide-react';
import { Header2, Header3, Header4, Header5, Header6 } from '../../components/typography/Header';
import { Button } from '../../components/buttons/Button';
import { Body1, Body2 } from '../../components/typography/Body';
import { useEffect, useState } from 'react';
import {
  promptForNotifications,
  subscribeToLogbookPushNotifications,
  type OneSignalNotification,
} from '../../services/oneSignal';

type TimePeriod = 'morning' | 'afternoon' | 'evening' | 'night';
type Status = 'good' | 'warning' | 'critical';

type NotificationCategory = 'critical' | 'checkup' | 'task' | 'update';
type NotificationFilter = 'all' | NotificationCategory;
interface Notification {
  id: string;
  category: NotificationCategory;
  patientName: string;
  patientId: string;
  message: string;
  time: string;
}

function formatNotificationTime(date: Date) {
  return new Intl.DateTimeFormat('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(date);
}

function toDashboardNotification(notification: OneSignalNotification): Notification {
  return {
    id: `onesignal-${notification.receivedAt.getTime()}`,
    category: 'update',
    patientName: notification.patientName || 'Patient',
    patientId: notification.patientId || 'Unknown',
    message: notification.message,
    time: formatNotificationTime(notification.receivedAt),
  };
}

const notificationFilters: { value: NotificationFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'critical', label: 'Critical' },
  { value: 'checkup', label: 'Check-ups' },
  { value: 'task', label: 'Tasks' },
  { value: 'update', label: 'Updates' },
];

function getTimeOfDay(): TimePeriod {
  const current = new Date().getHours();
  if (current >= 5 && current < 12) {
    return 'morning';
  } else if (current >= 12 && current < 17) {
    return 'afternoon';
  } else if (current >= 17 && current < 21) {
    return 'evening';
  } else {
    return 'night';
  }
}

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

function getTaskStatus(uncompleted: number, overdue: number): Status {
  if (overdue > 0) {
    return 'critical';
  }
  if (uncompleted === 0) {
    return 'good';
  }
  return 'warning';
}

export default function DashboardPage() {
  // filler for backend functions later !!!
  const timePeriod = getTimeOfDay();
  const user = 'Dr. Asna';
  const totalPatients = 25;
  const needUrgentCare = 3;
  const inGoodCondition = 12;
  const numUncompletedTasks = 11;
  const numOverdueTasks = 0;

  const urgentCareStatus = getStatus(needUrgentCare, totalPatients, 'low');
  const goodConditionStatus = getStatus(inGoodCondition, totalPatients, 'high');
  const pendingTasksStatus = getTaskStatus(numUncompletedTasks, numOverdueTasks);

  const defaultNotifications: Notification[] = [
    {
      id: 'checkup-1',
      category: 'checkup',
      patientName: 'Bob Smith',
      patientId: '75311093',
      message: 'Follow-up check-up due in two days',
      time: '10:00 am · 1 Sep 2026',
    },
    {
      id: 'update-2',
      category: 'update',
      patientName: 'Jane Doe',
      patientId: '88733825',
      message: 'New device readings available',
      time: '5:15 pm · 30 Aug 2026',
    },
    {
      id: 'critical-3',
      category: 'critical',
      patientName: 'John Doe',
      patientId: '67999018',
      message: 'Low heart rate detected',
      time: '12:35 pm · 26 Aug 2026',
    },
    {
      id: 'critical-4',
      category: 'critical',
      patientName: 'John Doe',
      patientId: '67999018',
      message: 'Abnormal flow rate detected',
      time: '12:30 pm · 26 Aug 2026',
    },
    {
      id: 'critical-5',
      category: 'critical',
      patientName: 'Jane Doe',
      patientId: '88733825',
      message: 'Low flow rate detected',
      time: '2:03 am · 20 Aug 2026',
    },
    {
      id: 'critical-6',
      category: 'critical',
      patientName: 'David Bowie',
      patientId: '19470801',
      message: 'Device battery is low',
      time: '7:49 pm · 18 Aug 2026',
    },
    {
      id: 'task-7',
      category: 'task',
      patientName: 'Marc Bolan',
      patientId: '19473009',
      message: 'Review uploaded driveline image',
      time: '10:08 am · 16 Aug 2026',
    },
  ];

  const [liveNotifications, setLiveNotifications] = useState<Notification[]>([]);
  const [notificationFilter, setNotificationFilter] = useState<NotificationFilter>('all');
  const notifications = [...liveNotifications, ...defaultNotifications];
  const filteredNotifications = notifications.filter(
    notification => notificationFilter === 'all' || notification.category === notificationFilter,
  );

  useEffect(() => {
    void promptForNotifications().catch(error => {
      console.error('OneSignal setup failed', error);
    });

    return subscribeToLogbookPushNotifications(notification => {
      setLiveNotifications(currentNotifications => [
        toDashboardNotification(notification),
        ...currentNotifications,
      ]);
    });
  }, []);

  return (
    <div className="page">
      <div className="dashboard-greeting">
        <Header3>
          Good {timePeriod}, <span className="greeting">{user}!</span>
        </Header3>
        <Header5>You have {totalPatients} patients under your care.</Header5>
      </div>
      <div className="dashboard-card-container">
        <div className={`dashboard-card ${urgentCareStatus}`}>
          <div className="dashboard-card-header">
            <HeartPulse className="dashboard-card-icon" strokeWidth={1.9} />
            <Header2>{needUrgentCare}</Header2>
            <Header6>
              <span>Require Urgent Care</span>
            </Header6>
          </div>
          <Button variant="default" size="sm" fullWidth>
            Review Patients
          </Button>
        </div>
        <div className={`dashboard-card ${pendingTasksStatus}`}>
          <div className="dashboard-card-header">
            <ListChecks className="dashboard-card-icon" strokeWidth={2} />
            <Header2>{numUncompletedTasks}</Header2>
            <Header6>
              <span>Tasks to Complete</span>
            </Header6>
          </div>
          <Button variant="default" size="sm" fullWidth>
            View Tasks
          </Button>
        </div>
        <div className={`dashboard-card ${goodConditionStatus}`}>
          <div className="dashboard-card-header">
            <HeartHandshake className="dashboard-card-icon" strokeWidth={1.9} />
            <Header2>{inGoodCondition}</Header2>
            <Header6>
              <span>In Good Condition</span>
            </Header6>
          </div>
          <Button variant="default" size="sm" fullWidth>
            View Patients
          </Button>
        </div>
      </div>

      <div className="dashboard-card">
        <Header4>Notifications</Header4>
        <div className="notification-filters">
          {notificationFilters.map(({ value, label }) => (
            <Button
              key={value}
              variant={notificationFilter === value ? 'default' : 'outlined'}
              size="xs"
              onClick={() => setNotificationFilter(value)}
            >
              {label}
            </Button>
          ))}
        </div>
        <div className="scroll-container">
          {filteredNotifications.map(notification => (
            <div className="dashboard-patient-card" key={notification.id}>
              <Header6>
                {notification.patientName} | ID: {notification.patientId}
              </Header6>
              <div className="dashboard-patient-card-info">
                <Body1>{notification.message}</Body1>
                <Body2>{notification.time}</Body2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
