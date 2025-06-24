export default function SidebarItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 hover:bg-[#054ac0] cursor-pointer">
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}
