"use server";

// TODO: add create post page, which will have an action of creating new post in postgres DB

export async function fetchPosts() {
    try {
    //   await new Promise((resolve) => setTimeout(resolve, 500));
  
    //   const fetchedPosts = posts;
  
    //   return fetchedPosts;
    } catch (error) {
      // Handle any errors
      console.error("Error fetching posts:", error);
      throw error;
    }
  }