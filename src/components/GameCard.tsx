import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import type { Game } from 'api/response';

import Button from 'ui/Button';

import useLocalStorage from 'hooks/useLocalStorage';
import GameCardSkeleton from './GameCardSkeleton';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const [acceptedChallenges, setAcceptedChallenges] = useLocalStorage<string[]>('acceptedChallenges', []);

  if (!game) {
    return <GameCardSkeleton />;
  }

  const isAccepted = acceptedChallenges.includes(game.id);

  const handleClick = (clickedGame: Game) => () => {
    if (isAccepted) {
      return;
    }

    setAcceptedChallenges((prev) => [...prev, clickedGame.id]);
  };

  return (
    <div className="bg-bg-light dark:bg-bg-dark max-w-[250px] h-full rounded-md flex flex-col">
      <img
        className="w-full h-[140px] object-cover"
        src={game.box_art_url.replace('52x72', '125x200')}
        alt=""
      />

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

        <div className="p-4 pb-0 mt-auto border-t border-black/25 dark:border-white/25 flex justify-end">
          <Button onClick={handleClick(game)} disabled={isAccepted}>
            {isAccepted ? (
              <FormattedMessage
                id="game_card.accepted"
                defaultMessage="Accepted"
              />
            ) : (
              <FormattedMessage
                id="game_card.accept"
                defaultMessage="Accept"
              />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
