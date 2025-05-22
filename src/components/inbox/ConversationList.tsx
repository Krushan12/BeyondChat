import React from 'react';
import { MoreHorizontal, Search, Plus } from 'lucide-react';
import clsx from 'clsx';

interface ConversationProps {
  avatar: string;
  title: string;
  message: string;
  time: string;
  isActive?: boolean;
}

const ConversationItem: React.FC<ConversationProps> = ({ 
  avatar, title, message, time, isActive = false 
}) => {
  return (
    <div 
      className={clsx(
        "px-3 py-3 border-b border-[#3A3A3C] cursor-pointer",
        isActive ? "bg-[#2C2C2E]" : "hover:bg-[#2C2C2E] hover:bg-opacity-70"
      )}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">
          <div className={`w-8 h-8 rounded-full bg-${avatar} flex items-center justify-center text-white shadow-sm`}>
            {avatar.charAt(0).toUpperCase()}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between">
            <p className="text-sm font-medium text-white truncate">{title}</p>
            <div className="flex items-center">
              <span className="text-xs text-gray-300">{time}</span>
              <MoreHorizontal className="w-4 h-4 ml-2 text-gray-300" />
            </div>
          </div>
          <p className="text-xs text-gray-300 truncate">{message}</p>
        </div>
      </div>
    </div>
  );
};

const ConversationList: React.FC = () => {
  return (
    <div className="w-72 h-full border-r border-[#3A3A3C] bg-[#1C1C1E] text-white flex flex-col">
      <div className="p-3 border-b border-[#3A3A3C] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-gray-200 rounded-sm"></div>
          <h2 className="text-sm font-medium text-white">On and On</h2>
        </div>
        <div className="flex items-center">
          <Search className="w-4 h-4 text-gray-300 mr-2" />
          <Plus className="w-4 h-4 text-gray-300" />
        </div>
      </div>
      
      <div className="flex items-center justify-between p-3 border-b border-[#3A3A3C]">
        <span className="text-sm font-medium text-white">4 Open</span>
        <div className="flex items-center">
          <span className="text-sm text-gray-300">Last activity</span>
          <svg className="w-4 h-4 ml-1 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <ConversationItem 
          avatar="blue-500" 
          title="Messenger · [Demo]" 
          message="Install Messenger" 
          time="5h" 
          isActive={true}
        />
        <ConversationItem 
          avatar="emerald-500" 
          title="Email · [Demo]" 
          message="This is a demo email. It shows..." 
          time="5h" 
        />
        <ConversationItem 
          avatar="green-500" 
          title="WhatsApp · [Demo]" 
          message="Set up WhatsApp or social..." 
          time="5h" 
        />
        <ConversationItem 
          avatar="purple-500" 
          title="Phone · [Demo]" 
          message="Set up phone or SMS" 
          time="5h" 
        />
      </div>
    </div>
  );
};

export default ConversationList;