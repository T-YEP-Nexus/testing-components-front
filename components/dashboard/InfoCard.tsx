export default function InfoCard({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="bg-white text-black rounded-xl p-4 shadow-md">
      <h2 className="font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
}
