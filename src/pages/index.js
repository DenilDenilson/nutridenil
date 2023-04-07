import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-orange-300 backdrop-blur-sm">
        Hello world!
      </h1>
      <div class="backdrop-blur-sm bg-white/30 ...">Hola</div>
    </>
  );
}
