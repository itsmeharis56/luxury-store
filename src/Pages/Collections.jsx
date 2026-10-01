import { Link } from "react-router";
import { products } from "../Product.js";

const collections = [
  {
    name: "Sneakers",
    title: "Make your move.",
    description:
      "Bold accents and everyday favourites. Find the next addition to your sneaker rotation.",
    productId: 2,
  },
  {
    name: "Watches",
    title: "Your time. Your style.",
    description:
      "Explore considered details and distinctive watch styles for your personal collection.",
    productId: 4,
  },
  {
    name: "Bags",
    title: "Carry your character.",
    description:
      "From relaxed backpacks to statement bags, discover a style that feels like you.",
    productId: 10,
  },
  {
    name: "Accessories",
    title: "The finishing touch.",
    description:
      "Small details bring an outfit together. Explore the accessories edit.",
    productId: 12,
  },
];

export default function Collections() {
  return (
    <div className="bg-[#f5f1e8] text-[#22221e]">
      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-14 lg:px-8 lg:pt-20">
        <div className="grid gap-8 border-b border-black/15 pb-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#806339]">
              The collections
            </p>

            <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
              Different details.
              <span className="block italic text-[#806339]">
                One personal style.
              </span>
            </h1>
          </div>

          <div>
            <p className="max-w-md text-sm leading-8 text-black/60">
              Start with the pieces that speak to you. Explore four
              collections and build an edit of your own.
            </p>

            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#806339]">
              04 collections · {products.length} pieces
            </p>
          </div>
        </div>
      </section>

      {/* Collection cards */}
      <section
        aria-label="Shop by collection"
        className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 md:grid-cols-2 lg:gap-10 lg:px-8"
      >
        {collections.map((collection, index) => {
          const cover = products.find(
            (product) => product.id === collection.productId
          );

          const count = products.filter(
            (product) => product.category === collection.name
          ).length;

          return (
            <Link
              key={collection.name}
              to={`/shop?category=${encodeURIComponent(collection.name)}`}
              className="group block border border-black/10 bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#806339]"
            >
              <div className="relative overflow-hidden bg-[#e8e3d9]">
                {cover && (
                  <img
                    src={cover.image}
                    alt={`${collection.name} collection`}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 bg-[#f5f1e8] px-4 py-2 text-[10px] uppercase tracking-[0.2em]">
                  Collection 0{index + 1}
                </span>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white">
                  <h2 className="font-serif text-4xl sm:text-5xl">
                    {collection.name}
                  </h2>

                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50 text-xl transition-colors group-hover:border-[#c9ad78] group-hover:bg-[#c9ad78] group-hover:text-[#22221e]"
                  >
                    ↗
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-serif text-2xl">
                    {collection.title}
                  </h3>

                  <span className="text-xs text-[#806339]">
                    {count} {count === 1 ? "piece" : "pieces"}
                  </span>
                </div>

                <p className="mt-4 max-w-md text-sm leading-7 text-black/60">
                  {collection.description}
                </p>

                <span className="mt-6 inline-block border-b border-[#806339]/40 pb-1 text-xs uppercase tracking-[0.15em] text-[#806339]">
                  Explore {collection.name}
                </span>
              </div>
            </Link>
          );
        })}
      </section>

      {/* Shop invitation */}
      <section className="bg-[#22221e] px-6 py-14 text-[#f5f1e8] lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#c9ad78]">
              Explore without limits
            </p>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              See the complete edit.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/60">
              Browse every piece, compare styles, and find your favourites.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex w-fit shrink-0 items-center gap-10 border border-[#c9ad78]/60 px-7 py-4 text-sm text-[#c9ad78] transition-colors hover:bg-[#c9ad78] hover:text-[#22221e]"
          >
            Shop All Products
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}