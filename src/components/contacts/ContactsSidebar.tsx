import React from 'react';
import { Users, UserPlus, Filter, Plus } from 'lucide-react';
import AddUserModal from './AddUserModal';
import AddFilterModal from './AddFilterModal';

interface ContactsSidebarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ContactsSidebar: React.FC<ContactsSidebarProps> = ({ activeFilter, onFilterChange }) => {
  const [showAddUser, setShowAddUser] = React.useState(false);
  const [showAddFilter, setShowAddFilter] = React.useState(false);

  return (
    <>
      <div className="w-64 min-w-64 h-full bg-[#1C1C1E] border-r border-[#3A3A3C] overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">People</h2>
            <button className="p-1.5 hover:bg-[#2C2C2E] rounded-full cursor-pointer">
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="space-y-0.5">
            <div 
              className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer ${
                activeFilter === 'all-users' ? 'bg-[#2C2C2E] text-white' : 'text-gray-300 hover:text-white hover:bg-[#2C2C2E]'
              }`}
              onClick={() => onFilterChange('all-users')}
            >
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-3" />
                <span className="text-sm">All users</span>
              </div>
              <span className="text-xs">4</span>
            </div>

            <div 
              className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white hover:bg-[#2C2C2E] rounded-md cursor-pointer"
              onClick={() => setShowAddUser(true)}
            >
              <div className="flex items-center">
                <UserPlus className="w-4 h-4 mr-3" />
                <span className="text-sm">Add people</span>
              </div>
            </div>

            <div 
              className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white hover:bg-[#2C2C2E] rounded-md cursor-pointer"
              onClick={() => setShowAddFilter(true)}
            >
              <div className="flex items-center">
                <Filter className="w-4 h-4 mr-3" />
                <span className="text-sm">Add filter</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddUserModal isOpen={showAddUser} onClose={() => setShowAddUser(false)} />
      <AddFilterModal isOpen={showAddFilter} onClose={() => setShowAddFilter(false)} />
    </>
  );
};

export default ContactsSidebar;
