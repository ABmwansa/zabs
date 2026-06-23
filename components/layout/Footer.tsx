import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ChevronRight, ArrowUpRight } from "lucide-react";
import type { SiteSettings } from "@/lib/content/types";

interface FooterProps {
  siteSettings: SiteSettings;
}

export default function Footer({ siteSettings }: FooterProps) {
  const activeSocialLinks = siteSettings.socialLinks.filter((social) => social.isActive !== false);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_24rem)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(8,152,224,0.18),transparent_22rem)]" />
        <div className="absolute -right-24 top-16 h-80 w-80 rounded-full border border-white/[0.08]" />
        <div className="absolute -left-16 bottom-20 h-48 w-48 rounded-full border border-secondary-300/[0.15]" />
      </div>

      <div className="container-custom relative py-14 lg:py-20">
        <div className="mb-10 rounded-[1.75rem] border border-white/10 bg-white/[0.08] p-6 shadow-[0_28px_70px_-38px_rgba(0,0,0,0.48)] backdrop-blur-md md:p-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary-300">
                Public Standards Service
              </div>
              <h3 className="font-heading text-2xl font-black text-white md:text-3xl">Building confidence in quality, trade, and safety across Zambia.</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-100">{siteSettings.footerSummary}</p>
            </div>
            <a
              href={`${siteSettings.primaryEmailHref}?subject=General Enquiry`}
              className="btn-secondary flex-shrink-0"
            >
              Start an Enquiry <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/zabs-logo.svg"
                alt="ZABS Logo"
                width={160}
                height={66}
                className="object-contain"
              />
            </Link>

            <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary-300">National Standards Body</div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-secondary-300" />
                <span className="text-primary-100/[0.85]">
                  {siteSettings.addressLines[0]}
                  <br />
                  {siteSettings.addressLines[1]}
                </span>
              </div>
              <a href={siteSettings.secondaryPhoneHref} className="flex items-center gap-3 text-primary-100/[0.85] transition-colors hover:text-white">
                <Phone size={16} className="text-secondary-300" />
                <span>{siteSettings.secondaryPhone}</span>
              </a>
              <a href={siteSettings.primaryEmailHref} className="flex items-center gap-3 text-primary-100/[0.85] transition-colors hover:text-white">
                <Mail size={16} className="text-secondary-300" />
                <span>{siteSettings.primaryEmail}</span>
              </a>
            </div>

            <div className="flex gap-3 mt-6">
              {activeSocialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white/[0.72] transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary-300/40 hover:bg-secondary-500 hover:text-white"
                >
                  <i className={`${social.iconClass} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {siteSettings.footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-secondary-300">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-sm text-primary-100/[0.78] transition-colors hover:text-white"
                    >
                      <ChevronRight size={12} className="text-white/[0.35] group-hover:text-secondary-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md md:flex-row md:p-8">
            <div>
              <h4 className="mb-1 text-lg font-bold text-white">{siteSettings.newsletterTitle}</h4>
              <p className="text-sm text-primary-100/[0.78]">{siteSettings.newsletterDescription}</p>
            </div>
            <a
              href={`${siteSettings.primaryEmailHref}?subject=Newsletter Subscription`}
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl border border-white/[0.12] bg-white px-6 py-3 text-sm font-semibold text-primary-800 transition-all hover:-translate-y-0.5 hover:bg-secondary-50"
            >
              Subscribe <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-primary-100/[0.64] sm:flex-row">
          <p>Copyright {new Date().getFullYear()} Zambia Bureau of Standards. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms & Conditions</Link>
            <Link href="/contact" className="transition-colors hover:text-white">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
