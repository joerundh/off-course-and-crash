import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.SANITY_API_PROJECT_ID,
    dataset: process.env.SANITY_API_DATASET,
    apiVersion: "2023-07-03",
    useCdn: false
});