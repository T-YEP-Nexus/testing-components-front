"use client";

import React from "react";
import {
  ArrowLeft,
  Calendar,
  Users,
  FileText,
  Clock,
  CheckCircle,
  Circle,
  AlertCircle,
} from "lucide-react";
import { Russo_One } from "next/font/google";
import Link from "next/link";

const font = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
});

// Données des projets (à déplacer dans un fichier séparé plus tard)
const projects = [
  {
    id: 1,
    name: "Projet Alpha",
    progress: 85,
    description:
      "Développement d'une application web moderne avec React et Node.js",
    longDescription:
      "Ce projet ambitieux vise à créer une plateforme web complète utilisant les technologies les plus récentes. L'application permettra aux utilisateurs de gérer leurs projets, collaborer en temps réel et suivre leurs objectifs avec des outils avancés d'analytics et de reporting.",
    details: {
      startDate: "15 Janvier 2024",
      endDate: "30 Mars 2024",
      team: "5 développeurs",
    },
    deadline: {
      kickOff: "20 Janvier 2024",
      followUp: "15 Février 2024",
      keynote: "25 Mars 2024",
      daysRemaining: 12,
    },
    documentation: {
      pdfUrl: "/docs/projet-alpha.pdf",
      pdfName: "Spécifications Alpha",
    },
    tasks: [
      "Interface utilisateur terminée",
      "API backend en cours",
      "Tests unitaires à faire",
      "Documentation à compléter",
    ],
    team: [
      { name: "Marie Dubois", role: "Lead Developer", avatar: "👩‍💻" },
      { name: "Thomas Martin", role: "Frontend Developer", avatar: "👨‍💻" },
      { name: "Sophie Bernard", role: "Backend Developer", avatar: "👩‍💻" },
      { name: "Lucas Petit", role: "UI/UX Designer", avatar: "👨‍🎨" },
      { name: "Emma Roux", role: "QA Engineer", avatar: "👩‍🔬" },
    ],
    milestones: [
      {
        name: "Phase 1 - Conception",
        date: "20 Janvier 2024",
        status: "completed",
      },
      {
        name: "Phase 2 - Développement Frontend",
        date: "15 Février 2024",
        status: "completed",
      },
      {
        name: "Phase 3 - Développement Backend",
        date: "10 Mars 2024",
        status: "in-progress",
      },
      {
        name: "Phase 4 - Tests et Optimisation",
        date: "20 Mars 2024",
        status: "pending",
      },
      {
        name: "Phase 5 - Déploiement",
        date: "25 Mars 2024",
        status: "pending",
      },
    ],
    risks: [
      {
        level: "Moyen",
        description: "Intégration avec les APIs tierces",
        mitigation: "Tests approfondis et documentation API",
      },
      {
        level: "Faible",
        description: "Performance sur mobile",
        mitigation: "Optimisation progressive et tests sur appareils",
      },
    ],
    budget: {
      allocated: 45000,
      spent: 38250,
      remaining: 6750,
    },
  },
  // Ajouter les autres projets ici...
];

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0E58D8] to-[#0E58D8]/80 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Projet non trouvé</h1>
          <Link
            href="/projects"
            className="text-white/80 hover:text-white underline"
          >
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "in-progress":
        return <Circle className="w-5 h-5 text-blue-500" />;
      case "pending":
        return <Circle className="w-5 h-5 text-gray-400" />;
      default:
        return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case "Élevé":
        return "text-red-500";
      case "Moyen":
        return "text-yellow-500";
      case "Faible":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E58D8] to-[#0E58D8]/80">
      {/* Header */}
      <div className="px-4 sm:px-8 lg:px-16 py-6">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/projects"
            className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-300"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white ${font.className}`}
            >
              {project.name}
            </h1>
            <p className="text-white/80 text-base sm:text-lg mt-2">
              Détails du projet
            </p>
          </div>
        </div>

        {/* Barre de progression principale */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-xl font-semibold">
              Progression globale
            </h2>
            <span className="text-white font-bold text-2xl">
              {project.progress}%
            </span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-4">
            <div
              className="bg-white h-4 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="px-4 sm:px-8 lg:px-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description détaillée */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Description du projet
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Tâches */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Tâches en cours
              </h2>
              <div className="space-y-4">
                {project.tasks.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Jalons */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Jalons du projet
              </h2>
              <div className="space-y-4">
                {project.milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    {getStatusIcon(milestone.status)}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        {milestone.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{milestone.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risques */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Risques identifiés
              </h2>
              <div className="space-y-4">
                {project.risks.map((risk, index) => (
                  <div
                    key={index}
                    className="p-4 border-l-4 border-yellow-400 bg-yellow-50 rounded-lg"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-5 h-5 text-yellow-500" />
                      <span
                        className={`font-semibold ${getRiskColor(risk.level)}`}
                      >
                        Risque {risk.level}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">{risk.description}</p>
                    <p className="text-gray-600 text-sm">
                      <strong>Atténuation :</strong> {risk.mitigation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Informations générales */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Informations générales
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Date de début</p>
                    <p className="font-semibold text-gray-800">
                      {project.details.startDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Date de fin</p>
                    <p className="font-semibold text-gray-800">
                      {project.details.endDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Équipe</p>
                    <p className="font-semibold text-gray-800">
                      {project.details.team}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deadline */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Deadline</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Kick off</p>
                  <p className="font-semibold text-gray-800">
                    {project.deadline.kickOff}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Follow up</p>
                  <p className="font-semibold text-gray-800">
                    {project.deadline.followUp}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Keynote</p>
                  <p className="font-semibold text-gray-800">
                    {project.deadline.keynote}
                  </p>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm text-gray-500">Jours restants</p>
                  <p className="font-bold text-xl text-blue-600">
                    {project.deadline.daysRemaining} jours
                  </p>
                </div>
              </div>
            </div>

            {/* Équipe */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Équipe</h3>
              <div className="space-y-3">
                {project.team.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                      {member.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {member.name}
                      </p>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documentation */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Documentation
              </h3>
              <div className="p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {project.documentation.pdfName}
                    </p>
                    <p className="text-sm text-gray-500">Documentation PDF</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Budget */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Budget</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Alloué</span>
                  <span className="font-semibold">
                    {project.budget.allocated.toLocaleString()}€
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dépensé</span>
                  <span className="font-semibold text-orange-600">
                    {project.budget.spent.toLocaleString()}€
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-gray-600">Restant</span>
                  <span className="font-semibold text-green-600">
                    {project.budget.remaining.toLocaleString()}€
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{
                      width: `${
                        (project.budget.spent / project.budget.allocated) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
