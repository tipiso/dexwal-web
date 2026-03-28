import { supportedLocales } from "./constants";

/** Organization + WebSite graph; same on all pages for entity consistency. */
export function getOrganizationAndWebsiteJsonLd(siteBase: string) {
  const root = siteBase.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${root}/#organization`,
        name: "Dexwal",
        legalName: "DEXWAL",
        url: `${root}/`,
        logo: `${root}/og-image.png`,
        email: "ppoz@dexwal.com",
        telephone: "+48413787011",
        address: {
          "@type": "PostalAddress",
          streetAddress: "ul. Dobrowoda 12",
          addressLocality: "Busko-Zdrój",
          postalCode: "28-100",
          addressCountry: "PL",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${root}/#website`,
        url: `${root}/`,
        name: "Dexwal",
        inLanguage: supportedLocales,
        publisher: { "@id": `${root}/#organization` },
      },
    ],
  };
}
