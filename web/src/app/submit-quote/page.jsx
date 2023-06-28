"use client";
import { useRequestQuoteMutation } from "@/api/BaseAPI";
import SubmittedBlackImage from "@/assets/svg/img-submitted-black.svg";
import { Button, Typography } from "@/components";
import Form, { useForm } from "@/components/Form";

export default function SubmitQuote() {
  const methods = useForm();
  const [requestQuote, requestQuoteResult] = useRequestQuoteMutation();
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
          <div>
            <Form methods={methods} onSubmit={handleQuoteFormSubmit}>
              <div className="mx-3 lg:m-50 px-3 py-30 lg:p-30 rounded-lg bg-white">
                <p className="lg:text-2xl font-medium">Submit Your request</p>
                <p className="text:xs lg:text-base opacity-70 mt-3">
                  This is an approximate quote and would change depending on
                  your requirement. Please fill the form below to get the exact
                  quote from our expert team.
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
                    isLoading={false}
                    // {requestQuoteResult.isLoading}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
