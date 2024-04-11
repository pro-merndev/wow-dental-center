"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import PlayIcon from "../icons/PlayIcon";

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
    <section className="py-16 md:py-32 relative">
      <div className="container relative z-10">
        <div className="flex items-end gap-8">
          {/* Left Side */}
          <div className="w-full lg:w-7/12 pb-24">
            <div
              className={`flex flex-col items-center lg:items-start justify-center gap-4`}
            >
              <h5
                className={`font-copperPlate text-primary text-xl font-semibold md:text-2xl leading-[20px] md:leading-[24px]`}
              >
                Testimonials
              </h5>
              <h2
                className={`font-source text-4xl font-bold md:text-5xl xl:text-6xl lg:max-w-md `}
              >
                Our Patients Love Us
              </h2>
              <p className={`max-w-xl text-base font-medium md:text-lg`}>
                At our practice, we treat each patient with the same warmth and
                dedication as we would our own family, ensuring a nurturing and
                supportive healthcare experience. We always go above and beyond
                to meet their needs.
              </p>
            </div>

            <div className="mt-8">
              <h5 className="font-copperPlate text-2xl font-bold">
                Patient Review Videos
              </h5>

              <div className="mt-4 hidden lg:grid grid-cols-3 gap-x-4">
                {testimonials.map((item, i) => (
                  <div
                    key={i}
                    className="w-full h-[310px] rounded-3xl overflow-hidden shadow-2xl"
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

              <div className="mt-4 block lg:hidden">
                <Slider {...settings}>
                  {testimonials.map((item, i) => (
                    <div key={i} className="px-2 pb-16">
                      <div className="relative">
                        <div className="w-[260px] h-[426px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-xl">
                          <video
                            src={item.src}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            autoPlay
                            controls
                            muted
                          ></video>
                        </div>

                        <div
                          className="absolute left-0 bottom-20  py-4 text-white px-8"
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
                          className="absolute right-12 bottom-[-35px] w-[70px] h-[70px] bg-[#171717] rounded-full grid place-items-center"
                          style={{ boxShadow: "11px 11px 22px 0px #98989A" }}
                        >
                          <PlayIcon color="#fff" size={20} />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
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
        className="hidden lg:block absolute bottom-40 left-0 z-0 h-[188px] w-full bg-[#EDEEF0]"
        style={{
          boxShadow: "0px 11px 22px 0px #98989A inset",
        }}
      ></div>
    </section>
  );
};

export default Testimonials;
