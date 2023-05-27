import Button from "@/components/Button";
import { Bounce, Fade } from "react-awesome-reveal";

export default function GetStarted() {
  return (
    <section>
      <div className="container mx-auto bg-grad-primary rounded-2xl py-[100px] my-[100px]">
        <h2 className="text-[64px] text-white text-center">
          <Bounce cascade damping={0.2}>
            Start Trading Now!
          </Bounce>
        </h2>
        <Fade>
          <div className="text-center mt-8">
            <Button>Get Instant Quote</Button>
          </div>
        </Fade>
      </div>
    </section>
  );
}
