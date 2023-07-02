import { Drawer, Button, IconButton, Typography } from "@/components";
import Form, { useForm } from "@/components/Form";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";
import ImageSubmitted from "@/assets/svg/img-submitted-black.svg";
import { PRODUCT_DETAILS } from "@/app/ProductDetails";
import { usePrivateBetaEnquiryMutation } from "@/api/BaseAPI";
import { useGlobalState } from "@/redux/globalState";

// Extract the product details from the base object and
// format it to feed the Select input as options
const getProductItems = () => {
  // formatted data
  return PRODUCT_DETAILS.map((item) => ({
    value: item.name,
    label: item.name,
  }));
};

function FormSubmitted({ setDrawer }) {
  return (
    <div className="flex flex-col items-center align-middle justify-center h-full p-30">
      <ImageSubmitted alt="Image Submitted" className="w-15"/>
      <Typography variant="h4" className="font-medium mt-30">
        Request Submitted
      </Typography>
      <Typography
        variant="p"
        className="opacity-70 font-normal pt-3 text-center text-sm"
      >
        Your request has been successfully submitted and our
        <br className="hidden lg:block" /> team is looking into it. You will
        hear back from our
        <br className="hidden lg:block" /> team shortly.
      </Typography>
      <Button onClick={() => setDrawer(false)} className="w-full mt-5 lg:mt-40">
        Close
      </Button>
    </div>
  );
}

export default function GetPrivateAccessForm() {
  const [drawerOpen, setDrawer] = useGlobalState("betaAccessDrawer");
  const productItems = getProductItems();

  const [privateBetaEnquiry, privateBetaEnquiryResult] =
    usePrivateBetaEnquiryMutation();
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const handleSubmit = (formdata) => {
    // Api call to submit the Beta Enquiry Data
    privateBetaEnquiry({
      ...formdata,
      interestedCommodities: JSON.stringify(
        JSON.parse(formdata.interestedCommodities).map((item) => item.value)
      ),
    }).then(() => {
      setActiveStep("submitted");
    });
  };

  return (
    <Drawer
      open={drawerOpen}
      onClose={() => setDrawer(false)}
      size={500}
      placement="right"
    >
      <div className="relative h-full">
        {activeStep !== "submitted" && (
          <Form name="getdetails" methods={methods} onSubmit={handleSubmit}>
            <div className="flex flex-col h-screen">
              <div className="flex-grow overflow-y-auto p-5">
                <div className="">
                  <div>
                    <IconButton
                      variant="text"
                      color="blue-gray"
                      onClick={() => setDrawer(false)}
                      className="h-5 w-5"
                    >
                      <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                  </div>
                  <div>
                    <Typography
                      variant="h4"
                      className="text-xl font-medium mt-30"
                    >
                      Submit Your Request
                    </Typography>
                  </div>
                </div>
                <Typography
                  variant="paragraph"
                  className="opacity-70 pt-3 text-xs lg:text-base"
                >
                  Don't see what you are looking for? Please send us your
                  requirement and the team will get back shortly with details.
                </Typography>

                <>
                  <div className="mt-30 lg:mt-100">
                    <Form.TextField
                      name="name"
                      label="Your Name"
                      validators={["required"]}
                    />
                  </div>
                  <div className="mt-5">
                    <Form.Select
                      name="interestedCommodities"
                      validators={["required"]}
                      className="border border-blue-gray-500"
                      variant="bordered"
                      placeholder="Select Products"
                      isMultiple={true}
                      errorMessage={{
                        required: "Please select an option",
                      }}
                      label={() => <>product</>}
                      options={productItems}
                    />
                  </div>
                  <div className="mt-5">
                    <Form.TextField
                      name="companyName"
                      label="Company Name"
                      validators={["required"]}
                    />
                  </div>
                  <div className="mt-5">
                    <Form.TextField
                      name="companyRevenue"
                      label="Company Revenue"
                      validators={["required"]}
                    />
                  </div>
                  <div className="mt-5">
                    <Form.PhoneNumber
                      name="phoneNumber"
                      label="Phone number"
                      validators={["required"]}
                    />
                  </div>
                  <div className="mt-5">
                    <Form.TextField
                      name="email"
                      label="Company Email ID"
                      validators={["required"]}
                    />
                  </div>

                  <div className="mt-5">
                    <Form.TextField
                      name="baseLocation"
                      label="Location"
                      validators={["required"]}
                    />
                  </div>
                </>
              </div>
              <div className="flex-none p-8">
                <Button
                  className="w-full"
                  type="submit"
                  isLoading={privateBetaEnquiryResult.isLoading}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        )}

        {activeStep === "submitted" && <FormSubmitted setDrawer={setDrawer} />}
      </div>
    </Drawer>
  );
}
