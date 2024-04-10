import { Button } from "@/shadcn/ui/button";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div className="pt-56  bg-[url('/images/gallry-bg.png')] bg-cover bg-top bg-no-repeat overflow-hidden ">
      <div className="flex gap-10 2xl:container max-sm:container justify-between w-full ">
        <div className="flex justify-center items-center max-2xl:pl-32 max-sm:pl-0">
          <div className="h-[340px] w-[315px]">
            <h3 className="text-primary xl:text-[32px] text-xl  font-bold  font-copperPlate">Transformation</h3>
            <h2 className="xl:text-[64px] text-[32px] font-bold  font-source text-white">Gallery</h2>
            <p className="xl:text-[20px] text-sm  max-w-xl mb-5 lg:mb-0  text-white">
              Explore the stunning transformations achieved at our clinic, where cutting-edge technology meets expert care. Our portfolio highlights
              the journey to renewed confidence and radiant smiles, showcasing the profound impact of our dental expertise.
            </p>
            <Button variant="outline" className="hover:shadow-2xl px-8 font-semibold border-background bg-black text-white max-md:w-full mt-6">
              See All Photos
            </Button>
          </div>
        </div>
        <div className="max-sm:hidden">
          <div className="relative h-[370px] w-[517px]">
            <Image src="/images/gallery/pic-1.png" alt="gallery" layout="fill" />
          </div>
        </div>
        <div className="max-sm:hidden">
          <div className="relative h-[370px] w-[517px]">
            <Image src="/images/gallery/pic-2.png" alt="gallery" layout="fill" />
          </div>
        </div>
      </div>
      <div className="bg-black">
        <Marquee autoFill>
          <div className="relative sm:h-[254px] sm:w-[383px] h-[157px] w-[220px]">
            <Image src="/images/gallery/pic-1.png" alt="gallery" layout="fill" />
          </div>
          <div className="relative sm:h-[254px] sm:w-[383px] h-[157px] w-[220px]">
            <Image src="/images/gallery/pic-3.png" alt="gallery" layout="fill" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Gallery;
