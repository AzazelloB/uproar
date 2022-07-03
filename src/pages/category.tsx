import { useParams } from 'react-router-dom';

import useSearch from 'api/search';
import { useGlobalContext } from 'context/GlobalContext';

import GamesGrid from 'components/GamesGrid';
import GamesList from 'components/GamesList';

const CategoryPage: React.FC = () => {
  const { category } = useParams();
  const { gameTileMode } = useGlobalContext();

  const initialAmoutOfTilesOnScreen = gameTileMode === 'grid' ? 16 : 4;

  const { data, isLoading, isIdle } = useSearch({
    query: category as string,
    first: initialAmoutOfTilesOnScreen,
  });

  let games = [...Array(initialAmoutOfTilesOnScreen)];

  if (!isLoading && !isIdle) {
    games = data!.data!.data;
  }

  return gameTileMode === 'grid' ? <GamesGrid games={games} /> : <GamesList games={games} />;
};

export default CategoryPage;
