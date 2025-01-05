import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Check, ClipboardCopy } from "lucide-react";

export const ClipboardManager = ({
  value,
  children,
}: React.PropsWithChildren<{
  value: string;
}>) => {
  const [copied, setCopied] = React.useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);

    // Reset the icon back to ClipboardCopy after 1 second
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="relative">
      {children}

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="absolute right-2 top-2" asChild>
            <Button variant="outline" size="icon" onClick={handleCopy}>
              {copied ? (
                <Check className="text-green-600" />
              ) : (
                <ClipboardCopy />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy to clipboard</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
