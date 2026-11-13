export default function Loading() {
  return (
    <div className="animate-pulse">

      {/* Page heading skeleton */}
      <div className="mb-8">
        <div className="h-9 w-64 rounded bg-gray-200"></div>

        <div className="mt-3 h-4 w-96 rounded bg-gray-200"></div>
      </div>
 
      {/* Blog cards skeleton */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <div className="h-4 w-20 rounded bg-gray-200"></div>

            <div className="mt-5 h-6 w-full rounded bg-gray-200"></div>

            <div className="mt-3 h-4 w-3/4 rounded bg-gray-200"></div>

            <div className="mt-2 h-4 w-full rounded bg-gray-200"></div>

            <div className="mt-6 flex justify-between">
              <div className="h-4 w-20 rounded bg-gray-200"></div>

              <div className="h-4 w-28 rounded bg-gray-200"></div>
            </div>

            <div className="mt-5 h-9 w-24 rounded bg-gray-200"></div>
          </div>
        ))}

      </div>

    </div>
  );
}