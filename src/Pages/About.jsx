import { Link } from "react-router";

const values = [
  {
    number: "01",
    title: "Considered design",
    description:
      "A calm layout, clear typography, and space to let each product stand out.",
  },
  {
    number: "02",
    title: "Simple discovery",
    description:
      "Browse collections, search for favourites, and sort products your way.",
  },
  {
    number: "03",
    title: "Your own pace",
    description:
      "Build your shopping bag and return to it later on the same browser.",
  },
];

function About() {
  return (
    <div className="bg-[#121210] text-[#f5f1e8]">
      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9ad78]">
            Behind Luxury Store
          </p>

          <h1 className="mt-6 font-serif text-5xl leading-tight sm:text-7xl">
            Style in the
            <br />
            <span className="italic text-[#c9ad78]">
              small details.
            </span>
          </h1>

          <p className="mt-7 max-w-lg leading-8 text-stone-400">
            Luxury Store is a concept shopping website built around
            a simple idea: everyday essentials deserve a thoughtful
            shopping experience.
          </p>

          <p className="mt-5 max-w-lg leading-8 text-stone-400">
            From sneakers to accessories, the focus is on clear
            presentation, easy browsing, and a look that feels
            consistent across every page.
          </p>

          <Link
            to="/collections"
            className="mt-8 inline-flex items-center gap-8 border border-[#c9ad78]/50 px-6 py-4 text-xs uppercase tracking-widest text-[#c9ad78] transition-colors hover:bg-[#c9ad78] hover:text-[#121210]"
          >
            Discover the collections
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Editorial image */}
        <div className="relative border border-[#c9ad78]/25 p-3 sm:p-5">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85"
            alt="Minimal wristwatch on a light background"
            className="aspect-4/5 w-full object-cover"
          />

          <div className="absolute bottom-7 left-7 right-7 bg-[#121210]/95 p-5 sm:bottom-10 sm:left-10 sm:right-10">
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#c9ad78]">
              Our perspective
            </p>

            <p className="mt-3 font-serif text-2xl sm:text-3xl">
              Less noise. More character.
            </p>
          </div>
        </div>
      </section>

      {/* Design values */}
      <section className="border-y border-[#c9ad78]/20">
        <div className="mx-auto grid max-w-7xl px-6 sm:px-8 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="border-b border-[#c9ad78]/20 py-10 last:border-b-0 md:border-r md:border-b-0 md:px-7 md:first:pl-0 md:last:border-r-0"
            >
              <span className="text-xs tracking-widest text-[#c9ad78]">
                {value.number}
              </span>

              <h2 className="mt-5 font-serif text-3xl">
                {value.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-stone-400">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Developer story */}
      <section className="bg-[#f5f1e8] px-6 py-16 text-[#22221e] sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#806339]">
              Meet the developer
            </p>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
              Built by
              <br />
              Haris Imran.
            </h2>

            <p className="mt-5 text-sm text-stone-500">
              Frontend development · Faisalabad, Pakistan
            </p>
          </div>

          <div>
            <p className="leading-8 text-stone-600">
              I created Luxury Store to practise building a complete
              shopping interface with React and Tailwind CSS.
              The project brings together separate pages, product
              filters, and a shared shopping bag.
            </p>

            <p className="mt-5 leading-8 text-stone-600">
              This is a portfolio demonstration. Products and prices
              are illustrative, and no real orders or payments are
              processed.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {["React", "Tailwind CSS", "React Router"].map(
                (technology) => (
                  <span
                    key={technology}
                    className="border border-black/15 px-4 py-2 text-xs tracking-wide"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-block border-b border-[#806339] pb-2 text-sm text-[#806339] transition-colors hover:text-black"
            >
              Let's talk about your next project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;