import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services, processStages } from "../data/services.js";

export default function Services() {
  return (
    <>
      <section className="container-page pb-20 pt-36 sm:pt-44" aria-labelledby="services-page">
        <SectionHeading
          eyebrow="Services"
          title={<>Design from idea<br />to atmosphere.</>}
          intro="Each engagement is shaped around the scale, pace and character of the space."
        />
        <div className="mt-16">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>
      <section className="bg-bone py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Our Process" title="Measured, detailed, calm." />
          <div className="mt-14 grid gap-px bg-ink/15 md:grid-cols-5">
            {processStages.map((stage) => (
              <article key={stage.title} className="bg-bone p-6 sm:p-8">
                <p className="text-sm font-semibold text-muted">{stage.number}</p>
                <h2 className="mt-8 font-serif text-4xl leading-none">{stage.title}</h2>
                <p className="mt-6 text-sm leading-7 text-muted">{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
