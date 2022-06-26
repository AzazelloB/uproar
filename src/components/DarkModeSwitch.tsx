import useLocalStorage from 'hooks/useLocalStorage';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';

import Switch from 'ui/Switch';

const DarkModeSwitch: React.FC = () => {
  const intl = useIntl();
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

  return (
    <Switch
      checked={isDarkMode}
      onChange={setIsDarkMode}
      srOnly={intl.formatMessage({ id: 'dark_mode_switcher.sr', defaultMessage: 'Enable dark mode' })}
    />
  );
};

export default DarkModeSwitch;
