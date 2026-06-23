import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight, GraduationCap, CheckCircle, Award, Clock, BookOpen, Target, Star, Phone, Mail, MapPin, FileText, Trophy } from "lucide-react";
import { Download } from "lucide-react";
import { getTrainingPageContent } from "@/lib/cms";

export default async function TrainingPage() {
  const {
    categoryColors,
    courses,
    stats,
    steps,
    testimonials,
    trainingFormats,
    whyChooseUs,
  } = await getTrainingPageContent();

  return (
    <>
      <PageHeader
        title="Training"
        description="ZABS is the leading provider of Management Systems training in Zambia and the region, offering 18+ ISO training programs."
        breadcrumbs={[{ label: "Training" }]}
        badge="Professional Development"
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

          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="section-badge mx-auto w-fit mb-4">
              <GraduationCap size={12} /> Expert-Led Training
            </div>
            <h2 className="section-title mb-5">
              Professional ISO Training for Industry Excellence
            </h2>
            <p className="text-grey-600 leading-relaxed text-lg">
              Zambia Bureau of Standards (ZABS) is a leading provider of training in Management Systems to industry in Zambia and the region. Our training is conducted by experienced and certified trainers with deep knowledge of ISO standards and Zambian industry.
            </p>
          </div>

          {/* Training Formats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {trainingFormats.map((format, index) => {
              const Icon = format.icon;
              return (
                <Reveal key={format.title} delay={index * 80}>
                  <div key={format.title} className="bg-white rounded-2xl p-6 border border-grey-100 hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-primary-700" />
                    </div>
                    <h3 className="text-xl font-black text-grey-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {format.title}
                    </h3>
                    <p className="text-grey-600 text-sm leading-relaxed mb-4">
                      {format.desc}
                    </p>
                    <div className="space-y-1.5">
                      {format.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-grey-500">
                          <CheckCircle size={12} className="text-secondary-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="section-badge mx-auto w-fit mb-4">
              <BookOpen size={12} /> Course Catalogue
            </div>
            <h2 className="section-title mb-4">
              Training Courses Offered
            </h2>
            <p className="section-subtitle">
              Comprehensive management systems training covering all major ISO standards and industry-specific frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <Reveal key={course.code} delay={i * 60}>
                <div className="bg-white rounded-2xl p-6 border border-grey-100 hover:shadow-xl transition-all group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-primary-700 font-black text-sm">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      {course.popular && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-secondary-100 text-secondary-800 text-xs font-bold px-2 py-0.5">
                          <Star size={10} className="fill-secondary-600" /> Popular
                        </span>
                      )}
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[course.category] || "bg-grey-100 text-grey-600"}`}>
                      {course.category}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-grey-900 mb-1 group-hover:text-primary-700 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-primary-600 text-xs font-semibold mb-2">{course.code}</p>
                  <p className="text-grey-600 text-xs leading-relaxed mb-3">{course.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-3 pt-2 border-t border-grey-100">
                    <div className="flex items-center gap-1 text-xs text-grey-500">
                      <Clock size={10} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-grey-500">
                      <Target size={10} />
                      <span>{course.level}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="section-badge mx-auto w-fit mb-4">
              <Star size={12} /> Success Stories
            </div>
            <h2 className="section-title mb-4">
              What Our Participants Say
            </h2>
            <p className="section-subtitle">
              Join thousands of satisfied professionals who have advanced their careers with ZABS training
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <div className="bg-grey-50 rounded-2xl p-6 border border-grey-100 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-secondary-500 text-secondary-500" />
                    ))}
                  </div>
                  <p className="text-grey-600 text-sm leading-relaxed mb-4 italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-grey-200">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-700 font-black text-sm">
                        {testimonial.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-grey-900">{testimonial.name}</div>
                      <div className="text-xs text-grey-500">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to Enrol Section */}
      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Steps */}
            <div>
              <div className="section-badge mb-4">
                <FileText size={12} /> How to Enrol
              </div>
              <h2 className="section-title mb-5">
                Simple 4-Step Registration Process
              </h2>
              <div className="space-y-4">
                {steps.map((step, index) => {
                  return (
                    <Reveal key={step.step} delay={index * 70}>
                      <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-grey-100 hover:shadow-md transition-all group">
                        <div className="w-12 h-12 bg-primary-600 text-white rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-grey-900 mb-1">{step.title}</h4>
                          <p className="text-grey-600 text-sm leading-relaxed">{step.desc}</p>
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
                  <Award size={28} className="text-secondary-400" />
                </div>
                <h3 className="text-2xl font-black mb-3">Enquire About Training</h3>
                <p className="text-primary-100 text-sm leading-relaxed mb-6">
                  Contact the ZABS Training Department for upcoming workshop dates, custom training programs, and group booking discounts.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-secondary-600 transition-all">
                  Enquire Now <ArrowRight size={14} />
                </Link>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-2xl p-6 border border-grey-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-black text-grey-900 mb-2">Training Department Contact</h4>
                    <div className="space-y-1 text-sm">
                      <p className="flex items-center gap-2">
                        <Phone size={14} className="text-secondary-600" />
                        <a href="tel:+260777764421" className="text-grey-700 hover:text-primary-700">+260 777 764 421</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail size={14} className="text-secondary-600" />
                        <a href="mailto:training@zabs.org.zm" className="text-grey-700 hover:text-primary-700">training@zabs.org.zm</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin size={14} className="text-secondary-600" />
                        <span className="text-grey-600">Lechwe House, Freedom Way, Lusaka</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-secondary-50 rounded-2xl p-5 border border-secondary-200">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-secondary-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-grey-900 mb-1">Trusted by Industry</h4>
                    <p className="text-grey-600 text-xs leading-relaxed">
                      ZABS training is delivered by certified auditors and industry experts with decades of practical experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ZABS Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="section-badge mx-auto w-fit mb-4">
              <Trophy size={12} /> Why Choose Us
            </div>
            <h2 className="section-title mb-4">
              Why Train with ZABS?
            </h2>
            <p className="section-subtitle">
              Zambia&apos;s leading provider of ISO management systems training
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              const isPrimary = item.color === "primary";
              return (
                <Reveal key={item.title} delay={index * 70}>
                  <div className={`rounded-2xl p-6 text-center border transition-all hover:shadow-lg ${
                    isPrimary ? "bg-primary-50 border-primary-100" : "bg-secondary-50 border-secondary-100"
                  }`}>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      isPrimary ? "bg-primary-100" : "bg-secondary-100"
                    }`}>
                      <Icon size={24} className={isPrimary ? "text-primary-700" : "text-secondary-700"} />
                    </div>
                    <h3 className="text-base font-black text-grey-900 mb-2">{item.title}</h3>
                    <p className="text-grey-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
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
              <GraduationCap size={14} className="text-secondary-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Invest in Your Future</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 font-heading">
              Invest in Quality Knowledge
            </h2>
            <p className="text-primary-100 text-base md:text-lg mb-8 max-w-lg mx-auto">
              Enhance your organization&apos;s quality management capabilities with ZABS professional training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary group">
                Register for Training <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/publications" className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all inline-flex items-center gap-2">
                <Download size={16} /> Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
