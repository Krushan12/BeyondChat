import React from 'react';
import { ChevronDown, PlusCircle, Search } from 'lucide-react';
import clsx from 'clsx';

interface DetailSectionProps {
  title: string;
  children: React.ReactNode;
  isCollapsible?: boolean;
}

const DetailSection: React.FC<DetailSectionProps> = ({ 
  title, children, isCollapsible = true 
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  
  return (
    <div className="border-b border-[#3A3A3C] py-3">
      <div 
        className={clsx(
          "flex items-center justify-between",
          isCollapsible && "cursor-pointer"
        )}
        onClick={() => isCollapsible && setIsCollapsed(!isCollapsed)}
      >
        <h3 className="text-sm font-medium text-gray-200">{title}</h3>
        {isCollapsible && (
          <ChevronDown 
            className={clsx(
              "w-4 h-4 text-gray-300 transition-transform",
              isCollapsed && "transform rotate-180"
            )} 
          />
        )}
      </div>
      
      {!isCollapsed && (
        <div className="mt-2">
          {children}
        </div>
      )}
    </div>
  );
};

interface DetailItemProps {
  label: string;
  value: React.ReactNode;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-sm text-gray-300">{label}</span>
      <span className="text-sm text-white">{value}</span>
    </div>
  );
};

interface AddButtonProps {
  label: string;
}

const AddButton: React.FC<AddButtonProps> = ({ label }) => {
  return (
    <div className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer py-1 transition-colors">
      <PlusCircle className="w-4 h-4 mr-1" />
      <span className="text-sm">Add {label}</span>
    </div>
  );
};

const DetailPanel: React.FC = () => {
  return (
    <div className="w-72 h-full border-l border-[#3A3A3C] bg-[#1C1C1E] text-white p-4 overflow-y-auto">
      <div className="flex mb-4 border-b border-[#3A3A3C] pb-2">
        <button className="flex-1 text-center py-2 border-b-2 border-blue-600 text-blue-500">
          Details
        </button>
        <button className="flex-1 text-center py-2 text-gray-300 hover:text-white transition-colors">
          Copilot
        </button>
      </div>
      
      <DetailSection title="Assignee">
        <DetailItem 
          label="Assignee" 
          value={
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-gray-600 mr-1"></div>
              <span>On and On</span>
            </div>
          } 
        />
        <DetailItem 
          label="Team Inbox" 
          value={
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-gray-600 mr-1"></div>
              <span>Unassigned</span>
            </div>
          } 
        />
      </DetailSection>
      
      <DetailSection title="Links">
        <AddButton label="ticket" />
        <AddButton label="back-office tickets" />
        <AddButton label="side conversations" />
      </DetailSection>
      
      <DetailSection title="Conversation attributes">
        <DetailItem label="ID" value="215469095362912" />
        <DetailItem label="Brand" value="acfg" />
        <DetailItem label="Subject" value={<AddButton label="" />} />
        <DetailItem label="Language" value="English" />
        <DetailItem label="External ID" value={<AddButton label="" />} />
        <DetailItem label="Workspace phone number" value="—" />
        <DetailItem label="Copilot used" value="True" />
      </DetailSection>
      
      <DetailSection title="Topics">
        <AddButton label="topic" />
      </DetailSection>
      
      <DetailSection title="User data">
        <DetailItem label="Name" value="Messenger" />
        <DetailItem label="Company" value="[Demo]" />
        <DetailItem label="Type" value="User" />
        <DetailItem label="Location" value="—" />
        <DetailItem label="Owner" value="—" />
        <DetailItem label="Email" value="messenger@projectmap.com" />
        <DetailItem label="User id" value="7cef5202-9ceb-48d7-84f6-d404e8cc6d37" />
        <div className="mt-1">
          <AddButton label="See all" />
        </div>
      </DetailSection>
      
      <DetailSection title="Recent conversations">
        <div className="text-xs text-gray-300 italic py-1">No recent conversations</div>
      </DetailSection>
      
      <DetailSection title="User notes">
        <AddButton label="a note" />
      </DetailSection>
      
      <DetailSection title="User tags">
        <div className="text-xs text-gray-300 italic py-1">No user tags</div>
      </DetailSection>
      
      <DetailSection title="User segments">
        <div className="flex space-x-2 py-1">
          <span className="px-2 py-1 bg-[#2C2C2E] text-gray-200 text-xs rounded">Active</span>
          <span className="px-2 py-1 bg-[#2C2C2E] text-gray-200 text-xs rounded">New</span>
        </div>
      </DetailSection>
      
      <DetailSection title="Recent page views">
        <div className="text-xs text-gray-300 italic py-1">No page views</div>
      </DetailSection>
      
      <DetailSection title="Similar conversations">
        <div className="flex items-center mt-1">
          <Search className="w-4 h-4 text-gray-300 mr-2" />
          <span className="text-sm text-gray-300">Search</span>
        </div>
      </DetailSection>
      
      <DetailSection title="Edit apps">
        <div className="text-xs text-gray-300 italic py-1">No apps available</div>
      </DetailSection>
    </div>
  );
};

export default DetailPanel;