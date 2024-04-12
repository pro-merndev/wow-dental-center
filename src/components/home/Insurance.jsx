import Marquee from "react-fast-marquee";
import SectionHeading from "../common/Section/SectionHeading";

/* eslint-disable @next/next/no-img-element */
const Insurance = () => {
  return (
    <section className="relative lg:h-[758px] lg:container max-lg:py-12">
      {/* Small Device Heading */}
      <div className="block lg:hidden mb-8">
        <h5
          className={`font-copperPlate text-primary text-lg font-semibold text-center`}
        >
          Let Us Handle The Finances
        </h5>
        <h2
          className={`font-source image-text text-4xl font-bold text-center max-w-[200px]"`}
        >
          Insurance & Financing
        </h2>
      </div>

      {/* Big Device Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 relative h-full">
        {/* Left Side */}
        <div className="relative">
          <div className="text-center max-lg:mx-8">
            <img
              src="/images/insurance/insurance.png"
              alt="insurance"
              className="text-center block mx-auto z-10 relative"
            />
          </div>
          <div className="flex lg:hidden absolute z-0 left-0 top-1/2 -translate-y-1/2 items-center flex-col">
            <img src="/images/insurance/bg_4.png" alt="bg" className="block h-28 sm:h-40 w-[100vw] -my-4" />
            <img src="/images/insurance/bg_5.png" alt="bg" className="block h-28 sm:h-40 w-[100vw] -my-4" />
            <img src="/images/insurance/bg_6.png" alt="bg" className="block h-28 sm:h-40 w-[100vw] -my-4" />
          </div>
        </div>

        {/* Right Side */}
        <div className=" max-lg:container">
          <div className="hidden lg:block">
            <h5
              className={`font-copperPlate text-primary text-xl font-semibold leading-[20px] text-left lg:text-2xl`}
            >
              Let Us Handle The Finances
            </h5>
            <h2
              className={`font-source image-text text-4xl font-bold lg:text-5xl text-left xl:text-6xl  max-w-xl"`}
            >
              Insurance & Financing
            </h2>
          </div>

          <div className="lg:mt-10 flex flex-col items-center lg:items-start gap-9 text-xs lg:text-base max-w-lg text-center lg:text-left max-lg:mx-auto">
            <p>
              By conducting a detailed analysis of your benefits, we are able to
              offer you the most precise estimate of coverage available.
              Utilizing this data, we can craft a strategy that optimizes your
              benefits while reducing your personal costs. Furthermore, once
              treatment commences, we take on the responsibility of filing
              insurance claims for you, ensuring a hassle-free experience.
              (Refer to Accepted Insurance)
            </p>

            <p>
              Most insurance policies provide coverage for a significant portion
              of preventive and restorative treatments, but seldom include
              cosmetic surgeries. For treatments not covered or exceeding your
              plans maximum benefit, we offer various payment methods such as
              cash, check, money order, and all major credit cards.
              Additionally, we present flexible, interest-free monthly payment
              plans via Care Credit and Lending Club, enabling you to receive
              the necessary care without financial stress.
            </p>
            <Marquee autoFill>
              {Array.from({ length: 5 }).map((_, i) => (
                <div className="mx-8" key={i}>
                  <img
                    src={`/images/insurance/insurance_${i + 1}.png`}
                    alt="insurance"
                    className="h-12"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      {/* Bg Element */}
      <div className="hidden xl:flex absolute z-0 left-0 top-0 items-center">
        <img src="/images/insurance/bg_1.png" alt="bg_1" />
        <img src="/images/insurance/bg_2.png" alt="bg_2" />
        <img src="/images/insurance/bg_3.png" alt="bg_3" />
      </div>
    </section>
  );
};

export default Insurance;
