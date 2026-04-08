import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-[60px] font-semibold flex justify-center my-6">
          Hi, I'm Max Nikolajev
        </h1>
        <p className=" font-normal text-[40px] flex justify-center my-8">
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
      </main>
    </>
  );
}
