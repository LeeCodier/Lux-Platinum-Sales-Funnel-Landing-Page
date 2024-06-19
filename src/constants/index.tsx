// images
// testimonial profile pictures
import DanPolas from "/public/images/DanPolas.png";
import HannahMerkil from "/public/images/HannahMerkil.png";
import MayaDarke from "/public/images/MayaDarke.png";
//article content images
import pollution from "/public/images/pollution.png";
import designer from "/public/images/designer.png";

export const T1_img = DanPolas;
export const T2_img = HannahMerkil;
export const T3_img = MayaDarke;

export const issue_img = pollution;
export const issue2_img = designer;

//icons
import {
  SpeechIcon,
  Pickaxe,
  Gem,
  Icon,
  Handshake,
  Speech,
  Divide,
} from "lucide-react";
import necklace_jewelry from "/public/icons/necklace_jewelry.svg";
export const jewelry = necklace_jewelry;
import Image from "next/image";

//article content
export const a_header: string[] = [
  "Why sourcing a Jewellery manufacturer is so difficult?",
  "And why it doesn’t have to be",
];

export const a_bridges: string[] = [
  "Sourcing a reliable jewellery manufacturer is akin to unravelling a complex puzzle. Beneath the glittering facade lies a web of intricacies, ethical concerns, supply chain opacity, and design precision that make this quest both daunting and essential. In this article, we delve into the labyrinth of jewellery sourcing, exploring why it’s a journey fraught with hurdles and how industry players can emerge victorious.",
  "However its not all doom and gloom, steps can be made to ensure the sourcing process can be as profitable and non headache inducing as possible as possible.",
  "So knowing this is one thing, but solving the problem is another, but don’t worry we’re here to help.",
];

export const a_issues = [
  {
    id: 1,
    header: "Environmental Impact",
    content:
      "Mining for precious metals and gemstones can harm ecosystems, pollute water sources, and contribute to deforestation. Responsible sourcing is crucial to mitigate these effects.",
    img: issue_img,
  },
  {
    id: 2,
    header: "Design Inaccuracies",
    content:
      "In the jewellery manufacturing process, design inaccuracies can occur due to various factors. These include errors in measurements, flawed wax models, or misalignment during casting. Ensuring precise design execution is essential to avoid imperfections in the final product.",
    img: issue2_img,
  },
];

export const a_solutions = [
  {
    id: "EthicalSourcing",
    header: "Ethical Sourcing",
    content:
      "Prioritize responsible sourcing by partnering with suppliers who adhere to ethical practices. Rigorous supplier selection, regular audits, and partnerships with organizations like the Responsible Jewellery Council can ensure responsible material procurement.",
    Component: () => (
      <div className="hidden sm:block w-full h-full"> placeholder</div>
    ),
  },
  {
    id: "SupplyChainTransparency",
    header: "Supply Chain Transparency",
    content:
      " Implement transparent practices to trace metals and gemstones back to their origins. Consumers increasingly demand transparency, so consider tools or technologies that enable supply chain visibility.",
    Component: () => (
      <div className="hidden sm:block w-full h-full"> placeholder</div>
    ),
  },
  {
    id: "MetalPriceVolatilityManagement",
    header: "Metal Price Volatility Management",
    content:
      " Monitor metal prices closely and consider hedging strategies or long-term contracts to mitigate price fluctuations.",
    Component: () => (
      <div className="hidden sm:block w-full h-full"> placeholder</div>
    ),
  },
  {
    id: "QualityControl",
    header: "Quality Control",
    content:
      "Establish stringent quality control processes throughout the production cycle. Regular inspections, certifications, and collaboration with skilled craftsmen contribute to consistent quality.",
    Component: () => (
      <div className="hidden sm:block w-full h-full"> placeholder</div>
    ),
  },
  {
    id: "LeadTimeManagement",
    header: "Lead Time Management",
    content:
      " Efficiently manage lead times by optimizing production schedules, streamlining logistics, and maintaining strong relationships with suppliers.",
    Component: () => (
      <div className="hidden sm:block w-full h-full"> placeholder</div>
    ),
  },
];

export const a_company = {
  header: "we’re Luxe Platinum",
  section1:
    "We are a whole sale Jewellery manufacturing and source company that is committed to helping you source quality, custom Jewellery for your company",
  section2:
    "Utilizing Licenced and recognized, Gold Smiths and Jewellers to build your merchandise in a way that suits your customers",
  component: <div className="h-[340px]  w-full sm:h-full"> placeholder</div>,
};

