import { Button } from "@radix-ui/themes";

interface Props {
  id: number;
}

const DeleteIssueButton = ({ id }: Props) => {
  return (
    <Button color="red">
        Delete
    </Button>
  );
};

export default DeleteIssueButton;
