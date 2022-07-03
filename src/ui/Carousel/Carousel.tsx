import { CarouselProvider } from 'context/CarouselContext';

import CarouselBody, { CarouselBodyProps } from './CarouselBody';
import CarouselNext from './CarouselNext';
import CarouselPrev from './CarouselPrev';

interface CarouselComponents {
  Body: typeof CarouselBody;
  Next: typeof CarouselNext;
  Prev: typeof CarouselPrev;
}

type CarouselProps = CarouselBodyProps

const Carousel: React.FC<CarouselProps> & CarouselComponents = ({ children }) => {
  return (
    <CarouselProvider>
      { children }
    </CarouselProvider>
  );
};

Carousel.Body = CarouselBody;
Carousel.Next = CarouselNext;
Carousel.Prev = CarouselPrev;

export default Carousel;
