import { Phone, Mail, MapPin } from "lucide-react";
import type { SiteSettings } from "@/lib/content/types";

interface TopBarProps {
  siteSettings: SiteSettings;
}

export default function TopBar({ siteSettings }: TopBarProps) {
  const activeSocialLinks = siteSettings.socialLinks.filter((social) => social.isActive !== false);

  return (
    <div className="border-b border-white/[0.08] bg-grey-900 text-white">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-between gap-3 py-3">
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <span className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/75 md:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-400" />
              {siteSettings.shortName} Quality Infrastructure
            </span>
            <a
              href={siteSettings.primaryPhoneHref}
              className="flex items-center gap-2 text-sm text-white/[0.78] transition-colors hover:text-white"
            >
              <Phone size={14} className="text-secondary-400" />
              <span>{siteSettings.primaryPhone}</span>
            </a>
            <a
              href={siteSettings.primaryEmailHref}
              className="hidden items-center gap-2 text-sm text-white/[0.78] transition-colors hover:text-white sm:flex"
            >
              <Mail size={14} className="text-secondary-400" />
              <span>{siteSettings.primaryEmail}</span>
            </a>
            <span className="hidden items-center gap-2 text-sm text-white/[0.62] md:flex">
              <MapPin size={14} className="text-secondary-400" />
              <span>{siteSettings.topBarLocation}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-white/[0.55] sm:inline">Follow Us</span>
            <div className="flex items-center gap-2">
              {activeSocialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/[0.68] transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary-400/40 hover:bg-secondary-500 hover:text-white"
                >
                  <i className={`${social.iconClass} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
