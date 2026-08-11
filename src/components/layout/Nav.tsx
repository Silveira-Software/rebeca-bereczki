"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const LINKS = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#momentos", label: "Momentos" },
  { href: "/#redes", label: "Redes" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/blog", label: "Blog" },
  { href: "/#experiencia", label: "Experiência" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-5 py-5 transition-all duration-300 ease-soft sm:px-8 lg:px-[4.5rem] ${
        scrolled ? "bg-white-warm/85 shadow-[0_1px_0_rgba(62,15,31,0.06)] backdrop-blur-md" : ""
      }`}
    >
      <a href="/#hero" className="font-display text-lg font-semibold text-wine">
        Rebeca<span className="text-accent">.</span> Bereczki
      </a>

      <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs font-semibold uppercase tracking-[0.14em] text-graphite/75 transition-opacity hover:text-accent-deep hover:opacity-100"
          >
            {link.label}
          </a>
        ))}
        <a href="/#contato" className="rounded-full border border-wine px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-graphite">
          Contato
        </a>
      </nav>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir menu"
        aria-expanded={open}
        className="flex items-center p-2 md:hidden"
      >
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
          <path d="M0 1H22M0 7H22M0 13H22" stroke="#3e0f1f" strokeWidth={1.6} />
        </svg>
      </button>

      {open && (
        <nav
          aria-label="Navegação mobile"
          className="absolute inset-x-0 top-full flex flex-col items-start gap-5 bg-white-warm px-5 py-6 shadow-card md:hidden"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-graphite"
            >
              {link.label}
            </a>
          ))}
          <a href="/#contato" onClick={() => setOpen(false)} className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
            Contato
          </a>
        </nav>
      )}
      <span className="sr-only">{profile.name} — {profile.title}</span>
    </header>
  );
}
