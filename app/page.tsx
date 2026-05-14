"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Shield, Activity, Cpu } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { useState } from "react";

const OFFICES = [
  {
    city: "New York",
    country: "New York, USA",
    address: "4- Charmian Street,\nHuntington Station,\nNew York, 11746, USA",
    flag: "🇺🇸",
    position: {
      left: "33%",
      top: "35%",
    },
  },
  {
    city: "Hyderabad",
    country: "Telangana, India",
    address: "Address will be updated soon",
    flag: "🇮🇳",
    position: {
      left: "66%",
      top: "47%",
    },
  },
  {
    city: "Canada",
    country: "Canada",
    address: "Address will be updated soon",
    flag: "🇨🇦",
    position: {
      left: "24%",
      top: "24.5%",
    },
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
                  With offices in USA, Canada and India, our
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
                  { label: "FDA Compliance", pct: 100 },
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
                With offices in USA, Canada and India, we provide localized expertise across
                diverse markets.
              </p>
            </div>
          </FadeInSection>

          {/* Global Presence — Map + Cards */}

          <div className="relative w-full aspect-[2/1] overflow-hidden rounded-2xl border border-stone-800 bg-sky-100">
            {/* World Map */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt="World Map"
              className="absolute inset-0 w-full h-full object-contain"
            />

            {/* Office Locations */}
            {OFFICES.map((office, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: office.position.left,
                  top: office.position.top,
                }}
              >
                {/* Pin */}
                <button
                  onClick={() => setActiveOffice(activeOffice === i ? null : i)}
                  className="relative flex flex-col items-center focus:outline-none"
                >
                  {/* Ping */}
                  <div className="absolute w-4 h-4 md:w-5 md:h-5 bg-orange-500 rounded-full animate-ping opacity-60" />

                  {/* Dot */}
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-orange-500 rounded-full border-2 md:border-4 border-white shadow-lg relative z-10 hover:scale-110 transition-transform duration-200" />

                  {/* Info Box */}
                  <div
                    className={`absolute top-8 md:top-10 transition-all duration-300 ${
                      activeOffice === i
                        ? "opacity-100 scale-100 visible"
                        : "opacity-0 scale-95 invisible"
                    }`}
                  >
                    <div className="bg-white/95 px-2 py-1 md:px-3 md:py-2 rounded-xl shadow-xl border border-orange-200 backdrop-blur-sm min-w-[140px] md:min-w-[220px]">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs md:text-base">
                          {office.flag}
                        </span>

                        <p className="text-[10px] md:text-sm font-bold text-orange-600">
                          {office.city}
                        </p>
                      </div>

                      <p className="text-[9px] md:text-xs text-slate-600 whitespace-pre-line">
                        {office.address}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
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
