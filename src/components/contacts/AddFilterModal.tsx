import React from 'react';
import { X, Search } from 'lucide-react';

interface AddFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddFilterModal: React.FC<AddFilterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#2C2C2E] rounded-lg w-[500px] max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-4 border-b border-[#3A3A3C]">
          <h2 className="text-lg font-semibold text-white">Add filter</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search filters..."
              className="w-full pl-10 pr-4 py-2 bg-[#3A3A3C] border border-[#4A4A4C] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
            />
          </div>
          
          <div className="space-y-2">
            <div className="p-3 hover:bg-[#3A3A3C] rounded-md cursor-pointer">
              <div className="text-white font-medium">Location</div>
              <div className="text-sm text-gray-400">City, country, or timezone</div>
            </div>
            <div className="p-3 hover:bg-[#3A3A3C] rounded-md cursor-pointer">
              <div className="text-white font-medium">Last seen</div>
              <div className="text-sm text-gray-400">When users were last active</div>
            </div>
            <div className="p-3 hover:bg-[#3A3A3C] rounded-md cursor-pointer">
              <div className="text-white font-medium">Created at</div>
              <div className="text-sm text-gray-400">When users signed up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFilterModal;
