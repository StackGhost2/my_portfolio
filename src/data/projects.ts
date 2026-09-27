import type { Project } from "../types/project";

// Project details live here so the Projects section can render each item from the same template.
export const projects: Project[] = [
  {
    title: "Habzo",
    description:
      "A product website for Habzo Collection, built with HTML and Tailwind CSS.",
    technologies: ["HTML", "Tailwind CSS"],
    category: "Frontend Development",
    image: "/images/projects/habzo/habzo.png",
    github: "#",
    live: "https://habzocollection.vercel.app/",
  },
  {
    title: "AttendanceGM",
    description:
      "A QR-based attendance management system designed to simplify attendance tracking and make record management more efficient.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    category: "Web Application",
    image: "/images/projects/attendancegm/cover.png",
    github: "#",
    live: "#",
  },
  {
    title: "RentGM",
    description:
      "A rental platform concept focused on improving how people discover rental properties and connect with property owners and agents in The Gambia.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    category: "Problem Solving",
    image: "/images/projects/rentgm/cover.png",
    github: "#",
  },
  {
    title: "Disease Prediction System",
    description:
      "A machine learning application that uses classification algorithms to predict possible diseases based on provided symptoms.",
    technologies: [
      "Python",
      "Machine Learning",
      "Decision Tree",
      "Random Forest",
    ],
    category: "Machine Learning",
    image: "/images/projects/disease-prediction/cover.png",
    github: "#",
  },
];
