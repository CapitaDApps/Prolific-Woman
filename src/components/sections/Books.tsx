import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Books() {
  const books = [
    {
      img: "/images/book_1.png",
      link: "https://selar.co/8mn027",
      content:
        "The Millionaire Realtor is a practical guide that shares expert insights and proven strategies for succeeding in the real estate industry. Whether you're just starting out or looking to hit your next big milestone, this guide will help you unlock the mindset and mastery required to become a millionaire in real estate",
    },
    {
      img: "/images/book_2.png",
      link: "https://selar.co/6w6a60",
      content:
        "“While in the Waiting Room is a memoir that details my journey and personal experience transitioning from a homemaker into a full-fledged business woman. It captures my experience of self-discovery, growth and resilience that has brought me to where I am today”",
    },
  ];
  return (
    <section
      id="book"
      className="sofia-medium relative px-4 lg:px-12 bg-[#F8F3FF] py-12 lg:pb-12 pt-20 h-full"
    >
      <h2 className="text text-2xl md:text-5xl text-center font-bold ">
        BOOKS BY THE FOUNDER
      </h2>

      <div className="w-full flex  items-center sofia-light mt-8 justify-center">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-2 w-full lg:w-[80%] justify-center items-center">
          {books.map((book) => (
            <div className="flex flex-col gap-2 max-w-lg" key={book.img}>
              <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
                className="relative w-full h-[200px] md:h-[300px]"
              >
                <Image
                  src={book.img}
                  fill
                  className="object-center object-contain "
                  alt="img"
                />
              </div>
              <p      data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom" className="text-sm px-2 text-center mt-2 md:mt-4">
                {book.content}
              </p>

              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
                className="flex items-center justify-center"
              >
                <Link
                  className="w-fit rounded-md bg-[#480F80] text-xs mt-3 text-center text-white py-1.5 px-4 cursor-pointer"
                  href={book.link}
                >
                  Purchase Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
