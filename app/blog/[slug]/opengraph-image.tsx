
import { ImageResponse } from "next/og";
import { posts } from "../../lib/posts";

export const alt = "Tech Blog Article Preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((item) => item.slug === slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px",
          background: "linear-gradient(135deg, #111827, #1e40af)",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#93c5fd",
            marginBottom: 30,
          }}
        >
          TECH BLOG
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: 25,
          }}
        >
          {post?.title ?? "Tech Blog"}
        </div>

        <div
          style={{
            fontSize: 26,
            color: "#d1d5db",
          }}
        >
          {post?.description ?? "Explore technology and development."}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
