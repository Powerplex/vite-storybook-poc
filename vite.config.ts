import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "./docs/assets"),
      },
      {
        find: "@public",
        replacement: path.resolve(__dirname, "./public"),
      },
      {
        find: "@devtools",
        replacement: path.resolve(__dirname, "./src/devtools"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./packages/components"),
      },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, "./packages/hooks"),
      },
      {
        find: "@tokens",
        replacement: path.resolve(__dirname, "./packages/tokens"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "./packages/utils"),
      }
    ],
  },
});
