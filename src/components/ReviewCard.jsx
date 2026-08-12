export default function ReviewCard({ review }) {
  return (
    <article className="min-w-[86%] border border-ink/15 bg-ivory p-6 sm:min-w-[24rem] lg:min-w-0 lg:p-8">
      <p className="text-sm tracking-[0.2em] text-clay" aria-label={`${review.rating} out of 5 stars`}>
        {"★".repeat(review.rating)}
      </p>
      <blockquote className="mt-8 font-serif text-3xl leading-[1.06] sm:text-4xl">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <div className="mt-10 border-t border-ink/15 pt-5">
        <p className="font-semibold">— {review.name}</p>
        <p className="mt-1 text-sm text-muted">{review.project}</p>
      </div>
    </article>
  );
}
