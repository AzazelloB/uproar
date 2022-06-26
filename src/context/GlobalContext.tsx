import useLocalStorage from 'hooks/useLocalStorage';
import { createContext } from 'utils/contextCreator';

type GameTileMode = 'list' | 'grid';

function useGlobalState() {
  const [locale, setLocale] = useLocalStorage('locale', navigator.language.split('-')[0]);
  const [gameTileMode, setGameTileMode] = useLocalStorage<GameTileMode>('gameTileMode', 'list');

  return {
    locale,
    setLocale,
    gameTileMode,
    setGameTileMode,
  };
}

const [GlobalProvider, useGlobalContext] = createContext(useGlobalState);

export { GlobalProvider, useGlobalContext };
