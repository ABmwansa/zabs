import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail, ShieldCheck, UserRound, Users } from "lucide-react";

import PageHeader from "@/components/ui/PageHeader";
import { getTeamMemberById } from "@/lib/content/team";

function PlaceholderAvatar() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#eef6ff_0%,#f8fbff_100%)]">
      <div className="flex h-32 w-32 items-center justify-center rounded-full border border-primary-100 bg-white shadow-[0_20px_50px_-30px_rgba(16,34,53,0.35)]">
        <UserRound size={62} className="text-primary-600" />
      </div>
    </div>
  );
}

function getGroupLabel(group: string) {
  switch (group) {
    case "board":
      return "Board of Directors";
    case "executive":
      return "Management Team";
    case "directors":
      return "Directors";
    case "managers":
      return "Managers";
    default:
      return "Team";
  }
}

export default function TeamMemberDetailPage({ id }: { id: string }) {
  const member = getTeamMemberById(id);

  if (!member) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={member.name}
        description={member.position}
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Our Team", href: "/our-team" },
          { label: member.name },
        ]}
        badge={getGroupLabel(member.group)}
      />

      <section className="section-padding bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_55%,#f6fbff_100%)]">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[minmax(18rem,26rem)_minmax(0,1fr)] lg:items-start">
            <div className="overflow-hidden rounded-[2rem] border border-grey-100 bg-white shadow-[0_26px_70px_-42px_rgba(16,34,53,0.3)]">
              <div className="relative aspect-[4/5] w-full bg-grey-50">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                ) : (
                  <PlaceholderAvatar />
                )}
              </div>
            </div>

            <div>
              <Link
                href="/our-team"
                className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
              >
                <ArrowLeft size={16} />
                Back to Our Team
              </Link>

              <div className="rounded-[2rem] border border-grey-100 bg-white p-8 shadow-[0_22px_60px_-44px_rgba(16,34,53,0.28)]">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-700">
                  <Users size={12} />
                  {getGroupLabel(member.group)}
                </div>

                <h2 className="mt-5 font-heading text-4xl font-black text-grey-900 md:text-5xl">
                  {member.name}
                </h2>
                <p className="mt-3 text-lg font-semibold text-primary-700">
                  {member.position}
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-primary-100 bg-primary-50 p-5">
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-700">
                      Team Category
                    </div>
                    <div className="mt-2 text-sm font-semibold text-grey-800">
                      {getGroupLabel(member.group)}
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] border border-secondary-100 bg-secondary-50 p-5">
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary-700">
                      Profile Status
                    </div>
                    <div className="mt-2 text-sm font-semibold text-grey-800">
                      {member.image ? "Photo available" : "Placeholder in use"}
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-[1.75rem] border border-grey-100 bg-grey-50 p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-600 text-white">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-700">
                        Role Overview
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-grey-600">
                        {member.summary ??
                          `${member.name} serves within the ${getGroupLabel(member.group)} of ZABS, supporting institutional leadership, governance, quality systems, and public service delivery.`}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/our-team" className="btn-primary">
                    View More Team Members
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-grey-200 bg-white px-6 py-3 font-semibold text-grey-700 transition-all hover:border-primary-200 hover:text-primary-700"
                  >
                    <Mail size={16} />
                    Contact ZABS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
