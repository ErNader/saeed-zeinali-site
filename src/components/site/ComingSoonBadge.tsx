import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function ComingSoonBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-bold text-accent-foreground ring-1 ring-accent/40",
        className,
      )}
    >
      <Sparkles className="size-3" />
      به‌زودی
    </span>
  );
}
