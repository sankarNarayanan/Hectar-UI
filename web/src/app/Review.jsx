import Button from "@/components/Button";
import Happy from "@/assets/svg/happy.svg";
import Tick from "@/assets/svg/tick.svg";
import CountryIcon from "@/assets/svg/icon-countries.svg";
import Image from "next/image";
import { Bounce } from "react-awesome-reveal";

export default function Review() {
  return (
    <div className="relative mt-50 lg:mt-100 before:content-[''] before:w-full before:h-full before:absolute before:bg-[#0156F7] before:-z-20">
      <div className="container mx-auto p-6">
        <Bounce triggerOnce>
          <div
            className={
              "bg-[#FFFEFF] relative p-20 lg:p-50 text-center rounded-xl my-50 lg:my-100 " +
              " before:content-[''] before:border before:border-solid before:rounded-xl before:border-[#background: #FFFEFF;]" +
              " before:absolute before:w-full before:h-full before:left-0 before:top-0 before:rotate-[8deg] before:-z-10" +
              " after:content-[''] after:border after:border-solid after:rounded-xl after:border-[#background: #FFFEFF;]" +
              " after:absolute after:w-full after:h-full after:left-0 after:top-0 after:-rotate-3 after:-z-10"
            }
          >
            <h2 className="text-2xl lg:text-5xl font-medium lg:leading-[64px]">
              Trust Hectar For A Sourcing Partner That Adapts To Your Needs
            </h2>
            <p className="text-sm  lg:text-xl pt-20 opacity-70">
              Our flexible order and shipping options are designed to
              accommodate your
              <br className="hidden lg:block" /> business demands.
            </p>
            <div className="flex justify-center mt-30 flex-col lg:flex-row">
              <div className="flex mt-20 lg:mt-0 lg:me-50">
                <div className="icon">
                  <Image className="w-40" alt="happy Icon" src={Happy}></Image>
                </div>
                <div className="content ms-4 text-left">
                  <p className="font-semibold lg:text-2xl">1000+</p>
                  <p className="text-sm lg:text-xl opacity-70">Happy Users</p>
                </div>
              </div>
              <div className="flex mt-20 lg:mt-0 lg:me-50 ml-[85px]">
                <div className="icon">
                  <Image className="w-40" alt="tick icon" src={Tick}></Image>
                </div>
                <div className="content ms-4 text-left">
                  <p className="font-semibold lg:text-2xl">1000+</p>
                  <p className="text-sm lg:text-xl opacity-70">
                    Completed Orders
                  </p>
                </div>
              </div>
              <div className="flex mt-20 lg:mt-0 ml-[170px]">
                <div className="icon">
                  <Image
                    className="w-40"
                    alt="tick Icon"
                    src={CountryIcon}
                  ></Image>
                </div>
                <div className="content ms-4 text-left">
                  <p className="font-semibold lg:text-2xl">6</p>
                  <p className="text-sm lg:text-xl opacity-70">Countries</p>
                </div>
              </div>
            </div>

            <div className="flex mt-30 lg:mt-50 justify-center">
              <Button className="" variant="outline">
                get Quotes
              </Button>
            </div>
          </div>
        </Bounce>
      </div>
    </div>
  );
}
