import { heroBackground } from "../../assets";
import innova from "../../assets/svg/innova.svg";
import stargazer from "../../assets/svg/stargazer.svg";
import vios from "../../assets/svg/vios.svg";

export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};


export const BackgroundCars = () => {
  return (
    <>
      <div className="absolute top-[4.4rem] left-16 w-20 h-20">
        <img src={innova}/>
      </div>
      <div className="absolute top-[12.6rem] right-16 w-16 h-16">
        <img src={stargazer} />
      </div>
      <div className="absolute top-[30rem] left-16 w-20 h-20">
        <img src={vios} />
      </div>
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.20]">
        <img
          className="w-full h-full object-cover"
          src={heroBackground}
          width={688}
          height={953}
          alt="Background"
        />
      </div>


      <BackgroundCars />
    </div>
  );
};
