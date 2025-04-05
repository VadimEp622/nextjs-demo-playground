import { fetchPosts } from "../../lib/actions";
// import { fetchDemoPosts } from "../../lib/demo-actions";
import PostCard from "../../ui/post-card";

export default async function PostList() {
  // const posts = await fetchDemoPosts();
  const posts = await fetchPosts();

  return (
    <section className="px-6">
      <section className="flex flex-col">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </section>
  );
}
