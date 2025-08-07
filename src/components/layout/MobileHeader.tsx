"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useNav } from "@/lib/useNav";
import { Button } from "../ui/button";
export default function MobileHeader() {
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
    <div className="lg:hidden bg-white flex items-center sofia-medium justify-between w-full  fixed py-2.5 z-50 px-2">
      <div className="relative w-[80px] aspect-auto h-[40px] ">
        <Image
          src="/images/logo.png"
          className="object-center object-contain"
          fill
          alt="logo"
        />
      </div>
      <Sheet>
        <SheetTrigger>
          <div className="bg-purple-700 p-2 rounded-full text-center text-white text-sm cursor-pointer border border-purple-800">
            <FaBars />
          </div>
        </SheetTrigger>
        <SheetContent className="flex  md:max-w-[250px] max-w-[150px]">
          <SheetHeader>
            <div className="flex flex-col mt-20  gap-6">
              {nav.map((link) => (
                <SheetClose key={link.content} asChild>
                  <Link
                    href={`#${link.route}`}
                    className={`text-xs hover:text-purple-700 transition-all duration-500 sofia-medium ${
                      activeSection === link.route
                        ? "text-purple-700"
                        : "text-black"
                    }`}
                    key={link.route}
                  >
                    {link.content}
                  </Link>
                </SheetClose>
              ))}
            </div>
            <button className=" text-[11px] rounded-lg mt-2 bg-purple-700 hover:bg-purple-800  transition-all duration-500 cursor-pointer text-white  p-2 !py-1.5">
              Join the Trybe
            </button>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
