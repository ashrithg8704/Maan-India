import Link from "next/link";

type LuxuryButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function LuxuryButton({ href, label, variant = "primary" }: LuxuryButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variantClass =
    variant === "primary"
      ? "bg-[color:var(--brand-primary)] text-white hover:bg-[color:var(--brand-primary-strong)] focus-visible:ring-[color:var(--brand-primary)]"
      : "border border-[color:var(--border)] bg-white text-slate-900 hover:border-[color:var(--brand-primary)] hover:bg-[color:var(--brand-surface)] focus-visible:ring-[color:var(--brand-primary)]";

  return (
    <Link href={href} className={`${baseClass} ${variantClass}`}>
      {label}
    </Link>
  );
}
