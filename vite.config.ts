import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: "./src/Mimeish.ts",
      name: "mimeish",
      formats: ["es"],
      fileName: "mimeish",
    },
  },
});
