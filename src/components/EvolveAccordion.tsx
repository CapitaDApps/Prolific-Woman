"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import SplitText from "./SplitText";

export default function EvolveAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index: number) => {
    setActiveIndex(index);
  };
  const items = [
    {
      title: "Monthly Virtual Masterclasses",
      content:
        "Expert-led sessions on mindset, healing, strategy, and purpose.",
      image: "/images/evolve_1.png",
    },
    {
      title: "Peer Growth Circles",
      content: "Safe sisterhood pods for shared learning and accountability.",
      image: "/images/evolve_2.png",
    },
    {
      title: "Evolve Her Conference",
      content: "Our annual flagship event — high-impact, heart-opening, and unforgettable.",
      image: "/images/evolve_3.png",
    },
    {
      title: "Business & Leadership Clinic",
      content: "Tools to grow in business and lead with purpose.",
      image: "/images/evolve_4.png",
    },
    {
      title: "Faith, Marriage & Finance Series",
      content: "Grounded in wisdom, built for whole-life growth",
      image: "/images/evolve_5.png",
    },
  ];

  return (
    <section id='evolve' className="flex items-center justify-center flex-col gap-4">
      <div className="flex flex-col md:flex-row sofia-medium items-start gap-8 justify-between w-full md:px-4 lg:px-0 py-10 ">
        {/* Left: Image with animation */}
        <div className="w-full lg:flex hidden  items-start  relative  h-full justify-start">
          <div className="w-full lg:w-[90%]  relative  max-w-sm  h-[300px] ">
            <AnimatePresence mode="wait">
              <motion.div
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="700"
                data-aos-anchor-placement="top-bottom"
                key={items[activeIndex].image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white p-3 w-[90%] h-[100%] rounded-3xl">
                  <div className="bg-[#E7E7D7] w-full h-full p-2 rounded-3xl">
                    <Image
                      src={items[activeIndex].image}
                      alt={items[activeIndex].title}
                      width={200}
                      height={200}
                      quality={100}
                      className="object-cover rounded-xl w-full h-full "
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Accordion */}
        <div className="w-full flex items-center justify-center">
          <div className="w-full lg:w-[90%] max-w-md space-y-4">
            <Accordion
              type="single"
              // defaultValue="item-0"
              className="flex flex-col gap-4"
              collapsible
            >
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className=" border-none  text-white"
                  onClick={() => handleChange(index)}
                >
                  <AccordionTrigger className="text-sm md:text-base rounded-full text-[#462860] bg-white cursor-pointer hover:no-underline hover:border-none px-4 py-2.5">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p   data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="700" className="text-xs md:text-sm sofia-light px-6  py-2">
                      {item.content}
                    </p>

                    <div className="w-full lg:w-[90%] lg:hidden  relative  max-w-sm  h-[250px] ">
                      <AnimatePresence mode="wait">
                        <motion.div
                          data-aos="zoom-in"
                          data-aos-easing="linear"
                         data-aos-duration="700"
                          data-aos-anchor-placement="top-bottom"
                          key={items[activeIndex].image}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="bg-white p-2.5 w-[90%] h-[90%] rounded-3xl">
                            <div className="bg-[#E7E7D7] w-full h-full p-1.5 rounded-3xl">
                              <Image
                                src={items[activeIndex].image}
                                alt={items[activeIndex].title}
                                width={200}
                                height={200}
                                quality={100}
                                className="object-cover rounded-xl w-full h-full "
                              />
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div          data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom" className="w-full flex items-center justify-center lg:justify-end">
          <div className="bg-white px-6 py-12 rounded-2xl w-full max-w-lg lg:w-[90%] ">
            <h5 className="text-[#462860] text-2xl font-semibold">
              Who It&apos;s For
            </h5>
            <p className="text-[#462860] text-base pt-2">
              The Evolve Her journey is created for:
            </p>
            <div className="space-y-3 text-sm pt-4 text-[#462860]">
              <p className="flex items-center gap-2 sofia-light font-[500]">
                <span>&#x2022;</span> African women aged 18-55
              </p>
              <p className="flex items-center gap-2 sofia-light font-[500]">
                <span>&#x2022;</span> Entrepreneurs, career shifters, and
                emerging leaders
              </p>
              <p className="flex items-center gap-2 sofia-light font-[500]">
                <span>&#x2022;</span> Married or single women craving balance
                and fulfillment
              </p>
              <p className="flex items-center gap-2 sofia-light font-[500]">
                <span>&#x2022;</span> Diaspora women seeking rooted
                transformation and reconnection
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <Button className="relative hover:bg-transparent rounded-full overflow-hidden group bg-[#ffffff]   transition-all duration-500 cursor-pointer text-sm  !px-4 lg:px-6 !py-1.5 md:!py-2.5">
        <span className="relative z-10 text-xs lg:text-sm text-purple-700 group-hover:text-white transition-colors duration-500">
          Support the Prolific Woman Trybe
        </span>

        <span
          className="absolute inset-0 bg-purple-700 rounded-full m-0.5 z-0 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
          aria-hidden="true"
        ></span>
      </Button> */}
    </section>
  );
}
