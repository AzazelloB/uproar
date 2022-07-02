import useTopGames from 'api/topGames';
import { useGlobalContext } from 'context/GlobalContext';

import GamesGrid from 'components/GamesGrid';
import GamesList from 'components/GamesList';

const CategoryPage: React.FC = () => {
  const { gameTileMode } = useGlobalContext();
  const { data, isLoading, isIdle } = useTopGames({
    first: gameTileMode === 'grid' ? 16 : 4,
  });

  if (isLoading || isIdle) {
    return <div>Loading...</div>;
  }

  const games = data!.data!.data;

  return gameTileMode === 'grid' ? <GamesGrid games={games} /> : <GamesList games={games} />;
};

export default CategoryPage;
