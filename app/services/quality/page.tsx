import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, ClipboardCheck, Search, BookOpen, Settings, Users, GraduationCap, ShieldCheck } from "lucide-react";
import { FadeInSection } from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "Quality Services",
  description:
    "Comprehensive GxP quality services including auditing, mock inspections, QMS support, and regulatory consulting.",
};

const SERVICES = [
  {
    id: "gxp-auditing",
    Icon: ClipboardCheck,
    title: "GxP Auditing",
    desc: "Comprehensive audits across GMP, GLP, GCP, and GPvP to identify gaps, ensure compliance, and prepare for regulatory inspections.",
    items: [
      "Good Laboratory Practice (GLP)",
      "Good Clinical Practice (GCP)",
      "Good Pharmacovigilance Practice (GPvP)",
      "Good Manufacturing Practice (GMP)",
      "Computer System Validation (CSV)",
    ],
  },
  {
    id: "mock-inspection",
    Icon: Search,
    title: "Mock Inspection",
    desc: "Simulate regulatory authority inspections to assess readiness and identify gaps before the actual inspection occurs.",
    items: [
      "FDA Pre-Approval Inspection readiness",
      "EMA inspection simulation",
      "Investigator site mock inspections",
      "Comprehensive gap analysis reports",
      "Corrective action planning (CAPA)",
    ],
  },
  {
    id: "inspection-readiness",
    Icon: ShieldCheck,
    title: "Inspection Readiness",
    desc: "Proactive programs to prepare your organization for regulatory inspections, reducing risk and increasing confidence.",
    items: [
      "Inspection readiness assessments",
      "Document review and remediation",
      "Staff training and preparation",
      "Back-room support during inspections",
      "Real-time inspection tracking support",
    ],
  },
  {
    id: "consulting",
    Icon: BookOpen,
    title: "GxP Consulting Services",
    desc: "Expert strategic and tactical consulting to navigate complex regulatory environments across global markets.",
    items: [
      "Regulatory strategy development",
      "Agency interaction support",
      "Warning letter response",
      "Consent decree remediation",
      "Due diligence assessments",
    ],
  },
  {
    id: "qms",
    Icon: Settings,
    title: "Quality Management System (QMS) Support",
    desc: "Design, implement, and optimize quality management systems that meet regulatory requirements and business objectives.",
    items: [
      "QMS gap assessments",
      "SOP development and review",
      "CAPA system management",
      "Change control processes",
      "Risk management frameworks",
    ],
  },
  {
    id: "qa-support",
    Icon: Users,
    title: "QA Support",
    desc: "Flexible quality assurance resourcing to supplement your team during peak periods, transitions, or specialized projects.",
    items: [
      "Embedded QA consultants",
      "Batch record review",
      "Deviation investigation support",
      "Supplier qualification",
      "Product release support",
    ],
  },
  {
    id: "training",
    Icon: GraduationCap,
    title: "Training",
    desc: "Tailored GxP training programs to build organizational competence and ensure a culture of quality and compliance.",
    items: [
      "GxP awareness training",
      "Data integrity workshops",
      "Inspection readiness training",
      "Role-based compliance training",
      "Custom training curriculum design",
    ],
  },
];

export default function QualityServicesPage() {
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
              <span>Quality Services</span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Quality Services
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
              Comprehensive GxP quality solutions that safeguard your products,
              protect patients, and ensure regulatory success.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <FadeInSection key={service.id} delay={i * 100}>
                <div id={service.id} className="bg-slate-50 border border-slate-100 rounded-sm p-8 hover:shadow-lg hover:border-orange-200 transition-all duration-300 group h-full flex flex-col">
                  <div className="w-12 h-12 bg-orange-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <service.Icon size={22} className="text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3
                    className="text-xl font-bold text-stone-950 mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {service.desc}
                  </p>
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

      {/* CTA */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInSection>
            <h2
              className="text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Need Expert Quality Support?
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Our team of experienced quality professionals is ready to help you achieve
              and maintain regulatory compliance.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}