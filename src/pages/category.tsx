import useTopGames from 'api/topGames';

const CategoryPage: React.FC = () => {
  const { data, isLoading, isIdle } = useTopGames({
    firts: 10,
  });

  if (isLoading || isIdle) {
    return <div>Loading...</div>;
  }

  const games = data!.data!.data;

  return (
    <div className="flex flex-wrap">
      {games.map((game) => (
        <div key={game.id}>
          <h1>{game.name}</h1>
          <img src={game.box_art_url.replace('{width}x{height}', '200x300')} alt="" />
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
