import * as React from 'react';
import { Plus, ChevronDown } from 'lucide-react';

interface ContentItemProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  beta?: boolean;
  onClick?: () => void;
}

const ContentItem: React.FC<ContentItemProps> = ({ 
  icon, 
  title, 
  description,
  beta,
  onClick 
}) => {
  return (
    <div 
      className="flex items-center py-3 hover:bg-[#2C2C2E] cursor-pointer transition-colors"
      onClick={onClick}
    >
      <div className="w-5 h-5 mr-2 text-gray-400">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <h3 className="text-sm font-medium text-white">{title}</h3>
          {beta && (
            <span className="ml-2 text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded-sm">Beta</span>
          )}
        </div>
        {description && (
          <p className="text-xs text-gray-400 mt-0.5">{description}</p>
        )}
      </div>
      <div className="text-gray-400">
        <Plus className="w-4 h-4" />
      </div>
    </div>
  );
};

interface FinAIContentProps {
  activeSection: string;
  onNewContent?: () => void;
}

const FinAIContent: React.FC<FinAIContentProps> = ({ activeSection, onNewContent }) => {
  // We'll implement different views based on activeSection in the future
  // Content for the "Content" section
  const renderContentSection = () => {
    return (
      <div className="flex flex-col h-full bg-[#1C1C1E]">
        <div className="flex items-center justify-between px-6 pt-5 pb-3">
          <h3 className="text-white text-base font-medium">Content</h3>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-white bg-[#2C2C2E] rounded-md px-3 py-1.5 cursor-pointer">
              <span className="text-sm mr-1">Learn</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            
            <button 
              onClick={onNewContent}
              className="flex items-center text-white bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-1.5"
            >
              <Plus className="w-4 h-4 mr-1" />
              <span className="text-sm">New content</span>
            </button>
          </div>
        </div>
        
        <div className="px-6">
          <div className="mb-6">
            <div className="flex items-center">
              <div className="w-5 h-5 mr-2 text-gray-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-white">Public articles <span className="text-gray-400">(0 of 1)</span></h3>
              <div className="ml-auto">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </div>
            </div>
            <div className="ml-7 mt-1 text-xs text-gray-400">
              Not enabled
            </div>
          </div>
          
          <div className="border-t border-[#3A3A3C] pt-4 pb-2">
            <h3 className="text-sm font-medium text-white mb-3">Add content</h3>
            
            <div className="space-y-3">
              <ContentItem 
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                } 
                title="Sync content from a website" 
              />
              
              <ContentItem 
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 7v8a2 2 0 0 0 2 2h6M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2M15 11h.01" />
                  </svg>
                } 
                title="Import/sync knowledge base from Zendesk" 
              />
              
              <ContentItem 
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
                  </svg>
                } 
                title="Content from conversations" 
                beta={true}
              />
              
              <ContentItem 
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                } 
                title="Create a new article" 
              />
              
              <ContentItem 
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                } 
                title="Create a snippet" 
              />
              
              <ContentItem 
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                } 
                title="Upload a document" 
              />
              
              <ContentItem 
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                } 
                title="Add a Custom Answer" 
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Content for the Preview section
  const renderPreviewSection = () => {
    return (
      <div className="flex flex-col h-full bg-[#1C1C1E]">
        <div className="px-6 py-3 border-b border-[#3A3A3C] flex justify-between items-center">
          <h3 className="text-white text-base font-medium">Preview</h3>
          <button className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1 flex items-center justify-center h-full text-center px-6">
          <div>
            <p className="text-gray-400 text-sm">
              Add content to test Fin. Then ask it questions, to preview its responses.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="w-[65%] border-r border-[#3A3A3C]">
        {renderContentSection()}
      </div>
      <div className="w-[35%]">
        {renderPreviewSection()}
      </div>
    </div>
  );
};

export default FinAIContent;
