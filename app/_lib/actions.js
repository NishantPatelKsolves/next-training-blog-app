"use server";

export async function createBlogAction(formData) {
  const title = formData.get("formtitle");
  const body = formData.get("formbody");

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to create blog");
    }

    const newPost = await res.json();
    console.log("Blog created successfully:", newPost);
    return newPost;
  } catch (error) {
    console.error("Server Action Error:", error);
    throw error;
  }
}
