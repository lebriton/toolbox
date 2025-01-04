import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Link
      className="underline hover:no-underline"
      to="/toolbox/tools/base64-text"
    >
      click here
    </Link>
  );
}
