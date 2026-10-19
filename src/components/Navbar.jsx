import { useState } from "react";
import { site, forms } from "../config";

const links = [
  { href: "#about", label: "About" },
  { href: "#book", label: "Courses" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="whitespace-nowrap font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
          Abacus<span className="text-brand">.</span>
          <span className="ml-1 text-base font-normal sm:text-lg text-white/70">of English</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-white/80 transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={forms.bookCoach}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand px-5 py-2 font-medium transition hover:bg-brand-dark"
            >
              Book Now
            </a>
          </li>
        </ul>

        <button
          className="-mr-2 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l14 14M20 6L6 20" />
            ) : (
              <path d="M3 7h20M3 13h20M3 19h20" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-white/10 px-4 pt-2 pb-5 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base text-white/80">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={forms.bookCoach}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-brand px-5 py-3 text-center font-medium transition hover:bg-brand-dark"
            >
              Book Now
            </a>
          </li>
        </ul>
      )}
      <span className="sr-only">{site.brand}</span>
    </header>
  );
}
