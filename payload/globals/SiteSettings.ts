import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  admin: {
    group: "Settings",
    description:
      "Central organization details reused across the site header, footer, and contact sections.",
  },
  access: {
    read: () => true,
  },
  versions: true,
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Brand",
          fields: [
            {
              type: "collapsible",
              label: "Organization Identity",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "organizationName",
                      label: "Organization Name",
                      type: "text",
                      required: true,
                      admin: {
                        width: "65%",
                        description: "Official full organization name.",
                        placeholder: "Zambia Bureau of Standards",
                      },
                    },
                    {
                      name: "shortName",
                      label: "Short Name",
                      type: "text",
                      required: true,
                      admin: {
                        width: "35%",
                        description: "Short branded name used in compact spaces.",
                        placeholder: "ZABS",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Contacts",
          fields: [
            {
              type: "collapsible",
              label: "Primary Public Contact",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "primaryPhone",
                      label: "Primary Phone",
                      type: "text",
                      required: true,
                      admin: {
                        width: "34%",
                        description: "Main phone number shown across the site.",
                        placeholder: "+260 211 221 386",
                      },
                    },
                    {
                      name: "secondaryPhone",
                      label: "Secondary Phone",
                      type: "text",
                      admin: {
                        width: "33%",
                        description: "Optional backup contact number.",
                        placeholder: "+260 211 000 000",
                      },
                    },
                    {
                      name: "primaryEmail",
                      label: "Primary Email",
                      type: "email",
                      required: true,
                      admin: {
                        width: "33%",
                        description: "Primary public email address.",
                        placeholder: "info@zabs.org.zm",
                      },
                    },
                  ],
                },
                {
                  name: "topBarLocation",
                  label: "Top Bar Location",
                  type: "text",
                  admin: {
                    description: "Optional short location line shown in the site top bar.",
                    placeholder: "Lusaka, Zambia",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Address & Footer",
          fields: [
            {
              type: "collapsible",
              label: "Address Lines",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "addressLines",
                  label: "Address Lines",
                  type: "array",
                  labels: {
                    singular: "Address Line",
                    plural: "Address Lines",
                  },
                  admin: {
                    description:
                      "Add the address exactly as it should appear in the footer or contact sections.",
                  },
                  fields: [
                    {
                      name: "line",
                      label: "Address Line",
                      type: "text",
                      required: true,
                    },
                  ],
                },
              ],
            },
            {
              type: "collapsible",
              label: "Footer Summary",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "footerSummary",
                  label: "Footer Summary",
                  type: "textarea",
                  admin: {
                    description: "Short organization summary used in the footer area.",
                    placeholder:
                      "A brief statement about the organization, its public mandate, and its value to visitors.",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Social Links",
          fields: [
            {
              type: "collapsible",
              label: "Active Social Profiles",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "socialLinks",
                  label: "Social Links",
                  type: "array",
                  labels: {
                    singular: "Social Link",
                    plural: "Social Links",
                  },
                  admin: {
                    description: "Active social links used in the header, footer, or contact areas.",
                  },
                  fields: [
                    {
                      type: "row",
                      fields: [
                        {
                          name: "platform",
                          label: "Platform",
                          type: "select",
                          required: true,
                          options: [
                            { label: "Facebook", value: "facebook" },
                            { label: "X", value: "x" },
                            { label: "LinkedIn", value: "linkedin" },
                            { label: "YouTube", value: "youtube" },
                          ],
                          admin: {
                            width: "25%",
                          },
                        },
                        {
                          name: "name",
                          label: "Display Name",
                          type: "text",
                          required: true,
                          admin: {
                            width: "25%",
                            description: "Human-readable profile name, for example ZABS Zambia.",
                          },
                        },
                        {
                          name: "url",
                          label: "Profile URL",
                          type: "text",
                          required: true,
                          admin: {
                            width: "35%",
                            description: "Full profile URL.",
                            placeholder: "https://...",
                          },
                        },
                        {
                          name: "isActive",
                          label: "Active",
                          type: "checkbox",
                          defaultValue: true,
                          admin: {
                            width: "15%",
                            description: "Turn off links without deleting them.",
                          },
                        },
                      ],
                    },
                    {
                      name: "handle",
                      label: "Handle",
                      type: "text",
                      admin: {
                        description: "Optional social handle.",
                        placeholder: "@zabszambia",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Newsletter",
          fields: [
            {
              type: "collapsible",
              label: "Newsletter Messaging",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "newsletterTitle",
                  label: "Newsletter Title",
                  type: "text",
                  admin: {
                    description: "Optional newsletter signup heading.",
                    placeholder: "Stay informed with ZABS updates",
                  },
                },
                {
                  name: "newsletterDescription",
                  label: "Newsletter Description",
                  type: "textarea",
                  admin: {
                    description: "Optional short description for newsletter signup messaging.",
                    placeholder:
                      "Use a short sentence to explain what subscribers will receive.",
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
