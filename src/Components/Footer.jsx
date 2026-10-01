import { Link } from "react-router";

const collections = ["Sneakers", "Watches", "Bags", "Accessories"];

const pages = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Collections", path: "/collections" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  const linkStyle =
    "w-fit text-sm text-white/60 transition-colors hover:text-[#c9ad78] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ad78]";

  return (
    <footer className="border-t border-white/10 bg-[#121210] text-[#f5f1e8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Footer introduction */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c9ad78]">
              The finishing touch
            </p>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Make everyday feel exceptional.
            </h2>
          </div>

          <Link
            to="/shop"
            className="group inline-flex w-fit items-center gap-8 border border-[#c9ad78]/50 px-6 py-4 text-sm text-[#c9ad78] transition-colors hover:bg-[#c9ad78] hover:text-[#121210] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ad78]"
          >
            Explore the store
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* Footer columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Link
              to="/"
              aria-label="Luxury Store home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center border border-[#c9ad78]/50 font-serif text-2xl text-[#c9ad78]">
                L
              </span>

              <span>
                <span className="block font-serif text-xl tracking-[0.18em]">
                  LUXURY
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.35em] text-[#c9ad78]">
                  THE STORE
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
              Everyday essentials, considered details, and a little
              inspiration for your personal style.
            </p>

            <p className="mt-5 text-xs leading-6 text-white/40">
              A portfolio store concept by Haris Imran.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#c9ad78]">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {pages.map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className={linkStyle}>
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Product collections">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#c9ad78]">
              Collections
            </h3>

            <ul className="mt-6 space-y-4">
              {collections.map((collection) => (
                <li key={collection}>
                  <Link
                    to={`/shop?category=${encodeURIComponent(collection)}`}
                    className={linkStyle}
                  >
                    {collection}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#c9ad78]">
              Let’s connect
            </h3>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Have a website idea or feedback on this project?
            </p>

            <a
              href="mailto:itsmeharis11@gmail.com"
              className={`${linkStyle} mt-4 inline-block break-all`}
            >
              itsmeharis11@gmail.com
            </a>

            <div className="mt-6 flex gap-6">
              <a
                href="https://www.linkedin.com/in/haris-imran-a4b672257"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://github.com/itsmeharis56"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs leading-6 text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Luxury Store. Built by Haris Imran.
          </p>

          <p>Demo project — no real orders or payments.</p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            className="w-fit text-[#c9ad78] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ad78]"
          >
            Back to top <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}