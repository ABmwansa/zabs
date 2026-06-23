import {
  ArrowRight,
  Briefcase,
  CalendarRange,
  FileText,
  Globe2,
  ImagePlus,
  Images,
  Inbox,
  LayoutGrid,
  Newspaper,
  Settings2,
  ShieldCheck,
  UserPlus,
  Users,
} from "lucide-react";
import { getPayload } from "payload";

import configPromise from "@/payload.config";

type IconType = React.ComponentType<{ size?: number; strokeWidth?: number }>;
type StatusTone = "info" | "neutral" | "success" | "warning";
type AccentTone = "amber" | "blue" | "green" | "slate";

type ActivityItem = {
  badge: string;
  collection: string;
  href: string;
  icon: IconType;
  status?: string;
  statusTone?: StatusTone;
  title: string;
  updatedAt: string;
};

type SummaryCard = {
  description: string;
  group: "company" | "website";
  href: string;
  icon: IconType;
  label: string;
  statusLabel: string;
  tone: AccentTone;
  value: number;
};

type QuickAction = {
  description: string;
  href: string;
  icon: IconType;
  label: string;
  meta: string;
  tone: AccentTone;
};

type InsightCard = {
  description: string;
  icon: IconType;
  label: string;
  tone: AccentTone;
  value: string;
};

const quickActions: QuickAction[] = [
  {
    description: "Create a new portfolio item or case study for the public site.",
    href: "/admin/collections/projects/create",
    icon: Briefcase,
    label: "Add Project",
    meta: "Portfolio",
    tone: "blue",
  },
  {
    description: "Publish a new service offering with its content, features, and call to action.",
    href: "/admin/collections/services/create",
    icon: LayoutGrid,
    label: "Add Service",
    meta: "Services",
    tone: "slate",
  },
  {
    description: "Create a public staff or leadership profile for the website.",
    href: "/admin/collections/team/create",
    icon: UserPlus,
    label: "Add Team Member",
    meta: "People",
    tone: "green",
  },
  {
    description: "Review incoming contact submissions and update their workflow status.",
    href: "/admin/collections/enquiries",
    icon: Inbox,
    label: "View Enquiries",
    meta: "Inbox",
    tone: "amber",
  },
  {
    description: "Publish an announcement, press story, or official news update.",
    href: "/admin/collections/news/create",
    icon: Newspaper,
    label: "Create News Post",
    meta: "Editorial",
    tone: "blue",
  },
  {
    description: "Upload new images, brochures, PDFs, and reusable website assets.",
    href: "/admin/collections/media/create",
    icon: ImagePlus,
    label: "Upload Media",
    meta: "Library",
    tone: "slate",
  },
];

const heroChecklist = [
  "Update shared site settings before editing page-level content.",
  "Use Projects, Services, and Team for structured company modules.",
  "Review new enquiries daily and keep publishing statuses current.",
];

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-ZM", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));

const formatStatus = (value?: string) => {
  if (!value) {
    return undefined;
  }

  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
};

const resolveStatusTone = (value?: string): StatusTone => {
  switch (value) {
    case "published":
    case "completed":
    case "replied":
    case "active":
      return "success";
    case "draft":
    case "upcoming":
    case "new":
      return "warning";
    case "current":
    case "read":
      return "info";
    default:
      return "neutral";
  }
};

const toneClassName = (tone: AccentTone) => `zabs-tone-${tone}`;

const buildActivityItem = ({
  badge,
  collection,
  href,
  icon,
  status,
  title,
  updatedAt,
}: {
  badge: string;
  collection: string;
  href: string;
  icon: IconType;
  status?: string;
  title: string;
  updatedAt: string;
}): ActivityItem => ({
  badge,
  collection,
  href,
  icon,
  status: formatStatus(status),
  statusTone: resolveStatusTone(status),
  title,
  updatedAt,
});

function SectionHeader({
  badge,
  description,
  eyebrow,
  title,
}: {
  badge?: React.ReactNode;
  description: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="zabs-dashboard__section-header">
      <div className="zabs-dashboard__section-header-copy">
        <p className="zabs-dashboard__eyebrow">{eyebrow}</p>
        <h2 className="zabs-dashboard__section-title">{title}</h2>
        <p className="zabs-dashboard__section-description">{description}</p>
      </div>
      {badge}
    </div>
  );
}

