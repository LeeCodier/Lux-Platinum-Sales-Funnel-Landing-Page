import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Footer, NavBar, BackToTop } from "@/components";

const roboto = Roboto({ weight: ["400", "300"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Lux Platinum",
    template: "%s - Lux Platinum",
  },
  description: "Luxury jewellery manufacturers",
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: " /Favicon.ico",
  },
};

export default function RootLayoutt({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="relative bg-page_bg" lang="en">
      <body
        id="Window"
        suppressHydrationWarning={true}
        className={roboto.className}
      >
        <NavBar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
