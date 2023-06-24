import Button from "@/components/Button";
import HappyUsersIcon from "@/assets/svg/icon-happy-users-white.svg";
import CompletedOrdersIcon from "@/assets/svg/icon-completed-orders-white.svg";
import CountryIcon from "@/assets/svg/icon-countries-white.svg";
import CropImage from "@/assets/svg/bg-crop.svg";
import Image from "next/image";
import { Typography } from "@/components";

export default function Review({ setDrawer }) {
  return (
    <section id="TrustHectar" className="bg-[#585858] text-white text-center">
      <div className="h-[100px] relative w-full -top-px">
        <Image src={CropImage} alt="CropImage" className="" fill />
      </div>
      <div className="py-100">
        <Typography variant="h1" as="h2">
          Trust Hectar For A Sourcing Partner That Adapts <br />
          To Your Needs
        </Typography>
        <Typography className="pt-5">
          Our flexible order and shipping options are designed to accommodate
          your business demands.
        </Typography>

        <div className="flex justify-center mt-100 flex-col lg:flex-row gap-50">
          <div className="flex ">
            <div className="icon">
              <Image
                className="w-40"
                alt="happy Icon"
                src={HappyUsersIcon}
              ></Image>
            </div>
            <div className="content ms-4 text-left">
              <p className="font-semibold lg:text-xl">1000+</p>
              <p className="text-sm lg:text-base opacity-70">Happy Users</p>
            </div>
          </div>
          <div className="flex ">
            <div className="icon">
              <Image
                className="w-40"
                alt="completed orders icon"
                src={CompletedOrdersIcon}
              ></Image>
            </div>
            <div className="content ms-4 text-left">
              <p className="font-semibold lg:text-xl">1000+</p>
              <p className="text-sm lg:text-base opacity-70">
                Completed Orders
              </p>
            </div>
          </div>
          <div className="flex ">
            <div className="icon">
              <Image className="w-40" alt="tick Icon" src={CountryIcon}></Image>
            </div>
            <div className="content ms-4 text-left">
              <p className="font-semibold lg:text-xl">6</p>
              <p className="text-sm lg:text-base opacity-70">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
