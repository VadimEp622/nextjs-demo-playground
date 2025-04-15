import Image from "next/image";
import { deletePost } from "../../../lib/actions/posts";

export function DeletePost({ postId }: Readonly<{ postId: string }>) {
  const deletePostWithId = deletePost.bind(null, postId);

  return (
    <form action={deletePostWithId}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <Image
          src="/assets/delete.svg"
          alt="delete"
          width={18}
          height={18}
          className="cursor-pointer object-contain"
        />
      </button>
    </form>
  );
}
