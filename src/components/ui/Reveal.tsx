"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { getGsap } from "@/lib/gsap";
import { useMotionProfile } from "@/hooks/useMotionProfile";

interface RevealProps {
  children: ReactNode;
  className?: string;
  type?: "up" | "fade" | "scale" | "blur";
  delay?: number;
  /** Anima os filhos diretos em stagger, em vez do próprio elemento. */
  stagger?: boolean;
}

/**
 * Reveal — cada cena aparece suavemente conforme entra na tela.
 * Um único sistema para manter o motion consistente e leve; nunca
 * bloqueia o scroll e nunca faz o visitante esperar a animação terminar.
 */
export default function Reveal({ children, className, type = "up", delay = 0, stagger = false }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const profile = useMotionProfile();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (profile === "none") {
      el.style.opacity = "1";
      el.style.transform = "none";
      Array.from(el.children).forEach((c) => {
        (c as HTMLElement).style.opacity = "1";
        (c as HTMLElement).style.transform = "none";
      });
      return;
    }

    const { gsap } = getGsap();
    const targets = stagger ? Array.from(el.children) : el;

    const from =
      type === "scale"
        ? { opacity: 0, scale: 0.94 }
        : type === "fade"
        ? { opacity: 0 }
        : type === "blur"
        ? { opacity: 0, y: 36, filter: "blur(6px)" }
        : { opacity: 0, y: 26 };

    const tween = gsap.fromTo(targets, from, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: type === "blur" ? 1.1 : 0.95,
      ease: "power3.out",
      delay,
      stagger: stagger ? 0.12 : 0,
      scrollTrigger: { trigger: el, start: "top 85%" },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [profile, type, delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
