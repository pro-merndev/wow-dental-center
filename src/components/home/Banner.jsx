import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import PhoneIcon from "../icons/PhoneIcon";

const actions = [
  {
    label: "Meet Your Dentist",
  },
  {
    label: "View Smile Gallery",
  },
  {
    label: "Like Us On Facebook",
  },
  {
    label: "Leave A Review",
  },
  {
    label: "Social Media",
  },
];

const Banner = () => {
  return (
    <section
      className="min-h-[1050px] flex items-center justify-center bg-cover bg-center bg-no-repeat pt-28 pb-36 md:py-40 text-white relative"
      style={{
        backgroundImage: "url(/images/banner_bg.png)",
      }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Side */}
          <div className="basis-7/12" data-aos="fade-up">
            <h6 className="hidden md:block font-source text-2xl font-semibold">
              Fort Lauderdale, FL
            </h6>
            <h6 className="block md:hidden font-source font-semibold max-w-[185px] mb-4">
              3000 E Commercial Blvd, Fort Lauderdale, FL
            </h6>
            <h1 className="font-source text-5xl md:text-[96px] font-bold leading-[48px] md:leading-[96px]">
              <span className="text-primary">
                Waves <span className="text-3xl md:text-4xl">of</span> Welcoming
              </span>{" "}
              Dental Center
            </h1>
            <p className="mt-5 max-w-[445px] text-lg max-md:text-sm max-md:max-w-sm w-[80%] font-extralight md:font-normal">
              Discover unparalleled dental care that transforms and revitalizes
              your smile with cutting-edge treatments in Fort Lauderdale.{" "}
            </p>

            <div className="hidden md:flex items-center gap-4 flex-wrap mt-10">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  className="bg-white text-black px-6 py-2 hover:text-white text-lg font-semibold"
                >
                  {action.label}
                </Button>
              ))}
            </div>

            <div className="block md:hidden my-8">
              <button className="font-semibold bg-white text-black md:rounded-[17px] rounded-[8px] flex items-center px-2 text-sm w-[202px] md:w-[217px]">
                <PhoneIcon size={12} className="ml-[6px] md:ml-0" />
                <div className="h-10 w-[1px] bg-black mx-4"></div>
                <p className="md:font-bold font-[800px]">Call (754) 274 0675</p>
              </button>
            </div>
          </div>

          {/* Right Side Form */}
          <div
            className="md:w-full md:basis-5/12 bg-[#D9D9D9] bg-opacity-25 border border-white p-4 md:p-10 
             w-full md:h-[515px] backdrop-blur-[5px] max-md:pb-6
            "
            data-aos="fade-up"
          >
            <div className="flex flex-col gap-6 text-black">
              <Input
                placeholder="Name"
                className="placeholder:text-black placeholder:font-bold pl-[20px]"
              />
              <Input
                placeholder="Email"
                className="placeholder:text-black placeholder:font-bold pl-[20px]"
              />
              <Input
                placeholder="Phone Number"
                className="placeholder:text-black placeholder:font-bold pl-[20px]"
              />
              <Button className="bg-primary py-4 font-bold">
                Schedule Appointment
              </Button>
            </div>

            <div className="mt-[30px] md:mt-8 flex flex-col md:flex-row items-center max-md:text-center justify-between gap-1 md:gap-4">
              <div>
                <p className="md:font-bold font-normal tracking-[0.5px]">
                  New Patients, Good News
                </p>
                <p className="max-w-[210px] md:max-w-[230px] mt-2 leading-4 md:font-normal font-thin tracking-[0.5px]">
                  To welcome new patients, we’re charging only
                </p>
                <p className="hidden md:block max-w-[230px] mt-1 leading-4 md:font-normal font-thin tracking-[0.5px]">
                  for a comprehensive dental exam, x-ray and teeth cleaning.
                </p>
              </div>
              <p className="text-[96px] max-md:leading-[96px] font-black text-white my-3">
                $99
              </p>
              <p className="block md:hidden max-w-[230px] leading-4 md:font-normal font-thin">
                for a comprehensive dental exam, x-ray and teeth cleaning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute md:bottom-8 bottom-16 left-1/2 max-md:-translate-x-1/2 md:left-8">
        <div className="flex flex-row md:flex-col gap-7">
          <a href="">
            <FacebookIcon size={18} />
          </a>
          <a href="">
            <InstagramIcon size={18} />
          </a>
          <a href="">
            <WhatsappIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;