export const benifits = [
  {
    icon: <SpeechIcon width={80} height={80} strokeWidth={0.8} />,
    content: "Crystal clear communication",
  },

  {
    icon: <Gem width={80} height={80} strokeWidth={0.8} />,
    content: "Ethical material Sourcing",
  },
  {
    icon: <Pickaxe width={80} height={80} strokeWidth={0.8} />,
    content: "Industry standard craftsmanship",
  },
];

export const testimonials = [
  {
    header: "“Exceptional Craftsmanship and Unbeatable Service”",
    content:
      "As a jewellery enthusiast and business owner, I’ve had the pleasure of working with many jewellery manufacturers. However, my experience with Luxe Platinum stands out as truly remarkable.",
    cname: "Dan Polas",
    cimg: DanPolas,
  },

  {
    header: "“Unrivalled Craftsmanship and Personalized Service”",
    content:
      "Working with your Luxe Platinum has been an absolute pleasure. From the exquisite designs to personalized service, every piece reflects unrivalled craftsmanship. Thank you for creating timeless treasures!",
    cname: "Hannah Merkil",
    cimg: HannahMerkil,
  },
  {
    header: "“Exceptional Craftsmanship and Unbeatable Service”",
    content:
      "Exceptional craftsmanship, personalized service, and a commitment to sustainability define our experience with your jewellery manufacturing company. Each piece is a masterpiece, whispering stories of elegance and love.",
    cname: "Maya Darke",
    cimg: MayaDarke,
  },
];

export const how_it_works = [
  {
    icon: (
      <div className="flex flex-row w-fit gap-x-2.5">
        <Speech width={80} height={80} strokeWidth={0.8} />{" "}
        <div className="scale-x-[-1]">
          <Speech width={80} height={80} strokeWidth={0.8} />
        </div>
      </div>
    ),
    content: "Book a call",
  },
  {
    icon: <Handshake width={80} height={80} strokeWidth={0.8} />,
    content: "Leave it to us",
  },
  {
    icon: <Image priority src={jewelry} alt="jewelery" />,
    content: "Receive industry leading jewellery",
  },
];

export const services = [
  {
    header: "Custom Jewellery Design and Manufacturing",
    content:
      "Jewellery manufacturers work closely with clients to create unique designs based on their specifications. They craft custom-made pieces using various materials like gold, platinum, and silver.",
  },
  {
    header: "Bespoke CAD 3D Design Services",
    content:
      "Using computer-aided design (CAD), manufacturers create detailed 3D models of jewellery before production. This ensures precision and allows clients to visualize the final piece.",
  },
  {
    header: "Gemstone Sales and Setting",
    content:
      "Manufacturers offer a variety of gemstones, including diamonds, sapphires, and emeralds. They also provide services for setting gemstones securely into jewellery settings.",
  },
  {
    header: "Repairs, Resizing, and Valuations",
    content:
      "Jewellery manufacturers handle repairs, resizing, and appraisals for existing pieces. They can restore damaged jewellery, resize rings, and assess antique pieces.",
  },
];

export const lp_herotext = {
  header: "Lux Platinum",
  content:
    "With over 40 years of expertise in the jewellery manufacturing industry rest assured that your orders are in the right hands",
};

export const lp_services = {
  product1: {
    header: "Gold, Silver and Diamond Specialists",
    content:
      "With over 40 years of expertise in the jewellery manufacturing industry rest assured that your orders are in the right hands",
    graphic: <div className="h-full w-full">placeholder</div>,
  },
  product2: {
    header: "Gemstone sales",
    content:
      "Offering only the finest stones and rare metals on the planet to suite the needs of retailers and their consumers",
    graphic: <div className="h-full w-full">placeholder</div>,
  },
};

export const ProductCarousel = [
  <div className=" hover:cursor-pointer w-full h-full">placedholderf 1</div>,
  <div className="w-full h-full hover:cursor-pointer">placeholderf 2</div>,
  <div className="w-full h-full hover:cursor-pointer">placeholder 3</div>,
  <div className="w-full h-full hover:cursor-pointer">placeholder 4</div>,
  <div className="w-full h-full hover:cursor-pointer">placeholder 5</div>,
];
