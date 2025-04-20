import { auth } from "@/auth";
import { Logout } from "@/components/ui/auth/buttons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default async function DropdownUser() {
  const session = await auth();

  // TODO: add user avatar + dropdown menu items which makes sense, according to current user auth state

  // TODO: add profile page
  return (
    <div className="">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[hover]:bg-gray-700 data-[open]:bg-gray-700">
          <UserCircleIcon className="size-6 fill-white/60" />
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        {!session?.user ? (
          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem>
              <Link
                href="/login"
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
              >
                Login
              </Link>
            </MenuItem>
          </MenuItems>
        ) : (
          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            {/* <div className="my-1 h-px bg-white/5" /> */}
            <MenuItem>
              <Logout className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                Logout
              </Logout>
            </MenuItem>
          </MenuItems>
        )}
      </Menu>
    </div>
  );
}
