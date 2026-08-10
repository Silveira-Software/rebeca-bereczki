import { profile } from "@/data/profile";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Reveal from "@/components/ui/Reveal";

export default function StorySection() {
  return (
    <section id="sobre" aria-labelledby="sobre-heading" className="scroll-mt-24 bg-white-warm py-24 sm:py-32">
      <div className="container-page grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        <Reveal type="scale">
          <PhotoSlot
            src={profile.photos.story}
            alt={`${profile.name} com atenção a um paciente`}
            label="[FOTO REBECA — variação close]"
            className="aspect-[4/5]"
          />
        </Reveal>

        <div>
          <Reveal type="fade">
            <p className="eyebrow">{profile.story.eyebrow}</p>
          </Reveal>
          <Reveal type="blur">
            <h2 id="sobre-heading" className="mt-4 max-w-[16ch] font-display text-lg font-normal leading-tight text-wine">
              Antes de existir a <em className="italic-emotional text-accent-deep">Dra. Rebeca</em>, já existia
              alguém que parava para cuidar.
            </h2>
          </Reveal>

          <Reveal stagger className="mt-8 space-y-4">
            {profile.story.paragraphs.map((p) => (
              <p key={p} className="max-w-[46ch] text-base text-muted">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal className="mt-8">
            <p className="font-display italic text-md text-accent-deep">{profile.story.transition}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
