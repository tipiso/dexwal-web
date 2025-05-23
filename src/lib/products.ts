import api from "./api";

type Photo = {
    filePath: string;
}

type Product = {
    id: string,
    heroPhoto: { node: Photo },
    heroAltText: string
}

type ProductsResponse = {
    products: {
        nodes: Product[]
    }
}

export const getProducts = async (limit:number = 3) => api.post<ProductsResponse>(`
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