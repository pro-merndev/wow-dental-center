"use client";

import CloseIcon from "@/components/icons/CloseIcion";
import { Button } from "@/shadcn/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const features = ["Comprehensive Dental Exam", "X-Ray Exam", "Teeth Cleaning"];

const Popup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("popup", true);
  };

  useEffect(() => {
    const prevState = sessionStorage.getItem("popup");
    setTimeout(() => {
      if (prevState) {
        setShow(false);
      } else {
        setShow(true);
      }
    }, 5000);
  }, []);

  return (
    <>
      {show ? (
        <div
          className={`fixed top-0 left-0 h-screen w-full bg-black/50 backdrop-blur-md grid place-items-center z-50`}
          data-aos="fade-up"
        >
          <div className="max-lg:max-w-[360px] w-full lg:w-[880px] h-[493px] lg:h-[572px] bg-[#0E0E0E] relative rounded text-white">
            {/* Close Button */}
            <div className="absolute left-2 top-2 z-20">
              <Button
                className="rounded-full hover:bg-primary"
                variant="ghost"
                size="icon"
                onClick={handleClose}
              >
                <CloseIcon />
              </Button>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center lg:items-start pt-12 lg:pt-20 lg:*:pl-16 text-center lg:text-left z-10 relative">
              <p className="text-sm lg:text-lg font-bold font-copperPlate">
                Attention New Patients!
              </p>
              <h2 className="primary-image-text text-4xl lg:text-6xl font-black my-2">
                HOT PROMO
              </h2>
              <p className="text-xs lg:text-sm max-w-[300px] lg:max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="mt-8 pl-2">
                <p className="text-sm">What’s included: </p>
                <div className="flex flex-col items-start gap-3 mt-4">
                  {features.map((feature, index) => (
                    <div
                      className="flex items-center justify-start gap-4"
                      key={index}
                    >
                      <div className="w-6 lg:w-7 h-6 lg:h-7 bg-white text-black grid place-items-center lg:text-lg font-bold rounded-full">
                        {index + 1}
                      </div>
                      <p className="text-base lg:text-lg font-bold font-copperPlate text-left">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 lg:mt-10">
                <Button
                  variant="outline"
                  className="rounded-none font-bold lg:text-lg font-copperPlate bg-transparent  text-center"
                >
                  Claim Now
                </Button>
              </div>
            </div>

            <div
              className="absolute bottom-0 left-0 w-full z-10 bg-primary"
              style={{
                background:
                  "linear-gradient(90deg, #E88E00 92.29%, #825000 100%)",
              }}
            >
              <Marquee autoFill>
                <div className="flex items-center gap-3 mx-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p>Limited Time Offer</p>
                </div>
              </Marquee>
            </div>

            {/* Right Image */}
            <div
              className="absolute right-0 bottom-0 z-0 w-full h-full"
              style={{
                background:
                  "linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url('/images/popup.png') no-repeat end center/cover",
              }}
            >
              <Image
                src="/images/popup.png"
                width={420}
                height={572}
                alt="popup"
                priority
                className="hidden lg:block"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Popup;
