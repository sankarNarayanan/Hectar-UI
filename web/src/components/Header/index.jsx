import HectarLogo from "@/assets/svg/hectar-logo.svg";
import Image from "next/image";
import Button from "../Button";

export default function Header() {
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <div className="flex my-12 justify-between">
        <Image
          alt="Header Logo"
          src={HectarLogo}
          className="w-100 lg:w-auto"
        />
        <div>
          <Button size="xs" className="me-3">
            <span className="hidden lg:inline">Get Private Beta Access</span>
            <span className="lg:hidden">Beta Access</span>
          </Button>
          <Button variant="outline" size="xs" className="hidden lg:inline">
            Get Instant Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
