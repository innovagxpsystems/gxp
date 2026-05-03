"use client";

import { useInView } from "react-intersection-observer";
import { clsx } from "clsx";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function FadeInSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: FadeInSectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const directionClass = {
    up: "translate-y-8",
    left: "-translate-x-8",
    right: "translate-x-8",
    none: "",
  }[direction];

  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-700 ease-out",
        inView
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directionClass}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
