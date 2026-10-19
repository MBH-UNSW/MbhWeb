type EnquiryType =
  'Emergency' | 'Appointment Making' | 'Supply Restock' | 'General Question' | 'Other';
type ConversationStatus = 'unread' | 'open' | 'closed';
type Sender = 'patient' | 'nurse';

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

interface Message {
  id: number;
  conversationId: number;
  sender: Sender;
  text: string;
  timestamp: string;
}

export const conversations: Conversation[] = [
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
    latestMessage: 'Thanks so much. All sorted now!',
    updatedAt: '2:03 am · 20 Aug 2026',
  },
  {
    id: 6,
    patientName: 'David Bowie',
    patientId: '19470801',
    enquiryType: 'Supply Restock',
    status: 'unread',
    assigneeId: null,
    latestMessage: "I'm running low on my prescribed supplies and would like to request a restock.",
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

export const messages: Message[] = [
  {
    id: 1,
    conversationId: 1,
    sender: 'patient',
    text: 'Hello! I need to book my appointment for 2 days',
    timestamp: '10:00 am · 1 Sep 2026',
  },
  {
    id: 2,
    conversationId: 2,
    sender: 'patient',
    text: 'I am feeling really tired today. Is everything OK?',
    timestamp: '5:15 pm · 30 Aug 2026',
  },
  {
    id: 3,
    conversationId: 3,
    sender: 'patient',
    text: 'Hi I feel sicly',
    timestamp: '12:09 pm · 26 Aug 2026',
  },
  {
    id: 4,
    conversationId: 3,
    sender: 'patient',
    text: 'sickly',
    timestamp: '12:10 pm · 26 Aug 2026',
  },
  {
    id: 5,
    conversationId: 3,
    sender: 'nurse',
    text: 'Can you tell me a little more about how you are feeling?',
    timestamp: '12:12 pm · 26 Aug 2026',
  },
  {
    id: 6,
    conversationId: 3,
    sender: 'nurse',
    text: 'John? Are you there?',
    timestamp: '12:20 pm · 26 Aug 2026',
  },
  {
    id: 7,
    conversationId: 3,
    sender: 'nurse',
    text: 'Would you like us to call emergency services?',
    timestamp: '12:30 pm · 26 Aug 2026',
  },
  {
    id: 8,
    conversationId: 3,
    sender: 'patient',
    text: 'I feel dizzy!!! Help me',
    timestamp: '12:35 pm · 26 Aug 2026',
  },
  {
    id: 9,
    conversationId: 4,
    sender: 'patient',
    text: 'Hi team. I need to organise a restock of my dressings.',
    timestamp: '3:25 pm · 25 Aug 2026',
  },
  {
    id: 10,
    conversationId: 4,
    sender: 'nurse',
    text: 'No problem, I can arrange that for you.',
    timestamp: '4:30 pm · 25 Aug 2026',
  },
  {
    id: 11,
    conversationId: 4,
    sender: 'nurse',
    text: 'I can confirm they have been ordered and will be with you by the end of the week.',
    timestamp: '4:56 pm · 25 Aug 2026',
  },
  {
    id: 12,
    conversationId: 4,
    sender: 'patient',
    text: 'Thanks for arranging new dressings for me.',
    timestamp: '8:28 am · 26 Aug 2026',
  },
  {
    id: 13,
    conversationId: 5,
    sender: 'patient',
    text: 'Hello. I am wondering when my next appointment is so I can let my GP know.',
    timestamp: '3:58 pm · 19 Aug 2026',
  },
  {
    id: 14,
    conversationId: 5,
    sender: 'nurse',
    text: 'Hi Jane, you are booked in to see Dr. Kim this coming Tuesday.',
    timestamp: '4:01 pm · 19 Aug 2026',
  },
  {
    id: 15,
    conversationId: 5,
    sender: 'patient',
    text: 'Oh no! can i reschedule?.',
    timestamp: '4:03 pm · 19 Aug 2026',
  },
  {
    id: 16,
    conversationId: 5,
    sender: 'patient',
    text: 'I am on a trip that day',
    timestamp: '4:04 pm · 19 Aug 2026',
  },
  {
    id: 17,
    conversationId: 5,
    sender: 'nurse',
    text: 'Of course you can! I can reschedule you for this Friday at 9:45am or Saturday at 11:10am.',
    timestamp: '4:10 pm · 19 Aug 2026',
  },
  {
    id: 18,
    conversationId: 5,
    sender: 'nurse',
    text: 'Did either of those times suit you?',
    timestamp: '4:11 pm · 19 Aug 2026',
  },
  {
    id: 19,
    conversationId: 5,
    sender: 'patient',
    text: 'Yes, Friday at 9:45am please!',
    timestamp: '4:13 pm · 19 Aug 2026',
  },
  {
    id: 20,
    conversationId: 5,
    sender: 'nurse',
    text: "No worries, I've rescheduled that one for you",
    timestamp: '4:20 pm · 19 Aug 2026',
  },
  {
    id: 21,
    conversationId: 5,
    sender: 'nurse',
    text: 'Was there anything else I can assist you with?',
    timestamp: '4:20 pm · 19 Aug 2026',
  },
  {
    id: 22,
    conversationId: 5,
    sender: 'patient',
    text: 'Nothing else',
    timestamp: '4:30 pm · 19 Aug 2026',
  },
  {
    id: 23,
    conversationId: 5,
    sender: 'patient',
    text: 'Thanks so much. All sorted now!',
    timestamp: '2:03 am · 20 Aug 2026',
  },
  {
    id: 24,
    conversationId: 6,
    sender: 'patient',
    text: "I'm running low on my prescribed supplies and would like to request a restock.",
    timestamp: '7:49 pm · 18 Aug 2026',
  },
  {
    id: 25,
    conversationId: 7,
    sender: 'patient',
    text: "I've been experiencing chest discomfort since this morning and wanted to check what I should do.",
    timestamp: '10:08 am · 16 Aug 2026',
  },
];
