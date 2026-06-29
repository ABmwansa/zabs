import type { CollectionBeforeValidateHook, CollectionConfig } from "payload";

import { formatSlug } from "@/payload/utilities/formatSlug";

const setTeamSlug: CollectionBeforeValidateHook = ({ data }) => {
  if (!data) {
    return data;
  }

  const source =
    typeof data.slug === "string" && data.slug.length > 0
      ? data.slug
      : typeof data.fullName === "string"
        ? data.fullName
        : "";

  return {
    ...data,
    slug: formatSlug(source),
  };
};

export const Team: CollectionConfig = {
  slug: "team",
  defaultSort: "displayOrder",
  labels: {
    singular: "Team Member",
    plural: "Team",
  },
  admin: {
    group: "Team",
    useAsTitle: "fullName",
    defaultColumns: [
      "fullName",
      "position",
      "department",
      "isActive",
      "displayOrder",
    ],
    description:
      "Manage leadership, department contacts, and team profiles shown on the public website.",
  },
  versions: true,
  hooks: {
    beforeValidate: [setTeamSlug],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Profile",
          fields: [
            {
              type: "collapsible",
              label: "Basic Profile",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "slug",
                      label: "Profile Slug",
                      type: "text",
                      required: true,
                      unique: true,
                      index: true,
                      admin: {
                        width: "35%",
                        description: "Clean URL path used for team profile links. It is normalized automatically before save.",
                        placeholder: "margaret-k-chileshe",
                      },
                    },
                    {
                      name: "fullName",
                      label: "Full Name",
                      type: "text",
                      required: true,
                      admin: {
                        width: "40%",
                        description: "Full staff or leadership name displayed on the public site.",
                        placeholder: "Margaret K. Chileshe",
                      },
                    },
                    {
                      name: "position",
                      label: "Position / Job Title",
                      type: "text",
                      required: true,
                      admin: {
                        width: "45%",
                        description: "Job title shown on the profile card.",
                        placeholder: "Director of Standards Development",
                      },
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "teamGroup",
                      label: "Team Group",
                      type: "select",
                      required: true,
                      options: [
                        { label: "Board of Directors", value: "board" },
                        { label: "Management Team", value: "executive" },
                        { label: "Directors", value: "directors" },
                        { label: "Managers", value: "managers" },
                      ],
                      admin: {
                        width: "45%",
                        description: "Controls which public section this profile appears in.",
                      },
                    },
                    {
                      name: "department",
                      label: "Department",
                      type: "text",
                      admin: {
                        width: "55%",
                        description: "Department or unit the team member belongs to.",
                        placeholder: "Standards Development",
                      },
                    },
                  ],
                },
                {
                  name: "shortBio",
                  label: "Short Bio",
                  type: "textarea",
                  admin: {
                    description: "Short biography or professional summary for the public team page.",
                    placeholder:
                      "A concise profile describing the team member's role, experience, and public-facing responsibilities.",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Contact",
          fields: [
            {
              type: "collapsible",
              label: "Contact Information",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "email",
                      label: "Email Address",
                      type: "email",
                      admin: {
                        width: "50%",
                        description: "Primary contact email, where it should be visible publicly.",
                        placeholder: "name@zabs.org.zm",
                      },
                    },
                    {
                      name: "phoneNumber",
                      label: "Phone Number",
                      type: "text",
                      admin: {
                        width: "50%",
                        description: "Optional public phone number.",
                        placeholder: "+260 211 221 386",
                      },
                    },
                  ],
                },
                {
                  name: "profileLink",
                  label: "LinkedIn / Profile Link",
                  type: "text",
                  admin: {
                    description: "LinkedIn or another approved professional profile URL.",
                    placeholder: "https://www.linkedin.com/in/...",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Media",
          fields: [
            {
              type: "collapsible",
              label: "Profile Photo",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "profilePhoto",
                  label: "Profile Photo",
                  type: "relationship",
                  relationTo: "media",
                  admin: {
                    description:
                      "Professional portrait used on team cards and profile sections. Use a clear portrait image where possible.",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Settings",
          fields: [
            {
              type: "collapsible",
              label: "Display Settings",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "displayOrder",
                      label: "Display Order",
                      type: "number",
                      defaultValue: 0,
                      admin: {
                        width: "50%",
                        description: "Lower numbers appear first on the frontend team list.",
                      },
                    },
                    {
                      name: "isActive",
                      label: "Active Profile",
                      type: "checkbox",
                      defaultValue: true,
                      admin: {
                        width: "50%",
                        description: "Turn this off to hide the profile without deleting it.",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
