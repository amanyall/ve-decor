import { Link } from "react-router-dom";

const baseClasses =
  "group inline-flex items-center gap-3 border border-current px-6 py-3 text-sm font-semibold uppercase tracking-widecaps transition-all duration-500 ease-premium focus-visible:outline focus-visible:outline-2";

export default function Button({ children, to, href, variant = "dark", type = "button", className = "" }) {
  const palette =
    variant === "light"
      ? "text-paper hover:bg-paper hover:text-ink"
      : "text-ink hover:bg-ink hover:text-paper";
  const classes = `${baseClasses} ${palette} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-500 ease-premium group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={type}>
      {content}
    </button>
  );
}
