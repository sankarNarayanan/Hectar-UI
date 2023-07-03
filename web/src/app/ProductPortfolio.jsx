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

import { Carousel, Typography } from "@/components";

export default function ProductPortfolio() {
  return (
    <section
      id="ProductPortfolio"
      className="mt-50 py-50 lg:py-100 bg-[#F9F9F9]"
    >
      <Typography
        variant="h2"
        className="text-center text-[1.325rem] lg:text-4xl font-medium"
      >
        Product Portfolio
      </Typography>
      <Typography className="text-center mt-2.5 lg:mt-30">
        Quality audited by us and packaged to your preferences.
      </Typography>

      {/* New carousel design */}
      <div className="container mx-auto mt-100 px-3 hidden lg:block">
        <Carousel
          className="!overflow-x-clip"
          navigation={Carousel.CustomNavigation}
          prevArrow={Carousel.CustomPrevArrow}
          nextArrow={Carousel.CustomNextArrow}
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
          navigation={Carousel.CustomNavigation}
          prevArrow={Carousel.CustomPrevArrow}
          nextArrow={Carousel.CustomNextArrow}
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
