import Image from "next/image";
import MapImage from "@/assets/images/map.svg";
import MapMobileImage from "@/assets/svg/map-image-mobile.svg";
import LocationImage from "@/assets/images/locations.jpg";
import LocationMobileImage from "@/assets/svg/locations-mobile-image.svg";
import { Slide, Zoom } from "react-awesome-reveal";

export default function Vision() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex my-50 lg:my-100 items-center flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 px-5 lg:px-12">
            <Slide triggerOnce cascade damping={0.2}>
              <h2 className="text-2xl lg:text-5xl lg:leading-[64px] font-medium">
                Trading Without Borders - Is Our Ultimate Vision
              </h2>
              <div className="w-full pt-5 lg:hidden relative -right-5">
                <Zoom triggerOnce direction="in">
                  <Image alt="Map Image" src={MapMobileImage} />
                </Zoom>
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
            </Slide>
          </div>
          <div className="w-1/2 pt-5 hidden lg:block">
            <Zoom triggerOnce direction="in">
              <Image alt="Map Image" src={MapImage} />
            </Zoom>
          </div>
        </div>
        <div className="hidden lg:block">
          <Slide triggerOnce direction="up">
            <Image
              alt="Location image"
              className="mx-auto "
              src={LocationImage}
            />
          </Slide>
        </div>

        <div className="lg:hidden">
          <Slide triggerOnce direction="up">
            <Image
              alt="Location image"
              className="mx-auto"
              src={LocationMobileImage}
            />
          </Slide>
        </div>
      </div>
    </section>
  );
}
