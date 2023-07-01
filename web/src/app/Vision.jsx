import MapBlackImage from "@/assets/svg/map-black-dot.svg";
import MapGreenImage from "@/assets/svg/map-green-dot.svg";
import { Typography } from "@material-tailwind/react";

export default function Vision() {
  return (
    <section>
      <div className="container flex mt-100">
        <div className="w-1/2 bg-[#585858] text-white text-center flex flex-col justify-between rounded-l-2xl overflow-clip">
          <div className="p-50">
            <Typography variant="lead" className="text-[#A9D9D7] text-xl">
              Our ULtimate Vision
            </Typography>
            <Typography variant="h3" className="mt-30 text-[2.5rem]">
              Trading Without <br />
              Borders
            </Typography>
          </div>
          <MapGreenImage />
        </div>
        <div className="w-1/2 bg-[#A9D9D7]  text-center flex flex-col justify-between rounded-r-2xl overflow-clip">
          <div className="p-50">
            <Typography>
              We believe in leveraging technology to create a seamless global
              network for movement of food products. By doing so, we are not
              only reducing food waste, but also lowering the net cost of
              imported food.
            </Typography>
          </div>
          <MapBlackImage />
        </div>
      </div>
    </section>
  );
}
