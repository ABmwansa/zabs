"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Users,
  ShieldCheck,
  Pause,
  Play,
} from "lucide-react";
import type { HeroSlide } from "@/lib/content/types";
import CountUpValue from "@/components/ui/CountUpValue";

interface HeroSliderProps {
  heroSlides: HeroSlide[];
  heroSummaryStats: Array<{
    value: string;
    label: string;
  }>;
  organizationName: string;
}

export default function HeroSlider({ heroSlides, heroSummaryStats, organizationName }: HeroSliderProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  const slideCount = heroSlides.length;

  const goToSlide = (index: number) => {
    setCurrent(((index % slideCount) + slideCount) % slideCount);
  };

  const nextSlide = () => {
    setCurrent((previous) => (previous + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrent((previous) => (previous - 1 + slideCount) % slideCount);
  };

  useEffect(() => {
    if (!playing || prefersReducedMotion || slideCount < 2) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setCurrent((previous) => (previous + 1) % slideCount);
    }, 6000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [current, playing, prefersReducedMotion, slideCount]);

  if (slideCount === 0) {
    return null;
  }

  const slide = heroSlides[current];
  const statCards = [...heroSummaryStats, { value: slide.stat.value, label: slide.stat.label }];
  const backgroundImageSrc = slide.backgroundImage?.url || "/images/site/industry.jpg";
  const backgroundImageAlt = slide.backgroundImage?.alt || slide.headline || "ZABS institutional hero background";
  const backgroundPositions = ["78% center", "76% center", "center center", "82% center"];
  const backgroundPosition = backgroundPositions[current] || "center center";

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#008FD5] text-white">
      <div className="absolute inset-0">
        <Image
          key={`hero-background-${current}-${backgroundImageSrc}`}
          src={backgroundImageSrc}
          alt={backgroundImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover scale-[1.04] brightness-[0.62] saturate-[0.82] contrast-[1.04] transition-[transform,filter] duration-700"
          style={{ objectPosition: backgroundPosition }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,54,84,0.8)_0%,rgba(0,112,168,0.78)_34%,rgba(0,143,213,0.84)_70%,rgba(0,143,213,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,42,66,0.14)_0%,rgba(0,77,118,0.24)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(102,210,255,0.26),transparent_24rem)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_22rem)]" />
        <div className="absolute top-14 right-10 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute bottom-16 left-10 h-96 w-96 rounded-full border border-white/[0.08]" />
        <div className="absolute top-1/2 left-1/2 h-[840px] w-[840px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
      </div>

      <div className="container-custom relative py-14 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-1.5 animate-fade-in backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-200 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/[0.84]">{slide.eyebrow}</span>
            </div>

            <div className="ornament-line mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-primary-100">
              Modern Standards. Trusted Delivery.
            </div>

            <h1 className="mb-6 font-heading text-4xl font-black leading-[0.98] tracking-[-0.06em] text-white animate-fade-in sm:text-5xl lg:text-6xl xl:text-[4.6rem]">
              {slide.headline.split(" ").map((word, i) =>
                word.toLowerCase() === "quality" || word.toLowerCase() === "global" ? (
                  <span key={i} className="text-primary-100">{word} </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-primary-100 lg:mx-0 lg:text-lg">
              {slide.subtext}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <Link href={slide.primaryCta.href} className="btn-primary group">
                {slide.primaryCta.label}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href={slide.secondaryCta.href} className="btn-outline">
                {slide.secondaryCta.label}
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
              {statCards.map((stat, index) => (
                <div key={`hero-stat-${index}`} className="rounded-2xl border border-white/[0.08] bg-white/[0.06] px-4 py-4 text-center backdrop-blur-sm lg:text-left">
                  <CountUpValue
                    value={stat.value}
                    className="font-heading text-2xl font-black text-white sm:text-3xl"
                  />
                  <div className="mt-1 text-xs text-primary-100/[0.68]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden pb-16 pl-8 lg:block">
            <div className="absolute left-0 top-10 z-20 w-52 rounded-[1.6rem] border border-white/12 bg-white/[0.14] p-4 text-white shadow-[0_24px_60px_-34px_rgba(0,0,0,0.42)] backdrop-blur-xl">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-100">National Standards Body</div>
              <div className="mt-3 text-sm font-semibold leading-relaxed text-white/88">
                Quality, safety, and trust for Zambia.
              </div>
            </div>

            <div className="panel-glass relative z-10 overflow-hidden rounded-[2.2rem] p-7 shadow-[0_35px_80px_-36px_rgba(0,0,0,0.52)]">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))]" />
              <div className="absolute -top-4 -right-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#008FD5] shadow-lg animate-float">
                <ShieldCheck size={32} className="text-white" />
              </div>
              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.15] bg-gradient-to-br from-white/92 via-primary-50 to-secondary-50 shadow-[0_20px_46px_-32px_rgba(0,0,0,0.5)]">
                <div className="relative aspect-[1.02] overflow-hidden">
                  <Image
                    key={`hero-panel-image-${current}-${backgroundImageSrc}`}
                    src={backgroundImageSrc}
                    alt={backgroundImageAlt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                    style={{
                      animation: prefersReducedMotion ? "none" : "heroPanelPan 16s ease-in-out infinite alternate",
                      objectPosition: backgroundPosition,
                    }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,28,44,0.2)_0%,rgba(10,28,44,0.58)_62%,rgba(10,28,44,0.88)_100%)]" />
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4">
                    <div className="rounded-full border border-white/18 bg-primary-700/82 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-sm">
                      Institutional Quality
                    </div>
                    <div className="rounded-full border border-white/18 bg-white/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/88 backdrop-blur-sm">
                      ZABS Assured
                    </div>
                  </div>
                  <div className="absolute inset-x-6 bottom-6">
                    <div className="grid gap-4 rounded-[1.5rem] border border-white/12 bg-slate-950/26 p-5 shadow-[0_22px_48px_-34px_rgba(0,0,0,0.65)] backdrop-blur-md">
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-[1.35rem] bg-white/14 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                          <span className="text-xl font-black text-white">ZS</span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-100">ZABS Assured</p>
                          <p className="mt-2 text-sm font-semibold leading-relaxed text-white/88">
                            {organizationName}
                          </p>
                        </div>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                      <div className="flex items-center justify-between gap-4 text-white/74">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/56">
                            Current Focus
                          </div>
                          <div className="mt-2 max-w-[14rem] text-sm font-semibold leading-relaxed text-white/84">
                            {slide.eyebrow}
                          </div>
                        </div>
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                          <span className="h-2.5 w-2.5 rounded-full bg-primary-200" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-5 grid grid-cols-[1.08fr_0.92fr] gap-3">
                {statCards.slice(0, 2).map((stat, index) => (
                  <div
                    key={`hero-panel-stat-${index}`}
                    className={`group relative overflow-hidden rounded-[1.55rem] border px-4 py-4 text-left backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1 ${
                      index === 0
                        ? "border-white/16 bg-slate-950/28 shadow-[0_26px_58px_-34px_rgba(0,0,0,0.48)]"
                        : "mt-6 border-primary-100/18 bg-primary-950/30 shadow-[0_26px_58px_-34px_rgba(0,143,213,0.34)]"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.07)_34%,rgba(255,255,255,0.02)_100%)]" />
                    <div className="absolute inset-x-3 top-2 h-10 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.01))] blur-md" />
                    <div
                      className={`absolute -right-8 -bottom-8 h-24 w-24 rounded-full blur-2xl ${
                        index === 0 ? "bg-white/10" : "bg-primary-200/18"
                      }`}
                    />
                    <div className="absolute inset-[1px] rounded-[calc(1.55rem-1px)] border border-white/10" />
                    <div className="relative z-10">
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-200">
                        {index === 0 ? "Institutional Scale" : "Trusted Delivery"}
                      </div>
                      <CountUpValue value={stat.value} className="mt-2 text-xl font-black text-orange-300 [text-shadow:0_1px_12px_rgba(0,0,0,0.3)]" />
                      <div className="mt-1 text-xs leading-relaxed text-orange-100/90">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-1 left-14 z-20 rounded-[1.4rem] border border-white/70 bg-white/95 px-5 py-4 text-grey-900 shadow-[0_26px_60px_-32px_rgba(0,0,0,0.38)] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-[1rem] bg-primary-100">
                  <Users size={18} className="text-primary-700" />
                </div>
                <div>
                  <CountUpValue value="150+" className="font-heading text-xl font-black text-grey-900" />
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-grey-500">Certified Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0">
          <div className="container-custom">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`rounded-full transition-all duration-300 ${
                      idx === current ? "h-1.5 w-10 bg-primary-100" : "h-1.5 w-1.5 bg-white/[0.35] hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPlaying(!playing)}
                  aria-label={playing ? "Pause slider" : "Play slider"}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.08] text-white/[0.72] transition-all hover:bg-white/[0.14] hover:text-white"
                >
                  {playing ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.08] text-white/[0.72] transition-all hover:bg-white/[0.14] hover:text-white"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.08] text-white/[0.72] transition-all hover:bg-white/[0.14] hover:text-white"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {playing && !prefersReducedMotion && slideCount > 1 && (
          <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10">
            <div
              key={current}
              className="h-full bg-primary-100 transition-all duration-[6000ms] linear"
              style={{ width: "100%" }}
            />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes heroPanelPan {
          0% {
            transform: scale(1.04) translate3d(0, 0, 0);
          }
          100% {
            transform: scale(1.14) translate3d(-2%, -1.5%, 0);
          }
        }
      `}</style>
    </section>
  );
}
