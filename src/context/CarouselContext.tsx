import { useState } from 'react';

import { createContext } from 'utils/contextCreator';

function useCarouselState() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [totalSlidesCount, setTotalSlidesCount] = useState(0);
  const hasNextSlide = currentSlideIndex < totalSlidesCount - 1;
  const hasPrevSlide = currentSlideIndex > 0;

  const nextSlide = () => {
    if (hasNextSlide) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (hasPrevSlide) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  return {
    currentSlideIndex,
    nextSlide,
    prevSlide,
    totalSlidesCount,
    setTotalSlidesCount,
    hasNextSlide,
    hasPrevSlide,
  };
}

const [CarouselProvider, useCarouselContext] = createContext(useCarouselState);

export { CarouselProvider, useCarouselContext };
