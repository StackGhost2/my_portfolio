import { ArrowDown } from "lucide-react";

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Java",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative grid min-h-screen place-items-center overflow-hidden px-6 pt-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8ff5c]/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#b8ff5c]" />

          <span className="font-mono text-xs tracking-wider text-zinc-500 sm:text-sm">
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        <h1 className="max-w-6xl text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[9rem]">
          I BUILD
          <span className="block text-zinc-500">DIGITAL</span>
          <span className="block text-[#b8ff5c]">SOLUTIONS.</span>
        </h1>

        <div className="mt-10 flex max-w-5xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-zinc-400 sm:text-xl">
              I'm <span className="text-white">Sankung Jaiteh</span>, a Computer
              Science student and full-stack developer from The Gambia. I turn
              real-world problems into practical software.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs text-zinc-500"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-full bg-[#b8ff5c] px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"
            >
              View my work
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-1"
              />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-zinc-400 transition hover:border-[#b8ff5c] hover:text-[#b8ff5c]"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-zinc-400 transition hover:border-[#b8ff5c] hover:text-[#b8ff5c]"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
