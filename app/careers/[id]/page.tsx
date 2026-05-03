import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Briefcase, Clock, CheckCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { JobApplicationForm } from "./JobApplicationForm";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const supabase = createClient();
  const { data: job } = await supabase.from("jobs").select("title").eq("id", params.id).single();
  return { title: job ? `${job.title} — Careers` : "Job Not Found" };
}

export default async function JobDetailPage({ params }: Props) {
  const supabase = createClient();
  const { data: job } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", params.id)
    .eq("is_active", true)
    .single();

  if (!job) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-stone-950 py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/careers" className="inline-flex items-center gap-2 text-orange-400 text-sm mb-6 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Back to Careers
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            {job.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Briefcase size={14} className="text-orange-400" /> {job.department}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-orange-400" /> {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-orange-400" /> {job.type}
            </span>
          </div>
        </div>
      </section>

      <div className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Job details */}
            <FadeInSection direction="left">
              <div className="bg-white border border-slate-200 rounded-sm p-8">
                <h2 className="text-2xl font-bold text-stone-950 mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  Role Overview
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">{job.description}</p>

                {job.requirements && job.requirements.length > 0 && (
                  <>
                    <h3 className="text-lg font-bold text-stone-950 mb-4" style={{ fontFamily: "var(--font-display)" }}>
                      Requirements
                    </h3>
                    <ul className="space-y-2.5">
                      {job.requirements.map((req: string, i: number) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-stone-800">
                          <CheckCircle size={15} className="text-orange-500 mt-0.5 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </FadeInSection>

            {/* Application form */}
            <FadeInSection direction="right" delay={200}>
              <div className="bg-white border border-slate-200 rounded-sm p-8">
                <h2 className="text-2xl font-bold text-stone-950 mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Apply for This Role
                </h2>
                <JobApplicationForm jobId={job.id} jobTitle={job.title} />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </>
  );
}