type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="mb-10 md:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-primary)]">{eyebrow}</p>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">{description}</p> : null}
    </header>
  );
}
