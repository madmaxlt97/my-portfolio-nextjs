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
          Hi, I'm Max, a Frontend Developer with a unique journey.
        </h2>

        <div className="text-[20px]">
          <p className="pb-5">
            My passion for coding first sparked back in high school, but it took
            a decade of diverse life experience to realize that building digital
            products is where I truly belong. Returning to programming was a
            conscious, driven choice, and I’ve spent the last two years
            translating that determination into a solid technical foundation.
          </p>

          <p className="pb-5">
            I am a JavaScript/TypeScript enthusiast with a core focus on React.
            My portfolio includes several high-quality pet projects and a
            successfully delivered commercial application for a private client.
            This experience taught me how to handle real-world requirements and
            bridge the gap between code and business needs.
          </p>

          <p className="pb-5">
            I thrive on solving logic puzzles and constantly improving my
            workflow. Currently, I am deep-diving into Next.js to build more
            performant, SEO-friendly, and scalable web applications.
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
            src="/Maksim-Nikolajev-CV.avif"
            width={450}
            height={700}
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
                src="/Maksim-Nikolajev-CV.avif"
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
