const ArrowIcon = ({
  size,
  width = 10,
  height = 6,
  className,
  color = "white",
  ...rest
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      className={className}
      {...rest}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1L5 5L1 1"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
