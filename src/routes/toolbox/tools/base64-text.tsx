import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/toolbox/tools/base64-text")({
  loader: () => ({
    crumb: "Base64 Text Encoder & Decoder",
  }),
});
