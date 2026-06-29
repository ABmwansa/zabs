import TeamMemberDetailPage from "@/components/pages/TeamMemberDetailPage";
import { getTeamMembers } from "@/lib/cms";

export async function generateStaticParams() {
  const teamMembers = await getTeamMembers();

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
