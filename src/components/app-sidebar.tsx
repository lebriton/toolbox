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
import { Link } from "@tanstack/react-router";

interface NavGroupProps {
  title: string;
  items: NavItemProps[];
}

interface NavItemProps {
  title: string;
  url: string;
  icon: LucideIcon;
}

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
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

export const NavGroup = ({ title, items }: NavGroupProps) => {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger>
            {title}
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <NavItem {...item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
};

export const NavItem = ({ title, url, icon: Icon }: NavItemProps) => {
  return (
    <SidebarMenuItem key={title}>
      <SidebarMenuButton tooltip={title} asChild>
        <Link href={url}>
          <Icon />
          <span>{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
