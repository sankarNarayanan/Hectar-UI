"use client";
import Analytics from "./Analytics";
import GetStarted from "./GettingStarted";
import HeroBanner from "./HeroBanner";
import ProductPortfolio from "./ProductPortfolio";
import Review from "./Review";
import Vision from "./Vision";
import WhyHectar from "./WhyHectar";

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
  return (
    <>
      <HeroBanner />
      <DashboardDummy />
      <ProductPortfolio />
      <WhyHectar />
      <Review />
      <Analytics />
      <Vision />
      <GetStarted />
    </>
  );
}
