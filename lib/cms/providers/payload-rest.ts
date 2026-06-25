import { cache } from "react";

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
import { teamMembers as localTeamMembers, teamPageContent as localTeamPageContent } from "@/lib/content/team";
import { siteSettings as localSiteSettings } from "@/lib/content/site";
import type {
  HeroSlide,
  SiteSettings as SiteSettingsContent,
  TeamGroup,
  TeamPageContent,
  TeamProfile,
} from "@/lib/content/types";

import * as localProvider from "./local";

const PUBLIC_CMS_BASE_URL = process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3001";

type PayloadMediaAsset = {
  alt?: string | null;
  url?: string | null;
};

type PayloadSiteSettingsResponse = {
  organizationName?: string | null;
  shortName?: string | null;
  primaryPhone?: string | null;
  secondaryPhone?: string | null;
  primaryEmail?: string | null;
  topBarLocation?: string | null;
  addressLines?: Array<{ line?: string | null }> | null;
  socialLinks?: Array<{
    platform?: "facebook" | "x" | "linkedin" | "youtube" | null;
    name?: string | null;
    url?: string | null;
    handle?: string | null;
    isActive?: boolean | null;
  }> | null;
  footerSummary?: string | null;
  newsletterTitle?: string | null;
  newsletterDescription?: string | null;
};

type PayloadHomePageResponse = {
  heroSlides?: Array<{
    eyebrow?: string | null;
    headline?: string | null;
    subtext?: string | null;
    primaryCta?: { label?: string | null; href?: string | null } | null;
    secondaryCta?: { label?: string | null; href?: string | null } | null;
    stat?: { value?: string | null; label?: string | null } | null;
    backgroundImage?: PayloadMediaAsset | null;
  }> | null;
  summaryStats?: Array<{ value?: string | null; label?: string | null }> | null;
  ctaTitle?: string | null;
  ctaDescription?: string | null;
};

type PayloadTeamResponse = {
  docs?: Array<{
    slug?: string | null;
    fullName?: string | null;
    position?: string | null;
    teamGroup?: TeamGroup | null;
    shortBio?: string | null;
    profilePhoto?: PayloadMediaAsset | null;
  }> | null;
};

const platformIconClassMap = {
  facebook: "fab fa-facebook-f",
  x: "fab fa-twitter",
  linkedin: "fab fa-linkedin-in",
  youtube: "fab fa-youtube",
} as const;

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

