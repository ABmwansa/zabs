"use client";

import clsx from "clsx";

import { useInViewOnce } from "@/components/ui/useInViewOnce";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { inView, ref } = useInViewOnce<HTMLDivElement>({
    rootMargin: "0px 0px -48px 0px",
    threshold: 0.16,
  });

  return (
    <div
      ref={ref}
      className={clsx(
        "motion-reduce:transform-none motion-reduce:opacity-100 transition-all duration-700 ease-out",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
