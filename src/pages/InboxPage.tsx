import React, { useState } from 'react';
import Header from '../components/inbox/Header';
import Sidebar from '../components/layout/Sidebar';
import MainSidebar from '../components/layout/MainSidebar';
import ConversationList from '../components/inbox/ConversationList';
import ConversationView from '../components/inbox/ConversationView';
import DetailPanel from '../components/inbox/DetailPanel';

// Define conversation types
export type ConversationType = 'messenger' | 'email' | 'whatsapp' | 'phone';

// Define conversation interface
export interface Conversation {
  id: string;
  type: ConversationType;
  title: string;
  subtitle: string;
  time: string;
  avatar: string;
  unread?: boolean;
  lastActivity?: Date;
}

// Define the possible views
type MainView = 'inbox' | 'fin-ai-agent' | 'knowledge' | 'reports' | 'outbound' | 'contacts' | 'get-set-up' | 'search' | 'settings';

const InboxPage: React.FC = () => {
  const [activeView, setActiveView] = useState<MainView>('inbox');
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  
  // Sample conversations data with realistic content
  const initialConversations: Conversation[] = [
    {
      id: '1',
      type: 'messenger',
      title: 'Messenger · [Demo]',
      subtitle: 'Install Messenger to chat with website visitors in real-time',
      time: '11:45',
      avatar: 'blue-500',
      unread: true,
      lastActivity: new Date(new Date().setHours(new Date().getHours() - 1))
    },
    {
      id: '2',
      type: 'email',
      title: 'Email · [Demo]',
      subtitle: 'New support request: "How do I integrate with Shopify?"',
      time: '10:32',
      avatar: 'emerald-500',
      unread: true,
      lastActivity: new Date(new Date().setHours(new Date().getHours() - 3))
    },
    {
      id: '3',
      type: 'whatsapp',
      title: 'WhatsApp · [Demo]',
      subtitle: 'Customer asking about order status #WA-1234',
      time: 'Yesterday',
      avatar: 'green-500',
      unread: false,
      lastActivity: new Date(new Date().setDate(new Date().getDate() - 1))
    },
    {
      id: '4',
      type: 'phone',
      title: 'Phone · [Demo]',
      subtitle: 'Missed call from +1 (555) 123-4567',
      time: 'May 20',
      avatar: 'purple-500',
      unread: false,
      lastActivity: new Date(new Date().setDate(new Date().getDate() - 3))
    }
  ];
  
  // State to manage conversations
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);

  // We're now using the state-managed conversations

  // Handle conversation selection and mark as read
  const handleConversationSelect = (conversation: Conversation) => {
    // If the conversation is unread, mark it as read
    if (conversation.unread) {
      // Find the conversation in the array and update it
      const updatedConversations = conversations.map(conv => {
        if (conv.id === conversation.id) {
          return { ...conv, unread: false };
        }
        return conv;
      });
      
      // Update the conversations array with the read status
      setConversations(updatedConversations);
      
      // Update the selected conversation with read status
      setSelectedConversation({ ...conversation, unread: false });
    } else {
      setSelectedConversation(conversation);
    }
  };

  // Set default selected conversation if none is selected
  React.useEffect(() => {
    if (!selectedConversation && conversations.length > 0) {
      setSelectedConversation(conversations[0]);
    }
  }, [conversations, selectedConversation]);

  // Render different content based on the active view
  const renderContent = () => {
    switch (activeView) {
      case 'inbox':
        return (
          <>
            <Sidebar />
            <ConversationList 
              conversations={conversations}
              selectedConversationId={selectedConversation?.id}
              onSelectConversation={handleConversationSelect}
            />
            <ConversationView conversation={selectedConversation} />
            <DetailPanel />
          </>
        );
      case 'fin-ai-agent':
        return (
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Fin AI Agent</h1>
          </div>
        );
      case 'knowledge':
        return (
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Knowledge</h1>
          </div>
        );
      case 'reports':
        return (
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Reports</h1>
          </div>
        );
      case 'outbound':
        return (
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Outbound</h1>
          </div>
        );
      case 'contacts':
        return (
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Contacts</h1>
          </div>
        );
      case 'get-set-up':
        return (
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Get Set Up</h1>
          </div>
        );
      case 'search':
        return (
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Search</h1>
          </div>
        );
      case 'settings':
        return (
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Settings</h1>
          </div>
        );
      default:
        return (
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Select a view from the sidebar</h1>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#1C1C1E]">
      <MainSidebar onViewChange={setActiveView} activeView={activeView} />
      <div className="flex flex-col flex-1 overflow-hidden ml-12">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default InboxPage;