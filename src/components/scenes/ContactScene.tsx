import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";

export default function ContactScene() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="scroll-mt-24 bg-[radial-gradient(120%_140%_at_50%_0%,#571b32_0%,#3e0f1f_55%,#2a0a16_100%)] py-24 text-white-warm sm:py-32"
    >
      <div className="container-page">
        <p className="eyebrow text-accent-soft">Vamos conversar</p>
        <h2 id="contato-heading" className="sr-only">
          Contato
        </h2>

        <Reveal stagger className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-white-warm/15 bg-white-warm/5 p-10 backdrop-blur-sm">
            <p className="signature-pair !text-accent-soft">{profile.signaturePairs[0]}</p>
            <h3 className="mt-3 text-lg text-white-warm">{profile.contact.clinics.heading}</h3>
            <p className="mt-2 max-w-[34ch] text-white-warm/75">{profile.contact.clinics.text}</p>
            <a href={`mailto:${profile.links.email}`} className="btn btn-primary mt-8">
              {profile.contact.clinics.ctaLabel}
            </a>
          </div>

          <div className="rounded-lg border border-white-warm/15 bg-white-warm/5 p-10 backdrop-blur-sm">
            <p className="signature-pair !text-accent-soft">{profile.signaturePairs[1]}</p>
            <h3 className="mt-3 text-lg text-white-warm">{profile.contact.tutors.heading}</h3>
            <p className="mt-2 max-w-[34ch] text-white-warm/75">{profile.contact.tutors.text}</p>
            <a
              href={profile.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-8 !border-white-warm/40 !text-white-warm hover:!bg-white-warm/10"
            >
              {profile.contact.tutors.ctaLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
