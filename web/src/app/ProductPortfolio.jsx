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
import { useState } from "react";
import { Slide } from "react-awesome-reveal";

export default function ProductPortfolio() {
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
