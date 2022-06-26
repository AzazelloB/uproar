import { Game } from 'api/topGames';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import Button from 'ui/Button';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div key={game.id} className="bg-bg-light dark:bg-bg-dark w-[125px] rounded-md flex flex-col">
      <img src={game.box_art_url.replace('{width}x{height}', '125x200')} alt="" />

      <div className="py-4 h-full flex flex-col">
        <h4 className="px-4">{game.name}</h4>

        <p
          className={classNames(
            'py-4 px-4',
            'text-text-light-300 dark:text-text-dark-300',
          )}
        >
          Deal 5000 damage to enemies with grenades.
        </p>

        <div className="p-4 pb-0 mt-auto border-t border-black/25 dark:border-white/25">
          <Button>
            <FormattedMessage
              id="game_card.accept"
              defaultMessage="Accept"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;