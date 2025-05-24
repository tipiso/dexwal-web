import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://dexwalppoz.com",
  base: "/",
  integrations: [],
  i18n: {
    locales: ["en", "pl"],
    defaultLocale: "pl",
  },
  routing: {
    prefixDefaultLocale: false,
  },
  env: {
    schema: {
      API_URL: envField.string({ context: "client", access: "public" }),
    },
  },
});
