import CalenderImage from "@/assets/svg/icon-calendar.svg";
import Image from "next/image";
import LocationIconImage from "@/assets/svg/icon-location.svg";
import DocumentIconImage from "@/assets/svg/icon-document.svg";
import { Fade, Slide } from "react-awesome-reveal";
import { Typography } from "@/components";

export default function WhyHectar() {
  return (
    <section className="mt-50 lg:mt-100 px-4 lg:px-0">
      <Typography variant="h2" className="text-center">
        Why Hectar?
      </Typography>

      {/* Dont wait */}
      <div className="container mx-auto bg-[#9A86BA] mt-30 lg:mt-50 flex rounded-2xl py-30 lg:p-50 flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 px-20 lg:px-0">
          <Fade triggerOnce>
            <CalenderImage
              alt="calender Icon"
              className="w-50 lg:w-[80px]"
            />
            <Typography variant="h1" as="h2" className="py-30">
              Don't Wait For <br /> Tomorrow's Prices
            </Typography>
            <Typography>
              Get real-time quotes and delivery dates to <br />
              end ports to make informed decisions.
            </Typography>
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
      <div className="container mx-auto bg-[#BED8A6] mt-30 lg:mt-50 flex rounded-2xl py-30 lg:p-50 flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 px-20 lg:px-0">
          <Fade triggerOnce>
            className="w-50 lg:w-auto"
            <LocationIconImage
              alt="Track Icon"
              className="w-50 lg:w-[80px]"
            />
            <Typography variant="h1" as="h2" className="py-30">
              Track And Trace <br />
              Every Order
            </Typography>
            <Typography>
              Keep a tab on all your orders from one single <br />
              Dashboard.
            </Typography>
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
      <div className="container mx-auto bg-[#A9D9D7] mt-30 lg:mt-50 flex rounded-2xl py-30 lg:p-50 flex-col lg:flex-row">
        <div className="lg:w-1/2 px-20 lg:px-0">
          <Fade triggerOnce>
            <DocumentIconImage
              alt="Track Icon"
              className="w-50 lg:w-[80px]"
            />
            <Typography variant="h1" as="h2" className="py-30">
              Streamlined Trade <br />
              Documentation
            </Typography>
            <Typography>
              Let us handle the paperwork so you can <br />
              focus on your Business.
            </Typography>
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
