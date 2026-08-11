import { profile } from "@/data/profile";
import LoveLine from "@/components/love-line/LoveLine";

const FINAL_LINE_PATH =
  "M75,150 C75,95 118,68 150,102 C182,68 225,95 225,150 C225,205 155,242 150,248 C145,242 75,205 75,150 Z M100,155 C118,140 132,168 150,152 C168,168 182,140 200,155";

export default function FinalScene() {
  return (
    <section aria-labelledby="final-heading" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-white-warm py-24 text-center">
      <div className="mb-8 w-[min(420px,70vw)] aspect-square">
        <LoveLine d={FINAL_LINE_PATH} viewBox="0 0 300 300" mode="scroll" className="h-full w-full" />
      </div>

      <p id="final-heading" className="font-display text-xl text-graphite">
        {profile.name}
      </p>
      <p className="mt-2 text-sm font-bold uppercase tracking-[0.1em] text-accent-deep">{profile.title}</p>
      <p className="mt-6 max-w-[26ch] font-display italic text-md text-wine">&ldquo;{profile.finalQuote}&rdquo;</p>

      <div className="mt-10 flex gap-8">
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          LinkedIn
        </a>
        <a href={profile.links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          Instagram
        </a>
        <a href="/#contato" className="btn btn-ghost">
          Contato
        </a>
      </div>
    </section>
  );
}
