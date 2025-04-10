import { fetchPosts } from "../../lib/actions";
import PostCard from "../cards/post-card";

export default async function PostList() {
  const posts = await fetchPosts();

  return (
    <section className="px-6">
      <section className="flex">
        {posts.length > 0 ? (
          posts.map((post: any) => <PostCard key={post.id} post={post} />)
        ) : (
          <h5 className="text-center w-full">No posts found...</h5>
        )}
      </section>
    </section>
  );
}
