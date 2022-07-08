import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  outDir: "./release",
  site: "https://schmidt-joer.com",
  srcDir: "./source",
  trailingSlash: "never"
});