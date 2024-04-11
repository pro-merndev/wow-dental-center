const SectionHeading = ({
  title,
  subtitle,
  description,
  leftAlign,
  className,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${
        !leftAlign ? "mx-auto text-center" : "text-left"
      } ${className ? className : ""}`}
      // data-aos="fade-up"
    >
      {subtitle && (
        <h5
          className={`font-copperPlate text-primary text-xl font-semibold md:text-2xl leading-[20px] md:leading-[24px] mb-2
          ${!leftAlign ? "mx-auto text-center" : "mr-auto text-left"}
          `}
        >
          {subtitle}
        </h5>
      )}
      {title && (
        <h2
          className={`font-source image-text text-4xl font-bold md:text-5xl xl:text-6xl max-w-xl ${
            !leftAlign ? "mx-auto text-center" : "mr-auto text-left"
          }`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`max-w-xl text-base font-medium md:text-lg ${
            !leftAlign ? "mx-auto text-center" : "mr-auto text-left"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