const buildPublicCmsUrl = (pathname: string, searchParams?: Record<string, string>) => {
  const url = new URL(pathname, PUBLIC_CMS_BASE_URL);

  if (searchParams) {
    Object.entries(searchParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  return url.toString();
};

const normalizeSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

const fetchPublicGlobal = async <TResponse>(
  slug: string,
  revalidateSeconds = 60,
): Promise<TResponse | null> => {
  try {
    const response = await fetch(
      buildPublicCmsUrl(`/api/globals/${slug}`, {
        depth: "1",
      }),
      {
        next: { revalidate: revalidateSeconds },
      },
    );

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as TResponse;
  } catch {
    return null;
  }
};

const fetchPublicCollection = async <TResponse>(
  slug: string,
  searchParams?: Record<string, string>,
  revalidateSeconds = 60,
): Promise<TResponse | null> => {
  try {
    const response = await fetch(
      buildPublicCmsUrl(`/api/${slug}`, searchParams),
      {
        next: { revalidate: revalidateSeconds },
      },
    );

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as TResponse;
  } catch {
    return null;
  }
};

const normalizePhoneHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
const normalizeEmailHref = (email: string) => `mailto:${email}`;

const normalizeSiteSettings = (payloadSettings: PayloadSiteSettingsResponse | null): SiteSettingsContent => {
  if (!payloadSettings) {
    return localSiteSettings;
  }

  const primaryPhone = payloadSettings.primaryPhone || localSiteSettings.primaryPhone;
  const secondaryPhone = payloadSettings.secondaryPhone || localSiteSettings.secondaryPhone;
  const primaryEmail = payloadSettings.primaryEmail || localSiteSettings.primaryEmail;
  const normalizedAddressLines =
    payloadSettings.addressLines
      ?.map((item) => item?.line?.trim())
      .filter((line): line is string => Boolean(line)) || localSiteSettings.addressLines;

  const normalizedSocialLinks =
    payloadSettings.socialLinks
      ?.map((item, index) => {
        if (!item?.name || !item?.url || !item?.platform) {
          return null;
        }

        return {
          id: `${item.platform}-${index + 1}`,
          name: item.name,
          href: item.url,
          iconClass: platformIconClassMap[item.platform],
          platform: item.platform,
          handle: item.handle || undefined,
          isActive: item.isActive ?? true,
        };
      })
      .filter((item): item is NonNullable<typeof item> => Boolean(item)) || localSiteSettings.socialLinks;

  return {
    organizationName: payloadSettings.organizationName || localSiteSettings.organizationName,
    shortName: payloadSettings.shortName || localSiteSettings.shortName,
    primaryPhone,
    primaryPhoneHref: normalizePhoneHref(primaryPhone),
    secondaryPhone,
    secondaryPhoneHref: normalizePhoneHref(secondaryPhone),
    primaryEmail,
    primaryEmailHref: normalizeEmailHref(primaryEmail),
    addressLines: normalizedAddressLines,
    topBarLocation: payloadSettings.topBarLocation || localSiteSettings.topBarLocation,
    socialLinks: normalizedSocialLinks,
    footerLinkGroups: localSiteSettings.footerLinkGroups,
    footerSummary: payloadSettings.footerSummary || localSiteSettings.footerSummary,
    newsletterTitle: payloadSettings.newsletterTitle || localSiteSettings.newsletterTitle,
    newsletterDescription:
      payloadSettings.newsletterDescription || localSiteSettings.newsletterDescription,
  };
};

const normalizeHeroSlides = (heroSlides: PayloadHomePageResponse["heroSlides"]): HeroSlide[] => {
  if (!Array.isArray(heroSlides) || heroSlides.length === 0) {
    return homeHeroSlides;
  }

  const normalizedSlides = heroSlides.flatMap((slide, index) => {
    if (!slide?.headline || !slide.subtext) {
      return [];
    }

    const localFallbackSlide = homeHeroSlides[index] || homeHeroSlides[0];
    const backgroundImage = slide.backgroundImage?.url
      ? {
          alt: slide.backgroundImage.alt || slide.headline,
          url: slide.backgroundImage.url,
        }
      : localFallbackSlide.backgroundImage;

    return [
      {
        id: index + 1,
        eyebrow: slide.eyebrow || "",
        headline: slide.headline,
        subtext: slide.subtext,
        backgroundImage,
        primaryCta: {
          href: slide.primaryCta?.href || localFallbackSlide.primaryCta.href,
          label: slide.primaryCta?.label || localFallbackSlide.primaryCta.label,
        },
        secondaryCta: {
          href: slide.secondaryCta?.href || localFallbackSlide.secondaryCta.href,
          label: slide.secondaryCta?.label || localFallbackSlide.secondaryCta.label,
        },
        stat: {
          label: slide.stat?.label || localFallbackSlide.stat.label,
          value: slide.stat?.value || localFallbackSlide.stat.value,
        },
      },
    ];
  });

  return normalizedSlides.length > 0 ? normalizedSlides : homeHeroSlides;
};

const normalizeSummaryStats = (summaryStats: PayloadHomePageResponse["summaryStats"]) => {
  if (!Array.isArray(summaryStats) || summaryStats.length === 0) {
    return homeHeroSummaryStats;
  }

  const normalizedStats = summaryStats.flatMap((stat) => {
    if (!stat?.value || !stat.label) {
      return [];
    }

    return [{ value: stat.value, label: stat.label }];
  });

  return normalizedStats.length > 0 ? normalizedStats : homeHeroSummaryStats;
};

const getRemoteSiteSettings = cache(async () => {
  const settings = await fetchPublicGlobal<PayloadSiteSettingsResponse>("site-settings");

  return normalizeSiteSettings(settings);
});

const getRemoteHomePage = cache(async () => {
  const homePage = await fetchPublicGlobal<PayloadHomePageResponse>("home-page");

  if (!homePage) {
    return defaultHomePageContent;
  }

  return {
    ...defaultHomePageContent,
    ctaSection: {
      ...homeCtaSection,
      description: homePage.ctaDescription || homeCtaSection.description,
      title: homePage.ctaTitle || homeCtaSection.title,
    },
    heroSlides: normalizeHeroSlides(homePage.heroSlides),
    heroSummaryStats: normalizeSummaryStats(homePage.summaryStats),
  };
});

const normalizeTeamMembers = (payloadTeam: PayloadTeamResponse | null): TeamProfile[] => {
  if (!payloadTeam?.docs?.length) {
    return localTeamMembers;
  }

  const normalizedMembers = payloadTeam.docs.flatMap((member) => {
    if (!member?.fullName || !member.position || !member.teamGroup) {
      return [];
    }

    return [
      {
        id: member.slug?.trim() || normalizeSlug(member.fullName),
        group: member.teamGroup,
        name: member.fullName,
        position: member.position,
        image: member.profilePhoto?.url || null,
        placeholderIcon: member.profilePhoto?.url ? undefined : "user",
        summary: member.shortBio || undefined,
      } satisfies TeamProfile,
    ];
  });

  return normalizedMembers.length > 0 ? normalizedMembers : localTeamMembers;
};

const getRemoteTeamMembers = cache(async () => {
  const team = await fetchPublicCollection<PayloadTeamResponse>(
    "team",
    {
      depth: "1",
      limit: "100",
      sort: "displayOrder",
      "where[isActive][equals]": "true",
    },
  );

  return normalizeTeamMembers(team);
});

const getRemoteTeamMember = cache(async (id: string) => {
  const members = await getRemoteTeamMembers();

  return members.find((member) => member.id === id) || null;
});

export const getSiteSettings = getRemoteSiteSettings;
export const getMainNavigation = localProvider.getMainNavigation;
export const getSiteChrome = cache(async () => ({
  navigation: await getMainNavigation(),
  siteSettings: await getSiteSettings(),
}));
export const getHomePageContent = getRemoteHomePage;

export const getAboutPageContent = localProvider.getAboutPageContent;
export const getBuyStandardsPageContent = localProvider.getBuyStandardsPageContent;
export const getCareersPageContent = localProvider.getCareersPageContent;
export const getCertificationPageContent = localProvider.getCertificationPageContent;
export const getContactPageContent = localProvider.getContactPageContent;
export const getEssayCompetitionPageContent = localProvider.getEssayCompetitionPageContent;
export const getFaqPageContent = localProvider.getFaqPageContent;
export const getHistoryPageContent = localProvider.getHistoryPageContent;
export const getEventsPageContent = localProvider.getEventsPageContent;
export const getMediaPageContent = localProvider.getMediaPageContent;
export const getNewsPageContent = localProvider.getNewsPageContent;
export const getPrivacyPolicyPageContent = localProvider.getPrivacyPolicyPageContent;
export const getPublicationsPageContent = localProvider.getPublicationsPageContent;
export const getQualityAwardsPageContent = localProvider.getQualityAwardsPageContent;
export const getStandardsDevelopmentPageContent = localProvider.getStandardsDevelopmentPageContent;
export const getTestingPageContent = localProvider.getTestingPageContent;
export const getTermsPageContent = localProvider.getTermsPageContent;
export const getTrainingPageContent = localProvider.getTrainingPageContent;
export const getTeamPageContent = cache(async (): Promise<TeamPageContent> => localTeamPageContent);
export const getTeamMembers = getRemoteTeamMembers;
export const getTeamMember = getRemoteTeamMember;
