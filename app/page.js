import Image from "next/image";
import { getSanityData, getPosts } from "./lib/getData";
import { Fragment } from "react";

export default async function Home() {
  const data = await getPosts();
  if (!Object.entries(data).length) {
    return <>
      <h2 className={"w-full text-2xl text-black"}>Uh-oh.</h2>
      <p className={"p-[10px] bg-white text-black"}>No posts found.</p>
    </>
  }

  const parsePiece = (part, key) => {
    if (part.type === "text") {
      return <p className={"w-full text-black"} key={key}>{part.value}</p>
    } else if (part.type === "image") {
      if (!part.src) {
        return <Fragment key={key} />;
      }
      return <Image key={key} src={part.src} alt={`Image ${key}`} width={part.width} height={part.height} />
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-[1000px] mx-auto bg-white flex flex-wrap gap-[20px]">
        {data?.map((post, index) => (
          <div key={index} className="w-full flex flex-row items-stretch rounded-lg overflow-clip">
            <div className={"w-[800px] flex flex-col gap-2 items-center p-[20px]"}>
              <h2 className={"w-full text-black text-2xl"}>{post.title}</h2>
              {
                post.body.map((part, index) => parsePiece(part, index))
              }
            </div>
            <div className={"w-[150px] bg-zinc-200 flex flex-col justify-start p-[25px] mx-[20px]"}>
              <Image src={post.author.src} alt={post.author.name} width={100} height={100} className={"mx-auto rounded-full"} />
              <p key={post.author.name} className={"w-full text-center text-black"}>{post.author.name}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
