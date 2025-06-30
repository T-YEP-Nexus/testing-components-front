// app/login/page.tsx
import BubbleBackground from "@/components/BubbleBackground";
import LogoAndTitle from "@/components/LogoAndTitle";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="h-screen flex items-center justify-center bg-[#0066f5] relative overflow-hidden">
      <BubbleBackground />

      <div className="flex flex-col items-center z-10">
        <LogoAndTitle title="Connecte-toi à Nexus" />

        <div className="bg-white p-12 rounded-xl shadow-md w-[500px] text-center mt-8">
          <input type="email" placeholder="E-mail" className="input placeholder-gray-600" />
          <input type="password" placeholder="Mot de passe" className="input mt-4 placeholder-gray-600" />
          <button className="button mt-6">Connexion</button>
          <Link href="/forgot-password" className="text-sm text-blue-600 mt-4 block">Mot de passe oublié ?</Link>
        </div>
      </div>
    </main>
  );
}
