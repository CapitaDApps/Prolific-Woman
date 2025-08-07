import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";

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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
