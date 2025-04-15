import { DeletePost } from "@/components/ui/posts/buttons";
import { IPost } from "@/lib/model/post";

// TODO: add click on card to redirect to posts/[id] page
// TODO: add post edit

export default function PostCard({ post }: Readonly<{ post: IPost }>) {
  return (
    <article className="w-full rounded-lg sm:w-50 p-5">
      <div className="border border-gray-500">
        {/* <p className="truncate">{JSON.stringify(post)}</p> */}
        <p className="truncate">{post.title}</p>
        <p className="truncate">{post.body}</p>
        <div className="flex justify-center">
          <DeletePost postId={post.id} />
        </div>
      </div>
    </article>
  );
}
