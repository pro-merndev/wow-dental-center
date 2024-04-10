"use client";

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/shadcn/ui/button";
import SectionHeading from "../common/Section/SectionHeading";
import Image from "next/image";
import Slider from "react-slick";

const HomeAbout = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  };
  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <SectionHeading
          subtitle="Fort Lauderdale, FL"
          title="Meet Your Dentist, Silvana Beraj DMD"
          leftAlign
          className="block md:hidden"
        />
        <div className="flex items-center flex-col md:flex-row gap-8 md:gap-32">
          <div className="relative max-md:mt-8">
            <Image
              src="/images/about.png"
              alt="about"
              width={411}
              height={664}
              priority
              className="z-10 relative"
            />
            <Image
              src="/images/about_bg.png"
              alt="about"
              width={411}
              height={664}
              className="block absolute left-5 top-5 z-0"
            />
          </div>

          <div>
            <SectionHeading
              subtitle="Fort Lauderdale, FL"
              title="Meet Your Dentist, Silvana Beraj DMD"
              leftAlign
              className="hidden md:block"
            />

            <p className="mt-8 max-w-lg text-lg">
              Dr. Silvana Beraj, DMD, MSc, PhD, stands out in the dental field
              with her extensive education and practice in Fixed Prosthodontics
              and Dental Occlusion, highlighted by her academic journey from
              Tirana University to the prestigious Boston University where she
              graduated with High Honors. Her career is distinguished by her
              roles as an educator, dean, and speaker at international dental
              conferences, alongside her contribution of 77 publications and
              presentations.{" "}
            </p>

            <p className="my-4 font-bold text-lg">
              arcu non sodales neque sodales ut etiam sit
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6">
              <Button className="hover:shadow-2xl px-8 font-semibold max-md:w-full">
                Read More
              </Button>
              <Button
                variant="outline"
                className="hover:shadow-2xl px-8 font-semibold border-black max-md:w-full"
              >
                Specialized Tools
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 relative min-h-[330px]">
        <div className="relative z-10">
          <h5 className="font-copperPlate text-2xl font-bold text-center">
            Great Work In Action
          </h5>

          {/* Carousel Slider */}
          <div>
            <Slider {...settings}></Slider>
          </div>
        </div>
        <div className="absolute top-4 left-0 w-full z-0">
          <img className="w-full" src="/images/about_cover.png" alt="bg" />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
