import '../Page.css';
import './Messages.css';
import { Plus, MoveDown, MoveUp } from 'lucide-react';
import { Header3 } from '../../components/typography/Header';
import { Button } from '../../components/buttons/Button';
import { PillInput } from '../../components/pill/Pill';
import { SearchBar } from '../../components/searchBar/SearchBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { conversations } from './mockData';

type InboxFilter = 'all' | 'unread' | 'unassigned' | 'archived';

const inboxFilters: { value: InboxFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'unread', label: 'Unread' },
  { value: 'unassigned', label: 'Unassigned' },
  { value: 'archived', label: 'Archived' },
];

export default function MessagesPage() {
  const navigate = useNavigate();

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
          onClear={() => setSearchQuery('')}
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
