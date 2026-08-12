import SectionHeading from "../components/SectionHeading.jsx";
import { articles } from "../data/journal.js";

export default function Journal() {
  return (
    <section className="container-page pb-24 pt-36 sm:pb-32 sm:pt-44" aria-labelledby="journal-page">
      <SectionHeading
        eyebrow="Journal"
        title={<>Ideas, materials<br />& observations.</>}
        intro="Notes on light, texture, planning and the small decisions that make interiors age gracefully."
      />
      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {articles.map((article, index) => (
          <article key={article.title} className={`group ${index === 0 ? "md:col-span-2" : ""}`}>
            <div className={`overflow-hidden bg-bone ${index === 0 ? "aspect-[1.85]" : "aspect-[1.08]"}`}>
              <img
                src={article.image}
                alt={article.alt}
                className="image-cover transition duration-700 ease-premium group-hover:scale-105"
              />
            </div>
            <div className="mt-6 border-t border-ink/15 pt-5">
              <p className="text-xs font-semibold uppercase tracking-widecaps text-muted">
                {article.category} · {article.date}
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[0.98] sm:text-5xl">{article.title}</h2>
              <a href="#top" className="hover-line mt-6 text-sm font-semibold uppercase tracking-widecaps">
                Read article &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
