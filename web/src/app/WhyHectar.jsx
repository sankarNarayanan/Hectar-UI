import CalenderImage from "@/assets/svg/icon-calendar.svg";
import PricesImage from "@/assets/svg/prices.svg";
import Image from "next/image";
import TrackImage from "@/assets/svg/track.svg";
import DocumentImage from "@/assets/svg/documentation.svg";
import LocationIconImage from "@/assets/svg/icon-location.svg";
import DocumentIconImage from "@/assets/svg/icon-document.svg";
import { Fade, Slide } from "react-awesome-reveal";

export default function WhyHectar() {
  return (
    <section className="mt-[100px]">
      <h2 className="text-[62px] font-light text-center">
        <Fade triggerOnce cascade damping={0.2}>
          Why Hectar?
        </Fade>
      </h2>

      {/* Dont wait */}
      <div className="container mx-auto bg-[#FCEB8F] mt-[50px] flex rounded-2xl p-[50px]">
        <div className="w-1/2">
          <Fade triggerOnce>
            <Image src={CalenderImage} alt="calender Icon" />
            <h2 className="text-5xl mt-[50px] leading-[64px] font-medium">
              Don&apos;t Wait For <br />
              Tomorrow&apos;s Prices
            </h2>
            <p className="text-xl mt-3 opacity-70">
              Get real-time quotes and delivery dates to end ports to <br />
              make informed decisions.
            </p>
          </Fade>
        </div>
        <div className="w-1/2">
          <Slide triggerOnce>
            <Image src={PricesImage} alt="prices image" />
          </Slide>
        </div>
      </div>

      {/* Track */}
      <div className="container mx-auto bg-[#E6F5F9] mt-[50px] flex rounded-2xl p-[50px]">
        <div className="w-1/2">
          <Fade triggerOnce>
            <Image src={LocationIconImage} alt="Track Icon" />
            <h2 className="text-5xl mt-[50px] leading-[64px] font-medium">
              Track And Trace <br />
              Every Order
            </h2>
            <p className="text-xl mt-3 opacity-70">
              Keep a tab on all your orders from one single <br />
              Dashboard.
            </p>
          </Fade>
        </div>
        <div className="w-1/2">
          <Slide triggerOnce direction="right">
            <Image src={TrackImage} alt="prices image" />
          </Slide>
        </div>
      </div>

      {/* Document */}
      <div className="container mx-auto bg-[#FCEB8F] mt-[50px] flex rounded-2xl p-[50px]">
        <div className="w-1/2">
          <Fade triggerOnce>
            <Image src={DocumentIconImage} alt="Track Icon" />
            <h2 className="text-5xl mt-[50px] leading-[64px] font-medium">
              Streamlined Trade <br />
              Documentation
            </h2>
            <p className="text-xl mt-3 opacity-70">
              Let us handle the paperwork so you can focus on your <br />
              Business.
            </p>
          </Fade>
        </div>
        <div className="w-1/2">
          <Slide triggerOnce>
            <Image src={DocumentImage} alt="prices image" />
          </Slide>
        </div>
      </div>
    </section>
  );
}
