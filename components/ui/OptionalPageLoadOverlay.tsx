"use client";

import dynamic from "next/dynamic";

const PageLoadOverlay = dynamic(() => import("@/components/ui/PageLoadOverlay"), {
  ssr: false,
});

export default function OptionalPageLoadOverlay() {
  if (process.env.NEXT_PUBLIC_ENABLE_PAGE_LOAD_OVERLAY !== "true") {
    return null;
  }

  return <PageLoadOverlay />;
}
