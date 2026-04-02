import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { clients, testimonials } from "@/data/homepage";

export function ClientTrustSection() {
  return (
    <section className="bg-white py-20 md:py-28" id="clients">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Client Trust"
            title="Trusted by decision-makers who cannot compromise"
            description="Built for stakeholders who prioritize reliability, quality, and disciplined execution at scale."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {clients.map((client) => (
            <Reveal key={client}>
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--brand-surface)] px-5 py-6 text-center text-sm font-semibold uppercase tracking-[0.14em] text-slate-600">
                {client}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.author}>
              <blockquote className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--brand-surface)] p-7">
                <p className="text-lg leading-relaxed text-slate-700">“{testimonial.quote}”</p>
                <footer className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--brand-primary)]">{testimonial.author}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
