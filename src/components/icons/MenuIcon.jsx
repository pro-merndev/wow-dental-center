const MenuIcon = ({
  size,
  width = 16,
  height = 12,
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
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11H15M1 6H15M1 1H15"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
