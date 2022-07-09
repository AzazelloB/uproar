import { useIntl } from 'react-intl';

import { useGlobalContext } from 'context/GlobalContext';

import Switch from 'ui/Switch';

const DarkModeSwitch: React.FC = () => {
  const intl = useIntl();
  const { isDarkMode, setIsDarkMode } = useGlobalContext();

  return (
    <Switch
      checked={isDarkMode}
      onChange={setIsDarkMode}
      srOnly={intl.formatMessage({ id: 'dark_mode_switcher.sr', defaultMessage: 'Enable dark mode' })}
    />
  );
};

export default DarkModeSwitch;
