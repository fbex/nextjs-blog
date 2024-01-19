import Link from "next/link";
import { getAllPosts } from "@/app/notes/get-posts";

export default async function Page() {
  const posts = await getAllPosts()

  return (
    <>
      <h1>Notes</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {posts.map((post) => {
          const title = String(post.metadata.title);
          return (
            <div key={title} className="card bg-base-100 shadow-lg transition-shadow hover:shadow-xl">
              <Link
                key={title}
                href={`/notes/${post.slug}`}
                className="no-underline font-normal text-inherit"
              >
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <p>{post.metadata.description}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
};
