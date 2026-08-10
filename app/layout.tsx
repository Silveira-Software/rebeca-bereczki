import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { profile } from "@/data/profile";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://SEU-DOMINIO-AQUI.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.title} | Medicina com Afeto`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Rebeca Fernandes Bereczki, médica veterinária em Osasco, São Paulo. Medicina com técnica, cuidado com amor. Conheça sua trajetória, formação em Medicina Veterinária e áreas de atuação em clínica de pequenos animais.",
  authors: [{ name: profile.name }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    siteName: profile.name,
    title: `${profile.name} — ${profile.title}`,
    description: "Medicina com técnica. Cuidado com amor. Conheça a trajetória da médica veterinária Rebeca Fernandes Bereczki.",
    url: "/",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: `${profile.name} — ${profile.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: "Medicina com técnica. Cuidado com amor.",
    images: ["/images/og-cover.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/favicon.svg", type: "image/svg+xml" },
      { url: "/images/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/images/apple-touch-icon.png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#3e0f1f",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  givenName: profile.firstName,
  familyName: "Fernandes Bereczki",
  jobTitle: profile.title,
  description: "Médica veterinária formada pela UNINOVE, atuante em clínica de pequenos animais, com vivência prévia como auxiliar veterinária.",
  url: SITE_URL,
  image: `${SITE_URL}/images/og-cover.jpg`,
  address: { "@type": "PostalAddress", addressLocality: "Osasco", addressRegion: "SP", addressCountry: "BR" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "UNINOVE" },
  knowsAbout: ["Medicina Veterinária", "Clínica Veterinária", "Pequenos Animais"],
  sameAs: [profile.links.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        {/* JSON-LD: renderizado no body — abordagem recomendada pelo Next.js App Router */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <a href="#conteudo" className="sr-only fixed left-0 top-0 z-[9999] rounded-br-sm bg-wine px-6 py-4 font-semibold text-white-warm focus:not-sr-only">
          Pular para o conteúdo
        </a>
        <SmoothScrollProvider>
          <Nav />
          <main id="conteudo">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
