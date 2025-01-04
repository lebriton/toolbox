import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />

      {process.env.NODE_ENV !== "production" && (
        <TanStackRouterDevtools position="bottom-right" />
      )}
    </>
  ),
});
