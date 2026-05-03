import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 px-6">
      <div className="text-center max-w-lg">
        <p
          className="text-8xl font-bold text-stone-950 mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          404
        </p>
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-6" />
        <h1
          className="text-3xl font-bold text-stone-950 mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Page Not Found
        </h1>
        <p className="text-slate-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}