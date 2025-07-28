import { client } from "./sanity";

export async function getPosts(offset, limit) {
    const query = `*[_type == "post"]{
        _id,
        title,
        body[] {
            _type == "block" => {
                "type": "text",
                "value": children[0].text
            },
            _type == "image" => {
                "type": "image",
                "src": asset->url,
                "width": asset->metadata.dimensions.width,
                "height": asset->metadata.dimensions.height
            }
        },
        author->{
            name,
            "src": image.asset->url
        }
    }`;

    try {
        const data = await client.fetch(query, {
            cache: "no-store"
        });
        return data;
    }
    catch (e) {
        console.log(e);
    }
}