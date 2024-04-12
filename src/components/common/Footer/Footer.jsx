"use client";

import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const windowWidth = useWindowWidth();
  return (
    <footer>
      <div className="py-20 bg-[url('/images/footer-bg.png')] bg-cover bg-center bg-no-repeat  ">
        <div className="container grid grid-cols-10 lg:gap-x-10 gap-y-10 text-white">
          <div className="xl:col-span-4 lg:col-span-3 col-span-10 max-lg:flex max-lg:justify-center max-lg:items-center">
            <div className="w-fit">
              <div className="flex flex-col justify-center items-center">
                <Link href="/">
                  <div className="relative h-24 w-52">
                    <Image src="/logo/logo.svg" alt="logo" layout="fill" />
                  </div>
                </Link>
                <p className="max-md:text-xs text-center mt-2 mb-6">
                  Opening Hours: Mon-Fri, 9AM - 6PM
                </p>
                <div className="flex items-center justify-center gap-6 md:gap-4">
                  <a href="" className="flex justify-center items-center">
                    <FacebookIcon size={windowWidth > 768 ? 20 : 12} />
                  </a>
                  <a href="" className="flex justify-center items-center">
                    <InstagramIcon size={windowWidth > 768 ? 20 : 12} />
                  </a>
                  <a href="" className="flex justify-center items-center">
                    <WhatsappIcon size={windowWidth > 768 ? 20 : 12} />
                  </a>
                  <a href="" className="flex justify-center items-center">
                    <YoutubeIcon size={windowWidth > 768 ? 20 : 12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-6 lg:col-span-7 col-span-10">
            <div className="grid sm:grid-cols-11 grid-cols-1 gap-14 md:gap-10">
              <div className="sm:col-span-3 max-sm:text-center">
                <h5 className="tracking-[0.3rem] uppercase font-semibold mb-3 md:mb-6">
                  OVERVIEW
                </h5>
                <div>
                  <ul className="flex flex-col gap-2 md:gap-4">
                    <li>
                      <Link
                        href="/"
                        className="max-md:text-xs max-md:font-medium"
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="max-md:text-xs max-md:font-medium"
                      >
                        Practice
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="max-md:text-xs max-md:font-medium"
                      >
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="max-md:text-xs max-md:font-medium"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="max-md:text-xs max-md:font-medium"
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sm:col-span-4 max-sm:text-center">
                <h5 className="tracking-[0.3rem] uppercase font-semibold mb-3 md:mb-6 ">
                  SERVICES
                </h5>
                <div>
                  <ul className="flex flex-col gap-2 md:gap-4">
                    <li>
                      <Link
                        href="/"
                        className="max-md:text-xs max-md:font-medium"
                      >
                        Full Mouth Reconstruction
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="max-md:text-xs max-md:font-medium"
                      >
                        Cosmetic Dentistry
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="max-md:text-xs max-md:font-medium"
                      >
                        General Dentistry
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="max-md:text-xs max-md:font-medium"
                      >
                        Extraction
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="max-md:text-xs max-md:font-medium"
                      >
                        One-Day Dentistry
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="max-md:text-xs max-md:font-medium"
                      >
                        Digital Dental Occlusion Analysis
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sm:col-span-4 max-sm:text-center">
                <h5 className="tracking-[0.3rem] uppercase font-semibold mb-3 md:mb-6 ">
                  CONTACT
                </h5>
                <div>
                  <ul className="flex flex-col gap-2 md:gap-4">
                    <li>
                      <Link
                        href="/"
                        className="max-md:text-xs max-md:font-medium"
                      >
                        Address: 3000 E Commercial Blvd, Fort Lauderdale, FL
                        33308
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="max-md:text-xs max-md:font-medium"
                      >
                        Phone: (754) 274 0675
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="max-md:text-xs max-md:font-medium"
                      >
                        Email: dentalcenter3000@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="max-md:text-xs text-center bg-black text-white py-4">
        Powered With 🤍 By Dental Site Master
      </p>
    </footer>
  );
};

export default Footer;
