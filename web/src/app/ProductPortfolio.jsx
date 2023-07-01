"use client";
import Image from "next/image";

import Onion from "@/assets/images/portfolio/onion.jpg";
import Corriander from "@/assets/images/portfolio/corriander-seeds.jpg";
import Fenugric from "@/assets/images/portfolio/fenugreek.jpg";
import RedChilli from "@/assets/images/portfolio/red-chilli.jpg";
import Sugar from "@/assets/images/portfolio/sugar.jpg";
import Turmeric from "@/assets/images/portfolio/turmeric.jpg";
import Rice from "@/assets/images/portfolio/non-basmati-rice.jpg";
import GreenCardomomImage from "@/assets/images/portfolio/green-cardamom.jpg";
import MustardImage from "@/assets/images/portfolio/mustard.jpg";
// need new IMage
import GroundnutsImage from "@/assets/images/groundnuts-image.jpg";
import FennelImage from "@/assets/images/portfolio/fennel.jpg";
import CoconutImage from "@/assets/images/portfolio/coconut.jpg";
import TamarindImage from "@/assets/images/portfolio/tamarind.jpg";
import BlackPepperImage from "@/assets/images/portfolio/black-pepper.jpg";
import GingerImage from "@/assets/images/portfolio/ginger.jpg";
import ChickPeasImage from "@/assets/images/portfolio/chickpeas.jpg";
import MaizeImage from "@/assets/images/portfolio/maize.jpg";
import CuminImage from "@/assets/images/portfolio/cumin.jpg";
import TapiocaImage from "@/assets/images/portfolio/tapioca.jpg";

import ChevronRightIcon from "@/assets/svg/chevron-right.svg";

import { Carousel, Typography } from "@/components";

const CustomPrevArrow = (props) => {
  return (
    <button
      className={`!absolute -bottom-50 lg:-bottom-100 lg:left-[300px] z-10 ${
        props.firstIndex && "opacity-50"
      }`}
      onClick={() => props.handlePrev()}
    >
      <ChevronRightIcon className="rotate-180" alt="ChevronRightIcon" />
    </button>
  );
};

const CustomNextArrow = (props) => {
  return (
    <button
      className={`!absolute -bottom-50 lg:-bottom-100 z-10 !right-0 lg:!right-[300px] ${
        props.lastIndex && "opacity-50"
      }`}
      onClick={() => props.handleNext()}
    >
      <ChevronRightIcon alt="ChevronRightIcon" />
    </button>
  );
};

const CustomNavigation = ({ setActiveIndex, activeIndex, length }) => {
  const LEFT_MAP = {
    0: "left-0",
    1: "left-1/4 -ml-5 lg:left-2/4 lg:-ml-[65px]",
    2: "left-1/2 -ml-10 lg:left-full lg:-ml-130",
    3: "left-1/2",
    4: "left-3/4 -ml-5",
    5: "left-full -ml-10"
  };
  const left = LEFT_MAP[activeIndex];
  return (
    <div className="flex justify-center px-50 !absolute !-bottom-[35px] lg:!-bottom-[87px] w-full">
      <div className=" w-[400px] h-[3px] lg:h-[5px] bg-gray-300 rounded-full relative">
        <div
          className={`absolute bg-blue-600 rounded-full transition-all duration-500 w-10 lg:w-130 h-[3px] lg:h-[5px] ${left}`}
        ></div>
      </div>
    </div>
  );
};

