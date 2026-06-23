"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import BrandLoader from "@/components/ui/BrandLoader";

const INITIAL_DURATION = 900;
const TRANSITION_DURATION = 420;

export default function PageLoadOverlay() {
  const pathname = usePathname();
  const firstLoadRef = useRef(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setVisible(false);
      firstLoadRef.current = false;
    }, firstLoadRef.current ? INITIAL_DURATION : TRANSITION_DURATION);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[120] transition-all duration-500 ${
        visible ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <BrandLoader />
    </div>
  );
}
