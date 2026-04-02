import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { executionFramework } from "@/data/homepage";

export function DesignCapabilitiesSection() {
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--brand-surface)] py-24 md:py-32" id="execution-model">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-primary)]">Execution Model</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Process-led delivery for high-stakes events
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                Maan’s internal teams and owned infrastructure enable a controlled process from planning to handover, with
                fewer external dependencies.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">Delivery Outcomes</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700">
                <span className="rounded-xl border border-[color:var(--border)] bg-[color:var(--brand-surface)] px-3 py-2">Timeline reliability</span>
                <span className="rounded-xl border border-[color:var(--border)] bg-[color:var(--brand-surface)] px-3 py-2">Quality consistency</span>
                <span className="rounded-xl border border-[color:var(--border)] bg-[color:var(--brand-surface)] px-3 py-2">Fewer vendor delays</span>
                <span className="rounded-xl border border-[color:var(--border)] bg-[color:var(--brand-surface)] px-3 py-2">Scale-ready deployment</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2">
          {executionFramework.map((item, index) => (
            <Reveal key={item.title}>
              <article className="h-full rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.6)]">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600 md:text-[1.02rem]">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
