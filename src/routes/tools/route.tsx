import Cookies from "js-cookie";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Page, PageHeader } from "@/components/page";
import { PageBreadcrumb } from "@/components/page-breadcrumb";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/tools")({
  component: RouteComponent,
});

function RouteComponent() {
  const defaultOpen = Cookies.get("sidebar:state") !== "false";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <Page>
        <PageHeader>
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <PageBreadcrumb />
          </div>
        </PageHeader>
        <Outlet />
      </Page>
    </SidebarProvider>
  );
}
