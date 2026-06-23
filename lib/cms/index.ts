import * as localProvider from "@/lib/cms/providers/local";
import * as payloadRestProvider from "@/lib/cms/providers/payload-rest";

// Server-side CMS facade.
// `CMS_PROVIDER=local` keeps the current site running from in-repo content.
// Once Payload dependencies are installed, this module is the single swap point
// for introducing a real database-backed provider.

const shouldUseRemoteProvider = process.env.ENABLE_PUBLIC_CMS_LIVE === "true";
const serverProvider = shouldUseRemoteProvider ? payloadRestProvider : localProvider;

export const getSiteSettings = serverProvider.getSiteSettings;
export const getMainNavigation = serverProvider.getMainNavigation;
export const getSiteChrome = serverProvider.getSiteChrome;
export const getHomePageContent = serverProvider.getHomePageContent;
export const getAboutPageContent = serverProvider.getAboutPageContent;
export const getBuyStandardsPageContent = serverProvider.getBuyStandardsPageContent;
export const getCareersPageContent = serverProvider.getCareersPageContent;
export const getCertificationPageContent = serverProvider.getCertificationPageContent;
export const getContactPageContent = serverProvider.getContactPageContent;
export const getEssayCompetitionPageContent = serverProvider.getEssayCompetitionPageContent;
export const getFaqPageContent = serverProvider.getFaqPageContent;
export const getHistoryPageContent = serverProvider.getHistoryPageContent;
export const getEventsPageContent = serverProvider.getEventsPageContent;
export const getMediaPageContent = serverProvider.getMediaPageContent;
export const getNewsPageContent = serverProvider.getNewsPageContent;
export const getPrivacyPolicyPageContent = serverProvider.getPrivacyPolicyPageContent;
export const getPublicationsPageContent = serverProvider.getPublicationsPageContent;
export const getQualityAwardsPageContent = serverProvider.getQualityAwardsPageContent;
export const getStandardsDevelopmentPageContent = serverProvider.getStandardsDevelopmentPageContent;
export const getTestingPageContent = serverProvider.getTestingPageContent;
export const getTermsPageContent = serverProvider.getTermsPageContent;
export const getTrainingPageContent = serverProvider.getTrainingPageContent;

// Export CMS-facing content types from the facade so route/components depend on
// stable shapes instead of importing local content modules directly.
export type AboutPageContent = Awaited<ReturnType<typeof getAboutPageContent>>;
export type BuyStandardsPageContent = Awaited<ReturnType<typeof getBuyStandardsPageContent>>;
export type CareersPageContent = Awaited<ReturnType<typeof getCareersPageContent>>;
export type CertificationPageContent = Awaited<ReturnType<typeof getCertificationPageContent>>;
export type ContactPageContent = Awaited<ReturnType<typeof getContactPageContent>>;
export type EssayCompetitionPageContent = Awaited<ReturnType<typeof getEssayCompetitionPageContent>>;
export type EventsPageContent = Awaited<ReturnType<typeof getEventsPageContent>>;
export type FaqPageContent = Awaited<ReturnType<typeof getFaqPageContent>>;
export type HistoryPageContent = Awaited<ReturnType<typeof getHistoryPageContent>>;
export type HomePageContent = Awaited<ReturnType<typeof getHomePageContent>>;
export type MediaPageContent = Awaited<ReturnType<typeof getMediaPageContent>>;
export type NewsPageContent = Awaited<ReturnType<typeof getNewsPageContent>>;
export type PrivacyPolicyPageContent = Awaited<ReturnType<typeof getPrivacyPolicyPageContent>>;
export type PublicationsPageContent = Awaited<ReturnType<typeof getPublicationsPageContent>>;
export type QualityAwardsPageContent = Awaited<ReturnType<typeof getQualityAwardsPageContent>>;
export type SiteChrome = Awaited<ReturnType<typeof getSiteChrome>>;
export type SiteSettingsContent = Awaited<ReturnType<typeof getSiteSettings>>;
export type StandardsDevelopmentPageContent = Awaited<ReturnType<typeof getStandardsDevelopmentPageContent>>;
export type TermsPageContent = Awaited<ReturnType<typeof getTermsPageContent>>;
export type TestingPageContent = Awaited<ReturnType<typeof getTestingPageContent>>;
export type TrainingPageContent = Awaited<ReturnType<typeof getTrainingPageContent>>;
