import Image from "next/image";
import CraneImage from "@/assets/svg/crane.svg";
import ShipImage from "@/assets/svg/ship.svg";
import { Typography } from "@/components";

export default function HeroBanner() {
  return (
    <section id="HeroBanner">
      <div className=" container mx-auto   flex justify-stretch ">
        <div className="w-1/2 p-50">
          <Typography variant="h1" size="h1" className="mt-50">
            Agri Commodities Trade, Reimagined!
          </Typography>
          <Typography variant="paragraph" className="mt-50 text-xl">
            Enabling global wholesalers, manufacturers & retailers source
            efficiently.
          </Typography>
        </div>
        <div className="w-1/2 bg-[url('/img/sea.svg')] bg-repeat-x bg-bottom animate-bg-move">
          <div className="relative self-end h-full ">
            <div className="self-end absolute -bottom-0 -z-10 mb-2 right-150 animate-wave-3">
              <Image src={ShipImage} alt="ship" />
            </div>
            <div className=" absolute -bottom-0 mb-2 right-0 -z-10 animate-wave-5">
              <Image src={CraneImage} alt="Crane Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
