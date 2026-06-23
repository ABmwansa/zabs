import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import { ArrowRight, CheckCircle, BookOpen, Users, Globe, FileText, Download, Clock, Zap } from "lucide-react";
import { getStandardsDevelopmentPageContent } from "@/lib/cms";

export default async function StandardsDevelopmentPage() {
  const {
    benefits,
    enquiryServices,
    internationalBodies,
    keyStats,
    processSteps,
    technicalCommittees,
  } = await getStandardsDevelopmentPageContent();

  return (
    <>
      <PageHeader
        title="Standards Development"
        description="ZABS facilitates the development of Zambian National Standards (ZS) across all sectors of the economy, providing the technical foundation for quality and safety."
        breadcrumbs={[{ label: "Standards Development" }]}
        badge="National Standards"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Key Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {keyStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-grey-50 rounded-2xl p-5 text-center border border-grey-100 hover:border-primary-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-primary-700" />
                  </div>
                  <div className="text-3xl font-black text-primary-700 font-heading">{stat.value}</div>
                  <div className="text-sm font-semibold text-grey-800 mt-1">{stat.label}</div>
                  <div className="text-xs text-grey-500 mt-0.5">{stat.sub}</div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Main Content */}
            <div>
              <div className="section-badge mb-4">
                <BookOpen size={12} /> What is a Standard?
              </div>
              <h2 className="section-title mb-5">
                Building the Foundation for Quality
              </h2>
              <div className="space-y-4 text-grey-600 leading-relaxed">
                <p>
                  A standard is a document that provides requirements, specifications, guidelines, or characteristics that can be used consistently to ensure that materials, products, processes, and services are fit for their purpose.
                </p>
                <p>
                  Zambian National Standards (ZS) are developed through a consensus-based process involving all relevant stakeholders including industry, consumers, government, and academia.
                </p>
                <p>
                  ZABS participates in the development of regional standards through SADCSTAN and international standards through ISO and IEC, ensuring Zambian interests are represented and local standards align with global best practices.
                </p>
              </div>
            </div>

            {/* Right Column - Enquiry Service */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 border border-primary-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                  <Globe size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-grey-900">Standards Enquiry Service</h3>
                  <p className="text-grey-600 text-sm">Your gateway to standards information</p>
                </div>
              </div>
              <ul className="space-y-3">
                {enquiryServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-secondary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-grey-700 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-badge mx-auto w-fit mb-4">
              <Zap size={12} /> Why Standards Matter
            </div>
            <h2 className="section-title mb-4">
              The Power of Standardization
            </h2>
            <p className="section-subtitle">
              Standards drive quality, safety, and competitiveness across every sector of the economy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              const isPrimary = benefit.color === "primary";
              return (
                <div key={benefit.title} className="bg-white rounded-2xl p-6 text-center border border-grey-100 hover:shadow-xl transition-all group">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all group-hover:scale-110 ${
                    isPrimary ? "bg-primary-50 group-hover:bg-primary-100" : "bg-secondary-50 group-hover:bg-secondary-100"
                  }`}>
                    <Icon size={28} className={isPrimary ? "text-primary-700" : "text-secondary-700"} />
                  </div>
                  <h3 className="text-lg font-black text-grey-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-grey-500 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-badge mx-auto w-fit mb-4">
              <Clock size={12} /> How It Works
            </div>
            <h2 className="section-title mb-4">
              Standards Development Process
            </h2>
            <p className="section-subtitle">
              The development of Zambian National Standards follows a rigorous, consensus-based, multi-stage process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative bg-white rounded-2xl p-6 border border-grey-100 hover:shadow-xl transition-all group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-primary-700 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-sm font-heading">{step.step}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={18} className="text-primary-700" />
                      </div>
                      <h3 className="text-lg font-black text-grey-900 group-hover:text-primary-700 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-grey-600 text-sm leading-relaxed mb-3">
                      {step.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-grey-400">
                      <Clock size={12} />
                      <span>Duration: {step.duration}</span>
                    </div>
                  </div>

                  {/* Connector Line (for larger screens) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-0.5 bg-primary-200" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Process Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-grey-500">
              * Timelines may vary depending on complexity, stakeholder input, and committee schedules
            </p>
          </div>
        </div>
      </section>

      {/* Technical Committees Section */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Committees List */}
            <div>
              <div className="section-badge mb-4">
                <Users size={12} /> Our Experts
              </div>
              <h2 className="section-title mb-5">
                Technical Committees
              </h2>
              <p className="text-grey-600 leading-relaxed mb-6">
                ZABS operates through Technical Committees (TCs) that are responsible for developing standards in their respective sectors. TCs include representatives from industry, government, consumers, and academia.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {technicalCommittees.map((tc) => (
                  <div key={tc.name} className="flex items-center justify-between bg-white rounded-xl p-4 border border-grey-100 hover:border-primary-200 hover:shadow-md transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Users size={14} className="text-primary-700" />
                      </div>
                      <div>
                        <span className="text-grey-800 font-medium text-sm">{tc.name}</span>
                        <div className="text-xs text-grey-400">{tc.sector}</div>
                      </div>
                    </div>
                    <div className="text-xs text-grey-500">
                      {tc.members} members
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Get Involved */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 rounded-2xl p-8 text-white">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Users size={28} className="text-secondary-400" />
                </div>
                <h3 className="text-2xl font-black mb-3">Participate in Standards Development</h3>
                <p className="text-primary-100 text-sm leading-relaxed mb-6">
                  ZABS invites industry experts, consumers, and stakeholders to participate in Technical Committees and contribute to the development of Zambian National Standards.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-secondary-600 transition-all">
                  Get Involved <ArrowRight size={14} />
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-grey-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Download size={22} className="text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-black text-grey-900 mb-2">Buy Standards</h4>
                    <p className="text-grey-600 text-sm mb-4">
                      Access the full catalogue of Zambian National Standards and international standards available for purchase.
                    </p>
                    <Link href="/buy-standards" className="inline-flex items-center gap-2 text-primary-700 text-sm font-semibold hover:gap-3 transition-all">
                      Browse standards catalogue <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-secondary-50 rounded-2xl p-6 border border-secondary-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe size={22} className="text-secondary-700" />
                  </div>
                  <div>
                    <h4 className="font-black text-grey-900 mb-2">International Alignment</h4>
                    <p className="text-grey-600 text-sm">
                      ZABS actively participates in ISO, IEC, ARSO, and SADCSTAN, ensuring Zambian standards align with global best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Participation Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="section-badge mx-auto w-fit mb-4">
              <Globe size={12} /> Global Reach
            </div>
            <h2 className="section-title mb-4">
              International Standards Participation
            </h2>
            <p className="section-subtitle">
              ZABS represents Zambia in regional and international standardization bodies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {internationalBodies.map((org) => (
              <div key={org.name} className="bg-grey-50 rounded-2xl p-6 text-center border border-grey-100 hover:border-primary-200 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <org.icon size={24} className="text-primary-700" />
                </div>
                <div className="text-xl font-black text-primary-700 font-heading">{org.name}</div>
                <div className="text-xs text-grey-500 mt-2">{org.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6">
              <FileText size={14} className="text-secondary-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Need Information?</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 font-heading">
              Need Information on Standards?
            </h2>
            <p className="text-primary-100 text-base md:text-lg mb-8 max-w-lg mx-auto">
              Contact the ZABS Standards Enquiry Service for information on Zambian and international standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary group">
                Contact Enquiry Service <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/buy-standards" className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all inline-flex items-center gap-2">
                Buy Standards
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
