import Hero from "../components/Hero.jsx";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import { projects } from "../data/projects.js";
import { services, processStages } from "../data/services.js";
import { reviews } from "../data/reviews.js";
import { articles } from "../data/journal.js";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="container-page section-pad" aria-labelledby="studio-heading">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="eyebrow">01 — Studio</p>
          <div>
            <h2 id="studio-heading" className="font-serif text-[clamp(3.4rem,7vw,8rem)] leading-[0.88]">
              We believe great interiors
              <br />
              aren&apos;t decorated.
              <br />
              They&apos;re composed.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
              We design spaces where architecture, material, light and everyday life come together naturally.
            </p>
            <div className="mt-10">
              <Button to="/about">Discover Our Studio</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone section-pad" aria-labelledby="work-heading">
        <div className="container-page">
          <SectionHeading eyebrow="02 — Selected Work" title={<>Spaces with<br />a story.</>} />
          <div className="mt-16 grid gap-x-8 gap-y-14 lg:grid-cols-12">
            {projects.slice(0, 6).map((project, index) => (
              <ProjectCard key={project.title} project={project} large={index % 3 === 0 || index === 4} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page section-pad" aria-labelledby="services-heading">
        <SectionHeading eyebrow="03 — What We Do" title={<>From first sketch<br />to final detail.</>} />
        <div className="mt-16">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-paper section-pad" aria-labelledby="process-heading">
        <div className="container-page">
          <SectionHeading eyebrow="04 — Our Process" title="A considered rhythm." light />
          <div className="mt-16 grid gap-px bg-paper/15 md:grid-cols-5">
            {processStages.map((stage) => (
              <article key={stage.title} className="bg-charcoal p-6 sm:p-8">
                <p className="text-sm font-semibold text-stone">{stage.number}</p>
                <h3 className="mt-8 font-serif text-4xl leading-none">{stage.title}</h3>
                <p className="mt-6 text-sm leading-7 text-paper/64">{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page section-pad" aria-labelledby="about-heading">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="aspect-[0.86] overflow-hidden bg-bone">
            <img
              src="https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=Ve-decort&fit=crop&w=1400&q=85"
              alt="Interior studio table with material samples, drawings and warm daylight"
              className="image-cover"
            />
          </div>
          <div>
            <p className="eyebrow">About Ve-decor</p>
            <h2 id="about-heading" className="mt-8 font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9]">
              A studio shaped by
              <br />
              curiosity and restraint.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
              Ve-decor is an interior design studio creating thoughtful and timeless spaces. Our approach combines
              architecture, craftsmanship, material exploration and an understanding of how people live.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-5 border-y border-ink/15 py-8">
              {[
                ["08+", "Years of Practice"],
                ["65+", "Completed Spaces"],
                ["18", "Design Awards"],
              ].map(([value, label]) => (
                <p key={label}>
                  <span className="block font-serif text-4xl sm:text-5xl">{value}</span>
                  <span className="mt-2 block text-xs uppercase tracking-widecaps text-muted">{label}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone section-pad" aria-labelledby="reviews-heading">
        <div className="container-page">
          <SectionHeading eyebrow="05 — Client Stories" title={<>What our clients<br />say about us.</>} />
          <div className="mt-14 flex snap-x gap-5 overflow-x-auto pb-5 lg:grid lg:grid-cols-4 lg:overflow-visible">
            {reviews.map((review) => (
              <div className="snap-start lg:contents" key={review.name}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page section-pad" aria-labelledby="journal-heading">
        <SectionHeading eyebrow="06 — Journal" title={<>Ideas, materials<br />& observations.</>} />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <article key={article.title} className="group">
              <div className="aspect-[0.78] overflow-hidden bg-bone">
                <img
                  src={article.image}
                  alt={article.alt}
                  className="image-cover transition duration-700 ease-premium group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widecaps text-muted">
                {article.category} · {article.date}
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-[1.02]">{article.title}</h3>
              <a href="#top" className="hover-line mt-5 text-sm font-semibold uppercase tracking-widecaps">
                Read article &rarr;
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
