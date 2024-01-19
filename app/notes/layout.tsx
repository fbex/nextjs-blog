import React from "react";

export default function Layout({children}: { children: React.ReactNode }) {
  return (
    <main className="prose max-w-4xl mx-auto w-[100%] min-h-[calc(100vh-250px-88px)] p-6">
      {children}
    </main>
  )
}
