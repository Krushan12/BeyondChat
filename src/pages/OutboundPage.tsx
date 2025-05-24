import React from 'react';
import MainSidebar from '../components/layout/MainSidebar';
import OutboundSidebar from '../components/outbound/OutboundSidebar';
import MessagesView from '../components/outbound/MessagesView';
import SeriesView from '../components/outbound/SeriesView';
import { MainView } from '../types';

const OutboundPage: React.FC = () => {
  const [activeView, setActiveView] = React.useState<MainView>('outbound');
  const [activeOutboundView, setActiveOutboundView] = React.useState('messages');

  const renderContent = () => {
    switch (activeOutboundView) {
      case 'messages':
        return <MessagesView />;
      case 'series':
        return <SeriesView />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-[#1C1C1E] overflow-hidden">
      <MainSidebar onViewChange={setActiveView} activeView={activeView} />
      <div className="flex flex-1 ml-12">
        <OutboundSidebar 
          activeView={activeOutboundView} 
          onViewChange={setActiveOutboundView} 
        />
        <div className="flex-1 overflow-hidden flex flex-col">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default OutboundPage;
