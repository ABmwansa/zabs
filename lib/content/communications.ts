import type { EventItem, MediaItem, NewsItem } from "@/lib/content/types";

export const newsPageContent = {
  header: {
    title: "News & Announcements",
    description:
      "Official news, public notices, programme updates, and institutional announcements published through the ZABS website and connected communication channels.",
    badge: "Official Updates",
    breadcrumbs: [{ label: "News & Announcements" }],
  },
  featuredStory: {
    title: "Connected communications for a more current public-facing website",
    summary:
      "The website is being prepared so official updates can be published centrally and reflected consistently across news, media, events, and social-linked touchpoints.",
    category: "Platform Update",
    publishedAt: "June 2026",
    sourceType: "manual" as const,
    sourcePlatform: "internal" as const,
    sourceUrl: "/news",
    featured: true,
    excerpt:
      "This structure allows ZABS to manage public updates in one place now, and later connect approved social and media workflows without redesigning the frontend.",
    icon: "newspaper",
  },
  articles: [
    {
      title: "Quality awards programme enters the 2026 cycle",
      summary: "Public communication around the 11th Zambia National Quality Awards has been updated for the 2026 programme year.",
      category: "Awards",
      publishedAt: "June 2026",
      sourceType: "manual" as const,
      sourcePlatform: "internal" as const,
      sourceUrl: "/quality-awards",
      excerpt: "Application notices, key dates, and participation guidance are ready to be presented through a centralised content model.",
      icon: "trophy",
    },
    {
      title: "Essay competition communications aligned to the 2026 calendar",
      summary: "Student competition messaging, key dates, and submission guidance now reflect the 2026 cycle.",
      category: "Competition",
      publishedAt: "June 2026",
      sourceType: "manual" as const,
      sourcePlatform: "internal" as const,
      sourceUrl: "/essay-competition",
      excerpt: "This gives ZABS a cleaner base for future campaign publishing and scheduled content updates.",
      icon: "award",
    },
    {
      title: "Public website prepared for future CMS-managed announcement publishing",
      summary: "Frontend announcement rendering has been refactored to support future admin-managed publishing workflows.",
      category: "Website",
      publishedAt: "June 2026",
      sourceType: "manual" as const,
      sourcePlatform: "internal" as const,
      sourceUrl: "/",
      excerpt: "Announcements, homepage updates, and route-level content are now easier to replace with Payload-managed content later.",
      icon: "megaphone",
    },
  ] satisfies NewsItem[],
  newsroomCapabilities: [
    "Publish official notices and public advisories",
    "Feature institutional programmes and opportunities",
    "Surface campaign content from a controlled source of truth",
    "Prepare for future social-to-site sync workflows",
  ],
};

export const mediaPageContent = {
  header: {
    title: "Media Center",
    description:
      "Press resources, campaign highlights, media-ready updates, and connected digital content prepared for future CMS and social workflow integration.",
    badge: "Media & Channels",
    breadcrumbs: [{ label: "Media Center" }],
  },
  heroNote:
    "Media content should ultimately come from approved internal publishing or moderated sync jobs, not directly from uncontrolled third-party embeds.",
  featuredMedia: {
    title: "Institutional media prepared for CMS-driven publishing",
    summary:
      "Media highlights can be published manually now and later synced from approved channels into a moderated ZABS media collection.",
    mediaType: "press-release" as const,
    publishedAt: "June 2026",
    sourceType: "manual" as const,
    sourcePlatform: "internal" as const,
    sourceUrl: "/media",
    featured: true,
    icon: "camera",
  },
  mediaItems: [
    {
      title: "Programme announcement assets for public campaigns",
      summary: "Reusable media cards for competitions, awards, and other public-facing initiatives.",
      mediaType: "gallery" as const,
      publishedAt: "June 2026",
      sourceType: "manual" as const,
      sourcePlatform: "internal" as const,
      sourceUrl: "/quality-awards",
      icon: "image",
    },
    {
      title: "Training and standards updates for professional audiences",
      summary: "Media-ready items intended for newsletters, social posts, and formal website updates.",
      mediaType: "press-release" as const,
      publishedAt: "June 2026",
      sourceType: "manual" as const,
      sourcePlatform: "internal" as const,
      sourceUrl: "/training",
      icon: "fileText",
    },
    {
      title: "Video and photo content pathway for future channel sync",
      summary: "The frontend is prepared for curated YouTube and social-linked content to be surfaced through Payload later.",
      mediaType: "video" as const,
      publishedAt: "June 2026",
      sourceType: "synced" as const,
      sourcePlatform: "youtube" as const,
      sourceUrl: "#",
      icon: "playCircle",
    },
  ] satisfies MediaItem[],
  workflowSteps: [
    "Admins update official channel links in site settings",
    "Approved media entries are published through CMS-managed collections",
    "Future sync jobs can map platform content into moderated website records",
  ],
};

export const eventsPageContent = {
  header: {
    title: "Event Calendar",
    description:
      "Upcoming ZABS programmes, public events, calls for participation, and standards-related activities published through a website-ready events model.",
    badge: "Upcoming Events",
    breadcrumbs: [{ label: "Event Calendar" }],
  },
  featuredEvent: {
    title: "ZABS 2026 public engagement and programme cycle",
    summary:
      "Competitions, awards, consultations, training schedules, and public programme activities can now be represented through a consistent events structure.",
    startDate: "2026-06-01",
    location: "Lusaka and digital channels",
    status: "upcoming" as const,
    sourceType: "manual" as const,
    sourcePlatform: "internal" as const,
    sourceUrl: "/events",
    registrationHref: "/contact",
    icon: "calendar",
  },
  events: [
    {
      title: "13th ZABS Essay Competition submission window",
      summary: "National call for student essays around standards and trade facilitation.",
      startDate: "2026-01-01",
      endDate: "2026-03-31",
      location: "Nationwide submission",
      status: "registration-open" as const,
      sourceType: "manual" as const,
      sourcePlatform: "internal" as const,
      sourceUrl: "/essay-competition",
      registrationHref: "/essay-competition",
      icon: "award",
    },
    {
      title: "Zambia National Quality Awards application cycle",
      summary: "Application, review, and assessment stages for the 2026 quality awards programme.",
      startDate: "2026-02-01",
      endDate: "2026-09-30",
      location: "National programme",
      status: "upcoming" as const,
      sourceType: "manual" as const,
      sourcePlatform: "internal" as const,
      sourceUrl: "/quality-awards",
      registrationHref: "/quality-awards",
      icon: "trophy",
    },
    {
      title: "Training and standards engagement updates",
      summary: "Recurring course and standards-related engagement items that can later be synced or published from the CMS.",
      startDate: "2026-06-15",
      location: "ZABS training channels",
      status: "upcoming" as const,
      sourceType: "synced" as const,
      sourcePlatform: "linkedin" as const,
      sourceUrl: "#",
      icon: "graduationCap",
    },
  ] satisfies EventItem[],
  eventNotes: [
    "Events can be entered manually before backend sync is introduced",
    "Future social-linked items should be reviewed before publication",
    "The site should read from CMS-managed events, not directly from platform feeds",
  ],
};
