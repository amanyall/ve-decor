import Button from "../components/Button.jsx";

export default function About() {
  return (
    <section className="container-page pb-24 pt-36 sm:pb-32 sm:pt-44" aria-labelledby="about-page">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end">
        <div>
          <p className="eyebrow">About</p>
          <h1 id="about-page" className="mt-8 editorial-title max-w-5xl">
            Restraint,
            <br />
            warmth and
            <br />
            material honesty.
          </h1>
        </div>
        <p className="max-w-xl text-lg leading-8 text-muted">
          Ve-decor Interiors is a fictional studio for interior architecture and composed living environments. We work
          through proportion, craft and the quiet details that make a room feel settled.
        </p>
      </div>
      <div className="mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <img
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=Ve-decort&fit=crop&w=1300&q=85"
          alt="Minimal sitting room with soft sofa, art and warm natural finishes"
          className="aspect-[0.88] w-full object-cover"
        />
        <div className="flex flex-col justify-between gap-12 bg-bone p-8 sm:p-12 lg:p-16">
          <div>
            <h2 className="font-serif text-5xl leading-[0.95] sm:text-7xl">How we think.</h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
              We begin with how a space should feel and move outward into planning, light, surfaces, objects and
              construction detail. The result is not a signature imposed on every project, but a thoughtful response to
              the lives unfolding inside it.
            </p>
          </div>
          <Button to="/contact">Start a Project</Button>
        </div>
      </div>
    </section>
  );
}
