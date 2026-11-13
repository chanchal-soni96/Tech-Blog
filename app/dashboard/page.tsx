// SSR
import { connection } from "next/server";
import { Suspense } from "react";

async function DashboardContent() {
    //wait for incoming request before rendering.
  await connection();

  const currentTime = new Date().toLocaleString();

  return (
    <div className="rounded-lg bg-blue-50 p-5">
      <h2 className="mb-2 text-lg font-semibold text-blue-900">
        Current Server Time
      </h2>

      <p className="text-blue-700">{currentTime}</p>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          SSR Dashboard
        </h1>

        <p className="mb-6 text-gray-600">
          This page displays request-time information.
        </p>

        <Suspense fallback={<p>Loading dashboard information...</p>}>
          <DashboardContent />
        </Suspense>
      </div>
    </main>
  );
}
