import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import { FadeInSection } from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about InnovaGxP Systems — our mission, values, and the team driving GxP excellence in life sciences.",
};

const LEADERSHIP = [
  {
    name: "ABC",
    role: "Chief Executive Officer",
    bio: "25+ years in pharmaceutical quality and regulatory affairs. Former FDA inspector and global QA leader.",
    initials: "JS",
  },
  {
    name: "DEF",
    role: "VP, Quality Services",
    bio: "Expert in GxP auditing with extensive experience across FDA, EMA, and PMDA regulated environments.",
    initials: "RP",
  },
  {
    name: "GHI",
    role: "VP, Clinical Operations",
    bio: "Seasoned clinical operations professional with 15+ years in Phase I–IV trial management and monitoring.",
    initials: "SC",
  },
  {
    name: "JKL",
    role: "VP, CSV Services",
    bio: "GAMP5 practitioner and validation expert specializing in 21 CFR Part 11 and Annex 11 compliance.",
    initials: "MT",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeInSection>
            <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-4">
              About Us
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Who We Are
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
              An integrated team of quality, clinical, and validation experts dedicated
              to the success of global life sciences companies.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: Target,
                title: "Our Mission",
                text: "To empower life sciences companies with expert GxP solutions that ensure regulatory compliance, patient safety, and operational excellence in a rapidly evolving global landscape.",
                color: "teal",
              },
              {
                Icon: Eye,
                title: "Our Vision",
                text: "To be the most trusted and innovative compliance partner in the global life sciences industry — known for our expertise, integrity, and commitment to client success.",
                color: "navy",
              },
              {
                Icon: Heart,
                title: "Our Values",
                text: "Integrity, expertise, collaboration, and innovation form the foundation of everything we do. We believe that regulatory compliance and business success go hand in hand.",
                color: "gold",
              },
            ].map(({ Icon, title, text, color }, i) => (
              <FadeInSection key={title} delay={i * 150}>
                <div className="bg-slate-50 rounded-sm p-8 border border-slate-100 h-full">
                  <div
                    className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 ${
                      color === "teal"
                        ? "bg-orange-100"
                        : color === "navy"
                        ? "bg-orange-100"
                        : "bg-amber-100"
                    }`}
                  >
                    <Icon
                      size={22}
                      className={
                        color === "teal"
                          ? "text-orange-600"
                          : color === "navy"
                          ? "text-stone-700"
                          : "text-amber-600"
                      }
                    />
                  </div>
                  <h3
                    className="text-xl font-bold text-stone-950 mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Company story */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <FadeInSection direction="left">
              <div>
                <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
                  Our Story
                </p>
                <h2 className="section-title mb-6">
                  Built on Expertise, Driven by Purpose
                </h2>
                <div className="space-y-4 text-slate-500 leading-relaxed">
                  <p>
                    Founded by industry veterans who recognized the growing complexity of
                    regulatory compliance in life sciences, InnovaGxP Systems was built to
                    bridge the gap between regulatory requirements and business realities.
                  </p>
                  <p>
                    Over the years, we have grown from a boutique quality consulting firm
                    into a global solutions provider with expertise spanning quality
                    systems, clinical operations, and IT validation.
                  </p>
                  <p>
                    Today, with offices in the United States and India, and a global
                    network of consultants, we serve clients across every stage of their
                    regulatory journey — from startup biotech to established pharmaceutical
                    multinationals.
                  </p>
                </div>
                <Link href="/contact" className="btn-navy mt-8 inline-flex">
                  Partner With Us <ArrowRight size={16} />
                </Link>
              </div>
            </FadeInSection>


          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
                Leadership
              </p>
              <h2 className="section-title text-center">Meet Our Team</h2>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERSHIP.map((member, i) => (
              <FadeInSection key={member.name} delay={i * 100}>
                <div className="text-center group">
                  <div className="w-24 h-24 rounded-sm bg-stone-900 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                    <span
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {member.initials}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold text-stone-950 mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-orange-600 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}