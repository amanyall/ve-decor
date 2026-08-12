import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section className="container-page pb-24 pt-36 sm:pb-32 sm:pt-44" aria-labelledby="projects-page">
      <SectionHeading
        eyebrow="Projects"
        title={<>Selected interiors<br />with quiet presence.</>}
        intro="A collection of residential and commercial spaces composed through proportion, material and atmosphere."
      />
      <div className="mt-16 grid gap-x-8 gap-y-16 lg:grid-cols-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} large={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
}
