import Button from "@/components/Button";
import Link from "next/link";
import linesLeft from "@/assets/lines_left.svg";
import linesRight from "@/assets/lines_right.svg";
import Happy from "@/assets/svg/happy.svg";
import Tick from "@/assets/svg/tick.svg";
import Country from "@/assets/svg/country.svg";
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

export function Review() {
  return (
    <div className="bg-[#0156F7]">
      <div className="container mx-auto p-6">
        <div className="bg-[#FFFEFF] text-5xl p-[50px] text-center rounded-xl">
          <h2>
            Trust Hectar For A Sourcing Partner <br />
            That Adapts To Your Needs
          </h2>
          <p className="text-xl pt-[20px]">
            Our flexible order and shipping options are designed to accommodate
            your
            <br /> business demands.
          </p>
          <div className="flex justify-center mt-[30px]">
            <div className="flex me-[50px]">
              <div className="icon">
                <Image src={Happy}></Image>
              </div>
              <div className="content text-left">
                <p className="text-bold text-2xl">1000+</p>
                <p className="text-xl">Happy Users</p>
              </div>
            </div>
            <div className="flex me-[50px]">
              <div className="icon">
                <Image src={Tick}></Image>
              </div>
              <div className="content text-left">
                <p className="text-bold text-2xl">1000+</p>
                <p className="text-xl">Completed Orders</p>
              </div>
            </div>
            <div className="flex">
              <div className="icon">
                <Image src={Country}></Image>
              </div>
              <div className="content text-left">
                <p className="text-bold text-2xl">6</p>
                <p className="text-xl">Countries</p>
              </div>
            </div>
          </div>

          <div className="flex mt-[50px] justify-center">
            <Button className="mr-[30px]" variant="outline">Submit Your Request</Button>
            <Button>Get Instant Quote</Button>
          </div>
        </div>
      </div>
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
      <Review />
    </>
  );
}
