import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { useAuthContext } from 'context/AuthContext';

import LanguageSelector from './LanguageSelector';
import PrevURLLink from './PrevURLLink';
import UserInfo from './UserInfo';

const Header: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <header className="h-16 flex items-center border-b border-black/25 dark:border-white/25">
      <nav className="ml-14 pr-4 mr-4 border-r border-black/25 dark:border-white/25">
        <ul className="flex space-x-7">
          <li>
            <Link to="/faq">
              <FormattedMessage id="header.links.faq" defaultMessage="FAQ" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FormattedMessage id="header.links.about" defaultMessage="About" />
            </Link>
          </li>
          <li>
            <Link to="/support">
              <FormattedMessage id="header.links.support" defaultMessage="Support" />
            </Link>
          </li>
        </ul>
      </nav>

      <LanguageSelector />

      <div className="ml-auto">
        {user ? (
          <UserInfo />
        ) : (
          <PrevURLLink to="/auth/login">
            <FormattedMessage
              id="header.login"
              defaultMessage="Login"
            />
          </PrevURLLink>
        )}
      </div>
    </header>
  );
};

export default Header;