function SummaryMetricCard({ card }: { card: SummaryCard }) {
  const Icon = card.icon;

  return (
    <a
      href={card.href}
      className="zabs-dashboard-card zabs-dashboard-card--interactive"
    >
      <div className="zabs-dashboard-card__inner">
        <div className="zabs-dashboard-card__header">
          <div className={`zabs-dashboard-card__icon ${toneClassName(card.tone)}`}>
            <Icon size={18} strokeWidth={2} />
          </div>
          <span className="zabs-status-chip zabs-status-chip--info">
            {card.statusLabel}
          </span>
        </div>
        <div>
          <p className="zabs-dashboard-card__title">{card.label}</p>
          <div className="zabs-dashboard-card__value">{card.value}</div>
        </div>
        <p className="zabs-dashboard-card__description">{card.description}</p>
        <div className="zabs-dashboard-card__footer">
          <span>Open module</span>
          <ArrowRight size={16} strokeWidth={2.2} />
        </div>
      </div>
    </a>
  );
}

function SummaryMetricRow({ card }: { card: SummaryCard }) {
  const Icon = card.icon;

  return (
    <a href={card.href} className="zabs-dashboard__metric-row">
      <div className={`zabs-dashboard-card__icon ${toneClassName(card.tone)}`}>
        <Icon size={18} strokeWidth={2} />
      </div>
      <div className="zabs-dashboard__metric-row-main">
        <div className="zabs-dashboard__metric-row-top">
          <p className="zabs-dashboard-card__title">{card.label}</p>
          <span className="zabs-status-chip zabs-status-chip--info">
            {card.statusLabel}
          </span>
        </div>
        <p className="zabs-dashboard-card__description">{card.description}</p>
      </div>
      <div className="zabs-dashboard__metric-row-value">{card.value}</div>
    </a>
  );
}

function QuickActionCard({ action }: { action: QuickAction }) {
  const Icon = action.icon;

  return (
    <a
      href={action.href}
      className="zabs-dashboard-card zabs-dashboard-card--interactive"
    >
      <div className="zabs-dashboard-card__inner">
        <div className="zabs-dashboard-card__header">
          <div className={`zabs-dashboard-card__icon ${toneClassName(action.tone)}`}>
            <Icon size={18} strokeWidth={2} />
          </div>
          <span className="zabs-status-chip zabs-status-chip--neutral">
            {action.meta}
          </span>
        </div>
        <div>
          <p className="zabs-dashboard-card__title">{action.label}</p>
          <p className="zabs-dashboard-card__helper">Common action</p>
        </div>
        <p className="zabs-dashboard-card__description">{action.description}</p>
        <div className="zabs-dashboard-card__footer">
          <span>Open action</span>
          <ArrowRight size={16} strokeWidth={2.2} />
        </div>
      </div>
    </a>
  );
}

function InsightCard({ item }: { item: InsightCard }) {
  const Icon = item.icon;

  return (
    <div className="zabs-dashboard-card">
      <div className="zabs-dashboard-card__inner">
        <div className="zabs-dashboard-card__header">
          <div className={`zabs-dashboard-card__icon ${toneClassName(item.tone)}`}>
            <Icon size={18} strokeWidth={2} />
          </div>
        </div>
        <div>
          <p className="zabs-dashboard-card__title">{item.label}</p>
          <div
            className="zabs-dashboard-card__value"
            style={{ fontSize: "1.65rem" }}
          >
            {item.value}
          </div>
        </div>
        <p className="zabs-dashboard-card__description">{item.description}</p>
      </div>
    </div>
  );
}

