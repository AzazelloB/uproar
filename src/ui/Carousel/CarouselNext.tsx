import { useCarouselContext } from 'context/CarouselContext';
import { AsProp } from 'utils/asPropType';

const CarouselNext = <T extends React.ElementType = 'button'>({
  as,
  children,
  ...props
}: AsProp<T>) => {
  const { nextSlide } = useCarouselContext();

  const Component = as || 'button';

  return (
    <Component
      onClick={nextSlide}
      {...props}
    >
      {children}
    </Component>
  );
};

export default CarouselNext;
