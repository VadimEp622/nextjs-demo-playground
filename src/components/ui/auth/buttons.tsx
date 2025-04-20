import { logout } from "@/lib/actions/auth";
import clsx from "clsx";

export function Logout({
  className,
  children,
}: Readonly<{ className?: string; children: React.ReactNode }>) {
  return (
    <form className={clsx("hover:cursor-pointer", className)} action={logout}>
      <button className="flex w-full hover:cursor-pointer">{children}</button>
    </form>
  );
}
