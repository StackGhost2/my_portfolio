import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { projects } from "../../data/projects";
import Reveal from "../common/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="mb-6 font-mono text-xs tracking-[0.25em] text-[#b8ff5c]">
                03 / PROJECTS
              </p>

              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Things I've
                <span className="block text-zinc-500">built.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex items-end">
              <p className="max-w-xl text-lg leading-8 text-zinc-500">
                A selection of projects where I've explored different
                technologies while solving practical problems.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="space-y-8">
          {/* Each project uses the same layout; its data controls the image and available links. */}
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition duration-500 hover:border-white/20 hover:bg-white/[0.04]">
                <div className="relative aspect-[16/8] overflow-hidden border-b border-white/10 bg-[#0d0f10]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <ImageIcon
                          size={32}
                          className="mx-auto text-zinc-700"
                        />

                        <p className="mt-3 font-mono text-xs tracking-wider text-zinc-700">
                          PROJECT PREVIEW
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#08090a]/80 font-mono text-xs text-zinc-400 backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute right-6 top-6">
                    <span className="rounded-full border border-white/10 bg-[#08090a]/80 px-3 py-1.5 font-mono text-xs text-[#b8ff5c] backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-[1fr_auto]">
                  <div className="p-7 sm:p-9">
                    <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500 transition group-hover:border-white/15 group-hover:text-zinc-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/10 px-7 py-5 md:border-l md:border-t-0 md:px-8">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
                      >
                        GitHub
                        <ArrowUpRight size={15} />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-[#b8ff5c]"
                      >
                        Live
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center gap-3 text-sm text-zinc-600">
            <span className="h-px w-8 bg-zinc-700" />
            More projects coming soon.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
