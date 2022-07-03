import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import type { Game } from 'api/response';
import Carousel from 'ui/Carousel';
import Button from 'ui/Button';

import GameCard from './GameCard';

interface GamesListProps {
  games: Game[];
}

const GamesList: React.FC<GamesListProps> = ({ games }) => {
  return (
    <Carousel>
      <div className="flex justify-end mb-8 space-x-2">
        <Carousel.Prev as={Button} variant="secondary" icon={FiChevronLeft} />
        <Carousel.Next as={Button} variant="secondary" icon={FiChevronRight} />
      </div>

      <Carousel.Body>
        {games.map((game, i) => (
          <GameCard key={game?.id || i} game={game} />
        ))}
      </Carousel.Body>
    </Carousel>
  );
};

export default GamesList;
