"use client";
import LandingHero from "@/components/Landing/Hero/LandingHero";
import LandingCardsList from "@/components/Landing/Cards/LandingCardsList";
import { Russo_One } from "next/font/google";
import LandingFooter from "@/components/Landing/Footer/LandingFooter";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

const cards = [
  {
    title: "Calendrier Intelligent",
    description:
      "Un seul outil pour tes projets, tes cours, tes rendus et bien plus encore.",
    image: "/images/calendar.png",
  },
  {
    title: "Compétences en temps réel",
    description: "Suis l’évolution de tes compétences en temps réel",
    image: "/images/compétences.png",
  },
  {
    title: "Accès unifié aux platformes",
    description:
      "Centralise l’accès à toutes les plateformes utilisées pendant la formation",
    image: "/images/accès.png",
  },
  {
    title: "Suivi de projet",
    description: "Gère et visualise l’avancement de tes projets étudiants",
    image: "/images/suivi.png",
  },
];

export default function Landing() {
  return (
    <main>
      <LandingHero />
      <LandingCardsList cards={cards} />
      <LandingFooter />
    </main>
  );
}
