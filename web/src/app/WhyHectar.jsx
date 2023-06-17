import CalenderImage from "@/assets/svg/icon-calendar.svg";
import Image from "next/image";
import LocationIconImage from "@/assets/svg/icon-location.svg";
import DocumentIconImage from "@/assets/svg/icon-document.svg";
import { Fade, Slide } from "react-awesome-reveal";

export default function WhyHectar() {
  return (
    <section className="mt-50 lg:mt-100 px-4 lg:px-0">
      <h2 className="text-2xl lg:text-[62px] font-light text-center">
        <Fade triggerOnce cascade damping={0.2}>
          Why Hectar?
        </Fade>
      </h2>

      {/* Dont wait */}
      <div className="container mx-auto bg-[#FCEB8F] mt-30 lg:mt-50 flex rounded-2xl py-30 lg:p-50 flex-col lg:flex-row">
        <div className="lg:w-1/2 px-20 lg:px-0">
          <Fade triggerOnce>
            <Image
              src={CalenderImage}
              alt="calender Icon"
              className="w-50 lg:w-auto"
            />
            <h2 className="text-2xl lg:text-5xl mt-30 lg:mt-50 lg:leading-[64px] font-medium">
              Don&apos;t Wait For <br />
              Tomorrow&apos;s Prices
            </h2>
            <p className="text-xs lg:text-xl mt-3 opacity-70 mb-50">
              Get real-time quotes and delivery dates to end ports to <br />
              make informed decisions.
            </p>
          </Fade>
        </div>
        <div className="lg:w-1/2 pl-20">
          <Slide triggerOnce>
            <img
              src="https://temp-hectar-s3.s3.amazonaws.com/TomorrowPrice.gif"
              alt="prices image"
              className="relative -right-20 lg:right-0"
            />
          </Slide>
        </div>
      </div>

      {/* Track */}
      <div className="container mx-auto bg-[#E6F5F9] mt-30 lg:mt-50 flex rounded-2xl py-30 lg:p-50 flex-col lg:flex-row">
        <div className="lg:w-1/2 px-20 lg:px-0">
          <Fade triggerOnce>
            className="w-50 lg:w-auto"
            <Image
              src={LocationIconImage}
              alt="Track Icon"
              className="w-50 lg:w-auto"
            />
            <h2 className="text-2xl lg:text-5xl mt-30 lg:mt-50 lg:leading-[64px] font-medium">
              Track And Trace <br />
              Every Order
            </h2>
            <p className="text-xs lg:text-xl mt-3 opacity-70 mb-50">
              Keep a tab on all your orders from one single <br />
              Dashboard.
            </p>
          </Fade>
        </div>
        <div className="lg:w-1/2 pl-20">
          <Slide triggerOnce direction="right">
            <img
              src="https://temp-hectar-s3.s3.amazonaws.com/TracknTrace2.gif"
              alt="prices image"
              className="relative -right-20 lg:right-0"
            />
          </Slide>
        </div>
      </div>

      {/* Document */}
      <div className="container mx-auto bg-[#FCEB8F] mt-30 lg:mt-50 flex rounded-2xl py-30 lg:p-50 flex-col lg:flex-row">
        <div className="lg:w-1/2 px-20 lg:px-0">
          <Fade triggerOnce>
            <Image
              src={DocumentIconImage}
              alt="Track Icon"
              className="w-50 lg:w-auto"
            />
            <h2 className="text-2xl lg:text-5xl mt-30 lg:mt-50 lg:leading-[64px] font-medium">
              Streamlined Trade <br />
              Documentation
            </h2>
            <p className="text-xs lg:text-xl mt-3 opacity-70 mb-50">
              Let us handle the paperwork so you can focus on your <br />
              Business.
            </p>
          </Fade>
        </div>
        <div className="lg:w-1/2 pl-20">
          <Slide triggerOnce>
            <img
              src="https://temp-hectar-s3.s3.amazonaws.com/Documents.gif"
              alt="prices image"
              className="relative -right-20 lg:right-0"
            />
          </Slide>
        </div>
      </div>
    </section>
  );
}
