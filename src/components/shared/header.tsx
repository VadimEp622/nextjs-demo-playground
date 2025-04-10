import Link from "next/link";

export default function MarketHeader() {
  return (
    <header className="text-center px-6 py-3 border-b-1 border-gray-500">
      <div className="flex gap-4 justify-between">
        <h2>Fancy Logo</h2>
        <ul>
          <li>
            <section className="flex gap-2">
              <Link href="/">Home</Link>
              <Link href="/posts">Posts</Link>
            </section>
          </li>
        </ul>
      </div>
    </header>
  );
}
