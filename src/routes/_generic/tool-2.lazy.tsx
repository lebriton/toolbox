import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_generic/tool-2")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="p-2">Tool 2</div>;
}
