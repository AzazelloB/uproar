import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { GiBroadsword, GiChessRook } from 'react-icons/gi';
import { IoIosRocket } from 'react-icons/io';
import { HiPuzzle } from 'react-icons/hi';
import { FaTimes, FaVolleyballBall } from 'react-icons/fa';
import { SiNintendogamecube } from 'react-icons/si';

import useTopGames from 'api/topGames';
import { useGlobalContext } from 'context/GlobalContext';

import Accordion from 'ui/Accordion';

import DarkModeSwitch from './DarkModeSwitch';
import GameTileSwitch from './GameTileSwitch';

// should be the same and should be separate.
// Because tailwind cannot parse dynamic classnames
export const sideBarWidth = 280;
const sideBarWidthClass = 'w-[280px]';

const Sidebar: React.FC = () => {
  const intl = useIntl();
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const { data } = useTopGames({
    first: 5,
  });

  const categories = [
    {
      label: intl.formatMessage({ id: 'sidebar.category.action', defaultMessage: 'Action' }),
      icon: GiBroadsword,
      link: 'action',
    },
    {
      label: intl.formatMessage({ id: 'sidebar.category.adventure', defaultMessage: 'Adventure' }),
      icon: IoIosRocket,
      link: 'adventure',
    },
    {
      label: intl.formatMessage({ id: 'sidebar.category.casual', defaultMessage: 'Casual' }),
      icon: HiPuzzle,
      link: 'casual',
    },
    {
      label: intl.formatMessage({ id: 'sidebar.category.strategy', defaultMessage: 'Strategy' }),
      icon: GiChessRook,
      link: 'strategy',
    },
    {
      label: intl.formatMessage({ id: 'sidebar.category.intellectual', defaultMessage: 'Intellectual' }),
      icon: SiNintendogamecube,
      link: 'intellectual',
    },
    {
      label: intl.formatMessage({ id: 'sidebar.category.sports', defaultMessage: 'Sports' }),
      icon: FaVolleyballBall,
      link: 'sports',
    },
  ];

  const getLinkClasses = ({ isActive }: { isActive: boolean }) => {
    return classNames(
      'flex items-center',
      'pl-14 py-2 hover:bg-white/50 dark:hover:bg-white/20 block border-l-4',
      {
        'text-text-light dark:text-text-dark bg-black/5 dark:bg-white/5 border-primary': isActive,
        'border-transparent': !isActive,
      },
    );
  };

  return (
    <>
      <Transition
        show={showSidebar && window.innerWidth > 960}
        className={`${sideBarWidthClass} h-full flex-shrink-0`}
        enter="transition-all duration-75"
        enterFrom="w-0"
        enterTo={sideBarWidthClass}
        leave="transition-all duration-150"
        leaveFrom={sideBarWidthClass}
        leaveTo="w-0"
      />

      <Transition
        show={showSidebar && window.innerWidth < 960}
        onClick={() => setShowSidebar(false)}
        className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 transition-opacity"
        enter="transition-all duration-75"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition-all duration-150"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      />

      <Transition
        show={showSidebar}
        className="fixed top-0 bottom-0 z-10"
        enter="transition-all duration-75"
        enterFrom="-left-full"
        enterTo="left-0"
        leave="transition-all duration-150"
        leaveFrom="left-0"
        leaveTo="-left-full"
      >
        <aside className={classNames(
          `h-full ${sideBarWidthClass} overflow-y-auto`,
          'flex flex-col flex-shrink-0 bg-bg-light dark:bg-bg-dark',
        )}
        >
          <div className="flex items-center flex-shrink-0 h-16 border-b border-black/25 dark:border-white/25 px-9">
            <button
              type="button"
              onClick={() => setShowSidebar(false)}
              className="mr-4"
            >
              <FaTimes />
            </button>

            <img
              src={`${process.env.PUBLIC_URL}/images/logo.svg`}
              alt=""
              className="bg-primary h-7 p-1 mr-4 rounded-md"
            />
            <span>
              <FormattedMessage
                id="sidebar.logo.title"
                defaultMessage="UPROAR"
              />
            </span>
            <span
              className={classNames(
                'rounded-md ml-2 px-3',
                'bg-black/10 text-black/70 dark:bg-white/20 dark:text-text-dark',
              )}
            >
              <FormattedMessage
                id="sidebar.logo.beta"
                defaultMessage="beta"
              />
            </span>
          </div>

          <nav className="border-b border-black/25 dark:border-white/25 py-6">
            <ul className="space-y-3 mt-4">
              <li>
                <Accordion
                  label={intl.formatMessage({ id: 'sidebar.nav.games', defaultMessage: 'Games' })}
                  className="px-9"
                >
                  <ul className="py-4 text-text-light-300 dark:text-text-dark-300">
                    {data?.data?.data.map(({ id, name, box_art_url: imgUrl }) => (
                      <li key={id} className="w-full">
                        <Link
                          to="/"
                          className={classNames(
                            'flex items-center',
                            'pl-9 py-2 hover:bg-white/50 dark:hover:bg-white/20',
                          )}
                        >
                          <img
                            src={imgUrl.replace('{width}x{height}', '50x50')}
                            alt={name}
                            className="h-8 w-8 rounded-full mr-5"
                          />
                          <span>{name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </li>
              <li className="px-9">
                <FormattedMessage
                  id="sidebar.nav.all_games"
                  defaultMessage="All Games"
                />
              </li>
              <li>
                <Accordion
                  initialOpen
                  label={intl.formatMessage({ id: 'sidebar.nav.categories', defaultMessage: 'Categories' })}
                  className="px-9"
                >
                  <ul className="py-4 text-text-light-300 dark:text-text-dark-300">
                    {categories.map(({ label, icon: Icon, link }) => (
                      <li key={link} className="w-full">
                        <NavLink
                          to={`/category/${link}`}
                          className={getLinkClasses}
                        >
                          {({ isActive }) => (
                            <>
                              <Icon
                                className={classNames(
                                  'mr-5',
                                  {
                                    'text-primary': isActive,
                                  },
                                )}
                              />
                              <span>{label}</span>
                            </>
                          )}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </li>
              <li className="px-9">
                <FormattedMessage
                  id="sidebar.nav.recommended"
                  defaultMessage="Recommended"
                />
              </li>
              <li className="px-9">
                <FormattedMessage
                  id="sidebar.nav.new"
                  defaultMessage="New!"
                />
              </li>
              <li className="px-9">
                <FormattedMessage
                  id="sidebar.nav.most_played"
                  defaultMessage="Most Played"
                />
              </li>
            </ul>
          </nav>

          <GameTileSwitch />

          <div className="mt-auto px-9 pb-9 pt-5 flex justify-between items-center">
            <FormattedMessage
              id="sidebar.dark_mode"
              defaultMessage="Dark Mode"
            />
            <DarkModeSwitch />
          </div>
        </aside>
      </Transition>

    </>
  );
};

export default Sidebar;
