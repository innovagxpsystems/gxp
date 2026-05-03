"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Shield, Activity, Cpu } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { useState } from "react";

const OFFICES = [
  {
    city: "San Ramon",
    country: "California, USA",
    flag: "🇺🇸",
    status: "active",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d-121.9539616!3d37.7643595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ff40a6a4b6b8b%3A0xf576e53ab5e07f2d!2sSan%20Ramon%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000",
  },
  {
    city: "North Carolina",
    country: "USA",
    flag: "🇺🇸",
    status: "active",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.0!2d-78.6381787!3d35.7795897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a2f9f51e0f5%3A0x67889b7a4ed5e8c!2sRaleigh%2C%20NC!5e0!3m2!1sen!2sus!4v1700000000001",
  },
  {
    city: "Hyderabad",
    country: "India",
    flag: "🇮🇳",
    status: "active",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.47724389999999!3d17.406498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20India!5e0!3m2!1sen!2sus!4v1700000000002",
  },
  {
    city: "Dublin",
    country: "Ireland",
    flag: "🇮🇪",
    status: "coming",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.0!2d-6.2603097!3d53.3498053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9f28d5deb7%3A0x0a079e0e1dfc1c60!2sDublin%2C%20Ireland!5e0!3m2!1sen!2sus!4v1700000000003",
  },
];

const STATS = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Global Clients" },
  { value: 4, suffix: "", label: "Global Offices" },
];

const SERVICES_PREVIEW = [
  {
    icon: Shield,
    title: "Quality Services",
    desc: "GxP auditing, QMS support, mock inspections, and regulatory consulting for pharmaceutical and biotech companies.",
    href: "/services/quality",
  },
  {
    icon: Activity,
    title: "Clinical Services",
    desc: "Expert clinical site monitoring, TMF management, and clinical operations support across all phases of trials.",
    href: "/services/clinical",
  },
  {
    icon: Cpu,
    title: "CSV Services",
    desc: "Computer system validation, software quality assurance, and infrastructure qualification for GxP systems.",
    href: "/services/it-csv",
  },
];

