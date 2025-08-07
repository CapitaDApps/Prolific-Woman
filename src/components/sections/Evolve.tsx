import React from "react";
import EvolveAccordion from "../EvolveAccordion";
import SplitText from "../SplitText";

export default function Evolve() {
  return (
    <section
      id="evolve"
      style={{
        background: "url(/images/evolve.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="h-full  lg:px-12 lg:pb-12  pt-20 py-6 px-4"
    >
      <SplitText className="text-white sofia-medium text-2xl lg:text-5xl pt-2 font-semibold">
        THE PROLIFIC WOMAN TRYBE
      </SplitText>

      <SplitText className="sofia-light text-xs md:text-base text-white py-3 lg:py-6 max-w-full lg:max-w-[55%]">
        The Prolific Woman Trybe (TPWT) is a global community of high-achieving
        women committed to personal evolution, professional excellence, and
        collective empowerment. Founded by Bethel Ehikioya, a Nigerian speaker,
        author, and entrepreneur, TPWT was born from a vision to help women
        unlock their full potential—beyond societal roles, limitations, or
        expectations.
      </SplitText>
      <EvolveAccordion />
    </section>
  );
}
