import HorizontalLogo from "@/assets/logo/Horizontal_Logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#DBDAE1]">
      <div className="container mx-auto my-8">
        <div className="flex p-4 justify-between items-center">
          <div>
            <Image src={HorizontalLogo} />
            <p className="mt-6">Support@hectar.global</p>
            <p className="mt-3">+91 80561 51588</p>
          </div>
          <div className="text-right">
            <p>Rice  |  Spices  |   Pulses  |  Sugar  |  Flour & Starches  |  Coconuts</p>
            <p className="mt-6">Terms and Conditions  |  Certificates  |  Contact Us</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
