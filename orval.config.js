import { defineConfig } from "orval";
export default defineConfig({
  strapi: {
    input: "./strapi/openapi.json",
    output: {
      target: "./data/api",
      clean: true,
      client: "react-query",
    },
    hooks: {
      afterAllFilesWrite: "npx prettier --write",
    },
  },
});
