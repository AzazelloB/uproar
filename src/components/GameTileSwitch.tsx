import { FormattedMessage } from 'react-intl';
import { BsGridFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';

import { useGlobalContext } from 'context/GlobalContext';

const GameTileSwitch: React.FC = () => {
  const { gameTileMode, setGameTileMode } = useGlobalContext();

  const handleClick = () => {
    setGameTileMode(gameTileMode === 'grid' ? 'list' : 'grid');
  };

  return (
    <div className="py-6 px-9 border-b border-black/25 dark:border-white/25">
      <button type="button" onClick={handleClick} className="flex items-center">
        {gameTileMode === 'grid' ? <BsGridFill /> : <FaBars />}
        <span className="ml-4 uppercase">
          <FormattedMessage
            id="sidebar.game_tile_mode"
            defaultMessage="My games."
          />
        </span>
      </button>
    </div>
  );
};

export default GameTileSwitch;
