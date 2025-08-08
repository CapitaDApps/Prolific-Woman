"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { Button } from "../ui/button";
import { useInView } from "react-intersection-observer";
import SplitText from "../SplitText";
import Link from "next/link";
export default function Impact() {
  const nums = [
    {
      count: 1000,
      title: "Women Empowered",
      content: "Through events, trainings, and transformational content",
    },
    {
      count: 500,
      title: "Breaking Barriers Attendees",
      content: "3-day virtual experience in 2024 fueling purpose and clarity",
    },
    {
      count: 5000,
      title: "Community Reach",
      content: "Across social media and ambassador programs.",
    },
    {
      count: 400,
      title: "New Mentors (2023)",
      content: "Passionate leaders joined to guide and empower others.",
    },
  ];
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className="w-full bg-[#EBE7E4] flex  items-center py-12 justify-center">
      <div
        style={{
          boxShadow:
            "-49px 188px 78px rgba(176, 176, 176, 0.01), -27px 106px 66px rgba(176, 176, 176, 0.05), -12px 47px 49px rgba(176, 176, 176, 0.09), -3px 12px 27px rgba(176, 176, 176, 0.1)",
        }}
        className="flex items-center lg:flex-row flex-col border w-[95%] md:w-[90%] p-3 md:p-6 rounded-2xl md:rounded-4xl border-[#ECECEC] sofia-medium bg-white"
      >
        <div className="space-y-3 md:space-y-4 w-full">
          <div className="space-y-3">
            <h2 className="text text-2xl md:text-5xl font-bold ">IMPACT</h2>
            <SplitText className="text-[#575757] font-bold sofia-light text-xs md:text-sm">
              Our Vision to equip women globally with the tools, mindset, and
              community they need to evolve into their fullest potential—in
              business, career, and life.
            </SplitText>
          </div>

          <div className="sofia-light grid gap-3 md:gap-5 grid-cols-2">
            {nums.map((num, i) => (
              <div
                key={num.title}
                className={`space-y-1 ${
                  i > 1 && "border-t border-[#DDDDDD] pt-4"
                }`}
              >
                <h3
                  ref={ref}
                  className="text-[#480F80] text-xl md:text-3xl sofia-medium font-semibold"
                >
                  {inView && (
                    <CountUp
                      end={num.count}
                      start={0}
                      duration={2}
                      separator=","
                    />
                  )}
                  +
                </h3>
                <SplitText className="text-[#2F2F2F] text-xs md:text-sm font-bold">
                  {num.title}
                </SplitText>
                <SplitText className="text-[#747474] tracking-wider text-xs">
                  {num.content}
                </SplitText>
              </div>
            ))}
          </div>
          <div className="border-2 mt-2  border-[#480F80] w-max transition-all duration-500 p-0.5 pb-[2.2px] hover:scale-[1.05]">
            <Button className="relative overflow-hidden group bg-[#480F80] hover:bg-bg-[#480F80 text-xs transition-all duration-500 cursor-pointer md:text-sm rounded-none px-6 !py-2.5">
              <Link href="#sponsorship">Support the Movement</Link>
            </Button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="hidden lg:block relative aspect-auto max-w-md lg:max-w-lg w-[80%] h-[400px] lg:h-[450px]">
            <Image
              alt="img"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
              data-aos-anchor-placement="top-bottom"
              fill
              src={"/images/impact.png"}
              className="object-center object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
