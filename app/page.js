import BlogCard from "@/app/_components/BlogCard";

const dummyBlogs = [
  {
    title: "Understanding React Server Components",
    summary: "Explore the future of rendering in React with server components.",
    author: "Alex Johnson",
    date: "April 1, 2025",
  },
  {
    title: "10 Tailwind CSS Tips You Didn't Know",
    summary: "Boost your Tailwind productivity with these expert tricks.",
    author: "Taylor Smith",
    date: "March 28, 2025",
  },
  {
    title: "Why Next.js 14 is a Game Changer",
    summary: "Dive into the latest features and improvements in Next.js 14.",
    author: "Jamie Lee",
    date: "March 22, 2025",
  },
  {
    title: "Deploying with Vercel: A Step-by-Step Guide",
    summary: "From local to global — learn how to deploy your Next.js apps.",
    author: "Dana White",
    date: "March 18, 2025",
  },
  {
    title: "Markdown & MDX in Next.js",
    summary: "How to power your blog with markdown content using MDX.",
    author: "Chris Doe",
    date: "March 12, 2025",
  },
  {
    title: "Dark Mode in Tailwind CSS",
    summary: "Learn how to effortlessly enable dark mode in your apps.",
    author: "Jordan Cruz",
    date: "March 5, 2025",
  },
  {
    title: "The Magic of ISR in Next.js",
    summary: "Incremental Static Regeneration explained with examples.",
    author: "Nina Patel",
    date: "February 28, 2025",
  },
  {
    title: "Managing State with Zustand",
    summary: "Lightweight and scalable state management made easy.",
    author: "Leo Nguyen",
    date: "February 20, 2025",
  },
  {
    title: "TypeScript & Next.js: A Perfect Match",
    summary: "Learn how TypeScript enhances your Next.js development.",
    author: "Samira Ali",
    date: "February 15, 2025",
  },
  {
    title: "SEO in Next.js Made Simple",
    summary: "A guide to optimizing your blog for search engines.",
    author: "Ravi Kapoor",
    date: "February 10, 2025",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to NextBlog</h1>
        <p className="text-lg mb-10">
          Your go-to platform for web dev insights, tips, and tutorials.
          Discover the latest in frontend tech, frameworks, and design.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyBlogs.map((blog, idx) => (
            <BlogCard
              key={idx}
              title={blog.title}
              summary={blog.summary}
              author={blog.author}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
