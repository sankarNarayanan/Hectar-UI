import Button from "@/components/Button";
import { Chip, Typography } from "@/components";
import Link from "next/link";
import linesLeft from "@/assets/lines_left.svg";
import linesRight from "@/assets/lines_right.svg";
import Image from "next/image";
import ImageSubmitted from "@/assets/svg/img-submitted.svg";

import { Fade } from "react-awesome-reveal";
import SuccessPoppersTopImage from "@/assets/svg/success-poppers-top.svg";
import SuccessPoppersBottomImage from "@/assets/svg/success-poppers-bottom.svg";
import GetQuoteForm from "./GetQuoteForm";
import { useState } from "react";
import SubmittedBlackImage from "@/assets/svg/img-submitted-black.svg";
import Form, { useForm } from "@/components/Form";
import { useRequestQuoteMutation } from "@/api/BaseAPI";

const quoteBaseValue = 2400;
const localtionItems = [
  { title: "Chennai, In", subtitle: "Port Of madras" },
  { title: "Mumbai, In", subtitle: "Port Of mumbai" },
  { title: "Kolkatta, In", subtitle: "Port Of Kolkatta" },
  { title: "Vizag, In", subtitle: "Port Of vizag" },
  { title: "Cochi, In", subtitle: "Port Of cochi" },
  { title: "Goa, In", subtitle: "Port Of Goa" },
];

function QuoteSuccess({ quoteState, setQuoteState }) {
  const methods = useForm();
  const [formState, setFormState] = useState(false);
  const [requestQuote] = useRequestQuoteMutation();
  const quoteValue =
    quoteBaseValue * (quoteState.selectedVariant?.typicalLoadabilityValue || 0);
  const handleQuoteFormSubmit = (formData) => {
    console.log("form data", formData);
    console.log("quoteState", quoteState);
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
    <div className="flex items-stretch">
      <div className="flex flex-col justify-between w-1/2 text-white">
        <div>
          <Image src={SuccessPoppersTopImage} alt="successPoppers" />
        </div>
        <div className="self-center text-center">
          <Image
            alt="Image Submitted"
            src={SubmittedBlackImage}
            className="mx-auto"
          />
          <p className="text-2xl mt-30">
            Congratulations!
            <br /> Your quote is now ready.
          </p>

          <p className="text-3xl lg:text-5xl font-semibold mt-30">
            ${quoteValue}
          </p>
        </div>
        <div className="self-end">
          <Image src={SuccessPoppersBottomImage} alt="successPoppers" />
        </div>
      </div>
      <div className="w-0 border border-[#FFFEFF] opacity-30 my-30 ml-4"></div>
      <div className=" w-1/2">
        {formState ? (
          <div className="flex flex-col items-center align-middle justify-center m-50 p-30 rounded-lg bg-white">
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
            <Button onClick={() => setQuoteState(false)} className="w-full mt-40">
              Close
            </Button>
          </div>
        ) : (
          <Form methods={methods} onSubmit={handleQuoteFormSubmit}>
            <div className="m-50 p-30 rounded-lg bg-white">
              <p className="text-2xl font-medium">Submit Your request</p>
              <p className="opacity-70 mt-3">
                This is an approximate quote and would change depending on your
                requirement. Please fill the form below to get the exact quote
                from our expert team.
              </p>
              <div className="mt-30">
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
                <Button className="!w-full" onClick={() => {}}>
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
      <div className="container relative mx-auto bg-grad-primary rounded-2xl">
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
            <Fade triggerOnce cascade>
              <h1 className="text-2xl lg:text-[64px] text-white pt-[100px] text-center font-light lg:leading-[80px]">
                Agri Commodities Trade, <br />
                <span className="font-bold">Reimagined! 🚜</span>
              </h1>

              <p className="text-[#FFFEFF] opacity-70 text-center text-sm lg:text-2xl pt-5">
                Enabling global wholesalers, manufacturers and retailers
                <br />
                source efficiently.
              </p>

              <GetQuoteForm setQuoteState={setQuoteState} />
            </Fade>
          </>
        )}

        {quoteState.isSubmitted && <QuoteSuccess quoteState={quoteState} setQuoteState={setQuoteState} />}
      </div>
    </section>
  );
}
