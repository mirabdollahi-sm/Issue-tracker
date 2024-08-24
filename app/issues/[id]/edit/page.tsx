import React from "react";
import { notFound } from "next/navigation";
import prisma from "@/prisma/client";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import(`@/app/issues/_components/IssueForm`), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});
interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  let id = +params.id;
  if (Number.isNaN(id)) notFound();
  const issue = await prisma.issue.findUnique({
    where: { id },
  });
  if (!issue) notFound();
  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
