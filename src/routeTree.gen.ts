/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as IndexImport } from "./routes/index";
import { Route as ToolboxToolsRouteImport } from "./routes/toolbox/tools/route";
import { Route as ToolboxToolsBase64TextImport } from "./routes/toolbox/tools/base64-text";

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const ToolboxToolsRouteRoute = ToolboxToolsRouteImport.update({
  id: "/toolbox/tools",
  path: "/toolbox/tools",
  getParentRoute: () => rootRoute,
} as any);

const ToolboxToolsBase64TextRoute = ToolboxToolsBase64TextImport.update({
  id: "/base64-text",
  path: "/base64-text",
  getParentRoute: () => ToolboxToolsRouteRoute,
} as any).lazy(() =>
  import("./routes/toolbox/tools/base64-text.lazy").then((d) => d.Route),
);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/toolbox/tools": {
      id: "/toolbox/tools";
      path: "/toolbox/tools";
      fullPath: "/toolbox/tools";
      preLoaderRoute: typeof ToolboxToolsRouteImport;
      parentRoute: typeof rootRoute;
    };
    "/toolbox/tools/base64-text": {
      id: "/toolbox/tools/base64-text";
      path: "/base64-text";
      fullPath: "/toolbox/tools/base64-text";
      preLoaderRoute: typeof ToolboxToolsBase64TextImport;
      parentRoute: typeof ToolboxToolsRouteImport;
    };
  }
}

// Create and export the route tree

interface ToolboxToolsRouteRouteChildren {
  ToolboxToolsBase64TextRoute: typeof ToolboxToolsBase64TextRoute;
}

const ToolboxToolsRouteRouteChildren: ToolboxToolsRouteRouteChildren = {
  ToolboxToolsBase64TextRoute: ToolboxToolsBase64TextRoute,
};

const ToolboxToolsRouteRouteWithChildren =
  ToolboxToolsRouteRoute._addFileChildren(ToolboxToolsRouteRouteChildren);

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "/toolbox/tools": typeof ToolboxToolsRouteRouteWithChildren;
  "/toolbox/tools/base64-text": typeof ToolboxToolsBase64TextRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "/toolbox/tools": typeof ToolboxToolsRouteRouteWithChildren;
  "/toolbox/tools/base64-text": typeof ToolboxToolsBase64TextRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/toolbox/tools": typeof ToolboxToolsRouteRouteWithChildren;
  "/toolbox/tools/base64-text": typeof ToolboxToolsBase64TextRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: "/" | "/toolbox/tools" | "/toolbox/tools/base64-text";
  fileRoutesByTo: FileRoutesByTo;
  to: "/" | "/toolbox/tools" | "/toolbox/tools/base64-text";
  id: "__root__" | "/" | "/toolbox/tools" | "/toolbox/tools/base64-text";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  ToolboxToolsRouteRoute: typeof ToolboxToolsRouteRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ToolboxToolsRouteRoute: ToolboxToolsRouteRouteWithChildren,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/toolbox/tools"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/toolbox/tools": {
      "filePath": "toolbox/tools/route.tsx",
      "children": [
        "/toolbox/tools/base64-text"
      ]
    },
    "/toolbox/tools/base64-text": {
      "filePath": "toolbox/tools/base64-text.tsx",
      "parent": "/toolbox/tools"
    }
  }
}
ROUTE_MANIFEST_END */
