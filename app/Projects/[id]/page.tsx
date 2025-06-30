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
import { getProjectById } from "@/lib/projectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const font = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = React.use(params);
  const project = getProjectById(
    parseInt(resolvedParams.id)
  ) as typeof import("@/lib/projectsData").projects[number] & {
    hotTopics?: { title: string; description: string }[];
    skills?: string[];
    resources?: {
      bootstrap: { name: string; action: string; url: string }[];
      kickOff: { name: string; action: string; url: string }[];
      projet: { name: string; action: string; url: string }[];
    };
  };

  // État local pour les tâches
  const [tasks, setTasks] = React.useState<string[]>([]);
  const [newTask, setNewTask] = React.useState("");

  // Fonction pour ajouter une tâche
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  // Fonction pour supprimer une tâche
  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

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
              <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-400" />
                <span>Description du projet</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Documentation - déplacé et agrandi */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-400" />
                <span>Ressources</span>
              </h2>

              <div className="space-y-4">
                {/* Section Bootstrap */}
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-base font-semibold text-blue-700 mb-3 flex items-center gap-2">
                    <span>Bootstrap</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.resources?.bootstrap.map((resource, index) => (
                      <div
                        key={index}
                        className="p-3 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors"
                      >
                        <p className="font-medium text-gray-800 mb-2 text-sm">
                          {resource.name}
                        </p>
                        <button
                          className={`w-full px-3 py-1.5 text-white rounded text-xs font-medium transition-colors ${
                            resource.action === "Télécharger"
                              ? "bg-green-500 hover:bg-green-600"
                              : "bg-blue-500 hover:bg-blue-600"
                          }`}
                        >
                          {resource.action}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Kick Off */}
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-base font-semibold text-blue-700 mb-3 flex items-center gap-2">
                    <span>Kick Off</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.resources?.kickOff.map((resource, index) => (
                      <div
                        key={index}
                        className="p-3 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors"
                      >
                        <p className="font-medium text-gray-800 mb-2 text-sm">
                          {resource.name}
                        </p>
                        <button
                          className={`w-full px-3 py-1.5 text-white rounded text-xs font-medium transition-colors ${
                            resource.action === "Télécharger"
                              ? "bg-green-500 hover:bg-green-600"
                              : "bg-blue-500 hover:bg-blue-600"
                          }`}
                        >
                          {resource.action}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Projet */}
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-base font-semibold text-blue-700 mb-3 flex items-center gap-2">
                    <span>Projet</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.resources?.projet.map((resource, index) => (
                      <div
                        key={index}
                        className="p-3 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors"
                      >
                        <p className="font-medium text-gray-800 mb-2 text-sm">
                          {resource.name}
                        </p>
                        <button
                          className={`w-full px-3 py-1.5 text-white rounded text-xs font-medium transition-colors ${
                            resource.action === "Télécharger"
                              ? "bg-green-500 hover:bg-green-600"
                              : "bg-blue-500 hover:bg-blue-600"
                          }`}
                        >
                          {resource.action}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trophées */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faMedal}
                  className="w-8 h-8 text-blue-400"
                />
                <span>Médailles du projet</span>
                <span className="text-base font-normal text-gray-500">
                  {project.trophies.filter((t) => t.obtained).length}/
                  {project.trophies.length}
                </span>
              </h2>
              <div className="grid grid-cols-6 gap-6">
                {project.trophies.map((trophy, idx) => (
                  <div
                    key={trophy.name}
                    className="flex flex-col items-center group relative"
                  >
                    <FontAwesomeIcon
                      icon={faMedal}
                      size="2x"
                      className={
                        trophy.obtained
                          ? "text-yellow-400"
                          : "text-gray-300 opacity-40"
                      }
                    />
                    {/* Tooltip */}
                    <span className="absolute z-10 bottom-12 left-1/2 -translate-x-1/2 px-3 py-2 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                      {trophy.description}
                    </span>
                    <span className="text-xs text-gray-700 mt-2 text-center break-words">
                      {trophy.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hot Topics & Compétences (ex-Risques) */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-blue-400" />
                <span>Hot Topics & Compétences mobilisées</span>
              </h2>
              <div className="space-y-4">
                {/* Hot Topics */}
                {project.hotTopics && project.hotTopics.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-blue-700 mb-2">
                      Hot Topics
                    </h3>
                    {project.hotTopics.map(
                      (
                        topic: { title: string; description: string },
                        idx: number
                      ) => (
                        <div
                          key={idx}
                          className="p-4 border-l-4 border-yellow-400 bg-yellow-50 rounded-lg mb-2"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <AlertCircle className="w-5 h-5 text-yellow-500" />
                            <span className="font-semibold text-yellow-700">
                              {topic.title}
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm">
                            {topic.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                )}
                {/* Compétences */}
                {project.skills && project.skills.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-blue-700 mb-2">
                      Compétences impliquées
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {project.skills.map((skill: string, idx: number) => (
                        <li
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Bloc Tâches & Jalons éditable */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-blue-400" />
                <span>Tâches</span>
              </h3>
              <div className="space-y-4">
                {/* Zone de saisie */}
                <div>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    placeholder="Tapez une tâche et appuyez sur Entrée..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.currentTarget.value.trim()) {
                        addTask();
                      }
                    }}
                  />
                </div>

                {/* Liste des tâches */}
                <div className="space-y-2">
                  {tasks.length === 0 ? (
                    <p className="text-gray-500 text-sm italic">
                      Aucune tâche pour le moment
                    </p>
                  ) : (
                    tasks.map((task, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm flex-1">
                          {task}
                        </span>
                        <button
                          onClick={() => removeTask(index)}
                          className="text-red-400 hover:text-red-600 text-xs transition-colors"
                        >
                          ×
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Informations générales */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-400" />
                <span>Informations générales</span>
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
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6 text-blue-400" />
                <span>Deadline</span>
              </h3>
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
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-400" />
                <span>Équipe</span>
              </h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}
