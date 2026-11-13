// ISR
import { Suspense } from "react";
import { cacheLife } from "next/cache";

type NewsItem = {
  id: number;
  title: string;
  body: string;
};

async function getNews(): Promise<NewsItem[]> {
  "use cache";

  cacheLife({
    revalidate: 10,
    expire: 60,
  });

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  return response.json();
}

async function NewsContent() {
  const news = await getNews();

  return (
    <div className="space-y-4">
      {news.map((item) => (
        <article
          key={item.id}
          className="rounded-lg border bg-white p-5 shadow-sm"
        >
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            {item.title}
          </h2>

          <p className="text-gray-600">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          Latest News
        </h1>

        <Suspense fallback={<p>Loading news...</p>}>
          <NewsContent />
        </Suspense>
      </div>
    </main>
  );
}
