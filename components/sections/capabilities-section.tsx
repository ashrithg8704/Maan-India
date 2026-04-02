import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { capabilities } from "@/data/homepage";

export function CapabilitiesSection() {
  return (
    <section className="bg-white py-20 md:py-28" id="capabilities">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Capabilities"
            title="Infrastructure designed for scale and control"
            description="An integrated capability stack covering structural systems, staging, guest environments, and premium finishing requirements."
          />
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <Reveal key={capability}>
              <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm font-medium text-slate-700">{capability}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
