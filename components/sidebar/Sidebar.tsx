import { Home, Calendar, Folder, Info, ClipboardList, FileText, User } from "lucide-react";
import SidebarItem from "./SidebarItem";
import UserCard from "./UserCard";

const menu = [
  { icon: <Home size={18} />, label: "Accueil" },
  { icon: <Calendar size={18} />, label: "Calendrier" },
  { icon: <Folder size={18} />, label: "Projets" },
  { icon: <FileText size={18} />, label: "Documents" },
  { icon: <Info size={18} />, label: "Informations" },
  { icon: <ClipboardList size={18} />, label: "Emargement" },
  { icon: <User size={18} />, label: "Absences" },
];

export default function Sidebar() {
  return (
    <aside className="w-[250px] bg-[#0357cf] text-white flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 p-4">
          <img src="/images/Nexus.png" alt="logo" className="w-10 h-10" />
          <span className="text-2xl font-bold">nexus</span>
        </div>

        <nav className="mt-4">
          {menu.map((item) => (
            <SidebarItem key={item.label} icon={item.icon} label={item.label} />
          ))}
        </nav>
      </div>

      <UserCard name="Valentin Dupont" avatar="/images/avatar-valentin.png" />
    </aside>
  );
}
