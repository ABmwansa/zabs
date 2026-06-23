"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { useInViewOnce } from "@/components/ui/useInViewOnce";

type CountUpValueProps = {
  value: string;
  durationMs?: number;
  className?: string;
};

type ParsedValue = {
  prefix: string;
  numericValue: number;
  suffix: string;
  decimals: number;
} | null;

function parseDisplayValue(value: string): ParsedValue {
  const match = value.match(/^([^0-9]*)([\d,.]+)(.*)$/);

  if (!match) {
    return null;
  }

  const [, prefix, numericPart, suffix] = match;
  const sanitized = numericPart.replace(/,/g, "");
  const numericValue = Number.parseFloat(sanitized);

  if (!Number.isFinite(numericValue)) {
    return null;
  }

  const decimals = sanitized.includes(".") ? sanitized.split(".")[1].length : 0;

  return {
    prefix,
    numericValue,
    suffix,
    decimals,
  };
}

export default function CountUpValue({
  value,
  durationMs = 1400,
  className,
}: CountUpValueProps) {
  const parsedValue = useMemo(() => parseDisplayValue(value), [value]);
  const formatter = useMemo(() => {
    const decimals = parsedValue?.decimals ?? 0;

    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }, [parsedValue?.decimals]);
  const [displayValue, setDisplayValue] = useState(value);
  const [hasStarted, setHasStarted] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const { inView, ref: elementRef } = useInViewOnce<HTMLSpanElement>({
    threshold: 0.35,
  });

  useEffect(() => {
    if (!parsedValue) {
      setDisplayValue(value);
      return;
    }

    if (!inView || hasStarted) {
      return;
    }

    setHasStarted(true);

    const startTime = performance.now();
    const endValue = parsedValue.numericValue;

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = endValue * easedProgress;
      const roundedValue = parsedValue.decimals > 0 ? currentValue : Math.round(currentValue);

      setDisplayValue(
        `${parsedValue.prefix}${formatter.format(roundedValue)}${parsedValue.suffix}`,
      );

      if (progress < 1) {
        animationFrameRef.current = window.requestAnimationFrame(tick);
      }
    };

    animationFrameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [durationMs, formatter, hasStarted, inView, parsedValue, value]);

  useEffect(() => {
    setDisplayValue(value);
    setHasStarted(false);
  }, [value]);

  return (
    <span ref={elementRef} className={className}>
      {displayValue}
    </span>
  );
}
