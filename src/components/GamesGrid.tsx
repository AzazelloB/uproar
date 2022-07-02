import { Game } from 'api/topGames';

import GameCard from './GameCard';

interface GamesGridProps {
  games: Game[];
}

const GamesGrid: React.FC<GamesGridProps> = ({ games }) => {
  return (
    <div className="flex flex-wrap gap-5">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GamesGrid;
