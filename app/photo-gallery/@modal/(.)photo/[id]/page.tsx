
import { Suspense } from "react";
import CloseModal from "../../../components/CloseModal";

const photos = [
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

async function PhotoModalContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo = photos.find((item) => item.id === id);

  if (!photo) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
      <CloseModal />

      <div className="max-w-4xl text-center">
        <h2 className="mb-5 text-2xl font-bold text-white">
          {photo.title}
        </h2>

        <img
          src={photo.image}
          alt={photo.title}
          className="max-h-[75vh] max-w-full rounded-xl object-contain"
        />
      </div>
    </div>
  );
}

export default function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <PhotoModalContent params={params} />
    </Suspense>
  );
}
