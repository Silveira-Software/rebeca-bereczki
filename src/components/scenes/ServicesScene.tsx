"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";
import BookingModal from "@/components/booking/BookingModal";

export default function ServicesScene() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="servicos" aria-labelledby="servicos-heading" className="scroll-mt-24 bg-white-warm py-24 sm:py-32">
      <div className="container-page">
        <Reveal type="fade">
          <p className="eyebrow">{profile.services.eyebrow}</p>
        </Reveal>
        <Reveal type="blur">
          <h2 id="servicos-heading" className="mt-4 max-w-[26ch] text-3xl">
            {profile.services.heading}
          </h2>
        </Reveal>
        <Reveal>
          <p className="lede mt-3">{profile.services.text}</p>
        </Reveal>

        <Reveal stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {profile.services.items.map((item) => (
            <div key={item.title} className="rounded-md border border-wine/10 bg-cream p-8">
              <h3 className="text-md text-wine">{item.title}</h3>
              <p className="mt-2 max-w-[42ch] text-sm text-muted">{item.text}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-12">
          <button onClick={() => setBookingOpen(true)} className="btn btn-primary">
            {profile.services.ctaLabel}
          </button>
        </Reveal>
      </div>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}
