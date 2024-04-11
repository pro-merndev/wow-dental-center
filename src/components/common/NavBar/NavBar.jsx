"use client";

import ArrowIcon from "@/components/icons/ArrowIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import { Button } from "@/shadcn/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/shadcn/ui/sheet";
import Image from "next/image";
import Link from "next/link";

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
  // const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <nav className={`absolute w-full top-0 left-0 z-50`}>
      <div className="container  flex items-center justify-between py-2">
        {/* Left Side */}
        <Link href="/">
          <div className="relative max-md:h-[38px] max-md:w-[88px] h-20 w-36">
            <Image src="/logo/logo.svg" alt="logo" layout="fill" />
          </div>
        </Link>

        {/* Middle Nav Links */}
        <div className="hidden md:flex items-center gap-12 text-white">
          {navItems?.map((item, index) => (
            <div key={index} className="font-semibold">
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

        {/* Right Side */}
        <div className="hidden lg:block relative">
          <div>
            <button className="bg-white rounded-2xl flex items-center px-4 font-bold">
              <PhoneIcon />
              <div className="h-[52px] w-[1px] bg-black mx-4"></div>
              <p>Call (754) 274 0675</p>
            </button>
          </div>
          <div className={`absolute top-full left-0 font-medium`}>
            <p className="text-white my-4">Monday - Friday, 9AM to 6PM</p>
            <p className="text-white max-w-xs">
              3000 E Commercial Blvd, Fort Lauderdale, FL 33308
            </p>
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="flex md:hidden hover:bg-transparent"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-black/70 backdrop-blur-xl">
            <Link href="/" className="">
              <div className="relative mx-auto h-20 w-36">
                <Image src="/logo/logo.svg" alt="logo" layout="fill" />
              </div>
            </Link>

            <div className="mt-12 flex items-start gap-4 flex-col text-white">
              {navItems?.map((item, index) => (
                <div
                  key={index}
                  className="w-full py-3 hover:bg-gray-900/70 px-2 rounded-lg"
                >
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
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
