import React from 'react';

interface MetricsCardProps {
  title: string;
  value: string | number;
}

const MetricsCard: React.FC<MetricsCardProps> = ({ title, value }) => {
  return (
    <div className="bg-[#2C2C2E] rounded-lg p-4">
      <h3 className="text-sm text-gray-400 mb-2">{title}</h3>
      <p className="text-xl text-white font-semibold">{value}</p>
    </div>
  );
};

export default MetricsCard;
