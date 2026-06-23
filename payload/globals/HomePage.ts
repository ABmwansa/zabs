import type { GlobalConfig } from "payload";

import {
  homeCtaSection,
  homeHeroSlides,
  homeHeroSummaryStats,
} from "@/lib/content/home-page";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  label: "Homepage",
  admin: {
    group: "Settings",
    description:
      "Manage the hero area, homepage statistics, and primary call-to-action copy.",
  },
  versions: true,
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero Slides",
          fields: [
            {
              type: "collapsible",
              label: "Homepage Hero Slides",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "heroSlides",
                  label: "Hero Slides",
                  type: "array",
                  labels: {
                    singular: "Hero Slide",
                    plural: "Hero Slides",
                  },
                  defaultValue: homeHeroSlides.map((slide) => ({
                    eyebrow: slide.eyebrow,
                    headline: slide.headline,
                    primaryCta: slide.primaryCta,
                    secondaryCta: slide.secondaryCta,
                    stat: slide.stat,
                    subtext: slide.subtext,
                  })),
                  admin: {
                    description:
                      "Slides shown in the homepage hero. Keep messaging concise, strong, and easy to scan.",
                    initCollapsed: true,
                    components: {
                      RowLabel:
                        "@/payload/admin/components/HomeHeroSlideRowLabel#HomeHeroSlideRowLabel",
                    },
                  },
                  fields: [
                    {
                      type: "row",
                      fields: [
                        {
                          name: "eyebrow",
                          label: "Eyebrow Text",
                          type: "text",
                          admin: {
                            width: "35%",
                            description: "Optional short label above the main headline.",
                            placeholder: "Standards Act No. 4 of 2017",
                          },
                        },
                        {
                          name: "headline",
                          label: "Headline",
                          type: "text",
                          required: true,
                          admin: {
                            width: "65%",
                            description: "Main homepage hero headline.",
                            placeholder: "Modern Standards. Trusted Delivery.",
                          },
                        },
                      ],
                    },
                    {
                      name: "subtext",
                      label: "Supporting Text",
                      type: "textarea",
                      required: true,
                      admin: {
                        description: "Supporting text shown below the headline.",
                        placeholder:
                          "Use one or two short lines to explain the value and direction of this slide.",
                      },
                    },
                    {
                      type: "row",
                      fields: [
                        {
                          name: "primaryCta",
                          label: "Primary CTA",
                          type: "group",
                          admin: {
                            width: "50%",
                            description: "Main button shown on the hero slide.",
                          },
                          fields: [
                            {
                              name: "label",
                              label: "Button Label",
                              type: "text",
                              required: true,
                              admin: {
                                placeholder: "Get Certified",
                              },
                            },
                            {
                              name: "href",
                              label: "Button Link",
                              type: "text",
                              required: true,
                              admin: {
                                placeholder: "/certification",
                              },
                            },
                          ],
                        },
                        {
                          name: "secondaryCta",
                          label: "Secondary CTA",
                          type: "group",
                          admin: {
                            width: "50%",
                            description: "Secondary action for users who want more detail.",
                          },
                          fields: [
                            {
                              name: "label",
                              label: "Button Label",
                              type: "text",
                              required: true,
                              admin: {
                                placeholder: "Explore Standards",
                              },
                            },
                            {
                              name: "href",
                              label: "Button Link",
                              type: "text",
                              required: true,
                              admin: {
                                placeholder: "/buy-standards",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "row",
                      fields: [
                        {
                          name: "stat",
                          label: "Supporting Statistic",
                          type: "group",
                          admin: {
                            width: "50%",
                            description: "Optional supporting statistic displayed with the slide.",
                          },
                          fields: [
                            {
                              name: "value",
                              label: "Statistic Value",
                              type: "text",
                              required: true,
                              admin: {
                                placeholder: "500+",
                              },
                            },
                            {
                              name: "label",
                              label: "Statistic Label",
                              type: "text",
                              required: true,
                              admin: {
                                placeholder: "Published Standards",
                              },
                            },
                          ],
                        },
                        {
                          name: "backgroundImage",
                          label: "Background Image",
                          type: "relationship",
                          relationTo: "media",
                          admin: {
                            width: "50%",
                            description:
                              "Hero background image from the media library. Use a strong wide image for desktop and tablet layouts.",
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
        {
          label: "Statistics",
          fields: [
            {
              type: "collapsible",
              label: "Supporting Statistics",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "summaryStats",
                  label: "Summary Statistics",
                  type: "array",
                  labels: {
                    singular: "Statistic",
                    plural: "Summary Statistics",
                  },
                  defaultValue: homeHeroSummaryStats,
                  admin: {
                    description: "Homepage statistics shown in supporting sections.",
                    initCollapsed: true,
                  },
                  fields: [
                    {
                      type: "row",
                      fields: [
                        {
                          name: "value",
                          label: "Value",
                          type: "text",
                          required: true,
                          admin: {
                            width: "35%",
                            placeholder: "40+",
                          },
                        },
                        {
                          name: "label",
                          label: "Label",
                          type: "text",
                          required: true,
                          admin: {
                            width: "65%",
                            placeholder: "Years of Service",
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
        {
          label: "CTA Section",
          fields: [
            {
              type: "collapsible",
              label: "Homepage Call To Action",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "ctaTitle",
                  label: "CTA Title",
                  type: "text",
                  defaultValue: homeCtaSection.title,
                  admin: {
                    description: "Title for the homepage call-to-action section.",
                    placeholder: "Ready to work with ZABS?",
                  },
                },
                {
                  name: "ctaDescription",
                  label: "CTA Description",
                  type: "textarea",
                  defaultValue: homeCtaSection.description,
                  admin: {
                    description: "Supporting copy for the homepage call-to-action section.",
                    placeholder:
                      "Use a short, clear prompt that guides visitors toward the next action.",
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
