import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import SplitText from "../SplitText";

export default function About() {
  const words = ["The", "Prolific", "Woman", "Trybe"];
  return (
    <section
      id="about"
      className="sofia-medium relative px-4 lg:px-12 bg-[#F8F3FF] py-12 lg:pb-12 pt-20 h-full"
    >
      <div className="absolute right-0 h-[300px] size-[300px] lg:h-[600px] lg:size-[450px] opacity-30 aspect-auto">
        <Image fill src="/images/about_1.png" alt="logo" />
      </div>

      <div className="space-y-2 lg:space-y-4">
        <h2 className="text text-2xl md:text-5xl font-bold ">ABOUT</h2>

        <div className="flex flex-col gap-0 md:gap-2">
          {words.map((word, i) => (
            <p
              data-aos={`zoom-${i % 2 === 0 ? "i" : "ou"}`}
              data-aos-easing="linear"
              data-aos-duration="1500"
              key={word}
              className="text-black text-xl md:text-4xl font-bold"
            >
              <span className="text-[#D400EA]">{word.charAt(0)}</span>
              {word.slice(1)}
            </p>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex  flex-col md:flex-row items-start w-full justify-between gap-5">
          <div className="w-full flex items-center  justify-center h-[350px] md:h-[450px] lg:h-[500px] ">
            <div className="relative aspect-auto w-[100%] md:w-[90%] max-w-sm lg:max-w-lg h-full">
              <Image
                alt="img"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="700"
                data-aos-anchor-placement="top-bottom"
                fill
                src={"/images/court_3.PNG"}
                className="object-top object-contain "
              />
            </div>
          </div>
          <div className="w-full flex items-center lg:items-center justify-center flex-col h-full ">
            <div className="w-[80%] h-full space-y-4 max-w-sm lg:max-w-[500px]">
              <SplitText className="text-[#480F80] text-base lg:text-xl">
                This is the year we grow into our highest calling with clarity,
                power, and purpose.
              </SplitText>
              <div className="relative aspect-auto w-full  h-[270px] md:h-[300px]  lg:h-[400px]">
                <Image
                  alt="img"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="700"
                  data-aos-anchor-placement="top-bottom"
                  fill
                  src={"/images/about_img.png"}
                  className="object-center object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col md:flex-row items-center w-full justify-between gap-5">
          <div className="w-full flex items-center justify-center">
            <div className="hidden md:block relative aspect-auto max-w-sm lg:max-w-lg w-[80%] h-[300px] lg:h-[400px]">
              <Image
                alt="img"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="700"
                data-aos-anchor-placement="top-bottom"
                fill
                src={"/images/about_img2.png"}
                className="object-center object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="w-full flex  items-center justify-center">
            <div className="w-[90%] lg:w-[80%]">
              <SplitText className="text-black text-2xl lg:text-3xl">
                What We Believe
              </SplitText>
              <SplitText className="text-base lg:text-lg text-[#454545]">
                We believe
              </SplitText>

              <div className="text-[#454545] text-sm md:text-base flex flex-col gap-4 py-4 ">
                <SplitText className="flex items-center gap-2 sofia-light font-[500]">
                  <span>&#x2022;</span>That womanhood is sacred
                </SplitText>
                <SplitText className="flex items-center gap-2 sofia-light font-[500]">
                  <span>&#x2022;</span> That healing precedes leadership
                </SplitText>
                <SplitText className="flex items-center gap-2 sofia-light font-[500]">
                  <span>&#x2022;</span> That faith is our anchor, and service-
                  our language
                </SplitText>
              </div>

              <SplitText className="text-[#480F80] text-sm lg:text-base italic mt-6 lg:mt-12">
                “From the silent tears of struggle to the loud applause of
                victory, every woman has a story worth telling”
              </SplitText>
              <div className="mt-6 lg:mt-12 flex items-center  gap-4">
                <div className="border-2  border-[#480F80] w-max transition-all duration-500 p-0.5 pb-[2.2px] hover:scale-[1.05]">
                  <Button className="relative overflow-hidden group bg-[#480F80] hover:bg-bg-[#480F80  transition-all duration-500 cursor-pointer text-sm rounded-none px-6 !py-2.5">
                    <Link href="https://web.facebook.com/profile.php?id=61556725214046">
                      Join the Trybe
                    </Link>
                  </Button>
                </div>

                <Link
                  href="#evolve"
                  className="flex group text-[#D400EA] relative items-center gap-1 text-sm"
                >
                  <p>Learn More</p>
                  <Image
                    src="/icons/arrow-up.png"
                    alt="pag-left"
                    width={25}
                    className="size-[12px] md:size-[12px] "
                    height={25}
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] rounded-full bg-[#BC01DE] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
