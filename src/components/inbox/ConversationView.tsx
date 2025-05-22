import React from 'react';
import { 
  Star, MoreHorizontal, Archive, Moon, Shield, 
  Zap, ChevronDown, Copy
} from 'lucide-react';
import { MessageBubble } from './MessageBubble';

const ConversationView: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#1C1C1E] text-white">
      <div className="flex items-center justify-between p-3 border-b border-[#3A3A3C]">
        <h2 className="text-lg font-medium text-white">Messenger</h2>
        
        <div className="flex items-center space-x-2">
          <button className="text-gray-300 hover:text-white transition-colors">
            <Star className="w-5 h-5" />
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <Archive className="w-5 h-5" />
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <Moon className="w-5 h-5" />
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <Shield className="w-5 h-5" />
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-[#1C1C1E]">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
            <span className="text-lg">🌎</span>
          </div>
          
          <MessageBubble isUser={false}>
            This is a demo message. It shows how a customer conversation from the Messenger will look in your Inbox. Conversations handled by Fin AI Agent will also appear here.
          </MessageBubble>
          
          <MessageBubble isUser={false}>
            Once a channel is installed, all conversations come straight to your Inbox, so you can route them to the right team.
          </MessageBubble>
          
          <div className="mt-4 text-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition shadow-sm">
              Install Messenger
            </button>
          </div>
          
          <div className="flex items-center justify-center mt-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm shadow-sm">
              B
            </div>
            <span className="ml-2 text-sm text-gray-300">5h</span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-[#3A3A3C] p-3 bg-[#1C1C1E]">
        <div className="flex items-center text-gray-300 mb-2">
          <button className="mr-2 text-gray-300 hover:text-white transition-colors">
            <Zap className="w-5 h-5" />
          </button>
          <span className="text-sm">Reply</span>
          <ChevronDown className="w-4 h-4 ml-1" />
        </div>
        
        <div className="border border-[#3A3A3C] rounded-md p-3 bg-[#2C2C2E]">
          <div className="text-gray-300 text-sm">
            Use Ctrl+K for shortcuts
          </div>
        </div>
        
        <div className="flex justify-between mt-3">
          <div className="flex space-x-2">
            <button className="w-8 h-8 flex items-center justify-center text-gray-300 border border-[#3A3A3C] rounded-md hover:bg-[#2C2C2E] transition-colors">
              <Copy className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-300 border border-[#3A3A3C] rounded-md hover:bg-[#2C2C2E] transition-colors">
              <div className="w-4 h-4 border-l-2 border-r-2 border-gray-300"></div>
            </button>
          </div>
          
          <div className="flex items-center">
            <button className="text-gray-300 hover:text-white transition-colors mr-2">
              <Zap className="w-5 h-5" />
            </button>
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm flex items-center hover:bg-blue-700 transition-colors shadow-sm">
              <span>Send</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationView;