import { useState } from 'react';

import { createContext } from 'utils/contextCreator';

function useCarouselState() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => prev - 1);
  };

  return {
    currentSlideIndex,
    nextSlide,
    prevSlide,
  };
}

const [CarouselProvider, useCarouselContext] = createContext(useCarouselState);

export { CarouselProvider, useCarouselContext };
