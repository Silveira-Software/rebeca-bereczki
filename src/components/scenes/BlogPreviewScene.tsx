import Link from "next/link";
import { posts } from "@/data/blog";
import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

export default function BlogPreviewScene() {
  const latest = posts.slice(0, 3);

  return (
    <section id="blog" aria-labelledby="blog-heading" className="scroll-mt-24 bg-white-warm py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal type="fade">
              <p className="eyebrow">{profile.blog.eyebrow}</p>
            </Reveal>
            <Reveal type="blur">
              <h2 id="blog-heading" className="mt-4 max-w-[22ch] text-xl">
                {profile.blog.heading}
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <Link href="/blog" className="btn btn-outline">
              {profile.blog.ctaLabel}
            </Link>
          </Reveal>
        </div>

        <Reveal stagger className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-md border border-wine/10 bg-cream transition-transform duration-300 ease-soft hover:-translate-y-1"
            >
              <div className="photo-slot aspect-[4/3]">
                <span className="photo-slot__label">[{post.coverPlaceholder}]</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="signature-pair !text-old-rose">{post.category}</span>
                <h3 className="mt-2 text-md leading-snug text-graphite group-hover:text-accent-deep">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
                <span className="mt-4 text-xs text-muted">{formatDate(post.date)}</span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
