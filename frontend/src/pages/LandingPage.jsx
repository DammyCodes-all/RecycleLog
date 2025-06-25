import NavBar from "../components/navbar";
import AnimatedContent from "../components/AnimatedContent";
import { memo } from "react";
import { Button } from "@radix-ui/themes";
import { ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen h-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat flex flex-col">
      <NavBar />
      <div className="flex flex-1 w-full justify-center items-center">
        <div className="flex flex-col items-center justify-center w-[90%] sm:w-[70%] gap-2">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <LandingPageContent />
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};

const LandingPageContent = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-2">
        <div className="bg-mint/40 px-2 text-sm py-1 rounded-md text-mint font-outfit font-light">
          Cleaner, Healthier, Safer Communities
        </div>
        <p className="text-mint text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-outfit text-center w-[90%] sm:w-[80%] ">
          Smarter Waste Management
          <span className="text-forest">,Powered By AI</span>
        </p>
        <p className="text-mint/70 w-[85%] sm:w-[70%] text-center font-roboto">
          Real-time Insights, smart heatmaps, and AI driven recommendations to
          reduce waste and optimize collection in smart cites
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-3 w-full sm:w-[45%] cursor-pointer text-md">
          <Button
            variant="solid"
            className="bg-primary px-4 py-2   rounded-md hover:bg-primary/80 transition-colors w-9/10 min-w-[230px]"
          >
            Watch Demo
          </Button>
          <Button
            variant="soft"
            className="w-9/10 bg-mint/30 rounded-sm  text-mint px-4 py-2 min-w-[230px] hover:bg-mint/50  flex justify-center items-center gap-2 hover:gap-3 transition-all"
          >
            View DashBoard <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default memo(LandingPage);
