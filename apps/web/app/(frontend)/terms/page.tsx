import PageHeader from "@/components/ui/PageHeader";
import { AlertCircle, ArrowRight, CheckCircle, FileText, Mail, MapPin, Phone, XCircle } from "lucide-react";
import Link from "next/link";
import { getTermsPageContent } from "@/lib/cms";

export default async function TermsPage() {
  const { lastUpdated, quickLinks, stats, termsSections } = await getTermsPageContent();

  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using the ZABS website and services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
        badge="Legal"
      />

      <section className="section-padding bg-grey-50">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-grey-100 shadow-sm p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText size={22} className="text-secondary-700" />
              </div>
              <div>
                <p className="text-sm text-grey-600">
                  <strong className="text-secondary-800">Last Updated:</strong> {lastUpdated}
                </p>
                <p className="text-sm text-grey-600 mt-1">
                  These terms govern your use of the ZABS website and related services.
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

          <div className="bg-amber-50 rounded-2xl p-5 border-l-4 border-l-amber-500 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-800 mb-1">Important Legal Notice</p>
                <p className="text-sm text-amber-700">
                  These Terms and Conditions constitute a legally binding agreement between you and the Zambia Bureau of Standards.
                  Please read them carefully before using our website or services.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {termsSections.map((section) => {
              const Icon = section.icon;
              const isWarning = section.type === "warning";
              const bgColor = isWarning ? "bg-amber-50" : "bg-white";
              const iconBg = isWarning ? "bg-amber-100" : "bg-primary-50";
              const iconColor = isWarning ? "text-amber-700" : "text-primary-700";

              return (
                <div key={section.title} className={`${bgColor} rounded-2xl border border-grey-100 shadow-sm overflow-hidden hover:shadow-md transition-all`}>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon size={22} className={iconColor} />
                      </div>
                      <div className="flex-1">
                        <h2 className={`text-xl font-black mb-3 ${isWarning ? "text-amber-800" : "text-primary-800"}`}>
                          {section.title}
                        </h2>

                        <p className="text-grey-600 leading-relaxed mb-3">{section.content}</p>

                        {section.list && (
                          <div className="mb-4">
                            <p className="text-sm font-semibold text-grey-700 mb-2">You agree not to:</p>
                            <ul className="space-y-2">
                              {section.list.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                  <XCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-grey-600 text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {section.contactInfo && (
                          <div className="mt-4 p-4 bg-primary-50 rounded-xl border border-primary-100">
                            <div className="space-y-2">
                              <p className="flex items-start gap-3 text-sm text-grey-700">
                                <MapPin size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                                <span>{section.contactInfo.address}</span>
                              </p>
                              <p className="flex items-center gap-3 text-sm text-grey-700">
                                <Mail size={16} className="text-primary-600" />
                                <a href={`mailto:${section.contactInfo.email}`} className="hover:text-primary-700 transition-colors">
                                  {section.contactInfo.email}
                                </a>
                              </p>
                              <p className="flex items-center gap-3 text-sm text-grey-700">
                                <Phone size={16} className="text-primary-600" />
                                <a href={`tel:${section.contactInfo.phone}`} className="hover:text-primary-700 transition-colors">
                                  {section.contactInfo.phone}
                                </a>
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-grey-900">Related Information</h2>
              <Link href="/privacy-policy" className="text-sm text-primary-700 hover:text-primary-800 font-medium">
                View Privacy Policy <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link key={link.title} href={link.href} className="bg-white rounded-2xl p-4 border border-grey-100 hover:shadow-md transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={16} className="text-primary-700" />
                      </div>
                      <div>
                        <p className="font-semibold text-grey-800 group-hover:text-primary-700 transition-colors">
                          {link.title}
                        </p>
                        <p className="text-xs text-grey-500">Read more -&gt;</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-10 bg-primary-600 rounded-2xl p-6 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <CheckCircle size={24} className="text-secondary-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">By using this website, you acknowledge that</h3>
                  <p className="text-primary-100 text-sm">
                    You have read, understood, and agree to be bound by these Terms and Conditions.
                  </p>
                </div>
              </div>
              <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-all">
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-grey-400">&copy; {new Date().getFullYear()} Zambia Bureau of Standards. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
}
