import PageHeader from "@/components/ui/PageHeader";
import ImageShowcaseSection from "@/components/ui/ImageShowcaseSection";
import Reveal from "@/components/ui/Reveal";
import { AlertCircle, BookOpen, Calendar, CheckCircle, ChevronRight, Clock, FileText, HelpCircle, Mail, PenTool, Sparkles, Star, Target, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { getEssayCompetitionPageContent } from "@/lib/cms";
import { essayCompetitionImages, pageHeaderImages } from "@/lib/content/site-images";

type TimelineStatus = "completed" | "active" | "upcoming";

export default async function EssayCompetitionPage() {
  const {
    eligibility: ELIGIBILITY,
    faqItems,
    guidelines: GUIDELINES,
    judgingCriteria: JUDGING_CRITERIA,
    pastWinners: PAST_WINNERS,
    prizes: PRIZES,
    stats,
    timeline: TIMELINE,
  } = await getEssayCompetitionPageContent();

  return (
    <>
      <PageHeader
        title="13th ZABS Essay Competition"
        subtitle="The Role of Harmonized Standards in Reducing Technical Barriers to Trade"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Essay Competition" }]}
        badge="Open for Entries"
        backgroundImageSrc={pageHeaderImages.essayCompetition.src}
        backgroundImageAlt={pageHeaderImages.essayCompetition.alt}
        backgroundImagePosition={pageHeaderImages.essayCompetition.position}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 py-16 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 border-4 border-white rounded-full -translate-x-48 -translate-y-48" />
          <div className="absolute bottom-0 right-0 w-96 h-96 border-4 border-secondary-400 rounded-full translate-x-48 translate-y-48" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 border-2 border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6">
              <PenTool size={14} className="text-secondary-400" />
              <span className="text-xs font-bold uppercase tracking-wider">13th Annual Competition</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight font-heading">
              &ldquo;The Role of Harmonized Standards in <span className="text-secondary-400">Reducing Technical Barriers to Trade</span>&rdquo;
            </h1>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Open to all Zambian university and college students. Win cash prizes and recognition from Zambia&apos;s national standards body.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:essays@zabs.org.zm?subject=Essay Competition Submission" className="btn-secondary inline-flex items-center gap-2">
                Submit Your Essay <ChevronRight size={16} />
              </a>
              <a href="#guidelines" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all">
                <BookOpen size={16} /> View Guidelines
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
        badge="Competition Highlights"
        title="A programme with visible recognition."
        description="These images help the page feel more credible by showing real participants, prizes, certificates, and public recognition."
        items={essayCompetitionImages}
        backgroundClassName="bg-grey-50"
      />

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-badge mx-auto w-fit mb-4">
              <Trophy size={12} /> Prize Pool
            </div>
            <h2 className="section-title mb-4">Cash Prizes & Recognition</h2>
            <p className="section-subtitle">
              Top 5 winners receive cash prizes. All shortlisted entrants receive certificates of participation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {PRIZES.map((prize, index) => {
              const Icon = prize.icon;
              return (
                <Reveal key={prize.position} delay={index * 80}>
                  <div className={`${prize.bg} border ${prize.border} rounded-2xl p-6 text-center w-44 flex-shrink-0 hover:shadow-xl transition-all group`}>
                    <div className={`w-14 h-14 bg-gradient-to-br ${prize.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className={`text-sm font-bold ${prize.textColor} mb-1`}>{prize.position} Place</div>
                    <div className={`text-2xl font-black ${prize.textColor}`}>{prize.amount}</div>
                    <div className="text-xs text-grey-500 mt-2">{prize.description}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <p className="text-center text-sm text-grey-400">All amounts in Zambian Kwacha (ZMW)</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-5">
                  <Target size={28} className="text-white" />
                </div>
                <h2 className="text-2xl font-black text-primary-800 mb-4">Competition Theme</h2>
                <p className="text-lg font-semibold text-primary-800 italic mb-4">
                  &ldquo;The Role of Harmonized Standards in Reducing Technical Barriers to Trade&rdquo;
                </p>
                <div className="space-y-3 text-grey-700">
                  <p className="leading-relaxed">
                    Technical Barriers to Trade (TBT) - differing standards, testing procedures, and regulations - are a major obstacle to international commerce.
                    Harmonised standards, developed through bodies such as ISO, IEC, and ARSO, can break down these barriers and facilitate seamless trade.
                  </p>
                  <p className="leading-relaxed">
                    Essays should explore how harmonisation of standards contributes to trade facilitation, regional integration, economic development, and consumer protection,
                    with reference to Zambia, the SADC region, and/or the African Continental Free Trade Area (AfCFTA).
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="bg-white rounded-2xl p-8 border border-grey-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-5">
                  <Users size={28} className="text-secondary-700" />
                </div>
                <h2 className="text-2xl font-black text-grey-900 mb-4">Eligibility</h2>
                <ul className="space-y-3">
                  {ELIGIBILITY.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-grey-600">
                      <CheckCircle size={18} className="text-secondary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="guidelines" className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="section-badge mx-auto w-fit mb-4">
              <FileText size={12} /> Submission Requirements
            </div>
            <h2 className="section-title mb-4">Essay Guidelines</h2>
            <p className="section-subtitle">
              Follow these guidelines to ensure your submission is considered
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {GUIDELINES.map((guideline, index) => {
              const Icon = guideline.icon;
              return (
                <Reveal key={guideline.label} delay={index * 60}>
                  <div className="bg-white rounded-xl p-4 border border-grey-100 hover:shadow-md transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={16} className="text-primary-700" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-primary-700 uppercase tracking-wide">{guideline.label}</div>
                        <div className="text-sm font-semibold text-grey-800">{guideline.value}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="bg-secondary-50 rounded-2xl p-5 border-l-4 border-l-secondary-600">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-secondary-700 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-secondary-800 mb-1">Submission Instructions</p>
                <p className="text-sm text-secondary-700">
                  <strong>Subject line:</strong> &ldquo;13th Essay Competition - [Your Full Name] - [Institution]&rdquo;<br />
                  Attach your essay and a copy of your student identity card as PDF files. <strong className="text-secondary-900">Submissions without proof of enrolment will be disqualified.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="section-badge mx-auto w-fit mb-4">
              <Star size={12} /> Evaluation Process
            </div>
            <h2 className="section-title mb-4">Judging Criteria</h2>
            <p className="section-subtitle">
              Essays are evaluated by a panel of experts based on these criteria
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {JUDGING_CRITERIA.map((criterion, index) => (
              <Reveal key={criterion.criterion} delay={index * 50}>
                <div className="flex items-center justify-between py-3 border-b border-grey-100 hover:bg-grey-50 px-3 rounded-lg transition-colors">
                  <div>
                    <span className="font-semibold text-grey-800">{criterion.criterion}</span>
                    <p className="text-xs text-grey-500 mt-0.5">{criterion.description}</p>
                  </div>
                  <span className="inline-flex rounded-full bg-primary-100 text-primary-800 text-sm font-bold px-3 py-1">
                    {criterion.weight}
                  </span>
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
            <h2 className="section-title mb-4">Competition Timeline</h2>
            <p className="section-subtitle">Key dates for the 13th ZABS Essay Competition</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200 hidden sm:block" />

              <div className="space-y-6">
                {TIMELINE.map((item, i) => {
                  const Icon = item.icon;
                  const status = item.status as TimelineStatus;
                  const statusColors = {
                    completed: "bg-green-100 text-green-700 border-green-200",
                    active: "bg-secondary-100 text-secondary-700 border-secondary-300 animate-pulse",
                    upcoming: "bg-grey-100 text-grey-500 border-grey-200",
                  } as const;
                  const statusIcon = {
                    completed: <CheckCircle size={14} />,
                    active: <Clock size={14} />,
                    upcoming: <Calendar size={14} />,
                  } as const;

                  return (
                    <Reveal key={`${item.date}-${i}`} delay={i * 80}>
                      <div className="relative flex gap-4 sm:gap-6">
                        <div className="hidden sm:flex absolute left-0 w-12 h-12 rounded-full items-center justify-center bg-white shadow-md border-2 z-10" style={{ borderColor: status === "active" ? "#0083d3" : "#e5e7eb" }}>
                          <Icon size={20} className={status === "active" ? "text-secondary-600" : "text-grey-400"} />
                        </div>
                        <div className="sm:ml-16 flex-1">
                          <div className={`bg-white rounded-2xl p-5 border-2 shadow-sm transition-all ${status === "active" ? "border-secondary-300 shadow-lg" : "border-grey-100"}`}>
                            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                              <div className="flex items-center gap-2">
                                <span className={`inline-flex items-center gap-1 rounded-full text-xs font-bold px-2.5 py-1 ${statusColors[status]}`}>
                                  {statusIcon[status]}
                                  {status === "completed" && "Completed"}
                                  {status === "active" && "Currently Open"}
                                  {status === "upcoming" && "Upcoming"}
                                </span>
                                <span className="text-sm font-bold text-primary-700">{item.date}</span>
                              </div>
                            </div>
                            <h3 className="text-lg font-black text-grey-900 mb-1">{item.event}</h3>
                            <p className="text-grey-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="section-badge mx-auto w-fit mb-4">
              <Trophy size={12} /> Previous Editions
            </div>
            <h2 className="section-title mb-4">Past Competition Themes & Winners</h2>
            <p className="section-subtitle">
              Celebrating excellence in academic writing over the years
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PAST_WINNERS.map((winner, index) => (
              <Reveal key={winner.year} delay={index * 70}>
                <div className="bg-grey-50 rounded-2xl p-6 border border-grey-100 hover:shadow-lg transition-all group">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="inline-flex rounded-full bg-primary-100 text-primary-800 text-xs font-bold px-2.5 py-0.5">
                        {winner.year}
                      </span>
                      <div className="flex items-center gap-2 mt-2">
                        <Trophy size={16} className="text-secondary-600" />
                        <span className="text-xs font-semibold text-secondary-700">{winner.place} Place</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-primary-700">{winner.winner}</div>
                      <div className="text-xs text-grey-500">by {winner.student}</div>
                    </div>
                  </div>
                  <h4 className="font-bold text-grey-900 mb-2 italic text-sm">&ldquo;{winner.theme}&rdquo;</h4>
                  <p className="text-grey-600 text-xs leading-relaxed">{winner.abstract}</p>
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
              <HelpCircle size={12} /> Common Questions
            </div>
            <h2 className="section-title mb-4">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about the essay competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {faqItems.map((faq, index) => (
              <Reveal key={faq.q} delay={index * 50}>
                <div className="bg-white rounded-xl p-4 border border-grey-100 hover:shadow-md transition-all">
                  <h4 className="font-bold text-grey-900 text-sm mb-2">{faq.q}</h4>
                  <p className="text-grey-600 text-xs">{faq.a}</p>
                </div>
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
              <Sparkles size={14} className="text-secondary-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Ready to Compete?</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 font-heading">
              Ready to Showcase Your Writing Skills?
            </h2>
            <p className="text-primary-100 text-base md:text-lg mb-8 max-w-lg mx-auto">
              Submit your essay by 31 March 2026 and stand a chance to win up to K6,500. Questions? Contact us at essays@zabs.org.zm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:essays@zabs.org.zm?subject=Essay Competition Submission" className="btn-secondary inline-flex items-center gap-2">
                <FileText size={16} /> Submit Your Essay
              </a>
              <Link href="/contact" className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all inline-flex items-center gap-2">
                <Mail size={16} /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
