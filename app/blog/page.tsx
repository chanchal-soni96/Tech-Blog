
import Link from "next/link";
import { posts } from "../lib/posts";
import BlogCard from "../components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Articles",
  description:
    "Read articles about Next.js, React and backend development.",
};

const renderingLinks = [
  {
    title: "SSG – Static Site Generation",
    description: "Explore static blog pages generated at build time.",
    href: "/blog/understanding-nextjs",
  },
  {
    title: "SSR – Server-Side Rendering",
    description: "See dynamic server rendering with the dashboard.",
    href: "/dashboard",
  },
  {
    title: "ISR – Incremental Static Regeneration",
    description: "Explore periodically revalidated news content.",
    href: "/news",
  },
  {
    title: "Cache Components",
    description: "Learn caching with use cache and cacheLife().",
    href: "/cached-news",
  },
];

export default function BlogPage() {
  return (
    <section>
      <h1 className="mb-3 text-4xl font-bold text-gray-900">
        All Articles
      </h1>

      <p className="mb-8 text-gray-600">
        Explore our latest programming and technology articles.
      </p>

      {/* Blog Articles */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            description={post.description}
            category={post.category}
            author={post.author}
            date={post.date}
          />
        ))}
      </div>

      {/* Rendering and Caching Concepts */}
      <div className="mt-14">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">
          Rendering & Caching Concepts
        </h2>

        <p className="mb-6 text-gray-600">
          Explore the practical implementations of Next.js
          rendering and caching strategies.
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {renderingLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-400 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {item.description}
              </p>

              <p className="mt-4 text-sm font-semibold text-blue-600">
                Explore concept →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
