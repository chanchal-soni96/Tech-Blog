
import React from "react";

export default function ParallelDemoLayout({
  children,
  users,
  orders,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  orders: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

        {/* Normal page content */}
        {children}

        {/* Parallel route slots */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {users}
          {orders}
        </div>
      </div>
    </main>
  );
}
