import useLocalStorage from 'hooks/useLocalStorage';
import { createContext } from 'utils/contextCreator';

function useGlobalState() {
  const [locale, setLocale] = useLocalStorage('locale', navigator.language.split('-')[0]);

  return { locale, setLocale };
}

const [GlobalProvider, useGlobalContext] = createContext(useGlobalState);

export { GlobalProvider, useGlobalContext };
