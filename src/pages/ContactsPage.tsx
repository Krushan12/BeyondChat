import React from 'react';
import MainSidebar from '../components/layout/MainSidebar';
import ContactsSidebar from '../components/contacts/ContactsSidebar';
import ContactsHeader from '../components/contacts/ContactsHeader';
import ContactsTable from '../components/contacts/ContactsTable';
import { MainView } from '../types';

const ContactsPage: React.FC = () => {
  const [activeView, setActiveView] = React.useState<MainView>('contacts');
  const [activeFilter, setActiveFilter] = React.useState('all-users');

  return (
    <div className="flex h-screen bg-[#1C1C1E] overflow-hidden">
      <MainSidebar onViewChange={setActiveView} activeView={activeView} />
      <div className="flex flex-1 ml-12">
        <ContactsSidebar 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <div className="flex-1 overflow-hidden flex flex-col">
          <ContactsHeader />
          <ContactsTable />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
