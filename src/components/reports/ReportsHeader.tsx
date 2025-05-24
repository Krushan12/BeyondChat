import React from 'react';
import { Calendar } from 'lucide-react';

interface TabProps {
  active: boolean;
  label: string;
  count?: number;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ active, label, count, onClick }) => (
  <div 
    onClick={onClick}
    className={`px-4 py-2 cursor-pointer ${
      active 
        ? 'text-white border-b-2 border-white' 
        : 'text-gray-400 hover:text-gray-200'
    }`}
  >
    <div className="flex items-center space-x-1">
      <span>{label}</span>
      {count !== undefined && (
        <span className="text-xs">({count})</span>
      )}
    </div>
  </div>
);

interface ReportsHeaderProps {
  view: string;
  onTabChange: (tab: string) => void;
  activeTab?: string;
}

const ReportsHeader: React.FC<ReportsHeaderProps> = ({ view, onTabChange, activeTab = 'intercom' }) => {
  if (view === 'overview') {
    return (
      <div className="border-b border-[#3A3A3C]">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-white">Overview</h1>
            <div className="flex items-center space-x-2 bg-[#2C2C2E] rounded-md px-3 py-1.5">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-200">Last 30 days</span>
            </div>
          </div>
          <button className="text-sm text-gray-200 hover:text-white bg-[#2C2C2E] px-3 py-1.5 rounded-md">
            Add filter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-[#3A3A3C]">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-white">All reports</h1>
          <button className="px-3 py-1.5 text-sm text-white bg-[#2C2C2E] rounded-md hover:bg-[#3A3A3C]">
            + New report
          </button>
        </div>
      </div>
      <div className="flex px-6">
        <Tab 
          label="Shared with you" 
          count={0} 
          active={activeTab === 'shared'} 
          onClick={() => onTabChange('shared')} 
        />
        <Tab 
          label="Your reports" 
          count={0} 
          active={activeTab === 'your'} 
          onClick={() => onTabChange('your')} 
        />
        <Tab 
          label="Intercom reports" 
          count={23} 
          active={activeTab === 'intercom'} 
          onClick={() => onTabChange('intercom')} 
        />
      </div>
    </div>
  );
};

export default ReportsHeader;
