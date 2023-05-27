import HorizontalLogo from "@/assets/logo/Horizontal_Logo.png";
import InstagramImage from "@/assets/images/icon-instagram.svg";
import FacebookImage from "@/assets/images/icon-facebook.svg";
import TwitterImage from "@/assets/images/icon-twitter.svg";
import LinkedinImage from "@/assets/images/icon-linkedin.svg";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#DBDAE1]">
      <div className="container mx-auto mt-8">
        <div className="flex p-4 justify-between items-center">
          <div>
            <Image src={HorizontalLogo} />
            <p className="mt-6">Support@hectar.global</p>
            <p className="mt-3">+91 80561 51588</p>
            <div className="flex mt-8">
                <Image className="me-8" src={InstagramImage} alt="Instagram Icon"/>
                <Image className="me-8" src={FacebookImage} alt="Facebook Icon"/>
                <Image className="me-8" src={TwitterImage} alt="Twitter Icon"/>
                <Image className="me-8" src={LinkedinImage} alt="Linkedin Icon"/>
            </div>
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
