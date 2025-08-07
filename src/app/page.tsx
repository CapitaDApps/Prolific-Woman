"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, } from "react";
import HomeEvolute from "@/components/HomeEvolute";
import HomeSwipe from "@/components/HomeSwipe";
import Ribbon from "@/components/Ribbon";
import About from "@/components/sections/About";
import Events from "@/components/sections/Events";
import Evolve from "@/components/sections/Evolve";
import Gallery from "@/components/sections/Gallery";
import Impact from "@/components/sections/Impact";
import Journey from "@/components/sections/Journey";
import React from "react";

export default function Page() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // only animate once
    });
  }, []);
  return (
    <div className="">
      <HomeSwipe />
      <HomeEvolute />
      <About />
      <Journey />
      <Evolve />
      <Gallery />
      <Events />
      <Ribbon />
      <Impact />
    </div>
  );
}
