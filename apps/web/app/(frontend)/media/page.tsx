import PageHeader from "@/components/ui/PageHeader";
import ImageShowcaseSection from "@/components/ui/ImageShowcaseSection";
import Reveal from "@/components/ui/Reveal";
import { Camera, CheckCircle, FileText, Image as ImageIcon, PlayCircle, Radio } from "lucide-react";
import { getMediaPageContent, getSiteSettings } from "@/lib/cms";
import { mediaShowcaseImages, pageHeaderImages } from "@/lib/content/site-images";

const mediaIconMap = {
  camera: Camera,
  fileText: FileText,
  image: ImageIcon,
  playCircle: PlayCircle,
};

export default async function MediaPage() {
  const [mediaPageContent, siteSettings] = await Promise.all([
    getMediaPageContent(),
    getSiteSettings(),
  ]);
  const activeSocialLinks = siteSettings.socialLinks.filter((social) => social.isActive !== false);
  const FeaturedIcon = mediaIconMap[mediaPageContent.featuredMedia.icon as keyof typeof mediaIconMap];

  return (
    <>
      <PageHeader
        title={mediaPageContent.header.title}
        description={mediaPageContent.header.description}
        breadcrumbs={mediaPageContent.header.breadcrumbs}
        badge={mediaPageContent.header.badge}
        backgroundImageSrc={pageHeaderImages.media.src}
        backgroundImageAlt={pageHeaderImages.media.alt}
        backgroundImagePosition={pageHeaderImages.media.position}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
            <div className="rounded-[1.9rem] border border-primary-200 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-8 text-white shadow-[0_32px_80px_-42px_rgba(0,131,211,0.55)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12">
                <FeaturedIcon size={24} className="text-secondary-300" />
              </div>
              <h2 className="mt-6 font-heading text-3xl font-black">{mediaPageContent.featuredMedia.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-primary-100">{mediaPageContent.featuredMedia.summary}</p>
              <p className="mt-5 text-sm text-white/80">{mediaPageContent.heroNote}</p>
            </div>

            <div className="rounded-[1.75rem] border border-grey-100 bg-white p-6 shadow-[0_22px_56px_-42px_rgba(16,34,53,0.22)]">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-700">
                <Radio size={14} /> Active Channels
              </div>
              <div className="mt-5 space-y-3">
                {activeSocialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-grey-50 px-4 py-4 transition-all hover:bg-primary-50"
                  >
                    <div>
                      <div className="font-semibold text-grey-900">{social.name}</div>
                      <div className="text-xs text-grey-500">{social.handle || social.href}</div>
                    </div>
                    <div className="flex h-10 min-w-10 items-center justify-center rounded-xl bg-primary-50 px-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary-700">
                      {social.platform || "link"}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageShowcaseSection
        badge="Photo Library"
        title="Real media assets for campaigns, partnerships, and public updates."
        description="These photographs are stronger than placeholders because they show actual ZABS activity across events, collaboration, and official engagements."
        items={mediaShowcaseImages}
        backgroundClassName="bg-grey-50"
      />

      <section className="section-padding bg-grey-50">
        <div className="container-custom">
          <div className="mb-10 max-w-3xl">
            <div className="section-badge mb-4">
              <Camera size={12} /> Media Library
            </div>
            <h2 className="section-title mb-4">Media entries shaped for CMS publishing and future sync review.</h2>
            <p className="text-grey-600 leading-relaxed">
              Each record carries media type, source metadata, and publishing details so the team can later choose between manual posting and moderated sync workflows.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {mediaPageContent.mediaItems.map((item, index) => {
              const Icon = mediaIconMap[item.icon as keyof typeof mediaIconMap];
              return (
                <Reveal key={item.title} delay={index * 80}>
                  <div className="rounded-[1.6rem] border border-grey-100 bg-white p-6 shadow-[0_22px_56px_-42px_rgba(16,34,53,0.22)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                      <Icon size={20} />
                    </div>
                    <div className="mt-4 inline-flex rounded-full bg-secondary-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-secondary-800">
                      {item.mediaType}
                    </div>
                    <h3 className="mt-4 text-xl font-black text-grey-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-grey-500">{item.publishedAt}</p>
                    <p className="mt-4 text-sm leading-relaxed text-grey-600">{item.summary}</p>
                    <div className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">
                      Source: {item.sourcePlatform} / {item.sourceType}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-primary-100 bg-white p-6">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-700">Publishing Workflow</div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {mediaPageContent.workflowSteps.map((step) => (
                <div key={step} className="flex items-start gap-3 rounded-2xl bg-grey-50 px-4 py-4">
                  <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-secondary-600" />
                  <span className="text-sm text-grey-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
