"use client";
import { useRequestQuoteMutation, useSaveQuoteMutation } from "@/api/BaseAPI";
import SubmittedBlackImage from "@/assets/svg/img-submitted-black.svg";
import { Button, Typography } from "@/components";
import Form, { useForm } from "@/components/Form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { productDetails } from "../ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { resetData } from "@/redux/productReducer";
import TurnOver from "@/components/Turnover";
import QuoteProgress from "./QuoteProgress";

function FormSubmitted() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClose = () => {
    dispatch(resetData());
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-10">
      <SubmittedBlackImage alt="Image Submitted" className="mx-auto w-[80px]" />

      <Typography className="font-semibold text-xl pt-2.5">
        Request Submitted
      </Typography>
      <Typography className="opacity-70 pt-2.5">
        Your request has been successfully submitted and our team is looking
        into it. You will hear back from our team shortly.
      </Typography>

      <Button className="w-full mt-10" onClick={handleClose}>
        Close
      </Button>
    </div>
  );
}

export default function SubmitQuote() {
  const methods = useForm();
  const [getQuote, quoteResult] = useRequestQuoteMutation({
    fixedCacheKey: "getQuote",
  });
  const [revenue, setRevenue] = useState("less than 10");
  const [formstate, setFormState] = useState("initiated");
  const quoteData = useSelector((state) => state.productDetails);
  const router = useRouter();
  const [saveQuote, saveQuoteResult] = useSaveQuoteMutation();

  const [loadingState, setLoadingState] = useState('analysing');

  // Redirect to Home Page If no Quote Data available.
  // To handle refresh or browser back
  useEffect(() => {
    if (quoteResult.isUninitialized) {
      router.push("/");
    }
  }, []);

  const destinationPortDetails = productDetails.findPortByCoordinates(
    quoteResult.data?.destinationPortCode
  );

  const handleQuoteFormSubmit = (formData) => {
    const selectedVariant = productDetails.getVariantDetails(
      quoteData.product,
      quoteData.variant
    );
    const selectedProduct = productDetails.getProductDetails(quoteData.product);
    // Api call to submit the Quote request details using RTK Query hook
    saveQuote({
      ...formData,
      companyRevenue: revenue,
      product: quoteResult.data.product,
      variant: quoteResult.data.variant,
      // description: selectedDescription.value,
      unloadingPort: "TODO:Hardcoded",
      loadingPort: "TODO:Hardcoded",
      containerType: quoteResult.data.container,
      load: "TODO: hardcoded",
      // TODO: need to make this dynamic
      estimatedCost: quoteResult.data.finalCost,
    }).then(() => {
      setFormState("submitted");
    });
  };

  return (
    <section
      id="QuoteForm"
      className="bg-[#F9F9F9] relative -mt-[140px] pt-[140px] pb-6 -mb-30 lg:mb-0"
    >
      <div className="container">
        <div className="lg:w-[950px] flex flex-col lg:flex-row mx-auto bg-white rounded-3xl">
          <QuoteProgress
            quoteResult={quoteResult}
            loadingState={loadingState}
            setLoadingState={setLoadingState}
          />
          <div className="w-px bg-black self-stretch opacity-10"></div>
          <div className="grow lg:w-1/2">
            {formstate === "submitted" ? (
              <FormSubmitted />
            ) : (
              <Form methods={methods} onSubmit={handleQuoteFormSubmit}>
                <div className="mx-3 lg:m-0 px-8 lg:px-50 lg:py-30 rounded-lg bg-white">
                  <p className="text-xl font-medium">
                    Proceed To Complete Your Request
                  </p>
                  <p className="text-xs lg:text-xs opacity-50">
                    For exact pricing, need few more details
                  </p>
                  <div className="mt-5 lg:mt-30">
                    <Form.TextField
                      name="name"
                      label="Full Name"
                      className="bg-white"
                      isLoading={true}
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
                    <Form.PhoneNumber
                      name="phoneNumber"
                      label="Business Phone number"
                      validators={["required"]}
                    />
                  </div>
                  <div className="mt-4">
                    <Form.TextField name="website" label="Website (Optional)" />
                  </div>
                  <div className="mt-4">
                    <TurnOver revenue={revenue} setRevenue={setRevenue} />
                  </div>
                  <div className="mt-4">
                    <Form.TextField
                      name="businessNature"
                      label="Nature Of Business"
                      validators={["required"]}
                    />
                  </div>
                  <div className="mt-30 lg:px-30">
                    <Button
                      className="!w-full"
                      isLoading={saveQuoteResult.isLoading}
                      type="submit"
                      // {requestQuoteResult.isLoading}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
