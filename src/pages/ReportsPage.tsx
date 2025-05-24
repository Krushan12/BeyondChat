import React from 'react';
import MainSidebar from '../components/layout/MainSidebar';
import ReportsSidebar from '../components/reports/ReportsSidebar';
import ReportsHeader from '../components/reports/ReportsHeader';
import AllReportsView from '../components/reports/AllReportsView';
import OverviewView from '../components/reports/OverviewView';
import YourReportsView from '../components/reports/YourReportsView';
import { MainView } from '../types';

const ReportsPage: React.FC = () => {
  const [activeView, setActiveView] = React.useState<MainView>('reports');
  const [activeReportView, setActiveReportView] = React.useState('overview');
  const [activeTab, setActiveTab] = React.useState('intercom');

  const handleReportViewChange = (view: string) => {
    if (view === 'your-reports') {
      setActiveReportView('all-reports');
      setActiveTab('your');
    } else {
      setActiveReportView(view);
    }
  };

  const renderContent = () => {
    if (activeReportView === 'overview') {
      return <OverviewView />;
    }
    
    if (activeReportView === 'all-reports') {
      if (activeTab === 'your') {
        return <YourReportsView />;
      }
      return <AllReportsView />;
    }

    return null;
  };

  return (
    <div className="flex h-screen bg-[#1C1C1E] overflow-hidden">
      <MainSidebar onViewChange={setActiveView} activeView={activeView} />
      <div className="flex flex-1 ml-12">
        <ReportsSidebar 
          activeView={activeReportView}
          activeTab={activeTab}
          onViewChange={handleReportViewChange} 
        />
        <div className="flex-1 overflow-hidden flex flex-col">
          <ReportsHeader 
            view={activeReportView} 
            onTabChange={setActiveTab}
            activeTab={activeTab}
          />
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
