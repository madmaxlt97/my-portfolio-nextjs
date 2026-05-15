import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-[45px] font-semibold flex justify-center">
          Hi, I'm Max Nikolajev
        </h1>
        <p className=" font-normal text-[30px] flex justify-center my-8">
          I'm Web Developer. Here You can see my works, experiences and
          contacts.
        </p>
        <div className="img-container flex justify-center my-6">
          <Image
            src="/IntroPageScreen.avif"
            width={700}
            height={700}
            alt="screen"
          />
        </div>

        <Link
          href="/portfolio"
          className="flex justify-center bg-gradient-to-br from-[#4e4e4e]/70 to-[#676161]/70 max-w-[30%] mx-auto text-xl hover:shadow-lg hover:scale-105 transition"
        >
          My Projects →
        </Link>
      </main>
    </>
  );
}
