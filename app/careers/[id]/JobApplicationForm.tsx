"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const schema = z.object({
  full_name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  linkedin_url: z.string().url("Enter a valid URL").optional().or(z.literal("")),
  cover_letter: z.string().min(50, "Please write at least 50 characters").optional(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  jobId: string;
  jobTitle: string;
}

export function JobApplicationForm({ jobId, jobTitle }: Props) {
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

    const { error } = await supabase.from("job_applications").insert({
      job_id: jobId,
      full_name: data.full_name,
      email: data.email,
      phone: data.phone || null,
      linkedin_url: data.linkedin_url || null,
      cover_letter: data.cover_letter || null,
    });

    setIsSubmitting(false);

    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }

    toast.success("Application submitted! We'll be in touch soon.");
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-stone-950 mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Application Received!
        </h3>
        <p className="text-slate-500 text-sm">
          Thank you for your interest in the <strong>{jobTitle}</strong> position.
          Our team will review your application and reach out within 5-7 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="form-label">Full Name *</label>
        <input
          {...register("full_name")}
          className="form-input"
          placeholder="Jane Smith"
        />
        {errors.full_name && (
          <p className="text-red-500 text-xs mt-1">{errors.full_name.message}</p>
        )}
      </div>

      <div>
        <label className="form-label">Email Address *</label>
        <input
          {...register("email")}
          type="email"
          className="form-input"
          placeholder="jane@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="form-label">Phone Number</label>
        <input
          {...register("phone")}
          type="tel"
          className="form-input"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div>
        <label className="form-label">LinkedIn Profile URL</label>
        <input
          {...register("linkedin_url")}
          type="url"
          className="form-input"
          placeholder="https://linkedin.com/in/yourname"
        />
        {errors.linkedin_url && (
          <p className="text-red-500 text-xs mt-1">{errors.linkedin_url.message}</p>
        )}
      </div>

      <div>
        <label className="form-label">Cover Letter / Message</label>
        <textarea
          {...register("cover_letter")}
          rows={5}
          className="form-input resize-none"
          placeholder="Tell us about yourself and why you're interested in this role..."
        />
        {errors.cover_letter && (
          <p className="text-red-500 text-xs mt-1">{errors.cover_letter.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <><Loader2 size={16} className="animate-spin" /> Submitting...</>
        ) : (
          <><Send size={16} /> Submit Application</>
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        By submitting, you agree to our Privacy Policy. We'll never share your data.
      </p>
    </form>
  );
}