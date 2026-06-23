import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { Award, Calendar, CheckCircle, GraduationCap, MapPin, Trophy } from "lucide-react";
import { getEventsPageContent, getSiteSettings } from "@/lib/cms";

const eventIconMap = {
  award: Award,
  calendar: Calendar,
  graduationCap: GraduationCap,
  trophy: Trophy,
};

const eventStatusLabel = {
  upcoming: "Upcoming",
  "registration-open": "Registration Open",
  ongoing: "Ongoing",
  completed: "Completed",
} as const;

export default async function EventsPage() {
  const [eventsPageContent, siteSettings] = await Promise.all([
    getEventsPageContent(),
    getSiteSettings(),
  ]);
  const activeSocialLinks = siteSettings.socialLinks.filter((social) => social.isActive !== false);
  const FeaturedIcon = eventIconMap[eventsPageContent.featuredEvent.icon as keyof typeof eventIconMap];

  return (
    <>
      <PageHeader
        title={eventsPageContent.header.title}
        description={eventsPageContent.header.description}
        breadcrumbs={eventsPageContent.header.breadcrumbs}
        badge={eventsPageContent.header.badge}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
            <div className="rounded-[1.9rem] border border-primary-200 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-8 text-white shadow-[0_32px_80px_-42px_rgba(0,131,211,0.55)]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12">
                  <FeaturedIcon size={24} className="text-secondary-300" />
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                  {eventStatusLabel[eventsPageContent.featuredEvent.status]}
                </div>
              </div>

              <h2 className="mt-6 font-heading text-3xl font-black">{eventsPageContent.featuredEvent.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-primary-100">{eventsPageContent.featuredEvent.summary}</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/86">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-secondary-300" />
                  {eventsPageContent.featuredEvent.startDate}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-secondary-300" />
                  {eventsPageContent.featuredEvent.location}
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-primary-100 bg-primary-50/70 p-6">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-700">Social Link Dependency</div>
              <p className="mt-3 text-sm leading-relaxed text-grey-600">
                When the official social links change in site settings, related event promotion links and channel references can update automatically across the website.
              </p>
              <div className="mt-5 space-y-3">
                {activeSocialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-white bg-white px-4 py-4 transition-all hover:border-primary-200"
                  >
                    <div className="font-semibold text-grey-900">{social.name}</div>
                    <div className="mt-1 text-xs text-grey-500">{social.handle || social.href}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="mb-10 max-w-3xl">
            <div className="section-badge mb-4">
              <Calendar size={12} /> Scheduled Items
            </div>
            <h2 className="section-title mb-4">Events structured for CMS records first, sync second.</h2>
            <p className="text-grey-600 leading-relaxed">
              This lets ZABS publish event information immediately and later decide which social or channel updates should flow into the website through moderation.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {eventsPageContent.events.map((event, index) => {
              const Icon = eventIconMap[event.icon as keyof typeof eventIconMap];
              return (
                <Reveal key={event.title} delay={index * 80}>
                  <div className="rounded-[1.6rem] border border-grey-100 bg-white p-6 shadow-[0_22px_56px_-42px_rgba(16,34,53,0.22)]">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <Icon size={20} />
                      </div>
                      <div className="rounded-full bg-secondary-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-secondary-800">
                        {eventStatusLabel[event.status]}
                      </div>
                    </div>
                    <h3 className="mt-5 text-xl font-black text-grey-900">{event.title}</h3>
                    <div className="mt-3 space-y-2 text-sm text-grey-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-primary-700" />
                        <span>{event.startDate}{event.endDate ? ` - ${event.endDate}` : ""}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-primary-700" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-grey-600">{event.summary}</p>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">
                        {event.sourcePlatform} / {event.sourceType}
                      </div>
                      {event.registrationHref && (
                        <Link href={event.registrationHref} className="text-sm font-semibold text-primary-700 hover:text-primary-800">
                          View Item
                        </Link>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-primary-100 bg-white p-6">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-700">Implementation Notes</div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {eventsPageContent.eventNotes.map((note) => (
                <div key={note} className="flex items-start gap-3 rounded-2xl bg-grey-50 px-4 py-4">
                  <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-secondary-600" />
                  <span className="text-sm text-grey-700">{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
