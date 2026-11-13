
import Link from "next/link";
import { posts } from "./lib/posts";
import BlogCard from "./components/BlogCard";

const sections = [
  {
    title: "SSR Dashboard",
    description: "Explore dynamic server rendering with live server time.",
    href: "/dashboard",
    category: "Rendering",
    number: "01",
  },
  {
    title: "ISR News",
    description: "Explore periodically revalidated news content.",
    href: "/news",
    category: "Rendering",
    number: "02",
  },
  {
    title: "Cached News",
    description: "Explore caching with Next.js Cache Components.",
    href: "/cached-news",
    category: "Caching",
    number: "03",
  },
  {
    title: "Parallel Routes",
    description: "Display independent dashboard sections in one layout.",
    href: "/Parallel-demo",
    category: "Advanced Routing",
    number: "04",
  },
  {
    title: "Photo Gallery",
    description: "Explore photo modals using Intercepting Routes.",
    href: "/photo-gallery",
    category: "Advanced Routing",
    number: "05",
  },
  {
    title: "Streaming Demo",
    description: "See progressive rendering with React Suspense.",
    href: "/streaming-demo",
    category: "Performance",
    number: "06",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Technology · Development · Innovation
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Explore Technology.
            <span className="block text-blue-400">
              Understand What&apos;s Next.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Discover programming articles, development insights and
            interactive technology experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Articles →
            </Link>

            <Link
              href="/photo-gallery"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              From our blog
            </p>
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <p className="mt-2 text-slate-600">
              Learn about modern web technologies and software development.
            </p>
          </div>

          <Link
            href="/blog"
            className="hidden font-semibold text-blue-600 hover:text-blue-800 sm:block"
          >
            View all articles →
          </Link>
        </div>

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
      </section>

      {/* Explore Features */}
      <section id="explore" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Explore the platform
          </p>

          <h2 className="text-3xl font-bold">
            Discover More Experiences
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Explore different areas of our platform, from dynamic
            dashboards to advanced routing and performance demonstrations.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-blue-600">
                    {item.number}
                  </span>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold group-hover:text-blue-600">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <p className="mt-6 font-semibold text-blue-600">
                  Explore section →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-10 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-white">
              TechBlog.
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Exploring technology and modern web development.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm">
            <Link href="/blog" className="hover:text-white">Articles</Link>
            <Link href="/photo-gallery" className="hover:text-white">Gallery</Link>
            <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
            <Link href="/robots.txt" className="hover:text-white">Robots</Link>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-800 pt-6 text-xs text-slate-500">
           © 2026 TechBlog. Built with Next.js.        </div>
      </footer>
    </main>
  );
}
