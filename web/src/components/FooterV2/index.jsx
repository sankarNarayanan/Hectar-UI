import Image from "next/image";
import HectarLogo from "@/assets/images/logo-mark.png";
import FooterShip from "@/assets/images/img-ship-footer.svg";
import TwitterImage from "@/assets/svg/icon-twitter.svg";
import LinkedImage from "@/assets/svg/icon-linked.svg";
import YoutubeImage from "@/assets/svg/icon-youtube.svg";

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9] w-screen overflow-x-clip">
      <div className="ml-150 flex justify-between">
        <div className="my-24">
          <Image alt="Footer Logo" className="w-162 h-40" src={HectarLogo} />
        </div>
        <div>
          <FooterShip />
        </div>
      </div>
      <div className="h-px bg-[#0000001A] mx-150"></div>
      <div className="flex justify-between">
        <div className="flex ml-150">
          <div className="pr-7 py-7">About</div>
          <div className="pr-7 py-7">Blog</div>
          <div className="pr-7 py-7">Contact us</div>
          <div className="pr-7 py-7">We're Hiring</div>
        </div>
        <div className="mr-150 flex my-7">
          <div className="h-6 w-6 mr-7">
            <TwitterImage />
          </div>
          <div className="h-6 w-6 mr-7">
            <LinkedImage />
          </div>
          <div className="h-6 w-6">
            <YoutubeImage />
          </div>
        </div>
      </div>
    </footer>
  );
}
