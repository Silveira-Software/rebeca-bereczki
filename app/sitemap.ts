import type { MetadataRoute } from "next";

// Substitua pelo domínio real ao publicar.
const SITE_URL = "https://SEU-DOMINIO-AQUI.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
