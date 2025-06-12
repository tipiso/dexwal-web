import { API_URL } from "astro:env/client";

export class WPRestClient {
  private baseURL: string;
  private headers: HeadersInit;

  constructor(baseURL: string, headers: HeadersInit = {}) {
    this.baseURL = baseURL.replace(/\/+$/, ""); // remove trailing slash
    this.headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  private async request<T>(
    method: string,
    endpoint: string,
    body?: any
  ): Promise<T> {
    const url = `${this.baseURL}/${endpoint.replace(/^\/+/, "")}`; // clean slashes

    const options: RequestInit = {
      method,
      headers: this.headers,
    };

    if (body && method !== "GET") {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(
        `Request failed: ${response.status} ${response.statusText}\n${errText}`
      );
    }

    return response.json() as Promise<T>;
  }

  get<T>(endpoint: string): Promise<T> {
    return this.request<T>("GET", endpoint);
  }

  post<T>(endpoint: string, body: any): Promise<T> {
    return this.request<T>("POST", endpoint, body);
  }

  put<T>(endpoint: string, body: any): Promise<T> {
    return this.request<T>("PUT", endpoint, body);
  }

  delete<T>(endpoint: string): Promise<T> {
    return this.request<T>("DELETE", endpoint);
  }
}

export default new WPRestClient(`${API_URL}/wp-json`);
