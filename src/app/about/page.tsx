export default function About() {
  return (
    <div className="max-w-[80%]">
      <h2 className="text-[40px] mb-7">
        Hi, I'm Max, a Frontend Developer with a unique journey.
      </h2>
      <div className="text-[20px] ">
        <p className="pb-5">
          My passion for coding first sparked back in high school, but it took a
          decade of diverse life experience to realize that building digital
          products is where I truly belong. Returning to programming was a
          conscious, driven choice, and I’ve spent the last two years
          translating that determination into a solid technical foundation.
        </p>
        <p className="pb-5">
          I am a JavaScript/TypeScript enthusiast with a core focus on React. My
          portfolio includes several high-quality pet projects and a
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
      <section className="stack mt-5 ">
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
          <li className="learning">
            <strong>Currently Learning:</strong> Next.js & Server-side Rendering
          </li>
        </ul>
      </section>
    </div>
  );
}
