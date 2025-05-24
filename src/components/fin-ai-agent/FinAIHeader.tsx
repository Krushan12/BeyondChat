import * as React from 'react';

interface FinAIHeaderProps {}

const FinAIHeader: React.FC<FinAIHeaderProps> = () => {
  return (
    <div className="flex items-center px-6 py-3 border-b border-[#3A3A3C] bg-[#1C1C1E]">
      <div className="flex items-center">
        <div className="flex items-center mr-2">
          <svg className="w-5 h-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <h2 className="text-white text-base font-medium">Content</h2>
        </div>
      </div>
    </div>
  );
};

export default FinAIHeader;
