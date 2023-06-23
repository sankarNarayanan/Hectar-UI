import Button from "@/components/Button";
import { Typography } from "@/components";
import linesLeft from "@/assets/lines_left.svg";
import linesRight from "@/assets/lines_right.svg";
import Image from "next/image";
import ImageSubmitted from "@/assets/svg/img-submitted.svg";

import SuccessPoppersTopImage from "@/assets/svg/success-poppers-top.svg";
import SuccessPoppersBottomImage from "@/assets/svg/success-poppers-bottom.svg";
import GetQuoteForm from "./GetQuoteForm";
import { useState } from "react";
import SubmittedBlackImage from "@/assets/svg/img-submitted-black.svg";
import Form, { useForm } from "@/components/Form";
import { useRequestQuoteMutation } from "@/api/BaseAPI";

const quoteBaseValue = 2400;
// const localtionItems = [
//   { title: "Chennai, In", subtitle: "Port Of madras" },
//   { title: "Mumbai, In", subtitle: "Port Of mumbai" },
//   { title: "Kolkatta, In", subtitle: "Port Of Kolkatta" },
//   { title: "Vizag, In", subtitle: "Port Of vizag" },
//   { title: "Cochi, In", subtitle: "Port Of cochi" },
//   { title: "Goa, In", subtitle: "Port Of Goa" },
// ];

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
    <section className="px-4 lg:px-0">
      <div className="container relative mx-auto bg-grad-primary pb-6 lg:pb-100 rounded-2xl">
        {!quoteState.isSubmitted && (
          <>
            <div>
              <Image
                className="absolute left-0 bottom-[70px] hidden lg:block"
                src={linesLeft}
                alt="left design icons"
              />
              <Image
                className="absolute right-0 top-[150px] hidden lg:block"
                src={linesRight}
                alt="right design icons"
              />
            </div>
            <div>
              <h1 className="text-2xl lg:text-6xl text-white pt-50 text-center font-light lg:leading-[80px]">
                Agri Commodities Trade, <br />
                <span className="font-bold">Reimagined! 🚜</span>
              </h1>

              <p className="text-[#FFFEFF] opacity-70 text-center text-sm lg:text-xl pt-5">
                Enabling global wholesalers, manufacturers and retailers
                <br />
                source efficiently.
              </p>

              <GetQuoteForm setQuoteState={setQuoteState} />
            </div>
          </>
        )}

        {quoteState.isSubmitted && (
          <QuoteSuccess quoteState={quoteState} setQuoteState={setQuoteState} />
        )}
      </div>
    </section>
  );
}
