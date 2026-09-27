import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../../hooks/useActiveSection";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Use the same link targets for active-section tracking and both navigation layouts.
  const activeSection = useActiveSection(
    navItems.map((item) => item.href.substring(1)),
  );

  // Close the compact menu after a user follows one of its links.
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto max-w-7xl">
        <div className="rounded-full border border-white/10 bg-[#08090a]/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={closeMobileMenu}
              className="shrink-0 text-lg font-bold tracking-tight"
            >
              SJ<span className="text-[#b8ff5c]">.</span>
            </a>

            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative text-sm transition-colors duration-200 ${
                      isActive ? "text-white" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item.label}

                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#b8ff5c]" />
                    )}
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              className="hidden rounded-full bg-[#b8ff5c] px-5 py-2.5 text-sm font-semibold text-black transition duration-200 hover:scale-105 lg:block"
            >
              Let's Talk
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-white/20 hover:text-white lg:hidden"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mt-4 border-t border-white/10 pt-4 lg:hidden">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const sectionId = item.href.substring(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`rounded-lg px-3 py-3 text-sm transition ${
                        isActive
                          ? "bg-[#b8ff5c]/10 text-[#b8ff5c]"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}

                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="mt-2 rounded-full bg-[#b8ff5c] px-5 py-3 text-center text-sm font-semibold text-black"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
