import { RootPage, generatePageMetadata } from "@payloadcms/next/views";

import configPromise from "@/payload.config";

import { importMap } from "../importMap";

type AdminPageProps = {
  params: Promise<{
    segments?: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

const normalizeSearchParams = async (searchParamsPromise: AdminPageProps["searchParams"]) => {
  const searchParams = await searchParamsPromise;

  return Object.fromEntries(
    Object.entries(searchParams).filter(([, value]) => value !== undefined),
  ) as { [key: string]: string | string[] };
};

export const generateMetadata = ({ params, searchParams }: AdminPageProps) =>
  generatePageMetadata({
    config: configPromise,
    params,
    searchParams: normalizeSearchParams(searchParams),
  });

export default function AdminPage({ params, searchParams }: AdminPageProps) {
  return RootPage({
    config: configPromise,
    importMap,
    params: params as Promise<{ segments: string[] }>,
    searchParams: normalizeSearchParams(searchParams),
  });
}
