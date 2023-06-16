import Button from "@/components/Button";
import { Chip, Typography } from "@/components";
import Link from "next/link";
import linesLeft from "@/assets/lines_left.svg";
import linesRight from "@/assets/lines_right.svg";
import Image from "next/image";

import { Fade } from "react-awesome-reveal";
import ToFromImage from "@/assets/svg/to_from.svg";
import LocationImage from "@/assets/svg/location.svg";
import DateImage from "@/assets/svg/date.svg";
import ShippingModeImage from "@/assets/svg/shipping_mode.svg";
import AutoComplete from "@/components/Form/AutoComplete";
import Form from "@/components/Form";
import ShippingMode from "./ShippingMode";
import GetQuoteForm from "./GetQuoteForm";

const localtionItems = [
  { title: "Chennai, In", subtitle: "Port Of madras" },
  { title: "Mumbai, In", subtitle: "Port Of mumbai" },
  { title: "Kolkatta, In", subtitle: "Port Of Kolkatta" },
  { title: "Vizag, In", subtitle: "Port Of vizag" },
  { title: "Cochi, In", subtitle: "Port Of cochi" },
  { title: "Goa, In", subtitle: "Port Of Goa" },
];

/**
 * Hero banner Component
 */
export default function HeroBanner({ setDrawer }) {
  return (
    <section className="px-4 lg:px-0">
      <div className="container relative mx-auto bg-grad-primary pb-100 rounded-2xl">
        <div>
          <Image
            className="absolute left-0 bottom-[70px] hidden lg:block"
            src={linesLeft}
            alt="left design icons"
          />
          <Image
            className="absolute right-0 top-[150px] hidden lg:block"
            src={linesRight}
            alt="right design icons"
          />
        </div>
        <Fade triggerOnce cascade>
          <h1 className="text-2xl lg:text-[64px] text-white pt-[100px] text-center font-light lg:leading-[80px]">
            Agri Commodities Trade, <br />
            <span className="font-bold">Reimagined! 🚜</span>
          </h1>

          <p className="text-[#FFFEFF] opacity-70 text-center text-sm lg:text-2xl pt-5">
            Enabling global wholesalers, manufacturers and retailers
            <br />
            source efficiently.
          </p>

          {/* <div className="mx-130 bg-white rounded-lg p-30">
          <div className="flex gap-2">
            <Chip
              value="Rates"
              className="rounded-full bg-[#0174FA] py-1 px-3"
            />
            <Chip
              value="Tracking"
              className="rounded-full bg-[#EFEFEF] text-black py-1 px-3 !opacity-60"
            />
            <Chip
              value="Schedules"
              className="rounded-full bg-[#EFEFEF] text-black py-1 px-3 !opacity-60"
            />
            <Link href="" className="underline ps-3">
              Request A Quote
            </Link>
          </div>
          <div className="border my-30 w-full p-20 flex">
            <AutoComplete
              items={localtionItems}
              placeholder="Enter City or Port"
              label={() => <AutoComplete.Label content="From" imageSrc={LocationImage} />}
            />
            <div>
              <Image src={ToFromImage} />
            </div>
            <AutoComplete
              items={localtionItems}
              placeholder="Enter City or Port"
              label={() => <AutoComplete.Label content="To" imageSrc={LocationImage} />}
            />

            <AutoComplete
              items={[
                "Request",
                "Quote",
                "Quotexxx",
                "Quote  sasas",
                "Quote xxx",
                "Quote yyy",
              ]}
              placeholder="Date"
              label={() => <Label content="Date" imageSrc={DateImage} />}
            />

            <Form.DatePicker/>

            <ShippingMode/>
          </div>
        </div> */}
          <GetQuoteForm />
        </Fade>
      </div>
    </section>
  );
}
