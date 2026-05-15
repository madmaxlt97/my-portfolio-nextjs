import Link from "next/link";
import Image from "next/image";
export default function Portfolio() {
  const cards = [
    {
      id: 1,
      image: "/finmavi1.avif",
      alt: "finmavi",
      title: "Finmavi | Typescript, React, Node.js, MongoDB, Express",
      description:
        "Financial investment site where clients can see info, leave their contacts and admin can reach them to provide more info or organize a call.",
      git: "https://github.com/madmaxlt97/quantumcopy",
      link: "https://finmavi.com",
    },
    {
      id: 2,
      image: "/landing.avif",
      alt: "Max Nikolajev landing page",
      title: "My first landing page | HTML, CSS",
      description: "My landing page with info about me and contacts.",
      git: "https://github.com/madmaxlt97/mylandingpage",
      link: "https://mylandingpage-tau.vercel.app/",
    },
    {
      id: 3,
      image: "/EBS.avif",
      alt: "Explore Baltic States",
      title: "Explore Baltic States | TypeScript, React, CSS",
      description:
        "Website about Baltic countries with custom design and animations.",
      git: "https://github.com/madmaxlt97/explorebalticstates",
      link: "https://explorebalticstates.com/",
    },
    {
      id: 3,
      image: "/CarsMarket.avif",
      alt: "CarsMarket",
      title: "CarsMarket | TypeScript, Next.js, Tailwind, Prisma, Supabase",
      description:
        "Custom car marketplace with filtering, image uploads, and CRUD functionality. Currently in development.",
      git: "https://github.com/madmaxlt97/carsmarket",
      link: "",
    },
  ];
  return (
    <div className="portfolio-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 max-w-6xl mx-auto">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col h-full border p-4 rounded-xl hover:shadow-xl hover:scale-105 transition max-w-sm mx-auto"
        >
          <Image
            src={card.image}
            width={500}
            height={600}
            alt={card.alt}
            className="rounded-lg w-full h-48 object-cover"
          />

          <div className="info-block flex flex-col items-center text-center mt-4">
            <Link
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <p className="font-semibold text-lg">{card.title}</p>
            </Link>

            <p className="card-description text-sm text-gray-300 mt-2">
              {card.description}
            </p>
          </div>

          <div className="link-btns flex gap-3 mt-auto pt-6 justify-center">
            <Link
              href={card.git}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-full text-sm hover:scale-105 transition"
            >
              GitHub
            </Link>

            <Link
              href={card.link}
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
