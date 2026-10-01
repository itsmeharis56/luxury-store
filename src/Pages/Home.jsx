import { Link } from "react-router";
import { products } from "../Product.js";
  
const categories = [
  {
    name: "Sneakers",
    subtitle: "Find your next step.",
    productId: 2,
  },
  {
    name: "Watches",
    subtitle: "Details worth your time.",
    productId: 4,
  },
  {
    name: "Bags",
    subtitle: "Carry a little character.",
    productId: 10,
  },
  {
    name: "Accessories",
    subtitle: "Finish it your way.",
    productId: 12,
  },
];

const featuredIds = [1, 4, 10, 12];

function formatPrice(amount) {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}

export default function Home() {
  const heroProduct = products.find((product) => product.id === 1);
  const watchProduct = products.find((product) => product.id === 3);

  const featuredProducts = featuredIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  return (
    <div className="bg-[#f5f1e8] text-[#22221e]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-8 lg:px-8 lg:pt-12">
        <div className="grid overflow-hidden border border-black/10 lg:grid-cols-2">
          {/* Hero text */}
          <div className="relative flex flex-col justify-center bg-[#ede8df] px-6 py-12 sm:px-10 lg:px-12 lg:py-20">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#806339]" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-[#806339] sm:text-xs">
                The everyday edit
              </p>
            </div>

            <h1 className="mt-7 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
              A little luxury.
              <span className="mt-2 block italic text-[#806339]">
                A lot of you.
              </span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-7 text-black/60 sm:text-base">
              Statement sneakers. Considered accessories. Discover the
              pieces that make an everyday outfit feel like your own.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/shop"
                className="group inline-flex items-center justify-between gap-8 bg-[#22221e] px-6 py-4 text-sm text-[#f5f1e8] transition-colors hover:bg-[#806339]"
              >
                Explore the Edit

                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <Link
                to="/collections"
                className="inline-flex items-center justify-center border border-black/20 px-6 py-4 text-sm transition-colors hover:border-[#806339] hover:text-[#806339]"
              >
                View Collections
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-black/15 pt-6">
              <div>
                <p className="font-serif text-2xl">
                  {String(products.length).padStart(2, "0")}
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-black/50">
                  Pieces to discover
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl">04</p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-black/50">
                  Collections
                </p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          {heroProduct && (
            <div className="relative min-h-420px overflow-hidden bg-[#b32429] lg:min-h-620px">
              <img
                src={heroProduct.image}
                alt={heroProduct.name}
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/10" />

              <div className="absolute inset-5 border border-white/25 sm:inset-7" />

              <span className="absolute left-10 top-10 bg-[#f5f1e8] px-4 py-2 text-[10px] uppercase tracking-[0.2em] sm:left-12 sm:top-12">
                In the spotlight
              </span>

              <span className="absolute right-10 top-10 text-xs tracking-widest text-white sm:right-12 sm:top-12">
                01 / THE EDIT
              </span>

              <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between gap-4 text-white sm:bottom-12 sm:left-12 sm:right-12">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                    A bold beginning
                  </p>

                  <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                    Make your move.
                  </h2>

                  <p className="mt-3 text-sm text-white/80">
                    {heroProduct.name}
                  </p>
                </div>

                <Link
                  to={`/shop/${heroProduct.id}`}
                  aria-label={`Explore ${heroProduct.name}`}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5f1e8] text-xl text-[#22221e] transition-colors hover:bg-[#c9ad78]"
                >
                  ↗
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-black/15 py-6 text-[10px] uppercase tracking-[0.22em] text-black/50 sm:text-xs">
          <span>Considered style</span>
          <span aria-hidden="true" className="text-[#806339]">
            ✦
          </span>
          <span>Everyday inspiration</span>
          <span aria-hidden="true" className="text-[#806339]">
            ✦
          </span>
          <span>Your personal edit</span>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#806339]">
              Find your direction
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Four ways to make it yours.
            </h2>
          </div>

          <Link
            to="/collections"
            className="w-fit border-b border-[#806339] pb-1 text-sm text-[#806339]"
          >
            All Collections ↗
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const product = products.find(
              (item) => item.id === category.productId
            );

            if (!product) return null;

            return (
              <Link
                key={category.name}
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                className="group"
              >
                <div className="relative overflow-hidden bg-[#e8e3d9]">
                  <img
                    src={product.image}
                    alt={`${category.name} collection`}
                    loading="lazy"
                    className="aspect-4/5 w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center bg-[#f5f1e8] text-xs">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <h3 className="font-serif text-2xl">{category.name}</h3>

                  <span
                    aria-hidden="true"
                    className="text-[#806339] transition-transform group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </div>

                <p className="mt-2 text-sm text-black/55">
                  {category.subtitle}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#806339]">
              Selected from the collection
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              The featured edit.
            </h2>
          </div>

          <Link
            to="/shop"
            className="w-fit border-b border-[#806339] pb-1 text-sm text-[#806339]"
          >
            Shop All Pieces ↗
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <article key={product.id} className="group">
              <Link
                to={`/shop/${product.id}`}
                aria-label={`View ${product.name}`}
                className="relative block overflow-hidden bg-[#e8e3d9]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                />

                <span
                  aria-hidden="true"
                  className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center bg-[#f5f1e8] text-lg transition-colors group-hover:bg-[#c9ad78]"
                >
                  ↗
                </span>
              </Link>

              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-[#806339]">
                {product.category}
              </p>

              <h3 className="mt-2 font-serif text-xl">
                <Link
                  to={`/shop/${product.id}`}
                  className="hover:text-[#806339]"
                >
                  {product.name}
                </Link>
              </h3>

              <p className="mt-2 text-sm text-black/60">
                {formatPrice(product.price)}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-7 text-xs text-black/45">
          Demo catalogue with illustrative photos and prices.
        </p>
      </section>

      {/* Editorial feature */}
      <section className="bg-[#191916] text-[#f5f1e8]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          {watchProduct && (
            <div className="overflow-hidden">
              <img
                src={watchProduct.image}
                alt={watchProduct.name}
                loading="lazy"
                className="h-full max-h-600px min-h-[320px]w-full object-cover"
              />
            </div>
          )}

          <div className="flex flex-col justify-center px-6 py-14 sm:px-12 lg:py-20">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c9ad78]">
              The watch collection
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
              Small details.
              <span className="block italic text-[#c9ad78]">
                Lasting impressions.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-white/60">
              Sometimes, one considered detail brings the whole look
              together. Explore our watch edit and find your finishing
              touch.
            </p>

            <Link
              to="/shop?category=Watches"
              className="mt-8 inline-flex w-fit items-center gap-10 border border-[#c9ad78]/60 px-6 py-4 text-sm text-[#c9ad78] transition-colors hover:bg-[#c9ad78] hover:text-[#191916]"
            >
              Explore Watches
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand introduction */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center lg:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#806339]">
          Behind the edit
        </p>

        <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-5xl">
          Good style starts with
          <span className="italic text-[#806339]"> your own point of view.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-black/60">
          Luxury Store is a concept shopping experience by Haris Imran.
          Explore the collections, create your personal selection, and
          try the interactive demo checkout.
        </p>

        <Link
          to="/about"
          className="mt-7 inline-block border-b border-[#806339] pb-2 text-sm text-[#806339]"
        >
          Discover the Project ↗
        </Link>
      </section>
    </div>
  );
}