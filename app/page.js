import Image from "next/image";
import { getSanityData } from "./lib/getData";

export default async function Home() {
  const dataCheck = await getSanityData().then((data) => console.log(data));
  const data = await getSanityData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-wrap gap-8">
        {data?.map((person) => (
          <>
            <div className="">
              <p key={person.name}>{person.name}</p>
              <Image src={person.src} alt={person.name} width={200} height={200} />
            </div>
          </>
        ))}
      </div>
    </main>
  );
}
