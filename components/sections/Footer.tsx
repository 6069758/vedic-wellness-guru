import Image from "next/image";
import { ChevronRight, Mail, MapPin, Phone, Instagram, Facebook, Youtube, Flower2 } from "lucide-react";

const QUICK = ["About Me", "Consultation", "Courses", "Media", "Articles", "Contact"];
const SERVICES = ["Astrology Consultation", "Vastu Consultation", "Meditation Guidance", "Live Classes"];

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-[#120c06] text-cream">
      {/* Sun ornament divider */}
      <div className="flex justify-center pt-10">
        <svg width="60" height="30" viewBox="0 0 60 30" fill="none" aria-hidden>
          <circle cx="30" cy="15" r="6" stroke="#C8912E" strokeWidth="1.2" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * Math.PI) / 6;
            return <line key={i} x1={30 + Math.cos(a) * 9} y1={15 + Math.sin(a) * 9} x2={30 + Math.cos(a) * 13} y2={15 + Math.sin(a) * 13} stroke="#C8912E" strokeWidth="1" />;
          })}
          <line x1="0" y1="15" x2="17" y2="15" stroke="#C8912E" strokeWidth="1" opacity="0.5" />
          <line x1="43" y1="15" x2="60" y2="15" stroke="#C8912E" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-8 py-14 md:grid-cols-2 lg:grid-cols-5 lg:px-14">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="" width={52} height={52} className="h-13 w-13 rounded-full object-cover" />
            <span className="font-serif text-xl leading-tight text-gold-soft">
              Astrology &amp; Vastu
              <br />
              by Gaurav Vadehra
            </span>
          </div>
          <p className="mt-6 max-w-[260px] text-[13.5px] leading-relaxed text-cream/70">
            Guiding your journey through Astrology, Vastu &amp; spiritual insight
            with clarity, wisdom and practical direction.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-soft transition-colors hover:bg-gold hover:text-ink">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-gold-soft/80">@vedicastrologyguru7</p>
        </div>

        {/* Quick Links */}
        <FooterCol title="Quick Links">
          {QUICK.map((q) => (
            <li key={q}>
              <a href="#" className="flex items-center gap-2 text-[14px] text-cream/75 transition-colors hover:text-gold-soft">
                <ChevronRight className="h-3.5 w-3.5 text-gold" /> {q}
              </a>
            </li>
          ))}
        </FooterCol>

        {/* Services */}
        <FooterCol title="Services">
          {SERVICES.map((s) => (
            <li key={s}>
              <a href="#" className="flex items-center gap-2 text-[14px] text-cream/75 transition-colors hover:text-gold-soft">
                <Flower2 className="h-4 w-4 text-gold" /> {s}
              </a>
            </li>
          ))}
        </FooterCol>

        {/* Get in Touch */}
        <FooterCol title="Get in Touch">
          <li className="flex items-center gap-3 text-[14px] text-cream/75">
            <Mail className="h-5 w-5 shrink-0 text-gold" /> vedicastrologyguru7@gmail.com
          </li>
          <li className="flex items-center gap-3 text-[14px] text-cream/75">
            <MapPin className="h-5 w-5 shrink-0 text-gold" /> New Delhi, India
          </li>
          <li className="flex items-center gap-3 text-[14px] text-cream/75">
            <Phone className="h-5 w-5 shrink-0 text-gold" /> Call / WhatsApp: Available on Request
          </li>
        </FooterCol>

        {/* Newsletter */}
        <div>
          <h4 className="font-serif text-xl text-gold-soft">Newsletter</h4>
          <div className="mb-5 mt-2 h-px w-12 bg-gold/50" />
          <p className="text-[13.5px] leading-relaxed text-cream/75">
            Subscribe to get updates on consultations, classes &amp; articles.
          </p>
          <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center gap-2 rounded-xl bg-cream px-4 py-3">
              <Mail className="h-4 w-4 text-ink-soft/60" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent text-[13px] text-ink outline-none placeholder:text-ink-soft/50"
              />
            </div>
            <button className="w-full rounded-xl bg-gradient-to-b from-gold-soft to-gold py-3 text-[14px] font-semibold text-ink transition-all hover:brightness-105">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gold/15">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 px-8 py-6 text-[12.5px] text-cream/60 sm:flex-row lg:px-14">
          <span>© 2026 Astrology &amp; Vastu by Gaurav Vadehra. All Rights Reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-gold-soft">Privacy Policy</a>
            <span className="text-gold/40">|</span>
            <a href="#" className="transition-colors hover:text-gold-soft">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-serif text-xl text-gold-soft">{title}</h4>
      <div className="mb-5 mt-2 h-px w-12 bg-gold/50" />
      <ul className="space-y-3.5">{children}</ul>
    </div>
  );
}
