import Image from "next/image";
import AnalyticsImage from "@/assets/svg/insights-image.svg";
import AnalyticsMobileImage from "@/assets/svg/insights-mobile-image.svg";
import { Slide } from "react-awesome-reveal";

export default function Analytics() {
  return (
    <section className="bg-[#E6F5F9]">
      <div className="container mx-auto">
        <div className="flex my-50 lg:my-150 flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 px-5 lg:px-12">
            <h2 className="text-2xl lg:text-5xl lg:leading-[64px] font-medium text-center lg:text-left">
              AI Driven Insights & <br />
              Predictive Analysis
            </h2>
            <div className="w-full lg:w-1/2 pt-5 pl-5 lg:hidden relative -right-5 ">
              <Image alt="Analytics Image" src={AnalyticsMobileImage} />
            </div>
            <p className="text-sm lg:text-xl opacity-70 pt-8">
              Get ahead of the curve with exclusive access to cutting-edge
              trading tools and insights that will help you stay ahead of the
              curve in the fast-paced world of agri commodities trading.
            </p>
            <p className="text-sm lg:text-xl opacity-70 pt-5">
              With our Private Beta, you'll be at the forefront of innovation,
              gaining a competitive edge in the market and maximising your
              profits.
            </p>
            <p className="text-sm lg:text-xl opacity-70 pt-5">
              Don't leave your trades to chance - our data-driven price
              assistance ensures smarter trades and better outcomes - every time
              for every customer.
            </p>
          </div>
          <div className="w-full lg:w-1/2 pt-5 hidden lg:block">
            <Image alt="Analytics Image" src={AnalyticsImage} />
          </div>
        </div>
      </div>
    </section>
  );
}
