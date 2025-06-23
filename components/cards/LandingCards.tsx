import { CalendarDays } from "lucide-react";
import React from "react";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

function LandingCards() {
  return (
    <div className="bg-white rounded-xl p-4 w-52 h-64">
      <div className="flex flex-col items-center justify-center">
        <img src="/images/calendar.png" alt="calendar" className="size-20" />
        <h3
          className={`text-3xl font-bold text-[#0D3B8C] mt-4 ${russoOne.className}`}
        >
          Calendrier <br /> Intelligent
        </h3>
        <p className="text-md text-[#6B8CC2] mt-2">
          Un seul outil pour tes projets, tes cours, tes rendus et bien plus
          encore.
        </p>
      </div>
    </div>
  );
}

export default LandingCards;
