import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string | URL;
  title: string | undefined;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <Link
      href={props.href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {props.title}
    </Link>
  );
};

export default NavLink;
