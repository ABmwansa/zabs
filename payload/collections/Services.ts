import type { CollectionBeforeValidateHook, CollectionConfig } from "payload";

import { formatSlug } from "@/payload/utilities/formatSlug";

const setServiceSlug: CollectionBeforeValidateHook = ({ data }) => {
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

export const Services: CollectionConfig = {
  slug: "services",
  defaultSort: "displayOrder",
  labels: {
    singular: "Service",
    plural: "Services",
  },
  admin: {
    group: "Services",
    useAsTitle: "title",
    defaultColumns: [
      "title",
      "serviceCategory",
      "displayOrder",
      "featuredService",
      "updatedAt",
    ],
    description:
      "Manage public-facing services, features, and call-to-action content for the website.",
  },
  versions: true,
  hooks: {
    beforeValidate: [setServiceSlug],
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
              label: "Service Identity",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "title",
                      label: "Service Title",
                      type: "text",
                      required: true,
                      admin: {
                        width: "60%",
                        description: "Public service title shown in listings, cards, and detail pages.",
                        placeholder: "Product Certification",
                      },
                    },
                    {
                      name: "serviceCategory",
                      label: "Service Category",
                      type: "text",
                      admin: {
                        width: "40%",
                        description: "Simple grouping label such as Certification, Testing, or Training.",
                        placeholder: "Certification",
                      },
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "slug",
                      label: "Service Slug",
                      type: "text",
                      required: true,
                      unique: true,
                      index: true,
                      admin: {
                        width: "50%",
                        description: "Clean URL path. It is normalized automatically before save.",
                        placeholder: "product-certification",
                      },
                    },
                    {
                      name: "displayOrder",
                      label: "Display Order",
                      type: "number",
                      defaultValue: 0,
                      admin: {
                        width: "25%",
                        description: "Lower numbers appear first in service lists.",
                      },
                    },
                    {
                      name: "featuredService",
                      label: "Featured Service",
                      type: "checkbox",
                      defaultValue: false,
                      admin: {
                        width: "25%",
                        description: "Highlight this service on the homepage or featured panels.",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Content",
          fields: [
            {
              type: "collapsible",
              label: "Summary and Full Copy",
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
                    description: "Short summary used in service cards, grids, and quick previews.",
                    placeholder:
                      "Briefly explain what this service provides and why it matters to the visitor.",
                  },
                },
                {
                  name: "fullDescription",
                  label: "Full Description",
                  type: "richText",
                  required: true,
                  admin: {
                    description: "Detailed service explanation for the full service page.",
                  },
                },
              ],
            },
            {
              type: "collapsible",
              label: "Call To Action",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "ctaText",
                      label: "Call To Action Text",
                      type: "text",
                      admin: {
                        width: "50%",
                        description: "Button or link text that guides the visitor to the next step.",
                        placeholder: "Request this service",
                      },
                    },
                    {
                      name: "ctaLink",
                      label: "Call To Action Link",
                      type: "text",
                      admin: {
                        width: "50%",
                        description: "Internal path or full external URL for the CTA.",
                        placeholder: "/contact",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Features",
          fields: [
            {
              type: "collapsible",
              label: "Service Feature List",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "serviceFeatures",
                  label: "Service Features",
                  type: "array",
                  labels: {
                    singular: "Feature",
                    plural: "Feature List",
                  },
                  admin: {
                    description: "Add the key benefits, steps, or service highlights you want to display.",
                  },
                  fields: [
                    {
                      name: "item",
                      label: "Feature Item",
                      type: "text",
                      required: true,
                      admin: {
                        placeholder: "Conformity assessment and verification",
                      },
                    },
                  ],
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
              label: "Service Icon or Image",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "iconOrImage",
                  label: "Icon or Image",
                  type: "relationship",
                  relationTo: "media",
                  admin: {
                    description:
                      "Choose the icon or supporting image for this service. Use a clean, legible graphic where possible.",
                  },
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
                    description: "Optional search title used for search engines and social previews.",
                    placeholder: "Product Certification Services | ZABS",
                  },
                },
                {
                  name: "seoDescription",
                  label: "SEO Description",
                  type: "textarea",
                  admin: {
                    description: "Short search summary used in snippets and social sharing cards.",
                    placeholder:
                      "Discover how ZABS product certification supports compliance, trust, and market access.",
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
