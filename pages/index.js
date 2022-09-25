import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Home() {
  const [text, count] = useTypewriter({
    words: [
      "We are busy creating...",
      "your new Bank,",
      "vabank.me",
      "Be patient,",
      "we will let you know once done."
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <Head>
        <title>VaBank | LaBank - Lord&apos;s Bank</title>
        <meta name="description" content="VaBank & LaBank - Lord's bank" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className="flex items-center justify-center w-[90%] md:w-[50%] md:p-20">
        <h1 className="text-6xl md:text-6xl lg:text-7xl font-semibold">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#6e2fd2" />
        </h1>
      </main>
    </div>
  );
}
