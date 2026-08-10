"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { useMotionProfile } from "@/hooks/useMotionProfile";

interface LoveLineProps {
  d: string;
  viewBox?: string;
  className?: string;
  /** "auto": desenha sozinha ao entrar na tela. "scroll": acompanha o scroll (scrub). */
  mode?: "auto" | "scroll";
  delay?: number;
}

/**
 * LoveLine — o fio condutor visual do site. Uma única linha rosa, fina,
 * original (sem clip-art), que se desenha sozinha ou acompanha o scroll.
 * Reaproveitada no Hero, na Cena do Desenho e na Cena Final.
 */
export default function LoveLine({ d, viewBox = "0 0 400 300", className, mode = "auto", delay = 0 }: LoveLineProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const profile = useMotionProfile();

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    if (profile === "none") {
      path.style.strokeDashoffset = "0";
      return;
    }

    const { gsap, ScrollTrigger } = getGsap();

    if (mode === "auto") {
      const tween = gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2.4,
        ease: "power2.inOut",
        delay,
      });
      return () => {
        tween.kill();
      };
    }

    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: path,
        start: "top 85%",
        end: "top 20%",
        scrub: 0.5,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [profile, mode, delay]);

  return (
    <svg viewBox={viewBox} className={className} aria-hidden="true">
      <path ref={pathRef} d={d} fill="none" stroke="#d43f74" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
