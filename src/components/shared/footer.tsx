import { auth } from "@/auth";
import { Logout } from "@/components/ui/auth/buttons";

export default async function MarketFooter() {
  const session = await auth();
  // console.log("footer session", session);

  return (
    <footer className="border-t-1 border-gray-500 px-6 py-3">
      <div className="flex justify-center">
        <h2>hi footer</h2>
        {session?.user && <Logout />}
      </div>
    </footer>
  );
}
