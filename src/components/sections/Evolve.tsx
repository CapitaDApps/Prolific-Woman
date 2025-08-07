import React from "react";
import EvolveAccordion from "../EvolveAccordion";
import SplitText from "../SplitText";

export default function Evolve() {
  return (
    <section
      id="evolve"
      style={{
        background:
          "linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(/images/evolve.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed",
      }}
      className="h-full  lg:px-12 lg:pb-12  pt-20 py-6 px-4"
    >
      <SplitText className="text-white sofia-medium text-2xl lg:text-5xl pt-2 font-semibold">
        THE PROLIFIC WOMAN TRYBE
      </SplitText>

      <SplitText className="sofia-light text-xs md:text-base text-white py-3 lg:py-6 max-w-full lg:max-w-[55%]">
        TPWT is a global community of high-achieving women committed to growth,
        excellence, and empowerment. Founded by Bethel Ehiakoya, it helps women
        unlock their full potential beyond societal roles and expectations.
      </SplitText>
      <EvolveAccordion />
    </section>
  );
}
