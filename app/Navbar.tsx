"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const path = usePathname();
  const navLinks = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              'text-zinc-900': link.href === path,
              'text-zinc-500': link.href !== path,
              "hover:text-zinc-800 transition-colors": true
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
