import Image from "next/image";
import React from "react";
import SplitText from "../SplitText";
import { SponshipForm } from "../SponshipForm";
import SponsorBox from "../SponsorBox";
import FooterCircle from "../FooterCircle";

export default function SponsorShip() {
  return (
    <section
      id="sponsorship"
      style={{
        backgroundAttachment: "fixed",
      }}
      className=" bg-[#ebebeb]/20 sofia-medium px-6 lg:px-12 pb-12   pt-20 relative"
    >
      <h1 className="lg:absolute tracking-[5px] left-0 top-[5px] lg:top-[45px]  z-[1] right-0 spon text-4xl md:text-7xl lg:text-[120px] xl:text-[140px] font-bold text-center">
        Sponsorship
      </h1>

      <div className="flex gap-5 flex-col md:flex-row pb-6 md:pb-12 lg:pb-16 mt-8 lg:mt-16 items-center z-20">
        <div className="w-full">
          <div className="space-y-5  md:max-w-sm">
            <div className="flex items-center gap-2 md:gap-3">
              <h3 className="text-black font-bold text-xl md:text-2xl">
                Sponsor the Vision
              </h3>
              <Image
                src="/images/spon.png"
                width={15}
                height={15}
                className="object-center"
                alt="box"
              />
            </div>
            <SplitText className="text-[#8A8A8A] sofia-light text-sm md:text-base">
              Support a woman&apos;s evolution. Sponsor a story. Start a ripple
              of generational change.
            </SplitText>

            <div className="flex md:flex-row flex-col items-center gap-4">
              <FooterCircle color="black" />

              <div className="flex flex-col md:flex-row  lg:flex-col items-center lg:items-start gap-8">
                <div className="space-y-5">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/icons/uba.png"
                      width={65}
                      height={65}
                      className="object-center"
                      alt="box"
                    />
                    <div className="space-y-0.5 sofia-light">
                      <h3 className="text-[#1F1F1F] text-xl">2017354167</h3>
                      <div className="space-y-0.5 text-[#787878] text-xs">
                        <p>United Bank for Africa</p>
                        <p className="text-[#1F1F1F]">Bethel Ehikioya</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/icons/uba.png"
                      width={65}
                      height={65}
                      className="object-center"
                      alt="box"
                    />
                    <div className="space-y-0.5 sofia-light">
                      <h3 className="text-[#1F1F1F] text-xl">2328816367</h3>
                      <div className="space-y-0.5 text-[#787878] text-xs">
                        <p>United Bank for Africa</p>
                        <p className="text-[#1F1F1F]">Bethel Ehikioya</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center lg:justify-end">
          <SponshipForm />
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <SponsorBox />
      </div>
    </section>
  );
}
