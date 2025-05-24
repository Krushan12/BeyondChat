import React from 'react';
import { Search, Plus, Filter, ChevronDown, Users } from 'lucide-react';

const ContactsHeader: React.FC = () => {
  return (
    <div className="border-b border-[#3A3A3C]">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-white">All users</h1>
          <div className="flex items-center space-x-2">
            <button className="text-sm text-gray-300 hover:text-white px-2 py-1">
              Learn
            </button>
            <button className="text-sm bg-white text-black rounded-md px-3 py-1.5 font-medium flex items-center">
              <ChevronDown className="w-4 h-4 ml-2" />
              New users or leads
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-[#2C2C2E] text-white rounded-md px-3 py-1.5">
            <Users className="w-4 h-4 mr-2" />
            <span className="text-sm">Users</span>
          </div>
          <button className="flex items-center text-gray-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-[#2C2C2E]">
            <Plus className="w-4 h-4 mr-2" />
            <span className="text-sm">Add filter</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-2 bg-[#2C2C2E]">
        <div className="flex items-center">
          <span className="text-sm text-white">4 users</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1.5 text-sm text-white bg-[#3A3A3C] rounded-md hover:bg-[#4A4A4C]">
            New message
          </button>
          <button className="px-3 py-1.5 text-sm text-white bg-[#3A3A3C] rounded-md hover:bg-[#4A4A4C]">
            Add tag
          </button>
          <button className="px-3 py-1.5 text-sm text-white bg-[#3A3A3C] rounded-md hover:bg-[#4A4A4C]">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactsHeader;
