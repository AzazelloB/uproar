const GameCardSkeleton: React.FC = () => {
  return (
    <div
      className="animate-pulse bg-bg-light dark:bg-bg-dark min-w-[230px] max-w-[250px] rounded-md flex flex-col"
    >
      <div className="w-full h-[140px] bg-black/10 dark:bg-white/10" />

      <div className="py-4 flex flex-col">
        <div className="px-4">
          <div className="h-4 w-full bg-black/10 dark:bg-white/10 rounded" />
          <div className="h-2 mt-4 w-full bg-black/10 dark:bg-white/10 rounded" />
          <div className="h-2 mt-2 w-2/5 bg-black/10 dark:bg-white/10 rounded" />
          <div className="h-2 mt-2 w-4/6 bg-black/10 dark:bg-white/10 rounded" />
        </div>

        <div className="p-4 pb-0 mt-6 border-t border-black/25 dark:border-white/25">
          <div className="h-10 w-24 ml-auto bg-black/10 dark:bg-white/10 rounded" />
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
