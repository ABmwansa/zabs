import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CountUpValue from "@/components/ui/CountUpValue";
import Reveal from "@/components/ui/Reveal";
import ImageShowcaseSection from "@/components/ui/ImageShowcaseSection";
import { getAboutPageContent } from "@/lib/cms";
import { aboutCultureImages, pageHeaderImages } from "@/lib/content/site-images";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Eye,
  Globe,
  Heart,
  Shield,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const aboutIconMap = {
  award: Award,
  bookOpen: BookOpen,
  calendar: Calendar,
  eye: Eye,
  globe: Globe,
  heart: Heart,
  shield: Shield,
  target: Target,
  trophy: Trophy,
  users: Users,
};

export default async function AboutPage() {
  // Static pages can already use the server CMS facade directly.
  const aboutPageContent = await getAboutPageContent();

  return (
    <>
      <PageHeader
        title={aboutPageContent.header.title}
        description={aboutPageContent.header.description}
        breadcrumbs={aboutPageContent.header.breadcrumbs}
        badge={aboutPageContent.header.badge}
        backgroundImageSrc={pageHeaderImages.about.src}
        backgroundImageAlt={pageHeaderImages.about.alt}
        backgroundImagePosition={pageHeaderImages.about.position}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="section-badge mb-4">
                <Users size={12} /> {aboutPageContent.intro.badge}
              </div>
              <h2 className="section-title mb-5">{aboutPageContent.intro.title}</h2>
              <div className="space-y-4 text-grey-600 leading-relaxed">
                {aboutPageContent.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-primary-100 bg-primary-50 px-6 py-5">
                <p className="font-heading text-xl font-black leading-relaxed text-primary-800 md:text-2xl">
                  {aboutPageContent.intro.quote}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-grey-100">
                {aboutPageContent.quickStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <CountUpValue
                      value={stat.value}
                      className="text-2xl font-black text-primary-700 font-heading"
                    />
                    <div className="text-xs text-grey-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {aboutPageContent.highlights.map((highlight, index) => {
                const Icon = aboutIconMap[highlight.icon as keyof typeof aboutIconMap];
                const colorClasses = highlight.color === "primary"
                  ? {
                      card: "bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200",
                      icon: "bg-primary-600 text-white",
                      year: "text-primary-800",
                    }
                  : {
                      card: "bg-gradient-to-br from-secondary-50 to-secondary-100 border-secondary-200",
                      icon: "bg-secondary-600 text-white",
                      year: "text-secondary-800",
                    };

                return (
                  <Reveal key={highlight.title} delay={index * 80}>
                    <div className={`rounded-2xl p-6 border ${colorClasses.card}`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClasses.icon}`}>
                          <Icon size={22} />
                        </div>
                        <div>
                          <div className={`text-2xl font-black font-heading ${colorClasses.year}`}>{highlight.year}</div>
                          <p className="text-grey-700 font-semibold mt-1">{highlight.title}</p>
                          <p className="text-grey-500 text-sm mt-1">{highlight.description}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}

              <div className="bg-white rounded-2xl p-4 border border-grey-200 flex items-center justify-between">
                {aboutPageContent.memberships.map((membership) => {
                  const Icon = aboutIconMap[membership.icon as keyof typeof aboutIconMap];
                  const colorClasses = membership.color === "primary"
                    ? "bg-primary-100 text-primary-700"
                    : "bg-secondary-100 text-secondary-700";

                  return (
                    <div key={membership.label} className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses}`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-grey-500">{membership.label}</p>
                        <p className="text-sm font-semibold text-grey-800">{membership.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageShowcaseSection
        badge="Inside ZABS"
        title="People, culture, and public engagement."
        description="These moments make the organisation feel real and public-facing, which helps the site feel more credible and professional."
        items={aboutCultureImages}
        backgroundClassName="bg-grey-50"
      />

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-badge mx-auto w-fit mb-4">
              <Target size={12} /> {aboutPageContent.principles.badge}
            </div>
            <h2 className="section-title mb-4">{aboutPageContent.principles.title}</h2>
            <p className="section-subtitle">{aboutPageContent.principles.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Reveal>
              <div className="bg-white rounded-2xl p-8 border border-grey-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                  <Target size={28} className="text-primary-700" />
                </div>
                <h3 className="text-2xl font-black text-grey-900 mb-3">Our Mission</h3>
                <p className="text-grey-600 leading-relaxed">{aboutPageContent.principles.mission}</p>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="bg-white rounded-2xl p-8 border border-grey-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-secondary-50 rounded-xl flex items-center justify-center mb-5">
                  <Eye size={28} className="text-secondary-700" />
                </div>
                <h3 className="text-2xl font-black text-grey-900 mb-3">Our Vision</h3>
                <p className="text-grey-600 leading-relaxed">{aboutPageContent.principles.vision}</p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutPageContent.values.map((value, index) => {
              const Icon = aboutIconMap[value.icon as keyof typeof aboutIconMap];
              const isPrimary = value.color === "primary";
              return (
                <Reveal key={value.title} delay={index * 70}>
                  <div className="bg-white rounded-2xl p-6 border border-grey-100 text-center hover:shadow-lg transition-all group">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all group-hover:scale-110 ${
                      isPrimary ? "bg-primary-50 group-hover:bg-primary-100" : "bg-secondary-50 group-hover:bg-secondary-100"
                    }`}>
                      <Icon size={24} className={isPrimary ? "text-primary-700" : "text-secondary-700"} />
                    </div>
                    <h4 className="text-lg font-black text-grey-900 mb-2">{value.title}</h4>
                    <p className="text-grey-500 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="section-badge mx-auto w-fit mb-4">
                <BookOpen size={12} /> {aboutPageContent.mandate.badge}
              </div>
              <h2 className="section-title mb-4">{aboutPageContent.mandate.title}</h2>
              <p className="text-grey-500">{aboutPageContent.mandate.description}</p>
            </div>

            <div className="space-y-4">
              {aboutPageContent.mandate.items.map((mandate, index) => (
                <Reveal key={mandate} delay={index * 60}>
                  <div className="flex items-start gap-4 bg-grey-50 rounded-xl p-5 border border-grey-100 hover:border-primary-200 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="flex items-start gap-3 flex-1">
                      <CheckCircle size={18} className="text-secondary-500 mt-0.5 flex-shrink-0" />
                      <p className="text-grey-700 leading-relaxed">{mandate}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="mb-12 rounded-[2rem] border border-primary-100 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="section-badge mb-4">
                  <BookOpen size={12} /> Organisation Brief
                </div>
                <h2 className="text-2xl font-black text-grey-900 md:text-3xl">
                  {aboutPageContent.organisationBrief.title}
                </h2>
                <p className="mt-3 text-grey-600">
                  {aboutPageContent.organisationBrief.description}
                </p>
              </div>
              <a
                href={aboutPageContent.organisationBrief.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {aboutPageContent.organisationBrief.cta.label} <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-badge mx-auto w-fit mb-4">
              <Calendar size={12} /> Our Journey
            </div>
            <h2 className="section-title mb-4">Key Milestones</h2>
            <p className="section-subtitle">
              Four decades of commitment to quality and standardization in Zambia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutPageContent.milestones.map((milestone, index) => {
              const Icon = aboutIconMap[milestone.icon as keyof typeof aboutIconMap];
              return (
                <Reveal key={milestone.year} delay={index * 80}>
                  <div className="relative bg-white rounded-2xl p-6 border border-grey-100 text-center hover:shadow-xl transition-all group">
                    {index < aboutPageContent.milestones.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary-200" />
                    )}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="text-3xl font-black text-primary-700 font-heading mb-2">{milestone.year}</div>
                    <h3 className="font-bold text-grey-900 mb-2">{milestone.title}</h3>
                    <p className="text-grey-500 text-sm">{milestone.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-badge mx-auto mb-4 w-fit">
              <Globe size={12} /> {aboutPageContent.partners.badge}
            </div>
            <h2 className="section-title mb-4">{aboutPageContent.partners.title}</h2>
            <p className="section-subtitle">{aboutPageContent.partners.description}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aboutPageContent.partners.links.map((partner, index) => (
              <Reveal key={partner.href} delay={index * 60}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-[1.5rem] border border-grey-100 bg-grey-50 px-5 py-4 text-left transition-all hover:border-primary-200 hover:bg-white hover:shadow-lg"
                >
                  <span className="pr-4 text-sm font-semibold leading-relaxed text-grey-800">
                    {partner.label}
                  </span>
                  <ArrowRight
                    size={16}
                    className="flex-shrink-0 text-primary-700 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6">
              <Star size={14} className="text-secondary-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">{aboutPageContent.cta.eyebrow}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 font-heading">
              {aboutPageContent.cta.title}
            </h2>
            <p className="text-primary-100 text-base md:text-lg mb-8 max-w-lg mx-auto">
              {aboutPageContent.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={aboutPageContent.cta.primaryCta.href} className="btn-secondary group">
                {aboutPageContent.cta.primaryCta.label} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href={aboutPageContent.cta.secondaryCta.href} className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all inline-flex items-center gap-2">
                {aboutPageContent.cta.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
