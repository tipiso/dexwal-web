import { defineConfig, envField } from "astro/config";
import { PAGE_URL } from "src/lib/constants";
import sitemap from "@astrojs/sitemap";
import { AppLangEnum } from "src/lib/types";

// https://astro.build/config
export default defineConfig({
  site: PAGE_URL,
  base: "/",
  integrations: [
    sitemap({
      filter: (page) => !page.includes(`/${AppLangEnum.PL}`),
      i18n: {
        defaultLocale: AppLangEnum.PL,
        locales: {
          pl: AppLangEnum.PL,
          en: AppLangEnum.EN,
          cs: AppLangEnum.CS,
          es: AppLangEnum.ES,
        },
      },
    }),
  ],
  i18n: {
    locales: Object.values(AppLangEnum).map((l) => l),
    defaultLocale: AppLangEnum.PL,
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
