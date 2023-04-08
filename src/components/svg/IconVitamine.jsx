import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={43}
    fill="none"
    {...props}
  >
    <path
      fill="#F33D3D"
      d="M5 26.75c-7.5 10 3.889 22.5 14 9.5l6.304-9.116-13.21-9.91L5 26.75Z"
    />
    <path
      fill="#4964F4"
      d="M32 18.25c8.266-10.627-5-20.5-13-10s-6.905 8.975-6.905 8.975l13.209 9.91c3.734-4.801-6.677 8.31 6.696-8.885Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 36.25c-10.111 13-21.5.5-14-9.5l7.095-9.525M19 36.25c4.127-5.306 2.652-4.058 6.304-9.116M19 36.25l6.304-9.116m-13.21-9.91S11 18.75 19 8.25s21.266-.627 13 10c-13.373 17.194-2.962 4.084-6.696 8.884m-13.21-9.91 13.21 9.91"
    />
    <path
      fill="#121212"
      d="M25.783 20.414v18.72h1.92v-18.72h-1.92Zm6 7.68-4.8 4.56 5.28 6.48h2.4l-5.28-6.48 4.8-4.56h-2.4Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 9.677c1-2.5 5.5-4 8-2"
    />
  </svg>
);
export default SvgComponent;
