import React from "react";
import SplitText from "./SplitText";

export default function HomeEvolute() {
  return (
    <div className="py-8 lg:py-16 sofia-medium gap-2.5 md:gap-4 flex flex-col items-center justify-center w-[95%] lg:w-[55%] mx-auto ">
      <h2 className="text text-3xl sofia-medium md:text-6xl font-bold ">
        EVOLUTION
      </h2>
      <SplitText className="text-purple-700 text-center text-base px-4 md:text-4xl">
       Empowering Women to Evolve, Thrive and Lead
      </SplitText>
    </div>
  );
}
