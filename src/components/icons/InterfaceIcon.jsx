const InterfaceIcon = ({ size, width = 20, height = 20, color = "white", className, ...rest }) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      className={className}
      {...rest}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5002 2H4.7002C3.58009 2 3.01962 2 2.5918 2.21799C2.21547 2.40973 1.90973 2.71547 1.71799 3.0918C1.5 3.51962 1.5 4.08009 1.5 5.2002V12.8002C1.5 13.9203 1.5 14.4801 1.71799 14.9079C1.90973 15.2842 2.21547 15.5905 2.5918 15.7822C3.0192 16 3.57899 16 4.69691 16H12.3031C13.421 16 13.98 16 14.4074 15.7822C14.7837 15.5905 15.0905 15.2839 15.2822 14.9076C15.5 14.4802 15.5 13.921 15.5 12.8031V11M16.5 6V1M16.5 1H11.5M16.5 1L9.5 8"
        // fill={color}
        stroke={color}
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default InterfaceIcon;
