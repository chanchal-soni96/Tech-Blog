
import Link from "next/link";
import LikeButton from "./LikeButton";

type BlogCardProps = {
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
};

const articleLinks: Record<string, string> = {
  "Understanding Next.js App Router": "understanding-nextjs",
  "React Server Components Explained": "react-server-components",
  "Understanding Backend Architecture": "backend-architecture",
};

export default function BlogCard({
  title,
  description,
  category,
  author,
  date,
}: BlogCardProps) {
  const slug = articleLinks[title];

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
      <span className="text-sm font-semibold text-purple-600">
        {category}
      </span>

      <h2 className="mt-3 text-xl font-bold text-gray-900">
        <Link
          href={slug ? `/blog/${slug}` : "/blog"}
          className="transition hover:text-blue-600"
        >
          {title}
        </Link>
      </h2>

      <p className="mt-2 text-gray-600">{description}</p>

      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <span>{author}</span>
        <span>{date}</span>
      </div>

      <div className="mt-4">
        <LikeButton />
      </div>
    </article>
  );
}
