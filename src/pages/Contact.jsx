import OfficeInfo from "../components/OfficeInfo.jsx";
import { officeInfo } from "../data/office.js";

export default function Contact() {
  const phoneHref = officeInfo.phone ? `tel:${formatDialValue(officeInfo.phone)}` : "";
  const whatsappHref = officeInfo.whatsapp ? `https://wa.me/${formatDialValue(officeInfo.whatsapp)}` : "";

  return (
    <section className="container-page pb-24 pt-36 sm:pb-32 sm:pt-44" aria-labelledby="contact-page">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 id="contact-page" className="mt-8 editorial-title">
            Let&apos;s create
            <br />
            something meaningful.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
            Speak with us directly to discuss your space, timeline and design direction.
          </p>
          <div className="mt-14 border-t border-ink/15 pt-8">
            <OfficeInfo />
          </div>
        </div>

        <aside className="flex min-h-[28rem] flex-col justify-between bg-bone p-6 sm:p-10 lg:p-12">
          <div>
            <p className="eyebrow">Start a Conversation</p>
            <h2 className="mt-8 font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9]">
              Call or chat
              <br />
              with us.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
              Use WhatsApp for quick project questions, or call us directly when you are ready to begin.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <ContactAction href={whatsappHref} external>
              Chat on WhatsApp
            </ContactAction>
            <ContactAction href={phoneHref}>Call Us</ContactAction>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ContactAction({ href, children, external = false }) {
  const active = Boolean(href);
  const className = `inline-flex min-h-16 items-center justify-center border border-ink px-6 py-4 text-center text-sm font-semibold uppercase tracking-widecaps transition duration-500 ease-premium focus-visible:outline focus-visible:outline-2 ${
    active ? "text-ink hover:bg-ink hover:text-paper" : "cursor-not-allowed text-muted/55"
  }`;

  if (!active) {
    return (
      <span className={className} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a href={href} className={className} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {children}
    </a>
  );
}

function formatDialValue(value) {
  return value.replace(/[^\d+]/g, "");
}
