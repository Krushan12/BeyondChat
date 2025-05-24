import React from 'react';
import { Plus, ChevronRight } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  description: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ title, description }) => (
  <div className="bg-[#2C2C2E] rounded-lg p-6 cursor-pointer hover:bg-[#3A3A3C] transition-colors">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-white font-medium mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </div>
  </div>
);

const SeriesView: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b border-[#3A3A3C] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-white">Series</h1>
            <button className="text-sm text-gray-400 hover:text-white">Learn</button>
          </div>
          <button className="px-3 py-1.5 bg-white text-black rounded-md text-sm font-medium hover:bg-gray-100 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            New Series
          </button>
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="mb-8">
          <h2 className="text-lg font-medium text-white mb-4">Start with a popular template</h2>
          <div className="grid grid-cols-3 gap-4">
            <TemplateCard 
              title="Onboard new users to drive adoption"
              description="Welcome new users and help them get started with key features"
            />
            <TemplateCard 
              title="Announce a new feature to boost adoption"
              description="Share updates about new features and encourage usage"
            />
            <TemplateCard 
              title="Encourage inactive users to re-engage"
              description="Bring users back to your product with targeted messages"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-sm text-gray-400 hover:text-white">
            See all
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeriesView;
