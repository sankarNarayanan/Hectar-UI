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

export default function ContactFormDrawer({ drawerOpen, setDrawer }) {
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm();
  return (
    <Drawer open={drawerOpen} onClose={() => setDrawer(false)} size={500}>
      <div className="relative h-full">
        <Form name="getdetails" methods={methods}>
          <div className="flex flex-col h-screen">
            <div className="flex-grow overflow-y-auto p-20">
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={() => setDrawer(false)}
              >
                <XMarkIcon strokeWidth={2} className="h-5 w-5" />
              </IconButton>

              <Typography variant="h4">Submit Your Request</Typography>
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
                    <Typography variant="h6" color="black" className="text-sm">
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

              <div className="mt-100">
                <Form.TextField name="marketDetails" label="Market Details" />
              </div>
              <div className="mt-20">
                <Form.TextField name="another1" label="Market Details" />
              </div>
              <div className="mt-20">
                <Form.TextField name="another2" label="Market Details" />
              </div>
              <div className="mt-20">
                <Form.TextField name="another3" label="Market Details" />
              </div><div className="mt-20">
                <Form.TextField name="another3" label="Market Details" />
              </div><div className="mt-20">
                <Form.TextField name="another3" label="Market Details" />
              </div><div className="mt-20">
                <Form.TextField name="another3" label="Market Details" />
              </div><div className="mt-20">
                <Form.TextField name="another3" label="Market Details" />
              </div>
              <div className="mt-20">
                <Form.Textarea name="textarea1" label="Some details" />
              </div>
            </div>
            <div className="flex-none p-8">
              <Button className="w-full ">
                Continue to Basic Details
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </Drawer>
  );
}
