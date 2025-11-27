import { HtmlIcon, CssIcon, JavaScriptIcon, PythonIcon, ReactIcon, NextjsIcon, TailwindCssIcon, NodeJsIcon } from "@/components/icons";

export const skills = [
  {
    name: "JavaScript",
    level: 95,
    description: "Building dynamic and interactive web applications.",
    icon: JavaScriptIcon,
  },
  {
    name: "Python",
    level: 85,
    description: "For backend development and data processing.",
    icon: PythonIcon,
  },
  {
    name: "HTML5",
    level: 100,
    description: "Structuring web content with semantic markup.",
    icon: HtmlIcon,
  },
  {
    name: "CSS3",
    level: 98,
    description: "Designing beautiful and responsive layouts.",
    icon: CssIcon,
  },
  {
    name: "React",
    level: 92,
    description: "Creating powerful single-page applications.",
    icon: ReactIcon,
  },
  {
    name: "Next.js",
    level: 90,
    description: "For server-side rendering and static site generation.",
    icon: NextjsIcon,
  },
  {
    name: "Tailwind CSS",
    level: 95,
    description: "Rapidly building custom user interfaces.",
    icon: TailwindCssIcon,
  },
  {
    name: "Node.js",
    level: 80,
    description: "Developing scalable backend services and APIs.",
    icon: NodeJsIcon,
  }
];

export const projects = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-featured online store with a modern UI, product management, and a secure checkout process.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://nuhm.netlify.app",
  },
  {
    id: "project-2",
    title: "Professional AI Productivity Web App",
    description: "One of my best projects, this professional AI productivity web application showcases my ability to deliver high-quality, robust solutions. While some features are currently disabled, the site is in its original state.",
    tags: ["React", "Python", "AI"],
    link: "https://fayol.netlify.app",
  },
  {
    id: "project-3",
    title: "Social Media App",
    description: "A mobile-first social network allowing users to connect, share posts, and interact in real-time.",
    tags: ["React Native", "Node.js", "Firebase"],
    link: "#",
  },
  {
    id: "project-4",
    title: "Corporate Landing Page",
    description: "A sleek and professional website for a corporate client, complete with a headless CMS for easy content updates.",
    tags: ["Next.js", "GraphQL", "Headless CMS"],
    link: "#",
  },
];
