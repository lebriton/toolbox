import React from "react";

import { ClipboardManager } from "@/components/clipboard-manager";
import { zodResolver } from "@hookform/resolvers/zod";
import debounce from "lodash.debounce";
import { FlexLine } from "@/components/extras";
import { HelpCircle } from "@/components/help-circle";
import { PageBody, PageContent, PageSection } from "@/components/page";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { createLazyFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowDownUp, Binary, Type } from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";

const configSchema = z.object({
  conversionMode: z.enum(["encode", "decode"]),
  liveMode: z.boolean(),
});

export const Route = createLazyFileRoute("/toolbox/tools/base64-text")({
  component: RouteComponent,
});

function RouteComponent() {
  const config = useForm<z.infer<typeof configSchema>>({
    resolver: zodResolver(configSchema),
    defaultValues: {
      conversionMode: "encode",
      liveMode: true,
    },
  });
  const configWatch = config.watch();

  const [input, setInput] = React.useState<string>("");
  const [output, setOutput] = React.useState<string>("");

  const convert = (value: string) => {
    let func = true ? btoa : atob;
    setOutput(func(value));
  };

  const debouncedConvert = React.useCallback(debounce(convert, 500), []);

  return (
    <PageBody>
      <PageContent>
        <PageSection>
          <FlexLine
            className="mb-1.5 w-64"
            start={<Label htmlFor="input">Settings</Label>}
            end={
              <Button
                variant="link"
                size="sm"
                onClick={() => {
                  config.reset();
                }}
              >
                Reset
              </Button>
            }
          />

          <div className="space-y-4">
            <ButtonGroup>
              <Button
                className={cn(
                  configWatch.conversionMode === "encode" &&
                    "!bg-primary !text-primary-foreground",
                )}
                variant="outline"
                onClick={() => config.setValue("conversionMode", "encode")}
              >
                <Binary />
                Encode
              </Button>
              <Button
                className={cn(
                  configWatch.conversionMode === "decode" &&
                    "!bg-primary !text-primary-foreground",
                )}
                variant="outline"
                onClick={() => config.setValue("conversionMode", "decode")}
              >
                <Type />
                Decode
              </Button>
            </ButtonGroup>

            <div className="flex items-center space-x-2">
              <Switch
                id="live-mode"
                checked={configWatch.liveMode}
                onCheckedChange={(checked) => {
                  config.setValue("liveMode", checked);
                }}
              />
              <Label htmlFor="live-mode">Live mode</Label>
              <HelpCircle tooltip="Convert the text in real time as you type or paste." />
            </div>
          </div>
        </PageSection>
      </PageContent>
      <PageContent grow>
        <PageSection>
          <FlexLine
            className="mb-1.5"
            start={<Label htmlFor="input">Input</Label>}
            end={
              <Button
                size="sm"
                disabled={configWatch.liveMode}
                onClick={() => convert(input)}
              >
                <ArrowDown />
                Convert ({configWatch.conversionMode === "encode" && "encode"}
                {configWatch.conversionMode === "decode" && "decode"})
              </Button>
            }
          />

          <ClipboardManager
            mode="paste"
            component={(ref) => (
              <Textarea
                ref={ref}
                id="input"
                rows={10}
                placeholder="Type (or paste) the text to encode or decode here."
                autoFocus
                value={input}
                onChange={(event) => {
                  const value = event.target.value;
                  setInput(value);
                  if (configWatch.liveMode) debouncedConvert(value);
                }}
              />
            )}
          />
        </PageSection>

        <PageSection>
          <FlexLine
            className="mb-1.5"
            start={<Label htmlFor="output">Output</Label>}
            end={
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setInput(output);
                  setOutput(input);
                  config.setValue(
                    "conversionMode",
                    configWatch.conversionMode === "decode"
                      ? "encode"
                      : "decode",
                  );
                  // XXX: too lazy to use a ref :)
                  document.getElementById("input")?.focus();
                }}
              >
                <ArrowDownUp />
                Swap
              </Button>
            }
          />
          <ClipboardManager
            component={(ref) => (
              <Textarea
                ref={ref}
                id="output"
                className="bg-muted"
                rows={10}
                readOnly
                value={output}
              />
            )}
          />
        </PageSection>
      </PageContent>
    </PageBody>
  );
}
