import React from "react";

const BlogCard = ({ title, summary, author, date }) => {
  return (
    <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition duration-200">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4">{summary}</p>
      <div className="text-xs text-gray-500 dark:text-gray-400">
        By {author} • {date}
      </div>
    </div>
  );
};

export default BlogCard;
