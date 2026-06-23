import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight, FlaskConical, CheckCircle, Microscope, TestTube, Award, Users, Clock, FileText, Phone, Mail, MapPin, Star } from "lucide-react";
import { getTestingPageContent } from "@/lib/cms";

export default async function TestingPage() {
  const {
    clientSectors,
    features,
    laboratories,
    qualityAssuranceItems,
    stats,
    testTypes,
  } = await getTestingPageContent();

  return (
    <>
      <PageHeader
        title="Testing Laboratories"
        description="ZABS Laboratories are equipped with modern equipment and highly competent staff to deliver reliable, accredited testing services."
        breadcrumbs={[{ label: "Testing Laboratories" }]}
        badge="Our Labs"
      />

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
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

          {/* Primary Function Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="section-badge mx-auto w-fit mb-4">
              <FlaskConical size={12} /> Our Mandate
            </div>
            <h2 className="section-title mb-5">
              Our Primary Function
            </h2>
            <p className="text-grey-600 leading-relaxed text-lg">
              In accordance with our mandate as stipulated under the Standards Act No. 4 of 2017, ZABS tests raw, semi-processed materials and finished products to assess conformity to the minimum requirements of set standards and in accordance with good manufacturing practices.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;
              const isPrimary = item.color === "primary";
              return (
                <Reveal key={item.title} delay={index * 80}>
                  <div className={`rounded-2xl p-6 text-center transition-all hover:shadow-lg ${
                    isPrimary ? "bg-primary-50 border border-primary-100" : "bg-secondary-50 border border-secondary-100"
                  }`}>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      isPrimary ? "bg-primary-100" : "bg-secondary-100"
                    }`}>
                      <Icon size={24} className={isPrimary ? "text-primary-700" : "text-secondary-700"} />
                    </div>
                    <h3 className="text-lg font-black text-grey-900 mb-2">{item.title}</h3>
                    <p className="text-grey-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Laboratories Grid Section */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-badge mx-auto w-fit mb-4">
              <Microscope size={12} /> Our Facilities
            </div>
            <h2 className="section-title mb-4">
              Our 9 Specialized Laboratories
            </h2>
            <p className="section-subtitle">
              State-of-the-art facilities staffed by expert scientists and technicians
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {laboratories.map((lab, index) => {
              const Icon = lab.icon;
              const isPrimary = lab.color === "primary";
              return (
                <Reveal key={lab.name} delay={index * 70}>
                  <div className="bg-white rounded-2xl p-6 border border-grey-100 hover:shadow-xl transition-all group">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 ${
                        isPrimary ? "bg-primary-50" : "bg-secondary-50"
                      }`}>
                        <Icon size={24} className={isPrimary ? "text-primary-700" : "text-secondary-700"} />
                      </div>
                      <span className={`inline-flex items-center rounded-full text-xs font-bold px-2.5 py-1 ${
                        isPrimary ? "bg-primary-100 text-primary-800" : "bg-secondary-100 text-secondary-800"
                      }`}>
                        {lab.accreditation}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-grey-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {lab.name}
                    </h3>
                    <p className="text-grey-600 text-sm leading-relaxed mb-4">
                      {lab.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {lab.capabilities.map((capability, idx) => (
                        <span key={idx} className="inline-flex items-center rounded-full bg-grey-100 text-grey-600 text-xs px-2 py-1">
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Sectors Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Client Sectors */}
            <div>
              <div className="section-badge mb-4">
                <Users size={12} /> Who We Serve
              </div>
              <h2 className="section-title mb-5">
                Industries We Support
              </h2>
              <p className="text-grey-600 leading-relaxed mb-8">
                Our affordable testing services cater to a diverse clientele across Zambia&apos;s major industry sectors. Our competitive pricing makes quality testing accessible to businesses of all sizes.
              </p>
              
              <div className="space-y-3">
                {clientSectors.map((sector, index) => {
                  const Icon = sector.icon;
                  const isPrimary = sector.color === "primary";
                  return (
                    <Reveal key={sector.title} delay={index * 60}>
                      <div className={`flex items-start gap-4 rounded-xl p-4 border transition-all hover:shadow-md ${
                        isPrimary ? "bg-primary-50 border-primary-100" : "bg-secondary-50 border-secondary-100"
                      }`}>
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isPrimary ? "bg-primary-100" : "bg-secondary-100"
                        }`}>
                          <Icon size={18} className={isPrimary ? "text-primary-700" : "text-secondary-700"} />
                        </div>
                        <div>
                          <h4 className="font-bold text-grey-900 text-sm mb-1">{sector.title}</h4>
                          <p className="text-grey-600 text-xs leading-relaxed">{sector.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Contact & CTA */}
            <div className="space-y-6">
              {/* Main CTA Card */}
              <div className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 rounded-2xl p-8 text-white">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <FlaskConical size={28} className="text-secondary-400" />
                </div>
                <h3 className="text-2xl font-black mb-3">Request Testing Services</h3>
                <p className="text-primary-100 text-sm leading-relaxed mb-6">
                  Contact our testing laboratories directly to request a quotation or submit samples. Our team will guide you through the sample submission and testing process.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-secondary-600 transition-all">
                  Request a Quote <ArrowRight size={14} />
                </Link>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-2xl p-6 border border-grey-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-grey-900 mb-3">Contact Testing Laboratories</h4>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2">
                        <Phone size={14} className="text-secondary-600" />
                        <a href="tel:+260777764423" className="text-grey-700 hover:text-primary-700 transition-colors">+260 777 764 423</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail size={14} className="text-secondary-600" />
                        <a href="mailto:testing@zabs.org.zm" className="text-grey-700 hover:text-primary-700 transition-colors">testing@zabs.org.zm</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin size={14} className="text-secondary-600" />
                        <span className="text-grey-600">Lechwe House, Freedom Way, Lusaka</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Turnaround Info Card */}
              <div className="bg-secondary-50 rounded-2xl p-6 border border-secondary-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-secondary-700" />
                  </div>
                  <div>
                    <h4 className="font-black text-grey-900 mb-2">Fast Turnaround Times</h4>
                    <p className="text-grey-600 text-sm mb-3">
                      Routine tests typically take 5-10 working days. Expedited service available for urgent requirements.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-secondary-700">
                      <CheckCircle size={12} />
                      <span>Results delivered electronically</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Types Section */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="section-badge mx-auto w-fit mb-4">
              <TestTube size={12} /> Testing Capabilities
            </div>
            <h2 className="section-title mb-4">
              Comprehensive Testing Services
            </h2>
            <p className="section-subtitle">
              Our laboratories offer a wide range of testing capabilities across multiple disciplines
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testTypes.map((test, index) => (
              <Reveal key={test.name} delay={index * 50}>
                <div className="bg-white rounded-xl p-4 border border-grey-100 hover:border-primary-200 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <CheckCircle size={14} className="text-primary-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-grey-900 text-sm">{test.name}</h4>
                      <p className="text-grey-500 text-xs">{test.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column */}
            <div>
              <div className="section-badge mb-4">
                <Award size={12} /> Quality Assurance
              </div>
              <h2 className="section-title mb-5">
                Accredited to International Standards
              </h2>
              <p className="text-grey-600 leading-relaxed mb-6">
                ZABS laboratories operate under a rigorous quality management system that complies with ISO/IEC 17025, the international standard for testing and calibration laboratories.
              </p>
              
              <div className="space-y-3">
                {qualityAssuranceItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-secondary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-grey-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Accreditation Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-2xl p-6 text-center border border-primary-100">
                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award size={28} className="text-white" />
                </div>
                <div className="text-lg font-black text-primary-800">SADCAS</div>
                <div className="text-xs text-grey-600 mt-1">Accredited Laboratory</div>
              </div>
              <div className="bg-secondary-50 rounded-2xl p-6 text-center border border-secondary-100">
                <div className="w-16 h-16 bg-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FileText size={28} className="text-white" />
                </div>
                <div className="text-lg font-black text-secondary-800">ISO/IEC 17025</div>
                <div className="text-xs text-grey-600 mt-1">International Standard</div>
              </div>
              <div className="bg-grey-50 rounded-2xl p-6 text-center border border-grey-200 col-span-2">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star size={16} className="text-secondary-600 fill-secondary-600" />
                  <Star size={16} className="text-secondary-600 fill-secondary-600" />
                  <Star size={16} className="text-secondary-600 fill-secondary-600" />
                  <Star size={16} className="text-secondary-600 fill-secondary-600" />
                  <Star size={16} className="text-secondary-600 fill-secondary-600" />
                </div>
                <p className="text-sm font-semibold text-grey-800">Internationally Recognized Results</p>
                <p className="text-xs text-grey-500 mt-1">Accepted by regulators worldwide</p>
              </div>
            </div>
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
              <FlaskConical size={14} className="text-secondary-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Submit Your Samples</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 font-heading">
              Ready for Reliable Testing?
            </h2>
            <p className="text-primary-100 text-base md:text-lg mb-8 max-w-lg mx-auto">
              Our laboratories offer fast turnaround times and competitive pricing for all testing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary group">
                Contact Testing Labs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all inline-flex items-center gap-2">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
