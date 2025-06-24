import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Russo_One } from "next/font/google";
import React, { useState } from "react";
import Link from "next/link";
import NexusAnimated from "@/components/Nexus/NexusAnimated";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

export default function LandingHero() {
  return (
    <div className="flex flex-col md:flex-row items-center text-white pt-20 md:mx-auto md:max-w-6xl gap-10 max-xl:px-10">
      <div className="flex items-center justify-center md:hidden">
        <NexusAnimated />
      </div>
      <div className="flex flex-col items-center md:items-start max-md:text-center gap-6 flex-2 md:max-w-1/2">
        <h1 className={`text-3xl md:text-5xl font-bold ${russoOne.className}`}>
          Centralise toutes les plateformes d'apprentissage avec nexus
        </h1>
        <p className="text-md md:text-lg">
          Un seul outil pour tes projets, tes cours, tes rendus et bien plus
          encore.
        </p>
        <Link href="/login">
          <Button
            size="lg"
            className="bg-[#1971FF] py-8 text-white group cursor-pointer md:hover:bg-[#1971FF]/70 transition-all duration-300 shadow-md shadow-black/20 text-xl font-bold hover:scale-102"
          >
            Accéder à mon espace
            <ArrowRight
              className="-me-1 ms-2 transition-transform md:group-hover:translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </Button>
        </Link>
      </div>
      <div className="size-96 flex items-center justify-center transition-all duration-300 max-md:hidden">
        <NexusAnimated />
      </div>
    </div>
  );
}
