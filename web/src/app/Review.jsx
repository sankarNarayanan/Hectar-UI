import Button from "@/components/Button";
import Happy from "@/assets/svg/happy.svg";
import Tick from "@/assets/svg/tick.svg";
import Country from "@/assets/svg/country.svg";
import Image from "next/image";
import { Bounce } from "react-awesome-reveal";

export default function Review({setDrawer}) {
  return (
    <div className="relative mt-[100px] before:content-[''] before:w-full before:h-full before:absolute before:bg-[#0156F7] before:-z-20">
      <div className="container mx-auto p-6">
        <Bounce triggerOnce>
          <div
            className={
              "bg-[#FFFEFF] relative  p-[50px] text-center rounded-xl my-[100px] " +
              " before:content-[''] before:border before:border-solid before:rounded-xl before:border-[#background: #FFFEFF;]" +
              " before:absolute before:w-full before:h-full before:left-0 before:top-0 before:rotate-[8deg] before:-z-10" +
              " after:content-[''] after:border after:border-solid after:rounded-xl after:border-[#background: #FFFEFF;]" +
              " after:absolute after:w-full after:h-full after:left-0 after:top-0 after:-rotate-3 after:-z-10"
            }
          >
            <h2 className="text-5xl font-medium leading-[64px]">
              Trust Hectar For A Sourcing Partner <br />
              That Adapts To Your Needs
            </h2>
            <p className="text-xl pt-[20px] opacity-70">
              Our flexible order and shipping options are designed to
              accommodate your
              <br /> business demands.
            </p>
            <div className="flex justify-center mt-[30px]">
              <div className="flex me-[50px]">
                <div className="icon">
                  <Image alt="happy Icon" src={Happy}></Image>
                </div>
                <div className="content ms-4 text-left">
                  <p className="font-semibold text-2xl">1000+</p>
                  <p className="text-xl opacity-70">Happy Users</p>
                </div>
              </div>
              <div className="flex me-[50px]">
                <div className="icon">
                  <Image alt="tick icon" src={Tick}></Image>
                </div>
                <div className="content ms-4 text-left">
                  <p className="font-semibold text-2xl">1000+</p>
                  <p className="text-xl opacity-70">Completed Orders</p>
                </div>
              </div>
              <div className="flex">
                <div className="icon">
                  <Image alt="tick Icon" src={Country}></Image>
                </div>
                <div className="content ms-4 text-left">
                  <p className="font-semibold text-2xl">6</p>
                  <p className="text-xl opacity-70">Countries</p>
                </div>
              </div>
            </div>

            <div className="flex mt-[50px] justify-center">
              <Button className="me-[30px]" variant="outline" onClick={() => {
                setDrawer(true);
              }}>
                Submit Your Request
              </Button>
              <Button>Get Instant Quote</Button>
            </div>
          </div>
        </Bounce>
      </div>
    </div>
  );
}
