import React from 'react';
import Header from '../components/inbox/Header';
import MainSidebar from '../components/layout/MainSidebar';
import { MainView } from '../types';

const SettingsPage: React.FC = () => {
  const [activeView, setActiveView] = React.useState<MainView>('settings');

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
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-white mb-2">Settings</h3>
              <p className="text-sm text-gray-400 max-w-md">
                Configure your workspace settings and preferences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
