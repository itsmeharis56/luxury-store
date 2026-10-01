import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { useCart } from "../CartContext.jsx";
import { products } from "../Product.js";

const categories = [
  "All",
  "Sneakers",
  "Watches",
  "Bags",
  "Accessories",
];

function formatPrice(amount) {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}

export default function Shop() {
  const { cart, addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [notice, setNotice] = useState("");

  const selectedCategory = searchParams.get("category");

  const category = categories.includes(selectedCategory)
    ? selectedCategory
    : "All";

  function changeCategory(value) {
    setSearchParams((previous) => {
      const next = new URLSearchParams(previous);

      if (value === "All") {
        next.delete("category");
      } else {
        next.set("category", value);
      }

      return next;
    });

    setNotice("");
  }

  function resetFilters() {
    setSearch("");
    setSort("featured");
    changeCategory("All");
  }

  function handleAdd(product) {
    addToCart(product);

    const existingItem = cart.find((item) => item.id === product.id);
    const quantity = (existingItem?.quantity || 0) + 1;

    setNotice(
      `${product.name} added. ${quantity} of this item in your bag.`
    );
  }

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      return matchesCategory && matchesSearch;
    })
    .sort((first, second) => {
      if (sort === "price-low") {
        return first.price - second.price;
      }

      if (sort === "price-high") {
        return second.price - first.price;
      }

      return first.id - second.id;
    });

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#22221e]">
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        {/* Page introduction */}
        <div className="flex flex-col gap-6 border-b border-black/15 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#806339]">
              The Luxury Store edit
            </p>

            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
              Everyday, elevated.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
              Discover sneakers, watches, bags, and finishing touches
              for your everyday style.
            </p>
          </div>

          <Link
            to="/cart"
            className="inline-flex w-fit items-center gap-6 border-b border-[#806339] pb-2 text-sm text-[#806339]"
          >
            View your bag
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Search and sorting */}
        <div className="mt-10 grid gap-5 md:grid-cols-[1fr_240px]">
          <div>
            <label
              htmlFor="product-search"
              className="mb-2 block text-xs uppercase tracking-[0.15em]"
            >
              Search products
            </label>

            <input
              id="product-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search sneakers, watches..."
              className="w-full border border-black/20 bg-white/50 px-4 py-3 text-sm outline-none transition-colors focus:border-[#806339]"
            />
          </div>

          <div>
            <label
              htmlFor="product-sort"
              className="mb-2 block text-xs uppercase tracking-[0.15em]"
            >
              Sort by
            </label>

            <select
              id="product-sort"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="w-full border border-black/20 bg-[#faf8f3] px-4 py-3 text-sm outline-none focus:border-[#806339]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category filters */}
        <div
          role="group"
          aria-label="Filter by category"
          className="mt-6 flex flex-wrap gap-2"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => changeCategory(item)}
              className={`border px-5 py-2.5 text-sm transition-colors ${
                category === item
                  ? "border-[#22221e] bg-[#22221e] text-[#f5f1e8]"
                  : "border-black/15 text-black/60 hover:border-[#806339] hover:text-[#806339]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Results and cart feedback */}
        <div className="mt-8 flex flex-col gap-2 border-b border-black/10 pb-5 sm:flex-row sm:justify-between">
          <p role="status" className="text-sm text-black/60">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"} found
          </p>

          <p className="text-xs text-black/45">
            Demo catalogue · Illustrative photos and prices
          </p>
        </div>

        <p
          role="status"
          aria-atomic="true"
          className="mt-4 min-h-6 text-sm text-[#806339]"
        >
          {notice}
        </p>

        {/* Product cards */}
        {filteredProducts.length > 0 ? (
          <div className="mt-5 grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
              const quantityInBag =
                cart.find((item) => item.id === product.id)?.quantity || 0;

              return (
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

                    <span className="absolute left-4 top-4 bg-[#f5f1e8]/95 px-3 py-2 text-[10px] uppercase tracking-[0.18em]">
                      {product.category}
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-[#f5f1e8] text-lg transition-colors group-hover:bg-[#c9ad78]"
                    >
                      ↗
                    </span>
                  </Link>

                  <div className="pt-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#806339]">
                      Luxury Store
                    </p>

                    <h2 className="mt-2 font-serif text-2xl">
                      <Link
                        to={`/shop/${product.id}`}
                        className="transition-colors hover:text-[#806339]"
                      >
                        {product.name}
                      </Link>
                    </h2>

                    <p className="mt-3 text-sm text-black/65">
                      {formatPrice(product.price)}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <Link
                        to={`/shop/${product.id}`}
                        className="flex items-center justify-center border border-black/20 px-3 py-3.5 text-center text-sm transition-colors hover:border-[#806339] hover:text-[#806339]"
                      >
                        View Details
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleAdd(product)}
                        aria-label={`Add ${product.name} to bag`}
                        className="bg-[#22221e] px-3 py-3.5 text-sm text-[#f5f1e8] transition-colors hover:bg-[#806339]"
                      >
                        Add to Bag +
                      </button>
                    </div>

                    <p className="mt-3 min-h-5 text-xs text-[#806339]">
                      {quantityInBag > 0
                        ? `${quantityInBag} in your bag`
                        : ""}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="border border-black/10 px-6 py-16 text-center">
            <h2 className="font-serif text-3xl">No products found.</h2>

            <p className="mt-4 text-sm text-black/60">
              Try another search or choose a different category.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-7 border border-[#806339] px-6 py-3 text-sm text-[#806339] transition-colors hover:bg-[#806339] hover:text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}