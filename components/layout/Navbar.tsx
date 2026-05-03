"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { clsx } from "clsx";

const NAV_ITEMS = [
  { label: "About Us", href: "/about" },
  {
    label: "Quality Services",
    href: "/services/quality",
    children: [
      { label: "GxP Auditing", href: "/services/quality#gxp-auditing" },
      { label: "Mock Inspection", href: "/services/quality#mock-inspection" },
      { label: "Inspection Readiness", href: "/services/quality#inspection-readiness" },
      { label: "GxP Consulting", href: "/services/quality#consulting" },
      { label: "QMS Support", href: "/services/quality#qms" },
      { label: "QA Support", href: "/services/quality#qa-support" },
      { label: "Training", href: "/services/quality#training" },
    ],
  },
  {
    label: "Clinical Services",
    href: "/services/clinical",
    children: [
      { label: "Clinical Site Monitoring", href: "/services/clinical#monitoring" },
      { label: "TMF Management", href: "/services/clinical#tmf" },
    ],
  },
  {
    label: "IT & CSV Services",
    href: "/services/it-csv",
    children: [
      { label: "Computer System Validation", href: "/services/it-csv#csv" },
      { label: "Software Quality Assurance", href: "/services/it-csv#sqa" },
      { label: "Infrastructure Qualification", href: "/services/it-csv#iq" },
    ],
  },
  { label: "Careers", href: "/careers" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isHome = pathname === "/";
  const transparent = isHome && !isScrolled;

  return (
    <>
      {/* Top bar 
      <div className="bg-[#0f0a05] text-slate-400 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:info@innovagxpsystems.com" className="flex items-center gap-1.5 hover:text-orange-500 transition-colors">
              <Mail size={12} />
              info@innovagxpsystems.com
            </a>
            <a href="tel:+1-800-000-0000" className="flex items-center gap-1.5 hover:text-orange-500 transition-colors">
              <Phone size={12} />
              +1 (800) 000-0000
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">LinkedIn</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Facebook</a>
          </div>
        </div>
      </div>
      */}

      {/* Main navbar */}
      <nav
        className={clsx(
          "sticky top-0 z-50 transition-all duration-300 bg-white shadow-md"

        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex flex-col">
                <span
                  className={clsx(
                    "text-3xl font-bold tracking-tight transition-colors text-orange-500",
                  )}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Innova GxP Systems
                </span>
                <span
                  className={clsx(
                    "text-[9px] tracking-[0.2em] uppercase font-medium transition-colors text-emerald-400",
                  )}
                >
                  Assured Compliance. Accelerated Progress.
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide rounded-sm transition-colors duration-200 text-stone-800 hover:text-orange-500",
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className={clsx(
                          "transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl border-t-2 border-orange-500 rounded-b-sm py-2 z-50"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-stone-800 hover:bg-slate-50 hover:text-orange-600 hover:pl-6 transition-all duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link href="/contact" className="btn-primary !py-2.5 !px-6">
                Contact Us
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={clsx(
                "lg:hidden p-2 rounded-sm transition-colors",
                isScrolled || !isHome ? "text-stone-950" : "text-white"
              )}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-3 text-sm font-medium text-stone-900 hover:text-orange-600 border-b border-slate-50"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1 py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-sm text-slate-500 hover:text-orange-500"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}