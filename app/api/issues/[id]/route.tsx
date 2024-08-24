import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "../../../validationSchemas";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = issueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  let id = +params.id;
  const issue = await prisma.issue.findUnique({
    where: { id },
  });
  // Check if the issue exist
  if (!issue)
    return NextResponse.json({ error: "Issue not found" }, { status: 404 });

  const title = body.title;
  const description = body.description;
  let updatedIssue = await prisma.issue.update({
    where: { id },
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(updatedIssue);
}
