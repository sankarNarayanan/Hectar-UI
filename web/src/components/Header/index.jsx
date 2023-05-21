import HorizontalLogo from "@/assets/logo/Horizontal_Logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="float-right">RightSide</div>
      <Image src={HorizontalLogo} />
    </div>
  );
}
