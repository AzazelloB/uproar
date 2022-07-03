import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import type { Game } from 'api/response';
import useSearch from 'api/search';
import { useGlobalContext } from 'context/GlobalContext';

import GamesGrid from 'components/GamesGrid';
import GamesList from 'components/GamesList';

const CategoryPage: React.FC = () => {
  const { category } = useParams();
  const { gameTileMode } = useGlobalContext();

  const cardsPerPage = gameTileMode === 'grid' ? 8 : 4;

  const {
    data,
    isLoading,
    isIdle,
    fetchNextPage,
    hasNextPage,
  } = useSearch({
    query: category as string,
    first: cardsPerPage,
  });

  useEffect(() => {
    if (!isIdle && !isLoading) {
      fetchNextPage();
    }
  }, [isIdle, isLoading, fetchNextPage]);

  let prefilledData: ReturnType<typeof useSearch>['data'] = {
    pageParams: [],
    pages: [
      {
        data: [...Array(cardsPerPage)] as Game[],
        pagination: {
          cursor: '',
        },
      },
    ],
  };

  if (!isLoading && !isIdle) {
    prefilledData = data!;
  }

  return gameTileMode === 'grid'
    ? <GamesGrid data={prefilledData} fetchNextPage={fetchNextPage} hasNextPage={!!hasNextPage} />
    : <GamesList data={prefilledData} fetchNextPage={fetchNextPage} cardsPerPage={cardsPerPage} />;
};

export default CategoryPage;
