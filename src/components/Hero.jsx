import PageSection from "./PageSection";
import Carousel from "./Carousel";
import seater5 from "../assets/carousel/4-5seater.mp4";
import { BackgroundCars, Gradient } from "./design/Hero";
import { useRef } from "react";
import heroBackground from "../assets/hero/hero-background.png";
import { testimonial1 } from "../assets";
import { testimonial2 } from "../assets";

const slides = [testimonial1, testimonial2];

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <PageSection
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
            <h1 className="h1 mb-6 text-color-1">
              <br></br>
              Cotsche
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-8 lg:mb-8">
              Your #1 trusted car rental service provider in Iloilo
            </p>
          </div>

          <div className="relative max-w-[24rem] mx-auto md:max-w-[34rem] lg:max-w-[37rem]">
            <div className="z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1rem] bg-red-600 rounded-t-[0.8rem]" />

                <Carousel>
                  {[
                    ...slides.map((s, index) => (
                      <img
                        key={`slide-${index}`}
                        src={s}
                        className="w-full h-full object-cover my-auto"
                        alt={`Slide ${index}`}
                      />
                    )),

                    <video
                      key="video-slide"
                      src={seater5}
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover my-auto"
                    />,
                  ]}
                </Carousel>
              </div>

              <Gradient />
              <BackgroundCars />
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default Hero;
