"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Posts",
    href: "/posts",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Login",
    href: "/login",
  },
];

export default function HeaderNavlinks() {
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <nav>
      <ul className="flex gap-2">
        {navLinks.map((link) => {
          // checks if current mapped link is for "/" homepage or not.
          // ❌ if it's NOT for homepage, check for exact match between first route segments of both, current mapped link and pathname.
          //  ✔ if it IS for homepage, simply check if pathname equals "/".
          const isActive = link.href.split("/")[1]
            ? pathname.startsWith("/" + link.href.split("/")[1])
            : pathname === "/";

          return (
            <li key={link.href} className={`px-1`}>
              <Link
                href={link.href}
                className={`relative block py-4 text-lg font-bold hover:text-gray-300 ${isActive ? "text-red-400 before:absolute before:right-0 before:bottom-0 before:left-0 before:h-1 before:bg-red-400 hover:text-red-300 hover:before:bg-red-300" : ""}`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
