import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Settings, ChevronRight, Layers } from 'lucide-react';

interface OutboundSidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const OutboundSidebar: React.FC<OutboundSidebarProps> = ({ activeView, onViewChange }) => {
  const navigate = useNavigate();

  return (
    <div className="w-64 min-w-64 h-full bg-[#1C1C1E] border-r border-[#3A3A3C] overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Outbound</h2>
        </div>

        <div className="space-y-0.5">
          <div 
            className={`flex items-center px-3 py-2 rounded-md cursor-pointer ${
              activeView === 'messages' 
                ? 'bg-[#2C2C2E] text-white' 
                : 'text-gray-300 hover:text-white hover:bg-[#2C2C2E]'
            }`}
            onClick={() => onViewChange('messages')}
          >
            <MessageCircle className="w-4 h-4 mr-3" />
            <span className="text-sm">Messages</span>
          </div>

          <div 
            className={`flex items-center px-3 py-2 rounded-md cursor-pointer ${
              activeView === 'series' 
                ? 'bg-[#2C2C2E] text-white' 
                : 'text-gray-300 hover:text-white hover:bg-[#2C2C2E]'
            }`}
            onClick={() => onViewChange('series')}
          >
            <Layers className="w-4 h-4 mr-3" />
            <span className="text-sm">Series</span>
          </div>

          <div 
            className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white hover:bg-[#2C2C2E] rounded-md cursor-pointer"
            onClick={() => navigate('/settings')}
          >
            <div className="flex items-center">
              <Settings className="w-4 h-4 mr-3" />
              <span className="text-sm">Settings</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutboundSidebar;
