import { useState } from "react";
import { Link, useParams } from "react-router";
import { products } from "../Product.js";
import { useCart } from "../CartContext.jsx";

function ProductView({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [notice, setNotice] = useState("");

  function handleAddToBag() {
    for (let count = 0; count < quantity; count++) {
      addToCart(product);
    }

    setNotice(
      `${quantity} ${quantity === 1 ? "item" : "items"} added to your bag.`
    );
  }

  function updateQuantity(amount) {
    setQuantity((current) => Math.min(10, Math.max(1, current + amount)));
    setNotice("");
  }

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#22221e]">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-3 text-sm text-black/50"
        >
          <Link to="/" className="hover:text-[#806339]">
            Home
          </Link>

          <span aria-hidden="true">/</span>

          <Link to="/shop" className="hover:text-[#806339]">
            Shop
          </Link>

          <span aria-hidden="true">/</span>

          <span aria-current="page" className="text-[#22221e]">
            {product.name}
          </span>
        </nav>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product image */}
          <div className="relative overflow-hidden bg-[#e8e3d9]">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square w-full object-cover"
            />

            <span className="absolute left-5 top-5 bg-[#f5f1e8] px-4 py-2 text-[10px] uppercase tracking-[0.2em]">
              The Luxury Edit
            </span>
          </div>

          {/* Product information */}
          <div className="lg:py-6">
            <Link
              to={`/shop?category=${encodeURIComponent(product.category)}`}
              className="text-xs uppercase tracking-[0.25em] text-[#806339] hover:underline"
            >
              {product.category}
            </Link>

            <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 text-2xl">
              Rs. {product.price.toLocaleString("en-PK")}
            </p>

            <p className="mt-6 max-w-lg leading-8 text-black/60">
              {product.description}
            </p>

            <div className="my-8 border-t border-black/15" />

            <div>
              <p id="quantity-label" className="text-sm font-medium">
                Quantity
              </p>

              <div
                role="group"
                aria-labelledby="quantity-label"
                className="mt-3 inline-flex items-center border border-black/20"
              >
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  disabled={quantity === 1}
                  onClick={() => updateQuantity(-1)}
                  className="h-12 w-12 text-xl transition-colors hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  −
                </button>

                <span
                  aria-live="polite"
                  aria-atomic="true"
                  className="w-12 text-center text-sm"
                >
                  {quantity}
                </span>

                <button
                  type="button"
                  aria-label="Increase quantity"
                  disabled={quantity === 10}
                  onClick={() => updateQuantity(1)}
                  className="h-12 w-12 text-xl transition-colors hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 text-sm">
              <span className="text-black/60">Selected items total</span>

              <span className="font-medium">
                Rs. {(product.price * quantity).toLocaleString("en-PK")}
              </span>
            </div>

            <button
              type="button"
              onClick={handleAddToBag}
              className="mt-4 flex w-full items-center justify-between bg-[#22221e] px-6 py-5 text-sm text-[#f5f1e8] transition-colors hover:bg-[#806339] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#806339]"
            >
              Add to Bag
              <span aria-hidden="true">→</span>
            </button>

            <p
              role="status"
              className="mt-3 min-h-6 text-sm text-[#806339]"
            >
              {notice}
            </p>

            <Link
              to="/cart"
              className="mt-3 inline-block border-b border-[#806339] pb-1 text-sm text-[#806339]"
            >
              View your bag →
            </Link>

            <div className="mt-8 border-t border-black/15 pt-6">
              <p className="text-xs leading-6 text-black/50">
                Demo catalogue with illustrative photos and prices.
                No real orders or payments are processed.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-black/15 pt-8">
          <Link
            to="/shop"
            className="text-sm text-[#806339] hover:underline"
          >
            ← Continue exploring
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <section className="bg-[#f5f1e8] px-6 py-24 text-center text-[#22221e]">
        <h1 className="font-serif text-4xl">Product not found.</h1>

        <Link
          to="/shop"
          className="mt-8 inline-block border border-[#806339] px-6 py-3 text-sm text-[#806339]"
        >
          Back to Shop →
        </Link>
      </section>
    );
  }

  return <ProductView key={product.id} product={product} />;
}