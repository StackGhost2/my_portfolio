import Reveal from "../common/Reveal";

const techGroups = [
  {
    title: "Frontend",
    description: "Building responsive and interactive interfaces.",
    technologies: ["React", "TypeScript", "Angular", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Designing APIs and scalable server-side systems.",
    technologies: ["Node.js", "Express", "Java", "REST APIs"],
  },
  {
    title: "Database",
    description: "Working with structured and document-based data.",
    technologies: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    title: "Tools",
    description: "Tools I use throughout the development process.",
    technologies: ["Git", "GitHub", "Postman", "Figma"],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="border-t border-white/10 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="mb-6 font-mono text-xs tracking-[0.25em] text-[#b8ff5c]">
                02 / TECH STACK
              </p>

              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Tools I use to
                <span className="block text-zinc-500">build things.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex items-end">
              <p className="max-w-xl text-lg leading-8 text-zinc-500">
                I work across the stack, from designing interfaces to building
                APIs, databases, and the systems behind them.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
          {/* Group technologies by role so the same markup works for every category. */}
          {techGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.08}
              className="border-b border-r border-white/10"
            >
              <div className="p-8 transition hover:bg-white/[0.02] sm:p-10">
                <div className="mb-8 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {group.title}
                  </h3>

                  <span className="font-mono text-xs text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mb-8 max-w-sm text-sm leading-6 text-zinc-500">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400 transition hover:border-[#b8ff5c]/50 hover:text-[#b8ff5c]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 rounded-2xl border border-white/10 p-8 sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-2 font-mono text-xs tracking-wider text-zinc-600">
                  CURRENTLY EXPLORING
                </p>

                <h3 className="text-xl font-semibold">
                  Always learning. Always building.
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Cybersecurity", "DevOps", "Cloud", "System Design"].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#b8ff5c]/10 px-4 py-2 text-sm text-[#b8ff5c]"
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
