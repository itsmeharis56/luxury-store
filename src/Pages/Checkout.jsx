import { useState } from "react";
import { Link } from "react-router";
import { useCart } from "../CartContext.jsx";

function formatPrice(amount) {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}

export default function Checkout() {
  const { cart, total, cartCount, removeFromCart } = useCart();

  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState("");

  const inputStyle =
    "mt-2 w-full border border-black/20 bg-white/60 px-4 py-3 text-sm outline-none focus:border-[#806339]";

  function handleSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) return;

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "").trim();
    const address = String(form.get("address") || "").trim();
    const city = String(form.get("city") || "").trim();

    if (!name || !address || !city) {
      setError("Please enter a name, address, and city.");
      return;
    }

    setConfirmation({
      reference: `DEMO-${Date.now().toString().slice(-8)}`,
      items: cart.map((item) => ({ ...item })),
      total,
    });

    // Remove the items included in this demo checkout.
    cart.forEach((item) => removeFromCart(item.id));

    window.scrollTo({ top: 0, behavior: "instant" });
  }

  // Confirmation appears before the empty-bag check.
  if (confirmation) {
    return (
      <section className="min-h-screen bg-[#f5f1e8] px-6 py-16 text-[#22221e]">
        <div className="mx-auto max-w-2xl border border-black/15 bg-white/40 p-6 sm:p-12">
          <div
            aria-hidden="true"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[#22221e] text-3xl text-[#c9ad78]"
          >
            ✓
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#806339]">
            Demo complete
          </p>

          <h1 className="mt-4 font-serif text-4xl">
            You’ve completed the checkout.
          </h1>

          <p className="mt-5 text-sm leading-7 text-black/60">
            This was a practice checkout. No order was placed, no payment
            was taken, and no confirmation email was sent.
          </p>

          <div className="mt-8 border-y border-black/15 py-5">
            <p className="text-xs uppercase tracking-widest text-black/50">
              Demo reference
            </p>

            <p className="mt-2 font-medium">
              {confirmation.reference}
            </p>
          </div>

          <ul className="mt-6 divide-y divide-black/10">
            {confirmation.items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between gap-4 py-4 text-sm"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span className="shrink-0">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-between border-t border-black/15 pt-5 font-medium">
            <span>Demo total</span>
            <span>{formatPrice(confirmation.total)}</span>
          </div>

          <p className="mt-5 text-xs leading-6 text-black/50">
            Your bag has been cleared. This summary is temporary and
            disappears when you leave or refresh this page.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block bg-[#22221e] px-6 py-4 text-sm text-[#f5f1e8] transition-colors hover:bg-[#806339]"
          >
            Continue Exploring →
          </Link>
        </div>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="min-h-[60vh] bg-[#f5f1e8] px-6 py-24 text-center text-[#22221e]">
        <p className="text-xs uppercase tracking-[0.25em] text-[#806339]">
          Your bag
        </p>

        <h1 className="mt-5 font-serif text-4xl">
          Add something you love.
        </h1>

        <p className="mt-5 text-black/60">
          Your bag is empty. Explore the collection before checking out.
        </p>

        <Link
          to="/shop"
          className="mt-8 inline-block bg-[#22221e] px-7 py-4 text-sm text-[#f5f1e8]"
        >
          Explore the Store →
        </Link>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#22221e]">
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <Link
          to="/cart"
          className="text-sm text-[#806339] hover:underline"
        >
          ← Back to Bag
        </Link>

        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-[#806339]">
          The final step
        </p>

        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
          Your checkout.
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-7 text-black/60">
          Try the checkout using sample details. This demo does not
          submit your information to a server or process payments.
        </p>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.3fr_1fr]">
          {/* Customer form */}
          <form
            onSubmit={handleSubmit}
            className="border border-black/15 bg-white/30 p-6 sm:p-8"
          >
            <h2 className="font-serif text-2xl">Customer details</h2>

            <p className="mt-2 text-xs text-black/50">
              All fields below are required.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="checkout-name" className="text-sm">
                  Full name
                </label>

                <input
                  id="checkout-name"
                  name="name"
                  type="text"
                  placeholder="Demo Customer"
                  maxLength={100}
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="checkout-email" className="text-sm">
                  Email address
                </label>

                <input
                  id="checkout-email"
                  name="email"
                  type="email"
                  placeholder="demo@example.com"
                  maxLength={254}
                  required
                  className={inputStyle}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="checkout-address" className="text-sm">
                  Sample address
                </label>

                <input
                  id="checkout-address"
                  name="address"
                  type="text"
                  placeholder="123 Example Street"
                  maxLength={200}
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="checkout-city" className="text-sm">
                  City
                </label>

                <input
                  id="checkout-city"
                  name="city"
                  type="text"
                  placeholder="Faisalabad"
                  maxLength={100}
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="checkout-country" className="text-sm">
                  Country
                </label>

                <select
                  id="checkout-country"
                  name="country"
                  required
                  className={inputStyle}
                  defaultValue="Pakistan"
                >
                  <option value="Pakistan">Pakistan</option>
                </select>
              </div>
            </div>

            <div className="mt-8 border border-[#806339]/25 bg-[#c9ad78]/10 p-5">
              <h3 className="text-sm font-medium">Demo payment mode</h3>

              <p className="mt-2 text-xs leading-6 text-black/60">
                No card details needed. Completing this form shows a
                sample confirmation and clears your bag.
              </p>
            </div>

            <label className="mt-6 flex items-start gap-3 text-sm leading-6">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[#806339]"
              />

              <span>I understand this is a demo checkout.</span>
            </label>

            <p role="alert" className="mt-4 text-sm text-red-700">
              {error}
            </p>

            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-between bg-[#22221e] px-6 py-4 text-sm text-[#f5f1e8] transition-colors hover:bg-[#806339]"
            >
              Complete Demo Checkout
              <span aria-hidden="true">→</span>
            </button>
          </form>

          {/* Order summary */}
          <aside className="border border-black/15 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-serif text-2xl">Your selection</h2>

              <span className="text-xs text-black/50">
                {cartCount} {cartCount === 1 ? "item" : "items"}
              </span>
            </div>

            <ul className="mt-6 divide-y divide-black/10">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-4 py-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 shrink-0 object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>

                    <p className="mt-2 text-xs text-black/50">
                      Quantity: {item.quantity}
                    </p>

                    <p className="mt-2 text-sm">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <dl className="mt-5 space-y-4 border-t border-black/15 pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-black/60">Subtotal</dt>
                <dd>{formatPrice(total)}</dd>
              </div>

              <div className="flex justify-between gap-4">
                <dt className="text-black/60">Shipping & taxes</dt>
                <dd>Not calculated</dd>
              </div>

              <div className="flex justify-between gap-4 border-t border-black/15 pt-5 text-lg">
                <dt>Demo total</dt>
                <dd className="font-medium">{formatPrice(total)}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </div>
  );
}