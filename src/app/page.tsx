import { Header, WhyUs, HowItWorks, Product1, Product2 } from "@/components";
import "./globals.css";
export default function Home() {
  return (
    <main className="column">
      <Header />
      <WhyUs />
      <Product1 />
      <Product2 />
    </main>
  );
}
