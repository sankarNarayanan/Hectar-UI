import Image from "next/image";
import AnalyticsImage from "@/assets/images/analytics.jpg";
import { Slide } from "react-awesome-reveal";

export default function Analytics() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex my-[100px] items-center">
          <div className="w-1/2 px-12">
            <Slide triggerOnce cascade damping={0.2}>
              <h2 className="text-5xl leading-[64px] font-medium">
                AI Driven Insights & Predictive Analysis
              </h2>
              <p className="text-xl opacity-70 pt-8">
                Get ahead of the curve with exclusive access to cutting-edge
                trading tools and insights that will help you stay ahead of the
                curve in the fast-paced world of agri commodities trading.
              </p>
              <p className="text-xl opacity-70 pt-5">
                With our Private Beta, you'll be at the forefront of innovation,
                gaining a competitive edge in the market and maximising your
                profits.
              </p>
              <p className="text-xl opacity-70 pt-5">
                Don't leave your trades to chance - our data-driven price
                assistance ensures smarter trades and better outcomes - every
                time for every customer.
              </p>
            </Slide>
          </div>
          <div className="w-1/2 pt-5">
            <Slide triggerOnce direction="right">
              <Image alt="Analytics Image" src={AnalyticsImage} />
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
}
