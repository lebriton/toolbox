import { ChevronDown, FileDigit, LucideIcon, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

const sidebarData = {
  navGroups: [
    {
      title: "Encoders & Decoders",
      items: [
        {
          title: "Base64 Text",
          url: "/toolbox/tools/base64-text",
          icon: FileDigit,
        },
      ],
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {sidebarData.navGroups.map((props, index) => (
          <NavGroup key={index} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <Card className="shadow-none">
          <form>
            <CardHeader className="p-4 pb-0">
              <CardTitle className="text-sm">Support the project</CardTitle>
              <CardDescription>
                This collection of tools is released under the GPLv3 license.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2.5 p-4">
              <Button
                className="w-full bg-sidebar-primary text-sidebar-primary-foreground shadow-none"
                size="sm"
                asChild
              >
                <a
                  href="https://github.com/lebriton/toolbox"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star />
                  GitHub repository
                </a>
              </Button>
            </CardContent>
          </form>
        </Card>
      </SidebarFooter>
    </Sidebar>
  );
}

export const NavGroup = ({
  title,
  items,
}: {
  title: string;
  items: NavItem[];
}) => {
  const pathname = useLocation({ select: (location) => location.pathname });

  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup className="transition-[padding] duration-200 group-data-[state=expanded]:px-4">
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger>
            {title}
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <NavItem
                  key={index}
                  item={item}
                  isActive={item.url == pathname}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
};
export const NavItem = ({
  item,
  isActive,
}: {
  item: NavItem;
  isActive?: boolean;
}) => {
  return (
    <SidebarMenuItem
      data-active={isActive}
      className="relative before:absolute before:-left-2 before:top-1 before:h-6 before:w-1 before:rounded-full before:transition-opacity before:duration-200 data-[active=true]:before:bg-primary group-data-[mobile=true]:bg-red-400 group-data-[state=collapsed]:before:opacity-0"
      key={item.title}
    >
      <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
        <Link href={item.url}>
          <item.icon />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
