"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const navItems = [
  { label: "Why Maan", href: "#why-maan" },
  { label: "Services", href: "#services" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-white/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-sm font-bold text-white">
            M
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">Maan Events</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-[color:var(--brand-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <motion.a
          href="#contact"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="rounded-full bg-[color:var(--brand-primary)] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-primary-strong)]"
        >
          Enquire
        </motion.a>
      </Container>
    </header>
  );
}
