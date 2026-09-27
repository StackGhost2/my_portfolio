import { ArrowUpRight, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
  },
];

export default function Footer() {
  // Keep the copyright year current without needing an annual content update.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <a href="#home" className="text-xl font-bold tracking-tight">
              SJ<span className="text-[#b8ff5c]">.</span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600">
              Full-stack developer building practical digital solutions from The
              Gambia.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-white"
              >
                {social.label}

                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}

            <a
              href="#home"
              className="group flex items-center gap-2 text-sm text-zinc-500 transition hover:text-[#b8ff5c]"
            >
              Back to top
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition group-hover:border-[#b8ff5c]/50">
                <ArrowUp size={14} />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Sankung Jaiteh. All rights reserved.</p>

          <p>Designed & built with React + TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}
