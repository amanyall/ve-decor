import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navTone = scrolled || open ? "bg-ivory/95 text-ink backdrop-blur" : "bg-transparent text-paper";

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ease-premium ${
        scrolled || open ? "border-ink/10" : "border-paper/15"
      } ${navTone}`}
    >
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Primary navigation">
        <Link
          to="/"
          className="font-serif text-3xl leading-none tracking-normal focus-visible:outline focus-visible:outline-2"
          onClick={() => setOpen(false)}
        >
          Ve-decor
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hover-line text-sm font-semibold uppercase tracking-widecaps ${isActive ? "active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden border border-current px-5 py-3 text-xs font-semibold uppercase tracking-widecaps transition duration-500 ease-premium hover:bg-ink hover:text-paper focus-visible:outline focus-visible:outline-2 lg:inline-flex"
        >
          Start a Project
        </Link>

        <button
          className="grid h-11 w-11 place-items-center border border-current lg:hidden"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-px bg-current transition duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px bg-current transition duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <div
        className={`grid overflow-hidden bg-ivory text-ink transition-all duration-500 ease-premium lg:hidden ${
          open ? "grid-rows-[1fr] border-t border-ink/10" : "grid-rows-[0fr]"
        }`}
      >
        <div className="container-page overflow-hidden">
          <div className="flex flex-col gap-5 py-7">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-serif text-4xl leading-none ${isActive ? "italic text-clay" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-flex w-fit border border-current px-5 py-3 text-xs font-semibold uppercase tracking-widecaps"
              onClick={() => setOpen(false)}
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
