
import { Suspense } from "react";

type Photo = {
  id: string;
  title: string;
  image: string;
};

const photos: Photo[] = [
  {
    id: "1",
    title: "Mountain Landscape",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000",
  },
  {
    id: "2",
    title: "Beautiful Beach",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000",
  },
  {
    id: "3",
    title: "Forest View",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1000",
  },
  {
    id: "4",
    title: "Mountain Lake",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000",
  },
];

async function PhotoContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const photo = photos.find((item) => item.id === id);

  if (!photo) {
    return <h1 className="p-10 text-2xl">Photo not found!</h1>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 p-8">
      <h1 className="mb-6 text-3xl font-bold text-white">
        {photo.title}
      </h1>

      <img
        src={photo.image}
        alt={photo.title}
        className="max-h-[75vh] max-w-4xl rounded-xl object-contain"
      />
    </main>
  );
}

export default function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<p className="p-10">Loading photo...</p>}>
      <PhotoContent params={params} />
    </Suspense>
  );
}
