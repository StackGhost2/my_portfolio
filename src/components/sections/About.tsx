import Reveal from "../common/Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
        <Reveal>
          <div>
            <p className="mb-6 font-mono text-xs tracking-[0.25em] text-[#b8ff5c]">
              01 / ABOUT
            </p>

            <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Building with
              <span className="block text-zinc-500">purpose.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="max-w-2xl">
            <p className="text-xl leading-8 text-zinc-300 sm:text-2xl">
              I believe software should do more than look good. It should solve
              a problem, make someone's work easier, or create an opportunity
              that didn't exist before.
            </p>

            <p className="mt-8 leading-7 text-zinc-500">
              I'm a Computer Science student and full-stack developer from The
              Gambia. I enjoy building practical applications, designing backend
              systems, and turning ideas into products that people can actually
              use.
            </p>

            <p className="mt-5 leading-7 text-zinc-500">
              My interests span web development, backend engineering, system
              design, cybersecurity, and solving problems specific to the
              African context.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div>
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="mt-1 text-sm text-zinc-500">Projects</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">Full-Stack</p>
                <p className="mt-1 text-sm text-zinc-500">Developer</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">🇬🇲</p>
                <p className="mt-1 text-sm text-zinc-500">The Gambia</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-[#b8ff5c]">∞</p>
                <p className="mt-1 text-sm text-zinc-500">Ideas</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
