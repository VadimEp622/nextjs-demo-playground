import { Suspense } from "react";
import PostList from "../../components/market/post-list";

export default function Home() {
  return (
    <main className="">
      <h1 className="px-6 py-4 text-center text-3xl">Hi from home</h1>
      <h2 className="px-6 pb-6 text-center text-2xl">
        Check out those amazing handpicked posts:
      </h2>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <PostList />
      </Suspense>
    </main>
  );
}
