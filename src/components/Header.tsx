import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
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
    </header>
  );
};

export default Header;
