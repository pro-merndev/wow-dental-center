import { Button } from "@/shadcn/ui/button";
import SectionHeading from "../common/Section/SectionHeading";
import InterfaceIcon from "../icons/InterfaceIcon";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Welcome = () => {
  return (
    <div>
      <div className="container">
        <SectionHeading
          subtitle="Welcome To"
          title="Waves of Welcoming Dental Center"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          bigTitle
        />

        <div className="flex justify-center flex-wrap gap-6 mt-10">
          <Button className="max-md:h-9 rounded-e-3xl rounded-es-3xl rounded-ss-none shadow-primaryShadow">
            <InterfaceIcon height={15} width={15} />
            <span className="font-copperPlate text-lg max-md:text-xs ml-3">Learn More</span>
          </Button>
          <Button className="max-md:h-9 rounded-e-3xl rounded-es-3xl rounded-ss-none shadow-primaryShadow bg-primary">
            <InterfaceIcon height={15} width={15} />
            <span className="font-copperPlate text-lg max-md:text-xs ml-3">
              Schedule Appointment
            </span>
          </Button>
        </div>
      </div>
      <div className="py-12 md:py-20">
        <Marquee autoFill>
          <div className="relative sm:h-[184px] sm:w-[296px] h-[129px] w-[207px] mx-3">
            <Image
              src="/images/welcome-image.png"
              alt="gallery"
              layout="fill"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Welcome;
