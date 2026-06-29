import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle,
  FileText,
  FlaskConical,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { Calendar } from "lucide-react";

import HeroSlider from "@/components/home/HeroSlider";
import CountUpValue from "@/components/ui/CountUpValue";
import Reveal from "@/components/ui/Reveal";
import { getHomePageContent, getSiteSettings } from "@/lib/cms";
import { homeInstitutionalImages, homeProgrammeImages } from "@/lib/content/site-images";

const homeIconMap = {
  award: Award,
  bookOpen: BookOpen,
  calendar: Calendar,
  fileText: FileText,
  flaskConical: FlaskConical,
  globe: Globe,
  graduationCap: GraduationCap,
  shieldCheck: ShieldCheck,
  target: Target,
  trendingUp: TrendingUp,
  trophy: Trophy,
  users: Users,
};

type HomePageContent = Awaited<ReturnType<typeof getHomePageContent>>;
type SiteSettingsContent = Awaited<ReturnType<typeof getSiteSettings>>;

function HomePhotoGallerySection({
  badge,
  title,
  description,
  items,
  backgroundClassName,
}: {
  badge: string;
  title: string;
  description: string;
  items: typeof homeInstitutionalImages;
  backgroundClassName: string;
}) {
  const layoutClasses = [
    "xl:col-span-5 xl:row-span-2",
    "xl:col-span-4",
    "xl:col-span-3",
    "xl:col-span-3",
    "xl:col-span-4",
  ];

  return (
    <section className={`section-padding ${backgroundClassName}`}>
      <div className="container-custom">
        <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-end">
          <div className="max-w-3xl">
            <div className="section-badge mb-4">{badge}</div>
            <h2 className="section-title mb-4">{title}</h2>
            <p className="section-subtitle !mx-0 max-w-2xl">{description}</p>
          </div>

          <div className="rounded-[1.9rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(244,249,254,0.94)_100%)] p-6 shadow-[0_28px_70px_-44px_rgba(16,34,53,0.24)]">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-700">Visual Standard</div>
            <p className="mt-3 text-sm leading-relaxed text-grey-600">
              Cleaner presentation, restrained copy, and stronger photography give the homepage a more polished institutional feel.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-left">
              <div className="rounded-2xl border border-white/80 bg-white/90 px-4 py-4">
                <div className="text-2xl font-black text-grey-900">05</div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-grey-500">Curated Frames</div>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white/90 px-4 py-4">
                <div className="text-2xl font-black text-grey-900">01</div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-grey-500">Visual Story</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-12 xl:auto-rows-[13rem]">
          {items.map((item, index) => (
            <Reveal key={`${badge}-${item.src}`} delay={index * 70} className={layoutClasses[index] || "xl:col-span-4"}>
              <div className="group relative h-full min-h-[18rem] overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_30px_90px_-48px_rgba(16,34,53,0.3)] ring-1 ring-slate-950/[0.03]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={index === 0 ? "(min-width: 1280px) 40vw, 100vw" : "(min-width: 1280px) 24vw, (min-width: 768px) 48vw, 100vw"}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: item.position || "center center" }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,27,43,0.04)_0%,rgba(8,27,43,0.14)_56%,rgba(8,27,43,0.34)_100%)]" />
                <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/18" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ services }: { services: HomePageContent["services"] }) {
  return (
    <section className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_48%,#f4f9fe_100%)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-primary-100/60 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-secondary-100/60 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)] lg:items-end">
          <div className="max-w-3xl">
            <div className="section-badge mb-4">
              <Zap size={12} /> Our Services
            </div>
            <h2 className="section-title mb-4">A modern standards platform for industry, trade, and public confidence.</h2>
            <p className="section-subtitle !mx-0 max-w-2xl">
              ZABS delivers standards development, laboratory testing, certification, training, and publications through one institutional ecosystem.
            </p>
          </div>

          <div className="rounded-[1.9rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(246,250,254,0.94)_100%)] p-6 shadow-[0_28px_70px_-42px_rgba(16,34,53,0.25)]">
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary-700">Institutional Platform</div>
            <p className="mt-3 text-sm leading-relaxed text-grey-600">
              Structured service lines for regulators, manufacturers, exporters, and the wider public.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-primary-100/70 bg-white px-4 py-4">
                <div className="text-2xl font-black font-heading text-primary-700">{services.length}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary-700/75">Service Pillars</div>
              </div>
              <div className="rounded-2xl border border-secondary-100/70 bg-white px-4 py-4">
                <div className="text-2xl font-black font-heading text-secondary-700">40+</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-secondary-700/75">Years of Delivery</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = homeIconMap[service.icon as keyof typeof homeIconMap];
            const isPrimary = service.color === "primary";
            const isFeatured = index === 0;

            return (
              <Reveal key={service.title} className="h-full" delay={index * 70}>
                <Link
                  href={service.href}
                  className={`group relative block h-full overflow-hidden rounded-[1.75rem] border transition-all duration-300 ${
                    isFeatured
                      ? "xl:col-span-2 border-primary-200 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-8 text-white shadow-[0_30px_80px_-40px_rgba(0,131,211,0.65)]"
                      : "border-white/80 bg-white/95 p-7 shadow-[0_24px_60px_-40px_rgba(16,34,53,0.28)] hover:-translate-y-1.5 hover:border-primary-200"
                  }`}
                >
                  <div className="absolute inset-0 pointer-events-none">
                    <div className={`absolute right-0 top-0 h-36 w-36 rounded-full blur-3xl ${isFeatured ? "bg-white/10" : "bg-primary-100/70"}`} />
                  </div>

                  <div className="relative">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${
                          isFeatured
                            ? "bg-white/12 text-white"
                            : isPrimary
                              ? "bg-primary-50 text-primary-700"
                              : "bg-secondary-50 text-secondary-700"
                        }`}
                      >
                        <Icon size={24} />
                      </div>
                      <div className={`text-[11px] font-bold uppercase tracking-[0.24em] ${isFeatured ? "text-white/70" : "text-grey-400"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <h3 className={`mb-3 font-heading text-2xl font-black ${isFeatured ? "text-white" : "text-grey-900 group-hover:text-primary-700"}`}>
                      {service.title}
                    </h3>
                    <p className={`max-w-xl leading-relaxed ${isFeatured ? "text-primary-100" : "text-grey-500"}`}>
                      {service.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between gap-4">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
                          isFeatured
                            ? "bg-white/10 text-white"
                            : isPrimary
                              ? "bg-primary-50 text-primary-700"
                              : "bg-secondary-50 text-secondary-700"
                        }`}
                      >
                        Service Line
                      </span>
                      <div className={`inline-flex items-center gap-2 text-sm font-semibold ${isFeatured ? "text-white" : "text-primary-700"}`}>
                        {service.label} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutSection({ aboutSection }: { aboutSection: HomePageContent["aboutSection"] }) {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-secondary-400/20 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(20rem,1.08fr)] lg:items-center">
          <div>
            <div className="section-badge-dark mb-4">
              <BookOpen size={12} /> About ZABS
            </div>
            <h2 className="mb-5 max-w-2xl font-heading text-4xl font-black leading-tight text-white md:text-5xl">
              {aboutSection.title}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-primary-100 md:text-lg">
              {aboutSection.description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {aboutSection.mandates.slice(0, 4).map((mandate) => (
                <div key={mandate} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-white/12">
                      <CheckCircle size={16} className="text-secondary-300" />
                    </div>
                    <p className="text-sm leading-relaxed text-white/88">{mandate}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={aboutSection.primaryCta.href} className="btn-secondary">
                {aboutSection.primaryCta.label} <ArrowRight size={15} />
              </Link>
              <Link
                href={aboutSection.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-xl border border-white/18 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/16"
              >
                {aboutSection.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/12 bg-white/[0.1] p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-secondary-300">Statutory Mandate</div>
                  <h3 className="mt-3 font-heading text-3xl font-black text-white">{aboutSection.imageLabel}</h3>
                  <p className="mt-2 text-sm text-primary-100">{aboutSection.imageSubLabel}</p>
                </div>
                <div className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/85">
                  Standards Act No. 4 of 2017
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {aboutSection.floatingCards.map((card, index) => {
                  const Icon = homeIconMap[card.icon as keyof typeof homeIconMap];
                  const isPrimary = card.color === "primary";

                  return (
                    <Reveal key={card.value} delay={index * 90}>
                      <div
                        className={`rounded-[1.5rem] border px-5 py-5 ${
                          isPrimary
                            ? "border-white/12 bg-white/10"
                            : "border-secondary-300/20 bg-secondary-500/10"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${isPrimary ? "bg-white/12 text-white" : "bg-secondary-500 text-white"}`}>
                            <Icon size={20} />
                          </div>
                          <div>
                            <div className="font-heading text-2xl font-black text-white">{card.value}</div>
                            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-100/90">{card.label}</div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-5">
                <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/70">Institutional Reach</div>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <div>
                    <div className="font-heading text-2xl font-black text-white">ISO</div>
                    <div className="text-xs text-primary-100/85">Global standards participation</div>
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-black text-white">SADCAS</div>
                    <div className="text-xs text-primary-100/85">Regional accreditation alignment</div>
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-black text-white">WTO/TBT</div>
                    <div className="text-xs text-primary-100/85">Trade facilitation role</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection({ stats }: { stats: HomePageContent["stats"] }) {
  return (
    <section className="section-padding bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfe_100%)]">
      <div className="container-custom">
        <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)] lg:items-end">
          <div className="max-w-3xl">
            <div className="section-badge mb-4">
              <BarChart3 size={12} /> ZABS by the Numbers
            </div>
            <h2 className="section-title mb-4">Measured capability, national reach, and decades of institutional delivery.</h2>
            <p className="section-subtitle !mx-0 max-w-2xl">
              A stronger public-facing institution is built on visible scale, tested systems, and services people can trust.
            </p>
          </div>

          <div className="rounded-[1.9rem] border border-primary-100 bg-gradient-to-br from-white to-primary-50/70 p-6 shadow-[0_22px_60px_-44px_rgba(16,34,53,0.18)]">
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary-700">Performance Snapshot</div>
            <p className="mt-3 text-sm leading-relaxed text-grey-600">
              National delivery expressed through standards, certification, laboratories, and capacity building.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = homeIconMap[stat.icon as keyof typeof homeIconMap];
            const isFeatured = index === 0;
            const isDark = index === 0 || index === 3;

            return (
              <Reveal key={stat.label} delay={index * 70}>
                <div
                  className={`group relative overflow-hidden rounded-[1.6rem] border p-6 transition-all duration-300 ${
                    isFeatured
                      ? "xl:col-span-2 border-primary-200 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white shadow-[0_26px_70px_-38px_rgba(0,131,211,0.55)]"
                      : isDark
                        ? "border-primary-200 bg-gradient-to-br from-primary-600 to-primary-500 text-white"
                      : "border-white/90 bg-white hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-[0_26px_70px_-42px_rgba(16,34,53,0.22)]"
                  }`}
                >
                  <div className="absolute inset-0 pointer-events-none">
                    <div className={`absolute right-0 top-0 h-24 w-24 rounded-full blur-3xl ${isDark || isFeatured ? "bg-white/10" : "bg-primary-100/80"}`} />
                  </div>

                  <div className="relative">
                    <div className="mb-8 flex items-center justify-between gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${isDark || isFeatured ? "bg-white/10 text-secondary-300" : "bg-primary-50 text-primary-700"}`}>
                        <Icon size={20} />
                      </div>
                      <div className={`text-[11px] font-bold uppercase tracking-[0.2em] ${isDark || isFeatured ? "text-white/70" : "text-grey-400"}`}>
                        {stat.sub}
                      </div>
                    </div>

                    <CountUpValue
                      value={stat.value}
                      className={`font-heading text-4xl font-black ${isDark || isFeatured ? "text-white" : "text-grey-900"}`}
                    />
                    <div className={`mt-2 text-base font-semibold ${isDark || isFeatured ? "text-white" : "text-grey-800"}`}>{stat.label}</div>
                    <div className={`mt-2 text-sm ${isDark || isFeatured ? "text-primary-100" : "text-grey-500"}`}>{stat.sub}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CertificationSection({ certificationSection }: { certificationSection: HomePageContent["certificationSection"] }) {
  return (
    <section className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,#f6fbff_0%,#ffffff_55%,#f7fbff_100%)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary-100/60 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,1.05fr)]">
          <div className="lg:pt-4">
            <div className="section-badge mb-4">
              <ShieldCheck size={12} /> Certification
            </div>
            <h2 className="section-title mb-5">{certificationSection.title}</h2>
            <p className="max-w-2xl leading-relaxed text-grey-600">{certificationSection.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {certificationSection.categories.slice(0, 6).map((category) => (
                <div key={category} className="rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-semibold text-grey-700 shadow-[0_10px_26px_-22px_rgba(16,34,53,0.28)]">
                  {category}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href={certificationSection.primaryCta.href} className="btn-primary">
                {certificationSection.primaryCta.label} <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {certificationSection.cards.map((card, index) => {
              const Icon = homeIconMap[card.icon as keyof typeof homeIconMap];

              if (card.variant === "cta" && card.link) {
                return (
                  <Reveal key={card.title} delay={index * 90}>
                    <div
                      className="rounded-[1.75rem] border border-primary-200 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-7 text-white shadow-[0_28px_70px_-40px_rgba(0,131,211,0.55)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/12">
                          <Icon size={24} className="text-secondary-300" />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">Next Step</div>
                          <h3 className="mt-2 text-2xl font-black font-heading">{card.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-primary-100">{card.description}</p>
                          <Link href={card.link.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                            {card.link.label} <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              }

              if (card.variant === "feature") {
                return (
                  <Reveal key={card.title} delay={index * 90}>
                    <div
                      className="rounded-[1.75rem] border border-primary-100 bg-white p-7 shadow-[0_24px_60px_-40px_rgba(16,34,53,0.24)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                          <Icon size={24} />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-700">Flagship Scheme</div>
                          <h3 className="mt-2 text-xl font-black text-grey-900">{card.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-grey-500">{card.description}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              }

              return (
                <Reveal key={card.title} delay={index * 90}>
                  <div
                    className={`rounded-[1.75rem] border bg-white p-7 shadow-[0_24px_60px_-40px_rgba(16,34,53,0.18)] ${index === 1 ? "lg:ml-10" : ""}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary-50 text-secondary-700">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary-700">Regional Recognition</div>
                        <h3 className="mt-2 text-xl font-black text-grey-900">{card.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-grey-500">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function AnnouncementsSection({
  announcements,
  announcementsHeader,
}: {
  announcements: HomePageContent["announcements"];
  announcementsHeader: HomePageContent["announcementsHeader"];
}) {
  const [featured, ...secondaryItems] = announcements;
  const FeaturedIcon = featured ? homeIconMap[featured.icon as keyof typeof homeIconMap] : Trophy;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="section-badge mb-4">
              <Trophy size={12} /> Latest Updates
            </div>
            <h2 className="section-title mb-4">{announcementsHeader.title}</h2>
            <p className="section-subtitle !mx-0 max-w-2xl">{announcementsHeader.description}</p>
          </div>

          <Link href={announcementsHeader.allUpdatesCta.href} className="btn-ghost">
            {announcementsHeader.allUpdatesCta.label} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          {featured && (
            <div className="relative overflow-hidden rounded-[2rem] border border-primary-200 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-8 text-white shadow-[0_32px_80px_-42px_rgba(0,131,211,0.45)]">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
              </div>

              <div className="relative flex h-full flex-col">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                    {featured.tag}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12">
                    <FeaturedIcon size={22} className="text-secondary-300" />
                  </div>
                </div>

                <h3 className="max-w-xl font-heading text-3xl font-black leading-tight">{featured.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-100">{featured.description}</p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href={featured.href} className="btn-secondary">
                    {featured.label} <ArrowRight size={15} />
                  </Link>
                  <div className="text-sm text-white/78">Featured institutional notice</div>
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-5">
            {secondaryItems.map((announcement, index) => {
              const Icon = homeIconMap[announcement.icon as keyof typeof homeIconMap];
              const isPrimary = announcement.tagColor === "primary";

              return (
                <Reveal key={announcement.title} delay={(index + 1) * 90}>
                  <div
                    className={`rounded-[1.7rem] border p-6 shadow-[0_24px_60px_-40px_rgba(16,34,53,0.16)] ${
                      index === 0 ? "border-grey-100 bg-white" : "border-primary-100 bg-gradient-to-br from-primary-50 to-white"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl ${isPrimary ? "bg-primary-100 text-primary-700" : "bg-secondary-100 text-secondary-700"}`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${isPrimary ? "bg-primary-100 text-primary-800" : "bg-secondary-100 text-secondary-800"}`}>
                          {announcement.tag}
                        </div>
                        <h3 className="mt-3 text-xl font-black text-grey-900">{announcement.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-grey-500">{announcement.description}</p>
                        <Link href={announcement.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-700">
                          {announcement.label} <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersSection({ partners }: { partners: HomePageContent["partners"] }) {
  return (
    <section className="section-padding-sm bg-[linear-gradient(180deg,#f7fbff_0%,#f3f8fd_100%)]">
      <div className="container-custom">
        <div className="rounded-[2.1rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(246,250,254,0.94)_100%)] px-6 py-8 shadow-[0_24px_60px_-42px_rgba(16,34,53,0.16)] md:px-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary-700">Regional and Global Alignment</p>
              <h3 className="mt-2 font-heading text-2xl font-black text-grey-900">Connected to the wider standards ecosystem.</h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-grey-500">
              Our institutional role is strengthened through international, regional, and continental standards bodies.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {partners.map((partner, index) => (
              <div
                key={partner}
                className={`rounded-[1.25rem] border px-5 py-4 text-sm font-bold tracking-[0.08em] transition-all ${
                  index % 3 === 0
                    ? "border-primary-100 bg-white text-primary-700"
                    : index % 3 === 1
                      ? "border-secondary-100 bg-white text-secondary-700"
                      : "border-grey-200 bg-white text-grey-700"
                }`}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({
  ctaSection,
  siteSettings,
}: {
  ctaSection: HomePageContent["ctaSection"];
  siteSettings: SiteSettingsContent;
}) {
  return (
    <section className="section-padding relative overflow-hidden bg-grey-900 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,131,211,0.38),transparent_28rem)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(8,152,224,0.18),transparent_28rem)]" />
      </div>

      <div className="container-custom relative">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,63,101,0.92)_0%,rgba(0,131,211,0.82)_58%,rgba(0,131,211,0.72)_100%)] p-8 shadow-[0_32px_90px_-46px_rgba(0,0,0,0.5)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2">
                <Star size={14} className="text-secondary-300" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white">{ctaSection.eyebrow}</span>
              </div>
              <h2 className="max-w-3xl font-heading text-4xl font-black leading-tight text-white md:text-5xl">
                {ctaSection.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-100 md:text-lg">
                {ctaSection.description}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.08] p-6 backdrop-blur-sm">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/72">Direct Access</div>
              <div className="mt-4 space-y-3 text-sm">
                <a href={siteSettings.primaryPhoneHref} className="flex items-center gap-3 text-white/88 transition-colors hover:text-white">
                  <Phone size={16} className="text-secondary-300" />
                  <span>{siteSettings.primaryPhone}</span>
                </a>
                <a href={siteSettings.primaryEmailHref} className="flex items-center gap-3 text-white/88 transition-colors hover:text-white">
                  <Mail size={16} className="text-secondary-300" />
                  <span>{siteSettings.primaryEmail}</span>
                </a>
                <div className="flex items-start gap-3 text-white/88">
                  <MapPin size={16} className="mt-0.5 text-secondary-300" />
                  <span>{siteSettings.topBarLocation}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={ctaSection.primaryCta.href} className="btn-secondary">
                {ctaSection.primaryCta.label} <ArrowRight size={16} />
              </Link>
              <Link
                href={ctaSection.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-xl border border-white/18 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/16"
              >
                {ctaSection.secondaryCta.label} <FileText size={16} />
              </Link>
            </div>

            <div className="text-sm text-white/76">Institutional support for standards, certification, testing, and training.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function HomePage() {
  const [homePageContent, currentSiteSettings] = await Promise.all([
    getHomePageContent(),
    getSiteSettings(),
  ]);

  return (
    <>
      <HeroSlider
        heroSlides={homePageContent.heroSlides}
        heroSummaryStats={homePageContent.heroSummaryStats}
        organizationName={currentSiteSettings.organizationName}
      />
      <ServicesSection services={homePageContent.services} />
      <HomePhotoGallerySection
        badge="Inside ZABS"
        title="Institutional work, presented with clarity."
        description="Laboratories, technical meetings, and stakeholder activity give the homepage a stronger, more credible visual presence."
        items={homeInstitutionalImages}
        backgroundClassName="bg-white"
      />
      <AboutSection aboutSection={homePageContent.aboutSection} />
      <StatsSection stats={homePageContent.stats} />
      <CertificationSection certificationSection={homePageContent.certificationSection} />
      <AnnouncementsSection
        announcements={homePageContent.announcements}
        announcementsHeader={homePageContent.announcementsHeader}
      />
      <HomePhotoGallerySection
        badge="Programmes & Events"
        title="Public programmes and institutional presence."
        description="Recognition moments, partnerships, and public events add visibility without crowding the page with unnecessary copy."
        items={homeProgrammeImages}
        backgroundClassName="bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_100%)]"
      />
      <PartnersSection partners={homePageContent.partners} />
      <CTASection ctaSection={homePageContent.ctaSection} siteSettings={currentSiteSettings} />
    </>
  );
}
