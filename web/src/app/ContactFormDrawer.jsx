import {
  Drawer,
  Button,
  IconButton,
  Typography,
  Stepper,
  Step,
} from "@/components";
import Form, { useForm } from "@/components/Form";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import RequirementDetails from "./RequirementDetails";
import BasicDetails from "./BasicDetails";
import FormSubmitted from "./FormSubmitted";
import { useSubmitEnquiryMutation } from "@/api/BaseAPI";
import { useGlobalState } from "@/redux/globalState";

import ProcessCompleteIcon from "@/assets/svg/icon-process-complete.svg";

export default function ContactFormDrawer() {
  const [drawerOpen, setDrawer] = useGlobalState("betaAccessDrawer");

  const [activeStep, setActiveStep] = useState(0);

  const [submitEnquiry, submitEnquiryResult] = useSubmitEnquiryMutation();
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onSubmit",
  });
  const handleError = (value) => {
    console.log("Error", value);
  };

  const handleSubmit = (formData) => {
    if (activeStep === 0) {
      setActiveStep(1);
    }
    if (activeStep === 1) {
      // Submit the page here
      console.log("page submitted", formData);
      submitEnquiry({
        ...formData,
        interestedCommodities: JSON.stringify(
          JSON.parse(formData.interestedCommodities).map((item) => item.value)
        ),
      }).then(() => {
        setActiveStep("submitted");
      });
      // setActiveStep("submitted");
    }
    console.log("Submit", formData);
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
          <Form
            name="getdetails"
            methods={methods}
            onSubmit={handleSubmit}
            onError={handleError}
          >
            <div className="flex flex-col h-screen px-5 py-30">
              <div className="flex-grow overflow-y-auto">
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
                      variant="h3"
                      className="text-xl font-medium mt-30"
                    >
                      Submit Your Request
                    </Typography>
                  </div>
                </div>
                <Typography className="opacity-70 pt-3 text-xs lg:text-base">
                  Don't see what you are looking for? Please send us your
                  requirement and the team will get back shortly with details.
                </Typography>

                <Stepper
                  activeStep={activeStep}
                  //   isLastStep={(value) => setIsLastStep(value)}
                  //   isFirstStep={(value) => setIsFirstStep(value)}
                  lineClassName="bg-gray-400"
                  activeLineClassName="bg-[#317B74]"
                  className="my-[30px] w-[200px] ml-2"
                >
                  <Step
                    className="h-4 w-4 ring-1 ring-offset-4 ring-black/20 !bg-gray-400"
                    activeClassName="ring-1 ring-offset-4 ring-black/20 !bg-[#317B74]"
                    onClick={() => setActiveStep(0)}
                  >
                    {activeStep > 0 && (
                      <ProcessCompleteIcon className="w-8 h-8 absolute -top-2 -left-2" />
                    )}
                    <div className="absolute top-[30px] w-max left-0">
                      <Typography
                        variant="h6"
                        color="black"
                        className="text-xs"
                      >
                        Requirement <br />
                        Details
                      </Typography>
                    </div>
                  </Step>
                  <Step
                    className="h-4 w-4 ring-1 ring-offset-4 ring-black/20 !bg-gray-400"
                    activeClassName="ring-1 ring-offset-4 ring-black/20 !bg-[#317B74]"
                    onClick={() => setActiveStep(1)}
                  >
                    <div className="absolute top-[30px] left-0 w-max">
                      <Typography
                        variant="h6"
                        color="black"
                        className={
                          activeStep < 1 ? "opacity-40 text-xs" : "text-xs"
                        }
                      >
                        Basic Details
                      </Typography>
                    </div>
                  </Step>
                </Stepper>

                {activeStep === 0 && <RequirementDetails />}
                {activeStep === 1 && <BasicDetails />}
              </div>
              <div className="flex-none p-8">
                {activeStep === 0 && (
                  <Button variant="outline" className="w-full" type="submit">
                    Continue to Basic Details
                  </Button>
                )}

                {activeStep === 1 && (
                  <Button
                    className="w-full"
                    type="submit"
                    isLoading={submitEnquiryResult.isLoading}
                  >
                    Submit
                  </Button>
                )}
              </div>
            </div>
          </Form>
        )}

        {activeStep === "submitted" && <FormSubmitted setDrawer={setDrawer} />}
      </div>
    </Drawer>
  );
}
