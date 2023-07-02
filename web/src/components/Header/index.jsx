"use client";
import HectarLogo from "@/assets/svg/hectar-logo.svg";
import Image from "next/image";
import Button from "../Button";
import GetPrivateAccessForm from "../GetPrivateAcessForm";
import { useState } from "react";
import { useGlobalState } from "@/redux/globalState";

export default function Header() {
  // const [drawerOpen, setDrawer] = useState(false);
  const [drawerOpen, setDrawer] = useGlobalState('betaAccessDrawer', false);

  return (
    <div className="container mx-auto px-4 lg:px-0 relative z-[1]">
      <div className="flex my-5 lg:my-12 justify-between">
        <HectarLogo alt="Header Logo" className="w-100 lg:w-[174px]" />
        <div>
          <Button
            size="xs"
            className="me-3 !bg-[#FF9D01] !text-black"
            onClick={() => setDrawer(true)}
          >
            <span className="">Get Beta Access</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
