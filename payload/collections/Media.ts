import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Media Asset",
    plural: "Media Library",
  },
  access: {
    read: () => true,
  },
  admin: {
    group: "Media Library",
    useAsTitle: "alt",
    description:
      "Central library for images, brochures, PDFs, and hero assets.",
  },
  upload: {
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        fit: "cover",
      },
      {
        name: "card",
        width: 960,
        height: 640,
        fit: "cover",
      },
    ],
    mimeTypes: ["image/*", "application/pdf"],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Asset Details",
          fields: [
            {
              type: "collapsible",
              label: "Core Asset Information",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "alt",
                      label: "Alt Text",
                      type: "text",
                      required: true,
                      admin: {
                        width: "65%",
                        description: "Short accessible description of the file for editors and visitors.",
                        placeholder: "Inspectors reviewing packaged products",
                      },
                    },
                    {
                      name: "category",
                      label: "Asset Category",
                      type: "select",
                      options: [
                        { label: "Image", value: "image" },
                        { label: "Document", value: "document" },
                        { label: "Brochure", value: "brochure" },
                        { label: "Hero", value: "hero" },
                      ],
                      admin: {
                        width: "35%",
                        description: "Use categories to keep the media library easy to filter and reuse.",
                      },
                    },
                  ],
                },
                {
                  name: "caption",
                  label: "Caption",
                  type: "text",
                  admin: {
                    description:
                      "Optional supporting caption for cards, detail views, or file download panels.",
                    placeholder: "Inspection team reviewing product labels before certification",
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
