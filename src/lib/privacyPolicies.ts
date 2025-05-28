import api from "./api";
import type { PrivacyPoliciesResponse } from "./dtos";

export const getPrivacyPolicies = async () =>
  api.post<PrivacyPoliciesResponse>(`
 query PrivacyPolicies {
   privacyPolicies {
     nodes {
       content
       id
       slug
     }
   }
 }
  `);
