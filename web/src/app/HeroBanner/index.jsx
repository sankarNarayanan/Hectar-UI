import Button from "@/components/Button";
import { Typography } from "@/components";
import linesLeft from "@/assets/lines_left.svg";
import linesRight from "@/assets/lines_right.svg";
import Image from "next/image";
import ImageSubmitted from "@/assets/svg/img-submitted.svg";
import HeroBGImage from "@/assets/svg/hero-bg-image.svg";
import CraneOutlineImage from "@/assets/svg/crane-outline.svg";

import SuccessPoppersTopImage from "@/assets/svg/success-poppers-top.svg";
import SuccessPoppersBottomImage from "@/assets/svg/success-poppers-bottom.svg";
// import GetQuoteForm from "./GetQuoteForm";
import { useState } from "react";
import SubmittedBlackImage from "@/assets/svg/img-submitted-black.svg";
import Form, { useForm } from "@/components/Form";
import { useRequestQuoteMutation } from "@/api/BaseAPI";
import QuoteMiniForm from "./QuoteMiniForm";

const quoteBaseValue = 2400;

function QuoteSuccess({ quoteState, setQuoteState }) {
  const methods = useForm();
  const [formState, setFormState] = useState(false);
  const [requestQuote, requestQuoteResult] = useRequestQuoteMutation();

  const quoteValue =
    quoteBaseValue * (quoteState.selectedVariant?.typicalLoadabilityValue || 0);
  const handleQuoteFormSubmit = (formData) => {
    // Api call to submit the Quote request details using RTK Query hook
    requestQuote({
      ...formData,
      product: quoteState.selectedProduct.name,
      variant: quoteState.selectedVariant.name,
      description: quoteState.selectedDescription.value,
      unloadingPort: quoteState.selectedUnloadingPort.value,
      loadingPort:
        quoteState.selectedVariant.loadingPort.port +
        ", " +
        quoteState.selectedVariant.loadingPort.country,
      containerType: quoteState.selectedVariant.containerType,
      load: quoteState.selectedVariant.typicalLoadability,
      estimatedCost: quoteValue,
    }).then(() => {
      setFormState("submitted");
    });
  };
  return (
    <div className="flex flex-col lg:flex-row items-stretch">
      <div className="flex flex-col justify-between lg:w-1/2 text-white">
        <div>
          <Image
            src={SuccessPoppersTopImage}
            alt="successPoppers"
            className="w-[218px] lg:w-auto"
          />
        </div>
        <div className="self-center text-center">
          <Image
            alt="Image Submitted"
            src={SubmittedBlackImage}
            className="w-[60px] lg:w-auto mx-auto"
          />
          <p className="lg:text-2xl mt-3">
            Congratulations!
            <br /> Your quote is now ready.
          </p>

          <p className="text-3xl lg:text-5xl font-semibold mt-6">
            ${quoteValue}
          </p>
          <p className="text-xs lg:text-sm opacity-70">
            This is a computer generated quote and could vary.
          </p>
        </div>
        <div className="self-end hidden lg:block">
          <Image src={SuccessPoppersBottomImage} alt="successPoppers" />
        </div>
      </div>
      <div className="lg:w-0 h-0 lg:h-auto border border-[#FFFEFF] opacity-30 m-30 ml-4"></div>
      <div className=" lg:w-1/2">
        {formState ? (
          <div className="flex flex-col items-center align-middle justify-center m-3 lg:m-50 p-3 lg:p-30 rounded-lg bg-white">
            <Image alt="Image Submitted" src={ImageSubmitted} />
            <Typography variant="h4" className="font-medium pt-30">
              Request Submitted
            </Typography>
            <Typography
              variant="paragraph"
              className="opacity-70 font-normal pt-3 text-center"
            >
              Your request has been successfully submitted and our
              <br /> team is looking into it. You will hear back from our
              <br /> team shortly.
            </Typography>
            <Button
              onClick={() => setQuoteState(false)}
              className="w-full mt-40"
            >
              Close
            </Button>
          </div>
        ) : (
          <Form methods={methods} onSubmit={handleQuoteFormSubmit}>
            <div className="mx-3 lg:m-50 px-3 py-30 lg:p-30 rounded-lg bg-white">
              <p className="lg:text-2xl font-medium">Submit Your request</p>
              <p className="text:xs lg:text-base opacity-70 mt-3">
                This is an approximate quote and would change depending on your
                requirement. Please fill the form below to get the exact quote
                from our expert team.
              </p>
              <div className="mt-20 lg:mt-30">
                <Form.TextField
                  name="name"
                  label="Full Name"
                  className="bg-white"
                  validators={["required"]}
                />
              </div>
              <div className="mt-4">
                <Form.TextField
                  name="bussinessName"
                  label="Bussiness Name"
                  validators={["required"]}
                />
              </div>
              <div className="mt-4">
                <Form.TextField
                  name="email"
                  label="Bussiness Email"
                  validators={["required"]}
                />
              </div>
              <div className="mt-4">
                <Form.TextField
                  name="phoneNumber"
                  label="Phone Number"
                  validators={["required"]}
                />
              </div>
              <div className="mt-4">
                <Form.TextField
                  name="companyRevenue"
                  label="Annual Turnover"
                  validators={["required"]}
                />
              </div>
              <div className="mt-4">
                <Form.TextField
                  name="businessNature"
                  label="Nature Of Business"
                  validators={["required"]}
                />
              </div>
              <div className="mt-30 px-30">
                <Button
                  className="!w-full"
                  isLoading={requestQuoteResult.isLoading}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
}

/**
 * Hero banner Component
 */
export default function HeroBanner() {
  const [quoteState, setQuoteState] = useState({ isSubmitted: false });
  return (
    // This section will have an empty top and pushed behind header
    <section
      id="HeroBanner"
      className="bg-[#FAF8F4] relative -mt-[140px] pt-[140px]"
    >
      {/* TODO: color needs to be variablized */}
      <div className="container flex items-center justify-between flex-col lg:flex-row mt-15 lg:mt-0">
        <div className="px-4 lg:px-0 lg:w-1/2">
          <Typography variant="lead" size="h5" className="text-[#FF9D01] font-semibold opacity-100 lg:text-xl">
            AGRI TRADE, REIMAGINED
          </Typography>
          <Typography variant="h1" size="h1" className="">
            Enabling Global Food Buyers Source Efficiently.
          </Typography>

          <QuoteMiniForm />
          <div className="absolute left-0 bottom-0">
            <CraneOutlineImage className="hidden lg:block" />
          </div>
        </div>

        <div className="lg:w-[540px] shrink-0 hidden lg:block">
          <div className="relative lg:-right-[90px] pb-30">
            <HeroBGImage className="w-full lg:w-[700px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
