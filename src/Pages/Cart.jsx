import { Link } from "react-router";
import { useCart } from "../CartContext.jsx";

function formatPrice(amount) {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}

export default function Cart() {
  const {
    cart,
    cartCount,
    total,
    changeQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#22221e]">
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        {/* Page heading */}
        <div className="border-b border-black/15 pb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#806339]">
            Your personal selection
          </p>

          <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
            Shopping Bag.
          </h1>

          <p className="mt-4 text-sm text-black/60">
            {cartCount === 0
              ? "Your next favourite is waiting to be discovered."
              : `${cartCount} ${
                  cartCount === 1 ? "item" : "items"
                } in your bag.`}
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty bag */
          <div className="py-20 text-center">
            <div
              aria-hidden="true"
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#806339]/30"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                className="text-[#806339]"
              >
                <path d="M5 7h14l1 14H4L5 7Z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>
            </div>

            <h2 className="mt-7 font-serif text-3xl">
              Your bag is empty.
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-black/60">
              Explore our collection and add something that suits
              your everyday style.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-block bg-[#22221e] px-8 py-4 text-sm text-[#f5f1e8] transition-colors hover:bg-[#806339]"
            >
              Explore the Store →
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-3">
            {/* Cart items */}
            <div className="lg:col-span-2">
              <ul className="divide-y divide-black/15">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-4 py-6 first:pt-0 sm:gap-6"
                  >
                    <Link
                      to={`/shop/${item.id}`}
                      aria-label={`View ${item.name}`}
                      className="shrink-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-24 bg-[#e8e3d9] object-cover sm:h-36 sm:w-36"
                      />
                    </Link>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#806339]">
                        {item.category}
                      </p>

                      <h2 className="mt-2 font-serif text-xl sm:text-2xl">
                        <Link
                          to={`/shop/${item.id}`}
                          className="transition-colors hover:text-[#806339]"
                        >
                          {item.name}
                        </Link>
                      </h2>

                      <p className="mt-2 text-sm text-black/60">
                        {formatPrice(item.price)} each
                      </p>

                      <div className="mt-5 flex flex-wrap items-center gap-4">
                        <div
                          role="group"
                          aria-label={`Quantity for ${item.name}`}
                          className="inline-flex items-center border border-black/20"
                        >
                          <button
                            type="button"
                            aria-label={`Decrease quantity of ${item.name}`}
                            disabled={item.quantity <= 1}
                            onClick={() => changeQuantity(item.id, -1)}
                            className="h-10 w-10 text-lg transition-colors hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            −
                          </button>

                          <span className="w-9 text-center text-sm">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            aria-label={`Increase quantity of ${item.name}`}
                            onClick={() => changeQuantity(item.id, 1)}
                            className="h-10 w-10 text-lg transition-colors hover:bg-black/5"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          aria-label={`Remove ${item.name} from bag`}
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-black/50 underline underline-offset-4 transition-colors hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>

                      <p className="mt-4 text-sm font-medium">
                        Item total:{" "}
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                to="/shop"
                className="mt-8 inline-block text-sm text-[#806339] hover:underline"
              >
                ← Continue Shopping
              </Link>
            </div>

            {/* Bag summary */}
            <aside className="border border-black/15 bg-white/30 p-6 sm:p-8">
              <h2 className="font-serif text-2xl">Bag summary</h2>

              <dl className="mt-7 space-y-5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-black/60">Items</dt>
                  <dd>{cartCount}</dd>
                </div>

                <div className="flex justify-between gap-4">
                  <dt className="text-black/60">Subtotal</dt>
                  <dd>{formatPrice(total)}</dd>
                </div>

                <div className="flex justify-between gap-4">
                  <dt className="text-black/60">Shipping & taxes</dt>
                  <dd className="text-right">Not calculated</dd>
                </div>

                <div className="flex justify-between gap-4 border-t border-black/15 pt-5 text-lg">
                  <dt>Demo total</dt>
                  <dd className="font-medium">
                    {formatPrice(total)}
                  </dd>
                </div>
              </dl>

              <Link
                to="/checkout"
                className="mt-8 flex w-full items-center justify-between gap-3 bg-[#22221e] px-5 py-4 text-sm text-[#f5f1e8] transition-colors hover:bg-[#806339]"
              >
                Proceed to Checkout
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                to="/shop"
                className="mt-3 block w-full border border-black/20 px-5 py-4 text-center text-sm transition-colors hover:border-[#806339] hover:text-[#806339]"
              >
                Continue Shopping
              </Link>

              <p className="mt-6 text-xs leading-6 text-black/50">
                Demo checkout available. No real orders or payments.
                Shipping and taxes are not calculated.
              </p>
            </aside>
          </div>
        )}
      </section>
    </div>
  );
}