import Button from "@/components/Button";
import HappyUsersIcon from "@/assets/svg/icon-happy-users-white.svg";
import CompletedOrdersIcon from "@/assets/svg/icon-completed-orders-white.svg";
import CountryIcon from "@/assets/svg/icon-countries-white.svg";
import CropImage from "@/assets/svg/bg-crop.svg";
import Image from "next/image";
import { Typography } from "@/components";

export default function Review({ setDrawer }) {
  return (
    <section
      id="TrustHectar"
      className="bg-[#585858] text-white text-center mt-30 lg:mt-0"
    >
      <div className="h-30 lg:h-100 relative w-full -top-0.5">
        <CropImage alt="CropImage" className="h-30 lg:h-100 w-full" />
      </div>
      <div className="py-[70px] lg:py-100 px-4">
        <Typography variant="h1" as="h2">
          A Sourcing Partner That Adapts <br/>To Your Needs
        </Typography>
        <Typography className="pt-5">
          Build mixed containers, customize packaging, choose preferred liners
          and much more.
        </Typography>

        <div className="flex justify-between lg:justify-center mt-50 flex-wrap lg:flex-row gap-5 lg:gap-50">
          <div className="flex">
            <div className="icon">
              <HappyUsersIcon className="w-40" alt="happy Icon" />
            </div>
            <div className="content ms-4 text-left">
              <p className="font-semibold lg:text-xl">20 +</p>
              <p className="text-sm lg:text-base opacity-70">Commodities</p>
            </div>
          </div>
          <div className="flex">
            <div className="icon">
              <CompletedOrdersIcon
                className="w-40"
                alt="completed orders icon"
              />
            </div>
            <div className="content ms-4 text-left">
              <p className="font-semibold lg:text-xl">50000 +</p>
              <p className="text-sm lg:text-base opacity-70">
                MTs Shipped
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="icon">
              <CountryIcon className="w-40" alt="tick Icon" />
            </div>
            <div className="content ms-4 text-left">
              <p className="font-semibold lg:text-xl">500 +</p>
              <p className="text-sm lg:text-base opacity-70">TEUs / Month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
