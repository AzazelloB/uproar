import { useCarouselContext } from 'context/CarouselContext';
import { AsProp } from 'utils/asPropType';

const CarouselNext = <T extends React.ElementType = 'button'>({
  as,
  children,
  onClick,
  ...props
}: AsProp<T>) => {
  const { currentSlideIndex, nextSlide, hasNextSlide } = useCarouselContext();

  const Component = as || 'button';

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick(currentSlideIndex);
    }
    nextSlide();
  };

  return (
    <Component
      onClick={handleClick}
      disabled={!hasNextSlide}
      {...props}
    >
      {children}
    </Component>
  );
};

export default CarouselNext;
