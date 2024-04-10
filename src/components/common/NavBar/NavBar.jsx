"use client";

import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "@/components/icons/ArrowIcon";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    children: [
      {
        name: "Service 1",
        link: "/#service_1",
      },
      {
        name: "Service 2",
        link: "/#service_2",
      },
      {
        name: "Service 3",
        link: "/#service_3",
      },
    ],
  },
  {
    name: "Gallery",
    link: "/#gallery",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];

const NavBar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 z-50">
      <div className="container  flex items-center justify-between py-2">
        {/* Left Side */}
        <Link href="/">
          <div className="relative h-20 w-36">
            <Image src="/logo/logo.svg" alt="logo" layout="fill" />
          </div>
        </Link>

        {/* Middle Nav Links */}
        <div className="flex items-center gap-12 text-white">
          {navItems?.map((item, index) => (
            <div key={index} className="">
              {item.link ? (
                <Link href={item.link}>{item.name}</Link>
              ) : (
                <div className="relative group">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <p className="">{item.name}</p>
                    <ArrowIcon className="group-hover:rotate-180 duration-300" />
                  </div>
                  <div className="absolute hidden group-hover:block top-full left-0 min-w-28 w-full bg-white rounded-lg shadow-lg py-2 px-4 mt-1 duration-300">
                    {item.children?.map((child, index) => (
                      <Link key={index} href={child.link}>
                        <span className="block py-1 text-gray-800">
                          {child.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
