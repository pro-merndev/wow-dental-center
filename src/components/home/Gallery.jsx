import { Button } from "@/shadcn/ui/button";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div className="pt-32 md:pt-56 max-md:pb-20 bg-[url('/images/gallry-bg.png')] bg-cover bg-top bg-no-repeat overflow-hidden ">
      <div className="flex gap-10 2xl:container max-sm:container justify-between w-full ">
        <div className="flex justify-center items-center max-2xl:pl-32 max-sm:pl-0">
          <div className="max-w-[350px] md:w-[350px]">
            <h3 className="text-primary xl:text-2xl text-xl font-bold  font-copperPlate">
              Transformation
            </h3>
            <h2 className="lg:text-[64px] text-[32px] font-bold  font-source text-white">
              Gallery
            </h2>
            <p className="md:text-lg text-xs max-w-xs md:max-w-xl text-white">
              Explore the stunning transformations achieved at our clinic, where
              cutting-edge technology meets expert care. Our portfolio
              highlights the journey to renewed confidence and radiant smiles,
              showcasing the profound impact of our dental expertise.
            </p>
            <Button
              variant="outline"
              className="max-md:h-9 hover:shadow-2xl px-8 font-semibold border-background bg-black text-white mt-6 text-xs md:text-base"
            >
              See All Photos
            </Button>
          </div>
        </div>
        <div className="max-sm:hidden">
          <div className="relative h-[370px] w-[517px]">
            <Image
              src="/images/gallery/pic-1.png"
              alt="gallery"
              layout="fill"
            />
          </div>
        </div>
        <div className="max-sm:hidden">
          <div className="relative h-[370px] w-[517px]">
            <Image
              src="/images/gallery/pic-2.png"
              alt="gallery"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="max-md:mt-8">
        <Marquee autoFill className="">
          <div className="relative md:h-[300px] md:w-[383px] h-[157px] w-[220px]">
            <Image
              src="/images/gallery/pic-1.png"
              alt="gallery"
              layout="fill"
              // className="p-8"
              className="p-[22px]"
            />
          </div>
          <div className="relative md:h-[300px] md:w-[383px] h-[157px] w-[220px]">
            <Image
              src="/images/gallery/pic-3.png"
              alt="gallery"
              layout="fill"
              className="p-3"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Gallery;
