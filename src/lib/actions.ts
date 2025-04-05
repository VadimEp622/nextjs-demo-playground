"use server";

import { prisma } from "./db";

// TODO: add create post page, which will have an action of creating new post in postgres DB

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

export async function addPost(post: unknown) {
  // TODO: add Zod validation
  try {
    await prisma.post.create({ data: post });
  } catch (error) {
    // Handle any errors
    console.error("Error adding post:", error);
    throw error;
  }
}
