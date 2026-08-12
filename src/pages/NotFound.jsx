import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-screen items-center pb-20 pt-36" aria-labelledby="not-found">
      <div>
        <p className="eyebrow">404</p>
        <h1 id="not-found" className="mt-8 editorial-title">
          This room
          <br />
          is unfinished.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
          The page you are looking for does not exist, or the doorway has moved.
        </p>
        <div className="mt-10">
          <Button to="/">Return Home</Button>
        </div>
      </div>
    </section>
  );
}
