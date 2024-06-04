import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lux Platinum",
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
      </body>
    </html>
  );
}
