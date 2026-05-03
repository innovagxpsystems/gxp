import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Innova GxP Systems — we're ready to help with your GxP compliance needs.",
};

const OFFICES = [
  {
    city: "San Ramon",
    country: "California, USA",
    address: "6101 Bollinger Canyon Road, Suite 336\nSan Ramon, California 94583",
    flag: "🇺🇸",
  },
  {
    city: "Raleigh",
    country: "North Carolina, USA",
    address: "North Carolina Office\nUnited States",
    flag: "🇺🇸",
  },
  {
    city: "Hyderabad",
    country: "Telangana, India",
    address: "Hyderabad Office\nTelangana, India",
    flag: "🇮🇳",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeInSection>
            <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Get in Touch
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact Us
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
              Have questions about our services? Ready to start a project?
              We&apos;d love to hear from you.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeInSection direction="left">
                <h2
                  className="text-3xl font-bold text-stone-950 mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Send Us a Message
                </h2>
                <p className="text-slate-500 mb-8">
                  With extensive global experience, we&apos;ve encountered every challenge
                  in the pharmaceutical sector. We&apos;re approachable and always ready to help.
                </p>
                <ContactForm />
              </FadeInSection>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <FadeInSection direction="right" delay={100}>
                <div>
                  <h3
                    className="text-xl font-bold text-stone-950 mb-6"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Get in Touch Directly
                  </h3>

                  <div className="space-y-5">
                    <a
                      href="mailto:info@innovagxpsystems.com"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 bg-orange-100 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors duration-200">
                        <Mail size={18} className="text-orange-500 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</div>
                        <div className="text-stone-900 font-medium group-hover:text-orange-500 transition-colors">
                          info@innovagxpsystems.com
                        </div>
                      </div>
                    </a>

                    <a
                      href="tel:+18000000000"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 bg-orange-100 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors duration-200">
                        <Phone size={18} className="text-orange-500 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone</div>
                        <div className="text-stone-900 font-medium group-hover:text-orange-500 transition-colors">
                          +1 (800) 000-0000
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection direction="right" delay={200}>
                <div>
                  <h3
                    className="text-xl font-bold text-stone-950 mb-6"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Our Offices
                  </h3>
                  <div className="space-y-4">
                    {OFFICES.map((office) => (
                      <div
                        key={office.city}
                        className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-100 rounded-sm hover:border-orange-200 transition-colors"
                      >
                        <span className="text-2xl shrink-0">{office.flag}</span>
                        <div>
                          <div className="font-bold text-stone-950 text-sm">
                            {office.city}, {office.country}
                          </div>
                          <div className="text-slate-500 text-xs mt-0.5 whitespace-pre-line">
                            {office.address}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}