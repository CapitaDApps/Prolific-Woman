"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const images = [
  "/images/gal_1.png",
  "/images/gal_2.png",
  "/images/gal_3.png",
  "/images/gal_4.png",
  "/images/gal_5.png",
  "/images/gal_6.png",
  "/images/gal_7.png",
  "/images/gal_8.png",
  "/images/gal_9.png",
  "/images/gal_10.png",
  "/images/gal_11.png",
];

const Gallery = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startAutoScroll = () => {
      let scrollAmount = 0;

      intervalRef.current = setInterval(() => {
        if (containerRef.current) {
          const container = containerRef.current;
          const scrollWidth = container.scrollWidth;
          const clientWidth = container.clientWidth;

          scrollAmount += 1;

          if (scrollAmount >= scrollWidth - clientWidth) {
            scrollAmount = 0; // Reset scroll
          }

          controls.start({
            x: -scrollAmount,
            transition: { duration: 0.3, ease: "linear" },
          });
        }
      }, 20); // Adjust for speed
    };

    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [controls]);

  return (
    <div className="sofia-medium py-12  text-center">
      <h2 className="text-black/10 text-2xl md:text-3xl lg:text-5xl font-bold ">
        PHOTO GALLERY
      </h2>
      <div className="overflow-hidden w-full max-w-[1640px] mx-auto relative py-8">
        <motion.div
          ref={containerRef}
          animate={controls}
          className="flex gap-4"
        >
          {images.concat(images).map((src, idx) => (
            <div
              key={idx}
              className="lg:w-[16.28%] md:w-[25%] md:min-w-[14.28%] w-[45%] h-[220px] md:h-[300px] relative flex-shrink-0"
            >
              <Image
                src={src}
                alt={`gallery-${idx}`}
                fill
                className="object-cover object-top rounded-xl"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
