import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from '../../validationSchemas'

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = issueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });
  const title = body.title;
  const description = body.description
  const newIssue = await prisma.issue.create({
    data: { title, description },
  });
  return NextResponse.json(newIssue, { status: 201 });
}
