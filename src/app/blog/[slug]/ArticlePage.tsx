"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/page-data";

export default function ArticlePage({ slug }: { slug: string }) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-light/40">Article introuvable.</p>
      </div>
    );
  }

  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-deep to-deep" />
        <div className="absolute inset-0 grid-overlay opacity-20" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/blog"
              className="text-xs tracking-[0.15em] uppercase text-electric/40 hover:text-electric transition-colors inline-flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Retour aux insights
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-xs tracking-[0.2em] uppercase text-electric/40 font-mono">
                {post.category}
              </span>
              <span className="text-xs text-light/20">{post.readTime}</span>
              <time className="text-xs text-light/20">{post.date}</time>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight gradient-text-blue leading-tight">
              {post.title}
            </h1>

            <p className="text-light/50 text-lg leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      <article className="relative py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div
            className="prose-custom space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-light/45 leading-relaxed">
              Cet article sera prochainement disponible via notre systeme de gestion de contenu.
              L&apos;architecture headless WordPress permettra la publication et la gestion
              dynamique de tous les contenus editoraux.
            </p>

            <div className="glass-card rounded-xl p-6 mt-8">
              <p className="text-sm text-light/30">
                Le contenu dynamique sera servi via l&apos;API WordPress headless,
                avec rendu cote serveur par Next.js pour des performances optimales
                et un SEO maximal.
              </p>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
}
