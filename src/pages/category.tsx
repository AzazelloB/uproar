import { useParams } from 'react-router-dom';

import useSearch from 'api/search';
import { useGlobalContext } from 'context/GlobalContext';

import GamesGrid from 'components/GamesGrid';
import GamesList from 'components/GamesList';

const CategoryPage: React.FC = () => {
  const { category } = useParams();
  const { gameTileMode } = useGlobalContext();
  const { data, isLoading, isIdle } = useSearch({
    query: category as string,
    first: gameTileMode === 'grid' ? 16 : 4,
  });

  if (isLoading || isIdle) {
    return <div>Loading...</div>;
  }

  const games = data!.data!.data;

  return gameTileMode === 'grid' ? <GamesGrid games={games} /> : <GamesList games={games} />;
};

export default CategoryPage;
