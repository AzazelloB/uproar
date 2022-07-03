import { useCarouselContext } from 'context/CarouselContext';
import { AsProp } from 'utils/asPropType';

const CarouselPrev = <T extends React.ElementType = 'button'>({
  as,
  children,
  onClick,
  ...props
}: AsProp<T>) => {
  const { currentSlideIndex, prevSlide, hasPrevSlide } = useCarouselContext();

  const Component = as || 'button';

  const handleClick = () => {
    onClick(currentSlideIndex);
    prevSlide();
  };

  return (
    <Component
      onClick={handleClick}
      disabled={!hasPrevSlide}
      {...props}
    >
      {children}
    </Component>
  );
};

export default CarouselPrev;
