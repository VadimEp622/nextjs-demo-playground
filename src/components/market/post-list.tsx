import { fetchDemoPosts } from "../../lib/demo-actions";
import PostCard from "../../ui/post-card";

export default async function PostList() {
  const posts = await fetchDemoPosts();

  return (
    <section className="px-6">
      <section className="flex flex-col">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </section>
  );
}
