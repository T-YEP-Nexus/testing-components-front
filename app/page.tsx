"use client";

import { AccessBtn } from "@/components/buttons/AccessBtn";
import LandingCards from "@/components/cards/LandingCards";
import { ArrowRight } from "lucide-react";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Landing() {
  return (
    <div className="flex flex-col md:flex-row items-center text-white px-6 md:p-10 md:mx-auto md:max-w-6xl">
      <div className="flex items-center justify-center md:hidden">
        <img src="/images/Nexus.png" alt="Landing Page" className="max-w-2/3" />
      </div>
      <div className="flex flex-col items-center md:items-start max-md:text-center gap-6 flex-2 md:max-w-1/2">
        <h1 className={`text-3xl font-bold ${russoOne.className}`}>
          Centralise toutes les plateformes d'apprentissage avec nexus
        </h1>
        <p className="text-md">
          Un seul outil pour tes projets, tes cours, tes rendus et bien plus
          encore.
        </p>
        <AccessBtn
          size="lg"
          onClick={() => {
            alert("Accéder à mon espace");
          }}
          className="bg-[#1971FF] py-6 text-white group cursor-pointer md:hover:bg-[#1971FF]/70 transition-all duration-300 shadow-md shadow-black/20"
        >
          Accéder à mon espace
          <ArrowRight
            className="-me-1 ms-2 transition-transform md:group-hover:translate-x-0.5"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </AccessBtn>
      </div>
      <div className="flex flex-1 items-center justify-center max-md:hidden md:justify-end">
        <img src="/images/Nexus.png" alt="Landing Page" className="max-w-3/4" />
      </div>
      <LandingCards />
    </div>
  );
}
