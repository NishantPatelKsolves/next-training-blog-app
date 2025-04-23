import Link from "next/link";

export default async function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/blogs"
            className="hover:text-accent-400 transition-colors"
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            User Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
