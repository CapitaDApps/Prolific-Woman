import Image from "next/image";
import React from "react";
import { FooterForm } from "../FooterForm";
import Link from "next/link";

export default function Footer() {
  const boxes = [
    {
      icon: "/icons/mail.png",
      text: "Email Us",
      link: "mailto:theprolificwomantrybe@gmail.com?subject=Hello%20Prolific%20Woman%20Trybe&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you.",
      content: "theprolificwomantrybe@gmail.com",
    },
    {
      icon: "/icons/insta.png",
      text: "Message Us",
      link: "https://www.instagram.com/theprolificwomantrybe/#",
      content: "instagram.com/theprolificwomantrybe",
    },
    {
      icon: "/icons/location.png",
      text: "Locate Us",
      content: "theprolificwomantrybe@gmail.com",
      link: "#",
    },
  ];

  return (
    <footer
      id="contact"
      style={{
        backgroundAttachment: "fixed",
        background:
          "linear-gradient(180deg, rgba(72, 15, 128, 0.6), rgba(72, 15, 128, 0.6)), url(/images/foot.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" sofia-medium px-6 lg:px-12    pt-20 relative"
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
            <Link
              href={box.link}
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
              data-aos-anchor-placement="top-bottom"
              style={{
                background: "linear-gradient(180deg, #CFCECE 0%, #FFFFFF 100%)",
              }}
              key={box.icon}
              className="flex flex-col gap-2 border border-[##D5D5D5] rounded-2xl px-4 py-5 w-full max-w-[320px]"
            >
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #C9C9C9 0%, #FFFFFF 100%)",
                }}
                className="border border-[#D5D5D5] p-2 rounded-md w-max"
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
                <h6 className="text-[#1F1F1F] text-sm">{box.text}</h6>
                <p className="text-[#6D6D6D] sofia-light text-xs">
                  {box.content}
                </p>
              </div>
            </Link>
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
