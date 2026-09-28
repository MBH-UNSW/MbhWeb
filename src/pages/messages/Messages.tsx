import '../Page.css';
import './Messages.css';
import { Plus, MoveDown, MoveUp } from 'lucide-react';
import { Header3 } from '../../components/typography/Header';
import { Button } from '../../components/buttons/Button';
import { PillInput } from '../../components/pill/Pill';
import { SearchBar } from '../../components/searchBar/SearchBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type EnquiryType =
  'Emergency' | 'Appointment Making' | 'Supply Restock' | 'General Question' | 'Other';
type ConversationStatus = 'unread' | 'open' | 'closed';
type InboxFilter = 'all' | 'unread' | 'unassigned' | 'archived';

const inboxFilters: { value: InboxFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'unread', label: 'Unread' },
  { value: 'unassigned', label: 'Unassigned' },
  { value: 'archived', label: 'Archived' },
];

interface Conversation {
  id: number;
  patientName: string;
  patientId: string;
  enquiryType: EnquiryType;
  status: ConversationStatus;
  assigneeId: string | null;
  latestMessage: string;
  updatedAt: string;
}

export default function MessagesPage() {
  const navigate = useNavigate();
  const conversations: Conversation[] = [
    {
      id: 1,
      patientName: 'Bob Smith',
      patientId: '75311093',
      enquiryType: 'Appointment Making',
      status: 'unread',
      assigneeId: '888',
      latestMessage: 'Hello! I need to book my appointment for 2 days',
      updatedAt: '10:00 am · 1 Sep 2026',
    },
    {
      id: 2,
      patientName: 'Jane Doe',
      patientId: '88733825',
      enquiryType: 'General Question',
      status: 'unread',
      assigneeId: null,
      latestMessage: 'I am feeling really tired today. Is everything OK?',
      updatedAt: '5:15 pm · 30 Aug 2026',
    },
    {
      id: 3,
      patientName: 'John Doe',
      patientId: '67999018',
      enquiryType: 'Emergency',
      status: 'open',
      assigneeId: '8893',
      latestMessage: 'I feel dizzy!!! Help me',
      updatedAt: '12:35 pm · 26 Aug 2026',
    },
    {
      id: 4,
      patientName: 'John Doe',
      patientId: '67999018',
      enquiryType: 'Supply Restock',
      status: 'closed',
      assigneeId: '771',
      latestMessage: 'Thanks for arranging new dressings for me.',
      updatedAt: '12:30 pm · 26 Aug 2026',
    },
    {
      id: 5,
      patientName: 'Jane Doe',
      patientId: '88733825',
      enquiryType: 'Other',
      status: 'closed',
      assigneeId: '771',
      latestMessage: 'Thanks. All sorted now!',
      updatedAt: '2:03 am · 20 Aug 2026',
    },
    {
      id: 6,
      patientName: 'David Bowie',
      patientId: '19470801',
      enquiryType: 'Supply Restock',
      status: 'unread',
      assigneeId: null,
      latestMessage:
        "I'm running low on my prescribed supplies and would like to request a restock.",
      updatedAt: '7:49 pm · 18 Aug 2026',
    },
    {
      id: 7,
      patientName: 'Marc Bolan',
      patientId: '19473009',
      enquiryType: 'Emergency',
      status: 'unread',
      assigneeId: '292',
      latestMessage:
        "I've been experiencing chest discomfort since this morning and wanted to check what I should do.",
      updatedAt: '10:08 am · 16 Aug 2026',
    },
  ];

  const [inboxFilter, setInboxFilter] = useState<InboxFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortNewestFirst, setSortNewestFirst] = useState(true);
  const filteredInbox = conversations
    .filter(
      conversation =>
        inboxFilter === 'all' ||
        (inboxFilter === 'unread' && conversation.status === 'unread') ||
        (inboxFilter === 'unassigned' && conversation.assigneeId === null) ||
        (inboxFilter === 'archived' && conversation.status === 'closed'),
    )
    .filter(conversation => {
      const query = searchQuery.toLowerCase().trim();
      if (!query) {
        return true;
      }
      return (
        conversation.patientName.toLowerCase().includes(query) ||
        conversation.patientId.toLowerCase().includes(query) ||
        conversation.enquiryType.toLowerCase().includes(query)
      );
    });

  return (
    <div className="page">
      <Header3>Inbox</Header3>
      <div className="inbox-filters-header">
        <div className="inbox-filters">
          {inboxFilters.map(({ value, label }) => (
            <Button
              variant={inboxFilter === value ? 'default' : 'outlined'}
              size="xs"
              onClick={() => setInboxFilter(value)}
            >
              {label}
            </Button>
          ))}
        </div>
        <Button size="sm" leftIcon={Plus}>
          New chat
        </Button>
      </div>
      <div className="conversation-table-toolbar">
        <SearchBar
          placeholder="Search patient, ID or enquiry type..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.currentTarget.value)}
        />
        <Button variant="text" onClick={() => setSortNewestFirst(prev => !prev)}>
          Sort: Last updated {sortNewestFirst ? <MoveDown size={15} /> : <MoveUp size={15} />}
        </Button>
      </div>
      <table className="conversation-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Patient ID</th>
            <th>Enquiry type</th>
            <th>Last updated</th>
            <th>Assigned</th>
          </tr>
        </thead>
        <tbody>
          {filteredInbox.map(conversation => (
            <tr
              key={conversation.id}
              className={`conversation-row ${conversation.status === 'closed' ? 'archived' : ''}`}
              onClick={() => navigate(`/messages/${conversation.id}`)}
            >
              <td>
                <div className="patient-cell">
                  {conversation.status === 'unread' && <span className="unread-dot" />}
                  {conversation.patientName}
                </div>
              </td>
              <td>{conversation.patientId}</td>
              <td>
                <PillInput size="sm" label={conversation.enquiryType} />
              </td>
              <td>{conversation.updatedAt}</td>
              <td>{conversation.assigneeId === null ? 'Unassigned' : 'Assigned'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
