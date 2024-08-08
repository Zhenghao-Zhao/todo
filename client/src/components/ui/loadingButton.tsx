import { ComponentProps } from "react";
import { Button } from "./button";
import { Loader2 } from "lucide-react";

type Props = ComponentProps<typeof Button> & {
  name?: string;
};

export function LoadingButton({ name, ...props }: Props) {
  return (
    <Button {...props} disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {name ?? "Please wait"}
    </Button>
  );
}
