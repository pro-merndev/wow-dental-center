const WarningIcon = ({ size, width = 20, height = 20, color = "white", className, ...rest }) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      className={className}
      {...rest}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 6.39392V9.89392M9.5 17.375C5.15076 17.375 1.625 13.8492 1.625 9.5C1.625 5.15076 5.15076 1.625 9.5 1.625C13.8492 1.625 17.375 5.15076 17.375 9.5C17.375 13.8492 13.8492 17.375 9.5 17.375ZM9.54358 12.5189V12.6064L9.45642 12.6061V12.5189H9.54358Z"
        // fill={color}
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default WarningIcon;
