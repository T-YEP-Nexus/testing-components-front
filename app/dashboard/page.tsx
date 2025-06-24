import DashboardLayout from "@/components/layout/DashboardLayout";
import InfoCard from "@/components/dashboard/InfoCard";
import Calendar from "@/components/dashboard/Calendar";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">A venir aujourd’hui</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-6">
          <InfoCard title="Annonce importantes">
            <div className="flex items-center gap-2">
              <img src="/images/avatar-enzo.png" alt="avatar" className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-bold">Enzo Bourdin</p>
                <p className="text-sm">Annonce simulée ici pour démo.</p>
              </div>
            </div>
          </InfoCard>

          <div className="grid grid-cols-2 gap-6">
            <InfoCard title="Devoirs & rendus" />
            <InfoCard title="Projets">
              <ul className="list-disc pl-5 text-sm">
                <li>T-DEV-500</li>
                <li>T-YOP-700</li>
                <li>T-SEN-700</li>
              </ul>
            </InfoCard>
          </div>

          <InfoCard title="Rappels & notifications">
            <p><strong>NOUVEAU</strong> Document reçus</p>
            <p><strong>EMARGEMENT</strong> 13:00 / 17:15</p>
          </InfoCard>
        </div>

        <div className="flex flex-col gap-6">
          <Calendar />
          <InfoCard title="Événements clés">
            <p><strong>T-DEV-600</strong> 18/06/2025</p>
            <p><strong>SUMMER FESTIVAL</strong> 18/06/2025</p>
          </InfoCard>
          <InfoCard title="Réunions & rendez-vous">
            <p>FOLLOW UP 18/06/2025</p>
            <p>KICK OFF T-CEN-100 18/06/2025</p>
          </InfoCard>
        </div>
      </div>
    </DashboardLayout>
  );
}
