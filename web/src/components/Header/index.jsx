"use client";
import HectarLogo from "@/assets/svg/hectar-logo.svg";
import Button from "../Button";
import { useGlobalState } from "@/redux/globalState";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  // const [drawerOpen, setDrawer] = useState(false);
  const [drawerOpen, setDrawer] = useGlobalState("betaAccessDrawer", false);

  const pathname = usePathname();

  return (
    <div className="container mx-auto px-4 lg:px-0 relative z-[1]">
      <div className="flex my-5 lg:my-30 justify-between">
        <Link href="/">
          <HectarLogo alt="Header Logo" className="w-100 lg:w-[200px]" />
        </Link>
        <div>
          {pathname === "/" && (
            <Button
              size="xs"
              className="me-3 !bg-[#FF9D01] !text-black !py-3"
              onClick={() => setDrawer(true)}
            >
              <span className="">Get Beta Access</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
