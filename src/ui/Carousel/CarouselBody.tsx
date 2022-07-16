import { Children, useEffect } from 'react';
import NukaCarousel from 'nuka-carousel';

import { useCarouselContext } from 'context/CarouselContext';

export interface CarouselBodyProps {
  children: React.ReactNode;
  slidesToShow?: number;
}

const CarouselBody: React.FC<CarouselBodyProps> = ({ children, slidesToShow }) => {
  const { currentSlideIndex, setTotalSlidesCount } = useCarouselContext();

  useEffect(() => {
    setTotalSlidesCount(Children.count(children));
  }, [children, setTotalSlidesCount]);

  return (
    <NukaCarousel
      withoutControls
      slidesToShow={slidesToShow}
      slideIndex={currentSlideIndex}
      cellSpacing={12}
      speed={200}
      adaptiveHeight={false}
    >
      {children}
    </NukaCarousel>
  );
};

export default CarouselBody;
