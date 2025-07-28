import { client } from "./sanity";

export async function getSanityData() {

    const query = `*[_type == "profile"]{
    _id,
    name,
    "src": image.asset->url
    }`;

    try {
        const data = await client.fetch(query, {
            cache: 'no-store'
        });
        return data;
    }

    catch (error) {
        console.log(error);
    }
}