export default function ProductPortfolio() {
  return (
    <section id="ProductPortfolio" className="my-50 py-50 lg:my-100 bg-[#F9F9F9]">
      <Typography variant="h2" className="text-center text-[1.325rem] lg:text-4xl font-medium" >
        Product Portfolio
      </Typography>
      <Typography className="text-center mt-2.5 lg:mt-30">
        Quality audited by us and packaged to your preferences.
      </Typography>
      <div className="container mx-auto py-100 px-3 hidden">
        <Carousel
          className="!overflow-x-clip"
          navigation={CustomNavigation}
          prevArrow={CustomPrevArrow}
          nextArrow={CustomNextArrow}
        >
          <div className="relative ">
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
              <div className="h-[120px] lg:h-[240px] col-span-3">
                <p className="font-medium text-2xl lg:text-5xl">
                  Product Portfolio
                </p>
                <p className="text-sm lg:text-xl opacity-70 pt-3">
                  This is a sample copy to talk about the diverse products from
                  our portfolio.
                </p>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image alt="Rice" src={Rice} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Non Basmati Rice
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-xl overflow-clip">
                <Image alt="img1" src={Sugar} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Sugar
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-xl overflow-clip">
                <Image alt="img1" src={Onion} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Onions
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image
                  alt="Rice"
                  src={Turmeric}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Turmeric
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image
                  alt="Corriander"
                  src={Corriander}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Corriander
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Fenugric"
                  src={Fenugric}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Fenugric
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px]  relative rounded-xl overflow-clip">
                <Image
                  alt="Groundnuts"
                  src={GroundnutsImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Groundnuts
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px]  relative rounded-xl overflow-clip">
                <Image
                  alt="Green Cardamom"
                  src={GreenCardomomImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Green Cardamom
                </div>
              </div>
              <div className=" row-span-2 col-span-1 relative rounded-xl overflow-clip">
                <Image
                  alt="Red dried Chillies"
                  src={RedChilli}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Red dried Chillies
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Mustard"
                  src={MustardImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Mustard
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image
                  alt="Fennel"
                  src={FennelImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Fennel
                </div>
              </div>
              <div className=" row-span-2 col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Semi Husked coconut"
                  src={CoconutImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Semi Husked coconut
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px]  relative rounded-xl overflow-clip">
                <Image
                  alt="Tamarind"
                  src={TamarindImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Tamarind
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image
                  alt="Black Pepper"
                  src={BlackPepperImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Black Pepper
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Ginger"
                  src={GingerImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Ginger
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
              <div className=" row-span-2 col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Semi Husked coconut"
                  src={CoconutImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Semi Husked coconut
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image
                  alt="Chick Peas"
                  src={ChickPeasImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Chick Peas
                </div>
              </div>

              <div className="h-[120px] lg:h-[240px]  relative rounded-xl overflow-clip">
                <Image
                  alt="Maize"
                  src={MaizeImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Maize
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image
                  alt="Tapioca"
                  src={TapiocaImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Tapioca
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Cumin"
                  src={CuminImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Cumin
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      {/* TODO: depreciated need to remove */}
      <div className="container mx-auto mt-150 px-3 hidden">
        <Carousel
          className="!overflow-x-clip"
          navigation={CustomNavigation}
          prevArrow={CustomPrevArrow}
          nextArrow={CustomNextArrow}
        >
          <div className="relative ">
            <div className="grid grid-cols-4 grid-rows-3 gap-2 lg:gap-4">
              <div className=" col-span-2 self-center">
                <p className="font-medium text-2xl lg:text-5xl">
                  Product Portfolio
                </p>
                <p className="text-sm lg:text-xl opacity-70 pt-3">
                  This is a sample copy to talk about the diverse products from
                  our portfolio.
                </p>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image alt="Rice" src={Rice} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Non Basmati Rice
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image alt="img1" src={Sugar} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Sugar
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-xl overflow-clip">
                <Image alt="img1" src={Onion} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Onions
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image
                  alt="Rice"
                  src={Turmeric}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Turmeric
                </div>
              </div>
              <div className=" row-span-2 col-span-1 relative rounded-xl overflow-clip">
                <Image
                  alt="Red dried Chillies"
                  src={RedChilli}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image
                  alt="Corriander"
                  src={Corriander}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Corriander
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Fenugric"
                  src={Fenugric}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Fenugric
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="grid grid-cols-4 grid-rows-3 gap-2 lg:gap-4">
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Mustard"
                  src={MustardImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Mustard
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image
                  alt="Fennel"
                  src={FennelImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Fennel
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image
                  alt="Chick Peas"
                  src={ChickPeasImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Chick Peas
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px]  relative rounded-xl overflow-clip">
                <Image
                  alt="Green Cardamom"
                  src={GreenCardomomImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Green Cardamom
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Ginger"
                  src={GingerImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Ginger
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px]  relative rounded-xl overflow-clip">
                <Image
                  alt="Groundnuts"
                  src={GroundnutsImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Groundnuts
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px]  relative rounded-xl overflow-clip">
                <Image
                  alt="Tamarind"
                  src={TamarindImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Tamarind
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image
                  alt="Black Pepper"
                  src={BlackPepperImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Black Pepper
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Cumin"
                  src={CuminImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Cumin
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="grid grid-cols-4 grid-rows-3 gap-2 lg:gap-4">
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image
                  alt="Fennel"
                  src={FennelImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Fennel
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image
                  alt="Chick Peas"
                  src={ChickPeasImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Chick Peas
                </div>
              </div>
              <div className=" row-span-2 col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Semi Husked coconut"
                  src={CoconutImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Semi Husked coconut
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Ginger"
                  src={GingerImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Ginger
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px]  relative rounded-xl overflow-clip">
                <Image
                  alt="Tamarind"
                  src={TamarindImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Tamarind
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image
                  alt="Black Pepper"
                  src={BlackPepperImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Black Pepper
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px]  relative rounded-xl overflow-clip">
                <Image
                  alt="Maize"
                  src={MaizeImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Maize
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-xl overflow-clip">
                <Image
                  alt="Tapioca"
                  src={TapiocaImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Tapioca
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      {/* New carousel design */}
      <div className="container mx-auto mt-100 px-3 hidden lg:block">
        <Carousel
          className="!overflow-x-clip"
          navigation={CustomNavigation}
          prevArrow={CustomPrevArrow}
          nextArrow={CustomNextArrow}
        >
          <div className="relative ">
            <div className="grid grid-cols-6 grid-rows-2 gap-2 lg:gap-5">
              <div className="h-150 relative rounded-xl overflow-clip">
                <Image alt="Rice" src={Rice} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Non Basmati Rice
                </div>
              </div>
              {/* Onions */}
              <div className="col-span-2 row-span-2 relative rounded-xl overflow-clip">
                <Image alt="img1" src={Onion} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Onions
                </div>
              </div>
              {/* Turmeric */}
              <div className="col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Turmeric"
                  src={Turmeric}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Turmeric
                </div>
              </div>
              {/* Red dried Chillies */}
              <div className="row-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Red dried Chillies"
                  src={RedChilli}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Red dried Chillies
                </div>
              </div>
              {/* Sugar */}
              <div className=" relative rounded-xl overflow-clip">
                <Image alt="img1" src={Sugar} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Sugar
                </div>
              </div>
              {/* Corriander */}
              <div className="relative rounded-xl overflow-clip">
                <Image
                  alt="Corriander"
                  src={Corriander}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Corriander
                </div>
              </div>
              {/* Fenugric */}
              <div className="relative rounded-xl overflow-clip">
                <Image
                  alt="Fenugric"
                  src={Fenugric}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Fenugric
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="grid grid-cols-6 grid-rows-2 gap-2 lg:gap-5">
              {/* Mustard */}
              <div className="h-150 relative rounded-xl overflow-clip">
                <Image
                  alt="Mustard"
                  src={MustardImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Mustard
                </div>
              </div>

              {/* Fennel */}
              <div className="row-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Fennel"
                  src={FennelImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Fennel
                </div>
              </div>
              {/* Cumin */}
              <div className="row-span-2 col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Cumin"
                  src={CuminImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Cumin
                </div>
              </div>
              {/* Chick peas */}
              <div className=" relative rounded-xl overflow-clip">
                <Image
                  alt="Chick Peas"
                  src={ChickPeasImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Chick Peas
                </div>
              </div>
              {/* Tamarind */}
              <div className="  relative rounded-xl overflow-clip">
                <Image
                  alt="Tamarind"
                  src={TamarindImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Tamarind
                </div>
              </div>
              {/* Green Cardamom */}
              <div className="  relative rounded-xl overflow-clip">
                <Image
                  alt="Green Cardamom"
                  src={GreenCardomomImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Green Cardamom
                </div>
              </div>
              {/* Ginger */}
              <div className=" col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Ginger"
                  src={GingerImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Ginger
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="grid grid-cols-6 grid-rows-2 gap-2 lg:gap-5">
              {/* Black pepper */}
              <div className="row-span-2 col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Black Pepper"
                  src={BlackPepperImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Black Pepper
                </div>
              </div>
              {/* Groundnuts */}
              <div className="h-150  relative rounded-xl overflow-clip">
                <Image
                  alt="Groundnuts"
                  src={GroundnutsImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Groundnuts
                </div>
              </div>

              {/* Maize */}
              <div className="row-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Maize"
                  src={MaizeImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Maize
                </div>
              </div>
              {/* coconut */}
              <div className=" row-span-2 col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Semi Husked coconut"
                  src={CoconutImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Semi Husked coconut
                </div>
              </div>

              {/* Tapioca */}
              <div className="relative rounded-xl overflow-clip">
                <Image
                  alt="Tapioca"
                  src={TapiocaImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Tapioca
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      {/* New carousel design  Mobile */}
      <div className="container mx-auto mt-50 px-3 lg:hidden">
        <Carousel
          className="!overflow-x-clip"
          navigation={CustomNavigation}
          prevArrow={CustomPrevArrow}
          nextArrow={CustomNextArrow}
        >
          <div className="relative ">
            <div className="grid grid-cols-3 grid-rows-2 gap-3">
              {/* Basmathi Rice */}
              <div className="h-[100px] relative rounded-xl overflow-clip">
                <Image alt="Rice" src={Rice} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Non Basmati Rice
                </div>
              </div>
              {/* Onions */}
              <div className="col-span-2 row-span-2 relative rounded-xl overflow-clip">
                <Image alt="img1" src={Onion} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Onions
                </div>
              </div>
              {/* Sugar */}
              <div className=" relative rounded-xl overflow-clip">
                <Image alt="img1" src={Sugar} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Sugar
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-3 grid-rows-2 gap-3">
              {/* Turmeric */}
              <div className="col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Turmeric"
                  src={Turmeric}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Turmeric
                </div>
              </div>
              {/* Red dried Chillies */}
              <div className="row-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Red dried Chillies"
                  src={RedChilli}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Red dried Chillies
                </div>
              </div>

              {/* Corriander */}
              <div className="relative rounded-xl overflow-clip h-[100px]">
                <Image
                  alt="Corriander"
                  src={Corriander}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Corriander
                </div>
              </div>
              {/* Fenugric */}
              <div className="relative rounded-xl overflow-clip">
                <Image
                  alt="Fenugric"
                  src={Fenugric}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Fenugric
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="grid grid-cols-3 grid-rows-2 gap-3">
              {/* Mustard */}
              <div className="h-100 relative rounded-xl overflow-clip">
                <Image
                  alt="Mustard"
                  src={MustardImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Mustard
                </div>
              </div>
              {/* Cumin */}
              <div className="row-span-2 col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Cumin"
                  src={CuminImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Cumin
                </div>
              </div>
              {/* Green Cardamom */}
              <div className="  relative rounded-xl overflow-clip">
                <Image
                  alt="Green Cardamom"
                  src={GreenCardomomImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Green Cardamom
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="grid grid-cols-3 grid-rows-2 gap-3">
              {/* Fennel */}
              <div className="row-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Fennel"
                  src={FennelImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Fennel
                </div>
              </div>

              {/* Chick peas */}
              <div className="h-100 relative rounded-xl overflow-clip">
                <Image
                  alt="Chick Peas"
                  src={ChickPeasImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Chick Peas
                </div>
              </div>
              {/* Tamarind */}
              <div className="  relative rounded-xl overflow-clip">
                <Image
                  alt="Tamarind"
                  src={TamarindImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Tamarind
                </div>
              </div>

              {/* Ginger */}
              <div className=" col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Ginger"
                  src={GingerImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Ginger
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="grid grid-cols-3 grid-rows-2 gap-3">
              {/* Black pepper */}
              <div className="row-span-2 col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Black Pepper"
                  src={BlackPepperImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Black Pepper
                </div>
              </div>
              {/* Groundnuts */}
              <div className="h-100  relative rounded-xl overflow-clip">
                <Image
                  alt="Groundnuts"
                  src={GroundnutsImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Groundnuts
                </div>
              </div>
              {/* Tapioca */}
              <div className="relative rounded-xl overflow-clip">
                <Image
                  alt="Tapioca"
                  src={TapiocaImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Tapioca
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="grid grid-cols-3 grid-rows-2 gap-3">
              {/* Maize */}
              <div className="row-span-2 relative rounded-xl overflow-clip h-[212px]">
                <Image
                  alt="Maize"
                  src={MaizeImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Maize
                </div>
              </div>
              {/* coconut */}
              <div className=" row-span-2 col-span-2 relative rounded-xl overflow-clip">
                <Image
                  alt="Semi Husked coconut"
                  src={CoconutImage}
                  fill
                  className="object-cover"
                />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Semi Husked coconut
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
