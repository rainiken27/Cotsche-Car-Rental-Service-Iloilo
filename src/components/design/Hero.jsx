import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import innova from "../../assets/svg/innova.svg";
import stargazer from "../../assets/svg/stargazer.svg";
import vios from "../../assets/svg/vios.svg";


export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export const BackgroundCars = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <Rings />

      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>

        <div className="absolute bottom-[60%] left-[10%] origin-bottom">
          <div
            className={`w-20 h-20 -ml-1 -mt-32  transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <img src={stargazer} />
          </div>
        </div>


        <div className="absolute bottom-[30%] left-[-5%] origin-bottom">
          <div
            className={`w-20 h-20 -ml-3 -mt-3 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <img src={innova} />
          </div>
        </div>

        <div className="absolute bottom-[70%] left-[100%] origin-bottom">
          <div
            className={`w-20 h-20 -ml-3 -mt-3 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <img src={vios} />
            </div>
        </div>
      </MouseParallax>
    </div>
  );
};
