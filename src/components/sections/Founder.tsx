import React from "react";

export default function Founder() {
  return (
    <section
      id="founder"
      className="sofia-medium relative px-4 lg:px-12 bg-[#F8F3FF] py-12 lg:pb-12 pt-20 h-full"
    >
      <div className="w-full flex items-center justify-center">
        <div
          style={{
            background: "#FFFFFF",
            boxShadow:
              "0px 161px 64px rgba(77, 77, 77, 0.01), 0px 90px 54px rgba(77, 77, 77, 0.05), 0px 40px 40px rgba(77, 77, 77, 0.09), 0px 10px 22px rgba(77, 77, 77, 0.1)",
          }}
          className="flex md:flex-row flex-col-reverse h-[500px] lg:h-[400px] rounded-3xl max-w-[95%] lg:max-w-[80%]  w-full"
        >
          <div className="flex flex-col h-[90%] pb-6 md:h-full px-3 py-4 md:px-6 md:py-8 gap-4 lg:gap-8 w-full *:">
            <h2 className="text text-2xl md:text-5xl font-bold ">
              MEET THE FOUNDER
            </h2>

            <div className="md:text-sm text-xs  sofia-light  text-[#282828] space-y-4 lg:space-y-6">
              <p>
                <span className="font-bold">Bethel Ehikioya</span> is a
                visionary entrepreneur, real estate expert, and women&apos;s
                empowerment advocate. She is executive director at Ehikings real
                estate and construction company, founded the Millionaire Realtor
                Academy, and founded the Prolific Woman Trybe.
              </p>
              Bethel empowers individuals to build wealth, achieve
              purpose-driven success, and unlock their full potential through
              real estate and personal development
              <p></p>
            </div>
          </div>
          <div
            className="w-full h-full md:h-full rounded-t-2xl bg-top md:bg-center  md:rounded-t-none   md:rounded-r-2xl"
            style={{
              background: "url(/images/found.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
