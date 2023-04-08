import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    className={props.className}
    fill="none"
    {...props}
  >
    <path
      fill="#273B49"
      fillRule="evenodd"
      d="M15.748 6.351a1.2 1.2 0 0 1 0 1.698L11.799 12l3.95 3.951a1.2 1.2 0 1 1-1.696 1.697l-4.8-4.8a1.2 1.2 0 0 1 0-1.697l4.8-4.8a1.2 1.2 0 0 1 1.697 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
