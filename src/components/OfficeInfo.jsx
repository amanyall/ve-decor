import { officeInfo } from "../data/office.js";

export default function OfficeInfo({ light = false }) {
  const fields = [
    { label: "Office Address", value: officeInfo.address },
    { label: "Phone Number", value: officeInfo.phone },
    { label: "Email Address", value: officeInfo.email },
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
                <span className="mt-1 block text-lg">{field.value}</span>
              </p>
            ) : null
          )}
        </div>
      ) : (
        <div className={`mt-6 space-y-3 text-lg ${light ? "text-paper/58" : "text-muted"}`}>
          <p>[Office Address]</p>
          <p>[Phone Number]</p>
          <p>[Email Address]</p>
        </div>
      )}
    </section>
  );
}
