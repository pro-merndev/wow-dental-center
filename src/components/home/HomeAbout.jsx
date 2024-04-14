"use client";

import { Button } from "@/shadcn/ui/button";
import Image from "next/image";
import SectionHeading from "../common/Section/SectionHeading";
import GreatWork from "./GreatWork";
import { useWindowWidth } from "@react-hook/window-size";

const HomeAbout = () => {
  const windowWidth = useWindowWidth();
  return (
    <section className="py-16 lg:py-32">
      <div className="container">
        <SectionHeading
          subtitle="Fort Lauderdale, FL"
          title="Meet Your Dentist, Silvana Beraj DMD"
          leftAlign={windowWidth > 1024 ? true : false}
          className="block lg:hidden"
        />
        <div className="flex items-center flex-col lg:flex-row gap-8">
          {/* Left Side */}
          <div
            className="relative max-lg:mt-8 lg:basis-5/12"
            data-aos="fade-up"
          >
            <Image
              src="/images/about_1.png"
              alt="about"
              width={windowWidth > 768 ? 500 : 400}
              height={windowWidth > 768 ? 590 : 310}
              priority
              className="z-10 relative lg:ml-auto"
            />
            {/* <Image
              src="/images/about_bg.png"
              alt="about"
              width={411}
              height={664}
              className="block absolute left-5 top-5 z-0"
            /> */}
          </div>

          <div data-aos="fade-up">
            <SectionHeading
              subtitle="Fort Lauderdale, FL"
              title="Meet Your Dentist, Silvana Beraj DMD"
              leftAlign
              className="hidden lg:block"
            />

            <p className="mt-8 max-w-xl text-lg max-md:text-xs max-lg:text-sm">
              Dr. Silvana Beraj, DMD, MSc, PhD, stands out in the dental field
              with her extensive education and practice in Fixed Prosthodontics
              and Dental Occlusion, highlighted by her academic journey from
              Tirana University to the prestigious Boston University where she
              graduated with High Honors. Her career is distinguished by her
              roles as an educator, dean, and speaker at international dental
              conferences, alongside her contribution of 77 publications and
              presentations.{" "}
            </p>

            <p className="my-4 font-bold text-lg max-md:text-xs max-lg:text-sm">
              arcu non sodales neque sodales ut etiam sit
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-6">
              <Button className="max-md:text-xs max-lg:text-sm text-lg px-12 font-semibold max-lg:w-full shadow-primaryShadow">
                Read More
              </Button>
              <Button
                variant="outline"
                className="max-md:text-xs max-lg:text-sm text-lg px-12 font-semibold border-black max-lg:w-full"
                style={{ boxShadow: "-11px -11px 22px 0px #FFFFFF" }}
              >
                Specialized Tools
              </Button>
            </div>
          </div>
        </div>
      </div>

      <GreatWork />
    </section>
  );
};

export default HomeAbout;
