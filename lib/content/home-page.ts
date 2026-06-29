import type { AnnouncementItem, HeroSlide, IconCardItem, StatItem } from "@/lib/content/types";
import { heroImageAssets } from "@/lib/content/site-images";

export const homeHeroSlides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "Standards Act No. 4 of 2017",
    headline: "Elevating Zambia's Quality to Global Standards",
    subtext:
      "The Zambia Bureau of Standards drives quality, safety, and competitiveness across every sector of Zambia's economy.",
    backgroundImage: {
      url: heroImageAssets.standards.src,
      alt: heroImageAssets.standards.alt,
    },
    primaryCta: { label: "Get Certified", href: "/certification" },
    secondaryCta: { label: "Explore Standards", href: "/standards-development" },
    stat: { value: "500+", label: "Published Standards" },
  },
  {
    id: 2,
    eyebrow: "SADCAS Accredited Laboratories",
    headline: "State-of-the-Art Testing for Every Product",
    subtext:
      "Nine specialist laboratories providing ISO/IEC 17025 accredited testing services across chemistry, microbiology, petroleum, solar and more.",
    backgroundImage: {
      url: heroImageAssets.testing.src,
      alt: heroImageAssets.testing.alt,
    },
    primaryCta: { label: "Our Laboratories", href: "/testing" },
    secondaryCta: { label: "Submit Samples", href: "/contact" },
    stat: { value: "9", label: "Accredited Labs" },
  },
  {
    id: 3,
    eyebrow: "13th National Essay Competition",
    headline: "The Role of Harmonized Standards in Reducing Trade Barriers",
    subtext:
      "Open to all Zambian university and college students. Win up to K6,500 in cash prizes. Submissions close 31 March 2026.",
    backgroundImage: {
      url: heroImageAssets.essayCompetition.src,
      alt: heroImageAssets.essayCompetition.alt,
    },
    primaryCta: { label: "Enter Competition", href: "/essay-competition" },
    secondaryCta: { label: "Learn More", href: "/essay-competition" },
    stat: { value: "K6,500", label: "Top Prize" },
  },
  {
    id: 4,
    eyebrow: "11th Zambia National Quality Awards",
    headline: "Celebrating Excellence in Quality Management",
    subtext:
      "Nominations open for the 2026 Zambia National Quality Awards and Business Forum - recognising Zambia's quality champions.",
    backgroundImage: {
      url: heroImageAssets.qualityAwards.src,
      alt: heroImageAssets.qualityAwards.alt,
    },
    primaryCta: { label: "Nominate Now", href: "/quality-awards" },
    secondaryCta: { label: "View Categories", href: "/quality-awards" },
    stat: { value: "11th", label: "Annual Edition" },
  },
];

export const homeHeroSummaryStats = [
  { value: "500+", label: "Published Standards" },
  { value: "40+", label: "Years of Service" },
];

export const homeServices: IconCardItem[] = [
  {
    icon: "bookOpen",
    title: "Standards Development",
    description:
      "ZABS facilitates the development of national Zambia Standards across all sectors, from food safety to construction.",
    href: "/standards-development",
    label: "Learn More",
    color: "primary",
  },
  {
    icon: "flaskConical",
    title: "Testing Laboratories",
    description:
      "Nine SADCAS-accredited specialist laboratories providing reliable, traceable test results for industry.",
    href: "/testing",
    label: "Learn More",
    color: "secondary",
  },
  {
    icon: "shieldCheck",
    title: "Certification",
    description:
      "Product certification, management system certification, SADCAS schemes, EcoMark, and the ZABS Quality Mark.",
    href: "/certification",
    label: "Learn More",
    color: "primary",
  },
  {
    icon: "graduationCap",
    title: "Training",
    description:
      "ISO management systems training - ISO 9001, 14001, 45001, 22000, 17025, and 15 more courses.",
    href: "/training",
    label: "Learn More",
    color: "secondary",
  },
  {
    icon: "fileText",
    title: "Buy Standards",
    description:
      "Purchase Zambia Standards (ZS) covering every sector. Over 500 titles available in print and PDF.",
    href: "/buy-standards",
    label: "Learn More",
    color: "primary",
  },
  {
    icon: "award",
    title: "Quality Awards",
    description:
      "The annual Zambia National Quality Awards recognise exceptional quality and business excellence.",
    href: "/quality-awards",
    label: "Learn More",
    color: "secondary",
  },
];

