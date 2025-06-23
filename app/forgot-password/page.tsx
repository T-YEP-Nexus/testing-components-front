// app/forgot-password/page.tsx
import BubbleBackground from "@/components/BubbleBackground";
import LogoAndTitle from "@/components/LogoAndTitle";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="h-screen flex items-center justify-center bg-[#0066f5] relative overflow-hidden">
      <BubbleBackground />

      <div className="flex flex-col items-center z-10">
        <LogoAndTitle title="Réinitialise ton mot de passe" />

        <div className="bg-white p-12 rounded-xl shadow-md w-[500px] text-center mt-8">
          <p className="text-gray-700 mb-6">
            Renseigne ton adresse e-mail pour recevoir un lien de réinitialisation.
          </p>
          <input type="email" placeholder="E-mail" className="input placeholder-gray-600" />
          <button className="button mt-6">Envoyer le lien</button>
          <Link href="/login" className="text-sm text-blue-600 mt-4 block">← Retour à la connexion</Link>
        </div>
      </div>
    </main>
  );
}
