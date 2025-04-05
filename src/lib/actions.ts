"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";
import prisma from "./db";

// TODO: add create post page, which will have an action of creating new post in postgres DB

const postFormSchema = z.object({
  title: z.string({
    invalid_type_error: "Please enter a valid title.",
  }),
  body: z.string({
    invalid_type_error: "Please enter a valid body.",
  }),
});

export interface IPostFormActionState {
  errors?: {
    title?: string[];
    body?: string[];
  };
  message?: string | null;
}

export async function fetchPosts() {
  try {
    const posts = await prisma.post.findMany();
    return posts;

    // ---- OLD CODE ----
    //   await new Promise((resolve) => setTimeout(resolve, 500));
    //   const fetchedPosts = posts;
    //   return fetchedPosts;
  } catch (error) {
    // Handle any errors
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export async function createPost(
  prevState: IPostFormActionState,
  formData: FormData
) {
  // Validate form using Zod
  const validatedFields = postFormSchema.safeParse({
    title: formData.get("title"),
    body: formData.get("body"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Invoice.",
    };
  }

  // Prepare data for insertion into the database
  const post = {
    title: validatedFields.data.title,
    body: validatedFields.data.body,
  };

  // Insert data into the database
  try {
    await prisma.post.create({ data: post });
  } catch (error) {
    console.error("Error adding post:", error);
    // If a database error occurs, return a more specific error.
    return { message: "Database Error: Failed to Update Invoice." };
  }

  revalidatePath("/posts");
  redirect("/posts");
}
