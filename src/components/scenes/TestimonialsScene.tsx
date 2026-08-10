import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";

export default function TestimonialsScene() {
  const hasTestimonials = profile.testimonials.items.length > 0;

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-heading" className="scroll-mt-24 bg-white-warm py-24 sm:py-32">
      <div className="container-page">
        <h2 id="depoimentos-heading" className="sr-only">
          Depoimentos
        </h2>

        {hasTestimonials ? (
          <Reveal stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {profile.testimonials.items.map((t) => (
              <blockquote key={t.name} className="rounded-md border border-wine/10 bg-cream p-8">
                <p className="font-display italic text-md text-wine">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm text-muted">
                  <strong className="text-graphite">{t.name}</strong> — {t.role}
                </footer>
              </blockquote>
            ))}
          </Reveal>
        ) : (
          <Reveal>
            <div className="mx-auto max-w-[60ch] rounded-lg border border-dashed border-wine/25 p-14 text-center">
              <p className="italic-emotional text-md text-wine">{profile.testimonials.heading}</p>
              <p className="mt-3 text-muted">{profile.testimonials.text}</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
