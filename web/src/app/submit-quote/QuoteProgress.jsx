import SubmittedBlackImage from "@/assets/svg/img-submitted-black.svg";
import { useEffect } from "react";
import AIBlobImage from "@/assets/svg/img-ai-blob.svg";
import CompletedIcon from "@/assets/svg/completed-icon.svg";
import { Typography } from "@/components";
import { Fade, Zoom } from "react-awesome-reveal";

export default function QuoteProgress({
  quoteResult,
  loadingState,
  setLoadingState,
}) {
  const loadingStateArray = [
    "analysing",
    "analysingDone",
    "computing",
    "computingDone",
    "optimizing",
    "optimizingDone",
    "completed",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingState((loadingState) => {
        if (
          loadingStateArray.indexOf(loadingState) <
          loadingStateArray.length - 1
        ) {
          return loadingStateArray[loadingStateArray.indexOf(loadingState) + 1];
        }
        clearInterval(interval);
        return loadingState;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (loadingState !== "completed") {
    return (
      <div className="self-center text-center p-4 lg:p-50 shrink-0 lg:w-1/2">
        {["analysing", "computing", "optimizing"].includes(loadingState) && (
          //   <Fade delay={200}>
          <AIBlobImage className="w-[80px] mx-auto animate-spin" />
          //   </Fade>
        )}
        {["analysingDone", "computingDone", "optimizingDone"].includes(
          loadingState
        ) && (
          <Zoom delay={200}>
            <CompletedIcon className="w-[80px] mx-auto" />
          </Zoom>
        )}

        {["analysing", "analysingDone"].includes(loadingState) && (
          <>
            <Typography variant="h2" className="text-xl mt-30">
              Analysing Crop Arrivals
            </Typography>
            <Typography className="mt-2.5 opacity-70 lg:text-base">
              Our algorithms analyse various data sources to provide
              comprehensive understanding of new stock arrivals
            </Typography>
          </>
        )}

        {["computing", "computingDone"].includes(loadingState) && (
          <>
            <Typography variant="h2" className="text-xl mt-30">
              Computing Best Prices
            </Typography>
            <Typography className="mt-2.5 opacity-70 lg:text-base">
              By considering factors such as demand fluctuations, inventory
              levels, and competitor pricing, we adjust prices in realtime
            </Typography>
          </>
        )}

        {["optimizing", "optimizingDone"].includes(loadingState) && (
          <>
            <Typography variant="h2" className="text-xl mt-30">
              Optimising Vessel Schedules
            </Typography>
            <Typography className="mt-2.5 opacity-70 lg:text-base">
              By analysing port congestion, vessel tracking, and supply chain
              events we adjust shipping schedules to account for changing
              conditions and minimize disruptions.
            </Typography>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="self-center text-center p-4 lg:p-50 shrink-0 lg:w-1/2">
      <SubmittedBlackImage alt="Image Submitted" className="mx-auto w-[80px]" />
      <p className="text-sm lg:text-xl mt-3">
        Congratulations!
        <br /> Your quote is now ready.
      </p>
      {/* TODO: need to fix fontsize here */}
      <h3 className="text-[1.375rem] lg:text-[2.5rem] font-semibold pt-30">
        ${quoteResult.data?.startRange} - ${quoteResult.data?.endRange}
      </h3>
      {/* <Typography className="text-xs">
              Next Available Vessel: 31st June, 2023
            </Typography> */}
      {/* <Typography className="text-xs pt-4">
              Show Earliest arrival
            </Typography> */}

      {/* Seperator */}
      <div className="h-px w-full bg-black opacity-10 my-30 lg:my-50"></div>

      <div className="hidden lg:block">
        <div className="flex justify-between">
          <div className="opacity-50">Product</div>
          {/* TODO: make Dynamic */}
          <div className="font-medium">{quoteResult.data?.product}</div>
        </div>

        <div className="flex justify-between">
          <div className="opacity-50">Variant</div>
          {/* TODO: make Dynamic */}
          <div className="font-medium">{quoteResult.data?.variant}</div>
        </div>

        <div className="flex justify-between">
          <div className="opacity-50">Destination</div>
          {/* TODO: make Dynamic */}
          <div className="font-medium">
            Chennai
            {/* {destinationPortDetails.properties.Name} */}
          </div>
        </div>
      </div>
    </div>
  );
}
