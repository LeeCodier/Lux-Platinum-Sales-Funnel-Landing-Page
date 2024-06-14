import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/components";

const roboto = Roboto({ weight: ["400", "300"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lux Platinum",
  icons: {
    icon: " /fav.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className=" bg-page_bg" lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
