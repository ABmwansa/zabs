import type { LinkItem, TeamGroup, TeamPageContent, TeamProfile } from "@/lib/content/types";

export const teamPageContent: TeamPageContent = {
  boardPage: {
    title: "Meet our Board of Directors",
    description:
      "Meet the board members who provide strategic direction, governance, and oversight for ZABS.",
    badge: "Board Of Directors",
  },
  teamPage: {
    title: "Meet our Team",
    description:
      "Meet our leadership and staff, who are dedicated to helping you achieve compliance, ensure quality, and promote the sustainability of our nation's industries.",
    badge: "Management And Staff",
  },
  sections: {
    board: {
      title: "Board of Directors",
      description:
        "Our esteemed board members who provide strategic direction and oversight for ZABS.",
      summary: "Board of Directors: 6 members",
    },
    executive: {
      title: "Management Team",
      description:
        "Our dedicated management team committed to implementing standards and ensuring quality across Zambia.",
    },
    directors: {
      title: "Directors",
      description:
        "Senior directors leading finance, standards, laboratories, governance, and human resource administration.",
    },
    managers: {
      title: "Managers",
      description:
        "Managers supporting legal, certification, standards development, and training delivery.",
    },
  },
};

export const teamMembers: TeamProfile[] = [
  {
    id: "mbobe-c-nyondo",
    group: "board",
    name: "Mbobe C. Nyondo",
    position: "Board Chairperson",
    image: "/images/team/mbobe-c-nyondo.webp",
    summary: "Provides strategic leadership and oversight for the Board of Directors.",
  },
  {
    id: "fronscen-h-chisanga",
    group: "board",
    name: "Fronscen H. Chisanga",
    position: "Vice Chairperson",
    image: "/images/team/fronscen-h-chisanga.webp",
  },
  {
    id: "dr-beatrice-botha",
    group: "board",
    name: "Dr. Beatrice Botha",
    position: "Board Member",
    image: "/images/team/dr-beatrice-botha.webp",
  },
  {
    id: "musyani-siwelwa",
    group: "board",
    name: "Musyani Siwelwa",
    position: "Board Member",
    image: "/images/team/musyani-siwelwa.webp",
  },
  {
    id: "gomeli-h-litana",
    group: "board",
    name: "Gomeli H. Litana",
    position: "Board Member",
    image: null,
    placeholderIcon: "user",
  },
  {
    id: "pamela-nakombe",
    group: "board",
    name: "Pamela Nakombe",
    position: "Board Member",
    image: null,
    placeholderIcon: "user",
  },
  {
    id: "nathan-singambwa",
    group: "executive",
    name: "Nathan Sing'ambwa",
    position: "Executive Director",
    image: "/images/team/nathan-singambwa.webp",
    summary: "Executive lead for the management team and institutional delivery.",
  },
  {
    id: "alex-mubita",
    group: "directors",
    name: "Alex Mubita",
    position: "Director Finance and Corporate Services",
    image: "/images/team/alex-mubita.webp",
  },
  {
    id: "belinda-s-kancheya",
    group: "directors",
    name: "Belinda S. Kancheya",
    position: "Director Standards and Certification",
    image: "/images/team/belinda-s-kancheya.webp",
  },
  {
    id: "vincent-numbwa",
    group: "directors",
    name: "Vincent Numbwa",
    position: "Director Audit Risk and Compliance/Board Secretary",
    image: "/images/team/vincent-numbwa.webp",
  },
  {
    id: "dickens-chisengalumbwe",
    group: "directors",
    name: "Dickens Chisengalumbwe",
    position: "Director Testing Laboratories",
    image: "/images/team/dickens-chisengalumbwe.webp",
  },
  {
    id: "monde-m-kanyanga",
    group: "directors",
    name: "Monde M. Kanyanga",
    position: "Director Human Resource & Administration",
    image: "/images/team/monde-m-kanyanga.webp",
  },
  {
    id: "chrispin-hampungani",
    group: "managers",
    name: "Chrispin Hampungani",
    position: "Legal Counsel",
    image: "/images/team/chrispin-hampungani.jpeg",
  },
  {
    id: "sarah-shawa",
    group: "managers",
    name: "Sarah Shawa",
    position: "Certification Manager",
    image: "/images/team/sarah-shawa.webp",
  },
  {
    id: "stephen-mazimba",
    group: "managers",
    name: "Stephen Mazimba",
    position: "Standards Development and Training Manager",
    image: "/images/team/stephen-mazimba.webp",
  },
];

export function getTeamMembersByGroup(group: TeamGroup) {
  return teamMembers.filter((member) => member.group === group);
}

export function getTeamMemberById(id: string) {
  return teamMembers.find((member) => member.id === id);
}

export function getTeamGroupLabel(group: TeamGroup) {
  switch (group) {
    case "board":
      return "Board of Directors";
    case "executive":
      return "Management Team";
    case "directors":
      return "Directors";
    case "managers":
      return "Managers";
    default:
      return "Team";
  }
}

export function getTeamDirectoryLink(group: TeamGroup): LinkItem {
  if (group === "board") {
    return { label: "Board of Directors", href: "/board" };
  }

  return { label: "Our Team", href: "/our-team" };
}
