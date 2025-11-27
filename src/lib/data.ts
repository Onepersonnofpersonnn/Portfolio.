import { HtmlIcon, CssIcon, JavaScriptIcon, PythonIcon, ReactIcon, NextjsIcon, TailwindCssIcon, NodeJsIcon } from "@/components/icons";

export const skills = [
  {
    name: "JavaScript",
    level: 95,
    description: "Building dynamic and interactive web applications.",
    icon: CheckCircle,
  },
  {
    name: "Python",
    level: 85,
    description: "For backend development and data processing.",
    icon: CheckCircle,
  },
  {
    name: "HTML5",
    level: 100,
    description: "Structuring web content with semantic markup.",
    icon: CheckCircle,
  },
  {
    name: "CSS3",
    level: 98,
    description: "Designing beautiful and responsive layouts.",
    icon: CheckCircle,
  },
  {
    name: "React",
    level: 92,
    description: "Creating powerful single-page applications.",
    icon: CheckCircle,
  },
  {
    name: "Next.js",
    level: 90,
    description: "For server-side rendering and static site generation.",
    icon: CheckCircle,
  },
  {
    name: "Tailwind CSS",
    level: 95,
    description: "Rapidly building custom user interfaces.",
    icon: CheckCircle,
  },
  {
    name: "Node.js",
    level: 80,
    description: "Developing scalable backend services and APIs.",
    icon: CheckCircle,
  }
].map(skill => ({...skill, icon: CheckCircle}));

import { CheckCircle } from "lucide-react";

export const projects = [
  {
    id: "project-1",
    title: "Application web avancée",
    description: "Une application web avec une interface utilisateur très poussée et soignée, et une page d'accueil magnifiquement créée. L'organisation et la structure impeccables de l'application garantissent une expérience utilisateur fluide et intuitive.",
    tags: ["HTML", "CSS", "Next.js", "React", "Tailwind CSS"],
    link: "https://nuhm.netlify.app",
  },
  {
    id: "project-2",
    title: "Professional AI Productivity Web App",
    description: "One of my best projects, this professional AI productivity web application showcases my ability to deliver high-quality, robust solutions. While some features are currently disabled, the site is in its original state.",
    tags: ["HTML", "CSS", "React", "Python", "AI"],
    link: "https://fayol.netlify.app",
  },
  {
    id: "project-4",
    title: "Qualité du Rendu",
    description: "Un rendu visuel impeccable et une attention méticuleuse aux détails. Chaque projet est conçu pour offrir une expérience utilisateur esthétique, intuitive et mémorable sur tous les appareils.",
    tags: ["HTML", "CSS", "UI/UX", "Design", "Responsive"],
    link: "#",
  },
];
