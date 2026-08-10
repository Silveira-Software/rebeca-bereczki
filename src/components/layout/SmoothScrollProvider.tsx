"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { getGsap } from "@/lib/gsap";
import { useMotionProfile } from "@/hooks/useMotionProfile";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const profile = useMotionProfile();

  useEffect(() => {
    const { gsap, ScrollTrigger } = getGsap();

    if (profile === "none") {
      // Movimento reduzido: scroll nativo, sem Lenis, sem scrub pesado.
      ScrollTrigger.defaults({ scrub: false });
      return;
    }

    const lenis = new Lenis({
      duration: profile === "light" ? 0.9 : 1.15,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: profile === "light" ? 1.4 : 1.1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.removeEventListener("load", onLoad);
    };
  }, [profile]);

  return <>{children}</>;
}
