import { Game } from 'api/topGames';

import GameCard from './GameCard';

interface GamesListProps {
  games: Game[];
}

const GamesList: React.FC<GamesListProps> = ({ games }) => {
  return (
    <div className="flex gap-5">
      {games.map((game) => (
        <GameCard game={game} />
      ))}
    </div>
  );
};

export default GamesList;
