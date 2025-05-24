import React from 'react';
import { Search } from 'lucide-react';

interface ReportItem {
  title: string;
  description: string;
  category: string;
  lastUpdated: string;
  owner: string;
}

const AllReportsView: React.FC = () => {
  const reports: ReportItem[] = [
    {
      title: "Articles",
      description: "Legacy",
      owner: "Intercom",
      lastUpdated: "-",
      category: "Legacy"
    },
    {
      title: "Calls",
      description: "Use the Calls report to visualize and explore your team's calling activity",
      owner: "Intercom",
      lastUpdated: "2 days ago",
      category: "Standard"
    },
    // Add more reports as shown in the image
  ];

  return (
    <div className="flex-1 overflow-hidden">
      <div className="p-6">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-[#2C2C2E] border border-[#3A3A3C] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-400">
                <th className="pb-4 font-normal">Title</th>
                <th className="pb-4 font-normal">Owned by</th>
                <th className="pb-4 font-normal">Last updated</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr 
                  key={index} 
                  className="border-t border-[#3A3A3C] hover:bg-[#2C2C2E] cursor-pointer group"
                >
                  <td className="py-4">
                    <div className="text-white text-sm">{report.title}</div>
                    <div className="text-sm text-gray-400">{report.description}</div>
                  </td>
                  <td className="py-4 text-sm text-gray-400">{report.owner}</td>
                  <td className="py-4 text-sm text-gray-400">{report.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllReportsView;
