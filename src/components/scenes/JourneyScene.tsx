import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";

export default function JourneyScene() {
  return (
    <section id="trajetoria" aria-labelledby="trajetoria-heading" className="scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="container-page">
        <Reveal type="fade">
          <p className="eyebrow">{profile.journey.eyebrow}</p>
        </Reveal>
        <Reveal type="blur">
          <h2 id="trajetoria-heading" className="mt-4 max-w-[22ch] text-xl">
            {profile.journey.intro}
          </h2>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-0">
          {profile.journey.steps.map((step) => (
            <div key={step.index} className="grid grid-cols-[64px_1fr] gap-8 border-t border-wine/10 py-10 last:border-b sm:grid-cols-[90px_1fr]">
              <span className="font-display italic text-md text-old-rose">{step.index}</span>
              <div>
                <h3 className="mb-2 text-md">{step.title}</h3>
                <p className="max-w-[52ch] text-muted">{step.text}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-14">
          <p className="max-w-[22ch] font-display text-lg text-graphite">
            Técnica veio junto. Responsabilidade cresceu. <em className="italic-emotional text-accent-deep">E o cuidado continuou o mesmo.</em>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
