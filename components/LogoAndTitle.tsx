export default function LogoAndTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <img src="/images/Nexus.png" alt="logo" className="w-20 h-20" />
      <h1 className="text-white font-bold text-4xl">{title}</h1>
    </div>
  );
}
