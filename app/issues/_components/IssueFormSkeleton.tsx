import { Skeleton } from "@/app/components";
import { Box, Button, Spinner } from "@radix-ui/themes";

const IssueFormSkeleton = () => {
  return (
    <Box width="m-w-xl">
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
      <Button>
        <Spinner />
      </Button>
    </Box>
  );
};

export default IssueFormSkeleton;
