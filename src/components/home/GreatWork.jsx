/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import Slider from "react-slick";
import PlayIcon from "../icons/PlayIcon";
import { Button } from "@/shadcn/ui/button";
import DoubleArrowIcon from "../icons/DoubleArrowIcon";

const GreatWork = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(2);

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
    <div className="mt-12 relative min-h-[330px] w-full">
      <div className="relative z-10">
        <h5 className="font-copperPlate text-2xl font-bold text-center max-md:max-w-[210px] mx-auto">
          Great Work In Action
        </h5>

        {/* Carousel Slider */}
        <div className="relative mt-8">
          {/* For Small Devices */}
          <div className="block md:hidden">
            <Slider
              {...settings}
              className="mx-auto text-center"
              ref={sliderRef}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <div className="px-4 mx-auto pt-8 pb-16" key={i}>
                  <VideoItem />
                </div>
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

        {/* For Large Devices */}
          <div className="hidden md:flex items-center justify-center gap-4 mt-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`${activeSlide === i ? "slick-active" : ""}`}
                onMouseEnter={() => setActiveSlide(i)}
              >
                <VideoItem />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-28 md:top-12 left-0 w-full z-0">
        <img
          className="w-full h-[400px]"
          src="/images/about_cover.png"
          alt="bg"
        />
      </div>
    </div>
  );
};

const VideoItem = () => {
  return (
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
  );
};

export default GreatWork;
