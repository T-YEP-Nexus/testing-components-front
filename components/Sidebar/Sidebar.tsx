"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Home,
  Calendar,
  Briefcase,
  Folder,
  MessageSquare,
  Edit,
  BookOpen,
} from "lucide-react";

import { Russo_One } from "next/font/google";

const links = [
  { label: "Accueil", icon: <Home size={20} /> },
  { label: "Calendrier", icon: <Calendar size={20} /> },
  { label: "Projets", icon: <Briefcase size={20} /> },
  { label: "Documents", icon: <Folder size={20} /> },
  { label: "Informations", icon: <MessageSquare size={20} /> },
  { label: "Emargement", icon: <Edit size={20} /> },
  { label: "Absences", icon: <BookOpen size={20} /> },
];

const russo = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Sidebar = () => {
  const [selected, setSelected] = useState("Projets");

  return (
    <div className="flex flex-col justify-between h-screen w-fit pr-10 bg-gradient-to-b from-[#1971FF] to-[#1971FF]/80 px-4 py-6">
      {/* Logo + nom */}
      <div>
        <div className="flex items-center gap-2 mb-10">
          <Image src="/images/Nexus.png" alt="Nexus" width={90} height={90} />
          <span
            className={`text-white font-extrabold text-3xl tracking-wide ${russo.className}`}
          >
            Nexus
          </span>
        </div>
        {/* Liens */}
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => setSelected(link.label)}
              className={`flex items-center cursor-pointer gap-3 px-4 py-2 rounded-lg text-white transition-all
                ${
                  selected === link.label
                    ? "bg-[#0e357a]/70 font-bold"
                    : "hover:bg-[#0e357a]/40"
                }
                `}
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </button>
          ))}
        </nav>
      </div>
      {/* Utilisateur */}
      <div className="flex items-center gap-3 mt-8">
        <Image
          src="/images/avatar.png"
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full bg-white"
        />
        <div className="flex flex-col">
          <span className="text-white font-bold leading-tight">Valentin</span>
          <span className="text-white/80 text-xs leading-tight">Dupont</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
