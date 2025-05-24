import React from 'react';
import { BarChart2, Plus } from 'lucide-react';

const YourReportsView: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="mx-auto w-12 h-12 bg-[#2C2C2E] rounded-full flex items-center justify-center mb-4">
          <BarChart2 className="w-6 h-6 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No reports yet</h3>
        <p className="text-gray-400 text-sm mb-6">
          Create custom reports to track the metrics that matter most to your team
        </p>
        <button className="px-4 py-2 bg-white text-black rounded-md font-medium text-sm hover:bg-gray-100 flex items-center justify-center mx-auto">
          <Plus className="w-4 h-4 mr-2" />
          New report
        </button>
      </div>
    </div>
  );
};

export default YourReportsView;
