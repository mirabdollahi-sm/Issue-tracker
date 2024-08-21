import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import prisma from '@/prisma/client'
import { Flex, Heading, Text, Card } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import ReactMarkDown from 'react-markdown'

interface Props {
    params: { id: string }
}

const IssueDetailPage = async ({ params }: Props) => {
    let id = +params.id
    if (Number.isNaN(id)) notFound();
    const issue = await prisma.issue.findUnique({
        where: { id }
    })
    if (!issue)
        notFound();
    return (
        <div>
            <Heading>{issue.title}</Heading>
            <Flex gap='3' my='2'>
                <IssueStatusBadge status={issue.status} />
                <Text>{issue.createdAt.toDateString()}</Text>
            </Flex>
            <Card className='prose' mt='4'>
                <ReactMarkDown>{issue.description}</ReactMarkDown>
            </Card>
        </div>
    )
}

export default IssueDetailPage