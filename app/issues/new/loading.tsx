import { Button, Spinner, Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingNewIssuePage = () => {
  return (
    <Box width="m-w-xl">
      <Skeleton />
      <Skeleton height='20rem' />
      <Button><Spinner /></Button>
    </Box>
  );
};

export default LoadingNewIssuePage;
