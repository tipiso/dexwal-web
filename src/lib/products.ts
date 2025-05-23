import api from "./api";

/** Products List Response */
type Photo = {
  filePath: string;
};

type Product = {
  id: string;
  heroPhoto: { node: Photo };
  heroAltText: string;
};

type ProductsResponse = {
  products: {
    nodes: Product[];
  };
};

/** Single Product Response */

export interface Data {
  product: Product;
}

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
}

export interface SingleProductPhoto {
  node: {
    altText: string;
    srcSet: string;
    title: string;
  };
}

type SingleProductResponse = {
  data: {
    product: SingleProductType;
  };
};

export const getProducts = async (limit: number = 3) =>
  api.post<ProductsResponse>(`
  query Fetch3FirstProducts {
    products(first: ${limit}) {
      nodes {
        id
        heroPhoto {
          node {
            filePath
          }
        }
        heroAltText
      }
    }
}`);

export const getSingleProduct = async (productId: string) =>
  api.post<SingleProductResponse>(`query GetSingleProduct {
  product(id: ${productId}) {
    id
    heroHeader
    heroAltText
    heroText
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
    moreDetailsAltText
    moreDetailsHeader
    moreDetailsText
    moreDetailsPhoto {
      node {
        altText
        srcSet
        title
      }
    }
    heroPhoto {
      node {
        altText
        srcSet
        title
      }
    }
  }
}`);