export default function HomePage() {
  const [activeOffice, setActiveOffice] = useState(0);
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen hero-mesh grid-overlay flex flex-col justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          ref={(el) => {
            if (el) el.playbackRate = 0.5;
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500 text-white text-xs font-medium tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            GxP Excellence & Innovation
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Empowering the <span className="text-orange-400">Future</span> of
            <br />
            Healthcare
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
            InnovaGxP Systems empowers pharmaceutical, medical device, and
            biotech companies with the expertise to navigate regulatory
            challenges — ensuring successful authority inspections and driving
            innovation.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/services/quality" className="btn-primary">
              Explore Services <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>

          {/* Stats — floating white card strip */}
          <div className="relative z-10 mt-20 hidden md:block">
            <div className="mx-6 md:mx-12 lg:mx-24 bg-white rounded-2xl shadow-2xl shadow-black/30 px-8 py-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {STATS.map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center text-center px-6 py-6 md:py-0 group"
                  >
                    {/* accent line */}
                    <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-4 group-hover:w-14 transition-all duration-500" />
                    <div
                      className="text-4xl md:text-5xl font-bold mb-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        background: "linear-gradient(135deg, #f97316, #ea580c)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs font-semibold text-secondary tracking-widest uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left">
              <div>
                <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-4">
                  Who We Are
                </p>
                <h2 className="section-title mb-6">
                  Your Trusted Partner in Life Sciences Compliance
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  InnovaGxP Systems is an integrated Validation, Automation,
                  Quality, and Clinical business solutions provider to global
                  pharmaceutical, biotechnology, and medical device companies.
                </p>
                <p className="text-slate-500 leading-relaxed mb-8">
                  With offices in California, North Carolina, and Hyderabad, our
                  team combines deep regulatory expertise with practical
                  industry experience to deliver measurable results for our
                  clients worldwide.
                </p>
                <Link href="/about" className="btn-navy">
                  Learn About Us <ArrowRight size={16} />
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "FDA Compliance", pct: 98 },
                  { label: "EMA Compliance", pct: 96 },
                  { label: "ICH Guidelines", pct: 99 },
                  { label: "Client Satisfaction", pct: 97 },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-slate-50 rounded-sm p-5 border border-slate-100"
                  >
                    <div className="text-sm font-medium text-stone-900 mb-3">
                      {item.label}
                    </div>
                    <div
                      className="text-3xl font-bold text-orange-600 mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.pct}%
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-4">
                What We Do
              </p>
              <h2 className="section-title text-center">Our Core Services</h2>
              <p className="section-subtitle text-center mx-auto mt-4">
                End-to-end compliance solutions tailored for pharmaceutical,
                biotech, and medical device companies.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES_PREVIEW.map((service, i) => (
              <FadeInSection key={service.title} delay={i * 150}>
                <Link href={service.href} className="block group">
                  <div className="relative overflow-hidden bg-white border border-slate-100 rounded-sm p-8 h-full service-card hover:border-transparent transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1">
                    <div className="service-icon w-14 h-14 bg-orange-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors duration-300">
                      <service.icon
                        size={24}
                        className="text-stone-700 group-hover:text-emerald-400 transition-colors duration-300"
                      />
                    </div>
                    <h3
                      className="service-title text-xl font-bold text-stone-950 mb-3 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="service-desc text-sm text-slate-500 leading-relaxed mb-6 transition-colors duration-300">
                      {service.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:text-emerald-300 transition-colors">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GLOBAL PRESENCE ===== */}
      <section className="py-24 bg-stone-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">
                Global Network
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Supporting Clients Worldwide
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                With offices in California, North Carolina, Hyderabad, and
                Dublin (coming soon), we provide localized expertise across
                diverse markets.
              </p>
            </div>
          </FadeInSection>

          {/* Global Presence — Map + Cards */}
<div className="mt-12 grid lg:grid-cols-3 gap-0 rounded-xl overflow-hidden border border-stone-700 shadow-2xl">

{/* Left: office list */}
<div className="bg-stone-900 p-6 flex flex-col gap-2 lg:col-span-1">
  {OFFICES.map((office, i) => (
    <div
      key={i}
      onClick={() => setActiveOffice(i)}
      className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-200 cursor-pointer group border ${
        activeOffice === i
          ? "bg-stone-800 border-orange-500/50"
          : "border-transparent hover:bg-stone-800"
      }`}
    >
      <span className="text-3xl">{office.flag}</span>
      <div className="flex-1">
        <div
          className={`font-semibold text-sm transition-colors ${
            activeOffice === i ? "text-orange-400" : "text-white"
          }`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {office.city}
        </div>
        <div className="text-slate-400 text-xs">{office.country}</div>
      </div>
      {office.status === "coming" ? (
        <span className="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded-full border border-amber-500/30 shrink-0">
          Soon
        </span>
      ) : (
        <span className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
          activeOffice === i ? "bg-orange-400 animate-pulse" : "bg-emerald-400"
        }`} />
      )}
    </div>
  ))}
</div>

{/* Right: embedded map */}
<div className="lg:col-span-2 h-80 lg:h-auto">
  <iframe
    key={activeOffice}
    title="Global Offices"
    src={OFFICES[activeOffice].mapSrc}
    width="100%"
    height="100%"
    style={{ border: 0, minHeight: "320px" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

</div>
        </div>
      </section>

      {/* ===== CAREERS CTA ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="bg-gradient-to-br from-stone-950 to-stone-800 rounded-sm p-12 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">
                    Join Our Team
                  </p>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Ready to Take Your Career
                    <br />
                    to the Next Level?
                  </h2>
                  <p className="text-slate-300 max-w-xl">
                    We&apos;re looking for talented, driven individuals
                    passionate about making a meaningful impact in life
                    sciences.
                  </p>
                </div>
                <div className="shrink-0">
                  <Link
                    href="/careers"
                    className="btn-primary whitespace-nowrap"
                  >
                    View Open Positions <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="py-24 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grid-overlay" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeInSection>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Achieve Regulatory Excellence?
            </h2>
            <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
              With extensive global experience, we&apos;ve encountered every
              challenge in the sector. We&apos;re approachable, collaborative,
              and always ready to offer support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-outline">
                Contact Us Today <ArrowRight size={16} />
              </Link>
              <Link
                href="mailto:info@innovagxpsystems.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-emerald-700 font-semibold rounded-sm hover:bg-emerald-50 transition-all duration-300 text-sm tracking-wide uppercase"
              >
                Send Us an Email
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
