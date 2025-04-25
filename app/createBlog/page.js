// "use client";
// import { useRouter } from "next/navigation";
import { createBlogAction } from "../_lib/actions";

const CreateBlog = () => {
  return (
    <div className="p-6 space-y-6 bg-primary-950 text-white">
      <h1 className="text-3xl font-semibold text-center">Create a New Blog</h1>

      <form
        action={createBlogAction}
        className="bg-gray-800 shadow-lg rounded-lg p-6 space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg font-semibold mb-2">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            name="formtitle"
            className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="body" className="text-lg font-semibold mb-2">
            Blog Body
          </label>
          <textarea
            id="body"
            name="formbody"
            className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog content"
            rows="6"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
