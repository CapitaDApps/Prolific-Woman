"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Journey() {
  const jour = [
    {
      image: "/images/journey_1.png",
      year: 2023,
      text: "Women Evolve Conference",
      id:1,
    },
    {
      image: "/images/journey_2.png",
      year: 2024,
      text: "Book Launch",
      id:2,
    },
    {
      image: "/images/journey_3.png",
      year: 2024,
      text: "Outreach to school of the blind",
      id:3,
    },
    {
      image: "/images/journey_4.png",
      year: 2025,
      text: "Evolve Her Conference",
      id:4,
    },
  ];
  const [active, setActive] = useState(1);
  useEffect(function () {
    setInterval(() => {
      setActive((a) => (a === 4 ? 1 : a + 1));
    }, 3000);
  }, []);
  return (
    <div className="sofia-medium bg-pink-100 relative px-6 lg:px-12 py-6 lg:py-12">
      <div className="grid lg:grid-cols-4 max-w-[280px] md:max-w-[600px] gap-5 lg:gap-0 md:grid-cols-2 grid-cols-1 lg:max-w-[1300px] w-full mx-auto">
        {jour.map((jou) => (
          <div
            onMouseEnter={() => setActive(jou.id)}
            onClick={() => setActive(jou.id)}
            onMouseLeave={() => setActive(1)}
            key={jou.id}
            className={` ${
              active === jou.id
                ? "bg-[#480F80] scale-[1.03] lg:scale-[1.05]"
                : "bg-transparent scale-[1]"
            }  md:border-r last:border-none cursor-pointer rounded-2xl transition-all duration-500 px-2 pl-6 border-[#CCCCCC] w-full`}
          >
            {jou.id === 1 ? (
              <div className="flex flex-col pt-4 pb-4 lg:pb-[65px] gap-6">
                <h5
                  className={`${
                    active === jou.year ? "text-white/10" : "text-black/10"
                  } text-lg md:text-2xl lg:text-4xl font-bold`}
                >
                  TIMELINE
                </h5>
                <p
                  className={`${
                    active === jou.id ? "text-white" : "text-black"
                  } text-base md:tex-tlg lg:text-2xl`}
                >
                  Our Journey through the years
                </p>
              </div>
            ) : (
              <div className="w-full flex items-end justify-end pb-4 lg:pb-16">
                <div className="relative size-[80px] lg:size-[150px] ">
                  <Image src={"/images/bird.png"} className="object-center" fill alt="img" />
                </div>
              </div>
            )}

            <p
              className={`${
                active === jou.id ? "text-white" : "text-black"
              } text-sm md:text-base`}
            >
              {jou.year}
            </p>
            <h4
              className={`py-3 lg:py-12 ${
                active === jou.id ? "text-white" : "text-[#480F80]"
              } text-sm md:text-base`}
            >
              {jou.text}
            </h4>
            <div className="relative w-[100%] h-[200px]">
              <Image src={jou.image} className="object-center object-contain" fill alt="img" />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-0 h-[300px] size-[300px]  bottom-0 z-[-1] aspect-auto">
        <Image fill src="/images/shape.png" alt="logo" />
      </div>
    </div>
  );
}
