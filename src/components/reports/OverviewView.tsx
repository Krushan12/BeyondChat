import React from 'react';
import MetricsCard from './MetricsCard';
import ChartSection from './ChartSection';

const OverviewView: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <MetricsCard title="Resolution rate" value="0%" />
        <MetricsCard title="Answer rate" value="-" />
        <MetricsCard title="Deflection rate" value="-" />
        <MetricsCard title="Resolution rate" value="-" />
      </div>

      <ChartSection title="How you're handling conversations" />
      <ChartSection title="Overall volume growth" />
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <ChartSection title="New conversations by channel" />
        <ChartSection title="Median time to close by channel" />
      </div>

      <div className="mb-4">
        <h2 className="text-white text-lg font-semibold mb-4">Fin AI Agent performance</h2>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <MetricsCard title="Fix involvement" value="0%" />
          <MetricsCard title="Answer rate" value="-" />
          <MetricsCard title="Deflection rate" value="-" />
          <MetricsCard title="Resolution rate" value="-" />
        </div>
        <ChartSection title="Fix's impact over time" />
      </div>

      <div className="mb-4">
        <h2 className="text-white text-lg font-semibold mb-4">Teammate performance</h2>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <MetricsCard title="Median first response time" value="-" />
          <MetricsCard title="Median response time" value="-" />
          <MetricsCard title="Median time to close" value="-" />
          <MetricsCard title="Median handling time" value="-" />
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-white text-lg font-semibold mb-4">Customer satisfaction</h2>
        <ChartSection title="Customer satisfaction" />
      </div>
    </div>
  );
};

export default OverviewView;
