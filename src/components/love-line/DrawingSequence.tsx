"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { useMotionProfile } from "@/hooks/useMotionProfile";
import { profile as data } from "@/data/profile";

// Quatro estágios de um único traço original, abstrato — nunca infantil,
// nunca um clip-art. Cada um se desenha e cede lugar ao próximo, preso
// (pin) na tela enquanto o visitante rola.
const STAGES = [
  // 01 — um afeto (curva assimétrica, não um coração literal)
  "M64,148 C64,90 122,62 172,94 C186,104 198,120 198,120 C198,120 214,102 232,92 C282,60 340,90 340,150 C340,210 262,240 202,290 C158,254 100,220 78,190 C68,178 64,164 64,148 Z",
  // 02 — um vínculo (perfil animal abstrato: orelha + dorso)
  "M70,222 C88,142 128,80 190,58 C212,50 232,58 220,80 C204,108 170,110 150,140 C222,108 302,120 330,180 C346,212 328,242 298,236 C258,228 228,190 188,190 C148,190 100,230 70,222 Z",
  // 03 — uma escuta (estetoscópio abstrato)
  "M130,50 C130,104 140,146 168,168 C136,190 114,222 134,252 C154,280 196,280 216,252 C236,222 214,190 182,168 C210,146 220,104 220,50",
  // 04 — uma trajetória (linha ascendente)
  "M40,262 C100,244 118,202 160,190 C202,178 210,138 252,118 C292,98 300,68 362,48",
];

export default function DrawingSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const profile = useMotionProfile();

  useEffect(() => {
    const paths = pathRefs.current.filter(Boolean) as SVGPathElement[];
    if (!paths.length) return;

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    if (profile === "none") {
      paths.forEach((p) => (p.style.strokeDashoffset = "0"));
      return;
    }

    const { gsap, ScrollTrigger } = getGsap();
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: profile === "light" ? "+=180%" : "+=260%",
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
      },
    });

    paths.forEach((path, i) => {
      tl.to(path, { strokeDashoffset: 0, duration: 1, ease: "none" }, i);
      if (i > 0) tl.to(paths[i - 1], { opacity: 0, duration: 0.3, ease: "none" }, i - 0.15);

      const label = labelRefs.current[i];
      const prevLabel = labelRefs.current[i - 1];
      if (label) tl.to(label, { opacity: 1, y: 0, duration: 0.3, ease: "none" }, i - 0.05);
      if (prevLabel) tl.to(prevLabel, { opacity: 0, duration: 0.3, ease: "none" }, i - 0.2);
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [profile]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white-warm to-blush py-20"
      aria-labelledby="desenho-heading"
    >
      <div className="container-page relative z-[3] mb-8 text-center">
        <p className="eyebrow justify-center">{data.drawing.eyebrow}</p>
        <h2 id="desenho-heading" className="font-display text-lg text-graphite">
          {data.drawing.heading}
        </h2>
      </div>

      <div className="relative aspect-[4/3] w-[min(80vw,640px)]">
        {STAGES.map((d, i) => (
          <svg key={i} viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <path
              ref={(el) => {
                pathRefs.current[i] = el;
              }}
              d={d}
              fill="none"
              stroke="#d43f74"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>

      <div className="relative z-[3] mt-8 h-10 text-center">
        {data.drawing.labels.map((label, i) => (
          <span
            key={label}
            ref={(el) => {
              labelRefs.current[i] = el;
            }}
            className={`absolute inset-0 font-display italic text-md text-wine transition-none ${
              i === 0 ? "opacity-100" : "opacity-0 translate-y-2"
            }`}
          >
            {label}
          </span>
        ))}
      </div>

      <p className="sr-only">
        Ilustração em linha, abstrata, representando a transformação do afeto pelos animais em prática médica
        veterinária.
      </p>
    </section>
  );
}
