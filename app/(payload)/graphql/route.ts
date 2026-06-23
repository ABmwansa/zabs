import { GRAPHQL_POST } from "@payloadcms/next/routes";

import configPromise from "@/payload.config";

export const runtime = "nodejs";

export const POST = GRAPHQL_POST(configPromise);
