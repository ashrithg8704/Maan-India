import { Container } from "@/components/ui/container";
import { trustStats } from "@/data/homepage";

export function TrustStrip() {
  return (
    <section className="border-b border-[color:var(--border)] bg-white py-8">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--brand-surface)] p-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--brand-primary)]">{stat.label}</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
