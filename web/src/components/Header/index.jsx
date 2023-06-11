import HorizontalLogo from "@/assets/logo/Horizontal_Logo.png";
import Image from "next/image";
import Button from "../Button";

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="flex my-12 justify-between">
        <Image alt="Header Logo" src={HorizontalLogo} />
        <div>
          <Button size="xs" className="me-3">
            Get Private Beta Access
          </Button>
          <Button variant="outline" size="xs">
            Get Instant Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
