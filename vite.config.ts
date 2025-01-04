import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // https://vite.dev/guide/static-deploy#github-pages
  // > If you are deploying to https://<USERNAME>.github.io/<REPO>/ (eg. your repository is
  // at https://github.com/<USERNAME>/<REPO>), then set base to '/<REPO>/'.
  base: "/toolbox/",
});
