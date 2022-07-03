import { useCarouselContext } from 'context/CarouselContext';
import { AsProp } from 'utils/asPropType';

const CarouselPrev = <T extends React.ElementType = 'button'>({
  as,
  children,
  ...props
}: AsProp<T>) => {
  const { prevSlide } = useCarouselContext();

  const Component = as || 'button';

  return (
    <Component
      onClick={prevSlide}
      {...props}
    >
      {children}
    </Component>
  );
};

export default CarouselPrev;
