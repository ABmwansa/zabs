import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, UserRound, Users } from "lucide-react";

import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { getTeamMembersByGroup, teamPageContent } from "@/lib/content/team";
import type { TeamProfile } from "@/lib/content/types";

function PlaceholderAvatar() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#eef6ff_0%,#f8fbff_100%)]">
      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-primary-100 bg-white shadow-[0_20px_50px_-30px_rgba(16,34,53,0.35)]">
        <UserRound size={54} className="text-primary-600" />
      </div>
    </div>
  );
}

function TeamMemberCard({ member, featured = false }: { member: TeamProfile; featured?: boolean }) {
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

function SectionIntro({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <h2 className="font-heading text-3xl font-black text-grey-900 md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-grey-600 md:text-lg">{description}</p>
    </div>
  );
}

export default function OurTeamPage() {
  const boardMembers = getTeamMembersByGroup("board");
  const executiveMembers = getTeamMembersByGroup("executive");
  const directors = getTeamMembersByGroup("directors");
  const managers = getTeamMembersByGroup("managers");

  const [boardLead, ...boardRest] = boardMembers;
  const boardMiddle = boardRest.slice(0, 3);
  const boardEnding = boardRest.slice(3);
  const [executiveLead] = executiveMembers;
  const directorsTop = directors.slice(0, 3);
  const directorsBottom = directors.slice(3);

  return (
    <>
      <PageHeader
        title="Our Team"
        description={teamPageContent.description}
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Our Team" },
        ]}
        badge="Board And Management"
      />

      <section className="section-padding bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_18%,#f8fbff_100%)]">
        <div className="container-custom">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <div className="section-badge mx-auto mb-5 w-fit">
              <Users size={12} /> Leadership Directory
            </div>
            <h1 className="font-heading text-4xl font-black text-grey-900 md:text-5xl">
              {teamPageContent.title}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-grey-600 md:text-lg">
              {teamPageContent.description}
            </p>
          </div>

          <section className="mb-20">
            <SectionIntro
              title={teamPageContent.sections.board.title}
              description={teamPageContent.sections.board.description}
            />

            {boardLead && (
              <div className="mb-8 flex justify-center">
                <div className="w-full max-w-[23rem]">
                  <Reveal>
                    <TeamMemberCard member={boardLead} featured />
                  </Reveal>
                </div>
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {boardMiddle.map((member, index) => (
                <Reveal key={member.id} delay={index * 70}>
                  <TeamMemberCard member={member} />
                </Reveal>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <div className="grid w-full max-w-3xl gap-6 md:grid-cols-2">
                {boardEnding.map((member, index) => (
                  <Reveal key={member.id} delay={(index + 3) * 70}>
                    <TeamMemberCard member={member} />
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
              {teamPageContent.sections.board.summary}
            </div>
          </section>

          <section className="mb-20">
            <SectionIntro
              title={teamPageContent.sections.executive.title}
              description={teamPageContent.sections.executive.description}
            />

            {executiveLead && (
              <div className="flex justify-center">
                <div className="w-full max-w-[23rem]">
                  <Reveal>
                    <TeamMemberCard member={executiveLead} featured />
                  </Reveal>
                </div>
              </div>
            )}
          </section>

          <section className="mb-20">
            <SectionIntro
              title={teamPageContent.sections.directors.title}
              description={teamPageContent.sections.directors.description}
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {directorsTop.map((member, index) => (
                <Reveal key={member.id} delay={index * 70}>
                  <TeamMemberCard member={member} />
                </Reveal>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <div className="grid w-full max-w-3xl gap-6 md:grid-cols-2">
                {directorsBottom.map((member, index) => (
                  <Reveal key={member.id} delay={(index + 3) * 70}>
                    <TeamMemberCard member={member} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section>
            <SectionIntro
              title={teamPageContent.sections.managers.title}
              description={teamPageContent.sections.managers.description}
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {managers.map((member, index) => (
                <Reveal key={member.id} delay={index * 70}>
                  <TeamMemberCard member={member} />
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <ShieldCheck size={14} className="text-secondary-300" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                Connect With ZABS
              </span>
            </div>
            <h2 className="font-heading text-4xl font-black text-white md:text-5xl">
              Work with our leadership and staff.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-100 md:text-lg">
              Reach the right team for standards development, testing, certification, governance,
              training, and general enquiries.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-secondary">
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/18 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/16"
              >
                Learn More About ZABS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
