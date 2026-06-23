import { RootLayout, handleServerFunctions, metadata } from "@payloadcms/next/layouts";
import type { ServerFunctionClient } from "payload";

import configPromise from "@/payload.config";

import { importMap } from "./admin/importMap";

export { metadata };

export default function PayloadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serverFunction: ServerFunctionClient = async (args) => {
    "use server";

    return handleServerFunctions({
      ...args,
      config: configPromise,
      importMap,
    });
  };

  return RootLayout({
    children,
    config: configPromise,
    importMap,
    serverFunction,
  });
}
