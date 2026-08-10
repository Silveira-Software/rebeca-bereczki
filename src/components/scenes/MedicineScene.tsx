import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";

export default function MedicineScene() {
  return (
    <section id="medicina" aria-labelledby="medicina-heading" className="scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="container-page">
        <Reveal type="fade">
          <p className="eyebrow">{profile.medicine.eyebrow}</p>
        </Reveal>
        <Reveal type="blur">
          <h2 id="medicina-heading" className="mt-4 max-w-[24ch] text-3xl">
            {profile.medicine.title}
          </h2>
        </Reveal>

        <Reveal stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.medicine.cards.map((card) => (
            <div key={card.heading} className="rounded-md border border-wine/10 bg-white-warm p-8">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent-deep">{card.heading}</h3>
              <ul className="grid gap-2">
                {card.items.map((item) => (
                  <li key={item} className={`text-sm ${item.includes("[") || item.includes("a confirmar") ? "confirm-tag" : "text-muted"}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
