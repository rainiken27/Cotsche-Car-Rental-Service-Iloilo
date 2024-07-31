import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ children: slides, autoSlide = true, autoSlideInterval = 5000 }) => {
  const [currSlide, setCurrSlide] = useState(0);

  const prevSlide = () => setCurrSlide((currSlide) => (currSlide === 0 ? slides.length - 1 : currSlide - 1));

  const nextSlide = () => setCurrSlide((currSlide) => (currSlide === slides.length - 1 ? 0 : currSlide + 1));

  const test = () => {console.log('test')};

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative bg-black w-[100%]">
      <div
        className="flex transition-transform ease-out duration-500 object-cover"
        style={{ transform: `translateX(-${currSlide * 100}%)` }}
      >
        {slides}
        </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white z-2"
        >
          <ChevronLeft size={38} />
        </button>
        <button
          onClick={nextSlide}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white z-2"
        >
          <ChevronRight size={38} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0 ">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-red-700 rounded-full ${currSlide === i ? 'p-2' : 'bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
 