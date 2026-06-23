import TeamMemberDetailPage from "@/components/pages/TeamMemberDetailPage";
import { teamMembers } from "@/lib/content/team";

export function generateStaticParams() {
  return teamMembers.map((member) => ({ id: member.id }));
}

export default async function TeamDetailsRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <TeamMemberDetailPage id={id} />;
}
