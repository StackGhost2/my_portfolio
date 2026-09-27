export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  // Optional so a project can omit a preview or links that are not available yet.
  image?: string;
  github?: string;
  live?: string;
}
