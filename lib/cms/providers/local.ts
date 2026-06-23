import { cache } from "react";

import { aboutPageContent } from "@/lib/content/about";
import { essayCompetitionPageContent, qualityAwardsPageContent } from "@/lib/content/campaign-pages";
import { eventsPageContent, mediaPageContent, newsPageContent } from "@/lib/content/communications";
import { contactPageContent } from "@/lib/content/contact";
import {
  aboutSectionContent,
  certificationSectionContent,
  homeAnnouncements,
  homeAnnouncementsHeader,
  homeCtaSection,
  homeHeroSlides,
  homeHeroSummaryStats,
  homePartners,
  homeServices,
  homeStats,
} from "@/lib/content/home-page";
import { historyPageContent, privacyPolicyPageContent, termsPageContent } from "@/lib/content/info-pages";
import {
  buyStandardsPageContent,
  careersPageContent,
  faqPageContent,
  publicationsPageContent,
} from "@/lib/content/resource-pages";
import {
  certificationPageContent,
  standardsDevelopmentPageContent,
  testingPageContent,
  trainingPageContent,
} from "@/lib/content/service-pages";
import { mainNavigation, siteSettings } from "@/lib/content/site";

// Pure local provider for the standalone frontend app.
// Remote Payload reads can be added later through a separate HTTP-backed provider.

export const getSiteSettings = cache(async () => siteSettings);

export const getMainNavigation = cache(async () => mainNavigation);

export const getSiteChrome = cache(async () => ({
  navigation: mainNavigation,
  siteSettings,
}));

const defaultHomePageContent = {
  aboutSection: aboutSectionContent,
  announcements: homeAnnouncements,
  announcementsHeader: homeAnnouncementsHeader,
  certificationSection: certificationSectionContent,
  ctaSection: homeCtaSection,
  heroSlides: homeHeroSlides,
  heroSummaryStats: homeHeroSummaryStats,
  partners: homePartners,
  services: homeServices,
  stats: homeStats,
};

export const getHomePageContent = cache(async () => defaultHomePageContent);

export const getAboutPageContent = cache(async () => aboutPageContent);
export const getBuyStandardsPageContent = cache(async () => buyStandardsPageContent);
export const getCareersPageContent = cache(async () => careersPageContent);
export const getCertificationPageContent = cache(async () => certificationPageContent);
export const getContactPageContent = cache(async () => contactPageContent);
export const getEssayCompetitionPageContent = cache(async () => essayCompetitionPageContent);
export const getFaqPageContent = cache(async () => faqPageContent);
export const getHistoryPageContent = cache(async () => historyPageContent);
export const getEventsPageContent = cache(async () => eventsPageContent);
export const getMediaPageContent = cache(async () => mediaPageContent);
export const getNewsPageContent = cache(async () => newsPageContent);
export const getPrivacyPolicyPageContent = cache(async () => privacyPolicyPageContent);
export const getPublicationsPageContent = cache(async () => publicationsPageContent);
export const getQualityAwardsPageContent = cache(async () => qualityAwardsPageContent);
export const getStandardsDevelopmentPageContent = cache(async () => standardsDevelopmentPageContent);
export const getTestingPageContent = cache(async () => testingPageContent);
export const getTermsPageContent = cache(async () => termsPageContent);
export const getTrainingPageContent = cache(async () => trainingPageContent);
