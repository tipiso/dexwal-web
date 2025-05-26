import api from "./api";
import { AppLangEnum, ProductCategoriesEnum } from "./types";
import type {ProductsByCategoryResponse, ProductsPathsPrefetchResponse, ProductsResponse} from "./dtos";

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
          heroHeader
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

export const getProductsByCategory = async (category:ProductCategoriesEnum) => api.post<ProductsByCategoryResponse>(`
  query QueryProductsByCategory {
  productcategories(where: {slug: "${category}"}, first: 80) {
    nodes {
      slug
      products(first: 80) {
        nodes {
          languages {
            nodes {
              slug
            }
          }
          heroPhoto {
            node {
              srcSet
            }
          }
          heroHeader
          heroAltText
          id
        }
      }
    }
  }
}
  `)
