"use client";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";

import Onion from "@/assets/images/onion.jpg";
import Corriander from "@/assets/images/corriander.jpg";
import Fenugric from "@/assets/images/fenugric.jpg";
import RedChilli from "@/assets/images/redchilli.jpg";
import Sugar from "@/assets/images/sugar.jpg";
import Turmeric from "@/assets/images/turmeric.jpg";
import Rice from "@/assets/images/rice.jpg";

export default function ProductPortfolio() {
  console.log("onion", Onion);
  return (
    <div className="container mx-auto pt-[100px]">
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-end grow-0 items-center">
            <div className={` m-2 w-[${Onion.width}px]`}>
              <h2 className="text-5xl">Product Portfolio</h2>
              <p>
                This is a sample copy to talk about the diverse <br />
                products from our portfolio.
              </p>
            </div>
            <div className={` m-2 w-[${Rice.width}px]`}>
              <a href='/rice.jpg'>
                <Image alt="Rice" src={Rice} />
              </a>
            </div>
            <div className={` m-2 w-[${Onion.width}px]`}>
              <a href={Onion.src}>
                <Image alt="img1" src={Onion} />
              </a>
            </div>
            <div className={` m-2 w-[${Turmeric.width}px]`}>
              <a href={Turmeric.src}>
                <Image alt="img1" src={Turmeric} />
              </a>
            </div>
            <div className={` m-2 w-[${Corriander.width}px]`}>
              <a href={Corriander.src}>
                <Image alt="img1" src={Corriander} />
              </a>
            </div>
            <div className={` m-2 w-[${Fenugric.width}px]`}>
              <a href={Fenugric.src}>
                <Image alt="img1" src={Fenugric} />
              </a>
            </div>
          </div>
          <div className={`flex flex-col shrink-0 items-center`}>
            <div className={` m-2 w-[${Sugar.width}px] h-[${Sugar.height}px]`}>
              <a href={Sugar.src}>
                <Image alt="img1" src={Sugar} />
              </a>
            </div>
            <div
              className={` m-2 w-[${RedChilli.width}px] h-[${RedChilli.height}px]`}
            >
              <a href={RedChilli.src}>
                <Image alt="img1" src={RedChilli} />
              </a>
            </div>
          </div>
        </div>
      </LightGallery>
    </div>
  );
}
