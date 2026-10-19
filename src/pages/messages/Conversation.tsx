import '../Page.css';
import './Conversation.css';
import { useParams } from 'react-router-dom';
import { conversations as initialConversations, messages } from './mockData';
import { Header3 } from '../../components/typography/Header';
import { PillInput } from '../../components/pill/Pill';
import { Body1 } from '../../components/typography/Body';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { Button } from '../../components/buttons/Button';
import { useState } from 'react';
import { Avatar } from '../../components/avatar/Avatar';
import { IconButton } from '../../components/buttons/IconButton';
import { Paperclip, Send } from 'lucide-react';
import { Input } from '../../components/input/Input';

type Status = 'online' | 'offline';

export default function ConversationPage() {
  const { conversationId } = useParams();
  const [conversations, setConversations] = useState(initialConversations);
  const conversation = conversations.find(c => c.id.toString() === conversationId);

  const userId = '888';

  const status: Status = Math.random() > 0.5 ? 'online' : 'offline';
  const current = new Date();
  const yesterday = new Date(current);
  yesterday.setDate(current.getDate() - 1);
  const lastActiveDay = status === 'online' || Math.random() > 0.5 ? current : yesterday;
  const adjustedHour = (lastActiveDay.getHours() - 5 + 24) % 24;
  const adjustedMinutes = String((lastActiveDay.getMinutes() - 23 + 60) % 60).padStart(2, '0');
  const time = `${adjustedHour}:${adjustedMinutes}`;
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  };
  const formattedDate = lastActiveDay.toLocaleDateString('en-AU', options).replace(/,/, '');
  const lastActiveTime = lastActiveDay === current ? `Today, ${time}` : `${formattedDate}, ${time}`;

  if (!conversation) {
    // fix this
    return <div>Conversation not found</div>;
  }

  const patientFirstInitial = conversation.patientName[0];
  const patientSurname = conversation.patientName.split(' ').at(-1);
  const patientInitials = `${patientFirstInitial}${patientSurname![0]}`;

  const conversationMessages = messages.filter(
    message => message.conversationId === conversation.id,
  );

  const assignToMe = (userId: string) => {
    setConversations(prev =>
      prev.map(existingConversation =>
        existingConversation.id === conversation.id
          ? { ...existingConversation, assigneeId: userId }
          : existingConversation,
      ),
    );
  };

  return (
    <>
      <PageTitle
        title={`Chat: ${patientFirstInitial}. ${patientSurname} (#${conversation.patientId})`}
      />
      <div className="page">
        <div className="conversation-header-wrapper">
          <div className="conversation-header-content">
            <div className="conversation-header">
              <Header3>Chat with {conversation.patientName}</Header3>
              <PillInput size="md" label={conversation.enquiryType} />
            </div>
            <div className="conversation-subheader">
              <Body1>Patient ID: {conversation.patientId}</Body1>
              <div className="active-status">
                <span className={`active-dot ${status}`} />
                <Body1>{status === 'online' ? 'Online' : lastActiveTime}</Body1>
              </div>
            </div>
          </div>
          {conversation.assigneeId === null && (
            <Button size="lg" onClick={() => assignToMe(userId)}>
              Assign to me
            </Button>
          )}
          {conversation.assigneeId === userId && (
            <Button variant="outlined" size="lg" disabled>
              Assigned to you
            </Button>
          )}
          {conversation.assigneeId !== null && conversation.assigneeId !== userId && (
            <Button variant="outlined" size="lg" disabled>
              Assigned to another
            </Button>
          )}
        </div>
        <div className="conversation-wrapper">
          {conversationMessages.map(message => (
            <div key={message.id} className={`message-bubble-wrapper ${message.sender}`}>
              {message.sender === 'patient' && (
                <Avatar type="initials" size="md" initials={patientInitials} />
              )}
              <div>
                <div className={`message-bubble ${message.sender}`}>{message.text}</div>
                <div className="message-timestamp">{message.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={`conversation-footer-wrapper ${conversation.assigneeId}`}>
          <IconButton icon={Paperclip} variant="outlined"></IconButton>
          <Button variant="outlined">Mark as resolved</Button>
          <Input placeholder="Send a message" variant="single-line"></Input>
          <IconButton icon={Send}></IconButton>
        </div>
      </div>
    </>
  );
}
