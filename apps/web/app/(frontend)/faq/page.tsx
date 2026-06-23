import FaqPageClient from "@/components/pages/FaqPageClient";
import { getFaqPageContent } from "@/lib/cms";

export default async function FAQPage() {
  return <FaqPageClient content={await getFaqPageContent()} />;
}
