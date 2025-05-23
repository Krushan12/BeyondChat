import React from 'react';
import Header from '../components/inbox/Header';
import MainSidebar from '../components/layout/MainSidebar';
import { MainView } from '../types';

const KnowledgePage: React.FC = () => {
  const [activeView, setActiveView] = React.useState<MainView>('knowledge');

  return (
    <div className="flex h-screen bg-[#1C1C1E]">
      <MainSidebar onViewChange={setActiveView} activeView={activeView} />
      <div className="flex flex-col flex-1 overflow-hidden ml-12">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 flex items-center justify-center bg-[#1C1C1E]">
            <div className="text-center p-6">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-[#2C2C2E] flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-white mb-2">Knowledge Base</h3>
              <p className="text-sm text-gray-400 max-w-md">
                Access and manage your company's knowledge resources
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgePage;
