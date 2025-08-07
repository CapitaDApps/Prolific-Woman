"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    heading: "Empowering Women to Evolve, Thrive and Lead",
    subtext: "Unlocking Potential, Unleashing Greatness",
    imageUrl: "/images/img_1.png",
    firstButton: "Support the Movement",
    secondButton: "Join the Trybe",
    arrow: "/images/arrow_3.png",
  },
  {
    heading: "Empowering every woman to lead with purpose",
    subtext: "A nurturing space to live, lead, and grow in purpose",
    imageUrl: "/images/img_2.png",
    firstButton: "Become a Sponsor",
    secondButton: "Join the Trybe",
    arrow: "/images/arrow_1.png",
  },
  {
    heading: "A Global community where women evolve, excel, empower",
    subtext:
      "Join a sisterhood of women committed to growth, greatness, and generational impact",
    imageUrl: "/images/img_3.png",
    firstButton: "Become a Sponsor",
    secondButton: "Join the Trybe",
    arrow: "/images/arrow_1.png",
  },
];

export default function HomeSwipe() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const swipeTo = (dir: number) => {
    setIndex(([prev]) => [(prev + dir + slides.length) % slides.length, dir]);
  };

  useEffect(() => {
    const timer = setInterval(() => swipeTo(1), 15000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="home" className="relative w-full h-[400px] md:h-[500px]  lg:h-[85vh] overflow-hidden bg-back/30">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className=" relative w-full h-full">
            <div className="w-full h-full  absolute z-10 bg-back/30" />
            <Image
              quality={100}
              src={slides[index].imageUrl}
              alt={`Slide ${index}`}
              fill
              priority
              className="object-cover brightness-50 transition duration-500 ease-in-out"
            />

            <div   data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="700" className="px-4 max-w-lg lg:max-w-full lg:px-12 absolute inset-0 z-20 flex flex-col justify-center   text-white">
              <h2 className="text-2xl md:text-5xl lg:text-[50px] font-bold sofia-medium  lg:leading-[70px] max-w-[48rem]">
                {slides[index].heading}
              </h2>
              <p className="mt-4 tracking-wider text-sm md:text-base font-[100]  max-w-xl">
                {slides[index].subtext}
              </p>
              <p></p>
              <div className="mt-6 flex items-center w-full gap-2 md:gap-4 relative">
                <div
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="border-2 border-[#480F80] p-0.5 hover:scale-[1.05]"
                >
                  <button className="relative hover:bg-transparent overflow-hidden group bg-[#480F80]   transition-all duration-500 cursor-pointer text-sm rounded-none !px-2 lg:px-6 !py-1.5 md:!py-2.5">
                    <span className="relative z-10 text-xs lg:text-sm text-white group-hover:text-purple-700 transition-colors duration-500">
                      {slides[index].firstButton}
                    </span>

                    <span
                      className="absolute inset-0 bg-white m-0.5 z-0 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                      aria-hidden="true"
                    ></span>
                  </button>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="700"
                  className="border-2 border-white p-0.5"
                >
                  <button className="relative overflow-hidden  group bg-transparent hover:bg-transparent   hover:scale-[1.05] transition-all duration-500 cursor-pointer text-sm rounded-none !px-2 lg:px-6 !py-1.5 md:!py-2.5">
                    <span className="relative text-xs lg:text-sm z-10 text-white group-hover:text-purple-700 transition-colors duration-500">
                      {slides[index].secondButton}
                    </span>

                    <span
                      className="absolute inset-0 bg-white z-0 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                      aria-hidden="true"
                    ></span>
                  </button>
                </div>
                <Image
                  width={150}
                  height={150}
                  src={slides[index].arrow}
                  alt={`Slide`}
                  className="absolute left-[30%] bottom-0 hidden lg:block"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {index === 0 ? (
        <div className="absolute bottom-[10%] right-[5%] flex items-center gap-3 -translate-y-1/2 z-20">
          <div className="">
            <button
              onClick={() => swipeTo(1)}
              className="size-[35px] md:size-[45px] cursor-pointer  hover:scale-[1.05] transition-all duration-500 bg-white flex items-center justify-center rounded-full"
            >
              <Image
                src="/icons/pag-arrow-right.svg"
                alt="pag-left"
                width={25}
                className="size-[20px] md:size-[25px] "
                height={25}
              />
            </button>
          </div>
        </div>
      ) : index === 2 ? (
        <div className="absolute bottom-[10%] right-[5%] flex items-center gap-3 -translate-y-1/2 z-20">
          <div className="">
            <button
              onClick={() => swipeTo(-1)}
              className="size-[35px] md:size-[45px] cursor-pointer  hover:scale-[1.05] transition-all duration-500 bg-white flex items-center justify-center rounded-full"
            >
              <Image
                src="/icons/pag-arrow-left.svg"
                alt="pag-left"
                width={25}
                className="size-[20px] md:size-[25px] "
                height={25}
              />
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute bottom-[10%] right-[5%] flex items-center gap-3 -translate-y-1/2 z-20">
          <div className="">
            <button
              onClick={() => swipeTo(-1)}
              className="size-[35px] md:size-[45px] cursor-pointer  hover:scale-[1.05] transition-all duration-500 bg-white flex items-center justify-center rounded-full"
            >
              <Image
                src="/icons/pag-arrow-left.svg"
                alt="pag-left"
                width={25}
                className="size-[20px] md:size-[25px] "
                height={25}
              />
            </button>
          </div>
          <div className="">
            <button
              onClick={() => swipeTo(1)}
              className="size-[35px] md:size-[45px] cursor-pointer  hover:scale-[1.05] transition-all duration-500 bg-white flex items-center justify-center rounded-full"
            >
              <Image
                src="/icons/pag-arrow-right.svg"
                alt="pag-left"
                width={25}
                className="size-[20px] md:size-[25px] "
                height={25}
              />
            </button>
          </div>
        </div>
      )}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`md:size-2.5 size-1.5 rounded-full ${
              i === index ? "bg-white scale-[1.5]" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
