"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { useMotionProfile } from "@/hooks/useMotionProfile";
import { profile } from "@/data/profile";

export default function CareScene() {
  const listRef = useRef<HTMLDivElement>(null);
  const motionProfile = useMotionProfile();

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = Array.from(list.querySelectorAll<HTMLDivElement>("[data-care-item]"));

    if (motionProfile === "none") {
      items.forEach((i) => i.classList.add("is-active"));
      return;
    }

    const { ScrollTrigger } = getGsap();
    const triggers = items.map((item) =>
      ScrollTrigger.create({
        trigger: item,
        start: "top 65%",
        end: "bottom 35%",
        onEnter: () => item.classList.add("is-active"),
        onEnterBack: () => item.classList.add("is-active"),
        onLeave: () => item.classList.remove("is-active"),
        onLeaveBack: () => item.classList.remove("is-active"),
      })
    );

    return () => triggers.forEach((t) => t.kill());
  }, [motionProfile]);

  return (
    <section
      id="cuidado"
      aria-labelledby="cuidado-heading"
      className="scroll-mt-24 bg-[radial-gradient(120%_140%_at_50%_0%,#571b32_0%,#3e0f1f_55%,#2a0a16_100%)] py-24 text-white-warm sm:py-32"
    >
      <div className="container-page">
        <p className="eyebrow text-accent-soft">{profile.care.eyebrow}</p>
        <h2 id="cuidado-heading" className="sr-only">
          Como ela cuida: observar, ouvir, acolher, examinar, cuidar e acompanhar
        </h2>
        <p className="lede mt-3 text-white-warm/75">{profile.care.intro}</p>

        <div ref={listRef} className="mt-10">
          {profile.care.words.map((item) => (
            <div
              key={item.word}
              data-care-item
              className="care-item grid grid-cols-1 gap-4 border-t border-white-warm/15 py-10 last:border-b sm:grid-cols-2 sm:items-center sm:gap-10"
            >
              <p className="care-word font-display text-[clamp(2.6rem,4vw+1rem,6.5rem)] font-medium tracking-tight">
                {item.word}
                <span className="text-accent-soft">.</span>
              </p>
              <p className="care-desc max-w-[34ch] text-md">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
