export default function SectionHeading({ eyebrow, title, intro, light = false, className = "" }) {
  return (
    <div className={`grid gap-8 lg:grid-cols-[0.7fr_1.3fr] ${className}`}>
      <p className={`eyebrow ${light ? "text-stone" : ""}`}>{eyebrow}</p>
      <div>
        <h2
          className={`font-serif text-[clamp(3rem,6.5vw,7rem)] leading-[0.9] tracking-normal ${
            light ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {intro ? (
          <p className={`mt-7 max-w-2xl text-lg leading-8 ${light ? "text-paper/70" : "text-muted"}`}>
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}
