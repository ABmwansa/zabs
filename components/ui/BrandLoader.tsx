import Image from "next/image";

interface BrandLoaderProps {
  fullscreen?: boolean;
}

export default function BrandLoader({ fullscreen = true }: BrandLoaderProps) {
  return (
    <div
      className={fullscreen ? "brand-loader-shell" : "brand-loader-inline"}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="brand-loader-panel">
        <div className="brand-loader-orbit" />
        <div className="brand-loader-ring" />
        <div className="relative z-[1]">
          <Image
            src="/images/zabs-logo.svg"
            alt="ZABS Logo"
            width={132}
            height={56}
            className="h-auto w-[7.75rem] sm:w-[8.25rem]"
            priority
          />
        </div>
        <div className="mt-5 text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.26em] text-primary-700">
            Zambia Bureau of Standards
          </div>
          <div className="mt-2 text-sm text-grey-500">
            Loading trusted standards and services...
          </div>
        </div>
      </div>
    </div>
  );
}
