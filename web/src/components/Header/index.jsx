"use client";
import HectarLogo from "@/assets/svg/hectar-logo.svg";
import Image from "next/image";
import Button from "../Button";
import GetPrivateAccessForm from "../GetPrivateAcessForm";
import { useState } from "react";

export default function Header() {
  const [drawerOpen, setDrawer] = useState(false);

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <div className="flex my-12 justify-between">
        <Image alt="Header Logo" src={HectarLogo} className="w-100 lg:w-auto" />
        <div>
          <Button size="xs" className="me-3" onClick={() => setDrawer(true)}>
            <span className="hidden lg:inline">Get Private Beta Access</span>
            <span className="lg:hidden">Beta Access</span>
          </Button>
        </div>
      </div>
      <GetPrivateAccessForm drawerOpen={drawerOpen} setDrawer={setDrawer} />
    </div>
  );
}
