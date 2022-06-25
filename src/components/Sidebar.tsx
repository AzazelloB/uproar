import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { GiBroadsword, GiChessRook } from 'react-icons/gi';
import { IoIosRocket } from 'react-icons/io';
import { HiPuzzle } from 'react-icons/hi';
import { FaVolleyballBall } from 'react-icons/fa';
import { SiNintendogamecube } from 'react-icons/si';

import Accordion from 'ui/Accordion';

import DarkModeSwitch from './DarkModeSwitch';

const Sidebar: React.FC = () => {
  const categories = [
    {
      label: 'Action',
      icon: GiBroadsword,
      link: 'action',
    },
    {
      label: 'Adventure',
      icon: IoIosRocket,
      link: 'adventure',
    },
    {
      label: 'Casual',
      icon: HiPuzzle,
      link: 'casual',
    },
    {
      label: 'Strategy',
      icon: GiChessRook,
      link: 'strategy',
    },
    {
      label: 'Intellectual',
      icon: SiNintendogamecube,
      link: 'intellectual',
    },
    {
      label: 'Sports',
      icon: FaVolleyballBall,
      link: 'sports',
    },
  ];

  const getLinkClasses = ({ isActive }: { isActive: boolean }) => {
    return classNames(
      'flex items-center',
      'pl-14 py-2 hover:bg-white/50 dark:hover:bg-white/20 block border-l-4 ',
      {
        'text-text-light dark:text-text-dark bg-black/5 dark:bg-white/5 border-primary': isActive,
        'border-transparent': !isActive,
      },
    );
  };

  return (
    <aside className="w-[280px] flex flex-col bg-bg-light dark:bg-bg-dark">
      <div className="flex items-center py-6 border-b border-black/25 dark:border-white/25 px-9">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.svg`}
          alt=""
          className="bg-primary w-10 p-1 mr-4 rounded-md"
        />
        <span>UPROAR</span>
        <span
          className={classNames(
            'rounded-md ml-2 px-3',
            'bg-black/10 text-black/70 dark:bg-white/20 dark:text-text-dark',
          )}
        >
          beta
        </span>
      </div>

      <nav className="border-b border-black/25 dark:border-white/25 py-6">
        <Accordion initialOpen label="Games" className="px-9">
          <ul className="space-y-3 mt-4">
            <li className="px-9">All Games</li>
            <li>
              <Accordion initialOpen label="Categories" className="px-9">
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
            <li className="px-9">Recommended</li>
            <li className="px-9">New!</li>
            <li className="px-9">Most Played</li>
          </ul>
        </Accordion>
      </nav>

      <div className="mt-auto px-9 mb-9 flex justify-between items-center">
        Dark mode
        <DarkModeSwitch />
      </div>
    </aside>
  );
};

export default Sidebar;
