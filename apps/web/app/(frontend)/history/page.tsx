import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, CheckCircle, ChevronRight, Clock, ScrollText, Star, Target } from "lucide-react";
import { getHistoryPageContent } from "@/lib/cms";

export default async function HistoryPage() {
  const {
    decadeCards,
    historicalFacts,
    impactItems,
    legislation,
    quickStats,
    timelineEvents,
  } = await getHistoryPageContent();

  return (
    <>
      <PageHeader
        title="History & Legislation"
        description="ZABS has been at the forefront of quality assurance in Zambia since 1982 - a legacy of standards, service, and national development."
        breadcrumbs={[{ label: "History & Legislation" }]}
        badge="Our Heritage"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="section-badge mb-4">
                <Calendar size={12} /> Our Legacy
              </div>
              <h2 className="section-title mb-5">Four Decades of Quality Excellence</h2>
              <div className="space-y-4 text-grey-600 leading-relaxed">
                <p>
                  The Zambia Bureau of Standards is a statutory body under the Ministry of Commerce Trade and Industry established in 1982 by an Act of Parliament. It implements the Standards Act No. 4 of 2017 of the laws of Zambia which repealed CAP 416 of 1994.
                </p>
                <p>
                  Under CAP 416, ZABS was responsible for the development of standards, enforcement of compulsory standards, testing, certification, and metrology services. The new Standards Act No. 4 of 2017 provides a modernized framework that separates enforcement functions to ZEMA and other relevant agencies.
                </p>
                <p>
                  ZABS&apos; role is focused towards supporting industry to implement standards that enhance the quality of products and services for industry growth and competitiveness in both domestic and international markets. ZABS also acts as a link between local industry and regional and international standardization organizations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {historicalFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.label} className="bg-grey-50 rounded-2xl p-6 text-center border border-grey-100 hover:border-primary-200 hover:shadow-lg transition-all group">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Icon size={20} className="text-primary-700" />
                    </div>
                    <div className="text-3xl font-black text-primary-700 font-heading">{fact.value}</div>
                    <div className="text-sm font-semibold text-grey-800 mt-1">{fact.label}</div>
                    <div className="text-xs text-grey-500 mt-0.5">{fact.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-grey-100">
            {quickStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-secondary-600 font-heading">{stat.value}</div>
                <div className="text-sm font-semibold text-grey-800 mt-1">{stat.label}</div>
                <div className="text-xs text-grey-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-badge mx-auto w-fit mb-4">
              <Clock size={12} /> Our Journey
            </div>
            <h2 className="section-title mb-4">A Legacy of Quality Assurance</h2>
            <p className="section-subtitle">
              Tracing ZABS&apos; evolution from establishment to becoming Zambia&apos;s premier standards body
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-300 to-transparent hidden md:block" />

            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isPrimary = event.color === "primary";
                const isEven = index % 2 === 0;

                return (
                  <div key={event.year} className="relative flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="md:w-48 flex-shrink-0">
                      <div className={`sticky top-24 flex items-center gap-3 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${isPrimary ? "bg-primary-600" : "bg-secondary-600"}`}>
                          <Icon size={28} className="text-white" />
                        </div>
                        <div className="text-2xl font-black font-heading text-grey-800">{event.year}</div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className={`bg-white rounded-2xl p-6 border-l-4 shadow-sm hover:shadow-xl transition-all ${isPrimary ? "border-l-primary-600" : "border-l-secondary-500"}`}>
                        <h3 className="text-xl font-black text-grey-900 mb-2">{event.title}</h3>
                        <p className="text-grey-600 leading-relaxed">{event.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="section-badge mx-auto w-fit mb-4">
                <ScrollText size={12} /> Legal Framework
              </div>
              <h2 className="section-title mb-4">Governing Legislation</h2>
              <p className="text-grey-500">
                The legal framework governing ZABS and related quality assurance activities in Zambia
              </p>
            </div>

            <div className="space-y-4">
              {legislation.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group bg-white rounded-2xl border border-grey-200 hover:border-primary-200 hover:shadow-lg transition-all overflow-hidden">
                    <div className="flex flex-col md:flex-row items-start gap-5 p-6">
                      <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={24} className="text-primary-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="inline-flex items-center rounded-full bg-primary-100 text-primary-800 text-xs font-bold px-2.5 py-0.5">
                            {item.type}
                          </span>
                          <span className="text-xs text-grey-400">{item.year}</span>
                        </div>
                        <h3 className="text-lg font-black text-grey-900 mb-2 group-hover:text-primary-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-grey-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <ChevronRight size={20} className="text-grey-300 group-hover:text-primary-600 transition-colors" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-grey-50 rounded-2xl p-6 border border-grey-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen size={18} className="text-secondary-700" />
                </div>
                <div>
                  <h4 className="font-bold text-grey-900 mb-1">Access Official Documentation</h4>
                  <p className="text-grey-600 text-sm mb-3">
                    Full copies of the Standards Act No. 4 of 2017 and related legislation are available for reference at ZABS head office.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:gap-3 transition-all">
                    Request Document <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-badge mb-4">
                <Target size={12} /> Our Impact
              </div>
              <h2 className="section-title mb-5">40+ Years of Transforming Zambian Industry</h2>
              <p className="text-grey-600 leading-relaxed mb-6">
                Since 1982, ZABS has been instrumental in shaping Zambia&apos;s quality infrastructure, helping businesses compete locally and globally through standardized practices and certification.
              </p>

              <div className="space-y-3 mb-8">
                {impactItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-secondary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-grey-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-primary">
                Learn More About ZABS <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {decadeCards.map((item) => (
                <div key={item.decade} className="bg-white rounded-2xl p-4 border border-grey-100 hover:border-primary-200 hover:shadow-md transition-all text-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <item.icon size={16} className="text-primary-700" />
                  </div>
                  <div className="text-sm font-black text-primary-700 font-heading">{item.decade}</div>
                  <div className="text-xs text-grey-600 mt-1">{item.achievement}</div>
                </div>
              ))}
            </div>
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
              <span className="text-xs font-bold text-white uppercase tracking-wider">Building on a Legacy</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 font-heading">
              Continuing Our Commitment to Quality
            </h2>
            <p className="text-primary-100 text-base md:text-lg mb-8 max-w-lg mx-auto">
              ZABS continues to evolve, adapting to global standards and Zambian industry needs for a prosperous future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="btn-secondary group">
                About ZABS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/standards-development" className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all inline-flex items-center gap-2">
                View Our Standards
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
