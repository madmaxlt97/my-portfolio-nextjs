import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <div className="portfolio-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 max-w-6xl ">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col max-h-[450px] w-full border p-4 rounded-xl shadow-lg hover:shadow-xl  hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          <Image
            src={project.image}
            width={500}
            height={600}
            alt={project.alt}
            className="rounded-lg w-full h-48 object-cover"
          />

          <div className="info-block flex flex-col items-center text-center mt-4">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <p className="font-semibold text-lg">{project.title}</p>
            </Link>

            <p className="card-description text-sm text-gray-300 mt-2">
              {project.description}
            </p>
          </div>

          <div className="link-btns flex gap-3 mt-auto pt-6 justify-center">
            <Link
              href={project.git}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-full text-sm hover:scale-105 transition"
            >
              GitHub
            </Link>

            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:scale-105 transition"
            >
              Live Demo
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
