"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { serviceGroups } from "@/data/homepage";
import { softLift } from "@/lib/motion";

export function ServicesSection() {
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--brand-surface)] py-20 md:py-28" id="services">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Top Priority Services"
            title="Integrated systems for complex event environments"
            description="Core infrastructure and execution services grouped for fast planning, quality consistency, and scale-ready deployment."
          />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {serviceGroups.map((group) => (
            <motion.article
              key={group.group}
              variants={softLift}
              initial="rest"
              whileHover="hover"
              className="rounded-2xl border border-[color:var(--border)] bg-white p-7"
            >
              <h3 className="text-lg font-semibold text-slate-900">{group.group}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-primary)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
