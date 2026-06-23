import type { LinkItem, MilestoneItem, QuickStatItem, TeamMember, ValueItem } from "@/lib/content/types";

export const aboutPageContent = {
  header: {
    title: "Who Are We",
    description:
      "The Zambia Bureau of Standards (ZABS) is a statutory body under the Ministry of Commerce Trade and Industry established in 1982 by an Act of Parliament.",
    breadcrumbs: [{ label: "About Us" }],
    badge: "Who We Are",
  },
  intro: {
    badge: "Who We Are",
    title: "The Zambia Bureau of Standards (ZABS)",
    quote:
      '"ZABS role is focused towards supporting industry to implement standards that enhance the quality of products and services for industry growth and competitiveness."',
    paragraphs: [
      "The Zambia Bureau of Standards is a statutory body under the Ministry of Commerce Trade and Industry established in 1982 by an Act of Parliament. It implements the Standards Act No. 4 of 2017 of the laws of Zambia which repealed CAP 416 of 1994.",
      "With the realignment of the National Quality Infrastructure (NQI) in 2018, to international best practices, ZABS role is now more focused towards supporting industry to implement standards that enhance the quality of products and services for industry growth and competitiveness.",
      "The Zambia Bureau of Standards (ZABS) collaborates with National Standards Bodies within the Southern Africa Development Community (SADC) Region to harmonize standards and conformity assessment procedures, reducing technical barriers to trade and supporting more consistent product and service requirements.",
      "Over the years ZABS has carried on its role of developing standards and providing conformity assessment services to industry.",
    ],
  },
  quickStats: [
    { value: "1982", label: "Year Established", icon: "calendar" },
    { value: "2017", label: "Current Standards Act", icon: "bookOpen" },
    { value: "2018", label: "NQI Realignment", icon: "shield" },
  ] satisfies QuickStatItem[],
  highlights: [
    {
      year: "1982",
      title: "Established by Act of Parliament",
      description: "ZABS was established in 1982 and under CAP 416 was responsible for standards development, enforcement of compulsory standards, testing, certification, and metrology services.",
      icon: "calendar",
      color: "primary",
    },
    {
      year: "2018",
      title: "National Quality Infrastructure Realignment",
      description: "ZABS role was refined to align with international best practices and deepen support for industry competitiveness.",
      icon: "target",
      color: "secondary",
    },
    {
      year: "2017",
      title: "Standards Act No. 4 of 2017",
      description: "The current legal framework guiding ZABS operations and replacing CAP 416 of 1994.",
      icon: "shield",
      color: "primary",
    },
  ],
  memberships: [
    { label: "Member of", value: "ISO, IEC, ARSO", icon: "globe", color: "primary" },
    { label: "Accredited by", value: "SADCAS", icon: "trophy", color: "secondary" },
  ],
  principles: {
    badge: "Vision And Mission",
    title: "Mission, Vision & Values",
    description: "These statements and values guide our daily operations and interactions with stakeholders.",
    mission:
      "Our mission is to promote Standardisation and Quality Assurance services for a competitive industry.",
    vision:
      "Our vision is to become a globally recognized institution of excellence in promoting quality goods and services for improved lives.",
  },
  values: [
    {
      icon: "eye",
      title: "Transparency",
      description: "We uphold transparency on the processes and procedures and are open to sharing information with each other and the general public related to our core business.",
      color: "primary",
    },
    {
      icon: "shield",
      title: "Accountability",
      description: "We are responsible for every action taken or omission made in the course of duty and are liable to any consequences.",
      color: "secondary",
    },
    {
      icon: "users",
      title: "Customer Focus",
      description: "We put our customers at the center and every decision we make is influenced by the impact and value it will create on the customer.",
      color: "primary",
    },
    {
      icon: "globe",
      title: "Collaboration",
      description: "We work together as a united force among ourselves and with our cooperative partners for the effective implementation of programmes.",
      color: "secondary",
    },
    {
      icon: "target",
      title: "Innovation",
      description: "We are motivated to create new ways of doing business by coming up with new ideas, methods and concepts to improve service delivery and stay up to date with the ever-changing world.",
      color: "primary",
    },
    {
      icon: "heart",
      title: "Integrity",
      description: "We are honest, morally upright and conduct ourselves beyond reproach. We conduct our business in an objective manner adhering to the prescribed standards.",
      color: "secondary",
    },
  ] satisfies ValueItem[],
  mandate: {
    badge: "Legal Framework",
    title: "Our Mandate",
    description: "As stipulated under the Standards Act No. 4 of 2017",
    items: [
      "Develop, publish, maintain, or withdraw Zambian National Standards and related normative publications serving the standardization needs for Zambia.",
      "Provide inspection services, testing services and system and product certification.",
      "Provide a voluntary certification mark scheme for the assurance of product conformity to standards.",
      "Promote quality, health and safety standards for commodities, products and services.",
      "Facilitate efficiency in industry and promote trade through standardization.",
      "Provide for a Research and Development program for new standards, improvement of existing standards, standardization of test methodology and the articulation of future needs that might affect the standards environment.",
    ],
  },
  milestones: [
    { year: "1982", title: "ZABS Established", description: "Established by an Act of Parliament under the Ministry of Commerce Trade and Industry.", icon: "calendar" },
    { year: "1994", title: "CAP 416", description: "CAP 416 provided the earlier legal framework for standards, enforcement, testing, certification, and metrology responsibilities.", icon: "bookOpen" },
    { year: "2017", title: "Standards Act No. 4", description: "A new legal framework was enacted, repealing CAP 416 of 1994.", icon: "shield" },
    { year: "2018", title: "NQI Realignment", description: "ZABS role was realigned to international best practices within Zambia's National Quality Infrastructure.", icon: "award" },
  ] satisfies MilestoneItem[],
  organisationBrief: {
    title: "Want to know more about us?",
    description: "Download our organisation brief.",
    cta: {
      label: "ZABS Service Profile",
      href: "https://www.zabs.org.zm/",
    },
  },
  partners: {
    badge: "Partner Organisations",
    title: "Institutional And Regional Links",
    description: "ZABS works with national, regional, and international institutions that strengthen quality infrastructure, standards harmonisation, and trade facilitation.",
    links: [
      { label: "Ministry of Commerce Trade and Industry", href: "https://www.mcti.gov.zm/" },
      { label: "Zambia Development Agency", href: "https://www.zda.org.zm/" },
      { label: "Zambia Compulsory Standards Agency", href: "https://www.zcsa.org.zm/" },
      { label: "International Organization for Standardization", href: "https://www.iso.org/" },
      { label: "African Organization for Standardization", href: "https://www.arso-oran.org/" },
      { label: "Zambia Metrology Agency", href: "https://www.zma.org.zm/" },
    ] satisfies LinkItem[],
  },
  team: {
    badge: "Leadership",
    title: "Our Leadership Team",
    description:
      "Dedicated professionals driving ZABS' mission forward with expertise and commitment",
    members: [
      { name: "Dr. Lubasi Siamwiza", title: "Director General", dept: "Management", qualifications: "PhD, MBA" },
      { name: "Mr. Emmanuel Chifita", title: "Director - Standards", dept: "Standards", qualifications: "MSc, BEng" },
      { name: "Ms. Mwiche Kabimba", title: "Director - Testing", dept: "Testing", qualifications: "MSc Chemistry" },
      { name: "Mr. Kaunda Phiri", title: "Director - Certification", dept: "Certification", qualifications: "MBA, BSc" },
      { name: "Ms. Patricia Mwansa", title: "Director - Finance", dept: "Finance", qualifications: "FCCA, MBA" },
      { name: "Mr. Charles Zulu", title: "Director - HR", dept: "Human Resources", qualifications: "MA HRM" },
    ] satisfies TeamMember[],
  },
  cta: {
    eyebrow: "Partner With Us",
    title: "Partner with ZABS for Quality Excellence",
    description:
      "Connect with Zambia's national standards body and elevate your products and services to meet world-class standards.",
    primaryCta: { label: "Contact Us", href: "/contact" },
    secondaryCta: { label: "View Our Services", href: "/certification" },
  },
};
