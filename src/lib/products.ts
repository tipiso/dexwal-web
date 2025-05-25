import api from "./api";
import { AppLangEnum } from "./types";

/** Products List Response */
type Photo = {
  srcSet: string;
};

type ProductListItem = {
  id: string;
  heroPhoto: { node: Photo };
  heroAltText: string;
};

type Language = { node: { slug: string } };

type ProductsResponse = {
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

type ProductsPathsPrefetchResponse = {
  languages: {
    nodes: LanguageByProducts[];
  };
};

export const getProductsByLanguage = async (
  limit: number = 3,
  language: string = AppLangEnum.PL,
  excludeItemId?: string
) =>
  api.post<ProductsResponse>(`
    query FetchProductsBtyLanguage {
  languages(where: {slug: "${language}"}) {
    nodes {
      products (first: ${limit}) {
        nodes {
          heroAltText
          id
          heroPhoto {
            node {
              srcSet
            }
          }
        }
      }
    }
  }
}`);

export const getProductsForPaths = async () => {
  return api.post<ProductsPathsPrefetchResponse>(`
    query PrefetchProductsForPaths {
  languages {
    nodes {
      slug
		products (first: 20) {
    nodes {
      id
      heroAltText
      heroText
      heroHeader
      heroPhoto {
        node {
          id
          altText
          srcSet
          title
        }
      }
      introductionAltText
      introductionHeader
      introductionText
      introductionPhoto {
        node {
          altText
          srcSet
          title
        }
      }
      moreDetailsHeader
      moreDetailsAltText
      moreDetailsText
      moreDetailsPhoto {
        node {
          altText
          srcSet
          title
        }
      }
    }
    }
  }
}
}`);
};
