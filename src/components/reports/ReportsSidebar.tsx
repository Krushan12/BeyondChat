import React from 'react';
import { 
  Grid, 
  BarChart2, 
  User, 
  Heart, 
  Lightbulb, 
  Download,
  Bot,
  Users,
  MessageCircle,
  ChevronRight,
  Plus
} from 'lucide-react';

interface ReportsSidebarProps {
  activeView: string;
  activeTab: string;
  onViewChange: (view: string) => void;
}

const ReportsSidebar: React.FC<ReportsSidebarProps> = ({ activeView, activeTab, onViewChange }) => {
  return (
    <div className="w-64 min-w-64 h-full bg-[#1C1C1E] border-r border-[#3A3A3C] overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Reports</h2>
          <button className="p-1.5 hover:bg-[#2C2C2E] rounded-full cursor-pointer">
            <Plus className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="space-y-0.5">
          <div 
            className={`flex items-center px-3 py-2 rounded-md cursor-pointer ${
              activeView === 'overview' 
                ? 'bg-[#2C2C2E] text-white' 
                : 'text-gray-300 hover:text-white hover:bg-[#2C2C2E]'
            }`}
            onClick={() => onViewChange('overview')}
          >
            <Grid className="w-4 h-4 mr-3" />
            <span className="text-sm">Overview</span>
          </div>

          <div 
            className={`flex items-center px-3 py-2 rounded-md cursor-pointer ${
              activeView === 'all-reports' && activeTab === 'intercom'
                ? 'bg-[#2C2C2E] text-white' 
                : 'text-gray-300 hover:text-white hover:bg-[#2C2C2E]'
            }`}
            onClick={() => onViewChange('all-reports')}
          >
            <BarChart2 className="w-4 h-4 mr-3" />
            <span className="text-sm">All reports</span>
          </div>

          <div 
            className={`flex items-center px-3 py-2 rounded-md cursor-pointer ${
              activeView === 'all-reports' && activeTab === 'your'
                ? 'bg-[#2C2E2E] text-white' 
                : 'text-gray-300 hover:text-white hover:bg-[#2C2C2E]'
            }`}
            onClick={() => onViewChange('your-reports')}
          >
            <User className="w-4 h-4 mr-3" />
            <span className="text-sm">Your reports</span>
          </div>

          <div className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white cursor-pointer">
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-3" />
              <span className="text-sm">Your favorites</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </div>

          <div className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white cursor-pointer">
            <div className="flex items-center">
              <Lightbulb className="w-4 h-4 mr-3" />
              <span className="text-sm">Conversation topics</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </div>

          <div className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white cursor-pointer">
            <div className="flex items-center">
              <Download className="w-4 h-4 mr-3" />
              <span className="text-sm">Dataset export</span>
            </div>
          </div>

          <div className="my-4 border-t border-[#2C2C2E]" />

          <div className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white cursor-pointer">
            <div className="flex items-center">
              <Bot className="w-4 h-4 mr-3" />
              <span className="text-sm">AI & Automation</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </div>

          <div className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white cursor-pointer">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-3" />
              <span className="text-sm">Human support</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </div>

          <div className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white cursor-pointer">
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-3" />
              <span className="text-sm">Proactive</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsSidebar;
