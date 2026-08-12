export default function ProjectCard({ project, large = false }) {
  return (
    <article className={`group ${large ? "lg:col-span-7" : "lg:col-span-5"}`}>
      <div className={`overflow-hidden bg-bone ${large ? "aspect-[1.05]" : "aspect-[0.85]"}`}>
        <img
          src={project.image}
          alt={project.alt}
          className="image-cover transition duration-700 ease-premium group-hover:scale-105"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4 border-t border-ink/20 pt-4">
        <div className="transition duration-500 ease-premium group-hover:translate-x-2">
          <h3 className="font-serif text-3xl leading-none sm:text-4xl">{project.title}</h3>
          <p className="mt-2 text-sm uppercase tracking-widecaps text-muted">{project.type}</p>
        </div>
        <p className="text-sm font-semibold text-muted">{project.year}</p>
      </div>
    </article>
  );
}
