import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import type { Game } from 'api/response';
import useSearch from 'api/search';
import { useGlobalContext } from 'context/GlobalContext';

import GamesGrid from 'components/GamesGrid';
import GamesList from 'components/GamesList';

const getAreaWidth = (area: HTMLElement | null) => {
  if (area) {
    return area.getBoundingClientRect().width;
  }

  return 0;
};

const CategoryPage: React.FC = () => {
  const { category } = useParams();
  const { gameTileMode } = useGlobalContext();

  const ref = useRef<HTMLDivElement>(null);
  const [areaWidth, setAreaWidth] = useState(getAreaWidth(ref.current));

  // assumint that card width is 250px
  const cardsInLine = Math.floor(areaWidth / 250);
  const cardsPerPage = gameTileMode === 'grid' ? cardsInLine * 4 : cardsInLine;

  useEffect(() => {
    setAreaWidth(getAreaWidth(ref.current));
  }, [ref]);

  useEffect(() => {
    const handleResize = () => {
      setAreaWidth(getAreaWidth(ref.current));
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  return (
    <div ref={ref}>
      {
        gameTileMode === 'grid'
          ? <GamesGrid data={prefilledData} fetchNextPage={fetchNextPage} hasNextPage={!!hasNextPage} />
          : <GamesList data={prefilledData} fetchNextPage={fetchNextPage} cardsPerPage={cardsPerPage} />
      }
    </div>
  );
};

export default CategoryPage;
