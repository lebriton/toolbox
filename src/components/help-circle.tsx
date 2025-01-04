import { ReactNode } from "@tanstack/react-router";
import { CircleHelp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const HelpCircle = ({ tooltip }: { tooltip: ReactNode }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <CircleHelp className="size-4" />
        </TooltipTrigger>
        <TooltipContent>{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
