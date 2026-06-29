import PageHeader from "@/components/ui/PageHeader";
import ImageShowcaseSection from "@/components/ui/ImageShowcaseSection";
import Reveal from "@/components/ui/Reveal";
import { Award, Calendar, CheckCircle, ChevronRight, Clock, Globe, Mail, Medal, Phone, Sparkles, Target, Trophy } from "lucide-react";
import Link from "next/link";
import { getQualityAwardsPageContent } from "@/lib/cms";
import { pageHeaderImages, qualityAwardsImages } from "@/lib/content/site-images";

export default async function QualityAwardsPage() {
  const {
    awardCategories: AWARD_CATEGORIES,
    benefits: BENEFITS,
    benefitStats,
    judgingCriteria: JUDGING_CRITERIA,
    keyDates: KEY_DATES,
    pastWinners: PAST_WINNERS,
    processSteps: PROCESS_STEPS,
    programmeObjectives,
    stats,
  } = await getQualityAwardsPageContent();

  return (
    <>
      <PageHeader
        title="Zambia National Quality Awards"
        subtitle="The 11th Zambia National Quality Awards and Business Forum 2026 - Celebrating Excellence in Quality"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Quality Awards" }]}
        badge="ZAQA 2026"
        backgroundImageSrc={pageHeaderImages.qualityAwards.src}
        backgroundImageAlt={pageHeaderImages.qualityAwards.alt}
        backgroundImagePosition={pageHeaderImages.qualityAwards.position}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 py-16 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 border-4 border-white rounded-full -translate-x-32 -translate-y-32" />
          <div className="absolute bottom-0 right-0 w-96 h-96 border-4 border-secondary-400 rounded-full translate-x-32 translate-y-32" />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 border-2 border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6">
              <Trophy size={14} className="text-secondary-400" />
              <span className="text-xs font-bold uppercase tracking-wider">11th Annual Edition</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight font-heading">
              Celebrating Excellence in <span className="text-secondary-400">Quality Management</span>
            </h1>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              The premier national recognition programme celebrating organisations and individuals that demonstrate exceptional commitment to quality, innovation, and continuous improvement in Zambia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:awards@zabs.org.zm?subject=ZAQA 2026 Application" className="btn-secondary inline-flex items-center gap-2">
                Apply Now <ChevronRight size={16} />
              </a>
              <a href="#categories" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all">
                View Categories
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Reveal key={stat.label} delay={index * 60}>
                  <div className="bg-grey-50 rounded-2xl p-5 text-center border border-grey-100 hover:border-primary-200 hover:shadow-lg transition-all group">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Icon size={20} className="text-primary-700" />
                    </div>
                    <div className="text-3xl font-black text-primary-700 font-heading">{stat.value}</div>
                    <div className="text-sm font-semibold text-grey-800 mt-1">{stat.label}</div>
                    <div className="text-xs text-grey-500 mt-0.5">{stat.sub}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ImageShowcaseSection
        badge="Awards Showcase"
        title="Recognition that looks as strong as the programme."
        description="The awards page benefits from real ceremony photography because it signals prestige, professionalism, and public credibility."
        items={qualityAwardsImages}
        backgroundClassName="bg-grey-50"
      />

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="section-badge mx-auto w-fit mb-4">
              <Award size={12} /> About the Awards
            </div>
            <h2 className="section-title mb-4">Zambia&apos;s Premier Quality Recognition Programme</h2>
            <p className="text-grey-600 leading-relaxed">
              The Zambia National Quality Awards (ZAQA) is an annual programme administered by the Zambia Bureau of Standards (ZABS)
              to recognise organisations that have achieved excellence in quality management and business performance.
              The programme is based on the internationally acclaimed Business Excellence Model.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-2xl p-6 border border-grey-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Target size={22} className="text-primary-700" />
                </div>
                <h3 className="text-xl font-black text-grey-900">Programme Objectives</h3>
              </div>
              <ul className="space-y-2">
                {programmeObjectives.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-secondary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-grey-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-grey-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                  <Globe size={22} className="text-secondary-700" />
                </div>
                <h3 className="text-xl font-black text-grey-900">Assessment Model</h3>
              </div>
              <p className="text-grey-600 text-sm mb-4">
                Based on the internationally acclaimed Business Excellence Model, adapted for the Zambian context. The assessment framework evaluates seven key criteria:
              </p>
              <div className="flex flex-wrap gap-2">
                {JUDGING_CRITERIA.slice(0, 4).map((c) => (
                  <span key={c.criterion} className="inline-flex rounded-full bg-primary-50 text-primary-700 text-xs px-2 py-1">
                    {c.criterion}
                  </span>
                ))}
                <span className="inline-flex rounded-full bg-grey-100 text-grey-600 text-xs px-2 py-1">+3 more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-badge mx-auto w-fit mb-4">
              <Medal size={12} /> Award Categories
            </div>
            <h2 className="section-title mb-4">Recognition for Every Sector</h2>
            <p className="section-subtitle">
              Four distinct categories celebrating excellence across different sectors and scales of operation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {AWARD_CATEGORIES.map((cat, index) => {
              const Icon = cat.icon;
              const isPrimary = cat.color === "primary";
              return (
                <Reveal key={cat.name} delay={index * 80}>
                  <div className={`bg-white rounded-2xl border-2 transition-all hover:shadow-xl ${isPrimary ? "border-primary-100 hover:border-primary-300" : "border-secondary-100 hover:border-secondary-300"}`}>
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${isPrimary ? "bg-primary-50" : "bg-secondary-50"}`}>
                          <Icon size={28} className={isPrimary ? "text-primary-700" : "text-secondary-700"} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-black text-grey-900 mb-1">{cat.name}</h3>
                          <p className="text-grey-600 text-sm leading-relaxed">{cat.desc}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Trophy size={14} className="text-secondary-600" />
                          <span className="text-sm font-semibold text-grey-800">Prize:</span>
                          <span className="text-sm text-grey-600">{cat.prize}</span>
                        </div>
                      </div>

                      <div className="border-t border-grey-100 pt-4">
                        <p className="text-xs font-bold text-grey-500 uppercase tracking-wide mb-3">Assessment Criteria</p>
                        <div className="flex flex-wrap gap-2">
                          {cat.criteria.map((criterion) => (
                            <span key={criterion} className={`text-xs px-2 py-1 rounded-lg ${isPrimary ? "bg-primary-50 text-primary-700" : "bg-secondary-50 text-secondary-700"}`}>
                              {criterion}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-4">
                <Award size={12} className="text-secondary-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Why Participate</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 font-heading">Benefits of Participating</h2>
              <p className="text-primary-100 leading-relaxed mb-6">
                Participation in the ZAQA process delivers tangible value to your organisation, even if you do not win.
                The self-assessment and external review provide invaluable insights for continuous improvement.
              </p>
              <ul className="space-y-3">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-primary-100">
                    <CheckCircle size={18} className="text-secondary-400 flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {benefitStats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 70}>
                  <div className="bg-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                    <div className="text-2xl font-black text-secondary-400 font-heading">{stat.value}</div>
                    <div className="text-sm font-semibold text-white mt-1">{stat.label}</div>
                    <div className="text-xs text-primary-200 mt-0.5">{stat.sub}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-badge mx-auto w-fit mb-4">
              <Calendar size={12} /> How to Apply
            </div>
            <h2 className="section-title mb-4">Application Process</h2>
            <p className="section-subtitle">
              Six simple steps to participate in the Zambia National Quality Awards
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.step} delay={index * 70}>
                  <div className="relative bg-grey-50 rounded-2xl p-6 border border-grey-100 hover:shadow-lg transition-all group">
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-black shadow-md">
                      {step.step}
                    </div>
                    <div className="pt-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon size={20} className="text-primary-700" />
                      </div>
                      <h3 className="text-lg font-black text-grey-900 mb-2">{step.title}</h3>
                      <p className="text-grey-600 text-sm leading-relaxed mb-3">{step.desc}</p>
                      <div className="flex items-center gap-2 text-xs text-grey-400">
                        <Clock size={12} />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="section-badge mx-auto w-fit mb-4">
              <Target size={12} /> Assessment Framework
            </div>
            <h2 className="section-title mb-4">Judging Criteria</h2>
            <p className="section-subtitle">
              Rigorous evaluation based on the Business Excellence Model
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {JUDGING_CRITERIA.map((criterion, index) => (
              <Reveal key={criterion.criterion} delay={index * 50}>
                <div className="bg-white rounded-xl p-4 border border-grey-100 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-grey-900">{criterion.criterion}</h4>
                    <span className="inline-flex rounded-full bg-primary-100 text-primary-700 text-xs font-bold px-2 py-0.5">
                      {criterion.weight}
                    </span>
                  </div>
                  <p className="text-grey-500 text-xs">{criterion.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="section-badge mb-3">
                <Trophy size={12} /> Hall of Fame
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-grey-900">Recent Winners</h2>
            </div>
            <span className="text-sm text-grey-500 hidden md:block">{PAST_WINNERS.length} recipients</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PAST_WINNERS.map((winner, i) => (
              <Reveal key={`${winner.year}-${winner.winner}-${i}`} delay={i * 70}>
                <div className="bg-grey-50 rounded-2xl p-5 border border-grey-100 hover:shadow-lg transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex rounded-full bg-secondary-100 text-secondary-800 text-xs font-bold px-2 py-0.5">
                      {winner.year}
                    </span>
                    <Trophy size={16} className="text-secondary-500" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-700 font-black text-sm">
                        {winner.winner.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-grey-900 text-sm">{winner.winner}</h4>
                      <p className="text-xs text-grey-500">{winner.category}</p>
                    </div>
                  </div>
                  <p className="text-xs text-grey-600 leading-relaxed">{winner.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="section-badge mx-auto w-fit mb-4">
              <Calendar size={12} /> Important Dates
            </div>
            <h2 className="section-title mb-4">Key Dates - ZAQA 2026</h2>
            <p className="section-subtitle">
              Mark your calendar for these important milestones
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {KEY_DATES.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.event} delay={index * 60}>
                  <div className="bg-white rounded-xl p-4 border border-grey-100 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Icon size={16} className="text-primary-700" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-primary-700">{item.date}</div>
                        <div className="text-sm font-semibold text-grey-800">{item.event}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
              <Sparkles size={14} className="text-secondary-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Ready to Apply?</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 font-heading">Ready to Be Recognised?</h2>
            <p className="text-primary-100 text-base md:text-lg mb-8 max-w-lg mx-auto">
              Contact the ZABS Quality Awards Secretariat to receive the 2026 application pack, guidelines, and fee schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a href="mailto:awards@zabs.org.zm?subject=ZAQA 2026 Application Pack Request" className="btn-secondary inline-flex items-center gap-2">
                Request Application Pack <ChevronRight size={16} />
              </a>
              <Link href="/contact" className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all inline-flex items-center gap-2">
                Contact Secretariat
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-primary-200">
              <a href="mailto:awards@zabs.org.zm" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-secondary-400" /> awards@zabs.org.zm
              </a>
              <a href="tel:+260777764422" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} className="text-secondary-400" /> +260 777 764 422
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