function ActivityRow({ item }: { item: ActivityItem }) {
  const Icon = item.icon;

  return (
    <a href={item.href} className="zabs-dashboard__activity-row">
      <div className="zabs-dashboard__activity-icon">
        <Icon size={16} strokeWidth={2} />
      </div>
      <div className="zabs-dashboard__activity-main">
        <p className="zabs-dashboard__activity-title">{item.title}</p>
        <div className="zabs-dashboard__activity-meta">
          <span className="zabs-status-chip zabs-status-chip--neutral">
            {item.badge}
          </span>
          {item.status ? (
            <span
              className={`zabs-status-chip zabs-status-chip--${
                item.statusTone ?? "neutral"
              }`}
            >
              {item.status}
            </span>
          ) : null}
        </div>
      </div>
      <div className="zabs-dashboard__activity-date">
        {formatDate(item.updatedAt)}
      </div>
    </a>
  );
}

async function getDashboardData() {
  const payload = await getPayload({ config: configPromise });

  const [
    pagesCount,
    newsCount,
    eventsCount,
    mediaCount,
    projectsCount,
    servicesCount,
    teamCount,
    newEnquiriesCount,
    usersCount,
    siteSettings,
    homePage,
    latestPages,
    latestNews,
    latestEvents,
    latestMediaPosts,
    latestProjects,
    latestServices,
    latestTeam,
    latestEnquiries,
  ] = await Promise.all([
    payload.count({ collection: "pages" }),
    payload.count({ collection: "news" }),
    payload.count({ collection: "events" }),
    payload.count({ collection: "media" }),
    payload.count({ collection: "projects" }),
    payload.count({ collection: "services" }),
    payload.count({
      collection: "team",
      where: {
        isActive: {
          equals: true,
        },
      },
    }),
    payload.count({
      collection: "enquiries",
      where: {
        status: {
          equals: "new",
        },
      },
    }),
    payload.count({ collection: "users" }),
    payload.findGlobal({ slug: "site-settings" }),
    payload.findGlobal({ slug: "home-page" }),
    payload.find({ collection: "pages", depth: 0, limit: 2, sort: "-updatedAt" }),
    payload.find({ collection: "news", depth: 0, limit: 2, sort: "-updatedAt" }),
    payload.find({ collection: "events", depth: 0, limit: 2, sort: "-updatedAt" }),
    payload.find({
      collection: "media-posts",
      depth: 0,
      limit: 2,
      sort: "-updatedAt",
    }),
    payload.find({
      collection: "projects",
      depth: 0,
      limit: 2,
      sort: "-updatedAt",
    }),
    payload.find({
      collection: "services",
      depth: 0,
      limit: 2,
      sort: "-updatedAt",
    }),
    payload.find({ collection: "team", depth: 0, limit: 2, sort: "-updatedAt" }),
    payload.find({
      collection: "enquiries",
      depth: 0,
      limit: 2,
      sort: "-updatedAt",
    }),
  ]);

  const heroSlidesCount = Array.isArray(homePage?.heroSlides)
    ? homePage.heroSlides.length
    : 0;
  const socialLinksCount = Array.isArray(siteSettings?.socialLinks)
    ? siteSettings.socialLinks.length
    : 0;

  const summaryCards: SummaryCard[] = [
    {
      description: "Portfolio projects and case studies currently managed in the CMS.",
      group: "company",
      href: "/admin/collections/projects",
      icon: Briefcase,
      label: "Total Projects",
      statusLabel: "Portfolio",
      tone: "blue",
      value: projectsCount.totalDocs,
    },
    {
      description: "Active services and offerings prepared for the public website.",
      group: "company",
      href: "/admin/collections/services",
      icon: LayoutGrid,
      label: "Total Services",
      statusLabel: "Services",
      tone: "slate",
      value: servicesCount.totalDocs,
    },
    {
      description: "Active team profiles currently available for visitors and partners.",
      group: "company",
      href: "/admin/collections/team",
      icon: Users,
      label: "Team Members",
      statusLabel: "People",
      tone: "green",
      value: teamCount.totalDocs,
    },
    {
      description: "Unread enquiries currently waiting for review or response.",
      group: "company",
      href: "/admin/collections/enquiries",
      icon: Inbox,
      label: "New Enquiries",
      statusLabel: "Attention",
      tone: "amber",
      value: newEnquiriesCount.totalDocs,
    },
    {
      description: "Core website pages, campaign pages, and legal information managed here.",
      group: "website",
      href: "/admin/collections/pages",
      icon: Globe2,
      label: "Pages",
      statusLabel: "Core Site",
      tone: "blue",
      value: pagesCount.totalDocs,
    },
    {
      description: "Published and draft news stories prepared for the public site.",
      group: "website",
      href: "/admin/collections/news",
      icon: Newspaper,
      label: "News Posts",
      statusLabel: "Editorial",
      tone: "slate",
      value: newsCount.totalDocs,
    },
    {
      description: "Upcoming, current, and archived public events in the workspace.",
      group: "website",
      href: "/admin/collections/events",
      icon: CalendarRange,
      label: "Events",
      statusLabel: "Calendar",
      tone: "green",
      value: eventsCount.totalDocs,
    },
    {
      description: "Reusable images, documents, and media assets stored for editors.",
      group: "website",
      href: "/admin/collections/media",
      icon: Images,
      label: "Media Items",
      statusLabel: "Library",
      tone: "amber",
      value: mediaCount.totalDocs,
    },
  ];

  const insightCards: InsightCard[] = [
    {
      description: "Homepage hero slides currently configured for the landing experience.",
      icon: Settings2,
      label: "Homepage Slides",
      tone: "blue",
      value: String(heroSlidesCount),
    },
    {
      description: "Social links reused across contact sections and public site chrome.",
      icon: Globe2,
      label: "Social Links",
      tone: "green",
      value: String(socialLinksCount),
    },
    {
      description: "Admin users with access to edit, review, publish, and manage content.",
      icon: ShieldCheck,
      label: "Admin Users",
      tone: "amber",
      value: String(usersCount.totalDocs),
    },
    {
      description: "Core website pages currently maintained as part of the site structure.",
      icon: FileText,
      label: "Managed Pages",
      tone: "slate",
      value: String(pagesCount.totalDocs),
    },
  ];

  const activity: ActivityItem[] = [
    ...latestPages.docs.map((doc) =>
      buildActivityItem({
        badge: "Page",
        collection: "Page",
        href: `/admin/collections/pages/${doc.id}`,
        icon: Globe2,
        status: typeof doc.status === "string" ? doc.status : undefined,
        title: String(doc.title ?? "Untitled Page"),
        updatedAt: String(doc.updatedAt),
      }),
    ),
    ...latestNews.docs.map((doc) =>
      buildActivityItem({
        badge: "News",
        collection: "News",
        href: `/admin/collections/news/${doc.id}`,
        icon: Newspaper,
        status: typeof doc.status === "string" ? doc.status : undefined,
        title: String(doc.title ?? "Untitled Story"),
        updatedAt: String(doc.updatedAt),
      }),
    ),
    ...latestEvents.docs.map((doc) =>
      buildActivityItem({
        badge: "Event",
        collection: "Event",
        href: `/admin/collections/events/${doc.id}`,
        icon: CalendarRange,
        status: typeof doc.status === "string" ? doc.status : undefined,
        title: String(doc.title ?? "Untitled Event"),
        updatedAt: String(doc.updatedAt),
      }),
    ),
    ...latestMediaPosts.docs.map((doc) =>
      buildActivityItem({
        badge: "Media Post",
        collection: "Media Post",
        href: `/admin/collections/media-posts/${doc.id}`,
        icon: Images,
        status: typeof doc.status === "string" ? doc.status : undefined,
        title: String(doc.title ?? "Untitled Media Post"),
        updatedAt: String(doc.updatedAt),
      }),
    ),
    ...latestProjects.docs.map((doc) =>
      buildActivityItem({
        badge: "Project",
        collection: "Project",
        href: `/admin/collections/projects/${doc.id}`,
        icon: Briefcase,
        status:
          typeof doc.projectStatus === "string" ? doc.projectStatus : undefined,
        title: String(doc.title ?? "Untitled Project"),
        updatedAt: String(doc.updatedAt),
      }),
    ),
    ...latestServices.docs.map((doc) =>
      buildActivityItem({
        badge: "Service",
        collection: "Service",
        href: `/admin/collections/services/${doc.id}`,
        icon: LayoutGrid,
        title: String(doc.title ?? "Untitled Service"),
        updatedAt: String(doc.updatedAt),
      }),
    ),
    ...latestTeam.docs.map((doc) =>
      buildActivityItem({
        badge: "Team",
        collection: "Team",
        href: `/admin/collections/team/${doc.id}`,
        icon: Users,
        status: doc.isActive === false ? "inactive" : "active",
        title: String(doc.fullName ?? "Untitled Team Member"),
        updatedAt: String(doc.updatedAt),
      }),
    ),
    ...latestEnquiries.docs.map((doc) =>
      buildActivityItem({
        badge: "Enquiry",
        collection: "Enquiry",
        href: `/admin/collections/enquiries/${doc.id}`,
        icon: Inbox,
        status: typeof doc.status === "string" ? doc.status : undefined,
        title: String(doc.subject ?? doc.senderName ?? "New Enquiry"),
        updatedAt: String(
          doc.updatedAt ?? doc.dateReceived ?? new Date().toISOString(),
        ),
      }),
    ),
  ]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 8);

  return {
    activity,
    companyCards: summaryCards.filter((card) => card.group === "company"),
    insightCards,
    websiteCards: summaryCards.filter((card) => card.group === "website"),
  };
}

