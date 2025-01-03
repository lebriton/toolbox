import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_generic/tool-1")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="p-2">Tool 1</div>;
}
