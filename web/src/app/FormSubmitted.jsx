import Image from "next/image";
import ImageSubmitted from "@/assets/svg/img-submitted.svg";
import { Typography } from "@material-tailwind/react";
import { Button } from "@/components";

export default function FormSubmitted({setDrawer}) {
  return (
    <div className="flex flex-col items-center align-middle justify-center h-full p-30">
      <Image alt="Image Submitted" src={ImageSubmitted} />
      <Typography variant="h4" className="font-medium pt-30">
        Request Submitted
      </Typography>
      <Typography variant="paragraph" className="opacity-70 font-normal pt-3 text-center">
        Your request has been successfully submitted and our
        <br /> team is looking into it. You will hear back from our
        <br /> team shortly.
      </Typography>
      <Button onClick={() => setDrawer(false)} className="w-full mt-40">Close</Button>
    </div>
  );
}
