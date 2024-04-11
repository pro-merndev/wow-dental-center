"use client";

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/shadcn/ui/button";
import Image from "next/image";
import Slider from "react-slick";
import SectionHeading from "../common/Section/SectionHeading";
import PlayIcon from "../icons/PlayIcon";

const HomeAbout = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    centerMode: true,
    variableWidth: true,
    initialSlide: 1,
    focusOnSelect: true,
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

      <div className="mt-12 relative min-h-[330px] w-full">
        <div className="relative z-10">
          <h5 className="font-copperPlate text-2xl font-bold text-center">
            Great Work In Action
          </h5>

          {/* Carousel Slider */}
          <div className="relative mt-8 max-w-[1400px] mx-auto">
            <Slider {...settings} className="mx-auto text-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <div className="px-2 mx-auto" key={i}>
                  <div className={`video_wrapper relative group`}>
                    <video
                      src="/videos/video.mov"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      autoPlay
                      loop
                      controls
                      muted
                    ></video>

                    <div className="group-hover:hidden absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full w-10 h-10 bg-white grid place-items-center">
                      <PlayIcon />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="absolute top-12 left-0 w-full z-0 ">
          <img
            className="w-full h-[400px]"
            src="/images/about_cover.png"
            alt="bg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
