import { Button } from "@/shadcn/ui/button";
import SectionHeading from "../common/Section/SectionHeading";
import Image from "next/image";

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
          <div className="relative max-md:mt-8">
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

          <div>
            <SectionHeading
              subtitle="Fort Lauderdale, FL"
              title="Meet Your Dentist, Silvana Beraj DMD"
              leftAlign
              className="hidden md:block"
            />

            <p className="mt-8 max-w-lg text-lg">
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
            <div className="flex items-center gap-3 md:gap-6">
              <Button className="hover:shadow-2xl px-8 font-semibold">
                Read More
              </Button>
              <Button
                variant="outline"
                className="hover:shadow-2xl px-8 font-semibold border-black"
              >
                Specialized Tools
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
