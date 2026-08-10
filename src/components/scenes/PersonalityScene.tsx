import { profile } from "@/data/profile";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Reveal from "@/components/ui/Reveal";

export default function PersonalityScene() {
  return (
    <section id="pessoa" aria-labelledby="pessoa-heading" className="scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="container-page grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal type="fade">
            <p className="eyebrow">{profile.personality.eyebrow}</p>
          </Reveal>
          <Reveal type="blur">
            <h2 id="pessoa-heading" className="mt-4 text-xl">
              {profile.personality.heading}
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-3 max-w-[34ch] font-display text-md text-wine">{profile.personality.headingEm}</p>
          </Reveal>

          <Reveal stagger className="mt-8 flex flex-wrap gap-3">
            {profile.personality.traits.map((trait) => (
              <span key={trait} className="pair-badge">
                <span className="text-accent">•</span> {trait}
              </span>
            ))}
          </Reveal>

          <Reveal className="mt-8">
            <p className="max-w-[42ch] text-muted">{profile.personality.closing}</p>
          </Reveal>
        </div>

        <Reveal type="scale" className="grid grid-cols-2 gap-4">
          <PhotoSlot src={profile.photos.personality[0]} alt="Rebeca fora do consultório" label="[FOTO PESSOAL 01]" className="col-span-2 aspect-video" />
          <PhotoSlot src={profile.photos.personality[1]} alt="Rebeca — retrato pessoal" label="[FOTO PESSOAL 02]" className="aspect-square" />
          <PhotoSlot src={profile.photos.personality[2]} alt="Rebeca — retrato pessoal" label="[FOTO PESSOAL 03]" className="aspect-square" />
        </Reveal>
      </div>
    </section>
  );
}
