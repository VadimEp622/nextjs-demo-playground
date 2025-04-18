"use client";

import { useActionState } from "react";
import { createPost, IPostFormActionState } from "@/lib/actions/posts";
import { Button } from "@/components/ui/button";

export default function FormCreatePost() {
  const initialState: IPostFormActionState = { message: null, errors: {} };
  const [state, formAction] = useActionState(createPost, initialState);

  return (
    <form action={formAction}>
      <div className="mb-4 flex items-center gap-4">
        <label htmlFor="title">Title</label>
        <input
          className="border border-gray-200"
          id="title"
          name="title"
          type="text"
          placeholder="Enter title"
          required
        />
      </div>
      <div className="mb-4 flex items-center gap-4">
        <label className="" htmlFor="body">
          Body
        </label>
        <textarea
          className="resize-none border border-gray-200"
          id="body"
          name="body"
          placeholder="Enter Body"
          required
        />
      </div>
      <Button type="submit">Create Invoice</Button>
    </form>
  );
}
