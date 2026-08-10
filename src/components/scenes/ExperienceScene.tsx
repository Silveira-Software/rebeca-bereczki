import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";

export default function ExperienceScene() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-heading" className="scroll-mt-24 bg-white-warm py-24 sm:py-32">
      <div className="container-page">
        <Reveal type="fade">
          <p className="eyebrow">{profile.experience.eyebrow}</p>
        </Reveal>
        <h2 id="experiencia-heading" className="sr-only">
          Experiência profissional
        </h2>

        {profile.experience.entries.map((entry) => (
          <Reveal key={entry.org} className="flex min-h-[50vh] flex-col justify-center border-t border-wine/10 py-14 last:border-b">
            <h3 className="font-display text-[clamp(2.2rem,3vw+1rem,4.6rem)] text-wine">{entry.org}</h3>
            <div className="mt-2 flex flex-wrap gap-6 text-sm text-muted">
              <span className="font-bold text-accent-deep">{entry.role}</span>
              <span className={entry.period.includes("[") ? "confirm-tag" : ""}>{entry.period}</span>
            </div>
            <p className="mt-6 max-w-[52ch] text-muted">{entry.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
