import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { whyMaanPoints } from "@/data/homepage";

export function WhyMaanSection() {
  return (
    <section className="bg-white py-20 md:py-28" id="why-maan">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Why Maan"
            title="In-house strength. Seamless delivery."
            description="Built to execute critical events with infrastructure ownership, operational depth, and measurable quality control."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {whyMaanPoints.map((point, index) => (
            <Reveal key={point.title}>
              <article className="h-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--brand-surface)] p-7">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">{point.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{point.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
