import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Facebook, Instagram } from "lucide-react";

const SERVICES = [
  { label: "Quality Services", href: "/services/quality" },
  { label: "Clinical Services", href: "/services/clinical" },
  { label: "CSV Services", href: "/services/it-csv" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Leadership", href: "/about#leadership" },
  { label: "Careers", href: "/careers" },
  { label: "Media", href: "/about#media" },
  { label: "Contact", href: "/contact" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="bg-stone-950 text-slate-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
          <Link href="/" className="flex items-center group">
              <img
                src="/IN.png"
                alt="InnovaGxP Systems"
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              An integrated Validation, Clinical, and Quality business solutions
              provider to global life sciences companies.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-sm bg-stone-900 flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                >
                  <Icon size={15} className="text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full group-hover:w-2 transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full group-hover:w-2 transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@innovagxpsystems.com"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-orange-400 transition-colors group"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-orange-500" />
                  info@innovagxpsystems.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18000000000"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-orange-400 transition-colors group"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-orange-500" />
                  +1 (800) 000-0000
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0 text-orange-500" />
                <span>
                4- Charmian Street , 
                  <br />
                  Huntington Station, 
                  <br />
                  New York, 11746
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0 text-orange-500" />
                <span>
                  Hyderabad, Telangana, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} InnovaGxP Systems. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {LEGAL.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-slate-500 hover:text-orange-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}