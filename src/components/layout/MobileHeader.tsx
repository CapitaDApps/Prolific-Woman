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
      <div className="relative w-[110px] aspect-auto h-[40px] ">
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
        <SheetContent className="flex  justify-center md:max-w-[250px] max-w-[150px]">
          <SheetHeader>
            <div className="flex flex-col gap-6">
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
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
