import { officeInfo } from "../data/office.js";

export default function OfficeInfo({ light = false }) {
  const phoneHref = officeInfo.phone ? `tel:${formatDialValue(officeInfo.phone)}` : "";
  const whatsappHref = officeInfo.whatsapp ? `https://wa.me/${formatDialValue(officeInfo.whatsapp)}` : "";
  const fields = [
    { label: "Office Address", value: officeInfo.address },
    { label: "Phone Number", value: officeInfo.phone, href: phoneHref },
    { label: "WhatsApp Number", value: officeInfo.whatsapp, href: whatsappHref },
  ];
  const hasDetails = fields.some((field) => field.value);

  return (
    <section aria-labelledby="office-heading" className={light ? "text-paper" : "text-ink"}>
      <h2 id="office-heading" className={`eyebrow ${light ? "text-stone" : ""}`}>
        Our Office
      </h2>
      {hasDetails ? (
        <div className="mt-6 space-y-4">
          {fields.map((field) =>
            field.value ? (
              <p key={field.label}>
                <span className={`block text-xs uppercase tracking-widecaps ${light ? "text-paper/55" : "text-muted"}`}>
                  {field.label}
                </span>
                {field.href ? (
                  <a className="hover-line mt-1 inline-flex text-lg" href={field.href}>
                    {field.value}
                  </a>
                ) : (
                  <span className="mt-1 block text-lg">{field.value}</span>
                )}
              </p>
            ) : null
          )}
        </div>
      ) : (
        <div className={`mt-6 space-y-3 text-lg ${light ? "text-paper/58" : "text-muted"}`}>
          <p>[Office Address]</p>
          <p>[Phone Number]</p>
          <p>[WhatsApp Number]</p>
        </div>
      )}
      <div className="mt-7 flex flex-wrap gap-3">
        {phoneHref ? <ContactButton href={phoneHref}>Call</ContactButton> : null}
        {whatsappHref ? <ContactButton href={whatsappHref}>WhatsApp</ContactButton> : null}
      </div>
    </section>
  );
}

function ContactButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex border border-current px-5 py-3 text-xs font-semibold uppercase tracking-widecaps transition duration-500 ease-premium hover:bg-ink hover:text-paper focus-visible:outline focus-visible:outline-2"
      target={href.startsWith("https://") ? "_blank" : undefined}
      rel={href.startsWith("https://") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function formatDialValue(value) {
  return value.replace(/[^\d+]/g, "");
}
