import { buyStandardsPageContent, careersPageContent, faqPageContent, publicationsPageContent } from "@/lib/content/resource-pages";
import { certificationPageContent } from "@/lib/content/service-pages";

// Client-side CMS adapter for interactive pages whose current local content
// still includes icon component references. Once Payload is integrated,
// these pages should switch to serializable icon keys or server-rendered mappings.
// Until then, this keeps the route-level content access pattern aligned with the CMS plan.

export const getBuyStandardsPageContent = () => buyStandardsPageContent;
export const getCareersPageContent = () => careersPageContent;
export const getCertificationPageContent = () => certificationPageContent;
export const getFaqPageContent = () => faqPageContent;
export const getPublicationsPageContent = () => publicationsPageContent;
