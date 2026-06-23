import PublicationsPageClient from "@/components/pages/PublicationsPageClient";
import { getPublicationsPageContent } from "@/lib/cms";

export default async function PublicationsPage() {
  return <PublicationsPageClient content={await getPublicationsPageContent()} />;
}
