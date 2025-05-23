import { API_URL } from "astro:env/client";

type GraphQLResponse<T> = {
    data: T;
    errors?: { message: string }[];
  };
  
  export class WPGraphQLClient {
    private baseURL: string;
    private headers: HeadersInit;
  
    constructor(baseURL: string, headers: HeadersInit = {}) {
      this.baseURL = baseURL;
      this.headers = {
        'Content-Type': 'application/json',
        ...headers,
      };
    }
  
    async post<T>(query: string, variables: Record<string, any> = {}): Promise<T> {
      const response = await fetch(this.baseURL, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({ query, variables }),
      });
  
      const json: GraphQLResponse<T> = await response.json();
  
      if (json.errors) {
        console.error("GraphQL errors:", json.errors);
        throw new Error(json.errors.map(e => e.message).join(", "));
      }

      return json.data;
    }
  }

  export default new WPGraphQLClient(`${API_URL}/graphql`);