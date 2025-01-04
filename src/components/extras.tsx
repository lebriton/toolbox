import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const ButtonList = ({ children }: PropsWithChildren) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

export function FlexLine({
  className,
  start,
  center,
  end,
  even = false,
}: {
  className?: string;
  start?: React.ReactNode;
  center?: React.ReactNode;
  end?: React.ReactNode;
  even?: boolean;
}) {
  return (
    <div className={cn("flex items-baseline justify-between", className)}>
      {start && (
        <div className={cn("flex justify-start", even && "flex-1")}>
          {start}
        </div>
      )}
      {center && <div>{center}</div>}
      {end && (
        <div className={cn("flex justify-end", even && "flex-1")}>{end}</div>
      )}
    </div>
  );
}
