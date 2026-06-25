import Link from "next/link";
import { ArrowRight, ShieldCheck, Users } from "lucide-react";

import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { getTeamMembers, getTeamPageContent } from "@/lib/cms";
import { getMembersByGroup, SectionIntro, TeamMemberCard } from "@/components/pages/team/TeamDirectoryShared";

export default async function BoardPage() {
  const [members, teamPageContent] = await Promise.all([
    getTeamMembers(),
    getTeamPageContent(),
  ]);

  const boardMembers = getMembersByGroup(members, "board");
  const [boardLead, ...boardRest] = boardMembers;
  const boardMiddle = boardRest.slice(0, 3);
  const boardEnding = boardRest.slice(3);

  return (
    <>
      <PageHeader
        title="Board of Directors"
        description={teamPageContent.boardPage.description}
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Board of Directors" },
        ]}
        badge={teamPageContent.boardPage.badge}
      />

      <section className="section-padding bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_18%,#f8fbff_100%)]">
        <div className="container-custom">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <div className="section-badge mx-auto mb-5 w-fit">
              <Users size={12} /> Governance And Oversight
            </div>
            <h1 className="font-heading text-4xl font-black text-grey-900 md:text-5xl">
              {teamPageContent.boardPage.title}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-grey-600 md:text-lg">
              {teamPageContent.boardPage.description}
            </p>
          </div>

          <section>
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
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <ShieldCheck size={14} className="text-secondary-300" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                Governance Contact
              </span>
            </div>
            <h2 className="font-heading text-4xl font-black text-white md:text-5xl">
              Reach ZABS governance and leadership contacts.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-100 md:text-lg">
              Contact ZABS for governance enquiries, institutional leadership matters, and broader organizational information.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-secondary">
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link
                href="/our-team"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/18 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/16"
              >
                View Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
