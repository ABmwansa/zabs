import PageHeader from "@/components/ui/PageHeader";
import { AlertTriangle, ArrowRight, CheckCircle, Mail, MapPin, Phone, Shield } from "lucide-react";
import Link from "next/link";
import { getPrivacyPolicyPageContent } from "@/lib/cms";

export default async function PrivacyPolicyPage() {
  const { keyPrinciples, lastUpdated, policySections, stats } = await getPrivacyPolicyPageContent();

  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How ZABS collects, uses, and protects your personal information"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        badge="Legal"
      />

      <section className="section-padding bg-grey-50">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-grey-100 shadow-sm p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield size={22} className="text-primary-700" />
              </div>
              <div>
                <p className="text-sm text-grey-600">
                  <strong className="text-primary-800">Last Updated:</strong> {lastUpdated}
                </p>
                <p className="text-sm text-grey-600 mt-1">
                  The Zambia Bureau of Standards (ZABS) is committed to protecting your privacy and handling your personal information responsibly.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white rounded-2xl p-5 text-center border border-grey-100 hover:border-primary-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-primary-700" />
                  </div>
                  <div className="text-2xl font-black text-primary-700 font-heading">{stat.value}</div>
                  <div className="text-sm font-semibold text-grey-800 mt-1">{stat.label}</div>
                  <div className="text-xs text-grey-500 mt-0.5">{stat.sub}</div>
                </div>
              );
            })}
          </div>

          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="section-badge mx-auto w-fit mb-4">
                <Shield size={12} /> Our Commitment
              </div>
              <h2 className="section-title mb-4">Our Data Protection Principles</h2>
              <p className="section-subtitle">
                We are committed to protecting your personal information and respecting your privacy
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {keyPrinciples.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div key={principle.title} className="bg-white rounded-2xl p-5 text-center border border-grey-100 hover:shadow-md transition-all">
                    <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon size={24} className="text-primary-700" />
                    </div>
                    <h3 className="font-bold text-grey-900 mb-1">{principle.title}</h3>
                    <p className="text-grey-500 text-xs">{principle.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            {policySections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="bg-white rounded-2xl border border-grey-100 shadow-sm overflow-hidden hover:shadow-md transition-all">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={22} className="text-primary-700" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-black text-primary-800 mb-3">{section.title}</h2>
                        <p className="text-grey-600 leading-relaxed mb-3">{section.content}</p>

                        {section.list && (
                          <ul className="space-y-2 mb-4">
                            {section.list.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <CheckCircle size={16} className="text-secondary-600 mt-0.5 flex-shrink-0" />
                                <span className="text-grey-600 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {section.note && (
                          <div className="mt-3 p-4 bg-primary-50 rounded-xl border border-primary-100">
                            <p className="text-sm text-primary-800">
                              <strong className="font-semibold">Note:</strong> {section.note}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                  <Mail size={28} className="text-secondary-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-black mb-1">Contact Our Data Protection Officer</h2>
                  <p className="text-primary-100 text-sm">
                    For questions, concerns, or requests relating to your personal information
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="flex items-center gap-3 text-primary-100">
                    <Mail size={16} className="text-secondary-400" />
                    <a href="mailto:dpo@zabs.org.zm" className="hover:text-white transition-colors">dpo@zabs.org.zm</a>
                  </p>
                  <p className="flex items-center gap-3 text-primary-100">
                    <Phone size={16} className="text-secondary-400" />
                    <a href="tel:+260211231987" className="hover:text-white transition-colors">+260 211 231 987</a>
                  </p>
                  <p className="flex items-start gap-3 text-primary-100">
                    <MapPin size={16} className="text-secondary-400 mt-0.5" />
                    <span>Lechwe House, Freedom Way, Lusaka, Zambia</span>
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={18} className="text-secondary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold mb-1">Data Protection Rights</p>
                      <p className="text-xs text-primary-100">
                        You have the right to access, correct, or delete your personal information.
                        Contact our DPO to exercise these rights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-grey-500">
              This Privacy Policy is governed by the laws of the Republic of Zambia and the Standards Act No. 4 of 2017.
            </p>
            <Link href="/terms" className="inline-flex items-center gap-2 text-sm text-primary-700 hover:text-primary-800 mt-3 font-medium">
              Read our Terms & Conditions <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
