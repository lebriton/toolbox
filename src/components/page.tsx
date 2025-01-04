import { PropsWithChildren } from "react";

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex size-full min-h-screen flex-col">{children}</main>
  );
};

export const PageBody = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-1 divide-x">{children}</div>;
};

export const PageContent = ({
  grow,
  children,
}: PropsWithChildren<{ grow?: boolean }>) => {
  return (
    <div
      data-grow={grow}
      className="flex flex-col divide-y data-[grow=true]:grow"
    >
      {children}
    </div>
  );
};

export const PageHeader = ({ children }: PropsWithChildren) => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      {children}
    </header>
  );
};

export const PageSection = ({ children }: PropsWithChildren) => {
  return <div className="p-4">{children}</div>;
};
