import Button from "@/components/Button";
import Link from "next/link";
import linesLeft from "@/assets/lines_left.svg";
import linesRight from "@/assets/lines_right.svg";
import Image from "next/image";
import ProductPortfolio from "./ProductPortfolio";

/**
 * Hero banner Component
 */
export function HeroBanner() {
  return (
    <div className="container relative mx-auto bg-grad-primary pb-[100px] rounded-t-2xl">
      <div>
        <Image className="absolute left-0 bottom-[70px]" src={linesLeft} />
        <Image className="absolute right-0 top-[150px]" src={linesRight} />
      </div>
      <h1 className="text-[64px] text-white pt-[100px] text-center">
        Agri Commodities Trade, <br />
        <span className="font-bold">Reimagined! 🚜</span>
      </h1>
      <p className="text-[#FFFEFF] opacity-70 text-center text-2xl pt-5">
        Enabling global wholesalers, manufacturers and retailers
        <br />
        source efficiently.
      </p>
      <div className="flex justify-center items-center pt-[50px]">
        <Button>Get Instant Quote</Button>
        <Link href="/" className="text-xl ps-5 text-white underline">
          How It works
        </Link>
      </div>
    </div>
  );
}

export function DashboardDummy() {
  return (
    <div className="container mx-auto bg-gray-200 w-full h-[500px] flex items-center justify-center">
      <p className="text-white text-3xl">Work In progress Dash board</p>
    </div>
  );
}

/**
 * Hone Page Component
 */
export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <DashboardDummy />
      <ProductPortfolio />
    </>
  );
}
