"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { portfolio } from "@/data/homepage";
import { softLift } from "@/lib/motion";

export function PortfolioSection() {
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--brand-surface)] py-24 md:py-32" id="portfolio">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-primary)]">Portfolio</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Execution across high-stakes event categories
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                Representative formats delivered for enterprise, industrial, institutional, and public-sector clients.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">Portfolio Outcomes</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700">
                <span className="rounded-xl border border-[color:var(--border)] bg-[color:var(--brand-surface)] px-3 py-2">High-visibility formats</span>
                <span className="rounded-xl border border-[color:var(--border)] bg-[color:var(--brand-surface)] px-3 py-2">Stakeholder-ready execution</span>
                <span className="rounded-xl border border-[color:var(--border)] bg-[color:var(--brand-surface)] px-3 py-2">Protocol-led setups</span>
                <span className="rounded-xl border border-[color:var(--border)] bg-[color:var(--brand-surface)] px-3 py-2">Brand-consistent delivery</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2">
          {portfolio.map((item, index) => (
            <motion.article
              key={item.title}
              variants={softLift}
              initial="rest"
              whileHover="hover"
              className="group overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-[0_20px_50px_-40px_rgba(15,23,42,0.6)]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600 md:text-[1.02rem]">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
