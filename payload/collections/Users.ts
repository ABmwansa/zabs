import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "User",
    plural: "Admin Users",
  },
  admin: {
    group: "Administration",
    useAsTitle: "email",
    description: "Manage access for editors, publishers, and administrators.",
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      admin: {
        description: "Full display name for the team member.",
      },
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      options: [
        { label: "Super Admin", value: "super-admin" },
        { label: "Editor", value: "editor" },
        { label: "Publisher", value: "publisher" },
      ],
      admin: {
        description: "Editors prepare content, publishers approve and publish, super admins manage the workspace.",
      },
    },
  ],
};
