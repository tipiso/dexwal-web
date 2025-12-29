import type { AppLangEnum } from "./types";

/** Products List Response */
export type Photo = {
  srcSet: string;
};

export type ProductListItem = {
  id: string;
  heroPhoto: { node: Photo };
  heroHeader: string;
  heroAltText: string;
  cerification?: string;
};

export type Language = { node: { slug: string } };

export type ProductsResponse = {
  languages: {
    nodes: {
      products: {
        nodes: ProductListItem[];
      };
    }[];
  };
};

/** Single Product Response */
export interface SingleProductType {
  id: string;
  heroHeader: string;
  heroAltText: string;
  heroText: string;
  introductionAltText: string;
  introductionHeader: string;
  introductionText: string;
  introductionPhoto: SingleProductPhoto;
  moreDetailsAltText: string;
  moreDetailsHeader: string;
  moreDetailsText: string;
  moreDetailsPhoto: SingleProductPhoto | null;
  heroPhoto: SingleProductPhoto;
  language: Language;
  cerification?: string;
}

export interface SingleProductPhoto {
  node: {
    id: string;
    altText: string;
    srcSet: string;
    title: string;
  };
}

export type LanguageByProducts = {
  slug: AppLangEnum;
  products: { nodes: SingleProductType[] };
};

export type ProductsPathsPrefetchResponse = {
  languages: {
    nodes: LanguageByProducts[];
  };
};

/** Product Categories fetch */
export type ProductsByCategoryResponse = {
  productcategories: {
    nodes: ProductCategoryNode[];
  };
};

export type ProductCategoryNode = {
  slug: string;
  products: {
    nodes: {
      languages: { nodes: { slug: AppLangEnum }[] };
      heroPhoto: {
        node: {
          srcSet: string;
        };
      };
      id: string;
      heroHeader: string;
      heroAltText: string;
      cerification?: string;
    }[];
  };
};

export type ContactFormDTO = {
  name?: string;
  phone?: string;
  email: string;
  message: string;
};

export type PrivacyPoliciesResponse = {
  privacyPolicies: { nodes: PrivacyPolicy[] };
};

export type PrivacyPolicy = {
  content: string;
  id: string;
  slug: string;
};
