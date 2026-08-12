import { Link } from "react-router-dom";
import OfficeInfo from "./OfficeInfo.jsx";

const links = ["Projects", "Services", "About", "Journal", "Contact"];
const social = ["Instagram", "Pinterest", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-paper">
      <div className="container-page section-pad">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link to="/" className="font-serif text-6xl leading-none">
              Ve-decor
            </Link>
            <p className="mt-6 max-w-sm text-xl leading-8 text-paper/68">
              Interior architecture
              <br />
              for thoughtful living.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="space-y-3">
            {links.map((link) => (
              <Link
                key={link}
                className="block text-sm font-semibold uppercase tracking-widecaps text-paper/72 transition hover:text-paper"
                to={`/${link.toLowerCase()}`}
              >
                {link}
              </Link>
            ))}
          </nav>

          <div className="space-y-3">
            {social.map((item) => (
              <a
                key={item}
                href="#top"
                className="block text-sm font-semibold uppercase tracking-widecaps text-paper/72 transition hover:text-paper"
              >
                {item}
              </a>
            ))}
          </div>

          <OfficeInfo light />
        </div>

        <div className="mt-20 flex flex-col gap-5 border-t border-paper/15 pt-7 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Ve-decor Interiors</p>
          <button
            type="button"
            className="w-fit uppercase tracking-widecaps transition hover:text-paper focus-visible:outline focus-visible:outline-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
