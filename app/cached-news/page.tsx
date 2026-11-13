
import { cacheLife } from "next/cache";

type NewsItem = {
  id: number;
  title: string;
  body: string;
};

async function getCachedNews(): Promise<NewsItem[]> {
  "use cache";

  // Keep cached news fresh for the minutes profile
  cacheLife("minutes");

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  return response.json();
}

export default async function CachedNewsPage() {
  const news = await getCachedNews();

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          Cached News
        </h1>

        <p className="mb-6 text-gray-600">
          This news data is cached using Next.js Cache Components.
        </p>

        <div className="space-y-4">
          {news.map((item) => (
            <article
              key={item.id}
              className="rounded-lg border bg-white p-5 shadow-sm"
            >
              <h2 className="mb-2 text-xl font-semibold">
                {item.title}
              </h2>

              <p className="text-gray-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
