/* eslint-disable @next/next/no-img-element */
import { Button } from "@/shadcn/ui/button";
import SectionHeading from "../common/Section/SectionHeading";
import InterfaceIcon from "../icons/InterfaceIcon";
import WarningIcon from "../icons/WarningIcon";

const data = [
  {
    title: "Full Mouth Reconstruction",
    description:
      "Our Full Mouth Reconstruction service combines multiple dental techniques to restore your smile's function and aesthetics thoroughly.",
    image: "/images/what-we-do-1.png",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Cosmetic Dentistry focuses on enhancing the beauty of your smile, ensuring both oral health and aesthetic appeal are prioritized.",
    image: "/images/what-we-do-2.png",
  },
  {
    title: "General Dentistry",
    description:
      "General Dentistry encompasses a broad range of services aimed at preserving and maintaining your overall oral health.",
    image: "/images/what-we-do-3.png",
  },
  {
    title: "Extraction",
    description:
      "Our Extraction service is carefully performed to address severe decay, infection, or overcrowding, ensuring patient comfort and safety.",
    image: "/images/what-we-do-4.png",
  },
  {
    title: "One-Day Dentistry",
    description:
      "One-Day Dentistry offers efficient, high-quality dental treatments like crowns and veneers within a single visit, using advanced technology.",
    image: "/images/what-we-do-5.png",
  },
  {
    title: "Digital Dental Occlusion Analysis",
    description:
      "Digital Dental Occlusion Analysis uses cutting-edge technology for precise assessment of bite and jaw alignment for optimal treatment outcomes.",
    image: "/images/what-we-do-6.png",
  },
];

const WhatWeDo = () => {
  return (
    <div className="relative">
      <div className="container py-8 md:py-20">
        <SectionHeading
          title="WHAT WE DO"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          bigTitle
        />

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-7 mt-10 sm:p-10 max-md:mx-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-es-[2.5rem] rounded-se-[2.5rem] z-20 shadow-primaryShadow h-full relative pb-16"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <img
                  src={item.image}
                  alt="what-we-do"
                  className="w-full h-full"
                />
                <div className="lg:p-10 p-5">
                  <h3 className="max-md:max-w-[210px] font-source sm:text-2xl lg:text-3xl font-bold text-center px-5 sm:min-w-[203px] mx-auto">
                    {item.title}
                  </h3>
                  <p className="text-center text-xs sm:text-sm md:text-lg mt-3 font-medium">
                    {item.description}
                  </p>

                  <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2">
                    <Button className="max-lg:h-9 rounded-e-3xl rounded-es-3xl rounded-ss-none shadow-xl text-sm">
                      <InterfaceIcon height={15} width={15} />
                      <span className="font-copperPlate text-xs lg:text-base ml-3">
                        Learn More
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 max-sm:hidden">
          <Button className="max-md:h-9 rounded-3xl shadow-primaryShadow">
            <WarningIcon size={20} />
            <span className="font-copperPlate text-xs md:text-base ml-3">
              Emergency Dentistry Available
            </span>
          </Button>
        </div>
      </div>
      <div className="absolute left-0 lg:top-20 md:top-40 top-44 z-0">
        <img src="/images/left-ellipse.png" alt="what-we-do-bg" />
      </div>
      <div className="absolute right-0 bottom-[35%] sm:bottom-[25%] lg:bottom-0 z-0">
        <img src="/images/right-ellipse.png" alt="what-we-do-bg" />
      </div>
      <div className="absolute lg:hidden left-0 bottom-20  z-0">
        <img src="/images/left-ellipse.png" alt="what-we-do-bg" />
      </div>
    </div>
  );
};

export default WhatWeDo;
