import { useMatches } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export const PageBreadcrumb = () => {
  const matches = useMatches();

  const crumbs = matches
    // @ts-ignore
    .filter((match) => !!match.loaderData?.crumb)
    .map((match) => ({
      // @ts-ignore
      crumb: match.loaderData.crumb,
      href: match.pathname,
    }));

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {index < crumbs.length - 1 ? (
                <BreadcrumbLink href={crumb.href}>{crumb.crumb}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{crumb.crumb}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < crumbs.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
