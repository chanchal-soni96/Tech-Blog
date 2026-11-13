
import { Suspense } from "react";
import { posts } from "../../lib/posts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// SSG: Generate static article routes
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic SEO metadata
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

// Async component that reads URL parameters
async function BlogPostContent({ params }: Props) {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl">
      <p className="mb-3 text-sm font-semibold text-purple-600">
        {post.category}
      </p>

      <h1 className="mb-4 text-4xl font-bold text-gray-900">
        {post.title}
      </h1>

      <p className="mb-4 text-gray-600">
        By {post.author} | {post.date}
      </p>

      <p className="text-lg leading-8 text-gray-700">
        {post.content}
      </p>
    </article>
  );
}

// Page component with Suspense
export default function BlogPostPage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <p className="mx-auto max-w-3xl p-6 text-gray-600">
          Loading article...
        </p>
      }
    >
      <BlogPostContent params={params} />
    </Suspense>
  );
}
