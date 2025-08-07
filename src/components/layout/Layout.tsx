"use client";
import React from "react";
import Header from "@/components/layout/Header";
import MobileHeader from "@/components/layout/MobileHeader";
import Footer from "@/components/layout/Footer";
import Navbar from "@/lib/useNav";
import { useState } from "react";
import Loader from "@/components/Loader";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 3000);
  return load ? (
    <Loader />
  ) : (
    <Navbar>
      <Header />
      <MobileHeader />
      <main className="pt-12 lg:pt-20">{children}</main>
      <Footer />
    </Navbar>
  );
}
