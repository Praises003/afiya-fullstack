import { Home, ClipboardList, History, Bell, Settings } from "lucide-react";
import afiya from "../assets/afiya.png"

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", icon: <Home size={18} /> },
    { name: "Log New Batch", icon: <ClipboardList size={18} /> },
    { name: "Batch History", icon: <History size={18} /> },
    { name: "Alerts & Reports", icon: <Bell size={18} /> },
    { name: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <aside className="w-64 bg-[#0b2347] text-white h-screen flex flex-col p-5">
      <img src={afiya} alt="Afiya Logo" className="w-32 mb-6" />
      
      <nav className="space-y-4">
        {menu.map((item) => (
          <div
            key={item.name}
            className="flex items-center space-x-3 hover:bg-[#123a7b] px-3 py-2 rounded-md cursor-pointer"
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
