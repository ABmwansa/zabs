import type { NavItem, SiteSettings } from "@/lib/content/types";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    children: [
      { label: "Who We Are", href: "/about", icon: "users" },
      { label: "Board of Directors", href: "/board", icon: "users" },
      { label: "Our Team", href: "/our-team", icon: "users" },
      { label: "History & Legislation", href: "/history", icon: "history" },
    ],
  },
  { label: "Standards", href: "/standards-development" },
  { label: "Testing", href: "/testing" },
  { label: "Certification", href: "/certification" },
  { label: "Training", href: "/training" },
  {
    label: "Resources",
    children: [
      { label: "Publications", href: "/publications", icon: "fileText" },
      { label: "Buy Standards", href: "/buy-standards", icon: "bookOpen" },
      { label: "Careers", href: "/careers", icon: "briefcase" },
      { label: "FAQ", href: "/faq", icon: "helpCircle" },
    ],
  },
  {
    label: "Events & Media",
    children: [
      { label: "Essay Competition", href: "/essay-competition", icon: "award", highlight: true },
      { label: "Quality Awards", href: "/quality-awards", icon: "trophy", highlight: true },
      { label: "News & Announcements", href: "/news", icon: "newspaper" },
      { label: "Media Center", href: "/media", icon: "megaphone" },
      { label: "Event Calendar", href: "/events", icon: "calendar" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const siteSettings: SiteSettings = {
  organizationName: "Zambia Bureau of Standards",
  shortName: "ZABS",
  primaryPhone: "+260 777 764 420",
  primaryPhoneHref: "tel:+260777764420",
  secondaryPhone: "+260 211 231 987",
  secondaryPhoneHref: "tel:+260211231987",
  primaryEmail: "info@zabs.org.zm",
  primaryEmailHref: "mailto:info@zabs.org.zm",
  addressLines: [
    "Lechwe House, Freedom Way",
    "P.O. Box 31302, Lusaka, Zambia",
  ],
  topBarLocation: "Lechwe House, Freedom Way, Lusaka",
  socialLinks: [
    { id: "fb", name: "Facebook", href: "https://facebook.com/zambiastandards", iconClass: "fab fa-facebook-f", platform: "facebook", handle: "@zambiastandards", isActive: true },
    { id: "tw", name: "X", href: "#", iconClass: "fab fa-twitter", platform: "x", handle: "@zabs_zm", isActive: false },
    { id: "li", name: "LinkedIn", href: "#", iconClass: "fab fa-linkedin-in", platform: "linkedin", handle: "Zambia Bureau of Standards", isActive: false },
    { id: "yt", name: "YouTube", href: "#", iconClass: "fab fa-youtube", platform: "youtube", handle: "ZABS Zambia", isActive: false },
  ],
  footerLinkGroups: [
    {
      title: "About Us",
      links: [
        { label: "Who We Are", href: "/about" },
        { label: "Board of Directors", href: "/board" },
        { label: "History & Legislation", href: "/history" },
        { label: "Our Team", href: "/our-team" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { label: "Standards Development", href: "/standards-development" },
        { label: "Testing Laboratories", href: "/testing" },
        { label: "Certification", href: "/certification" },
        { label: "Training", href: "/training" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Publications", href: "/publications" },
        { label: "Buy Standards", href: "/buy-standards" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
  ],
  footerSummary:
    "Zambia's national standards body, driving quality, safety, and competitiveness across all sectors of the economy since 1982.",
  newsletterTitle: "Subscribe to ZABS Updates",
  newsletterDescription:
    "New standards, training schedules, and announcements delivered to your inbox.",
};
