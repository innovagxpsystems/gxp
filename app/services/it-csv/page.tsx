import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Cpu, Code, Server } from "lucide-react";
import { FadeInSection } from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "IT & CSV Services",
  description:
    "Computer System Validation, Software Quality Assurance, and Infrastructure Qualification for GxP environments.",
};

const SERVICES = [
  {
    id: "csv",
    Icon: Cpu,
    title: "Computer System Validation",
    desc: "End-to-end CSV services ensuring your GxP computerized systems meet regulatory requirements per GAMP5, 21 CFR Part 11, and EU Annex 11.",
    items: [
      "Validation master plan development",
      "User requirements specification (URS)",
      "Risk assessment and GAMP5 categorization",
      "IQ/OQ/PQ protocol execution",
      "Traceability matrix development",
      "Validation summary reports",
      "LIMS, MES, ERP, EDMS validation",
    ],
  },
  {
    id: "sqa",
    Icon: Code,
    title: "Software Quality Assurance",
    desc: "Rigorous software quality assurance practices ensuring your systems are reliable, compliant, and fit for intended use.",
    items: [
      "SQA plan development",
      "Code review and testing oversight",
      "Defect management and tracking",
      "Test case development and execution",
      "Regulatory compliance review (21 CFR 11, Annex 11)",
      "Agile/SDLC quality integration",
    ],
  },
  {
    id: "iq",
    Icon: Server,
    title: "Infrastructure Qualification",
    desc: "Qualification of IT infrastructure components — servers, networks, cloud environments — supporting GxP applications.",
    items: [
      "Server and network qualification",
      "Cloud infrastructure qualification (AWS, Azure, GCP)",
      "Disaster recovery testing",
      "Backup and restore validation",
      "Cybersecurity assessment support",
      "Infrastructure change control",
    ],
  },
];

export default function ITCSVServicesPage() {
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
              <span>IT & CSV Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
              IT & CSV Services
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
              Validation and quality assurance for GxP computerized systems and
              IT infrastructure in regulated environments.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <FadeInSection key={service.id} delay={i * 150}>
                <div id={service.id} className="bg-slate-50 border border-slate-100 rounded-sm p-8 hover:shadow-lg hover:border-orange-200 transition-all duration-300 group h-full flex flex-col">
                  <div className="w-14 h-14 bg-orange-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <service.Icon size={26} className="text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-950 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.desc}</p>
                  <ul className="space-y-2 mt-auto">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-stone-800">
                        <CheckCircle size={14} className="text-orange-500 mt-0.5 shrink-0" />
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

      {/* Regulatory frameworks */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Regulatory Frameworks We Cover
              </h2>
            </div>
          </FadeInSection>
          <div className="flex flex-wrap gap-3 justify-center">
            {["GAMP5", "21 CFR Part 11", "EU Annex 11", "ICH Q10", "ISO 9001", "FDA 21 CFR Part 820", "ISO 13485", "HIPAA", "SOX IT Controls"].map((framework, i) => (
              <FadeInSection key={framework} delay={i * 50}>
                <span className="px-5 py-2.5 bg-stone-900 border border-stone-700 text-slate-200 text-sm rounded-sm hover:border-orange-500 hover:text-orange-400 transition-colors duration-200 font-mono">
                  {framework}
                </span>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Ready to Validate Your Systems?
            </h2>
            <p className="text-emerald-100 text-lg mb-10">
              Our CSV experts are ready to support your next validation project from planning to execution.
            </p>
            <Link href="/contact" className="btn-outline">
              Get Started <ArrowRight size={16} />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}