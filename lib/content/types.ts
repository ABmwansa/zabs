export interface LinkItem {
  label: string;
  href: string;
}

export interface NavChildItem extends LinkItem {
  icon: string;
  highlight?: boolean;
}

export type NavItem =
  | {
      label: string;
      href: string;
      children?: never;
    }
  | {
      label: string;
      href?: never;
      children: NavChildItem[];
    };

export interface SocialLink {
  id: string;
  name: string;
  href: string;
  iconClass: string;
  platform?: "facebook" | "x" | "linkedin" | "youtube";
  handle?: string;
  isActive?: boolean;
}

export interface FooterLinkGroup {
  title: string;
  links: LinkItem[];
}

export interface SiteSettings {
  organizationName: string;
  shortName: string;
  primaryPhone: string;
  primaryPhoneHref: string;
  secondaryPhone: string;
  secondaryPhoneHref: string;
  primaryEmail: string;
  primaryEmailHref: string;
  addressLines: string[];
  topBarLocation: string;
  socialLinks: SocialLink[];
  footerLinkGroups: FooterLinkGroup[];
  footerSummary: string;
  newsletterTitle: string;
  newsletterDescription: string;
}

export interface HeroSlide {
  id: number;
  eyebrow: string;
  headline: string;
  subtext: string;
  backgroundImage?: {
    url: string;
    alt: string;
  };
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  stat: {
    value: string;
    label: string;
  };
}

export interface IconCardItem extends LinkItem {
  icon: string;
  title: string;
  description: string;
  color: "primary" | "secondary";
}

export interface StatItem {
  value: string;
  label: string;
  sub: string;
  icon: string;
}

export interface AnnouncementItem extends LinkItem {
  icon: string;
  tag: string;
  tagColor: "primary" | "secondary";
  title: string;
  description: string;
}

export interface QuickStatItem {
  value: string;
  label: string;
  sub?: string;
  icon?: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
  color: "primary" | "secondary";
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  title: string;
  dept: string;
  qualifications: string;
}

export type TeamGroup = "board" | "executive" | "directors" | "managers";

export interface TeamProfile {
  id: string;
  group: TeamGroup;
  name: string;
  position: string;
  image?: string | null;
  placeholderIcon?: "user";
  summary?: string;
}

export interface ContactDepartment {
  icon: string;
  name: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  description: string;
  hours: string;
  color: "primary" | "secondary";
}

export interface ContactOffice {
  name: string;
  address: string;
  pobox: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  primary: boolean;
}

export interface ContactSocialItem {
  name: string;
  icon: "facebook" | "twitter" | "linkedin" | "youtube";
  handle: string;
  href: string;
  colorClass: string;
  hoverClass: string;
}

export interface ContactFaqItem extends LinkItem {
  question: string;
}

export type ContentSourceType = "manual" | "synced";
export type SourcePlatform = "internal" | "facebook" | "linkedin" | "youtube" | "x" | "other";

export interface SocialSyncItem {
  title: string;
  summary: string;
  sourceType: ContentSourceType;
  sourcePlatform: SourcePlatform;
  sourceUrl?: string;
  featured?: boolean;
}

export interface NewsItem extends SocialSyncItem {
  category: string;
  publishedAt: string;
  excerpt: string;
  icon: string;
}

export interface MediaItem extends SocialSyncItem {
  mediaType: "video" | "photo" | "press-release" | "gallery";
  publishedAt: string;
  icon: string;
}

export interface EventItem extends SocialSyncItem {
  startDate: string;
  endDate?: string;
  location: string;
  status: "upcoming" | "registration-open" | "ongoing" | "completed";
  registrationHref?: string;
  icon: string;
}
