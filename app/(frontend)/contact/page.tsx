import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { getContactPageContent } from "@/lib/cms";
import {
  ArrowRight,
  Award,
  Beaker,
  BookOpen,
  Building2,
  ChevronRight,
  Clock,
  Facebook,
  Globe,
  Headphones,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Twitter,
  Users,
  Youtube,
} from "lucide-react";
import { Clock3 } from "lucide-react";

const contactIconMap = {
  award: Award,
  beaker: Beaker,
  bookOpen: BookOpen,
  building2: Building2,
  clock3: Clock3,
  headphones: Headphones,
  users: Users,
};

const socialIconMap = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
};

export default async function ContactPage() {
  const contactPageContent = await getContactPageContent();

  return (
    <>
      <PageHeader
        title={contactPageContent.header.title}
        subtitle={contactPageContent.header.subtitle}
        breadcrumbs={contactPageContent.header.breadcrumbs}
        badge={contactPageContent.header.badge}
      />

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {contactPageContent.stats.map((stat) => {
              const Icon = contactIconMap[stat.icon as keyof typeof contactIconMap];
              return (
                <div key={stat.label} className="bg-white rounded-2xl p-5 text-center border border-grey-100 hover:border-primary-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-primary-700" />
                  </div>
                  <div className="text-2xl font-black text-primary-700 font-heading">{stat.value}</div>
                  <div className="text-sm font-semibold text-grey-800 mt-1">{stat.label}</div>
                  {stat.sub && <div className="text-xs text-grey-500 mt-0.5">{stat.sub}</div>}
                </div>
              );
            })}
          </div>

          <div className="mb-14">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="section-badge mx-auto w-fit mb-4">
                <Users size={12} /> {contactPageContent.departmentsSection.badge}
              </div>
              <h2 className="section-title mb-4">{contactPageContent.departmentsSection.title}</h2>
              <p className="section-subtitle">{contactPageContent.departmentsSection.description}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactPageContent.departments.map((department) => {
                const Icon = contactIconMap[department.icon as keyof typeof contactIconMap];
                const isPrimary = department.color === "primary";
                return (
                  <div key={department.name} className={`bg-white rounded-2xl p-6 border-2 transition-all hover:shadow-xl ${
                    isPrimary ? "border-primary-100 hover:border-primary-300" : "border-secondary-100 hover:border-secondary-300"
                  }`}>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                      isPrimary ? "bg-primary-50" : "bg-secondary-50"
                    }`}>
                      <Icon size={24} className={isPrimary ? "text-primary-700" : "text-secondary-700"} />
                    </div>
                    <h3 className="text-xl font-black text-grey-900 mb-2">{department.name}</h3>
                    <p className="text-grey-600 text-sm leading-relaxed mb-4">{department.description}</p>
                    <div className="space-y-2 text-sm">
                      <a href={department.phoneHref} className="flex items-center gap-2 text-grey-700 hover:text-primary-700 transition-colors">
                        <Phone size={14} className={isPrimary ? "text-primary-600" : "text-secondary-600"} />
                        {department.phone}
                      </a>
                      <a href={department.emailHref} className="flex items-center gap-2 text-grey-700 hover:text-primary-700 transition-colors">
                        <Mail size={14} className={isPrimary ? "text-primary-600" : "text-secondary-600"} />
                        {department.email}
                      </a>
                      <div className="flex items-center gap-2 text-grey-500 text-xs pt-2 border-t border-grey-100">
                        <Clock size={12} />
                        {department.hours}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-14">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="section-badge mx-auto w-fit mb-4">
                <Building2 size={12} /> {contactPageContent.officesSection.badge}
              </div>
              <h2 className="section-title mb-4">{contactPageContent.officesSection.title}</h2>
              <p className="section-subtitle">{contactPageContent.officesSection.description}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-4">
                {contactPageContent.offices.map((office) => (
                  <div key={office.name} className={`rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${
                    office.primary
                      ? "bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 border-primary-600 text-white"
                      : "bg-white border-grey-100"
                  }`}>
                    {office.primary && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary-500 text-white text-xs font-bold px-2.5 py-0.5 mb-3">
                        <Sparkles size={10} /> Head Office
                      </span>
                    )}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        office.primary ? "bg-white/20" : "bg-primary-50"
                      }`}>
                        <MapPin size={18} className={office.primary ? "text-secondary-400" : "text-primary-700"} />
                      </div>
                      <div>
                        <h3 className={`font-bold mb-1 ${office.primary ? "text-white" : "text-grey-900"}`}>
                          {office.name}
                        </h3>
                      </div>
                    </div>
                    <div className={`space-y-2 text-sm ${office.primary ? "text-primary-100" : "text-grey-600"}`}>
                      <p>{office.address}</p>
                      <p>{office.pobox}</p>
                      <div className="flex items-center gap-2">
                        <Phone size={14} className={office.primary ? "text-secondary-400" : "text-secondary-600"} />
                        <a href={office.phoneHref} className={office.primary ? "hover:text-white" : "hover:text-primary-700"}>
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} className={office.primary ? "text-secondary-400" : "text-secondary-600"} />
                        <a href={office.emailHref} className={office.primary ? "hover:text-white" : "hover:text-primary-700"}>
                          {office.email}
                        </a>
                      </div>
                      <div className={`flex items-center gap-2 pt-2 ${office.primary ? "border-t border-white/10" : "border-t border-grey-100"}`}>
                        <Clock size={14} className={office.primary ? "text-secondary-400" : "text-secondary-600"} />
                        {office.hours}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-grey-100 shadow-sm overflow-hidden">
                  <div className="h-96 w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.968095296454!2d28.28349!3d-15.41422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408bdd5d64b1f7%3A0x5aef68dad7ceaaf!2sLechwe%20House%2C%20Freedom%20Way%2C%20Lusaka%2C%20Zambia!5e0!3m2!1sen!2szm!4v1700000000000!5m2!1sen!2szm"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ZABS Head Office Location"
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="p-4 bg-grey-50 border-t border-grey-100">
                    <p className="text-sm text-grey-600 flex items-center gap-2">
                      <MapPin size={14} className="text-secondary-600" />
                      Lechwe House, Freedom Way, Lusaka, Zambia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="section-badge mb-4">
                <MessageCircle size={12} /> {contactPageContent.formSection.badge}
              </div>
              <h2 className="text-2xl font-black text-grey-900 mb-2">{contactPageContent.formSection.title}</h2>
              <p className="text-grey-500 mb-6">{contactPageContent.formSection.description}</p>

              <form
                action={contactPageContent.formSection.formAction}
                method="post"
                encType="text/plain"
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-grey-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-grey-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John Banda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-grey-700 mb-1">Organisation</label>
                    <input
                      type="text"
                      name="organisation"
                      className="w-full px-4 py-3 border border-grey-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-grey-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-grey-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-grey-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-grey-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+260 97X XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-grey-700 mb-1">Subject *</label>
                  <select
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-grey-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a subject</option>
                    {contactPageContent.formSection.subjects.map((subject) => (
                      <option key={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-grey-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-grey-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send size={16} /> Send Message
                </button>

                <p className="text-xs text-grey-400 text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>

            <div>
              <div className="section-badge mb-4">
                <Globe size={12} /> {contactPageContent.socialSection.badge}
              </div>
              <h2 className="text-2xl font-black text-grey-900 mb-2">{contactPageContent.socialSection.title}</h2>
              <p className="text-grey-500 mb-6">{contactPageContent.socialSection.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {contactPageContent.socials.map((social) => {
                  const Icon = socialIconMap[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 bg-white border border-grey-200 rounded-2xl hover:shadow-lg transition-all group ${social.hoverClass}`}
                    >
                      <div className={`w-10 h-10 ${social.colorClass} rounded-xl flex items-center justify-center text-white transition-all group-hover:scale-110`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-grey-800">{social.name}</div>
                        <div className="text-xs text-grey-500">{social.handle}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="bg-secondary-50 rounded-2xl p-6 border border-secondary-200 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                    <MessageCircle size={20} className="text-secondary-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-800 mb-2">{contactPageContent.faqCard.title}</h3>
                    <p className="text-sm text-secondary-700 mb-4 leading-relaxed">{contactPageContent.faqCard.description}</p>
                    <Link href={contactPageContent.faqCard.cta.href} className="inline-flex items-center gap-2 text-sm font-semibold text-secondary-800 hover:text-secondary-900 transition-all">
                      {contactPageContent.faqCard.cta.label} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-grey-100">
                <h3 className="font-bold text-grey-900 mb-3">Common Questions</h3>
                <ul className="space-y-2">
                  {contactPageContent.faqPreview.map((faq) => (
                    <li key={faq.href}>
                      <Link href={faq.href} className="flex items-center gap-2 text-sm text-grey-600 hover:text-primary-700 transition-colors group">
                        <ChevronRight size={14} className="text-secondary-500 group-hover:translate-x-1 transition-transform" />
                        {faq.question}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                  <Headphones size={28} className="text-secondary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-1">{contactPageContent.emergencySupport.title}</h3>
                  <p className="text-primary-100 text-sm">{contactPageContent.emergencySupport.description}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={contactPageContent.emergencySupport.emailHref} className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-all">
                  <Mail size={16} /> {contactPageContent.emergencySupport.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
