import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 bg-cream px-5 py-8 text-xs text-muted sm:px-8 lg:px-[4.5rem]">
      <span>
        © {year} {profile.name} — {profile.title}.
      </span>
      <span className="confirm-tag">Alguns dados deste site são placeholders e serão atualizados conforme confirmação.</span>
      <a
        href="https://silveira-software.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted transition-colors hover:text-accent-deep"
      >
        made by @kaduapps
      </a>
    </footer>
  );
}
