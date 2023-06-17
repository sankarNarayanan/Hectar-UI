"use client";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Yet another ligtbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import plugins if you need

import Image from "next/image";

import Onion from "@/assets/images/onion.jpg";
import Corriander from "@/assets/images/corriander.jpg";
import Fenugric from "@/assets/images/fenugric.jpg";
import RedChilli from "@/assets/images/redchilli.jpg";
import Sugar from "@/assets/images/sugar.jpg";
import Turmeric from "@/assets/images/turmeric.jpg";
import Rice from "@/assets/images/rice.jpg";
import GreenCardomomImage from "@/assets/images/green-cardamom-image.jpg";
import MustardImage from "@/assets/images/mustard-image.jpg";
import GroundnutsImage from "@/assets/images/groundnuts-image.jpg";
import FennelImage from "@/assets/images/fennel-image.jpg";
import CoconutImage from "@/assets/images/coconut-image.jpg";
import TamarindImage from "@/assets/images/tamarind-image.jpg";
import BlackPepperImage from "@/assets/images/black-pepper-image.jpg";
import GingerImage from "@/assets/images/ginger-image.jpg";

import ChickPeasImage from "@/assets/images/chickpeas-image.jpg";
import MaizeImage from "@/assets/images/maize-image.jpg";
import CuminImage from "@/assets/images/cumin-image.jpg";
import TapiocaImage from "@/assets/images/tapioca-image.jpg";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Carousel } from "@material-tailwind/react";

export function ProductPortfolioOld() {
  const [openIndex, setOpen] = useState(false);
  return (
    <div className="container mx-auto py-[100px]">
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-end grow-0 items-center">
          <div className={` m-2 grow text-center w-[${Onion.width}px]`}>
            <h2 className="text-5xl font-medium">Product Portfolio</h2>
            <p className="text-xl pt-3 opacity-70">
              This is a sample copy to talk about the diverse <br />
              products from our portfolio.
            </p>
          </div>
          <Slide triggerOnce>
            <div
              className={` m-2 relative rounded-3xl overflow-hidden w-[${Rice.width}px]`}
            >
              <a onClick={() => setOpen(0)}>
                <Image alt="Rice" src={Rice} />
                <div className="absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Non Basmati Rice
                </div>
              </a>
            </div>
            <div
              className={` m-2 relative rounded-3xl overflow-hidden w-[${Onion.width}px]`}
            >
              <a onClick={() => setOpen(1)}>
                <Image alt="img1" src={Onion} />
                <div className="absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Onions
                </div>
              </a>
            </div>
            <div
              className={` m-2 relative rounded-3xl overflow-hidden w-[${Turmeric.width}px]`}
            >
              <a onClick={() => setOpen(2)}>
                <Image alt="img1" src={Turmeric} />
                <div className="absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Turmeric
                </div>
              </a>
            </div>
            <div
              className={` m-2 relative rounded-3xl overflow-hidden w-[${Corriander.width}px]`}
            >
              <a onClick={() => setOpen(3)}>
                <Image alt="img1" src={Corriander} />
                <div className="absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Corriander
                </div>
              </a>
            </div>
            <div
              className={` m-2 relative rounded-3xl overflow-hidden w-[${Fenugric.width}px]`}
            >
              <a onClick={() => setOpen(4)}>
                <Image alt="img1" src={Fenugric} />
                <div className="absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Fenugreek
                </div>
              </a>
            </div>
          </Slide>
        </div>
        <div className={`flex flex-col shrink-0 items-center`}>
          <Slide triggerOnce>
            <div
              className={` m-2 relative rounded-3xl overflow-hidden w-[${Sugar.width}px] h-[${Sugar.height}px]`}
            >
              <a onClick={() => setOpen(5)}>
                <Image alt="img1" src={Sugar} />
                <div className="absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Sugar
                </div>
              </a>
            </div>
            <div
              className={` m-2 relative rounded-3xl overflow-hidden w-[${RedChilli.width}px] h-[${RedChilli.height}px]`}
            >
              <a onClick={() => setOpen(6)}>
                <Image alt="img1" src={RedChilli} />
                <div className="absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Red Dried Chillie
                </div>
              </a>
            </div>
          </Slide>
        </div>
      </div>

      <Lightbox
        open={openIndex !== false}
        close={() => setOpen(false)}
        index={openIndex}
        slides={[
          { src: Rice.src },
          { src: Onion.src },
          { src: Turmeric.src },
          { src: Corriander.src },
          { src: Fenugric.src },
          { src: Sugar.src },
          { src: RedChilli.src },
        ]}
      />
    </div>
  );
}

export default function ProductPortfolio() {
  const [openIndex, setOpen] = useState(false);
  return (
    <>
      <div className="container mx-auto py-100 px-3 lg:hidden">
        <Carousel>
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
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
                <Image alt="Rice" src={Rice} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Non Basmati Rice
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-lg overflow-clip">
                <Image alt="img1" src={Sugar} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Sugar
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-lg overflow-clip">
                <Image alt="img1" src={Onion} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Onions
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px]  relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px]  relative rounded-lg overflow-clip">
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
              <div className=" row-span-2 col-span-1 relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
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
              <div className=" row-span-2 col-span-2 relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px]  relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-lg overflow-clip">
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
              <div className=" row-span-2 col-span-2 relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
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

              <div className="h-[120px] lg:h-[240px]  relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-lg overflow-clip">
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
      <div className="container mx-auto py-100 px-3 hidden lg:block">
        <Carousel>
          <div className="relative ">
            <div className="grid grid-cols-4 grid-rows-3 gap-2">
              <div className=" col-span-2 self-center">
                <p className="font-medium text-2xl lg:text-5xl">
                  Product Portfolio
                </p>
                <p className="text-sm lg:text-xl opacity-70 pt-3">
                  This is a sample copy to talk about the diverse products from
                  our portfolio.
                </p>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
                <Image alt="Rice" src={Rice} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Non Basmati Rice
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
                <Image alt="img1" src={Sugar} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Sugar
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-lg overflow-clip">
                <Image alt="img1" src={Onion} fill className="object-cover" />
                <div className="text-xs absolute bottom-0 left-0 w-full h-14 z-10 text-white justify-center items-end flex pb-3 bg-gradient-to-b from-transparent to-black">
                  Onions
                </div>
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
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
              <div className=" row-span-2 col-span-1 relative rounded-lg overflow-clip">
                <Image
                  alt="Red dried Chillies"
                  src={RedChilli}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-lg overflow-clip">
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
            <div className="grid grid-cols-4 grid-rows-3 gap-2">
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px]  relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px]  relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px]  relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-lg overflow-clip">
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
            <div className="grid grid-cols-4 grid-rows-3 gap-2">
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
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
              <div className=" row-span-2 col-span-2 relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] col-span-2 relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px]  relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px]  relative rounded-lg overflow-clip">
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
              <div className="h-[120px] lg:h-[240px] relative rounded-lg overflow-clip">
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
    </>
  );
}
