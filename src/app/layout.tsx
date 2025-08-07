import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import MobileHeader from "@/components/layout/MobileHeader";
import Footer from "@/components/layout/Footer";
import Navbar from "@/lib/useNav";

export const metadata: Metadata = {
  title: "The Prolific Woman Trybe",
  description: "Empowering Women to Evolve, Thrive and Lead",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` font-sofi font-sofia-light antialiased max-w-[144rem] mx-auto my-0 `}
      >
        <Navbar>
          <Header />
          <MobileHeader />
          <main className="pt-12 lg:pt-20">{children}</main>
          <Footer />
        </Navbar>
      </body>
    </html>
  );
}
