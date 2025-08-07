"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useNav } from "@/lib/useNav";

export default function Header() {
  const nav = [
    {
      route: "home",
      content: "HOME",
    },
    {
      route: "about",
      content: "ABOUT",
    },
    {
      route: "evolve",
      content: "EVOLVE HER",
    },
    {
      route: "enrol",
      content: "ENROL",
    },
    {
      route: "contact",
      content: "CONTACT",
    },
  ];
  const { activeSection } = useNav();
  return (
    <div className="fixed max-w-[144rem] mx-auto my-0  hidden w-full bg-white z-50 lg:flex items-center justify-between sofia-medium px-8 py-2">
      <div className="relative w-[115px] aspect-auto h-[65px] scale-[0.85]">
        <Image src="/images/logo.png" fill alt="logo" />
      </div>
      <div className="flex items-center  gap-6">
        {nav.map((link) => (
          <Link
            href={`#${link.route}`}
            key={link.route}
            className={`${
              activeSection === link.route ? "text-[#BC01DE]" : "text-black"
            } relative group text-sm pb-1 hover:text-[#BC01DE]  transition-all duration-500`}
          >
            {link.content}
            <span className=" absolute left-0 bottom-0 w-0 h-[2px] bg-[#BC01DE] transition-all duration-300 group-hover:w-full"></span>
            {activeSection === link.route && (
              <span className=" absolute left-0 bottom-0 w-full h-[2px] bg-[#BC01DE] transition-all duration-300 "></span>
            )}
          </Link>
        ))}
      </div>
      <div className="border-2 border-[#480F80] transition-all duration-500 p-0.5 pb-[2.2px] hover:scale-[1.05]">
        <Button className="relative overflow-hidden group bg-[#480F80] hover:bg-bg-[#480F80  transition-all duration-500 cursor-pointer text-sm rounded-none px-6 !py-2.5">
          Become a Sponsor
        </Button>
      </div>
    </div>
  );
}
