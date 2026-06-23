import type { CollectionConfig } from "payload";

export const News: CollectionConfig = {
  slug: "news",
  labels: {
    singular: "News Story",
    plural: "News & Updates",
  },
  admin: {
    group: "Blog / News",
    useAsTitle: "title",
    defaultColumns: ["title", "category", "publishedAt", "status"],
    description:
      "Publish official announcements, stories, and notices for the public website.",
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
              label: "Story Identity",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "title",
                      label: "Story Title",
                      type: "text",
                      required: true,
                      admin: {
                        width: "60%",
                        description: "Headline for the story or announcement.",
                        placeholder: "ZABS launches new certification programme",
                      },
                    },
                    {
                      name: "category",
                      label: "Category",
                      type: "text",
                      required: true,
                      admin: {
                        width: "40%",
                        description: "Simple category label for editors and visitors.",
                        placeholder: "Announcement",
                      },
                    },
                  ],
                },
                {
                  name: "slug",
                  label: "Story Slug",
                  type: "text",
                  required: true,
                  unique: true,
                  index: true,
                  admin: {
                    description: "Public URL path for this article.",
                    placeholder: "zabs-launches-new-certification-programme",
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
              label: "Preview Copy",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "summary",
                  label: "Summary",
                  type: "textarea",
                  required: true,
                  admin: {
                    description: "Short summary used in cards, previews, and listings.",
                  },
                },
                {
                  name: "excerpt",
                  label: "Short Excerpt",
                  type: "textarea",
                  admin: {
                    description: "Optional shorter teaser when you need a compact preview.",
                  },
                },
              ],
            },
            {
              type: "collapsible",
              label: "Full Story",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "content",
                  label: "Story Content",
                  type: "richText",
                  admin: {
                    description: "Full article body. Use sections and clear subheadings.",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Media & Publishing",
          fields: [
            {
              type: "collapsible",
              label: "Publishing Status",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "publishedAt",
                      label: "Published Date",
                      type: "date",
                      required: true,
                      admin: {
                        width: "50%",
                        description: "Publication date shown to visitors.",
                      },
                    },
                    {
                      name: "status",
                      label: "Status",
                      type: "select",
                      defaultValue: "draft",
                      options: [
                        { label: "Draft", value: "draft" },
                        { label: "Published", value: "published" },
                        { label: "Archived", value: "archived" },
                      ],
                      admin: {
                        width: "50%",
                        description: "Use draft while reviewing, then publish when approved.",
                      },
                    },
                  ],
                },
                {
                  name: "featured",
                  label: "Featured Story",
                  type: "checkbox",
                  defaultValue: false,
                  admin: {
                    description: "Highlight this story in featured sections where available.",
                  },
                },
              ],
            },
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
                      "Main visual used on article cards, listing pages, and the story header. Use a clean landscape image where possible.",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Source",
          fields: [
            {
              type: "collapsible",
              label: "Source Tracking",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "sourceType",
                  label: "Source Type",
                  type: "select",
                  defaultValue: "manual",
                  options: [
                    { label: "Manual", value: "manual" },
                    { label: "Synced", value: "synced" },
                  ],
                  admin: {
                    description: "Use synced when the item originated from a connected platform.",
                  },
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "sourcePlatform",
                      label: "Source Platform",
                      type: "select",
                      defaultValue: "internal",
                      options: [
                        { label: "Internal", value: "internal" },
                        { label: "Facebook", value: "facebook" },
                        { label: "LinkedIn", value: "linkedin" },
                        { label: "YouTube", value: "youtube" },
                        { label: "X", value: "x" },
                        { label: "Other", value: "other" },
                      ],
                      admin: {
                        width: "50%",
                        description: "Where this story came from.",
                      },
                    },
                    {
                      name: "sourceUrl",
                      label: "Original Source URL",
                      type: "text",
                      admin: {
                        width: "50%",
                        description: "Optional original source link.",
                        placeholder: "https://...",
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
