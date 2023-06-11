import Image from "next/image";
import ShippingModeImage from "@/assets/svg/shipping_mode.svg";
import ArrowDownIcon from "@/assets/svg/arrow_down.svg";
import LocationImage from "@/assets/svg/location.svg";
import { Chip, Popover, PopoverContent, PopoverHandler } from "@/components";
import Form, { useForm } from "@/components/Form";

export default function ShippingMode() {
  const methods = useForm();
  return (
    <Popover
      placement="bottom-end"
      animate={{
        mount: { scale: 1, y: -50 },
        unmount: { scale: 0, y: -50 },
      }}
    >
      <PopoverHandler>
        <div className="flex">
          <div>
            <div className="flex">
              <Image src={ShippingModeImage} />
              <span className="ps-2 opacity-30 text-sm">Shipping mode</span>
            </div>
            <div className="text-xl font-medium">Full Container Load</div>
            <div className="text-sm font-medium">20' Standard | SEA</div>
          </div>
          <div className="shrink flex items-center">
            <Image src={ArrowDownIcon} />
          </div>
        </div>
      </PopoverHandler>
      <PopoverContent className="w-full max-w-[560px]">
        <div>
          <div className="flex gap-2">
            <Chip value="Sea" className="rounded-full bg-[#0174FA] py-1 px-3" />
            <Chip
              value="Land"
              className="rounded-full bg-[#EFEFEF] text-black py-1 px-3 !opacity-60"
            />
            <Chip
              value="Air"
              className="rounded-full bg-[#EFEFEF] text-black py-1 px-3 !opacity-60"
            />
          </div>
          <div className="my-30">
            <Form methods={methods} onSubmit={() => console.log("Submitted")}>
              <Form.Select
                name="namee"
                label={() => (
                  <Form.Select.Label
                    content="Transportation By"
                    imageSrc={LocationImage}
                  />
                )}
                options={[
                  {
                    value: "Full Container Load",
                    label: "Full Container Load",
                  },
                  {
                    value: "Less Container Load",
                    label: "Less Container Load",
                  },
                  { value: "Bulk", label: "Bulk" },
                ]}
              />
              <Form.Select
                name="namee 2"
                label={() => (
                  <Form.Select.Label content="Type" imageSrc={LocationImage} />
                )}
                options={[
                  {
                    value: "20' Standard",
                    label: "20' Standard",
                  },
                  {
                    value: "40' Standard",
                    label: "40' Standard",
                  },
                  { value: "60' Standard", label: "60' Standard" },
                ]}
              />
            </Form>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
