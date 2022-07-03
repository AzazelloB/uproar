import NukaCarousel from 'nuka-carousel';

import { useCarouselContext } from 'context/CarouselContext';

export interface CarouselBodyProps {
  children: React.ReactNode;
}

const CarouselBody: React.FC<CarouselBodyProps> = ({ children }) => {
  const { currentSlideIndex } = useCarouselContext();

  return (
    <NukaCarousel
      withoutControls
      slidesToShow={4}
      slideIndex={currentSlideIndex}
      // cellSpacing={12}
    >
      {children}
    </NukaCarousel>
  );
};

export default CarouselBody;
