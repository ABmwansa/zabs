export type HeroImageAsset = {
  src: string;
  alt: string;
};

export type HeaderImageAsset = HeroImageAsset & {
  position?: string;
};

export type ShowcaseImageAsset = HeaderImageAsset & {
  title: string;
  description: string;
};

export const heroImageAssets = {
  standards: {
    src: "/images/site/industry.jpg",
    alt: "Industrial production line representing standards-driven manufacturing quality.",
  },
  testing: {
    src: "/images/site/testing-laboratories-1.jpg",
    alt: "ZABS laboratory analyst handling a prepared sample vial during testing.",
  },
  essayCompetition: {
    src: "/images/site/arso-essay-competition-1.jpg",
    alt: "ZABS essay competition winners and officials displaying certificates of recognition.",
  },
  qualityAwards: {
    src: "/images/site/quality-awards-3.jpg",
    alt: "Recipients being recognized on stage during the Zambia National Quality Awards.",
  },
} satisfies Record<string, HeroImageAsset>;

export const pageHeaderImages = {
  about: {
    src: "/images/site/independence-day-1.jpg",
    alt: "ZABS team members gathered during an institutional celebration.",
    position: "center 36%",
  },
  contact: {
    src: "/images/site/stakeholder-engagement.jpg",
    alt: "ZABS representatives meeting with stakeholders during an official engagement.",
    position: "center 24%",
  },
  essayCompetition: {
    src: "/images/site/arso-essay-competition-1.jpg",
    alt: "Winners and officials during the ZABS essay competition awards presentation.",
    position: "center 28%",
  },
  media: {
    src: "/images/site/regional-collaboration.jpg",
    alt: "Regional standards delegates gathered for a collaboration event.",
    position: "center 34%",
  },
  qualityAwards: {
    src: "/images/site/quality-awards-3.jpg",
    alt: "Recognition ceremony during the Zambia National Quality Awards programme.",
    position: "center 30%",
  },
  standardsDevelopment: {
    src: "/images/site/standards-development-2.jpg",
    alt: "Standards development meeting in progress at ZABS.",
    position: "center 26%",
  },
  testing: {
    src: "/images/site/testing-laboratories-3.jpg",
    alt: "Laboratory scientist performing analytical testing at a ZABS facility.",
    position: "center 24%",
  },
} satisfies Record<string, HeaderImageAsset>;

export const aboutCultureImages: ShowcaseImageAsset[] = [
  {
    src: "/images/site/labour-day-4.jpg",
    alt: "ZABS staff gathered outdoors during a Labour Day institutional event.",
    title: "Institutional Culture",
    description: "Public service, staff participation, and shared organisational identity are visible across ZABS events.",
    position: "center 28%",
  },
  {
    src: "/images/site/stakeholder-engagement.jpg",
    alt: "ZABS leadership and stakeholders during a formal engagement session.",
    title: "Stakeholder Engagement",
    description: "The organisation works through dialogue with public institutions, partners, and the wider standards ecosystem.",
    position: "center 22%",
  },
];

export const essayCompetitionImages: ShowcaseImageAsset[] = [
  {
    src: "/images/site/arso-essay-competition-1.jpg",
    alt: "Essay competition winners and officials displaying certificates in a formal group portrait.",
    title: "Recognition and Participation",
    description: "The competition creates visible recognition for students contributing thoughtful work on standards and trade.",
    position: "center 28%",
  },
  {
    src: "/images/site/arso-essay-competition-2.jpg",
    alt: "Essay competition award recipients standing with certificates at a ZABS backdrop.",
    title: "Certificate Presentation",
    description: "Shortlisted entrants and winners receive formal acknowledgement through public-facing ZABS events.",
    position: "center 24%",
  },
  {
    src: "/images/site/arso-essay-competition-3.jpg",
    alt: "Winner receiving an oversized prize cheque during the essay competition awards event.",
    title: "Prize Giving",
    description: "Cash prizes and institutional recognition make the competition feel credible, serious, and aspirational.",
    position: "center 20%",
  },
];

