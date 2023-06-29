"use client";
import { useRequestQuoteMutation } from "@/api/BaseAPI";
import SubmittedBlackImage from "@/assets/svg/img-submitted-black.svg";
import { Button, Radio, Typography } from "@/components";
import Form, { useForm } from "@/components/Form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { productDetails } from "../ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { resetData } from "@/redux/productReducer";

function TurnOver({ revenue, setRevenue }) {
  const handleRadio = (value) => {
    setRevenue(value);
  };
  return (
    <div className="flex mb-4">
      <label
        className={`cursor-pointer border border-black/10 hover:border-black/50 hover:shadow-lg text-center p-2 rounded-l-lg grow transition-all duration-500 ${
          revenue === "less than 10" ? "bg-black text-white" : "opacity-50"
        }`}
      >
        &lt; $10 M
        <input
          type="radio"
          name="name"
          hidden
          onChange={() => handleRadio("less than 10")}
        />
      </label>
      <label
        className={`cursor-pointer border border-black/10 hover:border-black/50 hover:shadow-lg text-center p-2 grow transition-all duration-500 ${
          revenue === "10 - 100" ? "bg-black text-white" : "opacity-50"
        }`}
      >
        <input
          type="radio"
          name="name"
          hidden
          onChange={() => handleRadio("10 - 100")}
        />
        $10 M - $100 M
      </label>
      <label
        className={`cursor-pointer border border-black/10 hover:border-black/50 hover:shadow-lg text-center p-2 rounded-r-lg grow transition-all duration-500 ${
          revenue === "greater than 100" ? "bg-black text-white" : "opacity-50"
        }`}
      >
        <input
          type="radio"
          name="name"
          hidden
          onChange={() => handleRadio("greater than 100")}
        />
        &gt; $100 M
      </label>
    </div>
  );
}

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
  const [revenue, setRevenue] = useState("less than 10");
  const [formstate, setFormState] = useState("initiated");
  const quoteData = useSelector((state) => state.productDetails);
  const router = useRouter();
  const [requestQuote, requestQuoteResult] = useRequestQuoteMutation();

  // Redirect to Home Page If no Quote Data available.
  // To handle refresh or browser back
  if (!quoteData.product) {
    router.push("/");
    return null;
  }

  const handleQuoteFormSubmit = (formData) => {
    const selectedVariant = productDetails.getVariantDetails(
      quoteData.product,
      quoteData.variant
    );
    const selectedProduct = productDetails.getProductDetails(quoteData.product);
    // Api call to submit the Quote request details using RTK Query hook
    requestQuote({
      ...formData,
      companyRevenue: revenue,
      product: selectedProduct.name,
      variant: selectedVariant.name,
      // description: selectedDescription.value,
      unloadingPort: productDetails.getValuefromItem(quoteData.destination),
      loadingPort:
        selectedVariant.loadingPort.port +
        ", " +
        selectedVariant.loadingPort.country,
      containerType: selectedVariant.containerType,
      load: selectedVariant.typicalLoadability,
      // TODO: need to make this dynamic
      estimatedCost: "14560",
    }).then(() => {
      setFormState("submitted");
    });
  };

  return (
    <section
      id="QuoteForm"
      className="bg-[#F9F9F9] relative -mt-[140px] pt-[140px] pb-6 -mb-30"
    >
      <div className="container">
        <div className="w-[950px] flex mx-auto bg-white rounded-xl py-30">
          <div className="self-center text-center p-50 shrink-0">
            <SubmittedBlackImage
              alt="Image Submitted"
              className="mx-auto w-[80px]"
            />
            <p className="lg:text-xl mt-3">
              Congratulations!
              <br /> Your quote is now ready.
            </p>
            {/* TODO: need to fix fontsize here */}
            <Typography variant="h1" as="h3" className="pt-30">
              $3,200 - $3,520
            </Typography>
            <Typography className="text-xs">
              {/* TODO: need to fix teh Date */}
              Next Available Vessel: 31st June, 2023
            </Typography>
            <Typography className="text-xs pt-4">
              Show Earliest arrival
            </Typography>

            {/* Seperator */}
            <div className="h-px w-full bg-black opacity-10 my-50"></div>

            <div className="flex justify-between">
              <div>Product</div>
              {/* TODO: make Dynamic */}
              <div>Turmeric</div>
            </div>

            <div className="flex justify-between">
              <div>Variant</div>
              {/* TODO: make Dynamic */}
              <div>Erode</div>
            </div>

            <div className="flex justify-between">
              <div>Destination</div>
              {/* TODO: make Dynamic */}
              <div>
                Port Of Madras,
                <br /> Chennai
              </div>
            </div>
          </div>
          <div className="w-px bg-black self-stretch opacity-10"></div>
          <div className="grow">
            {formstate === "submitted" ? (
              <FormSubmitted />
            ) : (
              <Form methods={methods} onSubmit={handleQuoteFormSubmit}>
                <div className="mx-3 lg:m-0 px-50 py-30 lg:py-30 rounded-lg bg-white">
                  <p className="lg:text-xl font-medium">
                    Proceed To Complete Your Request
                  </p>
                  <p className="text:xs lg:xs opacity-50">
                    For exact pricing, need few more details
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
                  <div className="mt-30 px-30">
                    <Button
                      className="!w-full"
                      isLoading={false}
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
