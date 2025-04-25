import AddBlog from "../_components/AddBlog";

export const metadata = {
  title: "Blogs ",
};

async function fetchPosts() {
  const res = await fetch("http://localhost:3000/api/blogs"); // Use the absolute URL for SSR
  const data = await res.json();
  return data;
}

const Page = async () => {
  const posts = await fetchPosts();

  return (
    <div className="p-6 space-y-6 bg-primary-950 text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-center">Blogs</h1>
        <AddBlog />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-gray-800 shadow-lg rounded-lg p-4 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-white">{post.title}</h2>
            <p className="text-gray-400 mt-2">
              {post.body.substring(0, 100)}...
            </p>
            <button className="mt-4 text-blue-400 hover:text-blue-600 transition-colors duration-300">
              Read More
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
