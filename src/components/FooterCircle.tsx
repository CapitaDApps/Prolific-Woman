"use client";
import { LiaCompressArrowsAltSolid } from "react-icons/lia";
const FooterCircle = ({ color }: { color: string }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1500"
      data-aos-anchor-placement="top-bottom"
      className="relative w-[140px] h-[140px] flex items-center justify-center"
    >
      {/* Outer and Inner border circles */}
      <svg viewBox="0 0 200 200" className="absolute w-full h-full">
        <circle
          cx="100"
          cy="100"
          r="98"
          stroke={`${color === "white" ? "white" : "black"}`}
          strokeWidth="1"
          fill="none"
        />
        <circle
          cx="100"
          cy="100"
          r="48"
          stroke={`${color === "white" ? "white" : "black"}`}
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Rotating Text Path at radius 72.5 */}
      <svg
        viewBox="0 0 200 200"
        className="absolute w-full h-full animate-rotate-slow"
      >
        <defs>
          <path
            id="circlePath"
            d="M100,100 m-72.5,0 a72.5,72.5 0 1,1 145,0 a72.5,72.5 0 1,1 -145,0"
            fill="none"
          />
        </defs>
        <text
          fill={`${color === "white" ? "white" : "black"}`}
          fontSize="14"
          fontWeight="500"
          letterSpacing="1.5"
        >
          <textPath href="#circlePath" startOffset="0%">
            THE PROLIFIC WOMAN TRYBE • THE PROLIFIC WOMAN •
          </textPath>
        </text>
      </svg>

      {/* Center Dot */}
      <LiaCompressArrowsAltSolid
        className={`${
          color === "white" ? "text-white" : "text-black"
        } z-10 text-xl`}
      />
    </div>
  );
};

export default FooterCircle;
