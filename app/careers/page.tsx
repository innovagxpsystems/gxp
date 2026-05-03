import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Innova GXP Systems — explore open positions in quality, clinical, and IT validation.",
};

const TYPE_BADGE: Record<string, string> = {
  "full-time": "bg-emerald-100 text-emerald-700",
  "part-time": "bg-blue-100 text-blue-700",
  "contract": "bg-amber-100 text-amber-700",
  "remote": "bg-purple-100 text-purple-700",
};

export default async function CareersPage() {
  const supabase = createClient();
  const { data: jobs, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeInSection>
            <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Join Our Team
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Careers at innovagxpsystems
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
              Build a meaningful career at the intersection of science, technology,
              and regulatory compliance. We invest in our people.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="section-title text-center">Why innovagxpsystems?</h2>
            </div>
          </FadeInSection>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: "🌍", title: "Global Impact", desc: "Work with leading pharma and biotech companies worldwide" },
              { emoji: "📈", title: "Career Growth", desc: "Clear development paths and mentorship from industry experts" },
              { emoji: "⚖️", title: "Work-Life Balance", desc: "Flexible work arrangements including remote opportunities" },
              { emoji: "🎓", title: "Learning Culture", desc: "Continuous training, certifications, and conference support" },
            ].map((item, i) => (
              <FadeInSection key={item.title} delay={i * 100}>
                <div className="text-center p-6 bg-slate-50 border border-slate-100 rounded-sm hover:border-orange-200 hover:shadow-md transition-all duration-300">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-bold text-stone-950 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
                Open Positions
              </p>
              <h2 className="section-title text-center">Current Opportunities</h2>
            </div>
          </FadeInSection>

          {error ? (
            <div className="text-center py-12 text-slate-500">
              <p>Unable to load positions. Please try again later.</p>
            </div>
          ) : jobs && jobs.length > 0 ? (
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <FadeInSection key={job.id} delay={i * 80}>
                  <div className="bg-white border border-slate-200 rounded-sm p-6 hover:border-orange-300 hover:shadow-md transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3
                            className="text-lg font-bold text-stone-950 group-hover:text-orange-600 transition-colors"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {job.title}
                          </h3>
                          <span className={`text-xs px-2.5 py-1 rounded-full font-medium capitalize ${TYPE_BADGE[job.type] || "bg-slate-100 text-slate-600"}`}>
                            {job.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1.5">
                            <Briefcase size={13} className="text-orange-500" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-orange-500" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={13} className="text-orange-500" />
                            Posted {new Date(job.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </span>
                        </div>
                      </div>
                      <Link
                        href={`/careers/${job.id}`}
                        className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border-2 border-stone-800 text-stone-800 text-sm font-semibold rounded-sm hover:bg-stone-800 hover:text-white transition-all duration-200"
                      >
                        View & Apply <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-sm">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-stone-950 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                No open positions right now
              </h3>
              <p className="text-slate-500 mb-6">
                We&apos;re always looking for great talent. Send us your resume and we&apos;ll keep you in mind.
              </p>
              <Link href="/contact" className="btn-navy">
                Send Your Resume <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInSection>
            <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Don&apos;t see the right fit?
            </p>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              We&apos;re Always Looking for Great Talent
            </h2>
            <p className="text-slate-300 mb-8">
              Send us your resume and tell us what you bring to the table.
            </p>
            <Link href="/contact" className="btn-primary">
              Reach Out <ArrowRight size={16} />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}