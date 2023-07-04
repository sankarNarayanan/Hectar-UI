import Image from "next/image";
// import AnalyticsImage from "@/assets/svg/insights-image.svg";
import AIBlobImage from "@/assets/svg/img-ai-blob.svg";
import AICardsImage from "@/assets/svg/img-ai-cards.svg";
import AIGraphImage from "@/assets/svg/img-ai-graph.svg";
import { Typography } from "@/components";

export default function Analytics() {
  return (
    <section className="bg-[#EFEFEF] text-center py-50 lg:py-100 ">
      <Typography
        variant="lead"
        className="uppercase font-semibold lg:text-xl opacity-50"
      >
        Leverage our proprietary AI
      </Typography>
      <Typography
        variant="h1"
        as="h2"
        className="font-semibold text-center lg:text-[32px] mt-1 lg:mt-2.5"
      >
        Plan Shipments Efficiently
      </Typography>
      <div className="flex justify-center my-30 lg:my-50">
        <AIBlobImage alt="Analytics Image" className="lg:w-44 w-20" />
      </div>
      <div className="container px-4">
        <div className="flex flex-wrap lg:flex-nowrap gap-4 ">
          <div className="lg:w-1/2 px-4 py-30 lg:p-50 bg-[#9A86BA] rounded-xl text-left">
            <Typography variant="h2">
              AI Driven Insights & <br />
              Predictive Analysis
            </Typography>
            <Typography className="mt-4 lg:mt-30 opacity-70">
              Get ahead of the curve with exclusive access to cutting-edge
              trading tools and insights that will help you stay ahead of the
              curve in the fast-paced world of agri commodities trading.
            </Typography>
            <div className=" mt-30">
              <AICardsImage />
            </div>
          </div>
          <div className="lg:w-1/2 px-4 py-30 lg:p-50 bg-[#000000] rounded-xl text-white text-left">
            <Typography className="">
              With our Private Beta, you'll be at the forefront of innovation,
              gaining a competitive edge in the market and maximising your
              profits.
            </Typography>
            <Typography className="mt-2.5 lg:mt-30">
              Don't leave your trades to chance - our data-driven price
              assistance ensures smarter trades and better outcomes - every time
              for every customer.
            </Typography>
            <AIGraphImage className="mt-30"/>
          </div>
        </div>
      </div>
    </section>
  );
}
