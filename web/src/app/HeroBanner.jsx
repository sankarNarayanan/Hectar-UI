import Button from "@/components/Button";
import Link from "next/link";
import linesLeft from "@/assets/lines_left.svg";
import linesRight from "@/assets/lines_right.svg";
import Image from "next/image";

import { Fade } from "react-awesome-reveal";

/**
 * Hero banner Component
 */
export default function HeroBanner() {
  return (
    <div className="container relative mx-auto bg-grad-primary pb-[100px] rounded-t-2xl">
      <div>
        <Image
          className="absolute left-0 bottom-[70px]"
          src={linesLeft}
          alt="left design icons"
        />
        <Image
          className="absolute right-0 top-[150px]"
          src={linesRight}
          alt="right design icons"
        />
      </div>
      <Fade cascade>
        <h1 className="text-[64px] text-white pt-[100px] text-center font-light leading-[80px]">
          Agri Commodities Trade, <br />
          <span className="font-bold">Reimagined! 🚜</span>
        </h1>

        <p className="text-[#FFFEFF] opacity-70 text-center text-2xl pt-5">
          Enabling global wholesalers, manufacturers and retailers
          <br />
          source efficiently.
        </p>
        <div className="flex justify-center items-center pt-[50px]">
          <Button>Get Instant Quote</Button>
          <Link href="/" className="text-xl ps-5 text-white underline">
            How It works
          </Link>
        </div>
      </Fade>
    </div>
  );
}
