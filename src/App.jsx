import { Link, Route, Routes } from "react-router";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

import Home from "./Pages/Home.jsx";
import Shop from "./Pages/Shop.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import Collections from "./Pages/Collections.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121210] text-[#f5f1e8]">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route
            path="*"
            element={
              <section className="px-6 py-24 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[#c9ad78]">
                  Error 404
                </p>

                <h1 className="mt-5 font-serif text-4xl">
                  Page not found.
                </h1>

                <Link
                  to="/"
                  className="mt-8 inline-block border border-[#c9ad78] px-6 py-3 text-sm text-[#c9ad78]"
                >
                  Back to Home →
                </Link>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}