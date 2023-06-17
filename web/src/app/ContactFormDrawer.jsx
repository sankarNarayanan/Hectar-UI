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

export default function ContactFormDrawer({ drawerOpen, setDrawer }) {
  const [activeStep, setActiveStep] = useState(0);
  const [submitEnquiry] = useSubmitEnquiryMutation();
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
            <div className="flex flex-col h-screen">
              <div className="flex-grow overflow-y-auto p-20">
                <div className="flex justify-between">
                  <div>
                    <Typography variant="h4">Submit Your Request</Typography>
                  </div>
                  <div>
                    <IconButton
                      variant="text"
                      color="blue-gray"
                      onClick={() => setDrawer(false)}
                    >
                      <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                  </div>
                </div>
                <Typography variant="paragraph" className="opacity-70 pt-3">
                  Don't see what you are looking for? Please send us your
                  requirement and the team will get back shortly with details.
                </Typography>

                <Stepper
                  activeStep={activeStep}
                  //   isLastStep={(value) => setIsLastStep(value)}
                  //   isFirstStep={(value) => setIsFirstStep(value)}
                  className="my-[30px] w-[200px]"
                >
                  <Step className="h-4 w-4" onClick={() => setActiveStep(0)}>
                    <div className="absolute -bottom-[50px] w-max left-0">
                      <Typography
                        variant="h6"
                        color="black"
                        className="text-sm"
                      >
                        Requirement <br />
                        Details
                      </Typography>
                    </div>
                  </Step>
                  <Step className="h-4 w-4" onClick={() => setActiveStep(1)}>
                    <div className="absolute -bottom-[50px] left-0 w-max">
                      <Typography
                        variant="h6"
                        color="black"
                        className={
                          activeStep < 1 ? "opacity-40 text-sm" : "text-sm"
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
                  <Button className="w-full" type="submit">
                    Continue to Basic Details
                  </Button>
                )}

                {activeStep === 1 && (
                  <Button className="w-full" type="submit">
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
