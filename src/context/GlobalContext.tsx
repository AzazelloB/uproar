import { useEffect } from 'react';

import useLocalStorage from 'hooks/useLocalStorage';
import { createContext } from 'utils/contextCreator';

type GameTileMode = 'list' | 'grid';

function useGlobalState() {
  const [locale, setLocale] = useLocalStorage('locale', navigator.language.split('-')[0]);
  const [gameTileMode, setGameTileMode] = useLocalStorage<GameTileMode>('gameTileMode', 'list');
  const [showSidebar, setShowSidebar] = useLocalStorage('showSidebar', true);
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    'theme',
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 960) {
        setShowSidebar(false);
      }
    };

    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [setShowSidebar]);

  return {
    locale,
    setLocale,
    gameTileMode,
    setGameTileMode,
    showSidebar,
    setShowSidebar,
    isDarkMode,
    setIsDarkMode,
  };
}

const [GlobalProvider, useGlobalContext] = createContext(useGlobalState);

export { GlobalProvider, useGlobalContext };
