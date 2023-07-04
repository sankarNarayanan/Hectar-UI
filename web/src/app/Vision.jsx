import MapBlackImage from "@/assets/svg/map-black-dot.svg";
import MapGreenImage from "@/assets/svg/map-green-dot.svg";
import { Typography } from "@material-tailwind/react";

export default function Vision() {
  return (
    <section>
      <div className="container flex mt-50 lg:mt-100 flex-col lg:flex-row px-4">
        <div className="lg:w-1/2 bg-[#585858] text-white text-center flex flex-col justify-between rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl overflow-clip">
          <div className="px-4 pt-30 lg:p-50">
            <Typography variant="lead" className="text-[#A9D9D7] text-sm lg:text-xl uppercase">
              Our ULtimate Vision
            </Typography>
            <Typography variant="h1" as="h3" className=" lg:mt-30">
              Trading Without <br className="hidden lg:block" />
              Borders
            </Typography>
          </div>
          {/* <div className="h-150 lg:h-auto"> */}
          <img
                  src="https://temp-hectar-s3.s3.amazonaws.com/Borders-Left.gif"
                  alt="prices image"
                />
            {/* <MapGreenImage /> */}
          {/* </div> */}
        </div>
        <div className="lg:w-1/2 bg-[#A9D9D7]  text-center flex flex-col justify-between rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl overflow-clip">
          <div className="px-4 py-50 lg:p-50">
            <Typography>
              We believe in leveraging technology to create a seamless global
              network for movement of food products. By doing so, we are not
              only reducing food waste, but also lowering the net cost of
              imported food.
            </Typography>
          </div>
          <img    className="hidden lg:block"
                  src="https://temp-hectar-s3.s3.amazonaws.com/Borders-Right.gif"
                  alt="prices image"
                />
          {/* <MapBlackImage className="hidden lg:block" /> */}
        </div>
      </div>
    </section>
  );
}
