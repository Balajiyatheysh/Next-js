"use client";
export default function ErrorBoundry({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <h4>
      {error.message} <button onClick={reset}>Try again</button>
    </h4>
  );
}
