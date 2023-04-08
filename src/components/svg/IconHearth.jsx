import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#38FF8E"
      fillRule="evenodd"
      d="M4.306 6.206a4.8 4.8 0 0 1 6.788 0L12.5 7.612l1.406-1.406a4.8 4.8 0 1 1 6.788 6.788L12.5 21.188l-8.194-8.194a4.8 4.8 0 0 1 0-6.788Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
