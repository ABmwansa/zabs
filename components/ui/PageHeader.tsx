import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Home } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  badge?: string;
  backgroundImageSrc?: string;
  backgroundImageAlt?: string;
  backgroundImagePosition?: string;
}

export default function PageHeader({
  title,
  subtitle,
  description,
  breadcrumbs,
  badge,
  backgroundImageSrc,
  backgroundImageAlt,
  backgroundImagePosition,
}: PageHeaderProps) {
  const sub = subtitle || description;
  const crumbs = breadcrumbs || [];

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white">
      <div className="absolute inset-0 pointer-events-none">
        {backgroundImageSrc && (
          <Image
            src={backgroundImageSrc}
            alt={backgroundImageAlt || title}
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.34] saturate-[0.86]"
            style={{ objectPosition: backgroundImagePosition || "center center" }}
          />
        )}
        <div className={`absolute inset-0 ${backgroundImageSrc ? "bg-[linear-gradient(120deg,rgba(0,39,62,0.88)_0%,rgba(0,92,140,0.78)_42%,rgba(0,131,211,0.64)_100%)]" : "bg-transparent"}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_22rem)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(8,152,224,0.2),transparent_20rem)]" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute left-8 top-1/3 h-28 w-28 rounded-full border border-secondary-300/20" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary-400/60 to-transparent" />
      </div>

      <div className="container-custom relative py-14 md:py-20 lg:py-24">
        {crumbs.length > 0 && (
          <nav className="panel-glass mb-6 inline-flex flex-wrap items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70">
            <Link href="/" className="flex items-center gap-1 transition-colors hover:text-white">
              <Home size={14} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            {crumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-1">
                <ChevronRight size={14} />
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 shadow-lg shadow-black/10 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-secondary-400 shadow-[0_0_0_6px_rgba(8,152,224,0.14)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/[0.85]">{badge}</span>
          </div>
        )}

        <div className="max-w-4xl">
          <div className="ornament-line mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-secondary-300">
            Institutional Excellence
          </div>
          <h1 className="max-w-4xl font-heading text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>

        {sub && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-100 md:text-lg">
            {sub}
          </p>
        )}

        <div className="mt-7 flex items-center gap-3">
          <div className="h-1 w-16 rounded-full bg-secondary-400" />
          <div className="h-1 w-7 rounded-full bg-white/[0.45]" />
          <div className="h-px w-24 bg-white/[0.18]" />
        </div>

        <div className="mt-8 hidden max-w-4xl grid-cols-3 gap-4 md:grid">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-sm">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/[0.55]">Trusted Service</div>
            <div className="mt-2 text-sm text-white/[0.85]">National standards, testing, certification, and training in one system.</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-sm">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/[0.55]">Professional Reach</div>
            <div className="mt-2 text-sm text-white/[0.85]">Structured service pages for industry, institutions, and the public.</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-sm">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/[0.55]">Modern Access</div>
            <div className="mt-2 text-sm text-white/[0.85]">Prepared for cleaner content management and more polished editorial workflows.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
