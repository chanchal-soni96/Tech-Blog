
"use client";

import { useRouter } from "next/navigation";

export default function CloseModal() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="absolute right-8 top-6 text-3xl text-white hover:text-gray-300"
      aria-label="Close modal"
    >
      &times;
    </button>
  );
}
