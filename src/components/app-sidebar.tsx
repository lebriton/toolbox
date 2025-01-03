import { ChevronDown, Home, LucideIcon } from "lucide-react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
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

type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

const sidebarData = {
  navGroups: [
    {
      title: "Tools",
      items: [
        {
          title: "Tool 1",
          url: "/tool-1",
          icon: Home,
        },
        {
          title: "Tool 2",
          url: "/tool-2",
          icon: Home,
        },
        {
          title: "Tool 3",
          url: "/tool-3",
          icon: Home,
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
      className="relative before:absolute before:-left-2 before:top-1 before:h-6 before:w-1 before:rounded-full before:transition-opacity before:duration-200 data-[active=true]:before:bg-primary group-data-[state=collapsed]:before:opacity-0"
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
