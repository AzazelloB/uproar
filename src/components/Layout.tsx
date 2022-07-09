import classNames from 'classnames';

import Header from './Header';
import Sidebar from './Sidebar';

export interface LayoutProps {
  children: JSX.Element,
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={classNames(
        'flex min-h-screen bg-bg-light-page dark:bg-bg-dark-page',
        'text-text-light dark:text-text-dark',
      )}
    >
      <Sidebar />

      <div className="px-14">
        <Header />

        <main className="py-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
