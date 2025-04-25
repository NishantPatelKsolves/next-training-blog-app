// app/api/blogs/route.js
export async function GET() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Error fetching posts", { status: 500 });
  }
}

// pages/api/blogs.js

export async function POST(req, res) {
  try {
    const { title, body } = await req.json(); // Parse the JSON body of the request

    // Validate if title and body are provided
    if (!title || !body) {
      return res.status(400).json({ error: "Title and body are required." });
    }

    // Prepare the data to send to JSONPlaceholder
    const blogData = {
      title,
      body,
      userId: 1, // UserId is required, setting it to 1 as a placeholder
    };

    // Send the POST request to JSONPlaceholder
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });

    // If the response is successful, get the new post data
    if (response.ok) {
      const newPost = await response.json();
      return res.status(201).json(newPost); // Respond with the newly created blog post data
    } else {
      const error = await response.json();
      return res.status(response.status).json(error); // Handle JSONPlaceholder errors
    }
  } catch (error) {
    // Catch any unexpected errors
    console.error("Error:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the blog post." });
  }
}
