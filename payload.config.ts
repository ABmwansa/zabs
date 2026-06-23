import { createRequire } from "node:module";
import path from "node:path";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";

import { Events } from "@/payload/collections/Events";
import { Enquiries } from "@/payload/collections/Enquiries";
import { Media } from "@/payload/collections/Media";
import { MediaPosts } from "@/payload/collections/MediaPosts";
import { News } from "@/payload/collections/News";
import { Pages } from "@/payload/collections/Pages";
import { Projects } from "@/payload/collections/Projects";
import { Services } from "@/payload/collections/Services";
import { Team } from "@/payload/collections/Team";
import { Users } from "@/payload/collections/Users";
import { HomePage } from "@/payload/globals/HomePage";
import { SiteSettings } from "@/payload/globals/SiteSettings";

const require = createRequire(import.meta.url);

const parseOriginList = (value?: string) =>
  (value || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

const uniqueOrigins = (...origins: Array<string | undefined>) =>
  Array.from(new Set(origins.filter((origin): origin is string => Boolean(origin))));

const payloadServerURL = process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3000";
const frontendServerURL = process.env.NEXT_PUBLIC_SITE_URL || payloadServerURL;
const configuredCorsOrigins = parseOriginList(process.env.PAYLOAD_CORS);
const configuredCsrfOrigins = parseOriginList(process.env.PAYLOAD_CSRF);

const sharp = (() => {
  try {
    return require("sharp");
  } catch {
    return undefined;
  }
})();

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "dev-payload-secret",
  serverURL: payloadServerURL,
  cors: uniqueOrigins(
    payloadServerURL,
    frontendServerURL,
    ...configuredCorsOrigins,
  ),
  csrf: uniqueOrigins(
    payloadServerURL,
    frontendServerURL,
    ...configuredCsrfOrigins,
  ),
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/zabs-local",
  }),
  sharp,
  admin: {
    meta: {
      title: "ZABS Content Studio",
      description: "Editorial workspace for the Zambia Bureau of Standards.",
      titleSuffix: " | ZABS",
      icons: {
        icon: "/images/zabs-logo.svg",
      },
    },
    components: {
      providers: [
        "@/payload/admin/components/ZabsAdminTheme#ZabsAdminTheme",
      ],
      graphics: {
        Logo: "@/payload/admin/components/ZabsAdminLogo#ZabsAdminLogo",
        Icon: "@/payload/admin/components/ZabsAdminIcon#ZabsAdminIcon",
      },
      beforeNavLinks: [
        "@/payload/admin/components/ZabsAdminNavPanel#ZabsAdminNavPanel",
      ],
      beforeLogin: [
        "@/payload/admin/components/ZabsAdminLoginIntro#ZabsAdminLoginIntro",
      ],
      views: {
        dashboard: {
          Component:
            "@/payload/admin/components/ZabsAdminDashboard#ZabsAdminDashboard",
        },
      },
    },
  },
  editor: lexicalEditor(),
  collections: [
    Users,
    Media,
    Pages,
    News,
    MediaPosts,
    Events,
    Projects,
    Services,
    Team,
    Enquiries,
  ],
  globals: [SiteSettings, HomePage],
  typescript: {
    outputFile: path.resolve(process.cwd(), "payload-types.ts"),
  },
});
