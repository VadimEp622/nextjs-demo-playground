import { auth } from "@/auth";
import HeaderNavlinks from "@/components/shared/header-navlinks";
import DropdownUser from "@/components/ui/dropdown2";

export default async function MarketHeader() {
  const session = await auth();

  return (
    <header className="flex min-h-20 flex-col justify-center border-b-1 border-gray-500 px-6 py-3 text-center">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center">
          <h2 className="text-3xl font-bold">Fancy Logo</h2>
          <HeaderNavlinks className="ms-20" />
        </div>
        <div className="flex items-center gap-4">
          {session?.user?.name && <h4>Hello, {session.user.name}</h4>}
          <DropdownUser />
        </div>
      </div>
    </header>
  );
}
