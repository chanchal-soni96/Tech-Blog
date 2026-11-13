"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="mt-4 rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
    >
      ❤️ Like {likes}
    </button>
  );
}