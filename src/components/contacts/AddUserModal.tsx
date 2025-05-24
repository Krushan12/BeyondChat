import React from 'react';
import { X, Upload, FileText, Mail } from 'lucide-react';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#2C2C2E] rounded-lg w-[500px] max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-4 border-b border-[#3A3A3C]">
          <h2 className="text-lg font-semibold text-white">Add people</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="space-y-4">
            <button className="w-full p-4 rounded-md bg-[#3A3A3C] hover:bg-[#4A4A4C] flex items-center text-left">
              <Upload className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <div className="text-white font-medium">Import from CSV</div>
                <div className="text-sm text-gray-400">Upload a spreadsheet of users</div>
              </div>
            </button>
            
            <button className="w-full p-4 rounded-md bg-[#3A3A3C] hover:bg-[#4A4A4C] flex items-center text-left">
              <FileText className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <div className="text-white font-medium">Add manually</div>
                <div className="text-sm text-gray-400">Enter user details one by one</div>
              </div>
            </button>
            
            <button className="w-full p-4 rounded-md bg-[#3A3A3C] hover:bg-[#4A4A4C] flex items-center text-left">
              <Mail className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <div className="text-white font-medium">Invite by email</div>
                <div className="text-sm text-gray-400">Send email invitations to users</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
