
import { Suspense } from "react";
import { connection } from "next/server";

async function LatestNews() {
  await connection();

  // Simulate a slow API response
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="rounded-xl bg-green-100 p-6">
      <h2 className="mb-3 text-xl font-bold text-green-900">
        Latest News Loaded!
      </h2>

      <p className="text-green-800">
        Your news content has successfully loaded after 3 seconds.
      </p>
    </div>
  );
}

export default function StreamingDemoPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">

        <h1 className="mb-3 text-3xl font-bold text-gray-900">
          Streaming in Next.js
        </h1>

        <p className="mb-8 text-gray-600">
          This page demonstrates how Next.js streams content
          progressively using Suspense.
        </p>

        {/* Static Content */}
        <section className="mb-6 rounded-xl bg-blue-100 p-6">
          <h2 className="text-xl font-bold text-blue-900">
            Static Content
          </h2>

          <p className="mt-2 text-blue-800">
            This section appears immediately without waiting
            for the news content.
          </p>
        </section>

        {/* Dynamic Content with Streaming */}
        <Suspense
          fallback={
            <div className="rounded-xl bg-yellow-100 p-6">
              <h2 className="text-xl font-bold text-yellow-900">
                Loading Latest News...
              </h2>

              <p className="mt-2 text-yellow-800">
                Please wait while the news content loads.
              </p>
            </div>
          }
        >
          <LatestNews />
        </Suspense>

      </div>
    </main>
  );
}
