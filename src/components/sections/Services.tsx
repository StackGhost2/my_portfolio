import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";
import Reveal from "../common/Reveal";

export default function Services() {
  return (
    <section id="services" className="border-t border-white/10 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="mb-6 font-mono text-xs tracking-[0.25em] text-[#b8ff5c]">
                04 / SERVICES
              </p>

              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                What I can
                <span className="block text-zinc-500">build for you.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex items-end">
              <p className="max-w-xl text-lg leading-8 text-zinc-500">
                From individual features to complete applications, I enjoy
                turning ideas and problems into working software.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="border-t border-white/10">
          {/* Render each service from the shared data list to keep rows consistent. */}
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.08}>
              <article className="group grid gap-6 border-b border-white/10 py-10 transition hover:bg-white/[0.02] md:grid-cols-[100px_1fr_1fr_auto] md:items-center md:px-6">
                <span className="font-mono text-sm text-zinc-600">
                  {service.number}
                </span>

                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  {service.title}
                </h3>

                <div>
                  <p className="max-w-lg leading-7 text-zinc-500">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-600 transition group-hover:text-zinc-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-600 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#b8ff5c]/50 group-hover:text-[#b8ff5c] md:flex">
                  <ArrowUpRight size={18} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
