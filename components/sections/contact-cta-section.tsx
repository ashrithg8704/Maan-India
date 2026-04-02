import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { contact } from "@/data/homepage";

export function ContactCtaSection() {
  const whatsappLink = `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`;

  return (
    <section className="bg-[linear-gradient(160deg,#1b1220,#521a2f)] py-20 text-white md:py-28" id="contact">
      <Container>
        <Reveal>
          <div className="grid gap-10 rounded-3xl border border-white/20 bg-white/7 p-8 backdrop-blur-sm md:p-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-accent)]">Contact</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Ready to execute at scale.</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
                Let’s build an infrastructure-led event environment with timeline certainty, premium quality, and full execution confidence.
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base">
              <a href={`tel:${contact.phone}`} className="block rounded-xl border border-white/20 bg-white/5 px-5 py-4 transition hover:bg-white/10">
                Phone: {contact.phone}
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-white/20 bg-white/5 px-5 py-4 transition hover:bg-white/10">
                WhatsApp: {contact.whatsapp}
              </a>
              <a href={`mailto:${contact.email}`} className="block rounded-xl border border-white/20 bg-white/5 px-5 py-4 transition hover:bg-white/10">
                Email: {contact.email}
              </a>
              <p className="rounded-xl border border-white/20 bg-white/5 px-5 py-4">Office: {contact.address}</p>
              <Link
                href={contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-[color:var(--brand-accent)] bg-[color:var(--brand-accent)] px-5 py-3 font-semibold text-[#2a1b12] transition hover:bg-[#d8b887]"
              >
                Open Google Maps
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
