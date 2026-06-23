"use client";

import { useState } from "react";
import { ArrowRight, Award, BookOpen, Briefcase, Building2, Calendar, CheckCircle, ChevronDown, ChevronUp, Clock, Coffee, GraduationCap, Heart, Mail, MapPin, Phone, ShieldCheck, Smile, Sparkles, Star, Target, Users } from "lucide-react";
import Link from "next/link";

import type { CareersPageContent } from "@/lib/cms";
import PageHeader from "@/components/ui/PageHeader";

type CareersPageClientProps = {
  content: CareersPageContent;
};

const careersIconMap = {
  award: Award,
  bookOpen: BookOpen,
  briefcase: Briefcase,
  building2: Building2,
  clock: Clock,
  graduationCap: GraduationCap,
  heart: Heart,
  shieldCheck: ShieldCheck,
  smile: Smile,
  sparkles: Sparkles,
  star: Star,
  target: Target,
  users: Users,
};

export default function CareersPageClient({ content }: CareersPageClientProps) {
  const { benefits, coreValues, importantNotes, stats, vacancies } = content;
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <>
      <PageHeader
        title="Careers at ZABS"
        subtitle="Join Zambia&apos;s national standards body and make a difference in quality, safety, and trade facilitation"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        badge="Join Our Team"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = careersIconMap[stat.icon as keyof typeof careersIconMap];
              return (
                <div key={stat.label} className="group rounded-2xl border border-grey-100 bg-grey-50 p-5 text-center transition-all hover:border-primary-200 hover:shadow-lg">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 transition-transform group-hover:scale-110">
                    <Icon size={20} className="text-primary-700" />
                  </div>
                  <div className="font-heading text-3xl font-black text-primary-700">{stat.value}</div>
                  <div className="mt-1 text-sm font-semibold text-grey-800">{stat.label}</div>
                  <div className="mt-0.5 text-xs text-grey-500">{stat.sub}</div>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="section-badge mx-auto mb-4 w-fit">
              <Heart size={12} /> Why Join Us
            </div>
            <h2 className="section-title mb-5">Build Your Career at ZABS</h2>
            <p className="text-lg leading-relaxed text-grey-600">
              ZABS is a statutory body established under the Standards Act Cap 416 of the Laws of Zambia. We are committed to building a professional team that drives quality and standards across Zambia. We offer rewarding careers that contribute directly to Zambia&apos;s economic development.
            </p>
          </div>

          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = careersIconMap[benefit.icon as keyof typeof careersIconMap];
              const isPrimary = benefit.color === "primary";
              return (
                <div key={benefit.title} className="group rounded-2xl border border-grey-100 bg-white p-6 transition-all hover:shadow-xl">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-all group-hover:scale-110 ${isPrimary ? "bg-primary-50" : "bg-secondary-50"}`}>
                    <Icon size={24} className={isPrimary ? "text-primary-700" : "text-secondary-700"} />
                  </div>
                  <h3 className="mb-2 text-lg font-black text-grey-900 transition-colors group-hover:text-primary-700">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-grey-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl bg-grey-50 p-8">
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-2xl font-black text-grey-900">Our Core Values</h3>
              <p className="text-grey-500">The principles that guide everything we do</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value) => {
                const Icon = careersIconMap[value.icon as keyof typeof careersIconMap];
                return (
                  <div key={value.value} className="flex items-start gap-3 rounded-xl border border-grey-100 bg-white p-4 transition-all hover:shadow-md">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                      <Icon size={16} className="text-primary-700" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-grey-900">{value.value}</h4>
                      <p className="text-xs text-grey-500">{value.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="section-badge mb-3">
                <Briefcase size={12} /> Open Positions
              </div>
              <h2 className="text-2xl font-black text-grey-900 md:text-3xl">Current Vacancies</h2>
              <p className="mt-1 text-grey-500">
                {vacancies.length} position{vacancies.length !== 1 ? "s" : ""} available
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-secondary-50 px-4 py-2 text-sm text-secondary-700">
              <Clock size={14} /> Closing dates apply
            </div>
          </div>

          <div className="space-y-4">
            {vacancies.map((job) => (
              <div key={job.id} className="overflow-hidden rounded-2xl border border-grey-100 bg-white shadow-sm transition-all hover:shadow-lg">
                <div className="p-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-black text-primary-800">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-grey-600">
                        <span className="flex items-center gap-1">
                          <Briefcase size={14} className="text-secondary-600" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} className="text-secondary-600" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} className="text-secondary-600" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Award size={14} className="text-secondary-600" />
                          {job.experience} experience
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                      <div className="text-left sm:text-right">
                        <div className="text-xs text-grey-400">Closing Date</div>
                        <div className="text-sm font-bold text-red-600">{job.closing}</div>
                      </div>
                      <button
                        onClick={() => setExpanded(expanded === job.id ? null : job.id)}
                        className="flex items-center gap-2 rounded-xl bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-100"
                      >
                        {expanded === job.id ? (
                          <>
                            <ChevronUp size={16} /> Less Details
                          </>
                        ) : (
                          <>
                            <ChevronDown size={16} /> View Details
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {expanded === job.id && (
                    <div className="mt-6 border-t border-grey-100 pt-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="mb-3 flex items-center gap-2 font-bold text-grey-900">
                            <CheckCircle size={16} className="text-secondary-600" />
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((requirement) => (
                              <li key={requirement} className="flex items-start gap-2 text-sm text-grey-600">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                                {requirement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="mb-3 flex items-center gap-2 font-bold text-grey-900">
                            <Target size={16} className="text-secondary-600" />
                            Key Duties
                          </h4>
                          <ul className="space-y-2">
                            {job.duties.map((duty) => (
                              <li key={duty} className="flex items-start gap-2 text-sm text-grey-600">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary-500" />
                                {duty}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col justify-between gap-4 border-t border-grey-100 pt-4 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-grey-600">
                            <Award size={14} className="text-primary-600" />
                            Salary: {job.salary}
                          </span>
                          <span className="flex items-center gap-1 text-grey-600">
                            <Calendar size={14} className="text-primary-600" />
                            Apply by: {job.closing}
                          </span>
                        </div>
                        <a
                          href={`mailto:hr@zabs.org.zm?subject=Application: ${job.title}`}
                          className="btn-primary inline-flex items-center gap-2 py-2.5 text-sm"
                        >
                          <Mail size={16} /> Apply for This Position <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="section-badge mb-4">
                <Mail size={12} /> Application Process
              </div>
              <h2 className="section-title mb-5">How to Apply</h2>
              <p className="mb-6 leading-relaxed text-grey-600">
                Interested candidates should submit a covering letter, curriculum vitae, and certified copies of academic and professional qualifications to the address below.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-4 rounded-xl bg-grey-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                    <Mail size={16} className="text-primary-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-grey-900">Email Applications</p>
                    <a href="mailto:hr@zabs.org.zm" className="text-sm text-primary-700 hover:underline">
                      hr@zabs.org.zm
                    </a>
                    <p className="mt-1 text-xs text-grey-500">Quote the job title in the subject line</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-grey-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                    <MapPin size={16} className="text-primary-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-grey-900">Physical Applications</p>
                    <p className="text-sm text-grey-600">
                      The Director General
                      <br />
                      Zambia Bureau of Standards
                      <br />
                      Lechwe House, Freedom Way
                      <br />
                      P.O. Box 31302, Lusaka, Zambia
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border-l-4 border-l-secondary-600 bg-secondary-50 p-4">
                <div className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 flex-shrink-0 text-secondary-700" />
                  <div>
                    <p className="text-sm font-semibold text-secondary-800">Important Notes</p>
                    <ul className="mt-1 space-y-1 text-xs text-secondary-700">
                      {importantNotes.map((note) => (
                        <li key={note}>- {note}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                    <Heart size={22} className="text-secondary-400" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-black">Application Tips</h3>
                    <ul className="space-y-2 text-sm text-primary-100">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-secondary-400" />
                        Tailor your CV to the specific role
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-secondary-400" />
                        Highlight relevant experience and achievements
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-secondary-400" />
                        Ensure all certifications are certified copies
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-secondary-400" />
                        Submit before the closing date
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-grey-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 flex items-center gap-2 font-bold text-grey-900">
                  <Phone size={16} className="text-primary-700" />
                  Contact HR Department
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <Phone size={14} className="text-secondary-600" />
                    <a href="tel:+260211231987" className="text-grey-700 hover:text-primary-700">
                      +260 211 231 987
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={14} className="text-secondary-600" />
                    <a href="mailto:hr@zabs.org.zm" className="text-grey-700 hover:text-primary-700">
                      hr@zabs.org.zm
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock size={14} className="text-secondary-600" />
                    <span className="text-grey-600">Monday - Friday, 08:00 - 17:00</span>
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-grey-100 bg-grey-50 p-5">
                <div className="flex items-start gap-3">
                  <Coffee size={18} className="mt-0.5 flex-shrink-0 text-secondary-600" />
                  <div>
                    <p className="text-sm font-semibold text-grey-900">Walk-in Applications</p>
                    <p className="mt-1 text-xs text-grey-600">
                      You may also drop off your application at our reception desk during office hours. Please ensure your application is sealed in an envelope clearly marked with the job title.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-white" />
        </div>

        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5">
              <Sparkles size={14} className="text-secondary-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">Join Our Team</span>
            </div>
            <h2 className="mb-5 font-heading text-3xl font-black text-white md:text-4xl lg:text-5xl">Ready to Make an Impact?</h2>
            <p className="mx-auto mb-8 max-w-lg text-base text-primary-100 md:text-lg">
              Take the next step in your career and contribute to Zambia&apos;s quality infrastructure.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="mailto:hr@zabs.org.zm?subject=General Application" className="btn-secondary inline-flex items-center gap-2">
                <Mail size={16} /> Submit General Application
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/20"
              >
                <Phone size={16} /> Contact HR
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
