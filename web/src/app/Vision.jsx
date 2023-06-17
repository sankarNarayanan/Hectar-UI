import Image from "next/image";
//import MapImage from "@/assets/images/map.svg";
import MapAnimation from "@/assets/gif/Borders-Line.gif";
import MapMobileImage from "@/assets/svg/map-image-mobile.svg";
import LocationImage from "@/assets/images/locations.jpg";
import LocationMobileImage from "@/assets/svg/locations-mobile-image.svg";
import OfficeIcon from "@/assets/svg/office-icon.svg";
import { Slide, Zoom } from "react-awesome-reveal";

export default function Vision() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex my-50 lg:my-100 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 px-5 lg:px-12">
            <h2 className="text-2xl lg:text-5xl lg:leading-[64px] font-medium">
              Trading Without Borders - Is Our Ultimate Vision
            </h2>
            <div className=" pt-5 lg:hidden relative -mx-5">
              <Image alt="Map Image" src={MapAnimation} />
            </div>
            <p className="textsm lg:text-xl pt-8 opacity-70">
              We believe in leveraging technology to create a seamless global
              network for movement of food products. By doing so, we are not
              only reducing food waste, but also lowering the net cost of
              imported food.
            </p>
            <p className="text-sm lg:text-xl pt-5 opacity-70">
              Our global presence spans six countries, as we work towards
              achieving this.
            </p>
          </div>
          <div className="w-1/2 pt-5 hidden lg:block">
            <Zoom triggerOnce direction="in">
              <Image alt="Map Image" src={MapAnimation} />
            </Zoom>
          </div>
        </div>
        <div className="p-20 lg:p-50 lg:relative lg:-top-[360px] lg:-mb-[360px]">
          <p className="font-semibold lg:text-2xl">Our Offices</p>
          <div className="lg:flex lg:flex-wrap lg:gap-14">
            <div className="mt-20 lg:w-1/3">
              <Image className="lg:w-8" src={OfficeIcon} alt="office icon" />
              <p className="text-sm lg:text-xl opacity-70 pt-3 font-semibold">Singapore</p>
              <p className="text-sm lg:text-xl opacity-70 pt-2">
                68 Circular Road <br />
                #02-01 Singapore (049422)
              </p>
            </div>

            <div className="mt-30 lg:w-1/3">
              <Image className="lg:w-8" src={OfficeIcon} alt="office icon" />
              <p className="text-sm lg:text-xl opacity-70 pt-3 font-semibold">
                Chennai, India
              </p>
              <p className="text-sm lg:text-xl opacity-70 pt-2">
                New #5 / Old #3, Nandanam 1st Street,
                <br /> Nandanam, Chennai 600035.
              </p>
            </div>

            <div className="strech">

            </div>

            <div className="mt-30 lg:w-1/3">
              <Image className="lg:w-8" src={OfficeIcon} alt="office icon" />
              <p className="text-sm lg:text-xl opacity-70 pt-3 font-semibold">
                Guntur, India
              </p>
              <p className="text-sm lg:text-xl opacity-70 pt-2">
                Kamakshi Nagar Main Road,
                <br />
                Opposite Mirchi Yard, Guntur 522005
              </p>
            </div>

            <div className="mt-30 lg:w-1/3">
              <Image className="lg:w-8" src={OfficeIcon} alt="office icon" />
              <p className="text-sm lg:text-xl opacity-70 pt-3 font-semibold">
                Colombo, Srilanka
              </p>
              <p className="text-sm lg:text-xl opacity-70 pt-2">
                195 Mawatha Road, Grandpass Colombo 14,
                <br /> Srilanka
              </p>
            </div>

            <div className="mt-30 lg:w-1/3">
              <Image className="lg:w-8" src={OfficeIcon} alt="office icon" />
              <p className="text-sm lg:text-xl opacity-70 pt-3 font-semibold">
                Dhaka, Bangladesh
              </p>
              <p className="text-sm lg:text-xl opacity-70 pt-2">
                Gulshan Palladium (3rd Floor, West Block), 3B (North Side), Plot
                No: CEN(C) 1, Road-95/97, Gulshan-2, Dhaka-1212, Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
