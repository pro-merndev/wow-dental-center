import Marquee from "react-fast-marquee";
import SectionHeading from "../common/Section/SectionHeading";

/* eslint-disable @next/next/no-img-element */
const Insurance = () => {
  return (
    <section className="py-12 md:py-20">
      {/* Small Device Heading */}
      <div className="block md:hidden mb-8">
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
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-14">
        {/* Left Side */}
        <div className="md:basis-5/12 text-center max-md:mx-8">
          <img
            src="/images/insurance/insurance.png"
            alt="insurance"
            className="text-center block mx-auto"
          />
        </div>

        {/* Right Side */}
        <div className="md:basis-7/12 max-md:container">
          <div className="hidden md:block">
            <h5
              className={`font-copperPlate text-primary text-xl font-semibold leading-[20px] text-left md:text-2xl`}
            >
              Let Us Handle The Finances
            </h5>
            <h2
              className={`font-source image-text text-4xl font-bold md:text-5xl text-left xl:text-6xl  max-w-xl"`}
            >
              Insurance & Financing
            </h2>
          </div>

          <div className="md:mt-10 flex flex-col items-center md:items-start gap-9 text-xs md:text-base max-w-lg text-center md:text-left">
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
              {Array.from({ length: 3 }).map((_, i) => (
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
    </section>
  );
};

export default Insurance;
