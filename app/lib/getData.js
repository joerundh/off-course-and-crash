import { client } from "./sanity";

export async function getPosts(offset, limit) {
    const query = `*[_type == "post"]{
        _id,
        title,
        body[1..-1] {
            _type == "block" => {
                "type": "text",
                "value": children[0].text
            },
            _type == "image" => {
                "type": "image",
                "src": asset->url
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