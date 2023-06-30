import Image from "next/image";
// import AnalyticsImage from "@/assets/svg/insights-image.svg";
import AIBlobImage from "@/assets/svg/img-ai-blob.svg";
import AICardsImage from "@/assets/svg/img-ai-cards.svg";
import AIGraphImage from "@/assets/svg/img-ai-graph.svg";
import { Typography } from "@/components";

export default function Analytics() {
  return (
    <section className="bg-[#EFEFEF] text-center py-100 ">
      <Typography
        variant="lead"
        className="uppercase font-medium text-xl opacity-50"
      >
        Leverage our proprietary AI
      </Typography>
      <Typography
        variant="h1"
        as="h2"
        className="font-medium text-center text-[32px] mt-2.5"
      >
        Plan Shipments Efficiently
      </Typography>
      <div className="flex justify-center my-50">
        <AIBlobImage alt="Analytics Image" />
      </div>
      <div className="container">
        <div className="flex gap-4 ">
          <div className="w-1/2 p-50 bg-[#9A86BA] rounded-xl">
            <Typography variant="h3">
              AI Driven Insights & Predictive Analysis
            </Typography>
            <Typography className="mt-30">
              Get ahead of the curve with exclusive access to cutting-edge
              trading tools and insights that will help you stay ahead of the
              curve in the fast-paced world of agri commodities trading.
            </Typography>
            <div className="-m-30">
              <AICardsImage />
            </div>
          </div>
          <div className="w-1/2 p-50 bg-[#000000] rounded-xl text-white text-left">
            <Typography className="">
              With our Private Beta, you'll be at the forefront of innovation,
              gaining a competitive edge in the market and maximising your
              profits.
            </Typography>
            <Typography className="mt-30">
              Don't leave your trades to chance - our data-driven price
              assistance ensures smarter trades and better outcomes - every time
              for every customer.
            </Typography>
            <AIGraphImage />
          </div>
        </div>
      </div>
    </section>
  );
}
