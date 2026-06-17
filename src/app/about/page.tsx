"use client";
import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-[30px] mb-7">
          <b>
            <i>From Banking Logic to Web Engineering.</i>
          </b>
        </h2>

        <div className="text-[20px]">
          <p className="pb-5">
            I am a Front-End Developer with a strong foundation in building
            modern, high-performance web applications using React, Next.js, and
            TypeScript. My transition into software engineering stems from a
            deep interest in creating scalable systems and clean, responsive
            user interfaces.
          </p>

          <p className="pb-5">
            Having a background in banking education equips me with an
            analytical mindset, attention to detail, and a structured approach
            to problem-solving. I look at development not just as writing code,
            but as a way to solve real business challenges, manage state
            logically, and deliver robust digital products.
          </p>

          <p className="pb-5">
            I am passionate about performance optimization, clean architecture,
            and intuitive UX. My hands-on projects reflect this commitment —
            whether it is building full-stack web applications with Next.js,
            Prisma, and Supabase, or optimizing portfolio performance scores up
            to perfect metrics in Lighthouse. I thrive on continuous learning
            and am eager to contribute to impactful web development initiatives.
          </p>
        </div>

        <section className="stack mt-5">
          <h3 className="text-[25px] mb-3">My Tech Stack</h3>
          <ul>
            <li>
              <strong>Languages:</strong> JavaScript (ES6+), TypeScript
            </li>
            <li>
              <strong>Library:</strong> React
            </li>
            <li>
              <strong>Styling:</strong> HTML5, CSS3, SCSS, Tailwind CSS
            </li>
            <li>
              <strong>Tools:</strong> Git, GitHub, npm/yarn
            </li>
            <li>
              <strong>Currently Learning:</strong> Next.js & Server-side
              Rendering
            </li>
          </ul>
        </section>
      </div>
      <div className="flex justify-center lg:justify-end">
        <div
          className="relative inline-block cursor-pointer group"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="/Maksim_Nikolajev_CV.avif"
            width={450}
            height={700}
            loading="eager"
            alt="Maksim Nikolajev CV"
            className="rounded-xl shadow-lg max-w-md w-auto"
          />

          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl flex items-center justify-center">
            <Search className="w-12 h-12 text-white" />
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300"
              >
                ×
              </button>

              <Image
                src="/Maksim_Nikolajev_CV.avif"
                width={1400}
                height={1400}
                alt="Maksim Nikolajev CV enlarged"
                className="rounded-xl max-h-[90vh] w-auto"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
