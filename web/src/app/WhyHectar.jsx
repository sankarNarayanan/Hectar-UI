import CalenderImage from "@/assets/svg/icon-calendar.svg";
import LocationIconImage from "@/assets/svg/icon-location.svg";
import DocumentIconImage from "@/assets/svg/icon-document.svg";
import { Fade, Slide } from "react-awesome-reveal";
import { Typography } from "@/components";

export default function WhyHectar() {

  function supportsVideoType(type) {
    const formats = {
      ogg: 'video/ogg; codecs="theora"',
      h264: 'video/mp4; codecs="avc1.42E01E"',
      webm: 'video/webm; codecs="vp8, vorbis"',
      vp9: 'video/webm; codecs="vp9"',
      hls: 'application/x-mpegURL; codecs="avc1.42E01E"'
    };
  
    const video = document.createElement('video');
    if(video.canPlayType(formats[type] || type) == 'probably'){
      return true;
    }
    return false;
  }

  return (
    <section className="mt-50 lg:mt-100 px-4 lg:px-0">
      <Typography variant="h2" className="text-center">
        Why Hectar?
      </Typography>

      {/* Dont wait */}
      <div className="container mx-auto bg-[#9A86BA] mt-30 lg:mt-50 flex rounded-2xl py-30 lg:p-50 flex-col lg:flex-row items-center overflow-clip">
        <div className="lg:w-1/2 py-5 px-9 lg:px-0">
          <Fade triggerOnce>
            <CalenderImage alt="calender Icon" className="w-50 lg:w-[80px]" />
            <Typography
              variant="h1"
              as="h2"
              className="pt-5 lg:pt-30 font-medium"
            >
              Don't Wait For <br /> Tomorrow's Prices
            </Typography>
            <Typography className="text-base lg:text-lg pt-2.5">
              Get real-time quotes and delivery dates to{" "}
              <br className="hidden lg:block" />
              end ports to make informed decisions.
            </Typography>
          </Fade>
        </div>
        <div className="lg:w-1/2 mt-30">
          {supportsVideoType('webm') ? (
            <video
            loop
            autoPlay
            muted
            width={520}
            height={400}
            className="relative -right-20 lg:right-0"
          >
          <source src="/videos/TomorrowPrice.webm" type="video/webm" />
          </video>) : 
          (<img
              src="https://temp-hectar-s3.s3.amazonaws.com/TomorrowPrice.gif"
              alt="prices image"
              className="relative -right-20 lg:right-0"
            />)};
        </div>
      </div>

      {/* Track */}
      <div className="container mx-auto bg-[#BED8A6] mt-5 lg:mt-50 flex rounded-2xl py-30 lg:p-50 flex-col lg:flex-row items-center overflow-clip">
        <div className="lg:w-1/2 py-5 px-9 lg:px-0">
          <Fade triggerOnce>
            <LocationIconImage alt="Track Icon" className="w-50 lg:w-[80px]" />
            <Typography
              variant="h1"
              as="h2"
              className="pt-5 lg:pt-30 font-medium"
            >
              Track And Trace <br />
              Every Order
            </Typography>
            <Typography className="text-base lg:text-lg pt-2.5">
              Keep a tab on all your orders from one single{" "}
              <br className="hidden lg:block" />
              Dashboard.
            </Typography>
          </Fade>
        </div>
        <div className="lg:w-1/2 mt-30">
        {supportsVideoType('webm') ? (
            <video
            loop
            autoPlay
            muted
            width={520}
            height={400}
            className="relative -right-20 lg:right-0"
          >
          <source src="/videos/track.webm" type="video/webm" />
          </video>) : 
          (<img
              src="https://temp-hectar-s3.s3.amazonaws.com/TracknTrace2.gif"
              alt="prices image"
              className="relative -right-20 lg:right-0"
            />)};
        </div>
      </div>

      {/* Document */}
      <div className="container mx-auto bg-[#A9D9D7] mt-5 lg:mt-50 flex rounded-2xl py-30 lg:p-50 flex-col lg:flex-row overflow-clip lg:justify-between">
        <div className="lg:w-1/2py-5 px-9 lg:px-0">
          <Fade triggerOnce>
            <DocumentIconImage alt="Track Icon" className="w-50 lg:w-[80px]" />
            <Typography
              variant="h1"
              as="h2"
              className="pt-5 lg:pt-30 font-medium"
            >
              Streamlined Trade <br />
              Documentation
            </Typography>
            <Typography className="text-base lg:text-lg pt-2.5">
              Let us handle the paperwork so you can{" "}
              <br className="hidden lg:block" />
              focus on your Business.
            </Typography>
          </Fade>
        </div>
        <div className="lg:w-1/2 mt-30">
        {supportsVideoType('webm') ? (
            <video
            loop
            autoPlay
            muted
            width={520}
            height={400}
            className="relative -right-20 lg:right-0"
          >
          <source src="/videos/documentation.webm" type="video/webm" />
          </video>) : 
          (<img
              src="https://temp-hectar-s3.s3.amazonaws.com/Documents.gif"
              alt="prices image"
              className="relative -right-20 lg:right-0"
            />)};
        </div>
      </div>
    </section>
  );
}
