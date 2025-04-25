import React from "react";
export const metadata = {
  title: "About ",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About This Blog</h1>
        <p className="text-lg mb-4">
          Welcome to <span className="font-semibold">NextBlog</span> — a modern,
          minimalistic, and powerful blogging platform built with{" "}
          <span className="font-medium">Next.js</span> and{" "}
          <span className="font-medium">Tailwind CSS</span>. This project was
          created with a passion for clean design, fast performance, and a love
          for writing.
        </p>

        <p className="text-lg mb-4">
          Whether you&apos;re a tech enthusiast, a writer, or someone who just
          enjoys reading high-quality blog content, this app is designed for
          you. Stay tuned for articles on web development, software engineering,
          life hacks, and much more.
        </p>

        <p className="text-lg mb-4">
          The goal of this blog is to provide insightful content with a
          beautiful and user-friendly interface. Built with a fully responsive
          design, it works great on all devices — from desktops to smartphones.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <ul className="list-disc pl-6 text-lg space-y-1">
            <li>
              <strong>Framework:</strong> Next.js
            </li>
            <li>
              <strong>Styling:</strong> Tailwind CSS
            </li>
            <li>
              <strong>Markdown Support:</strong> MDX (optional)
            </li>
            <li>
              <strong>Deployment:</strong> Vercel
            </li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <p className="text-md italic">
            Thanks for stopping by. Happy reading!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
