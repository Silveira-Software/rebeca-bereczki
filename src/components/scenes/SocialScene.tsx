import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";

const PLATFORM_LABEL: Record<string, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
};

export default function SocialScene() {
  return (
    <section id="redes" aria-labelledby="redes-heading" className="scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="container-page">
        <Reveal type="fade">
          <p className="eyebrow">{profile.creator.eyebrow}</p>
        </Reveal>
        <Reveal type="blur">
          <h2 id="redes-heading" className="mt-4 max-w-[22ch] text-xl">
            {profile.creator.heading}
          </h2>
        </Reveal>
        <Reveal>
          <p className="lede mt-3">{profile.creator.text}</p>
        </Reveal>

        <Reveal stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {profile.creator.items.map((item) => (
            <div key={item.id} className="photo-slot relative aspect-[9/16]">
              <span className="photo-slot__label">[{item.placeholder}]</span>
              <span className="absolute left-3 top-3 z-[2] rounded-full bg-wine/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white-warm">
                {PLATFORM_LABEL[item.platform]}
              </span>
              {item.caption && !item.caption.includes("[") && (
                <span className="absolute inset-x-3 bottom-3 z-[2] font-display italic text-xs text-white-warm [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]">
                  {item.caption}
                </span>
              )}
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-12 flex flex-wrap gap-4">
          <a href={profile.links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Me segue no Instagram
          </a>
          <a href={profile.links.tiktok} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Me segue no TikTok
          </a>
          <a href={profile.links.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Se inscreve no YouTube
          </a>
        </Reveal>
      </div>
    </section>
  );
}
