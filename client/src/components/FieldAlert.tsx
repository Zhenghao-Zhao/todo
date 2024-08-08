import { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

const BaseClasses = cn("text-sm");

type Severity = "success" | "warning" | "error";

const SeverityMap = new Map<Severity, string>([
  ["success", cn(BaseClasses, "text-green-600")],
  ["warning", cn(BaseClasses, "text-yellow-600")],
  ["error", cn(BaseClasses, "text-red-600")],
]);

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  message: string | undefined;
  severity: Severity;
}
export default function FieldAlert({
  className,
  message,
  severity,
  ...props
}: Props) {
  return (
    <p {...props} className={cn(SeverityMap.get(severity), className)}>
      {message}
    </p>
  );
}
