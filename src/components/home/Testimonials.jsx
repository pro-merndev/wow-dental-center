"use client";

import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import PlayIcon from "../icons/PlayIcon";
import { Button } from "@/shadcn/ui/button";
import DoubleArrowIcon from "../icons/DoubleArrowIcon";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, Company",
    src: "/videos/testimonial_1.mp4",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "CEO, Company",
    src: "/videos/video.mov",
  },
  {
    id: 3,
    name: "John Doe",
    title: "CEO, Company",
    src: "/videos/video.mov",
  },
];

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState(testimonials[0]);
  const sliderRef = useRef(null);
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused || video.ended) {
        video.play();
        setPaused(false);
      } else {
        video.pause();
        setPaused(true);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.paused || video.ended ? setPaused(true) : setPaused(false);
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    centerMode: true,
    variableWidth: true,
    initialSlide: 0,
    focusOnSelect: true,
  };

  return (
    <section className="py-12 md:py-32 relative">
      <div className="md:container relative z-10">
        <div className="lg:flex lg:items-end lg:gap-8 w-full md:w-[85%] mx-auto">
          {/* Left Side */}
          <div className="w-full lg:w-7/12 lg:pb-24">
            <div
              className={`flex flex-col items-center lg:items-start justify-center gap-4`}
            >
              <h5
                className={`font-copperPlate text-primary text-xl font-semibold md:text-2xl leading-[20px] md:leading-[24px]`}
              >
                Testimonials
              </h5>
              <h2
                className={`max-md:max-w-[210px] max-md:text-center font-source text-4xl font-bold md:text-5xl xl:text-6xl lg:max-w-md `}
              >
                Our Patients Love Us
              </h2>
              <p
                className={`max-md:text-center max-w-[290px] md:max-w-xl text-xs font-medium md:text-lg`}
              >
                At our practice, we treat each patient with the same warmth and
                dedication as we would our own family, ensuring a nurturing and
                supportive healthcare experience. We always go above and beyond
                to meet their needs.
              </p>
            </div>

            <div className="mt-8">
              <h5 className="font-copperPlate text-2xl font-bold hidden lg:block">
                Patient Review Videos
              </h5>

              {/* For Large Devices */}
              <div className="mt-4 hidden lg:grid grid-cols-3 gap-x-4">
                {testimonials.map((item, i) => (
                  <div
                    key={i}
                    className="w-full h-[310px] md:w-[192px] rounded-3xl overflow-hidden shadow-2xl"
                    onClick={() => setActiveVideo(item)}
                  >
                    <video
                      src={item.src}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    ></video>
                  </div>
                ))}
              </div>

              {/* For Small Devices */}
              <div className="lg:hidden testimonial_slider">
                <Slider {...settings} ref={sliderRef}>
                  {testimonials.map((item, i) => (
                    <TestimonialItem key={i} item={item} />
                  ))}
                </Slider>

                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() => sliderRef.current.slickPrev()}
                  >
                    <DoubleArrowIcon size={16} className="rotate-180" />
                  </Button>
                  <p className="font-copperPlate font-bold">
                    Scroll For <br />
                    More Videos
                  </p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() => sliderRef.current.slickNext()}
                  >
                    <DoubleArrowIcon size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden lg:block lg:w-5/12 relative">
            <div className="w-[520px] h-[832px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl ">
              {activeVideo && (
                <video
                  src={activeVideo.src}
                  ref={videoRef}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  loop
                  controls
                  // autoPlay
                ></video>
              )}
            </div>
            <div
              className="absolute left-0 bottom-20 w-[60%] py-4 text-white px-8"
              style={{
                background:
                  "linear-gradient(89.97deg, #000000 61.92%, rgba(255, 255, 255, 0) 99.97%)",
              }}
            >
              <p className="text-xl font-semibold font-copperPlate">
                {activeVideo?.name}
              </p>
              <p>{activeVideo?.title}</p>
            </div>

            <div
              className="absolute right-12 bottom-[-35px] w-[70px] h-[70px] bg-[#171717] rounded-full grid place-items-center cursor-pointer shadow-primaryShadow"
              onClick={togglePlayPause}
            >
              {paused ? (
                <PlayIcon color="#fff" size={20} />
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <div className="bg-white h-4 w-[3px] rounded"></div>
                  <div className="bg-white h-4 w-[3px] rounded"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* bg elements */}
      <div
        className="hidden lg:block absolute top-12 left-0 z-0 h-[100px] w-full bg-[#EDEEF0]"
        style={{
          boxShadow: "0px 11px 22px 0px #98989A inset",
        }}
      ></div>
      <div
        className="absolute bottom-80 lg:bottom-40 left-0 z-0 h-[188px] w-full bg-[#EDEEF0]"
        style={{
          boxShadow: "0px 11px 22px 0px #98989A inset",
        }}
      ></div>
    </section>
  );
};

// ---- TestimonialItem Component For Small Devices ----
const TestimonialItem = ({ item }) => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused || video.ended) {
        video.play();
        setPaused(false);
      } else {
        video.pause();
        setPaused(true);
      }
    }
  };

  return (
    <div className="px-4 pb-16">
      <div className="relative">
        <div className="w-[260px] h-[426px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-xl">
          <video
            src={item.src}
            ref={videoRef}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            controls
          ></video>
        </div>

        <div
          className="absolute left-0 bottom-20  py-4 text-white px-8"
          style={{
            background:
              "linear-gradient(89.97deg, #000000 61.92%, rgba(255, 255, 255, 0) 99.97%)",
          }}
        >
          <p className="text-xl font-semibold font-copperPlate">{item?.name}</p>
          <p>{item?.title}</p>
        </div>

        <div
          className="absolute right-12 bottom-[-35px] w-[60px] md:w-[70px] h-[60px] md:h-[70px] bg-[#171717] rounded-full grid place-items-center"
          style={{ boxShadow: "11px 11px 22px 0px #98989A" }}
          onClick={togglePlayPause}
        >
          {paused ? (
            <PlayIcon color="#fff" size={20} />
          ) : (
            <div className="flex items-center justify-center gap-2">
              <div className="bg-white h-4 w-[3px] rounded"></div>
              <div className="bg-white h-4 w-[3px] rounded"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
