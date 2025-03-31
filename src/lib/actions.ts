'use server'


import { posts } from "./placeholder-data";

export async function fetchPosts() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const fetchedPosts = posts;

    return fetchedPosts;
  } catch (error) {
    // Handle any errors
    console.error("Error fetching posts:", error);
    throw error;
  }
}
