import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "../common/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="mb-6 font-mono text-xs tracking-[0.25em] text-[#b8ff5c]">
                06 / CONTACT
              </p>

              <h2 className="max-w-2xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
                Have an idea?
                <span className="block text-zinc-500">Let's build it.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col justify-between">
              <div>
                <p className="max-w-xl text-lg leading-8 text-zinc-400">
                  Whether you have a project in mind, want to collaborate, or
                  simply want to talk about technology, feel free to reach out.
                </p>

                {/* Replace the placeholder address in both email links with your own. */}
                <a
                  href="mailto:your-email@example.com"
                  className="group mt-8 inline-flex items-center gap-3 text-xl font-medium text-white transition hover:text-[#b8ff5c]"
                >
                  <Mail size={20} />
                  your-email@example.com
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div className="mt-12">
                <a
                  href="mailto:your-email@example.com"
                  className="inline-flex items-center gap-3 rounded-full bg-[#b8ff5c] px-6 py-3 font-semibold text-black transition hover:scale-105"
                >
                  Start a conversation
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="mt-20 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#b8ff5c]" />

                <span className="font-mono text-xs tracking-wider text-zinc-500">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>

              <p className="text-sm text-zinc-600">
                The Gambia · Available remotely
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
