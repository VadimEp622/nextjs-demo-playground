import { auth } from "@/auth";
import Link from "next/link";

export default async function MarketHeader() {
  const session = await auth();

  return (
    <header className="border-b-1 border-gray-500 px-6 py-3 text-center">
      <div className="flex justify-between gap-4">
        <h2>Fancy Logo</h2>
        {session?.user?.name && <h4>Hello, {session.user.name}</h4>}
        <nav>
          <ul className="flex gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
