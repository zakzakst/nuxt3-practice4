import { resolve } from "path";
import { defineConfig } from "vitest/config";
import { defineVitestProject } from "@nuxt/test-utils/config";

export default defineConfig({
  test: {
    projects: [
      // {
      //   test: {
      //     name: "unit",
      //     include: ["test/{e2e,unit}/*.{test,spec}.ts"],
      //     environment: "node",
      //   },
      // },
      defineVitestProject({
        test: {
          name: "nuxt",
          include: ["test/nuxt/*.{test,spec}.ts"],
          environment: "nuxt",
        },
      }),
    ],
  },
  // resolve: {
  //   alias: {
  //     // "@/components": resolve(__dirname, "./components"),
  //     "@": resolve(__dirname, "./"),
  //   },
  // },
});
