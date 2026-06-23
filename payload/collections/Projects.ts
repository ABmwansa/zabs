import type { CollectionBeforeValidateHook, CollectionConfig } from "payload";

import { formatSlug } from "@/payload/utilities/formatSlug";

const setProjectSlug: CollectionBeforeValidateHook = ({ data }) => {
  if (!data) {
    return data;
  }

  const source =
    typeof data.slug === "string" && data.slug.length > 0
      ? data.slug
      : typeof data.title === "string"
        ? data.title
        : "";

  return {
    ...data,
    slug: formatSlug(source),
  };
};

export const Projects: CollectionConfig = {
  slug: "projects",
  defaultSort: "displayOrder",
  labels: {
    singular: "Project",
    plural: "Projects",
  },
  admin: {
    group: "Projects",
    useAsTitle: "title",
    defaultColumns: [
      "title",
      "projectCategory",
      "projectStatus",
      "featuredProject",
      "updatedAt",
    ],
    description:
      "Manage portfolio projects, case studies, and featured delivery work for the public website.",
  },
  versions: true,
  hooks: {
    beforeValidate: [setProjectSlug],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Overview",
          fields: [
            {
              type: "collapsible",
              label: "Project Identity",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "title",
                      label: "Project Title",
                      type: "text",
                      required: true,
                      admin: {
                        width: "60%",
                        description: "Public project title used on listings and detail pages.",
                        placeholder: "Lusaka Regional Testing Centre Upgrade",
                      },
                    },
                    {
                      name: "projectCategory",
                      label: "Project Category",
                      type: "select",
                      required: true,
                      options: [
                        { label: "Buildings", value: "buildings" },
                        { label: "Civil", value: "civil" },
                        { label: "Industrial", value: "industrial" },
                        { label: "Road Works", value: "road-works" },
                        { label: "Consultancy", value: "consultancy" },
                      ],
                      admin: {
                        width: "40%",
                        description: "Main category used in filters and portfolio groupings.",
                      },
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "slug",
                      label: "Project Slug",
                      type: "text",
                      required: true,
                      unique: true,
                      index: true,
                      admin: {
                        width: "50%",
                        description: "Clean URL path. It is normalized automatically before save.",
                        placeholder: "lusaka-regional-testing-centre-upgrade",
                      },
                    },
                    {
                      name: "projectStatus",
                      label: "Project Status",
                      type: "select",
                      required: true,
                      defaultValue: "current",
                      options: [
                        { label: "Current", value: "current" },
                        { label: "Completed", value: "completed" },
                        { label: "Upcoming", value: "upcoming" },
                      ],
                      admin: {
                        width: "25%",
                        description: "Current delivery stage shown on the public site.",
                      },
                    },
                    {
                      name: "displayOrder",
                      label: "Display Order",
                      type: "number",
                      defaultValue: 0,
                      admin: {
                        width: "25%",
                        description: "Lower numbers appear first in manual lists.",
                      },
                    },
                  ],
                },
                {
                  name: "featuredProject",
                  label: "Featured Project",
                  type: "checkbox",
                  defaultValue: false,
                  admin: {
                    description: "Highlight this project on the homepage and featured project sections.",
                  },
                },
              ],
            },
            {
              type: "collapsible",
              label: "Short Summary",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "shortDescription",
                  label: "Short Description",
                  type: "textarea",
                  required: true,
                  admin: {
                    description: "Concise summary for cards, sliders, and project listing previews.",
                    placeholder:
                      "A concise overview of the project scope, client benefit, and delivery outcome.",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Details",
          fields: [
            {
              type: "collapsible",
              label: "Project Narrative",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "fullDescription",
                  label: "Full Description",
                  type: "richText",
                  required: true,
                  admin: {
                    description:
                      "Full project narrative, scope, results, and technical delivery information.",
                  },
                },
              ],
            },
            {
              type: "collapsible",
              label: "Client and Delivery Context",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "clientName",
                      label: "Client Name",
                      type: "text",
                      admin: {
                        width: "50%",
                        description: "Client, partner, or commissioning body.",
                        placeholder: "Zambia Bureau of Standards",
                      },
                    },
                    {
                      name: "location",
                      label: "Project Location",
                      type: "text",
                      admin: {
                        width: "50%",
                        description: "City, province, site, or operating area.",
                        placeholder: "Lusaka, Zambia",
                      },
                    },
                  ],
                },
                {
                  name: "keyServicesInvolved",
                  label: "Key Services Involved",
                  type: "relationship",
                  relationTo: "services",
                  hasMany: true,
                  admin: {
                    description: "Link the service entries that contributed to this project.",
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
              label: "Featured Image",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "featuredImage",
                  label: "Featured Image",
                  type: "relationship",
                  relationTo: "media",
                  admin: {
                    description:
                      "Primary project image used on listings, hero panels, and detail page headers. Use a clear landscape image where possible.",
                  },
                },
              ],
            },
            {
              type: "collapsible",
              label: "Project Gallery",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "galleryImages",
                  label: "Gallery Images",
                  type: "relationship",
                  relationTo: "media",
                  hasMany: true,
                  admin: {
                    description:
                      "Optional supporting images for project detail pages, case studies, and gallery sections.",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Timeline",
          fields: [
            {
              type: "collapsible",
              label: "Project Dates",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "startDate",
                      label: "Start Date",
                      type: "date",
                      admin: {
                        width: "50%",
                        description: "Project commencement date.",
                      },
                    },
                    {
                      name: "completionDate",
                      label: "Completion Date",
                      type: "date",
                      admin: {
                        width: "50%",
                        description: "Planned or actual completion date.",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "SEO",
          fields: [
            {
              type: "collapsible",
              label: "Search Preview",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "seoTitle",
                  label: "SEO Title",
                  type: "text",
                  admin: {
                    description: "Optional search title for Google results and social sharing cards.",
                    placeholder: "Lusaka Regional Testing Centre Upgrade | ZABS",
                  },
                },
                {
                  name: "seoDescription",
                  label: "SEO Description",
                  type: "textarea",
                  admin: {
                    description: "Short search summary for previews and search engine snippets.",
                    placeholder:
                      "Learn how this project strengthened quality infrastructure and operational capacity.",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
