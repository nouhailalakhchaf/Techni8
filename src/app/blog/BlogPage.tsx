"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { BLOG_POSTS } from "@/lib/page-data";

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog / Insights"
        title="Perspectives"
        subtitle="Analyses, reflexions et retours d'experience sur l'architecture digitale, l'IA et la transformation numerique."
      />

      <section className="relative py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="space-y-6">
            {BLOG_POSTS.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="glass-card rounded-2xl p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="text-xs tracking-[0.2em] uppercase text-electric/40 font-mono">
                          {post.category}
                        </span>
                        <span className="text-xs text-light/20">{post.readTime}</span>
                      </div>
                      <time className="text-xs text-light/20">{post.date}</time>
                    </div>

                    <h2 className="text-xl md:text-2xl font-light text-light group-hover:gradient-text-blue transition-all duration-500 mb-3">
                      {post.title}
                    </h2>

                    <p className="text-sm text-light/35 leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 mt-6 text-xs text-electric/50 group-hover:text-electric transition-colors">
                      <span>Lire l&apos;article</span>
                      <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.5"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
