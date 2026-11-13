"use client";

import { useEffect } from "react";

export default function BlogError({
  error,
  retry,
}: {
  error: Error;
  retry: () => void;
}) {
  useEffect(() => {
    console.error("Blog Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">

      <h2 className="text-3xl font-bold text-red-600">
        Something went wrong!
      </h2>

      <p className="mt-3 text-gray-600">
        We couldn't load the blog articles.
        Please try again.
      </p>

      <button
        onClick={() => retry()}
        className="mt-6 rounded-lg bg-purple-600 px-6 py-3 text-white hover:bg-purple-700"
      >
        Try Again
      </button>

    </div>
  );
}