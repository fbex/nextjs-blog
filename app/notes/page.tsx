import Link from "next/link";

export default function Notes() {
  return (
    <main className="prose max-w-4xl mx-auto w-[100%] min-h-[calc(100vh-250px-88px)] p-6">
      <h1>Notes</h1>
      <ul>
        <li><Link href="">First Blog Post Title</Link></li>
        <li><Link href="">Some other Blog Post</Link></li>
      </ul>
    </main>
  )
};
