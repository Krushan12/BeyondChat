import React from 'react';

interface ChartSectionProps {
  title: string;
  children?: React.ReactNode;
}

const ChartSection: React.FC<ChartSectionProps> = ({ title, children }) => {
  return (
    <div className="bg-[#2C2C2E] rounded-lg p-4 mb-4">
      <h3 className="text-white text-sm font-medium mb-4">{title}</h3>
      {children || (
        <div className="flex items-center justify-center h-48 text-gray-500">
          <p>This chart has no data</p>
        </div>
      )}
    </div>
  );
};

export default ChartSection;
