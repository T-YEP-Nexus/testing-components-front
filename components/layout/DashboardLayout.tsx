import Sidebar from "@/components/sidebar/Sidebar";
import BubbleBackground from "@/components/BubbleBackground";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#0066f5] relative overflow-hidden">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto z-10 text-white">
        {children}
      </main>
      <BubbleBackground />
    </div>
  );
}
