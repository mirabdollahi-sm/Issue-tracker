import prisma from "@/prisma/client";
import { Grid, Box } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  let id = +params.id;
  if (Number.isNaN(id)) notFound();
  const issue = await prisma.issue.findUnique({
    where: { id },
  });
  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssueButton id={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
