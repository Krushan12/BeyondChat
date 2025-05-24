import React from 'react';
import { BookOpen, ArrowUpRight } from 'lucide-react';

interface LearnSidebarProps {
  type: 'messages' | 'series';
}

const LearnSidebar: React.FC<LearnSidebarProps> = ({ type }) => {
  return (
    <div className="w-64 min-w-64 border-l border-[#3A3A3C] p-4 bg-[#1C1C1E]">
      <div className="mb-6">
        <h2 className="text-white font-medium mb-1">Learn {type}</h2>
        <p className="text-sm text-gray-400">
          Get started with {type} and learn best practices
        </p>
      </div>

      <div className="space-y-3">
        <a href="#" className="block p-3 rounded-md hover:bg-[#2C2C2E] group">
          <div className="flex items-start">
            <div className="p-2 bg-[#2C2C2E] rounded-md group-hover:bg-[#3A3A3C]">
              <BookOpen className="w-4 h-4 text-gray-400" />
            </div>
            <div className="ml-3 flex-1">
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-white">Getting started</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Learn the basics of {type} and how to use them effectively
              </p>
            </div>
          </div>
        </a>

        {/* Add more learning resources */}
        <a href="#" className="block p-3 rounded-md hover:bg-[#2C2C2E] group">
          {/* Similar structure for additional resources */}
        </a>
      </div>
    </div>
  );
};

export default LearnSidebar;
