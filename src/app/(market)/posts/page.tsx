import { Suspense } from "react";
import PostList from "../../../components/market/post-list";

// forces the page to NOT be static in production (useful for async data?)  - topic is regarding "next.js caching + static and dynamic rendering"
export const dynamic = "force-dynamic";

export default function PostsPage() {
  return (
    <main>
      <h1 className="px-6 py-4 text-center text-3xl">Hi from posts</h1>
      <h2 className="px-6 pb-2 text-2xl">Post List:</h2>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <PostList />
      </Suspense>
    </main>
  );
}
