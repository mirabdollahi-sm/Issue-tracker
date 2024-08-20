/* eslint-disable @next/next/no-async-client-component */
"use client";

import React from "react";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";

const IssuesPage = async () => {
  const issuses = await prisma.issue.findMany();
  return (
    <div>
      <div className="mb-5">
        <Button>
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Created At</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        {issuses.map((issue) => {
          return (
            <Table.Row key={issue.id}>
              <Table.Cell>
                {issue.title}
                <div className="block md:hidden">Open</div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">Open</Table.Cell>
              <Table.Cell className="hidden md:table-cell">{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          );
        })}
        <Table.Body></Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
