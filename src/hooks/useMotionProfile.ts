"use client";

import { useEffect, useState } from "react";

export type MotionProfile = "none" | "light" | "full";

/**
 * Decide a intensidade do motion: respeita prefers-reduced-motion e reduz
 * automaticamente em telas pequenas / ponteiros grossos (mobile), conforme
 * a direção própria pedida para o mobile (menos WebGL, menos paralaxe).
 */
export function useMotionProfile(): MotionProfile {
  const [profile, setProfile] = useState<MotionProfile>("full");

  useEffect(() => {
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 760px)");
    const coarseQuery = window.matchMedia("(pointer: coarse)");

    const compute = () => {
      if (reduceQuery.matches) return "none" as const;
      if (mobileQuery.matches || coarseQuery.matches) return "light" as const;
      return "full" as const;
    };

    const update = () => {
      const next = compute();
      setProfile(next);
      document.documentElement.classList.toggle("reduce-motion", next === "none");
    };

    update();
    reduceQuery.addEventListener("change", update);
    mobileQuery.addEventListener("change", update);
    coarseQuery.addEventListener("change", update);

    return () => {
      reduceQuery.removeEventListener("change", update);
      mobileQuery.removeEventListener("change", update);
      coarseQuery.removeEventListener("change", update);
    };
  }, []);

  return profile;
}
