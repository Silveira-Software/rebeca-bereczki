import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";

export default function EducationScene() {
  return (
    <section
      id="formacao"
      aria-labelledby="formacao-heading"
      className="scroll-mt-24 bg-gradient-to-b from-white-warm via-blush to-white-warm py-24 sm:py-32"
    >
      <div className="container-page grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        <Reveal type="scale">
          <div className="rounded-lg bg-gradient-to-br from-blush to-white-warm p-10 shadow-card sm:p-14">
            <p className="eyebrow">{profile.education.eyebrow}</p>
            <p className="mt-4 font-display text-lg text-graphite">{profile.education.institution}</p>
            <p className="mt-2 font-bold text-accent-deep">{profile.education.degree}</p>
            <p className="mt-3 text-sm text-muted">{profile.education.years}</p>
          </div>
        </Reveal>

        <Reveal>
          <h2 id="formacao-heading" className="text-lg">
            {profile.education.heading}
          </h2>
          <p className="mt-4 max-w-[42ch] text-muted">{profile.education.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
