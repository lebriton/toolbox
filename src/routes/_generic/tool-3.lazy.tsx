import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_generic/tool-3")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="p-2">Tool 3</div>;
}
