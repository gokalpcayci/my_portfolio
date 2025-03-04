import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

import { Cards } from "./components/cards";
const navigation = [{ name: "Contact", href: "/contact" }];
console.log("GitHub Token:", process.env.GITHUB_TOKEN);

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen  bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-300 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 " quantity={100} />
      <h1 className="z-10 text-8xl text-transparent  bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        gklpcyc
      </h1>

      <div className=" w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center flex flex-col items-center justify-center animate-fade-in max-w-lg space-y-6">
        <h2 className="text-sm text-zinc-500  ">
          As a passionate Front-End Developer committed to clean code and
          exceptional design, I look forward to discussing how I can bring your
          project vision to life.
        </h2>

        <Cards />
      </div>
    </div>
  );
}
