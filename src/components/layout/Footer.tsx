import Image from "next/image";
import React from "react";
import FooterCircle from "../FooterCircle";
import { FooterForm } from "../FooterForm";
import SplitText from "../SplitText";

export default function Footer() {
  const boxes = [
    {
      icon: "/icons/mail.png",
      text: "Email Us",
      content: "partnerships@tpwt.org",
    },
    {
      icon: "/icons/insta.png",
      text: "Message Us",
      content: "partnerships@tpwt.org",
    },
    {
      icon: "/icons/location.png",
      text: "Locate Us",
      content: "partnerships@tpwt.org",
    },
  ];
  const socials = [
    {
      icon: "/icons/insta.png",
      link: "#",
    },
    {
      icon: "/icons/mail.png",
      link: "#",
    },
    {
      icon: "/icons/facebook.png",
      link: "#",
    },
  ];
  return (
    <footer
      id="contact"
      style={{
        backgroundAttachment: "fixed",
      }}
      className="bg-black sofia-medium px-6 lg:px-12    pt-20 relative"
    >
      <h1 className="lg:absolute tracking-[5px] left-0 top-[5px] lg:top-[45px]  z-[1] right-0 contact text-4xl md:text-7xl lg:text-[120px] xl:text-[140px] font-bold text-center">
        Contact Us
      </h1>

      <div className="flex  pb-6 md:pb-12 lg:pb-16 mt-8 lg:mt-16 items-center justify-center z-20">
        <FooterForm />
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="flex md:flex-row flex-col items-center gap-4 lg:gap-8 justify-between w-[90%]">
          {boxes.map((box) => (
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
              data-aos-anchor-placement="top-bottom"
              style={{
                background: "linear-gradient(180deg, #000000 0%, #3E3E3E 100%)",
              }}
              key={box.icon}
              className="flex flex-col gap-2 border border-[#808080] rounded-2xl px-4 py-5 w-full max-w-[320px]"
            >
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #161616 0%, #414141 100%)",
                }}
                className="border border-[#808080] p-2 rounded-md w-max"
              >
                <Image
                  src={box.icon}
                  width={15}
                  height={15}
                  className="object-center"
                  alt="box"
                />
              </div>
              <div className="space-y-1">
                <h6 className="text-white text-sm">{box.text}</h6>
                <p className="text-[#C9C9C9] sofia-light text-xs">
                  {box.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t sofia-light text-center mt-8 border-[#808080] text-xs text-[#D0D0D0] py-6">
        <p className="text-center tracking-wider">
          © {new Date().getFullYear()}, The Prolific Woman Trybe
        </p>
      </div>
    </footer>
  );
}


