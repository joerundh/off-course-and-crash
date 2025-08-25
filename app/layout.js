import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sanity Crash Course",
  description: "With some (in certain circles not so) trivial content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-[1000px] my-[10px] mx-auto flex flex-col gap-[20px]`}
      >
        <header className={"w-full border-[1px] border-zinc-600 p-10 flex flex-col gap-2"}>
          <h1 className={"w-full text-xl"}>Sanity Crash Course</h1>
          <p className={"w-full text-xs"}>(Affectionately denoted here by "Off Course and Crash")</p>
        </header>
        {children}
      </body>
    </html>
  );
}
