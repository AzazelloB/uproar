import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import useSearch from 'api/search';

import Carousel from 'ui/Carousel';
import Button from 'ui/Button';

import GameCard from './GameCard';

interface GamesListProps {
  data: Exclude<ReturnType<typeof useSearch>['data'], undefined>;
  fetchNextPage: ReturnType<typeof useSearch>['fetchNextPage'];
  cardsPerPage: number;
}

const GamesList: React.FC<GamesListProps> = ({ data, fetchNextPage, cardsPerPage }) => {
  const games = data.pages.flatMap((page) => page.data.map((game) => game));

  const handleNext = (slideIndex: number) => {
    if (slideIndex === games.length - cardsPerPage - 1) {
      fetchNextPage();
    }
  };

  return (
    <Carousel>
      <div className="flex justify-end mb-8 space-x-2">
        <Carousel.Prev as={Button} variant="secondary" icon={FiChevronLeft} />
        <Carousel.Next as={Button} variant="secondary" icon={FiChevronRight} onClick={handleNext} />
      </div>

      <Carousel.Body slidesToShow={cardsPerPage}>
        {games.map((game, i) => (
          <GameCard key={game?.id || i} game={game} />
        ))}
      </Carousel.Body>
    </Carousel>
  );
};

export default GamesList;
