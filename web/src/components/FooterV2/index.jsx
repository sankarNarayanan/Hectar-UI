import HectarLogo from "@/assets/svg/hectar-logo.svg";
import FooterShip from "@/assets/images/img-ship-footer.svg";
import TwitterImage from "@/assets/svg/icon-twitter.svg";
import LinkedImage from "@/assets/svg/icon-linked.svg";
import YoutubeImage from "@/assets/svg/icon-youtube.svg";


export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9] w-screen overflow-x-clip">
      <div className="bg-[url('/curvyborder.svg')] w-screen h-4 relative -top-0 lg:-top-2.5">
      </div>
      <div className="h-100 lg:h-[232px] w-screen relative">
        <div className="container flex items-center px-4 h-full">
          <HectarLogo className="w-[120px] lg:w-[162px] align-middle items-center" />
        </div>

        <FooterShip className="absolute right-0 bottom-0 h-full" />
      </div>
      <div className="h-px w-full px-4">
        <hr className="border-black/10" />
      </div>
      <div className="container flex justify-between px-4 py-5 lg:py-30">
        <div className="grid grid-cols-3 lg:flex gap-3 lg:gap-30 text-xs lg:text-base">
          <div>About</div>
          <div>Blog</div>
          <div>Contact us</div>
          <div>We're Hiring</div>
        </div>
        <div className="flex gap-3 self-start">
          <TwitterImage className="w-4 lg:w-6" />

          <LinkedImage className="w-4 lg:w-6" />

          <YoutubeImage className="w-4 lg:w-6" />
        </div>
      </div>
    </footer>
  );
}
