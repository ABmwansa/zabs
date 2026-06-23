import {
  AlertTriangle,
  Award,
  BookOpen,
  Building2,
  Clock,
  Database,
  Eye,
  FileText,
  Globe,
  Lock,
  Mail,
  Scale,
  ScrollText,
  Shield,
  Target,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";

export const historyPageContent = {
  timelineEvents: [
    { year: "1982", title: "Establishment of ZABS", desc: "The Zambia Bureau of Standards was established as a statutory body under the Ministry of Commerce Trade and Industry by an Act of Parliament (CAP 416 of 1994).", icon: Building2, color: "primary" },
    { year: "1994", title: "CAP 416 Enacted", desc: "Under CAP 416, ZABS was mandated to develop standards, enforce compulsory standards, provide testing, certification, and metrology services.", icon: ScrollText, color: "secondary" },
    { year: "2000s", title: "Expansion of Laboratory Services", desc: "ZABS expanded its laboratory capabilities, adding specialized labs for minerals, solar, petroleum, and microbiological testing to meet growing industry demands.", icon: Target, color: "primary" },
    { year: "2010", title: "SADCAS Accreditation", desc: "ZABS certification division achieved accreditation under the Southern African Development Community Accreditation Service (SADCAS), boosting credibility of certification services.", icon: Award, color: "secondary" },
    { year: "2017", title: "Standards Act No. 4 of 2017", desc: "The Standards Act No. 4 of 2017 was enacted, replacing CAP 416 and providing a modernized legal framework for standards development, testing, and certification in Zambia.", icon: Shield, color: "primary" },
    { year: "2026", title: "11th National Quality Awards", desc: "ZABS celebrated the 11th Zambia National Quality Awards and Business Forum, recognizing excellence in quality management across Zambian industries.", icon: Award, color: "secondary" },
  ],
  legislation: [
    { title: "Standards Act No. 4 of 2017", desc: "The principal legislation governing the operations of ZABS, covering standards development, testing, certification, and quality promotion.", type: "Principal Act", year: "2017", icon: Shield },
    { title: "Weights and Measures Act", desc: "Provides for the regulation of weights, measures, and measuring instruments in Zambia.", type: "Related Act", year: "1994", icon: Scale },
    { title: "Competition and Consumer Protection Act", desc: "Establishes the framework for consumer protection and fair competition in Zambia.", type: "Related Act", year: "2010", icon: Users },
  ],
  historicalFacts: [
    { value: "40+", label: "Years of Service", sub: "Since 1982", icon: Clock },
    { value: "3", label: "Major Acts", sub: "Governing legislation", icon: BookOpen },
    { value: "6", label: "Key Milestones", sub: "Major achievements", icon: Award },
    { value: "500+", label: "Standards", sub: "Published to date", icon: FileText },
  ],
  quickStats: [
    { value: "1982", label: "Year Founded", sub: "Over 40 years ago" },
    { value: "2017", label: "Current Act", sub: "Standards Act No. 4" },
    { value: "500+", label: "Standards", sub: "And counting" },
  ],
  impactItems: [
    "Established national standards across 10+ industry sectors",
    "Certified over 150 products for the Zambian market",
    "Trained thousands of professionals in quality management",
    "Represented Zambia in ISO, ARSO, and SADCSTAN",
  ],
  decadeCards: [
    { decade: "1980s", achievement: "Foundation & Establishment", icon: Building2 },
    { decade: "1990s", achievement: "Legislative Framework", icon: ScrollText },
    { decade: "2000s", achievement: "Laboratory Expansion", icon: Target },
    { decade: "2010s", achievement: "International Accreditation", icon: Award },
    { decade: "2020s", achievement: "Modernization & Growth", icon: TrendingUp },
  ],
};

export const privacyPolicyPageContent = {
  lastUpdated: "1 January 2026",
  policySections: [
    { icon: Eye, title: "1. Information We Collect", content: "We collect personal information that you voluntarily provide to us, including when you:", list: ["Contact us via our website, email, or telephone", "Register for training courses or certification programmes", "Purchase or request Zambia Standards", "Submit applications for employment", "Subscribe to our newsletter or publications", "Participate in stakeholder consultations or technical committees"], note: "The types of personal information we may collect include: full name, organisation name, email address, phone number, postal address, and payment information (handled securely by our finance department)." },
    { icon: Database, title: "2. How We Use Your Information", content: "ZABS uses your personal information for the following purposes:", list: ["Responding to enquiries and providing requested services", "Processing certification, training, and standards purchase transactions", "Sending service updates, invoices, and certificates", "Distributing our newsletter and announcements (with your consent)", "Improving our website and service delivery", "Complying with legal and regulatory obligations"] },
    { icon: Lock, title: "3. Information Sharing and Disclosure", content: "ZABS does not sell, trade, or rent your personal information to third parties. We may share your information with:", list: ["Accreditation bodies (e.g. SADCAS) for certification-related purposes where required by the accreditation scheme", "Regional and international standards bodies (e.g. ISO, ARSO) where participation requires disclosure", "Government authorities where required by law or legal process", "Service providers who assist us in operating our website and services, subject to confidentiality agreements"] },
    { icon: UserCheck, title: "4. Your Rights", content: "You have the following rights regarding your personal information:", list: ["Access: Request a copy of personal information we hold about you", "Correction: Request correction of inaccurate or incomplete information", "Deletion: Request deletion of your information in certain circumstances", "Objection: Object to processing of your information for direct marketing", "Withdrawal of consent: Withdraw consent for newsletter subscriptions at any time"], note: "To exercise any of these rights, please contact our Data Protection Officer at dpo@zabs.org.zm." },
    { icon: Globe, title: "5. Cookies and Website Analytics", content: "Our website uses cookies to improve user experience and gather anonymous analytics data. Cookies help us understand how visitors use our website so we can improve our services. You can control cookie settings through your browser preferences. Disabling cookies may affect some website functionality." },
    { icon: Shield, title: "6. Data Security", content: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. While we strive to protect your information, no method of internet transmission or storage is 100% secure." },
    { icon: Clock, title: "7. Data Retention", content: "We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, and as required by applicable law. Certification and accreditation records are retained in accordance with SADCAS requirements. Job application data is retained for 12 months after the recruitment process is concluded." },
    { icon: FileText, title: "8. Changes to This Policy", content: "ZABS reserves the right to update this privacy policy from time to time. Updates will be posted on this page with a revised \"Last Updated\" date. We encourage you to review this policy periodically." },
  ],
  keyPrinciples: [
    { icon: Shield, title: "Transparency", desc: "We are clear about what data we collect and why" },
    { icon: Lock, title: "Security", desc: "We protect your data with robust security measures" },
    { icon: UserCheck, title: "Control", desc: "You have rights over your personal information" },
    { icon: Clock, title: "Minimisation", desc: "We only collect data that is necessary" },
  ],
  stats: [
    { value: "6", label: "Data Categories", sub: "Types of information", icon: Database },
    { value: "8", label: "Your Rights", sub: "Under data protection", icon: UserCheck },
    { value: "12", label: "Months Retention", sub: "For job applications", icon: Clock },
    { value: "24/7", label: "Data Protection", sub: "Continuous monitoring", icon: Shield },
  ],
};

export const termsPageContent = {
  lastUpdated: "1 January 2026",
  termsSections: [
    { icon: FileText, title: "1. Acceptance of Terms", content: "By accessing or using the ZABS website (www.zabs.org.zm), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our website. ZABS reserves the right to modify these terms at any time, and continued use of the website after changes constitutes acceptance of the revised terms.", type: "info" },
    { icon: Globe, title: "2. Use of the Website", content: "The ZABS website is provided for informational and service purposes. You may use the website to access information about ZABS services, download publications, enquire about standards, and contact ZABS.", list: ["Use the website for any unlawful purpose", "Attempt to gain unauthorised access to any part of the website", "Transmit harmful, offensive, or disruptive content", "Reproduce, distribute, or modify website content without permission"], type: "warning" },
    { icon: Shield, title: "3. Intellectual Property", content: "All content on this website, including text, graphics, logos, images, and software, is the property of the Zambia Bureau of Standards or its content suppliers and is protected by applicable copyright and intellectual property laws. Zambia Standards (ZS) are subject to copyright and may not be reproduced without purchase and prior written permission from ZABS.", type: "info" },
    { icon: BookOpen, title: "4. Standards and Publications", content: "Zambia Standards published and sold by ZABS are copyrighted documents. Purchase of a standard grants the purchaser a non-exclusive licence to use that standard for internal purposes only.", list: ["Standards may not be reproduced, distributed, transmitted, or sold to third parties without written permission", "PDF copies are for single-user use unless a site licence has been purchased", "Bulk discounts are available for organisations purchasing 10 or more standards", "Digital copies are delivered within 24 hours of payment confirmation"], type: "info" },
    { icon: Award, title: "5. Certification and Testing Services", content: "Certification and testing services are governed by separate service agreements, application forms, and scheme-specific regulations. These terms supplement but do not replace those agreements. ZABS certification marks and logos may only be used by certified organisations in accordance with applicable certification scheme rules.", type: "info" },
    { icon: AlertTriangle, title: "6. Disclaimers", content: "ZABS endeavours to ensure that information on this website is accurate and current. However, information is provided \"as is\" without warranties of any kind. ZABS does not warrant that the website will be uninterrupted or error-free. Information on this website does not constitute legal, technical, or professional advice.", type: "warning" },
    { icon: Scale, title: "7. Limitation of Liability", content: "To the extent permitted by law, ZABS shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this website or its content. ZABS's liability for any claim relating to services provided shall be limited to the fees paid for those specific services.", type: "warning" },
    { icon: Globe, title: "8. Third-Party Links", content: "This website may contain links to third-party websites for your convenience. ZABS does not endorse, control, or take responsibility for the content of linked websites. Visiting external links is at your own risk.", type: "info" },
    { icon: Scale, title: "9. Governing Law", content: "These Terms and Conditions are governed by the laws of the Republic of Zambia. Any disputes arising from these terms or your use of the website shall be subject to the exclusive jurisdiction of the courts of Zambia.", type: "info" },
    { icon: Mail, title: "10. Contact", content: "For enquiries regarding these Terms and Conditions, please contact ZABS at:", contactInfo: { address: "Zambia Bureau of Standards, Lechwe House, Freedom Way, P.O. Box 31302, Lusaka, Zambia", email: "legal@zabs.org.zm", phone: "+260 211 231 987" }, type: "contact" },
  ],
  quickLinks: [
    { title: "Privacy Policy", href: "/privacy-policy", icon: Shield },
    { title: "FAQ", href: "/faq", icon: Users },
    { title: "Contact Us", href: "/contact", icon: Mail },
    { title: "Publications", href: "/publications", icon: BookOpen },
  ],
  stats: [
    { value: "10", label: "Sections", sub: "Comprehensive terms", icon: FileText },
    { value: "24/7", label: "Access", sub: "Website availability", icon: Clock },
    { value: "Zambia", label: "Governing Law", sub: "Jurisdiction", icon: Scale },
    { value: "48h", label: "Response Time", sub: "For enquiries", icon: Clock },
  ],
};
