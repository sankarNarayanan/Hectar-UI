import HorizontalLogo from "@/assets/logo/Horizontal_Logo.png";
import InstagramImage from "@/assets/svg/icon-instagram.svg";
import FacebookImage from "@/assets/svg/icon-facebook.svg";
import TwitterImage from "@/assets/svg/icon-twitter.svg";
import LinkedinImage from "@/assets/svg/icon-linkedin.svg";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#DBDAE1]">
      <div className="container mx-auto mt-8">
        <div className="flex p-5 lg:justify-between lg:items-center flex-col lg:flex-row">
          <div className="lg:mt-30 flex w-full justify-between lg:flex-col">
            <div>
              <Image alt="Footer Logo" className="w-100 lg:w-auto" src={HorizontalLogo} />
              <p className="mt-3 lg:mt-6 text-sm">Support@hectar.global</p>
              <p className="lg:mt-3 text-sm">+91 80561 51588</p>
            </div>
            <div className="flex lg:mt-8 self-start">
              <Image
                className="mr-4 lg:mr-8 w-6 lg:w-auto"
                src={InstagramImage}
                alt="Instagram Icon"
              />
              <Image className="mr-4 lg:mr-8 w-6 lg:w-auto" src={FacebookImage} alt="Facebook Icon" />
              <Image className="mr-4 lg:mr-8 w-6 lg:w-auto" src={TwitterImage} alt="Twitter Icon" />
              <Image className=" lg:mr-8 w-6 lg:w-auto" src={LinkedinImage} alt="Linkedin Icon" />
            </div>
          </div>
          <div className="lg:text-right mt-3 w-full">
            <p className="text-xs lg:text-base">Rice | Spices | Pulses | Sugar | Flour & Starches | Coconuts</p>
            <p className="mt-3 lg:mt-6 text-xs lg:text-base">
              Terms and Conditions | Certificates | Contact Us
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
