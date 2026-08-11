"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { useMotionProfile } from "@/hooks/useMotionProfile";
import { profile } from "@/data/profile";
import LoveLine from "@/components/love-line/LoveLine";
import PhotoSlot from "@/components/ui/PhotoSlot";

const HERO_LINE_PATH =
  "M -50,640 C 180,600 320,700 520,560 C 720,430 830,520 1000,380 C 1080,320 1150,340 1260,260";

export default function HeroScene() {
  const rootRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const motionProfile = useMotionProfile();

  // Entrada do título + partículas discretas + parallax sutil da foto.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const { gsap, ScrollTrigger } = getGsap();
    const lines = root.querySelectorAll(".hero-title-line span");
    const fades = root.querySelectorAll("[data-hero-fade]");

    if (motionProfile === "none") {
      gsap.set([lines, fades], { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.set(lines, { yPercent: 120 })
      .set(fades, { opacity: 0, y: 18 })
      .to(lines, { yPercent: 0, duration: 1.1, stagger: 0.09 }, 0.15)
      .to(fades, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, 0.55);

    let particleTweens: ReturnType<typeof gsap.to>[] = [];
    if (motionProfile === "full" && particlesRef.current) {
      const layer = particlesRef.current;
      for (let i = 0; i < 16; i++) {
        const dot = document.createElement("span");
        const size = 2 + Math.random() * 3;
        dot.className = "absolute rounded-full bg-accent-soft blur-[0.5px]";
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.opacity = "0";
        layer.appendChild(dot);
        particleTweens.push(
          gsap.to(dot, {
            opacity: 0.35 + Math.random() * 0.35,
            y: -40 - Math.random() * 60,
            duration: 6 + Math.random() * 6,
            delay: Math.random() * 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          })
        );
      }
    }

    let parallaxTween: ReturnType<typeof gsap.to> | null = null;
    if (photoRef.current) {
      parallaxTween = gsap.fromTo(
        photoRef.current,
        { y: -22 },
        { y: 22, ease: "none", scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true } }
      );
    }

    return () => {
      tl.kill();
      particleTweens.forEach((t) => t.kill());
      parallaxTween?.scrollTrigger?.kill();
      parallaxTween?.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === root) st.kill();
      });
    };
  }, [motionProfile]);

  return (
    <section
      ref={rootRef}
      id="hero"
      aria-label="Abertura"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[radial-gradient(120%_90%_at_18%_12%,#f6dbe1_0%,transparent_55%),radial-gradient(100%_80%_at_85%_85%,#e9d3c8_0%,transparent_60%),linear-gradient(160deg,#fbf6f3_0%,#f7efe6_60%,#f6dbe1_130%)]"
    >
      <div ref={particlesRef} className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
      <LoveLine d={HERO_LINE_PATH} viewBox="0 0 1200 800" className="absolute inset-0 z-[1] h-full w-full" delay={0.5} />

      <div className="container-page relative z-[2] grid grid-cols-1 items-center gap-14 pt-24 md:grid-cols-12 md:pt-28">
        <div className="md:col-span-7">
          <p data-hero-fade className="font-display italic text-md mb-2 text-old-rose">
            {profile.hero.kicker}
          </p>

          <h1 className="flex flex-col gap-0.5 text-3xl">
            <span className="font-body text-md font-medium tracking-normal text-muted">Dra.</span>
            {profile.hero.titleParts.map((part) => (
              <span key={part} className="hero-title-line overflow-hidden">
                <span className="inline-block will-change-transform">{part}</span>
              </span>
            ))}
          </h1>

          <p data-hero-fade className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-accent-deep">
            {profile.title}
          </p>

          <p data-hero-fade className="mt-6 max-w-[30ch] font-display text-md text-graphite">
            Medicina veterinária com técnica. <em className="italic-emotional text-accent-deep">Cuidado com amor.</em>
          </p>

          <div data-hero-fade className="mt-10 flex flex-wrap gap-4">
            <a href="/#contato" className="btn btn-primary">
              {profile.hero.ctaPrimary}
            </a>
            <a href={profile.links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              {profile.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div ref={photoRef} className="relative md:col-span-5">
          <PhotoSlot
            src={profile.photos.hero}
            alt={`${profile.name} — retrato principal, minha apresentação`}
            label={"[FOTO REBECA HERO]\ncomposição vertical, 3:4, luz suave"}
            className="aspect-[3/4] rounded-lg rounded-br-[46%] shadow-soft"
            priority
            sizes="(min-width: 768px) 40vw, 90vw"
          />
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 -z-10 h-[62%] w-[62%] rounded-lg rounded-br-[46%] border-[1.5px] border-old-rose/60"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted" aria-hidden="true">
        <span>Role</span>
        <span className="relative h-10 w-px overflow-hidden bg-gradient-to-b from-old-rose to-transparent">
          <span className="absolute inset-0 -translate-y-full animate-drift bg-accent" />
        </span>
      </div>
    </section>
  );
}
