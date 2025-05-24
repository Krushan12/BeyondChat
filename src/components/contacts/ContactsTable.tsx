import React from 'react';

interface UserAvatarProps {
  initial: string;
  color: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ initial, color }) => (
  <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-white font-medium`}>
    {initial}
  </div>
);

const ContactsTable: React.FC = () => {
  const users = [
    {
      initial: "P",
      color: "bg-purple-600",
      name: "Phone & SMS",
      company: "[Demo]",
      type: "User",
      lastSeen: "2 days ago",
      firstSeen: "2 days ago",
      signedUp: "2 days ago",
      webSessions: 0,
      city: "Unknown"
    },
    {
      initial: "W",
      color: "bg-green-600",
      name: "WhatsApp & Social",
      company: "[Demo]",
      type: "User",
      lastSeen: "2 days ago",
      firstSeen: "2 days ago",
      signedUp: "2 days ago",
      webSessions: 0,
      city: "Unknown"
    },
    {
      initial: "E",
      color: "bg-blue-600",
      name: "Email",
      company: "[Demo]",
      type: "User",
      lastSeen: "2 days ago",
      firstSeen: "2 days ago",
      signedUp: "2 days ago",
      webSessions: 0,
      city: "Unknown"
    },
    {
      initial: "M",
      color: "bg-orange-600",
      name: "Messenger",
      company: "[Demo]",
      type: "User",
      lastSeen: "2 days ago",
      firstSeen: "2 days ago",
      signedUp: "2 days ago",
      webSessions: 0,
      city: "Unknown"
    }
  ];

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <div className="flex-1 overflow-x-auto m-4">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-400 border-b border-[#3A3A3C]">
              <th className="pb-3 font-normal">Name</th>
              <th className="pb-3 font-normal">Last seen</th>
              <th className="pb-3 font-normal">Type</th>
              <th className="pb-3 font-normal">First seen</th>
              <th className="pb-3 font-normal">Signed up</th>
              <th className="pb-3 font-normal">Web sessions</th>
              <th className="pb-3 font-normal">City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b border-[#3A3A3C] hover:bg-[#2C2C2E] group">
                <td className="py-3">
                  <div className="flex items-center space-x-3">
                    <UserAvatar initial={user.initial} color={user.color} />
                    <div>
                      <div className="text-white text-sm">{user.name} at</div>
                      <div className="text-sm text-gray-400">{user.company}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-sm text-gray-400">{user.lastSeen}</td>
                <td className="py-3 text-sm text-gray-400">{user.type}</td>
                <td className="py-3 text-sm text-gray-400">{user.firstSeen}</td>
                <td className="py-3 text-sm text-gray-400">{user.signedUp}</td>
                <td className="py-3 text-sm text-gray-400">{user.webSessions}</td>
                <td className="py-3 text-sm text-gray-400">{user.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactsTable;
