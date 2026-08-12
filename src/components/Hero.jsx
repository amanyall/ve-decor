import Button from "./Button.jsx";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen overflow-hidden bg-charcoal text-paper" aria-labelledby="home-hero">
      {/* <img
        className="absolute inset-0 h-full w-full object-cover opacity-72 animate-slowZoom"
        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=Ve-decort&fit=crop&w=2200&q=90"
        alt="Elegant neutral living space with stone fireplace, timber details and soft seating"
      /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/35 via-charcoal/25 to-charcoal/80" />
      <div className="container-page relative z-10 flex min-h-screen flex-col justify-end pb-14 pt-32 sm:pb-20">
        <p className="reveal mb-8 text-xs font-semibold uppercase tracking-widecaps text-paper/80">
          Interior Architecture
        </p>
        <h1 id="home-hero" className="reveal editorial-title max-w-6xl [animation-delay:120ms]">
          Spaces designed
          <br />
          to be lived in.
        </h1>
        <div className="mt-8 flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="reveal max-w-xl text-lg leading-8 text-paper/78 [animation-delay:220ms]">
            Thoughtful interiors that balance material, light, function and emotion.
          </p>
          <div className="reveal [animation-delay:320ms]">
            <Button to="/projects" variant="light">
              Explore Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
