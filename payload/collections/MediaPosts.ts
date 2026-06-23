import type { CollectionConfig } from "payload";

export const MediaPosts: CollectionConfig = {
  slug: "media-posts",
  labels: {
    singular: "Media Post",
    plural: "Media & Press",
  },
  admin: {
    group: "Blog / News",
    useAsTitle: "title",
    defaultColumns: ["title", "mediaType", "publishedAt", "status"],
    description: "Manage press releases, gallery posts, and multimedia updates.",
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
              label: "Post Identity",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "title",
                      label: "Post Title",
                      type: "text",
                      required: true,
                      admin: {
                        width: "60%",
                        description: "Headline for the media item or press update.",
                        placeholder: "ZABS media briefing on product quality awareness",
                      },
                    },
                    {
                      name: "mediaType",
                      label: "Media Type",
                      type: "select",
                      required: true,
                      options: [
                        { label: "Video", value: "video" },
                        { label: "Photo", value: "photo" },
                        { label: "Press Release", value: "press-release" },
                        { label: "Gallery", value: "gallery" },
                      ],
                      admin: {
                        width: "40%",
                        description: "Choose the format that best matches this update.",
                      },
                    },
                  ],
                },
                {
                  name: "slug",
                  label: "Post Slug",
                  type: "text",
                  required: true,
                  unique: true,
                  index: true,
                  admin: {
                    description: "Public URL path for this media post.",
                    placeholder: "zabs-media-briefing-on-product-quality-awareness",
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
              label: "Summary and Full Copy",
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
                    description: "Short summary used in media cards, previews, and listings.",
                  },
                },
                {
                  name: "content",
                  label: "Full Content",
                  type: "richText",
                  admin: {
                    description: "Full supporting content for the media post.",
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
              label: "Visual Media",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "image",
                  label: "Image",
                  type: "relationship",
                  relationTo: "media",
                  admin: {
                    description: "Main image for this post when the item is image-based or press-related.",
                  },
                },
                {
                  name: "videoUrl",
                  label: "Video URL",
                  type: "text",
                  admin: {
                    description: "Video link for video-based posts.",
                    placeholder: "https://...",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Publishing",
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
                        description: "Date shown on the post.",
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
                        description: "Use draft for editing and publish only when ready.",
                      },
                    },
                  ],
                },
                {
                  name: "featured",
                  label: "Featured Media Item",
                  type: "checkbox",
                  defaultValue: false,
                  admin: {
                    description: "Highlight this item in featured media or press areas.",
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
                    description: "Use synced when the item was imported from a connected platform.",
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
                        description: "Origin platform for the content.",
                      },
                    },
                    {
                      name: "sourceUrl",
                      label: "Original Source URL",
                      type: "text",
                      admin: {
                        width: "50%",
                        description: "Optional original link.",
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
