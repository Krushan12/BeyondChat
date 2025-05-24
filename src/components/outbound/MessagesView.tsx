import React from 'react';
import { Plus, MessageCircle } from 'lucide-react';

const MessagesView: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b border-[#3A3A3C] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-white">Messages</h1>
            <button className="text-sm text-gray-400 hover:text-white">Learn</button>
          </div>
          <button className="px-3 py-1.5 bg-white text-black rounded-md text-sm font-medium hover:bg-gray-100 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            New message
          </button>
        </div>
      </div>
      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="mx-auto w-12 h-12 bg-[#2C2C2E] rounded-full flex items-center justify-center mb-4">
            <MessageCircle className="w-6 h-6 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No messages yet</h3>
          <p className="text-gray-400 text-sm mb-6">
            Create messages to communicate with your customers at scale
          </p>
          <button className="px-4 py-2 bg-white text-black rounded-md font-medium text-sm hover:bg-gray-100 flex items-center justify-center mx-auto">
            <Plus className="w-4 h-4 mr-2" />
            New message
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagesView;
