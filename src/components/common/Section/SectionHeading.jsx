const SectionHeading = ({
  title,
  subtitle,
  description,
  leftAlign,
  className,
  bigTitle,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${
        !leftAlign ? "mx-auto text-center" : "text-left"
      } ${className ? className : ""}`}
      data-aos="fade-up"
      // data-aos-once="false"
    >
      {subtitle && (
        <h5
          className={`font-copperPlate text-primary text-xl font-semibold leading-[20px] mb-2
          ${!leftAlign ? "mx-auto text-center" : "mr-auto text-left"}
          ${bigTitle ? "md:text-3xl" : "md:text-2xl"}
          `}
        >
          {subtitle}
        </h5>
      )}
      {title && (
        <h2
          className={`font-source image-text text-4xl font-bold md:text-5xl xl:text-6xl 
          ${!leftAlign ? "mx-auto text-center" : "mr-auto text-left"}
          ${
            bigTitle
              ? "xl:text-[96px] xl:leading-[96px] max-w-5xl"
              : "xl:text-6xl  max-w-xl"
          }
          `}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`max-w-[240px] md:max-w-xl text-xs font-medium md:text-lg ${
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
