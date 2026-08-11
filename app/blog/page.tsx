import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/blog";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notícias, cuidados com animais e novidades da região — escrito por mim, direto da rotina do consultório.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default function BlogIndexPage() {
  return (
    <div className="bg-white-warm pb-24 pt-32 sm:pt-36">
      <div className="container-page">
        <p className="eyebrow">{profile.blog.eyebrow}</p>
        <h1 className="mt-4 max-w-[20ch] text-2xl">{profile.blog.heading}</h1>
        <p className="lede mt-4">{profile.blog.text}</p>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
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
                <h2 className="mt-2 text-md leading-snug text-graphite group-hover:text-accent-deep">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readTime} de leitura</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
