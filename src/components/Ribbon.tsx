"use client";

const ribbons = [
  "GROWTH ● BUSINESS SKILLS ● MENTAL WELLNESS ●",
  "GROWTH ● BUSINESS SKILLS ● MENTAL WELLNESS ●",
];

const Ribbon = () => {
  return (
    <div className="relative overflow-hidden sofia-medium w-full h-[200px] bg-white">
      <div className="group absolute top-1/2 -translate-y-[40px] -rotate-[5deg] w-[200%] left-[-50%]">
        <div className="bg-[#4B0082] text-white whitespace-nowrap py-3 overflow-hidden">
          <div className="animate-scroll inline-block rib text-[1.25rem] font-bold tracking-wide group-hover:[animation-play-state:paused]">
            {ribbons[0].repeat(10)}
          </div>
        </div>
      </div>

      <div className="group absolute top-1/2 translate-y-[-30px] rotate-[5deg] w-[200%] left-[-50%]">
        <div className="bg-[#4B0082] text-white  whitespace-nowrap py-3 overflow-hidden">
          <div className="animate-scroll-reverse inline-block rib text-[1.25rem] font-bold tracking-wide group-hover:[animation-play-state:paused]">
            {ribbons[1].repeat(10)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
