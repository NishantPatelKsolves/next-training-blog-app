import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-6 border-t border-primary-800 pt-2 pb-3 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Message */}
        <div>
          <h2 className="text-lg font-semibold mb-2">NextBlog</h2>
          <p className="text-primary-400">
            Built for devs, designers, and curious minds. Read, learn, and share
            knowledge — one post at a time.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-primary-400 flex gap-7">
            <li>
              <Link href="/" className="hover:text-primary-100">
                Home
              </Link>
            </li>
            <li>
              <a href="/about" className="hover:text-primary-100">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-primary-100">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-primary-100">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <div className="flex space-x-4 text-primary-400">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-100"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-100"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-100"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-4 text-center text-primary-500">
        © {new Date().getFullYear()} NextBlog. Crafted with ❤️ and Next.js.
      </div>
    </footer>
  );
};

export default Footer;
