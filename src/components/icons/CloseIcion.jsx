const CloseIcon = ({
  size,
  width = 16,
  height = 16,
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
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.3333 14.3333L7.99998 8.00002M7.99998 8.00002L1.66663 1.66667M7.99998 8.00002L14.3333 1.66667M7.99998 8.00002L1.66663 14.3334"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
