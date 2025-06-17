import { defineConfig, envField } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://dexwalppoz.com",
  base: "/",
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/pl'),
      i18n: {
        defaultLocale: "pl",
        locales: {
          pl: "pl",
          en: "en",
          cs: "cs",
          es: "es",
        },
      },
    }),
  ],
  i18n: {
    locales: ["en", "pl", "cs", "es"],
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
