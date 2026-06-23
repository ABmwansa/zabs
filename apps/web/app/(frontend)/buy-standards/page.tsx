import BuyStandardsPageClient from "@/components/pages/BuyStandardsPageClient";
import { getBuyStandardsPageContent } from "@/lib/cms";

export default async function BuyStandardsPage() {
  return <BuyStandardsPageClient content={await getBuyStandardsPageContent()} />;
}
