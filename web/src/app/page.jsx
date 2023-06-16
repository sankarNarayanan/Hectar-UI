"use client";
import { useState } from "react";
import Analytics from "./Analytics";
import GetStarted from "./GettingStarted";
import HeroBanner from "./HeroBanner";
import ProductPortfolio from "./ProductPortfolio";
import Review from "./Review";
import Vision from "./Vision";
import WhyHectar from "./WhyHectar";
import ContactFormDrawer from "./ContactFormDrawer";
import { ThemeProvider } from "@material-tailwind/react";

export function DashboardDummy() {
  return (
    <div className="container mx-auto bg-gray-200 w-full h-[500px] flex items-center justify-center">
      <p className="text-white text-3xl">Work In progress Dash board</p>
    </div>
  );
}

/**
 * Hone Page Component
 */
export default function HomePage() {
  const [drawerOpen, setDrawer] = useState(false);
  return (
    <ThemeProvider>
      <div className="w-screen overflow-hidden">
        <HeroBanner setDrawer={setDrawer} />
        {/* <DashboardDummy /> */}
        <ProductPortfolio />
        <WhyHectar />
        <Review />
        <Analytics />
        <Vision />
        <GetStarted />
        <ContactFormDrawer drawerOpen={drawerOpen} setDrawer={setDrawer} />
      </div>
    </ThemeProvider>
  );
}
