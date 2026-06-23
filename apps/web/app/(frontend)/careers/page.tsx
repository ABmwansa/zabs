import CareersPageClient from "@/components/pages/CareersPageClient";
import { getCareersPageContent } from "@/lib/cms";

export default async function CareersPage() {
  return <CareersPageClient content={await getCareersPageContent()} />;
}
