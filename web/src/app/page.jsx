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
import Offices from "./Offices";

const CustomTheme = {
  typography: {
    styles: {
      variants: {
        h1: {
          fontSize: "text-[1.375rem] lg:text-[2.5rem]",
          className: "leading-[140%]",
        },
        h2: {
          fontSize: "text-[1.375rem] lg:text-4xl font-medium",
          className: "leading-[130%] font-normal",
        },
        lead: {
          className: "opacity-70 leading-[130%] text-xs lg:text-base",
        },
        paragraph: {
          fontSize: "lg:text-lg",
          className: "opacity-70",
        },
      },
    },
  },
};

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
    <ThemeProvider value={CustomTheme}>
      <div className="w-screen overflow-x-clip">
        <HeroBanner setDrawer={setDrawer} />
        {/* <DashboardDummy /> */}
        <WhyHectar />
        <ProductPortfolio />
        <Review setDrawer={setDrawer} />
        <Analytics />
        <Vision />
        <Offices />
        <ContactFormDrawer drawerOpen={drawerOpen} setDrawer={setDrawer} />
      </div>
    </ThemeProvider>
  );
}
