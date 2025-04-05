import { Suspense } from "react";
import PostList from "../../../components/market/post-list";
import Link from "next/link";

// forces the page to NOT be static in production (useful for async data?)  - topic is regarding "next.js caching + static and dynamic rendering"
export const dynamic = "force-dynamic";

export default function PostsPage() {
  return (
    <main>
      <h1 className="px-6 py-4 text-center text-3xl">Hi from posts</h1>
      <section className="flex">
        <h2 className="px-6 pb-2 text-2xl">Create New Post:</h2>
        <Link
          href="posts/create"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Create
        </Link>
      </section>
      <h2 className="px-6 pb-2 text-2xl">Post List:</h2>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <PostList />
      </Suspense>
    </main>
  );
}
