import { HtmlIcon, CssIcon, JavaScriptIcon, PythonIcon, ReactIcon, NextjsIcon, TailwindCssIcon, NodeJsIcon } from "@/components/icons";
import { CheckCircle } from "lucide-react";

export const skills = [
  {
    name: "JavaScript",
    description: "Building dynamic and interactive web applications.",
    icon: CheckCircle,
  },
  {
    name: "Python",
    description: "For backend development and data processing.",
    icon: CheckCircle,
  },
  {
    name: "HTML5",
    description: "Structuring web content with semantic markup.",
    icon: CheckCircle,
  },
  {
    name: "CSS3",
    description: "Designing beautiful and responsive layouts.",
    icon: CheckCircle,
  },
  {
    name: "React",
    description: "Creating powerful single-page applications.",
    icon: CheckCircle,
  },
  {
    name: "Next.js",
    description: "For server-side rendering and static site generation.",
    icon: CheckCircle,
  },
  {
    name: "Tailwind CSS",
    description: "Rapidly building custom user interfaces.",
    icon: CheckCircle,
  },
  {
    name: "Node.js",
    description: "Developing scalable backend services and APIs.",
    icon: CheckCircle,
  }
].map(skill => ({...skill, icon: CheckCircle}));

export const projects = [
  {
    id: "project-1",
    title: "Advanced Web Application",
    description: "A web application with a highly polished and refined user interface, and a beautifully crafted homepage. The application's impeccable organization and structure ensure a smooth and intuitive user experience.",
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
    id: "project-event",
    title: "Event Showcase Site",
    description: "A showcase site for an event agency, presenting their services and achievements with a modern and attractive design, created to captivate visitors.",
    tags: ["HTML", "CSS", "React", "JavaScript"],
    link: "https://paulevent.netlify.app",
  },
  {
    id: "project-elegant",
    title: "Simple and Elegant Showcase Site",
    description: "A simple yet elegant web showcase, designed to present a brand or product with a clean design and a first-class user experience.",
    tags: ["HTML", "CSS", "React", "JavaScript"],
    link: "https://heavenagency.netlify.app",
  },
  {
    id: "project-cleaning",
    title: "Super Clean - Cleaning Service",
    description: "A pristine and optimized showcase website for a cleaning service, designed to reflect the company's commitment to quality and cleanliness.",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://superpropre.netlify.app/",
  },
  {
    id: "project-advanced-event",
    title: "Advanced Event Platform",
    description: "A sophisticated and feature-rich website for an event agency, showcasing their portfolio and services with an immersive user experience.",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://paulevent.netlify.app",
  }
];
