"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service_interest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const SERVICE_OPTIONS = [
  "Quality Services — GxP Auditing",
  "Quality Services — Mock Inspection",
  "Quality Services — QMS Support",
  "Quality Services — Training",
  "Clinical Services — Site Monitoring",
  "Clinical Services — TMF Management",
  "CSV — Computer System Validation",
  "CSV — Software QA",
  "CSV — Infrastructure Qualification",
  "General Inquiry",
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    const supabase = createClient();

    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      phone: data.phone || null,
      service_interest: data.service_interest || null,
      message: data.message,
    });

    setIsSubmitting(false);

    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }

    toast.success("Message sent! We'll respond within 1-2 business days.");
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="text-center py-12 bg-slate-50 border border-slate-200 rounded-sm">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-stone-950 mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Message Received!
        </h3>
        <p className="text-slate-500">
          Thank you for reaching out. Our team will respond within 1–2 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-orange-500 hover:text-orange-600 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label">Full Name *</label>
          <input {...register("name")} className="form-input" placeholder="Jane Smith" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="form-label">Email Address *</label>
          <input {...register("email")} type="email" className="form-input" placeholder="jane@company.com" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label">Company</label>
          <input {...register("company")} className="form-input" placeholder="Acme Pharma Inc." />
        </div>
        <div>
          <label className="form-label">Phone Number</label>
          <input {...register("phone")} type="tel" className="form-input" placeholder="+1 (555) 000-0000" />
        </div>
      </div>

      <div>
        <label className="form-label">Service of Interest</label>
        <select {...register("service_interest")} className="form-input">
          <option value="">Select a service...</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="form-label">Message *</label>
        <textarea
          {...register("message")}
          rows={5}
          className="form-input resize-none"
          placeholder="Tell us about your project, timeline, and how we can help..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <><Loader2 size={16} className="animate-spin" /> Sending...</>
        ) : (
          <><Send size={16} /> Send Message</>
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  );
}