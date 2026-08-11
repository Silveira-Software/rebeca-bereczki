import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/data/blog";
import { profile } from "@/data/profile";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: profile.name },
  };

  return (
    <article className="bg-white-warm pb-24 pt-32 sm:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <div className="container-page max-w-[72ch]">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-wine hover:text-accent-deep">
          ← Voltar pro blog
        </Link>

        <p className="signature-pair mt-8 !text-old-rose">{post.category}</p>
        <h1 className="mt-3 text-2xl leading-tight">{post.title}</h1>
        <div className="mt-4 flex gap-4 text-sm text-muted">
          <span>{profile.name}</span>
          <span>·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readTime} de leitura</span>
        </div>

        <div className="photo-slot mt-10 aspect-[16/9]">
          <span className="photo-slot__label">[{post.coverPlaceholder}]</span>
        </div>

        <div className="mt-10 space-y-5">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-base text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-wine/10 bg-cream p-8 text-center">
          <p className="font-display italic text-md text-wine">Ficou com alguma dúvida sobre seu pet?</p>
          <Link href="/#contato" className="btn btn-primary mt-5">
            Vamos conversar
          </Link>
        </div>
      </div>
    </article>
  );
}
