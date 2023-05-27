import Button from "@/components/Button";
import Link from "next/link";
import linesLeft from "@/assets/lines_left.svg";
import linesRight from "@/assets/lines_right.svg";
import Happy from "@/assets/svg/happy.svg";
import Tick from "@/assets/svg/tick.svg";
import Country from "@/assets/svg/country.svg";
import Image from "next/image";
import ProductPortfolio from "./ProductPortfolio";
import AnalyticsImage from "@/assets/images/analytics.jpg";
import MapImage from "@/assets/images/map.svg";
import LocationImage from "@/assets/images/locations.jpg";

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
      <h1 className="text-[64px] text-white pt-[100px] text-center font-normal">
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

export function Analytics() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex my-[100px] items-center">
          <div className="w-1/2 px-12">
            <h2 className="text-5xl">
              AI Driven Insights & Predictive Analysis
            </h2>
            <p className="text-3xl pt-8">
              Get ahead of the curve with exclusive access to cutting-edge
              trading tools and insights that will help you stay ahead of the
              curve in the fast-paced world of agri commodities trading.
            </p>
            <p className="text-3xl pt-5">
              With our Private Beta, you'll be at the forefront of innovation,
              gaining a competitive edge in the market and maximising your
              profits.
            </p>
            <p className="text-3xl pt-5">
              Don't leave your trades to chance - our data-driven price
              assistance ensures smarter trades and better outcomes - every time
              for every customer.
            </p>
          </div>
          <div className="w-1/2 pt-5">
            <Image src={AnalyticsImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Vision() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex my-[100px] items-center">
          <div className="w-1/2 px-12">
            <h2 className="text-5xl">
              Trading Without Borders - Is Our Ultimate Vision
            </h2>
            <p className="text-3xl pt-8">
              We believe in leveraging technology to create a seamless global
              network for movement of food products. By doing so, we are not
              only reducing food waste, but also lowering the net cost of
              imported food.
            </p>
            <p className="text-3xl pt-5">
              Our global presence spans six countries, as we work towards
              achieving this.
            </p>
          </div>
          <div className="w-1/2 pt-5">
            <Image src={MapImage} />
          </div>
        </div>
        <div>
          <Image className="mx-auto" src={LocationImage} />
        </div>
      </div>
    </section>
  );
}

export function Review() {
  return (
    <div className="relative before:content-[''] before:w-full before:h-full before:absolute before:bg-[#0156F7] before:-z-20">
      <div className="container mx-auto p-6">
        <div
          className={
            "bg-[#FFFEFF] relative  p-[50px] text-center rounded-xl my-[100px] " +
            " before:content-[''] before:border before:border-solid before:rounded-xl before:border-[#background: #FFFEFF;]" +
            " before:absolute before:w-full before:h-full before:left-0 before:top-0 before:rotate-[8deg] before:-z-10" +
            " after:content-[''] after:border after:border-solid after:rounded-xl after:border-[#background: #FFFEFF;]" +
            " after:absolute after:w-full after:h-full after:left-0 after:top-0 after:-rotate-3 after:-z-10"
          }
        >
          <h2 className="text-5xl">
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
              <div className="content ms-4 text-left">
                <p className="text-bold text-2xl">1000+</p>
                <p className="text-xl">Happy Users</p>
              </div>
            </div>
            <div className="flex me-[50px]">
              <div className="icon">
                <Image src={Tick}></Image>
              </div>
              <div className="content ms-4 text-left">
                <p className="text-bold text-2xl">1000+</p>
                <p className="text-xl">Completed Orders</p>
              </div>
            </div>
            <div className="flex">
              <div className="icon">
                <Image src={Country}></Image>
              </div>
              <div className="content ms-4 text-left">
                <p className="text-bold text-2xl">6</p>
                <p className="text-xl">Countries</p>
              </div>
            </div>
          </div>

          <div className="flex mt-[50px] justify-center">
            <Button className="me-[30px]" variant="outline">
              Submit Your Request
            </Button>
            <Button>Get Instant Quote</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GetStarted() {
  return (
    <section>
      <div className="container mx-auto bg-grad-primary rounded-2xl py-[100px] my-[100px]">
        <h2 className="text-[64px] text-white text-center">
          Start Trading Now!
        </h2>
        <div className="text-center mt-8">
          <Button>Get Instant Quote</Button>
        </div>
      </div>
    </section>
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
      <Analytics />
      <Vision />
      <GetStarted />
    </>
  );
}
