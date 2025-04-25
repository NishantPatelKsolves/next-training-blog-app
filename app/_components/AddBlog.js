"use client";
import { useRouter } from "next/navigation";

const AddBlog = () => {
  const router = useRouter();
  const handleCreateBlogClick = () => {
    router.push("/createBlog");
  };
  return (
    <button
      onClick={handleCreateBlogClick}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
    >
      Add New Blog
    </button>
  );
};

export default AddBlog;
