import * as React from 'react';
import { 
  BarChart, Briefcase, FileText, Settings, 
  Plus, ChevronRight, ChevronDown, MessageCircle, Mail, Phone,
  TrendingUp, LineChart, MessageSquare, HelpCircle, BookOpen, Lightbulb
} from 'lucide-react';
import clsx from 'clsx';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  hasDropdown?: boolean;
  isOpen?: boolean;
  subItems?: Array<{icon: React.ReactNode; label: string; onClick?: () => void;}>
  showLabels?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  isActive = false,
  onClick,
  hasDropdown = false,
  isOpen = false,
  subItems = [],
  showLabels = true
}) => {
  return (
    <>
      <div 
        className={clsx(
          "flex items-center py-3 cursor-pointer relative group",
          isActive ? "bg-[#2C2C2E] text-white rounded-l-md" : "text-gray-200 hover:text-white"
        )}
        onClick={onClick}
      >
        <div className="w-12 flex justify-center">
          <div className={clsx(
            "w-5 h-5 relative",
            isActive && "text-white"
          )}>
            {icon}
          </div>
        </div>
        
        {/* Label with smooth transition */}
        <span className={clsx(
          "text-sm font-medium whitespace-nowrap transition-all duration-500 ease-in-out overflow-hidden flex-1",
          showLabels ? "opacity-100 max-w-[120px] ml-1" : "opacity-0 max-w-0 ml-0",
          isActive && "font-semibold"
        )}>
          {label}
        </span>
        
        {hasDropdown && showLabels && (
          <div className="mr-3 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <ChevronDown className="w-4 h-4" />
          </div>
        )}
      </div>
      
      {/* Dropdown items */}
      {hasDropdown && isOpen && showLabels && (
        <div className="ml-12 space-y-1 mt-1 mb-2">
          {subItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center py-2 text-sm text-gray-400 hover:text-white cursor-pointer"
              onClick={item.onClick}
            >
              <div className="w-4 h-4 mr-2">
                {item.icon}
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

interface FinAISidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const FinAISidebar: React.FC<FinAISidebarProps> = ({ 
  activeSection,
  onSectionChange
}) => {
  // Initialize all sections as closed by default
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({
    analyze: false,
    train: false,
    deploy: false
  });

  const toggleSection = (section: string) => {
    // Close all sections first, then toggle the clicked section
    setOpenSections(prev => ({
      analyze: false,
      train: false,
      deploy: false,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="w-56 border-r border-[#3A3A3C] bg-[#1C1C1E] overflow-y-auto">
      <div className="p-4">
        <div className="flex flex-col space-y-2">
          <SidebarItem 
            icon={<BarChart className="w-full h-full" />} 
            label="Analyze" 
            isActive={activeSection.startsWith('analyze')}
            onClick={() => toggleSection('analyze')}
            hasDropdown={true}
            isOpen={openSections.analyze}
            showLabels={true}
            subItems={[
              {
                icon: <TrendingUp className="w-full h-full" />,
                label: "Performance",
                onClick: () => onSectionChange('analyze-performance')
              },
              {
                icon: <LineChart className="w-full h-full" />,
                label: "AI Insights",
                onClick: () => onSectionChange('analyze-insights')
              },
              {
                icon: <MessageSquare className="w-full h-full" />,
                label: "Conversations",
                onClick: () => onSectionChange('analyze-conversations')
              },
              {
                icon: <HelpCircle className="w-full h-full" />,
                label: "Unresolved questions",
                onClick: () => onSectionChange('analyze-unresolved')
              }
            ]}
          />
          <SidebarItem 
            icon={<Briefcase className="w-full h-full" />} 
            label="Train" 
            isActive={activeSection.startsWith('train')}
            onClick={() => toggleSection('train')}
            hasDropdown={true}
            isOpen={openSections.train}
            showLabels={true}
            subItems={[
              {
                icon: <FileText className="w-full h-full" />,
                label: "Content",
                onClick: () => onSectionChange('train-content')
              },
              {
                icon: <BookOpen className="w-full h-full" />,
                label: "Guidance",
                onClick: () => onSectionChange('train-guidance')
              },
              {
                icon: <Briefcase className="w-full h-full" />,
                label: "Tasks",
                onClick: () => onSectionChange('train-tasks')
              },
              {
                icon: <Lightbulb className="w-full h-full" />,
                label: "Suggestions",
                onClick: () => onSectionChange('train-suggestions')
              }
            ]}
          />
          <SidebarItem 
            icon={<FileText className="w-full h-full" />} 
            label="Test" 
            isActive={activeSection === 'test'}
            onClick={() => onSectionChange('test')}
            showLabels={true}
          />
          <SidebarItem 
            icon={<Settings className="w-full h-full" />} 
            label="Deploy" 
            isActive={activeSection.startsWith('deploy')}
            onClick={() => toggleSection('deploy')}
            hasDropdown={true}
            isOpen={openSections.deploy}
            showLabels={true}
            subItems={[
              {
                icon: <MessageCircle className="w-full h-full" />,
                label: "Chat",
                onClick: () => onSectionChange('deploy-chat')
              },
              {
                icon: <Mail className="w-full h-full" />,
                label: "Email",
                onClick: () => onSectionChange('deploy-email')
              },
              {
                icon: <Phone className="w-full h-full" />,
                label: "Phone",
                onClick: () => onSectionChange('deploy-phone')
              }
            ]}
          />
          <SidebarItem 
            icon={<Settings className="w-full h-full" />} 
            label="Fin settings" 
            isActive={activeSection === 'settings'}
            onClick={() => onSectionChange('settings')}
            showLabels={true}
          />
        </div>
      </div>

      <div className="mt-6 border-t border-[#3A3A3C] pt-4">
        <div className="px-3 mb-2">
          <div className="text-xs text-gray-500 font-medium">WORKFLOWS</div>
        </div>
        <div className="flex items-center py-2 px-3 text-gray-400 hover:text-white cursor-pointer">
          <div className="w-5 h-5 mr-3">
            <BarChart className="w-full h-full" />
          </div>
          <span className="text-sm font-medium">Workflows</span>
        </div>
        <div className="flex items-center py-2 px-3 text-gray-400 hover:text-white cursor-pointer">
          <div className="w-5 h-5 mr-3">
            <Plus className="w-full h-full" />
          </div>
          <span className="text-sm font-medium">Simple automations</span>
          <ChevronRight className="w-4 h-4 ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default FinAISidebar;
