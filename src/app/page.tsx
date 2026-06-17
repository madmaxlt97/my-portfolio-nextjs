import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-[45px] font-semibold flex justify-center">
          Hi, I'm Max Nikolajev
        </h1>
        <p className="font-normal text-[30px] flex justify-center my-8 max-w-[70%] mx-auto">
          I'm a Front-End / Full-Stack Developer. I build modern,
          high-performance web applications using Next.js, React, and
          TypeScript.
        </p>
        <div className="img-container flex justify-center my-6">
          <Image
            src="/IntroPageScreen.avif"
            loading="eager"
            width={700}
            height={700}
            alt="screen"
          />
        </div>

        <Link
          href="/portfolio"
          className="flex justify-center rounded bg-gradient-to-br from-[#4e4e4e]/70 to-[#676161]/70 max-w-[30%] mx-auto text-xl hover:shadow-lg hover:scale-105 transition"
        >
          My Projects →
        </Link>
      </div>
    </>
  );
}
