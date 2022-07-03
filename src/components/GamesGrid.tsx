import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import useSearch from 'api/search';

import GameCard from './GameCard';

interface GamesGridProps {
  data: Exclude<ReturnType<typeof useSearch>['data'], undefined>;
  fetchNextPage: ReturnType<typeof useSearch>['fetchNextPage'];
  hasNextPage: boolean;
}

const GamesGrid: React.FC<GamesGridProps> = ({ data, fetchNextPage, hasNextPage }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    const interval = setInterval(() => {
      if (inView && hasNextPage) {
        fetchNextPage();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [inView, hasNextPage, fetchNextPage]);

  const games = data.pages.flatMap((page) => page.data.map((game) => game));

  return (
    <div className="flex flex-wrap gap-5">
      {games.map((game, i) => (
        <GameCard key={game?.id || i} game={game} />
      ))}
      <div ref={ref} />
    </div>
  );
};

export default GamesGrid;
