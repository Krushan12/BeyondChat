import React from 'react';
import Header from '../components/inbox/Header';
import Sidebar from '../components/layout/Sidebar';
import MainSidebar from '../components/layout/MainSidebar';
import ConversationList from '../components/inbox/ConversationList';
import ConversationView from '../components/inbox/ConversationView';
import DetailPanel from '../components/inbox/DetailPanel';

const InboxPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#1C1C1E]">
      <MainSidebar />
      <div className="flex flex-col flex-1 overflow-hidden ml-12"> {/* Adjusted margin for the smaller sidebar */}
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <ConversationList />
          <ConversationView />
          <DetailPanel />
        </div>
      </div>
    </div>
  );
};

export default InboxPage;