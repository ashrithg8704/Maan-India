import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-white py-8">
      <Container className="flex flex-col gap-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Maan Events. All rights reserved.</p>
        <p className="text-[color:var(--brand-primary)]">Infrastructure-led event execution for high-stakes environments.</p>
      </Container>
    </footer>
  );
}
