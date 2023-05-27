import Image from "next/image";
import MapImage from "@/assets/images/map.svg";
import LocationImage from "@/assets/images/locations.jpg";
import { Slide, Zoom } from "react-awesome-reveal";

export default function Vision() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex my-[100px] items-center">
          <div className="w-1/2 px-12">
            <Slide triggerOnce cascade damping={0.2}>
              <h2 className="text-5xl leading-[64px] font-medium">
                Trading Without Borders - Is Our Ultimate Vision
              </h2>
              <p className="text-xl pt-8 opacity-70">
                We believe in leveraging technology to create a seamless global
                network for movement of food products. By doing so, we are not
                only reducing food waste, but also lowering the net cost of
                imported food.
              </p>
              <p className="text-xl pt-5 opacity-70">
                Our global presence spans six countries, as we work towards
                achieving this.
              </p>
            </Slide>
          </div>
          <div className="w-1/2 pt-5">
            <Zoom triggerOnce direction="in">
              <Image src={MapImage} />
            </Zoom>
          </div>
        </div>
        <div>
          <Slide triggerOnce direction="up">
            <Image className="mx-auto" src={LocationImage} />
          </Slide>
        </div>
      </div>
    </section>
  );
}
