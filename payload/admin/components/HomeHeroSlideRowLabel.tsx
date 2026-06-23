"use client";

import { useRowLabel } from "@payloadcms/ui";

type HeroSlideRowData = {
  eyebrow?: string | null;
  headline?: string | null;
};

export function HomeHeroSlideRowLabel() {
  const { data, rowNumber } = useRowLabel<HeroSlideRowData>();
  const slideNumber = String((rowNumber ?? 0) + 1).padStart(2, "0");
  const headline = data?.headline?.trim() || `Homepage Hero Slide ${slideNumber}`;
  const eyebrow = data?.eyebrow?.trim();

  return (
    <div className="zabs-array-row-label">
      <span className="zabs-array-row-label__index">Slide {slideNumber}</span>
      <span className="zabs-array-row-label__title">{headline}</span>
      {eyebrow ? (
        <span className="zabs-array-row-label__meta">{eyebrow}</span>
      ) : null}
    </div>
  );
}
