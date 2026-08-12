import { useState } from "react";

export default function ServiceCard({ service }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className="group border-t border-ink/18 py-6 last:border-b"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="grid w-full grid-cols-[3.5rem_1fr_auto] items-center gap-4 text-left focus-visible:outline focus-visible:outline-2"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-muted">{service.number}</span>
        <span className="font-serif text-3xl leading-none sm:text-5xl">{service.title}</span>
        <span className="text-2xl transition duration-500 ease-premium group-hover:rotate-45" aria-hidden="true">
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-premium ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="ml-[4.5rem] mt-5 max-w-2xl text-base leading-7 text-muted">{service.description}</p>
        </div>
      </div>
    </article>
  );
}
