import type { CollectionConfig } from "payload";

export const Events: CollectionConfig = {
  slug: "events",
  labels: {
    singular: "Event",
    plural: "Events",
  },
  admin: {
    group: "Website Content",
    useAsTitle: "title",
    defaultColumns: ["title", "startDate", "location", "status"],
    description:
      "Manage workshops, launches, meetings, and public-facing events.",
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
              label: "Event Identity",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "title",
                  label: "Event Title",
                  type: "text",
                  required: true,
                  admin: {
                    description: "Official event title shown to visitors.",
                    placeholder: "National Standards Awareness Workshop",
                  },
                },
                {
                  name: "slug",
                  label: "Event Slug",
                  type: "text",
                  required: true,
                  unique: true,
                  index: true,
                  admin: {
                    description: "Public URL path for this event page or listing detail.",
                    placeholder: "national-standards-awareness-workshop",
                  },
                },
                {
                  name: "summary",
                  label: "Summary",
                  type: "textarea",
                  required: true,
                  admin: {
                    description: "Short event overview for cards and listings.",
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
              label: "Event Information",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "description",
                  label: "Detailed Description",
                  type: "richText",
                  admin: {
                    description: "Detailed event description, agenda, or supporting notes.",
                  },
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "location",
                      label: "Location",
                      type: "text",
                      required: true,
                      admin: {
                        width: "50%",
                        description: "Venue, city, or virtual platform.",
                        placeholder: "Lusaka / Virtual",
                      },
                    },
                    {
                      name: "registrationLink",
                      label: "Registration Link",
                      type: "text",
                      admin: {
                        width: "50%",
                        description: "Optional registration or RSVP URL.",
                        placeholder: "https://...",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Schedule",
          fields: [
            {
              type: "collapsible",
              label: "Dates and Time",
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
                      required: true,
                      admin: {
                        width: "50%",
                        description: "Event start date and time.",
                      },
                    },
                    {
                      name: "endDate",
                      label: "End Date",
                      type: "date",
                      admin: {
                        width: "50%",
                        description: "Optional end date and time.",
                      },
                    },
                  ],
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
                        description:
                          "Controls whether the event is still being prepared, live, or archived.",
                      },
                    },
                    {
                      name: "featured",
                      label: "Featured Event",
                      type: "checkbox",
                      defaultValue: false,
                      admin: {
                        width: "50%",
                        description: "Feature the event in highlighted placements.",
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: "collapsible",
              label: "Event Image",
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
                      "Primary image used to represent the event on cards, banners, and event detail pages.",
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
                    description: "Use synced when the event was pulled from a connected source.",
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
                        description: "Origin platform for this event record.",
                      },
                    },
                    {
                      name: "sourceUrl",
                      label: "Original Source URL",
                      type: "text",
                      admin: {
                        width: "50%",
                        description: "Optional source link.",
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
