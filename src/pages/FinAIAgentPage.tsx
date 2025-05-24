import * as React from 'react';
const { useState } = React;
import Header from '../components/inbox/Header';
import MainSidebar from '../components/layout/MainSidebar';
import FinAISidebar from '../components/fin-ai-agent/FinAISidebar';
import FinAIHeader from '../components/fin-ai-agent/FinAIHeader';
import FinAIContent from '../components/fin-ai-agent/FinAIContent';
import { MainView } from '../types';

const FinAIAgentPage: React.FC = () => {
  const [activeView, setActiveView] = useState<MainView>('fin-ai-agent');
  const [activeSection, setActiveSection] = useState('analyze');
  const handleNewContent = () => {
    // We'll implement the modal functionality later if needed
    console.log('New content button clicked');
  };

  return (
    <div className="flex h-screen bg-[#1C1C1E]">
      <MainSidebar onViewChange={setActiveView} activeView={activeView} />
      <div className="flex flex-col flex-1 overflow-hidden ml-12">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <FinAISidebar 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          <div className="flex flex-col flex-1 overflow-hidden">
            <FinAIHeader />
            <FinAIContent activeSection={activeSection} onNewContent={handleNewContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinAIAgentPage;
