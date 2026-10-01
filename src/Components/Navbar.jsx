import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { useCart } from "../CartContext.jsx";

const links = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Collections", path: "/collections" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const { cartCount } = useCart();
  const location = useLocation();

  const [openLocation, setOpenLocation] = useState(null);
  const menuOpen = openLocation === location.key;

  function closeMenu() {
    setOpenLocation(null);
  }

  const focusStyle =
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ad78]";

  return (
    <header className="sticky top-0 z-50 bg-[#f5f1e8]/85 px-3 py-3 backdrop-blur-xl sm:px-6">
      <div
        onKeyDown={(event) => {
          if (event.key === "Escape") closeMenu();
        }}
        className="relative mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#191916]/95 text-[#f5f1e8] shadow-[0_12px_35px_-15px_rgba(0,0,0,0.45)]"
      >
        {/* Subtle gold highlight */}
        <div
          aria-hidden="true"
          className="absolute left-10 right-10 top-0 h-px bg-linear-to-r from-transparent via-[#c9ad78]/60 to-transparent"
        />

        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Luxury Store home"
            className={`group flex shrink-0 items-center gap-3 rounded-lg ${focusStyle}`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#c9ad78]/35 bg-linear-to-br from-[#c9ad78]/20 to-transparent font-serif text-2xl text-[#d9bf8d] transition-colors group-hover:border-[#c9ad78] sm:h-11 sm:w-11">
              L
            </span>

            <span>
              <span className="block font-serif text-base leading-none tracking-[0.16em] sm:text-xl">
                LUXURY
              </span>

              <span className="mt-2 block text-[8px] tracking-[0.3em] text-[#c9ad78]">
                THE STORE
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 rounded-full border border-white/5 bg-black/20 p-1 lg:flex"
          >
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2.5 text-xs transition-colors ${focusStyle} ${
                    isActive
                      ? "bg-[#c9ad78] font-medium text-[#191916]"
                      : "text-white/65 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Shop shortcut */}
            <Link
              to="/shop"
              onClick={closeMenu}
              aria-label="Search products in the shop"
              className={`hidden h-10 w-10 items-center justify-center rounded-full text-white/65 transition-colors hover:bg-white/10 hover:text-[#c9ad78] sm:flex ${focusStyle}`}
            >
              <svg
                aria-hidden="true"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m16 16 4.5 4.5" />
              </svg>
            </Link>

            {/* Shopping bag */}
            <Link
              to="/cart"
              onClick={closeMenu}
              aria-label={`Shopping bag, ${cartCount} ${
                cartCount === 1 ? "item" : "items"
              }`}
              className={`flex items-center gap-2 rounded-full border border-[#c9ad78]/30 bg-[#c9ad78]/10 px-3 py-2.5 transition-colors hover:border-[#c9ad78]/70 hover:bg-[#c9ad78]/20 sm:gap-3 sm:px-4 ${focusStyle}`}
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#d9bf8d]"
              >
                <path d="M5 7h14l1 14H4L5 7Z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>

              <span className="hidden text-xs text-[#e8d5b2] sm:inline">
                My Bag
              </span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c9ad78] px-1 text-[10px] font-semibold text-[#191916]">
                {cartCount}
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() =>
                setOpenLocation(menuOpen ? null : location.key)
              }
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#d9bf8d] transition-colors hover:bg-white/10 lg:hidden ${focusStyle}`}
            >
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                {menuOpen ? (
                  <path d="m6 6 12 12M6 18 18 6" />
                ) : (
                  <>
                    <path d="M4 8h16" />
                    <path d="M8 16h12" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          hidden={!menuOpen}
          className="max-h-[65vh] overflow-y-auto border-t border-white/10 px-4 pb-5 pt-3 lg:hidden"
        >
          <p className="px-3 py-3 text-[9px] uppercase tracking-[0.25em] text-white/40">
            Explore the store
          </p>

          <div className="space-y-1">
            {links.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors ${focusStyle} ${
                    isActive
                      ? "bg-[#c9ad78]/15 text-[#d9bf8d]"
                      : "text-white/65 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <span className="flex items-center gap-4">
                  <span className="text-[10px] opacity-50">
                    0{index + 1}
                  </span>

                  <span className="text-sm">{link.name}</span>
                </span>

                <span aria-hidden="true">↗</span>
              </NavLink>
            ))}
          </div>

          <div className="mx-3 mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#c9ad78]"
            />

            <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">
              Your everyday, elevated.
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}