import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.title}`,
    short_name: "Dra. Rebeca",
    description: "Medicina veterinária com técnica. Cuidado com amor. Site profissional da médica veterinária Rebeca Fernandes Bereczki.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fbf6f3",
    theme_color: "#3e0f1f",
    lang: "pt-BR",
    icons: [
      { src: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/images/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
