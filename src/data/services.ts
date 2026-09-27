import type { Service } from "../types/service";

// Service entries are rendered as repeated rows in the Services section.
export const services: Service[] = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building modern, responsive web applications that are designed around real user needs and business goals.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Designing APIs, authentication systems, databases, and backend architectures that power reliable applications.",
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    number: "03",
    title: "Full-Stack Applications",
    description:
      "Taking an idea from frontend to backend and connecting the pieces into a complete, functional product.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    number: "04",
    title: "Problem Solving",
    description:
      "Turning real-world problems into practical software solutions, with a particular interest in challenges faced in The Gambia.",
    technologies: ["System Design", "APIs", "Databases", "Automation"],
  },
];
