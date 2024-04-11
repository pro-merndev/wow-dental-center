const DoubleArrowIcon = ({
  size,
  width = 12,
  height = 10,
  className,
  color = "black",
  ...rest
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      className={className}
      {...rest}
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 1L11 5L7 9M1 1L5 5L1 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DoubleArrowIcon;
