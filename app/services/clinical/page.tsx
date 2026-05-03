import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Activity, FileText } from "lucide-react";
import { FadeInSection } from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "Clinical Services",
  description:
    "Expert clinical site monitoring, TMF management, and clinical operations support.",
};

const SERVICES = [
  {
    id: "monitoring",
    Icon: Activity,
    title: "Clinical Site Monitoring",
    desc: "Expert on-site and remote monitoring services to ensure subject safety, data integrity, and protocol compliance across all clinical trial phases.",
    items: [
      "Site initiation and qualification visits",
      "Routine monitoring visits (on-site & remote)",
      "Close-out visits",
      "Protocol deviation management",
      "ICF compliance review",
      "Investigational product accountability",
      "Phase I–IV experience",
    ],
  },
  {
    id: "tmf",
    Icon: FileText,
    title: "TMF Management",
    desc: "Comprehensive Trial Master File management services ensuring completeness, accuracy, and inspection-readiness of your trial documentation.",
    items: [
      "eTMF setup and configuration",
      "Document collection and QC review",
      "TMF inspection readiness",
      "Legacy TMF remediation",
      "TMF metrics and health reporting",
      "Veeva Vault & Trial Interactive expertise",
      "DIA Reference Model compliance",
    ],
  },
];

export default function ClinicalServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeInSection>
            <div className="flex items-center gap-2 text-orange-400 text-sm mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span>Clinical Services</span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Clinical Services
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
              Protecting trial subjects and data integrity through expert clinical
              monitoring and trial master file management.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {SERVICES.map((service, i) => (
              <FadeInSection key={service.id} delay={i * 200}>
                <div id={service.id} className="bg-slate-50 border border-slate-100 rounded-sm p-10 hover:shadow-lg hover:border-orange-200 transition-all duration-300 group h-full">
                  <div className="w-14 h-14 bg-orange-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <service.Icon size={26} className="text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-stone-950 mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-stone-800">
                        <CheckCircle size={15} className="text-orange-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">Why Choose Us</p>
              <h2 className="section-title text-center">Our Clinical Expertise</h2>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Phase I–IV Experience", value: "All Phases" },
              { label: "Therapeutic Areas", value: "20+" },
              { label: "Countries Covered", value: "30+" },
            ].map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 100}>
                <div className="text-center bg-white rounded-sm border border-slate-100 p-8">
                  <div
                    className="text-4xl font-bold text-orange-500 mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Partner With Our Clinical Team
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Whether you need dedicated CRAs or TMF support, we scale to meet your trial needs.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us <ArrowRight size={16} />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}