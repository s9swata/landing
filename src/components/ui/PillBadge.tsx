import * as React from "react";
import { cn } from "@/lib/utils";

interface PillBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const PillBadge = React.forwardRef<HTMLSpanElement, PillBadgeProps>(
  ({ className, icon, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium",
        "bg-surface/50 backdrop-blur-md border border-neutral-700",
        "text-muted-foreground",
        className
      )}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  )
);
PillBadge.displayName = "PillBadge";

export { PillBadge };
