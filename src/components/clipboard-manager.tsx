import React, { ReactNode } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ClipboardCopy, ClipboardPaste } from "lucide-react";

export const ClipboardManager = ({
  component,
  mode = "copy",
}: {
  component: (ref: React.Ref<any>) => ReactNode;
  mode?: "copy" | "paste";
}) => {
  const ref = React.useRef<any>(null);

  return (
    <div className="relative">
      {/* Call the component function and pass the ref */}
      {component(ref)}

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="absolute right-2 top-2" asChild>
            <Button variant="outline" size="icon">
              {mode === "copy" && <ClipboardCopy />}
              {mode === "paste" && <ClipboardPaste />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {mode === "copy" && "Copy to clipboard"}
              {mode === "paste" && "Paste from clipboard"}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
