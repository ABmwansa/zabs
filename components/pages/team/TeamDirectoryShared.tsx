import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UserRound } from "lucide-react";

import type { TeamProfileContent } from "@/lib/cms";
import type { TeamGroup } from "@/lib/content/types";

export function PlaceholderAvatar() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#eef6ff_0%,#f8fbff_100%)]">
      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-primary-100 bg-white shadow-[0_20px_50px_-30px_rgba(16,34,53,0.35)]">
        <UserRound size={54} className="text-primary-600" />
      </div>
    </div>
  );
}

export function TeamMemberCard({
  member,
  featured = false,
}: {
  member: TeamProfileContent;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/team-details/${member.id}`}
      className="group block h-full overflow-hidden rounded-[1.75rem] border border-grey-100 bg-white shadow-[0_24px_60px_-42px_rgba(16,34,53,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-[0_28px_70px_-38px_rgba(16,34,53,0.34)]"
    >
      <div className={`relative w-full overflow-hidden bg-grey-50 ${featured ? "aspect-[4/4.7]" : "aspect-[4/4.9]"}`}>
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <PlaceholderAvatar />
        )}
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-black text-grey-900">{member.name}</h3>
        <p className="mt-2 min-h-[3rem] text-sm font-semibold leading-relaxed text-primary-700">
          {member.position}
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-grey-500 transition-colors group-hover:text-primary-700">
          View profile <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export function SectionIntro({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <h2 className="font-heading text-3xl font-black text-grey-900 md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-grey-600 md:text-lg">{description}</p>
    </div>
  );
}

export const getMembersByGroup = (members: TeamProfileContent[], group: TeamGroup) =>
  members.filter((member) => member.group === group);