export const aboutSectionContent = {
  title: "Zambia's National Standards Authority",
  description:
    "Established in 1982, ZABS implements the Standards Act No. 4 of 2017 - the statutory framework for quality assurance across all sectors of Zambia's economy. We work with government, industry, academia, and consumers to build a quality culture.",
  imageLabel: "Zambia's National Standards Body",
  imageSubLabel: "Est. 1982",
  floatingCards: [
    { value: "40+ Years", label: "of Excellence", icon: "calendar", color: "secondary" },
    { value: "ISO Member", label: "International Standards", icon: "trophy", color: "primary" },
  ],
  mandates: [
    "Develop, publish, and maintain Zambian National Standards",
    "Provide inspection, testing, and calibration services",
    "Operate voluntary and compulsory product certification schemes",
    "Promote quality, health, safety, and environmental standards",
    "Facilitate efficiency in industry and promote Zambian trade",
    "Represent Zambia in ISO, ARSO, SADCMET, and WTO/TBT",
  ],
  primaryCta: { label: "Learn More", href: "/about" },
  secondaryCta: { label: "Our History", href: "/history" },
};

export const homeStats: StatItem[] = [
  { value: "40+", label: "Years of Service", sub: "Est. 1982", icon: "trendingUp" },
  { value: "150+", label: "Certified Products", sub: "Across all sectors", icon: "shieldCheck" },
  { value: "9", label: "Test Laboratories", sub: "SADCAS accredited", icon: "flaskConical" },
  { value: "500+", label: "Standards Published", sub: "Zambian National Standards", icon: "bookOpen" },
  { value: "18+", label: "Training Courses", sub: "ISO management systems", icon: "graduationCap" },
  { value: "10", label: "Provinces Covered", sub: "National reach", icon: "globe" },
];

export const certificationSectionContent = {
  title: "The Sole Certification Authority in Zambia",
  description:
    "ZABS has certified over 150 different products - from food and beverages to construction materials and petroleum. Our SADCAS-accredited management system certification is recognised across the SADC region.",
  categories: [
    "Food and Beverages",
    "Soaps and Detergents",
    "Construction Materials",
    "Textiles & Paints",
    "Petroleum Products",
    "Agriculture Products",
    "Electrical Equipment",
    "Personal Protective Equipment",
  ],
  cards: [
    {
      title: "ZABS Quality Mark",
      description: "Product conformity verification for the Zambian market",
      icon: "shieldCheck",
      variant: "feature",
    },
    {
      title: "SADCAS Schemes",
      description: "Regionally recognised management system certification",
      icon: "globe",
      variant: "plain",
    },
    {
      title: "Apply for Certification",
      description: "Start your certification journey with ZABS today",
      icon: "target",
      variant: "cta",
      link: { label: "Request Quote", href: "/contact" },
    },
  ],
  primaryCta: { label: "View Certification Schemes", href: "/certification" },
};

export const homeAnnouncements: AnnouncementItem[] = [
  {
    icon: "award",
    tag: "Competition",
    tagColor: "primary",
    title: "13th National Essay Writing Competition",
    description:
      "Students from higher learning institutions are invited. Theme: harmonized standards in reducing Technical Barriers to Trade.",
    href: "/essay-competition",
    label: "Read More",
  },
  {
    icon: "trophy",
    tag: "Awards",
    tagColor: "secondary",
    title: "11th Zambia National Quality Awards 2026",
    description:
      "Celebrating outstanding quality management and business excellence. Nominate your organisation before the deadline.",
    href: "/quality-awards",
    label: "Read More",
  },
  {
    icon: "users",
    tag: "Careers",
    tagColor: "primary",
    title: "Join the ZABS Team",
    description:
      "ZABS invites suitably qualified candidates to fill vacant positions in standardisation, certification, and testing.",
    href: "/careers",
    label: "Read More",
  },
];

export const homeAnnouncementsHeader = {
  title: "News & Opportunities",
  description:
    "Stay informed about competitions, awards, and career opportunities at ZABS",
  allUpdatesCta: { label: "All Updates", href: "/contact" },
};

export const homePartners = ["ISO", "ARSO", "SADCAS", "SADCMET", "WTO/TBT", "PASC", "COMESA", "AfCFTA"];

export const homeCtaSection = {
  eyebrow: "Get Started Today",
  title: "Ready to Elevate Your Standards?",
  description:
    "Whether you need certification, laboratory testing, training, or standards information - ZABS is ready to assist your organisation achieve quality excellence.",
  primaryCta: { label: "Contact Us", href: "/contact" },
  secondaryCta: { label: "Browse Standards", href: "/buy-standards" },
};