export async function ZabsAdminDashboard() {
  const { activity, companyCards, insightCards, websiteCards } =
    await getDashboardData();
  const [leadWebsiteCard, ...secondaryWebsiteCards] = websiteCards;
  const [leadCompanyCard, ...secondaryCompanyCards] = companyCards;
  const heroActions = quickActions.slice(0, 3);

  return (
    <section className="zabs-dashboard">
      <div className="zabs-dashboard__hero">
        <div className="zabs-dashboard__hero-layout">
          <div className="zabs-dashboard__hero-copy">
            <p className="zabs-dashboard__eyebrow">Overview</p>
            <h1 className="zabs-dashboard__hero-title">
              A cleaner admin workspace for ZABS content operations.
            </h1>
            <p className="zabs-dashboard__hero-description">
              Use this dashboard to monitor public website content, company
              modules, editor activity, and day-to-day publishing priorities
              from one organized admin home.
            </p>

            <div className="zabs-dashboard__hero-tags">
              <span className="zabs-dashboard__hero-tag">Pages and settings</span>
              <span className="zabs-dashboard__hero-tag">Projects and services</span>
              <span className="zabs-dashboard__hero-tag">Media and enquiries</span>
            </div>

            <div className="zabs-dashboard__hero-toolbar">
              {heroActions.map((action) => {
                const Icon = action.icon;

                return (
                  <a
                    key={action.label}
                    href={action.href}
                    className="zabs-dashboard__hero-toolbar-link"
                  >
                    <div className={`zabs-dashboard-card__icon ${toneClassName(action.tone)}`}>
                      <Icon size={17} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="zabs-dashboard__hero-toolbar-title">{action.label}</p>
                      <p className="zabs-dashboard__hero-toolbar-meta">{action.meta}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="zabs-dashboard__mini-grid" style={{ marginTop: "1rem" }}>
              {insightCards.map((item) => (
                <InsightCard key={item.label} item={item} />
              ))}
            </div>
          </div>

          <div className="zabs-dashboard__hero-aside">
            <div className="zabs-dashboard__hero-note">
              <p className="zabs-dashboard__hero-note-title">Daily editing flow</p>
              <p className="zabs-dashboard__hero-note-copy">
                Keep shared settings accurate first, then publish structured
                content modules, and finally review communication records and
                enquiries.
              </p>
              <ul className="zabs-dashboard__hero-note-list">
                {heroChecklist.map((item) => (
                  <li key={item} className="zabs-dashboard__hero-note-item">
                    <span className="zabs-dashboard__hero-note-bullet" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="zabs-dashboard__section">
        <SectionHeader
          eyebrow="Website Content"
          title="Core public website modules"
          description="Track the main content areas that shape the public website experience and institutional messaging."
          badge={
            <div className="zabs-dashboard__badge">
              <Globe2 size={18} strokeWidth={1.9} />
              Website content
            </div>
          }
        />
        <div className="zabs-dashboard__module-rail">
          <div className="zabs-dashboard__module-rail-lead">
            {leadWebsiteCard ? <SummaryMetricCard card={leadWebsiteCard} /> : null}
          </div>
          <div className="zabs-dashboard__module-rail-list">
            {secondaryWebsiteCards.map((card) => (
              <SummaryMetricRow key={card.label} card={card} />
            ))}
          </div>
        </div>
      </div>

      <div className="zabs-dashboard__section">
        <SectionHeader
          eyebrow="Company Modules"
          title="Operational content and records"
          description="Monitor structured company information such as projects, services, people, and incoming public messages."
          badge={
            <div className="zabs-dashboard__badge">
              <ShieldCheck size={18} strokeWidth={1.9} />
              Company modules
            </div>
          }
        />
        <div className="zabs-dashboard__module-rail">
          <div className="zabs-dashboard__module-rail-lead">
            {leadCompanyCard ? <SummaryMetricCard card={leadCompanyCard} /> : null}
          </div>
          <div className="zabs-dashboard__module-rail-list">
            {secondaryCompanyCards.map((card) => (
              <SummaryMetricRow key={card.label} card={card} />
            ))}
          </div>
        </div>
      </div>

      <div className="zabs-dashboard__section">
        <SectionHeader
          eyebrow="Recent Activity"
          title="Latest updates across the workspace"
          description="Review the newest content edits and operational updates without opening each collection one by one."
        />

        <div className="zabs-dashboard__split-grid">
          <div className="zabs-dashboard__activity-card">
            <div className="zabs-dashboard-card">
              <div className="zabs-dashboard-card__inner">
                <div className="zabs-dashboard-card__header">
                  <div className="zabs-dashboard-card__icon zabs-tone-blue">
                    <FileText size={18} strokeWidth={2} />
                  </div>
                  <span className="zabs-status-chip zabs-status-chip--neutral">
                    Activity feed
                  </span>
                </div>
                <div>
                  <p className="zabs-dashboard-card__title">Recent updates</p>
                  <p className="zabs-dashboard-card__description">
                    Open the latest items directly from this list.
                  </p>
                </div>
                {activity.length === 0 ? (
                  <div className="zabs-dashboard__empty-state">
                    No recent activity yet. Create or update a page, project,
                    service, event, or enquiry to populate this feed.
                  </div>
                ) : (
                  <div className="zabs-dashboard__activity-list">
                    {activity.map((item) => (
                      <ActivityRow
                        key={`${item.collection}-${item.href}`}
                        item={item}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="zabs-dashboard__stack">
            <div className="zabs-dashboard-card">
              <div className="zabs-dashboard-card__inner">
                <div className="zabs-dashboard-card__header">
                  <div className="zabs-dashboard-card__icon zabs-tone-green">
                    <Settings2 size={18} strokeWidth={2} />
                  </div>
                  <span className="zabs-status-chip zabs-status-chip--success">
                    Guidance
                  </span>
                </div>
                <div>
                  <p className="zabs-dashboard-card__title">Recommended order</p>
                </div>
                <p className="zabs-dashboard-card__description">
                  Update site settings and homepage content first, then move to
                  services, projects, pages, editorial content, and public
                  enquiries.
                </p>
              </div>
            </div>

            <div className="zabs-dashboard-card">
              <div className="zabs-dashboard-card__inner">
                <div className="zabs-dashboard-card__header">
                  <div className="zabs-dashboard-card__icon zabs-tone-amber">
                    <ShieldCheck size={18} strokeWidth={2} />
                  </div>
                  <span className="zabs-status-chip zabs-status-chip--warning">
                    Review
                  </span>
                </div>
                <div>
                  <p className="zabs-dashboard-card__title">Editorial quality</p>
                </div>
                <p className="zabs-dashboard-card__description">
                  Keep summaries concise, maintain clean media selections, and
                  publish only reviewed content with clear status labeling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="zabs-dashboard__section">
        <SectionHeader
          eyebrow="Quick Actions"
          title="Common tasks for editors and admins"
          description="Jump directly into the actions most often used during content maintenance and publishing."
        />
        <div className="zabs-dashboard__quick-actions-grid">
          {quickActions.map((action) => (
            <QuickActionCard key={action.label} action={action} />
          ))}
        </div>
      </div>
    </section>
  );
}
