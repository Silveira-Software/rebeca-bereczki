"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { useMotionProfile } from "@/hooks/useMotionProfile";
import { profile } from "@/data/profile";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Reveal from "@/components/ui/Reveal";

export default function GalleryScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const motionProfile = useMotionProfile();

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    if (motionProfile !== "full") {
      track.classList.add("overflow-x-auto", "snap-x", "snap-mandatory", "pb-4");
      return;
    }

    const { gsap, ScrollTrigger } = getGsap();
    const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 96);

    const tween = gsap.to(track, {
      x: () => -getDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getDistance()}`,
        scrub: 0.7,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [motionProfile]);

  return (
    <section ref={sectionRef} id="momentos" aria-labelledby="momentos-heading" className="scroll-mt-24 overflow-hidden bg-white-warm py-24 sm:py-32">
      <div className="container-page mb-10">
        <Reveal type="fade">
          <p className="eyebrow">{profile.gallery.eyebrow}</p>
        </Reveal>
        <Reveal type="blur">
          <h2 id="momentos-heading" className="mt-4 text-xl">
            {profile.gallery.heading}
          </h2>
        </Reveal>
        <Reveal>
          <p className="lede mt-3">{profile.gallery.intro}</p>
        </Reveal>
      </div>

      <div className="container-page overflow-visible">
        <div ref={trackRef} className="flex w-max gap-8">
          {profile.gallery.items.map((item, i) => (
            <figure key={item.id} className={`relative w-[min(62vw,420px)] flex-shrink-0 snap-center ${i % 2 === 1 ? "mt-14" : ""}`}>
              <PhotoSlot src={profile.photos.gallery[i]} alt={item.caption} label={`[${item.placeholder}]`} className="aspect-[3/4]" />
              <figcaption className="absolute inset-x-4 bottom-4 z-[3] font-display italic text-sm text-white-warm [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
