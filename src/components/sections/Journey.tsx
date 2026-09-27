import { ArrowUpRight } from "lucide-react";
import { journey } from "../../data/journey";
import Reveal from "../common/Reveal";

export default function Journey() {
  return (
    <section id="journey" className="border-t border-white/10 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="mb-6 font-mono text-xs tracking-[0.25em] text-[#b8ff5c]">
                05 / JOURNEY
              </p>

              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Still learning.
                <span className="block text-zinc-500">Still building.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex items-end">
              <p className="max-w-xl text-lg leading-8 text-zinc-500">
                My journey so far has been about learning by building,
                experimenting with different technologies, and turning ideas
                into real applications.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-white/10 md:left-[95px]" />

          <div className="space-y-0">
            {/* The list order determines the order of milestones along the timeline. */}
            {journey.map((item, index) => (
              <Reveal key={item.period} delay={index * 0.08}>
                <article className="group relative grid gap-8 border-b border-white/10 py-10 md:grid-cols-[120px_1fr_auto] md:gap-12 md:px-6">
                  <div className="relative z-10 flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#08090a] font-mono text-xs text-zinc-500 transition group-hover:border-[#b8ff5c]/50 group-hover:text-[#b8ff5c]">
                      {item.period}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                      {item.description}
                    </p>

                    {item.technologies && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-600 transition group-hover:text-zinc-400"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="hidden items-center md:flex">
                    <ArrowUpRight
                      size={18}
                      className="text-zinc-700 transition group-hover:-translate-y-1 group-hover:text-[#b8ff5c]"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
