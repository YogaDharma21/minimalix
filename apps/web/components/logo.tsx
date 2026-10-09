import { cn } from "@workspace/ui/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <span className={cn("text-lg font-semibold tracking-tight", className)}>
    Minimalix
  </span>
);
