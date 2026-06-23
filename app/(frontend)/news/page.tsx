import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, Award, CheckCircle, Megaphone, Newspaper, Trophy, Users } from "lucide-react";
import { getNewsPageContent, getSiteSettings } from "@/lib/cms";

const newsIconMap = {
  award: Award,
  megaphone: Megaphone,
  newspaper: Newspaper,
  trophy: Trophy,
  users: Users,
};

export default async function NewsPage() {
  const [newsPageContent, siteSettings] = await Promise.all([
    getNewsPageContent(),
    getSiteSettings(),
  ]);
  const activeSocialLinks = siteSettings.socialLinks.filter((social) => social.isActive !== false);
  const FeaturedIcon = newsIconMap[newsPageContent.featuredStory.icon as keyof typeof newsIconMap];

  return (
    <>
      <PageHeader
        title={newsPageContent.header.title}
        description={newsPageContent.header.description}
        breadcrumbs={newsPageContent.header.breadcrumbs}
        badge={newsPageContent.header.badge}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
            <div className="rounded-[1.9rem] border border-primary-200 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-8 text-white shadow-[0_32px_80px_-42px_rgba(0,131,211,0.55)]">
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  {newsPageContent.featuredStory.category}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12">
                  <FeaturedIcon size={22} className="text-secondary-300" />
                </div>
              </div>

              <h2 className="mt-6 max-w-2xl font-heading text-3xl font-black leading-tight">
                {newsPageContent.featuredStory.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-primary-100">
                {newsPageContent.featuredStory.summary}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {newsPageContent.featuredStory.excerpt}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-primary-100 bg-primary-50/70 p-6">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-700">Connected Channels</div>
              <p className="mt-3 text-sm leading-relaxed text-grey-600">
                These links already come from global site settings. When admins update official social accounts in Payload later, this section updates automatically.
              </p>
              <div className="mt-5 space-y-3">
                {activeSocialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white bg-white px-4 py-3 text-sm text-grey-700 transition-all hover:border-primary-200 hover:text-primary-700"
                  >
                    <div>
                      <div className="font-semibold">{social.name}</div>
                      <div className="text-xs text-grey-500">{social.handle || social.href}</div>
                    </div>
                    <ArrowRight size={14} />
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
              <Newspaper size={12} /> Published Items
            </div>
            <h2 className="section-title mb-4">Website-ready news records for future CMS publishing.</h2>
            <p className="text-grey-600 leading-relaxed">
              These are structured the way a Payload-backed news collection can be surfaced later, with categories, publishing dates, source metadata, and website-friendly excerpts.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {newsPageContent.articles.map((article, index) => {
              const Icon = newsIconMap[article.icon as keyof typeof newsIconMap];
              return (
                <Reveal key={article.title} delay={index * 80}>
                  <div className="rounded-[1.6rem] border border-grey-100 bg-white p-6 shadow-[0_22px_56px_-42px_rgba(16,34,53,0.22)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                      <Icon size={20} />
                    </div>
                    <div className="mt-5 inline-flex rounded-full bg-primary-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-800">
                      {article.category}
                    </div>
                    <h3 className="mt-4 text-xl font-black text-grey-900">{article.title}</h3>
                    <p className="mt-2 text-sm text-grey-500">{article.publishedAt}</p>
                    <p className="mt-4 text-sm leading-relaxed text-grey-600">{article.summary}</p>
                    <p className="mt-3 text-xs leading-relaxed text-grey-500">{article.excerpt}</p>
                    <div className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">
                      Source: {article.sourcePlatform} / {article.sourceType}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-primary-100 bg-white p-6">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-700">What Is Already Implemented</div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {newsPageContent.newsroomCapabilities.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-grey-50 px-4 py-4">
                  <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-secondary-600" />
                  <span className="text-sm text-grey-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
