import React from "react";
import EventGrid from "../EventGrid";

export default function Events() {
  return (
    <section
      id="enrol"
      style={{
        background:
          "linear-gradient(rgba(251, 251, 251, 0.8), rgba(251, 251, 251, 0.8)), url(/images/event_bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" sofia-medium px-4 py-4 lg:pb-12 pt-20 lg:px-12 "
    >
      <div className="text-center space-y-3">
        <h2 className="text text-2xl md:text-5xl font-bold ">
          EVENTS & PROGRAMS
        </h2>
        <p className="text-black text-base md:text-2xl font-bold">
          All Our TPWT Latest Events & Programs
        </p>
      </div>

      <EventGrid />
    </section>
  );
}
