"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  children: React.ReactNode;
  onCloseMobileMenu?: () => void;
}

const NavItem = ({
  href,
  children,
  onCloseMobileMenu,
}: NavItem): JSX.Element => {
  const currentPathname = usePathname();
  const isActive = currentPathname === href;
  return (
    <Link
      href={{ pathname: href }}
      onClick={onCloseMobileMenu}
      className={classNames(
        "text-cyan-700 hover:underline flex hover:bg-cyan-100 p-2 rounded-md",
        { "font-bold bg-cyan-100": isActive }
      )}
    >
      {children}
    </Link>
  );
};

export default NavItem;
