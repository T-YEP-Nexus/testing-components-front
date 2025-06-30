"use client";

import React, { useState, useRef, useEffect } from "react";
import Cards from "@/components/Projects/Cards";
import { Search, MoreVertical, Bell } from "lucide-react";
import { Russo_One } from "next/font/google";

const font = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayCount, setDisplayCount] = useState(8);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // Simuler des données de projets avec des noms
  const projects = [
    {
      id: 1,
      name: "Projet Alpha",
      progress: 85,
      description:
        "Développement d'une application web moderne avec React et Node.js",
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
    },
    {
      id: 2,
      name: "Projet Beta",
      progress: 45,
      description:
        "Création d'une interface utilisateur intuitive et responsive",
      details: {
        startDate: "20 Janvier 2024",
        endDate: "15 Avril 2024",
        team: "3 développeurs",
      },
      deadline: {
        kickOff: "25 Janvier 2024",
        followUp: "20 Février 2024",
        keynote: "10 Avril 2024",
        daysRemaining: 35,
      },
      documentation: {
        pdfUrl: "/docs/projet-beta.pdf",
        pdfName: "Maquettes Beta",
      },
      tasks: [
        "Design system créé",
        "Composants UI en cours",
        "Tests d'accessibilité",
        "Optimisation mobile",
      ],
    },
    {
      id: 3,
      name: "Projet Gamma",
      progress: 92,
      description:
        "Implémentation de fonctionnalités avancées et optimisation des performances",
      details: {
        startDate: "10 Janvier 2024",
        endDate: "25 Février 2024",
        team: "4 développeurs",
      },
      deadline: {
        kickOff: "15 Janvier 2024",
        followUp: "10 Février 2024",
        keynote: "20 Février 2024",
        daysRemaining: 3,
      },
      documentation: {
        pdfUrl: "/docs/projet-gamma.pdf",
        pdfName: "Architecture Gamma",
      },
      tasks: [
        "Optimisation terminée",
        "Tests de charge réussis",
        "Documentation technique",
        "Déploiement en production",
      ],
    },
    {
      id: 4,
      name: "Projet Delta",
      progress: 23,
      description:
        "Intégration d'APIs externes et développement de microservices",
      details: {
        startDate: "25 Janvier 2024",
        endDate: "30 Mai 2024",
        team: "6 développeurs",
      },
      deadline: {
        kickOff: "30 Janvier 2024",
        followUp: "25 Février 2024",
        keynote: "25 Mai 2024",
        daysRemaining: 78,
      },
      documentation: {
        pdfUrl: "/docs/projet-delta.pdf",
        pdfName: "APIs Delta",
      },
      tasks: [
        "Architecture définie",
        "Premier microservice",
        "Documentation API",
        "Tests d'intégration",
      ],
    },
    {
      id: 5,
      name: "Projet Epsilon",
      progress: 67,
      description: "Mise en place d'une architecture cloud-native et sécurisée",
      details: {
        startDate: "5 Février 2024",
        endDate: "20 Juin 2024",
        team: "7 développeurs",
      },
      deadline: {
        kickOff: "10 Février 2024",
        followUp: "5 Mars 2024",
        keynote: "15 Juin 2024",
        daysRemaining: 95,
      },
      documentation: {
        pdfUrl: "/docs/projet-epsilon.pdf",
        pdfName: "Architecture Cloud",
      },
      tasks: [
        "Infrastructure cloud",
        "Sécurité implémentée",
        "Monitoring en cours",
        "Tests de sécurité",
      ],
    },
    {
      id: 6,
      name: "Projet Zeta",
      progress: 78,
      description: "Développement d'algorithmes de machine learning et d'IA",
      details: {
        startDate: "15 Février 2024",
        endDate: "10 Juillet 2024",
        team: "4 développeurs",
      },
      deadline: {
        kickOff: "20 Février 2024",
        followUp: "15 Mars 2024",
        keynote: "5 Juillet 2024",
        daysRemaining: 125,
      },
      documentation: {
        pdfUrl: "/docs/projet-zeta.pdf",
        pdfName: "Algorithms ML",
      },
      tasks: [
        "Modèles entraînés",
        "API ML créée",
        "Tests de précision",
        "Optimisation en cours",
      ],
    },
    {
      id: 7,
      name: "Projet Eta",
      progress: 34,
      description:
        "Création d'une plateforme de gestion de données en temps réel",
      details: {
        startDate: "1 Mars 2024",
        endDate: "15 Août 2024",
        team: "5 développeurs",
      },
      deadline: {
        kickOff: "5 Mars 2024",
        followUp: "1 Avril 2024",
        keynote: "10 Août 2024",
        daysRemaining: 140,
      },
      documentation: {
        pdfUrl: "/docs/projet-eta.pdf",
        pdfName: "Platform Realtime",
      },
      tasks: [
        "Base de données conçue",
        "API temps réel",
        "Interface admin",
        "Tests de performance",
      ],
    },
    {
      id: 8,
      name: "Projet Theta",
      progress: 56,
      description:
        "Optimisation de processus métier et automatisation des tâches",
      details: {
        startDate: "10 Mars 2024",
        endDate: "30 Septembre 2024",
        team: "3 développeurs",
      },
      deadline: {
        kickOff: "15 Mars 2024",
        followUp: "10 Avril 2024",
        keynote: "25 Septembre 2024",
        daysRemaining: 165,
      },
      documentation: {
        pdfUrl: "/docs/projet-theta.pdf",
        pdfName: "Processus BPM",
      },
      tasks: [
        "Analyse des processus",
        "Automatisation en cours",
        "Formation utilisateurs",
        "Tests d'acceptation",
      ],
    },
    {
      id: 9,
      name: "Projet Iota",
      progress: 89,
      description: "Développement d'une solution mobile cross-platform",
      details: {
        startDate: "20 Février 2024",
        endDate: "25 Mai 2024",
        team: "4 développeurs",
      },
      deadline: {
        kickOff: "25 Février 2024",
        followUp: "20 Mars 2024",
        keynote: "20 Mai 2024",
        daysRemaining: 45,
      },
      documentation: {
        pdfUrl: "/docs/projet-iota.pdf",
        pdfName: "Mobile App",
      },
      tasks: [
        "App iOS terminée",
        "App Android en cours",
        "Tests sur appareils",
        "Publication stores",
      ],
    },
    {
      id: 10,
      name: "Projet Kappa",
      progress: 12,
      description: "Intégration de systèmes de paiement et de sécurité",
      details: {
        startDate: "1 Avril 2024",
        endDate: "30 Octobre 2024",
        team: "6 développeurs",
      },
      deadline: {
        kickOff: "5 Avril 2024",
        followUp: "1 Mai 2024",
        keynote: "25 Octobre 2024",
        daysRemaining: 185,
      },
      documentation: {
        pdfUrl: "/docs/projet-kappa.pdf",
        pdfName: "Sécurité Paiement",
      },
      tasks: [
        "Analyse sécurité",
        "Intégration Stripe",
        "Tests de sécurité",
        "Certification PCI",
      ],
    },
    {
      id: 11,
      name: "Projet Lambda",
      progress: 73,
      description:
        "Création d'un dashboard analytique avec visualisations avancées",
      details: {
        startDate: "15 Mars 2024",
        endDate: "20 Juillet 2024",
        team: "4 développeurs",
      },
      deadline: {
        kickOff: "20 Mars 2024",
        followUp: "15 Avril 2024",
        keynote: "15 Juillet 2024",
        daysRemaining: 110,
      },
      documentation: {
        pdfUrl: "/docs/projet-lambda.pdf",
        pdfName: "Dashboard Analytics",
      },
      tasks: [
        "Dashboard créé",
        "Graphiques avancés",
        "Export données",
        "Tests utilisateurs",
      ],
    },
    {
      id: 12,
      name: "Projet Mu",
      progress: 41,
      description:
        "Développement d'une API RESTful avec documentation complète",
      details: {
        startDate: "25 Mars 2024",
        endDate: "15 Août 2024",
        team: "3 développeurs",
      },
      deadline: {
        kickOff: "30 Mars 2024",
        followUp: "25 Avril 2024",
        keynote: "10 Août 2024",
        daysRemaining: 130,
      },
      documentation: {
        pdfUrl: "/docs/projet-mu.pdf",
        pdfName: "API Documentation",
      },
      tasks: [
        "Architecture API",
        "Endpoints créés",
        "Documentation Swagger",
        "Tests d'intégration",
      ],
    },
    {
      id: 13,
      name: "Projet Nu",
      progress: 58,
      description: "Système de gestion de contenu avec éditeur WYSIWYG",
      details: {
        startDate: "5 Avril 2024",
        endDate: "25 Septembre 2024",
        team: "4 développeurs",
      },
      deadline: {
        kickOff: "10 Avril 2024",
        followUp: "5 Mai 2024",
        keynote: "20 Septembre 2024",
        daysRemaining: 150,
      },
      documentation: {
        pdfUrl: "/docs/projet-nu.pdf",
        pdfName: "CMS WYSIWYG",
      },
      tasks: [
        "Éditeur créé",
        "Gestion médias",
        "Workflow publication",
        "Tests utilisateurs",
      ],
    },
    {
      id: 14,
      name: "Projet Xi",
      progress: 29,
      description: "Plateforme de collaboration en temps réel",
      details: {
        startDate: "10 Avril 2024",
        endDate: "30 Novembre 2024",
        team: "5 développeurs",
      },
      deadline: {
        kickOff: "15 Avril 2024",
        followUp: "10 Mai 2024",
        keynote: "25 Novembre 2024",
        daysRemaining: 210,
      },
      documentation: {
        pdfUrl: "/docs/projet-xi.pdf",
        pdfName: "Collaboration Platform",
      },
      tasks: [
        "WebSocket implémenté",
        "Chat en temps réel",
        "Partage documents",
        "Tests de charge",
      ],
    },
    {
      id: 15,
      name: "Projet Omicron",
      progress: 81,
      description: "Application de gestion de projet avec Gantt",
      details: {
        startDate: "15 Avril 2024",
        endDate: "20 Août 2024",
        team: "4 développeurs",
      },
      deadline: {
        kickOff: "20 Avril 2024",
        followUp: "15 Mai 2024",
        keynote: "15 Août 2024",
        daysRemaining: 100,
      },
      documentation: {
        pdfUrl: "/docs/projet-omicron.pdf",
        pdfName: "Gantt Charts",
      },
      tasks: [
        "Diagramme Gantt",
        "Gestion tâches",
        "Notifications",
        "Tests fonctionnels",
      ],
    },
    {
      id: 16,
      name: "Projet Pi",
      progress: 66,
      description: "Système de réservation et de gestion d'agenda",
      details: {
        startDate: "20 Avril 2024",
        endDate: "15 Septembre 2024",
        team: "3 développeurs",
      },
      deadline: {
        kickOff: "25 Avril 2024",
        followUp: "20 Mai 2024",
        keynote: "10 Septembre 2024",
        daysRemaining: 125,
      },
      documentation: {
        pdfUrl: "/docs/projet-pi.pdf",
        pdfName: "Booking System",
      },
      tasks: [
        "Calendrier créé",
        "Système réservation",
        "Notifications email",
        "Tests d'acceptation",
      ],
    },
  ];

  // Filtrer les projets basé sur la recherche
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Limiter l'affichage
  const displayedProjects = filteredProjects.slice(0, displayCount);

  const handleShowMore = () => {
    setDisplayCount((prev) => Math.min(prev + 12, filteredProjects.length));
    // Scroll vers les nouveaux projets ajoutés après un court délai pour laisser le temps au DOM de se mettre à jour
    setTimeout(() => {
      if (projectsGridRef.current && buttonsRef.current) {
        const gridBottom =
          projectsGridRef.current.offsetTop +
          projectsGridRef.current.offsetHeight;
        const buttonsTop = buttonsRef.current.offsetTop;
        const scrollPosition = buttonsTop - window.innerHeight + 100; // 100px d'espace avant les boutons

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const handleShowLess = () => {
    setDisplayCount(8);
    // Scroll vers la grille de projets après un court délai pour laisser le temps au DOM de se mettre à jour
    setTimeout(() => {
      projectsGridRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleCardToggle = (projectId: number) => {
    setExpandedCard(expandedCard === projectId ? null : projectId);
  };

  useEffect(() => {
    setExpandedCard(null);
  }, [searchTerm]);

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-4 sm:py-6 lg:py-8 bg-gradient-to-b from-[#0E58D8] to-[#0E58D8]/80">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 sm:mb-12">
        <div>
          <h1
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white ${font.className} mb-2`}
          >
            Vos Projets
          </h1>
          <p className="text-white/80 text-base sm:text-lg">
            Gérez et suivez vos projets en cours
          </p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <button className="p-2 sm:p-3 cursor-pointer lg:hover:bg-white/10 text-white rounded-xl transition-all duration-300">
            <MoreVertical size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button className="p-2 sm:p-3 cursor-pointer lg:hover:bg-white/10 text-white rounded-xl transition-all duration-300">
            <Bell size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Barre de recherche */}
      <div className="flex justify-center mb-8 sm:mb-10 lg:mb-16">
        <div className="relative w-full max-w-sm sm:max-w-md lg:w-96">
          <Search
            className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5"
            size={18}
          />
          <input
            type="text"
            placeholder="Rechercher un projet..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 sm:pl-12 pr-4 sm:pr-6 py-3 sm:py-4 border-0 bg-white rounded-xl sm:rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0E58D8] lg:focus:shadow-lg transition-all duration-300 text-gray-700 placeholder:text-gray-400 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Grille de cartes */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 mb-12 auto-rows-fr transition-all duration-300"
        ref={projectsGridRef}
      >
        {displayedProjects.map((project) => (
          <Cards
            key={project.id}
            projectName={project.name}
            progress={project.progress}
            description={project.description}
            details={project.details}
            deadline={project.deadline}
            documentation={project.documentation}
            tasks={project.tasks}
            isExpanded={expandedCard === project.id}
            onToggle={() => handleCardToggle(project.id)}
            isBlurred={expandedCard !== null && expandedCard !== project.id}
          />
        ))}
      </div>

      {/* Boutons Afficher plus/moins */}
      <div className="flex justify-center gap-6" ref={buttonsRef}>
        {displayedProjects.length < filteredProjects.length && (
          <button
            onClick={handleShowMore}
            className="px-8 py-3 bg-white/20 backdrop-blur-sm cursor-pointer lg:hover:bg-white/30 text-white rounded-xl lg:hover:shadow-lg transition-all duration-300 font-medium border border-white/20"
          >
            Afficher plus
          </button>
        )}
        {displayCount > 8 && (
          <button
            onClick={handleShowLess}
            className="px-8 py-3 bg-white/10 backdrop-blur-sm cursor-pointer lg:hover:bg-white/20 text-white rounded-xl lg:hover:shadow-lg transition-all duration-300 font-medium border border-white/20"
          >
            Afficher moins
          </button>
        )}
      </div>
    </div>
  );
}
