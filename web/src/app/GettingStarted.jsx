import Button from "@/components/Button";
import { Bounce, Fade } from "react-awesome-reveal";

export default function GetStarted() {
  return (
    <section className="px-5">
      <div className="max-w-6xl mx-auto bg-grad-primary rounded-2xl py-40 lg:py-100 my-50 lg:my-150 ">
        <h2 className="text-2xl lg:text-[64px] text-white text-center">
          <Bounce triggerOnce cascade damping={0.2}>
            Start Trading Now!
          </Bounce>
        </h2>
        <Fade triggerOnce>
          <div className="text-center mt-8 lg:mt-50">
            <Button className="px-50 w-auto">Get Quotes</Button>
          </div>
        </Fade>
      </div>
    </section>
  );
}
