"use client";

import { Button } from "@/shadcn/ui/button";
import Image from "next/image";
import SectionHeading from "../common/Section/SectionHeading";
import GreatWork from "./GreatWork";

const HomeAbout = () => {
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
          {/* Left Side */}
          <div className="relative max-md:mt-8" data-aos="fade-up">
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

          <div data-aos="fade-up">
            <SectionHeading
              subtitle="Fort Lauderdale, FL"
              title="Meet Your Dentist, Silvana Beraj DMD"
              leftAlign
              className="hidden md:block"
            />

            <p className="mt-8 max-w-xl text-lg">
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
              <Button className="text-lg px-12 font-semibold max-md:w-full shadow-primaryShadow">
                Read More
              </Button>
              <Button
                variant="outline"
                className="text-lg px-12 font-semibold border-black max-md:w-full"
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
