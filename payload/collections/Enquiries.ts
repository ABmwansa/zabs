import type { CollectionConfig } from "payload";

const isAdminUser = ({ req }: { req: { user?: unknown } }) => Boolean(req.user);

export const Enquiries: CollectionConfig = {
  slug: "enquiries",
  defaultSort: "-dateReceived",
  labels: {
    singular: "Enquiry",
    plural: "Messages & Enquiries",
  },
  access: {
    create: () => true,
    read: isAdminUser,
    update: isAdminUser,
    delete: isAdminUser,
  },
  admin: {
    group: "Messages",
    useAsTitle: "senderName",
    defaultColumns: [
      "senderName",
      "emailAddress",
      "enquiryType",
      "status",
      "dateReceived",
    ],
    description:
      "Store contact form submissions, service enquiries, and internal follow-up notes.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Sender Details",
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
                      name: "senderName",
                      label: "Sender Name",
                      type: "text",
                      required: true,
                      admin: {
                        width: "50%",
                        description: "Name of the sender or the main contact person.",
                        placeholder: "Jane Phiri",
                      },
                    },
                    {
                      name: "emailAddress",
                      label: "Email Address",
                      type: "email",
                      required: true,
                      admin: {
                        width: "50%",
                        description: "Reply-to email address for this message.",
                        placeholder: "jane@example.com",
                      },
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "phoneNumber",
                      label: "Phone Number",
                      type: "text",
                      admin: {
                        width: "50%",
                        description: "Optional phone number supplied by the sender.",
                        placeholder: "+260 977 000 000",
                      },
                    },
                    {
                      name: "enquiryType",
                      label: "Enquiry Type",
                      type: "select",
                      required: true,
                      defaultValue: "general",
                      options: [
                        { label: "General", value: "general" },
                        { label: "Standards", value: "standards" },
                        { label: "Training", value: "training" },
                        { label: "Certification", value: "certification" },
                        { label: "Testing", value: "testing" },
                        { label: "Complaints", value: "complaints" },
                        { label: "Other", value: "other" },
                      ],
                      admin: {
                        width: "50%",
                        description: "Category used to route or filter the submission.",
                      },
                    },
                  ],
                },
                {
                  name: "dateReceived",
                  label: "Date Received",
                  type: "date",
                  required: true,
                  defaultValue: () => new Date().toISOString(),
                  admin: {
                    description: "Captured automatically when the enquiry is created.",
                    readOnly: true,
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Message",
          fields: [
            {
              type: "collapsible",
              label: "Message Content",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "subject",
                  label: "Subject",
                  type: "text",
                  required: true,
                  admin: {
                    description: "Short subject line that helps identify the request quickly.",
                    placeholder: "Request for certification guidance",
                  },
                },
                {
                  name: "message",
                  label: "Message",
                  type: "textarea",
                  required: true,
                  admin: {
                    description: "Full message body submitted by the sender.",
                    placeholder:
                      "Please share the steps, requirements, and timelines for this request.",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Workflow",
          fields: [
            {
              type: "collapsible",
              label: "Status and Follow-Up",
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: "status",
                  label: "Status",
                  type: "select",
                  required: true,
                  defaultValue: "new",
                  options: [
                    { label: "New", value: "new" },
                    { label: "Read", value: "read" },
                    { label: "Replied", value: "replied" },
                    { label: "Closed", value: "closed" },
                  ],
                  admin: {
                    description: "Internal workflow status for the message.",
                  },
                },
                {
                  name: "adminNotes",
                  label: "Admin Notes",
                  type: "textarea",
                  admin: {
                    description:
                      "Private follow-up notes, response history, or internal handling instructions.",
                    placeholder:
                      "Add internal notes here after reviewing or responding to the enquiry.",
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
