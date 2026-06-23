import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Website Pages",
  },
  admin: {
    group: "Website Content",
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    description:
      "Manage standard content pages, policy pages, and campaign landing pages.",
  },
  versions: true,
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Overview",
          fields: [
            {
              type: "collapsible",
              label: "Page Identity",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "title",
                      label: "Page Title",
                      type: "text",
                      required: true,
                      admin: {
                        width: "60%",
                        description:
                          "Main title editors and visitors will see on this page.",
                      },
                    },
                    {
                      name: "pageType",
                      label: "Page Type",
                      type: "select",
                      options: [
                        { label: "Standard", value: "standard" },
                        { label: "Legal", value: "legal" },
                        { label: "Campaign", value: "campaign" },
                      ],
                      defaultValue: "standard",
                      admin: {
                        width: "40%",
                        description:
                          "Use this to separate normal pages from legal or campaign-focused content.",
                      },
                    },
                  ],
                },
                {
                  name: "slug",
                  label: "Page Slug",
                  type: "text",
                  required: true,
                  unique: true,
                  index: true,
                  admin: {
                    description:
                      "Website URL path. Use lowercase words separated by hyphens.",
                  },
                },
              ],
            },
            {
              type: "collapsible",
              label: "Publishing Status",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "status",
                  label: "Status",
                  type: "select",
                  options: [
                    { label: "Draft", value: "draft" },
                    { label: "Published", value: "published" },
                  ],
                  defaultValue: "draft",
                  required: true,
                  admin: {
                    description:
                      "Draft keeps the page in progress. Published marks it ready for live use.",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Hero",
          fields: [
            {
              type: "collapsible",
              label: "Hero Banner Copy",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "heroTitle",
                  label: "Hero Title",
                  type: "text",
                  admin: {
                    description: "Optional heading for the top banner section.",
                  },
                },
                {
                  name: "heroSubtitle",
                  label: "Hero Subtitle",
                  type: "textarea",
                  admin: {
                    description:
                      "Optional supporting copy shown below the hero title.",
                  },
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
              label: "Main Page Content",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "content",
                  label: "Page Content",
                  type: "richText",
                  editor: lexicalEditor({}),
                  required: true,
                  admin: {
                    description:
                      "Main page body. Use clear headings and short paragraphs for readability.",
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
                    description:
                      "Optional search title. Leave blank to reuse the page title.",
                  },
                },
                {
                  name: "seoDescription",
                  label: "SEO Description",
                  type: "textarea",
                  admin: {
                    description:
                      "Optional short summary for search engines and social previews.",
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