export function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="Note de cinq étoiles">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 fill-dark"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.26 5.06 16.71l.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
