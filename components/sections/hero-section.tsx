"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { hero } from "@/data/homepage";
import { fadeUp } from "@/lib/motion";

export function HeroSection() {
  const [showContent, setShowContent] = useState(false);
  const proofItems = [
    { label: "In-house workforce", value: "800–900 professionals" },
    { label: "Core model", value: "Owned infrastructure" },
    { label: "Delivery benchmark", value: "Before timeline" },
    { label: "Execution quality", value: "Corporate-grade control" },
  ] as const;
  const eventFocus = ["Product Launches", "Expos", "Foundation Ceremonies", "Factory Inaugurations"] as const;

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-[color:var(--border)] bg-[radial-gradient(circle_at_top_right,_rgba(143,31,59,0.12),transparent_42%),linear-gradient(to_bottom,#fffdfa,#fbf8f6)] py-24 md:py-32">
      <Container>
        <div className="grid items-end gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mb-8 rounded-2xl border border-[color:var(--border)] bg-white/90 p-4 shadow-[0_25px_60px_-45px_rgba(65,12,27,0.55)]"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">Maan Proof Strip</span>
                <span className="h-2 w-2 rounded-full bg-[color:var(--brand-accent)]" />
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {proofItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.14 + idx * 0.08 }}
                    className="rounded-lg border border-[color:var(--border)] bg-[color:var(--brand-surface)] px-3 py-2"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">{item.label}</p>
                    <p className="mt-1 text-xs font-medium text-slate-700">{item.value}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-700">
                {eventFocus.map((item, idx) => (
                  <motion.span
                    key={item}
                    className="rounded-full border border-[color:var(--border)] bg-white px-2.5 py-1.5"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 + idx * 0.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-primary)]"
            >
              {hero.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.55, delay: showContent ? 0.08 : 0, ease: "easeOut" }}
              className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl"
            >
              {hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.55, delay: showContent ? 0.14 : 0, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg"
            >
              {hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.45, delay: showContent ? 0.2 : 0, ease: "easeOut" }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <LuxuryButton href={hero.primaryCta.href} label={hero.primaryCta.label} />
              <LuxuryButton href={hero.secondaryCta.href} label={hero.secondaryCta.label} variant="secondary" />
            </motion.div>
          </div>

          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="relative h-[380px] rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_40px_100px_-50px_rgba(15,23,42,0.45)] md:h-[430px]"
          >
            <div className="flex h-full flex-col justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--brand-surface)]/70 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">Built for Scale</p>
              <div className="space-y-5">
                <p className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Infrastructure that powers impact.</p>
                <p className="max-w-md text-sm leading-relaxed text-slate-600 md:text-base">
                  In-house execution across structures, staging, climate systems, finishes, and on-ground operations.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <span className="rounded-xl border border-[color:var(--border)] bg-white px-3 py-2">Early delivery</span>
                <span className="rounded-xl border border-[color:var(--border)] bg-white px-3 py-2">Corporate-grade quality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
