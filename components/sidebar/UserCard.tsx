export default function UserCard({ name, avatar }: { name: string; avatar: string }) {
  return (
    <div className="flex items-center gap-2 p-4 border-t border-white/20">
      <img src={avatar} alt="user" className="w-10 h-10 rounded-full" />
      <div>
        <p className="text-sm font-bold">{name}</p>
      </div>
    </div>
  );
}
