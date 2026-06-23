import CertificationPageClient from "@/components/pages/CertificationPageClient";
import { getCertificationPageContent } from "@/lib/cms";

export default async function CertificationPage() {
  return <CertificationPageClient content={await getCertificationPageContent()} />;
}