export const mediaShowcaseImages: ShowcaseImageAsset[] = [
  {
    src: "/images/site/memoranda-of-understanding-2.jpg",
    alt: "Formal signing ceremony between ZABS and an international counterpart.",
    title: "Memoranda of Understanding",
    description: "Partnership announcements and signing moments are strong media assets for institutional communications.",
    position: "center 26%",
  },
  {
    src: "/images/site/memoranda-of-understanding.jpg",
    alt: "ZABS officials holding signed cooperation documents during a formal agreement event.",
    title: "Cooperation Agreements",
    description: "Signed agreements communicate credibility, growth, and active collaboration with sector stakeholders.",
    position: "center 20%",
  },
  {
    src: "/images/site/regional-collaboration-2.jpg",
    alt: "Regional standards delegates posing at an ARSO collaboration event.",
    title: "Regional Collaboration",
    description: "Cross-border standards work strengthens the public perception of ZABS as a serious regional participant.",
    position: "center 18%",
  },
  {
    src: "/images/site/regional-collaboration.jpg",
    alt: "Large regional conference group gathered at an ARSO event venue.",
    title: "Conference Coverage",
    description: "Wide institutional event photography works well for media pages, annual reports, and partnership stories.",
    position: "center 30%",
  },
  {
    src: "/images/site/stakeholder-engagement.jpg",
    alt: "Official stakeholder engagement with ZABS representatives in a formal indoor setting.",
    title: "Stakeholder Engagement",
    description: "Professional engagement photography is valuable for news updates, partner pages, and homepage highlights.",
    position: "center 18%",
  },
  {
    src: "/images/site/labour-day-4.jpg",
    alt: "Staff group portrait captured during a ZABS Labour Day event.",
    title: "Team and Public Events",
    description: "Team event imagery adds warmth and authenticity to the institution's public media presence.",
    position: "center 26%",
  },
];

export const qualityAwardsImages: ShowcaseImageAsset[] = [
  {
    src: "/images/site/quality-awards-1.jpg",
    alt: "Award recipients posing with a trophy and certificate during the Zambia National Quality Awards.",
    title: "Award Winners",
    description: "Recognition photography gives the awards programme a premium and legitimate public identity.",
    position: "center 18%",
  },
  {
    src: "/images/site/quality-awards-3.jpg",
    alt: "Award presentation taking place on stage during the national quality awards ceremony.",
    title: "Ceremony in Motion",
    description: "Stage photography communicates scale, prestige, and the ceremonial character of the programme.",
    position: "center 34%",
  },
];

export const standardsDevelopmentImages: ShowcaseImageAsset[] = [
  {
    src: "/images/site/standards-development-2.jpg",
    alt: "Technical standards development meeting in progress inside a ZABS boardroom.",
    title: "Committee Deliberation",
    description: "Standards are built through technical discussion, review, and structured stakeholder participation.",
    position: "center 24%",
  },
  {
    src: "/images/site/standards-development-1.jpg",
    alt: "Printed agenda for a ZABS standards development technical committee session.",
    title: "Formal Documentation",
    description: "The standards process is documented, methodical, and designed for traceability and consensus.",
    position: "center 36%",
  },
];

export const testingLaboratoryImages: ShowcaseImageAsset[] = [
  {
    src: "/images/site/testing-laboratories-1.jpg",
    alt: "Close-up of a gloved hand holding a prepared sample vial in the laboratory.",
    title: "Sample Handling",
    description: "Close-up imagery highlights precision, care, and the technical nature of laboratory work.",
    position: "center 22%",
  },
  {
    src: "/images/site/testing-laboratories-2.jpg",
    alt: "Laboratory analyst examining a vial beside automated testing equipment.",
    title: "Instrument-Based Analysis",
    description: "Equipment-focused images reinforce the credibility of ZABS testing facilities and procedures.",
    position: "center 24%",
  },
  {
    src: "/images/site/testing-laboratories-3.jpg",
    alt: "Laboratory scientist carrying out analytical testing in a chemistry lab.",
    title: "Applied Laboratory Work",
    description: "Human-focused lab photography shows competent staff working within a technical testing environment.",
    position: "center 22%",
  },
  {
    src: "/images/site/testing-laboratories-4.jpg",
    alt: "Technician preparing gloves and equipment for product leakage testing.",
    title: "Specialised Testing",
    description: "These images are especially strong for explaining the range and seriousness of ZABS lab services.",
    position: "center 24%",
  },
];
