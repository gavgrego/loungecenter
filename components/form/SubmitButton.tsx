import { Button, ButtonProps } from "@nextui-org/button";
import { CircularProgress } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {} & ButtonProps;

const SubmitButton = (props: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button color="secondary" isDisabled={pending} type="submit" {...props}>
      {pending ? <CircularProgress /> : "Submit"}
    </Button>
  );
};

export default SubmitButton;
