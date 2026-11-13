
import Link from "next/link";

const photos = [
  {
    id: "1",
    title: "Mountain Landscape",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
  },
  {
    id: "2",
    title: "Beautiful Beach",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  },
  {
    id: "3",
    title: "Forest View",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
  },
  {
    id: "4",
    title: "Mountain Lake",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
  },
];

export default function PhotoGalleryPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Photo Gallery
        </h1>

        <p className="mb-8 text-gray-600">
          Explore beautiful photographs. Click any photo to view it.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Photo cards */}
          {photos.map((photo) => (
            <Link
              key={photo.id}
              href={`/photo-gallery/photo/${photo.id}`}
              className="overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="font-semibold text-gray-900">
                  {photo.title}
                </h2>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </main>
  );
}
